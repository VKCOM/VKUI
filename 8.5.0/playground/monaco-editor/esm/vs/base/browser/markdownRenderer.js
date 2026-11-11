import { onUnexpectedError } from '../common/errors.js';
import { isUNC } from '../common/extpath.js';
import { isPortableLinkTarget, parseHrefAndDimensions, escapeDoubleQuotes, removeMarkdownEscapes } from '../common/htmlContent.js';
import { markdownEscapeEscapedIcons } from '../common/iconLabels.js';
import { defaultGenerator } from '../common/idGenerator.js';
import { DisposableStore } from '../common/lifecycle.js';
import { Marked, lexer, Lexer as _Lexer, parse as parse$1, Renderer as _Renderer } from '../common/marked/marked.js';
import { parse } from '../common/marshalling.js';
import { Schemas, FileAccess } from '../common/network.js';
import { cloneAndChange } from '../common/objects.js';
import '../common/path.js';
import { resolvePath, dirname } from '../common/resources.js';
import { escape } from '../common/strings.js';
import { URI } from '../common/uri.js';
import { reset, addDisposableListener, getWindow, isHTMLElement, copyAttributes } from './dom.js';
import { basicMarkupHtmlTags, safeSetInnerHtml, convertTagToPlaintext, sanitizeHtml } from './domSanitize.js';
import { StandardKeyboardEvent } from './keyboardEvent.js';
import { StandardMouseEvent } from './mouseEvent.js';
import { renderLabelWithIcons, renderIcon } from './ui/iconLabel/iconLabels.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Returns a human-readable tooltip string for a link href.
 * For file:// URIs, converts to a decoded OS file system path to avoid
 * showing raw URL-encoded paths (e.g. "C:\Users\..." instead of "file:///c%3A/Users/...").
 */
function getLinkTitle(href) {
    try {
        const parsed = URI.parse(href);
        if (parsed.scheme === Schemas.file) {
            const path = parsed.fsPath;
            const fragment = parsed.fragment;
            return escapeDoubleQuotes(fragment ? `${path}#${fragment}` : path);
        }
    }
    catch {
        // fall through
    }
    return '';
}
function renderImage({ href, title, text }, transformUri) {
    let dimensions = [];
    let attributes = [];
    if (href) {
        ({ href, dimensions } = parseHrefAndDimensions(href));
        href = transformUri?.(href) ?? href;
        attributes.push(`src="${escapeDoubleQuotes(href)}"`);
    }
    if (text) {
        attributes.push(`alt="${escapeDoubleQuotes(text)}"`);
    }
    if (title) {
        attributes.push(`title="${escapeDoubleQuotes(title)}"`);
    }
    if (dimensions.length) {
        attributes = attributes.concat(dimensions);
    }
    return '<img ' + attributes.join(' ') + '>';
}
const defaultMarkedRenderers = Object.freeze({
    image: renderImage,
    paragraph({ tokens }) {
        return `<p>${this.parser.parseInline(tokens)}</p>`;
    },
    link({ href, title, tokens }) {
        let text = this.parser.parseInline(tokens);
        if (typeof href !== 'string') {
            return '';
        }
        // Remove markdown escapes. Workaround for https://github.com/chjj/marked/issues/829
        if (href === text) { // raw link case
            text = removeMarkdownEscapes(text);
        }
        title = typeof title === 'string' ? escapeDoubleQuotes(removeMarkdownEscapes(title)) : '';
        href = removeMarkdownEscapes(href);
        // For file:// URIs without an explicit title, show the decoded OS path instead of
        // the raw URL-encoded URI (e.g. display "C:\Users\..." instead of "file:///c%3A/Users/...")
        if (!title && href.startsWith(`${Schemas.file}:`)) {
            title = getLinkTitle(href);
        }
        // For command: URIs without an explicit title, avoid exposing the raw
        // command string as a title/tooltip — screen readers announce it as
        // redundant technical information (see #321416).
        const isCommandUri = href.startsWith(`${Schemas.command}:`);
        // HTML Encode href
        href = href.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        const effectiveTitle = title || (isCommandUri ? '' : href);
        return `<a href="${href}" title="${effectiveTitle}" draggable="false">${text}</a>`;
    },
});
/**
 * Blockquote renderer that processes GitHub-style alert syntax.
 * Transforms blockquotes like "> [!NOTE]" into structured alert markup with icons.
 *
 * Based on GitHub's alert syntax: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
 */
function createAlertBlockquoteRenderer(fallbackRenderer) {
    return function (token) {
        const { tokens } = token;
        // Check if this blockquote starts with alert syntax [!TYPE]
        const firstToken = tokens[0];
        if (firstToken?.type !== 'paragraph') {
            return fallbackRenderer.call(this, token);
        }
        const paragraphTokens = firstToken.tokens;
        if (!paragraphTokens || paragraphTokens.length === 0) {
            return fallbackRenderer.call(this, token);
        }
        const firstTextToken = paragraphTokens[0];
        if (firstTextToken?.type !== 'text') {
            return fallbackRenderer.call(this, token);
        }
        const pattern = /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*?\n*/i;
        const match = firstTextToken.raw.match(pattern);
        if (!match) {
            return fallbackRenderer.call(this, token);
        }
        // Remove the alert marker from the token
        firstTextToken.raw = firstTextToken.raw.replace(pattern, '');
        firstTextToken.text = firstTextToken.text.replace(pattern, '');
        const alertIcons = {
            'note': 'info',
            'tip': 'light-bulb',
            'important': 'comment',
            'warning': 'alert',
            'caution': 'stop'
        };
        const type = match[1];
        const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
        const severity = type.toLowerCase();
        const iconHtml = renderIcon({ id: alertIcons[severity] }).outerHTML;
        // Render the remaining content
        const content = this.parser.parse(tokens);
        // Return alert markup with icon and severity (skipping the first 3 characters: `<p>`)
        return `<blockquote data-severity="${severity}"><p><span>${iconHtml}${typeCapitalized}</span>${content.substring(3)}</blockquote>\n`;
    };
}
/**
 * Low-level way create a html element from a markdown string.
 *
 * **Note** that for most cases you should be using {@link import('../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js').MarkdownRenderer MarkdownRenderer}
 * which comes with support for pretty code block rendering and which uses the default way of handling links.
 */
function renderMarkdown(markdown, options = {}, target) {
    const disposables = new DisposableStore();
    let isDisposed = false;
    const markedInstance = new Marked(...(options.markedExtensions ?? []));
    const { renderer, codeBlocks, syncCodeBlocks } = createMarkdownRenderer(markedInstance, options, markdown);
    const value = preprocessMarkdownString(markdown);
    let renderedMarkdown;
    if (options.fillInIncompleteTokens) {
        // The defaults are applied by parse but not lexer()/parser(), and they need to be present
        const opts = {
            ...markedInstance.defaults,
            ...options.markedOptions,
            renderer
        };
        const tokens = markedInstance.lexer(value, opts);
        const newTokens = fillInIncompleteTokens(tokens);
        renderedMarkdown = markedInstance.parser(newTokens, opts);
    }
    else {
        renderedMarkdown = markedInstance.parse(value, { ...options?.markedOptions, renderer, async: false });
    }
    // Rewrite theme icons
    if (markdown.supportThemeIcons) {
        const elements = renderLabelWithIcons(renderedMarkdown);
        renderedMarkdown = elements.map(e => typeof e === 'string' ? e : e.outerHTML).join('');
    }
    const renderedContent = document.createElement('div');
    const sanitizerConfig = getDomSanitizerConfig(markdown, options.sanitizerConfig ?? {});
    safeSetInnerHtml(renderedContent, renderedMarkdown, sanitizerConfig);
    // Rewrite links and images before potentially inserting them into the real dom
    rewriteRenderedLinks(markdown, options, renderedContent);
    let outElement;
    if (target) {
        outElement = target;
        if (syncCodeBlocks.some(([, element]) => target.contains(element))) {
            replaceChildrenPreservingCodeBlocks(target, renderedContent, syncCodeBlocks);
        }
        else {
            reset(target, ...renderedContent.childNodes);
        }
    }
    else {
        outElement = renderedContent;
    }
    if (codeBlocks.length > 0) {
        Promise.all(codeBlocks).then((tuples) => {
            if (isDisposed) {
                return;
            }
            const renderedElements = new Map(tuples);
            // eslint-disable-next-line no-restricted-syntax
            const placeholderElements = outElement.querySelectorAll(`div[data-code]`);
            for (const placeholderElement of placeholderElements) {
                const renderedElement = renderedElements.get(placeholderElement.dataset['code'] ?? '');
                if (renderedElement) {
                    reset(placeholderElement, renderedElement);
                }
            }
            options.asyncRenderCallback?.();
        });
    }
    else if (syncCodeBlocks.length > 0) {
        const renderedElements = new Map(syncCodeBlocks);
        // eslint-disable-next-line no-restricted-syntax
        const placeholderElements = outElement.querySelectorAll(`div[data-code]`);
        for (const placeholderElement of placeholderElements) {
            const renderedElement = renderedElements.get(placeholderElement.dataset['code'] ?? '');
            if (renderedElement && (placeholderElement.childNodes.length !== 1 || placeholderElement.firstChild !== renderedElement)) {
                reset(placeholderElement, renderedElement);
            }
        }
    }
    // Signal size changes for image tags
    if (options.asyncRenderCallback) {
        // eslint-disable-next-line no-restricted-syntax
        for (const img of outElement.getElementsByTagName('img')) {
            const listener = disposables.add(addDisposableListener(img, 'load', () => {
                listener.dispose();
                options.asyncRenderCallback();
            }));
        }
    }
    // Add event listeners for links
    if (options.actionHandler) {
        const clickCb = (e) => {
            const mouseEvent = new StandardMouseEvent(getWindow(outElement), e);
            if (!mouseEvent.leftButton && !mouseEvent.middleButton) {
                return;
            }
            activateLink(markdown, options, mouseEvent);
        };
        disposables.add(addDisposableListener(outElement, 'click', clickCb));
        disposables.add(addDisposableListener(outElement, 'auxclick', clickCb));
        disposables.add(addDisposableListener(outElement, 'keydown', (e) => {
            const keyboardEvent = new StandardKeyboardEvent(e);
            if (!keyboardEvent.equals(10 /* KeyCode.Space */) && !keyboardEvent.equals(3 /* KeyCode.Enter */)) {
                return;
            }
            activateLink(markdown, options, keyboardEvent);
        }));
    }
    // Remove/disable inputs
    // eslint-disable-next-line no-restricted-syntax
    for (const input of [...outElement.getElementsByTagName('input')]) {
        if (input.attributes.getNamedItem('type')?.value === 'checkbox') {
            input.setAttribute('disabled', '');
        }
        else {
            if (options.sanitizerConfig?.replaceWithPlaintext) {
                const replacement = convertTagToPlaintext(input);
                if (replacement) {
                    input.parentElement?.replaceChild(replacement, input);
                }
                else {
                    input.remove();
                }
            }
            else {
                input.remove();
            }
        }
    }
    return {
        element: outElement,
        dispose: () => {
            isDisposed = true;
            disposables.dispose();
        }
    };
}
/** Keeps reused code blocks and their matching ancestors connected so embedded iframes do not reload. */
function replaceChildrenPreservingCodeBlocks(target, source, codeBlocks) {
    const renderedElements = new Map(codeBlocks);
    const replacements = new Map();
    const existingToNew = new Map();
    const preservedCodeBlocks = new Set();
    // eslint-disable-next-line no-restricted-syntax
    for (const placeholder of source.querySelectorAll('div[data-code]')) {
        const renderedElement = renderedElements.get(placeholder.dataset.code ?? '');
        if (!renderedElement || !target.contains(renderedElement)) {
            continue;
        }
        let existing = renderedElement.parentElement;
        if (!existing?.hasAttribute('data-code') || existing.childNodes.length !== 1) {
            continue;
        }
        let incoming = placeholder;
        const ancestors = [];
        while (existing && incoming && existing !== target && incoming !== source
            && existing.tagName === incoming.tagName
            && (!replacements.has(incoming) || replacements.get(incoming) === existing)
            && (!existingToNew.has(existing) || existingToNew.get(existing) === incoming)) {
            ancestors.push([incoming, existing]);
            existing = existing.parentElement;
            incoming = incoming.parentElement;
        }
        if (existing === target && incoming === source) {
            for (const [newElement, existingElement] of ancestors) {
                replacements.set(newElement, existingElement);
                existingToNew.set(existingElement, newElement);
            }
            preservedCodeBlocks.add(placeholder);
        }
    }
    if (replacements.size === 0) {
        reset(target, ...source.childNodes);
        return;
    }
    const updateChildren = (parent, newParent) => {
        const children = Array.from(newParent.childNodes, child => {
            if (!isHTMLElement(child)) {
                return child;
            }
            const replacement = replacements.get(child);
            if (!replacement) {
                return child;
            }
            for (const name of replacement.getAttributeNames()) {
                if (!child.hasAttribute(name)) {
                    replacement.removeAttribute(name);
                }
            }
            copyAttributes(child, replacement);
            if (!preservedCodeBlocks.has(child)) {
                updateChildren(replacement, child);
            }
            return replacement;
        });
        const retainedChildren = new Set(children);
        for (const child of Array.from(parent.childNodes)) {
            if (!retainedChildren.has(child)) {
                parent.removeChild(child);
            }
        }
        let cursor = parent.firstChild;
        for (const child of children) {
            if (cursor === child) {
                cursor = cursor.nextSibling;
            }
            else {
                parent.insertBefore(child, cursor);
            }
        }
    };
    updateChildren(target, source);
}
function rewriteRenderedLinks(markdown, options, root) {
    // eslint-disable-next-line no-restricted-syntax
    for (const el of root.querySelectorAll('img, audio, video, source')) {
        const src = el.getAttribute('src'); // Get the raw 'src' attribute value as text, not the resolved 'src'
        if (src) {
            let href = src;
            try {
                if (markdown.baseUri) { // absolute or relative local path, or file: uri
                    href = resolveWithBaseUri(URI.from(markdown.baseUri), href);
                }
            }
            catch (err) { }
            el.setAttribute('src', massageHref(markdown, href, true));
        }
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const el of root.querySelectorAll('a')) {
        const href = el.getAttribute('href'); // Get the raw 'href' attribute value as text, not the resolved 'href'
        el.setAttribute('href', ''); // Clear out href. We use the `data-href` for handling clicks instead
        if (!href
            || /^data:|javascript:/i.test(href)
            || (/^command:/i.test(href) && !markdown.isTrusted)
            || /^command:(\/\/\/)?_workbench\.downloadResource/i.test(href)) {
            // drop the link
            el.replaceWith(...el.childNodes);
        }
        else {
            let resolvedHref = massageHref(markdown, href, false);
            if (markdown.baseUri) {
                resolvedHref = resolveWithBaseUri(URI.from(markdown.baseUri), href);
            }
            el.dataset.href = resolvedHref;
            // Leaving `href` empty makes the browser resolve it against the workbench document
            // when serializing a copy, so every pasted link became a `workbench.html` URL. Only
            // restore it where an action handler intercepts clicks and routes them through the
            // opener; without one the anchor would navigate natively.
            if (options.actionHandler && isPortableLinkTarget(resolvedHref)) {
                el.setAttribute('href', resolvedHref);
            }
        }
    }
}
function createMarkdownRenderer(marked, options, markdown) {
    const renderer = new marked.Renderer(options.markedOptions);
    renderer.image = token => renderImage(token, href => options.transformUri?.(href, 'image') ?? href);
    renderer.link = token => defaultMarkedRenderers.link.call(renderer, {
        ...token,
        href: options.transformUri?.(token.href, 'link') ?? token.href,
    });
    renderer.paragraph = defaultMarkedRenderers.paragraph;
    if (markdown.supportAlertSyntax) {
        renderer.blockquote = createAlertBlockquoteRenderer(renderer.blockquote);
    }
    // Will collect [id, renderedElement] tuples
    const codeBlocks = [];
    const syncCodeBlocks = [];
    if (options.codeBlockRendererSync) {
        renderer.code = ({ text, lang, raw }) => {
            const id = defaultGenerator.nextId();
            const value = options.codeBlockRendererSync(postProcessCodeBlockLanguageId(lang), text, raw);
            syncCodeBlocks.push([id, value]);
            return `<div class="code" data-code="${id}">${escape(text)}</div>`;
        };
    }
    else if (options.codeBlockRenderer) {
        renderer.code = ({ text, lang }) => {
            const id = defaultGenerator.nextId();
            const value = options.codeBlockRenderer(postProcessCodeBlockLanguageId(lang), text);
            codeBlocks.push(value.then(element => [id, element]));
            return `<div class="code" data-code="${id}">${escape(text)}</div>`;
        };
    }
    if (!markdown.supportHtml) {
        // Note: we always pass the output through dompurify after this so that we don't rely on
        // marked for real sanitization.
        renderer.html = ({ text }) => {
            if (options.sanitizerConfig?.replaceWithPlaintext) {
                return escape(text);
            }
            const match = markdown.isTrusted ? text.match(/^(<span[^>]+>)|(<\/\s*span>)$/) : undefined;
            return match ? text : '';
        };
    }
    return { renderer, codeBlocks, syncCodeBlocks };
}
function preprocessMarkdownString(markdown) {
    let value = markdown.value;
    // values that are too long will freeze the UI
    if (value.length > 100_000) {
        value = `${value.substr(0, 100_000)}…`;
    }
    // escape theme icons
    if (markdown.supportThemeIcons) {
        value = markdownEscapeEscapedIcons(value);
    }
    return value;
}
function activateLink(mdStr, options, event) {
    const target = event.target.closest('a[data-href]');
    if (!isHTMLElement(target)) {
        return;
    }
    try {
        let href = target.dataset['href'];
        if (href) {
            if (mdStr.baseUri) {
                href = resolveWithBaseUri(URI.from(mdStr.baseUri), href);
            }
            options.actionHandler?.(href, mdStr);
        }
    }
    catch (err) {
        onUnexpectedError(err);
    }
    finally {
        event.preventDefault();
        event.stopPropagation();
    }
}
function uriMassage(markdown, part) {
    let data;
    try {
        data = parse(decodeURIComponent(part));
    }
    catch (e) {
        // ignore
    }
    if (!data) {
        return part;
    }
    data = cloneAndChange(data, value => {
        if (markdown.uris && markdown.uris[value]) {
            return URI.revive(markdown.uris[value]);
        }
        else {
            return undefined;
        }
    });
    return encodeURIComponent(JSON.stringify(data));
}
function massageHref(markdown, href, isDomUri) {
    const data = markdown.uris && markdown.uris[href];
    let uri = URI.revive(data);
    if (isDomUri) {
        if (href.startsWith(Schemas.data + ':')) {
            return href;
        }
        if (!uri) {
            uri = URI.parse(href);
        }
        // this URI will end up as "src"-attribute of a dom node
        // and because of that special rewriting needs to be done
        // so that the URI uses a protocol that's understood by
        // browsers (like http or https)
        return FileAccess.uriToBrowserUri(uri).toString(true);
    }
    if (!uri) {
        return href;
    }
    if (URI.parse(href).toString() === uri.toString()) {
        return href; // no transformation performed
    }
    if (uri.query) {
        uri = uri.with({ query: uriMassage(markdown, uri.query) });
    }
    return uri.toString();
}
function postProcessCodeBlockLanguageId(lang) {
    if (!lang) {
        return '';
    }
    const parts = lang.split(/[\s+|:|,|\{|\?]/, 1);
    if (parts.length) {
        return parts[0];
    }
    return lang;
}
function resolveWithBaseUri(baseUri, href) {
    const hasScheme = /^\w[\w\d+.-]*:/.test(href);
    if (hasScheme) {
        return href;
    }
    if (baseUri.path.endsWith('/')) {
        return resolvePath(baseUri, href).toString();
    }
    else {
        return resolvePath(dirname(baseUri), href).toString();
    }
}
function isLocalFileUri(uri) {
    return uri.scheme === Schemas.file && !uri.authority && !isUNC(uri.fsPath);
}
function isMediaSourceAllowed(mdStrConfig, source, remoteImageIsAllowed) {
    let uri;
    try {
        const baseUri = mdStrConfig.baseUri ? URI.from(mdStrConfig.baseUri) : undefined;
        const hasScheme = /^\w[\w\d+.-]*:/.test(source);
        if (!hasScheme && baseUri?.scheme === Schemas.file && !isLocalFileUri(baseUri)) {
            return false;
        }
        const href = baseUri ? resolveWithBaseUri(baseUri, source) : source;
        uri = URI.parse(href);
    }
    catch {
        return false;
    }
    return isLocalFileUri(uri) || uri.scheme === Schemas.data || remoteImageIsAllowed(uri);
}
function sanitizeRenderedMarkdown(renderedMarkdown, originalMdStrConfig, options = {}) {
    const sanitizerConfig = getDomSanitizerConfig(originalMdStrConfig, options);
    return sanitizeHtml(renderedMarkdown, sanitizerConfig);
}
const allowedMarkdownHtmlTags = Object.freeze([
    ...basicMarkupHtmlTags,
    'input', // Allow inputs for rendering checkboxes. Other types of inputs are removed and the inputs are always disabled
]);
const allowedMarkdownHtmlAttributes = Object.freeze([
    'align',
    'autoplay',
    'alt',
    'colspan',
    'controls',
    'draggable',
    'height',
    'href',
    'loop',
    'muted',
    'playsinline',
    'poster',
    'rowspan',
    'src',
    'target',
    'title',
    'type',
    'width',
    'start',
    // Input (For disabled inputs)
    'checked',
    'disabled',
    'value',
    // Custom markdown attributes
    'data-code',
    'data-href',
    'data-severity',
    // Only allow very specific styles
    {
        attributeName: 'style',
        shouldKeep: (element, data) => {
            if (element.tagName === 'SPAN') {
                if (data.attrName === 'style') {
                    return /^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(display\:inline-block;)?(border-radius:[0-9]+px;)?$/.test(data.attrValue);
                }
            }
            return false;
        }
    },
    // Only allow codicons for classes
    {
        attributeName: 'class',
        shouldKeep: (element, data) => {
            if (element.tagName === 'SPAN') {
                if (data.attrName === 'class') {
                    return /^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(data.attrValue);
                }
            }
            return false;
        },
    },
]);
function getDomSanitizerConfig(mdStrConfig, options) {
    const isTrusted = mdStrConfig.isTrusted ?? false;
    const remoteImageIsAllowed = options.remoteImageIsAllowed;
    const allowedLinkSchemes = [
        Schemas.http,
        Schemas.https,
        Schemas.mailto,
        Schemas.file,
        Schemas.vscodeFileResource,
        Schemas.vscodeRemote,
        Schemas.vscodeRemoteResource,
        Schemas.vscodeNotebookCell,
        // For links that are handled entirely by the action handler
        Schemas.internal,
    ];
    if (isTrusted) {
        allowedLinkSchemes.push(Schemas.command);
    }
    if (options.allowedLinkSchemes?.augment) {
        allowedLinkSchemes.push(...options.allowedLinkSchemes.augment);
    }
    return {
        // allowedTags should included everything that markdown renders to.
        // Since we have our own sanitize function for marked, it's possible we missed some tag so let dompurify make sure.
        // HTML tags that can result from markdown are from reading https://spec.commonmark.org/0.29/
        // HTML table tags that can result from markdown are from https://github.github.com/gfm/#tables-extension-
        allowedTags: {
            override: options.allowedTags?.override ?? allowedMarkdownHtmlTags
        },
        allowedAttributes: {
            override: options.allowedAttributes?.override ?? allowedMarkdownHtmlAttributes,
        },
        allowedLinkProtocols: {
            override: allowedLinkSchemes,
        },
        allowRelativeLinkPaths: !!mdStrConfig.baseUri,
        allowedMediaProtocols: {
            override: [
                Schemas.http,
                Schemas.https,
                Schemas.data,
                Schemas.file,
                Schemas.vscodeFileResource,
                Schemas.vscodeRemote,
                Schemas.vscodeRemoteResource,
            ]
        },
        allowRelativeMediaPaths: !!mdStrConfig.baseUri,
        mediaSourceIsAllowed: remoteImageIsAllowed ? source => isMediaSourceAllowed(mdStrConfig, source, remoteImageIsAllowed) : undefined,
        replaceWithPlaintext: options.replaceWithPlaintext,
    };
}
/**
 * Renders `str` as plaintext, stripping out Markdown syntax if it's a {@link IMarkdownString}.
 *
 * For example `# Header` would be output as `Header`.
 */
function renderAsPlaintext(str, options) {
    if (typeof str === 'string') {
        return str;
    }
    // values that are too long will freeze the UI
    let value = str.value ?? '';
    if (value.length > 100_000) {
        value = `${value.substr(0, 100_000)}…`;
    }
    const renderer = createPlainTextRenderer();
    const html = parse$1(value, { async: false, renderer });
    return sanitizeRenderedMarkdown(html, { isTrusted: false }, {})
        .toString()
        .replace(/&(#\d+|[a-zA-Z]+);/g, m => unescapeInfo.get(m) ?? m)
        .trim();
}
const unescapeInfo = new Map([
    ['&quot;', '"'],
    ['&nbsp;', ' '],
    ['&amp;', '&'],
    ['&#39;', '\''],
    ['&lt;', '<'],
    ['&gt;', '>'],
]);
function createPlainTextRenderer() {
    const renderer = new _Renderer();
    renderer.code = ({ text }) => {
        return escape(text);
    };
    renderer.blockquote = ({ text }) => {
        return text + '\n';
    };
    renderer.html = (_) => {
        return '';
    };
    renderer.heading = function ({ tokens }) {
        return this.parser.parseInline(tokens) + '\n';
    };
    renderer.hr = () => {
        return '';
    };
    renderer.list = function ({ items }) {
        return items.map(x => this.listitem(x)).join('\n') + '\n';
    };
    renderer.listitem = ({ text }) => {
        return text + '\n';
    };
    renderer.paragraph = function ({ tokens }) {
        return this.parser.parseInline(tokens) + '\n';
    };
    renderer.table = function ({ header, rows }) {
        return header.map(cell => this.tablecell(cell)).join(' ') + '\n' + rows.map(cells => cells.map(cell => this.tablecell(cell)).join(' ')).join('\n') + '\n';
    };
    renderer.tablerow = ({ text }) => {
        return text;
    };
    renderer.tablecell = function ({ tokens }) {
        return this.parser.parseInline(tokens);
    };
    renderer.strong = ({ text }) => {
        return text;
    };
    renderer.em = ({ text }) => {
        return text;
    };
    renderer.codespan = ({ text }) => {
        return text;
    };
    renderer.br = (_) => {
        return '\n';
    };
    renderer.del = ({ text }) => {
        return text;
    };
    renderer.image = (_) => {
        return '';
    };
    renderer.text = ({ text }) => {
        return text;
    };
    renderer.link = ({ text }) => {
        return text;
    };
    return renderer;
}
function mergeRawTokenText(tokens) {
    let mergedTokenText = '';
    tokens.forEach(token => {
        mergedTokenText += token.raw;
    });
    return mergedTokenText;
}
function completeSingleLinePattern(token) {
    if (!token.tokens) {
        return undefined;
    }
    for (let i = token.tokens.length - 1; i >= 0; i--) {
        const subtoken = token.tokens[i];
        if (subtoken.type === 'text') {
            const lines = subtoken.raw.split('\n');
            const lastLine = lines[lines.length - 1];
            // An incomplete link target must be completed before emphasis/codespan. The link is the
            // innermost unfinished construct, so any emphasis marker (e.g. the `**` in `**[text](htt`)
            // belongs to an enclosing span. Completing the emphasis first would leave the link broken.
            if (
            // Text with start of link target
            hasLinkTextAndStartOfLinkTarget(lastLine) ||
                // This token doesn't have the link text, eg if it contains other markdown constructs that are in other subtokens.
                // But some preceding token does have an unbalanced [ at least
                hasStartOfLinkTargetAndNoLinkText(lastLine) && token.tokens.slice(0, i).some(t => t.type === 'text' && t.raw.match(/\[[^\]]*$/))) {
                const nextTwoSubTokens = token.tokens.slice(i + 1);
                // A markdown link can look like
                // [link text](https://microsoft.com "more text")
                // Where "more text" is a title for the link or an argument to a vscode command link
                if (
                // If the link was parsed as a link, then look for a link token and a text token with a quote
                nextTwoSubTokens[0]?.type === 'link' && nextTwoSubTokens[1]?.type === 'text' && nextTwoSubTokens[1].raw.match(/^ *"[^"]*$/) ||
                    // And if the link was not parsed as a link (eg command link), just look for a single quote in this token
                    lastLine.match(/^[^"]* +"[^"]*$/)) {
                    return completeLinkTargetArg(token);
                }
                return completeLinkTarget(token);
            }
            else if (lastLine.includes('`')) {
                return completeCodespan(token);
            }
            else if (lastLine.includes('**')) {
                return completeDoublestar(token);
            }
            else if (lastLine.match(/\*\w/)) {
                return completeStar(token);
            }
            else if (lastLine.match(/(^|\s)__\w/)) {
                return completeDoubleUnderscore(token);
            }
            else if (lastLine.match(/(^|\s)_\w/)) {
                return completeUnderscore(token);
            }
            // Contains the start of link text, and no following tokens contain the link target
            else if (lastLine.match(/(^|\s)\[\w*[^\]]*$/)) {
                return completeLinkText(token);
            }
        }
    }
    return undefined;
}
function hasLinkTextAndStartOfLinkTarget(str) {
    // Allow links after opening parentheses and emphasis/strikethrough markers, such as `**[text](htt`.
    return !!str.match(/(?:^|[\s(*_~])\[.*\]\(\w*/);
}
function hasStartOfLinkTargetAndNoLinkText(str) {
    return !!str.match(/^[^\[]*\]\([^\)]*$/);
}
function completeBlockquotePattern(blockquote, links) {
    let lastInterestingIndex = blockquote.tokens.length - 1;
    while (lastInterestingIndex >= 0 && blockquote.tokens[lastInterestingIndex].type === 'space') {
        lastInterestingIndex--;
    }
    const lastToken = blockquote.tokens[lastInterestingIndex];
    if (lastToken?.type !== 'paragraph') {
        return undefined;
    }
    const completedToken = completeSingleLinePattern(lastToken);
    if (!completedToken) {
        return undefined;
    }
    const completion = completedToken.raw.slice(lastToken.raw.trimEnd().length);
    const trailingQuoteOnlyLines = blockquote.raw.match(/(?:\n[ \t]*>[ \t]*(?=\n|$))+\n?$/)?.[0] ?? '';
    const insertionIndex = blockquote.raw.length - trailingQuoteOnlyLines.length;
    const completedRaw = blockquote.raw.slice(0, insertionIndex) + completion + trailingQuoteOnlyLines;
    const lexer = new _Lexer();
    lexer.tokens.links = links;
    const completedBlockquote = lexer.lex(completedRaw)[0];
    if (completedBlockquote.type === 'blockquote') {
        return completedBlockquote;
    }
    return undefined;
}
function completeListItemPattern(list) {
    // Patch up this one list item
    const lastListItem = list.items[list.items.length - 1];
    const lastListSubToken = lastListItem.tokens ? lastListItem.tokens[lastListItem.tokens.length - 1] : undefined;
    /*
    Example list token structures:

    list
        list_item
            text
                text
                codespan
                link
        list_item
            text
            code // Complete indented codeblock
        list_item
            text
            space
            text
                text // Incomplete indented codeblock
        list_item
            text
            list // Nested list
                list_item
                    text
                        text

    Contrast with paragraph:
    paragraph
        text
        codespan
    */
    const listEndsInHeading = (list) => {
        // A list item can be rendered as a heading for some reason when it has a subitem where we haven't rendered the text yet like this:
        // 1. list item
        //    -
        const lastItem = list.items.at(-1);
        const lastToken = lastItem?.tokens.at(-1);
        return lastToken?.type === 'heading' || lastToken?.type === 'list' && listEndsInHeading(lastToken);
    };
    let newToken;
    if (lastListSubToken?.type === 'text' && !('inRawBlock' in lastListItem)) { // Why does Tag have a type of 'text'
        newToken = completeSingleLinePattern(lastListSubToken);
    }
    else if (listEndsInHeading(list)) {
        const newList = lexer(list.raw.trim() + ' &nbsp;')[0];
        if (newList.type !== 'list') {
            // Something went wrong
            return;
        }
        return newList;
    }
    if (!newToken || newToken.type !== 'paragraph') { // 'text' item inside the list item turns into paragraph
        // Nothing to fix, or not a pattern we were expecting
        return;
    }
    const previousListItemsText = mergeRawTokenText(list.items.slice(0, -1));
    // Grabbing the `- ` or `1. ` or `* ` off the list item because I can't find a better way to do this
    const lastListItemLead = lastListItem.raw.match(/^(\s*(-|\d+\.|\*) +)/)?.[0];
    if (!lastListItemLead) {
        // Is badly formatted
        return;
    }
    const newListItemText = lastListItemLead +
        mergeRawTokenText(lastListItem.tokens.slice(0, -1)) +
        newToken.raw;
    const newList = lexer(previousListItemsText + newListItemText)[0];
    if (newList.type !== 'list') {
        // Something went wrong
        return;
    }
    return newList;
}
function completeHeading(token, fullRawText) {
    if (token.raw.match(/-\s*$/)) {
        return lexer(fullRawText + ' &nbsp;');
    }
}
const maxIncompleteTokensFixRounds = 3;
function fillInIncompleteTokens(tokens) {
    for (let i = 0; i < maxIncompleteTokensFixRounds; i++) {
        const newTokens = fillInIncompleteTokensOnce(tokens);
        if (newTokens) {
            tokens = newTokens;
        }
        else {
            break;
        }
    }
    return tokens;
}
function fillInIncompleteTokensOnce(tokens) {
    let i;
    let newTokens;
    for (i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.type === 'paragraph' && token.raw.match(/(\n|^)\|/)) {
            newTokens = completeTable(tokens.slice(i));
            break;
        }
    }
    // Find the last "interesting" token, skipping trailing `space` and `html`
    // tokens. Callers like the chat content renderer wrap markdown in
    // `<body>...</body>` (so dompurify keeps leading comments), which leaves
    // `</body>` as the literal last token — without this skip, the
    // paragraph / list fixups never fire for that content.
    let lastInterestingIdx = tokens.length - 1;
    while (lastInterestingIdx >= 0 && (tokens[lastInterestingIdx].type === 'space' || tokens[lastInterestingIdx].type === 'html')) {
        lastInterestingIdx--;
    }
    const lastInterestingToken = lastInterestingIdx >= 0 ? tokens[lastInterestingIdx] : undefined;
    const trailingTokens = tokens.slice(lastInterestingIdx + 1);
    if (!newTokens && lastInterestingToken?.type === 'list') {
        const newListToken = completeListItemPattern(lastInterestingToken);
        if (newListToken) {
            newTokens = [newListToken, ...trailingTokens];
            i = lastInterestingIdx;
        }
    }
    if (!newTokens && lastInterestingToken?.type === 'blockquote') {
        const newBlockquoteToken = completeBlockquotePattern(lastInterestingToken, tokens.links);
        if (newBlockquoteToken) {
            newTokens = [newBlockquoteToken, ...trailingTokens];
            i = lastInterestingIdx;
        }
    }
    if (!newTokens && lastInterestingToken?.type === 'paragraph') {
        // Only operates on a single token, because any newline that follows this should break these patterns
        const newToken = completeSingleLinePattern(lastInterestingToken);
        if (newToken) {
            newTokens = [newToken, ...trailingTokens];
            i = lastInterestingIdx;
        }
    }
    if (newTokens) {
        const newTokensList = [
            ...tokens.slice(0, i),
            ...newTokens
        ];
        newTokensList.links = tokens.links;
        return newTokensList;
    }
    const lastToken = tokens.at(-1);
    if (lastToken?.type === 'heading') {
        const completeTokens = completeHeading(lastToken, mergeRawTokenText(tokens));
        if (completeTokens) {
            return completeTokens;
        }
    }
    return null;
}
function completeCodespan(token) {
    return completeWithString(token, '`');
}
function completeStar(tokens) {
    return completeWithString(tokens, '*');
}
function completeUnderscore(tokens) {
    return completeWithString(tokens, '_');
}
function completeLinkTarget(tokens) {
    return completeWithString(tokens, ')', false);
}
function completeLinkTargetArg(tokens) {
    return completeWithString(tokens, '")', false);
}
function completeLinkText(tokens) {
    return completeWithString(tokens, '](https://microsoft.com)', false);
}
function completeDoublestar(tokens) {
    return completeWithString(tokens, '**');
}
function completeDoubleUnderscore(tokens) {
    return completeWithString(tokens, '__');
}
function completeWithString(tokens, closingString, shouldTrim = true) {
    const mergedRawText = mergeRawTokenText(Array.isArray(tokens) ? tokens : [tokens]);
    // If it was completed correctly, this should be a single token.
    // Expecting either a Paragraph or a List
    const trimmedRawText = shouldTrim ? mergedRawText.trimEnd() : mergedRawText;
    return lexer(trimmedRawText + closingString)[0];
}
function completeTable(tokens) {
    const mergedRawText = mergeRawTokenText(tokens);
    const lines = mergedRawText.split('\n');
    let numCols; // The number of line1 col headers
    let hasSeparatorRow = false;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (typeof numCols === 'undefined' && line.match(/^\s*\|/)) {
            const line1Matches = line.match(/(\|[^\|]+)(?=\||$)/g);
            if (line1Matches) {
                numCols = line1Matches.length;
            }
        }
        else if (typeof numCols === 'number') {
            if (line.match(/^\s*\|/)) {
                if (i !== lines.length - 1) {
                    // We got the line1 header row, and the line2 separator row, but there are more lines, and it wasn't parsed as a table!
                    // That's strange and means that the table is probably malformed in the source, so I won't try to patch it up.
                    return undefined;
                }
                // Got a line2 separator row- partial or complete, doesn't matter, we'll replace it with a correct one
                hasSeparatorRow = true;
            }
            else {
                // The line after the header row isn't a valid separator row, so the table is malformed, don't fix it up
                return undefined;
            }
        }
    }
    if (typeof numCols === 'number' && numCols > 0) {
        const prefixText = hasSeparatorRow ? lines.slice(0, -1).join('\n') : mergedRawText;
        const line1EndsInPipe = !!prefixText.match(/\|\s*$/);
        const newRawText = prefixText + (line1EndsInPipe ? '' : '|') + `\n|${' --- |'.repeat(numCols)}`;
        return lexer(newRawText);
    }
    return undefined;
}

export { allowedMarkdownHtmlAttributes, allowedMarkdownHtmlTags, fillInIncompleteTokens, renderAsPlaintext, renderMarkdown };
