import { h, $, reset, addDisposableListener, EventType, getWindow } from '../../../../../base/browser/dom.js';
import { renderLabelWithIcons, renderIcon } from '../../../../../base/browser/ui/iconLabel/iconLabels.js';
import { Codicon } from '../../../../../base/common/codicons.js';
import { MarkdownString } from '../../../../../base/common/htmlContent.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { ThemeIcon } from '../../../../../base/common/themables.js';
import { isDefined } from '../../../../../base/common/types.js';
import { localize } from '../../../../../nls.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { IHoverService } from '../../../../../platform/hover/browser/hover.js';
import { LineRange } from '../../../../common/core/ranges/lineRange.js';
import { Position } from '../../../../common/core/position.js';
import { Range } from '../../../../common/core/range.js';
import { SymbolKinds } from '../../../../common/languages.js';
import { observableCodeEditor } from '../../../observableCodeEditor.js';
import { PlaceholderViewZone, applyObservableDecorations, ViewZoneOverlayWidget, applyStyle } from '../utils.js';
import { observableValue } from '../../../../../base/common/observableInternal/observables/observableValue.js';
import { derivedDisposable, derived } from '../../../../../base/common/observableInternal/observables/derived.js';
import { transaction } from '../../../../../base/common/observableInternal/transaction.js';
import { autorun } from '../../../../../base/common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HideUnchangedRegionsFeature_1;
/**
 * Make sure to add the view zones to the editor!
 */
let HideUnchangedRegionsFeature = class HideUnchangedRegionsFeature extends Disposable {
    static { HideUnchangedRegionsFeature_1 = this; }
    static { this._breadcrumbsSourceFactory = observableValue(this, () => ({
        dispose() {
        },
        getBreadcrumbItems(startRange, reader) {
            return [];
        },
        getAt: () => [],
    })); }
    static setBreadcrumbsSourceFactory(factory) {
        this._breadcrumbsSourceFactory.set(factory, undefined);
    }
    get isUpdatingHiddenAreas() { return this._isUpdatingHiddenAreas; }
    constructor(_editors, _diffModel, _options, _runWithOriginalEditorScrollAnchor, _runWithModifiedEditorScrollAnchor, _variant, _instantiationService) {
        super();
        this._editors = _editors;
        this._diffModel = _diffModel;
        this._options = _options;
        this._runWithOriginalEditorScrollAnchor = _runWithOriginalEditorScrollAnchor;
        this._runWithModifiedEditorScrollAnchor = _runWithModifiedEditorScrollAnchor;
        this._variant = _variant;
        this._instantiationService = _instantiationService;
        this._modifiedOutlineSource = derivedDisposable(this, (reader) => {
            const m = this._editors.modifiedModel.read(reader);
            const factory = HideUnchangedRegionsFeature_1._breadcrumbsSourceFactory.read(reader);
            return (!m || !factory) ? undefined : factory(m, this._instantiationService);
        });
        this._isUpdatingHiddenAreas = false;
        this._register(this._editors.original.onDidChangeCursorPosition(e => {
            if (e.reason === 1 /* CursorChangeReason.ContentFlush */) {
                return;
            }
            const m = this._diffModel.get();
            transaction(tx => {
                for (const s of this._editors.original.getSelections() || []) {
                    m?.ensureOriginalLineIsVisible(s.getStartPosition().lineNumber, 0 /* RevealPreference.FromCloserSide */, tx);
                    m?.ensureOriginalLineIsVisible(s.getEndPosition().lineNumber, 0 /* RevealPreference.FromCloserSide */, tx);
                }
            });
        }));
        this._register(this._editors.modified.onDidChangeCursorPosition(e => {
            if (e.reason === 1 /* CursorChangeReason.ContentFlush */) {
                return;
            }
            const m = this._diffModel.get();
            transaction(tx => {
                for (const s of this._editors.modified.getSelections() || []) {
                    m?.ensureModifiedLineIsVisible(s.getStartPosition().lineNumber, 0 /* RevealPreference.FromCloserSide */, tx);
                    m?.ensureModifiedLineIsVisible(s.getEndPosition().lineNumber, 0 /* RevealPreference.FromCloserSide */, tx);
                }
            });
        }));
        const unchangedRegions = this._diffModel.map((m, reader) => {
            const regions = m?.unchangedRegions.read(reader) ?? [];
            if (regions.length === 1 && regions[0].modifiedLineNumber === 1 && regions[0].lineCount === this._editors.modifiedModel.read(reader)?.getLineCount()) {
                return [];
            }
            return regions;
        });
        this.viewZones = derived(this, (reader) => {
            /** @description view Zones */
            const modifiedOutlineSource = this._modifiedOutlineSource.read(reader);
            if (!modifiedOutlineSource) {
                return { origViewZones: [], modViewZones: [] };
            }
            const origViewZones = [];
            const modViewZones = [];
            const sideBySide = this._options.renderSideBySide.read(reader);
            const compactControl = this._variant === 'compact';
            const compactMode = !compactControl && this._options.compactMode.read(reader);
            const curUnchangedRegions = unchangedRegions.read(reader);
            for (let i = 0; i < curUnchangedRegions.length; i++) {
                const r = curUnchangedRegions[i];
                if (!compactControl && r.shouldHideControls(reader)) {
                    continue;
                }
                if (compactMode && (i === 0 || i === curUnchangedRegions.length - 1)) {
                    continue;
                }
                if (compactMode) {
                    {
                        const d = derived(this, reader => /** @description hiddenOriginalRangeStart */ r.getHiddenOriginalRange(reader).startLineNumber - 1);
                        const origVz = new PlaceholderViewZone(d, 12);
                        origViewZones.push(origVz);
                        reader.store.add(new CompactCollapsedCodeOverlayWidget(this._editors.original, origVz, r, !sideBySide));
                    }
                    {
                        const d = derived(this, reader => /** @description hiddenModifiedRangeStart */ r.getHiddenModifiedRange(reader).startLineNumber - 1);
                        const modViewZone = new PlaceholderViewZone(d, 12);
                        modViewZones.push(modViewZone);
                        reader.store.add(new CompactCollapsedCodeOverlayWidget(this._editors.modified, modViewZone, r));
                    }
                }
                else {
                    {
                        const d = derived(this, reader => /** @description hiddenOriginalRangeStart */ r.getHiddenOriginalRange(reader).startLineNumber - 1);
                        const origVz = new PlaceholderViewZone(d, compactControl ? 40 : 24);
                        origViewZones.push(origVz);
                        reader.store.add(this._instantiationService.createInstance(CollapsedCodeOverlayWidget, this._editors.original, origVz, r, r.originalUnchangedRange, !sideBySide, modifiedOutlineSource, l => this._diffModel.get().ensureModifiedLineIsVisible(l, 2 /* RevealPreference.FromBottom */, undefined), this._options, this._runWithOriginalEditorScrollAnchor, compactControl));
                    }
                    {
                        const d = derived(this, reader => /** @description hiddenModifiedRangeStart */ r.getHiddenModifiedRange(reader).startLineNumber - 1);
                        const modViewZone = new PlaceholderViewZone(d, compactControl ? 40 : 24);
                        modViewZones.push(modViewZone);
                        reader.store.add(this._instantiationService.createInstance(CollapsedCodeOverlayWidget, this._editors.modified, modViewZone, r, r.modifiedUnchangedRange, false, modifiedOutlineSource, l => this._diffModel.get().ensureModifiedLineIsVisible(l, 2 /* RevealPreference.FromBottom */, undefined), this._options, this._runWithModifiedEditorScrollAnchor, compactControl));
                    }
                }
            }
            return { origViewZones, modViewZones, };
        });
        const unchangedLinesDecoration = {
            description: 'unchanged lines',
            className: 'diff-unchanged-lines',
            isWholeLine: true,
        };
        const unchangedLinesDecorationShow = {
            description: 'Fold Unchanged',
            glyphMarginHoverMessage: new MarkdownString(undefined, { isTrusted: true, supportThemeIcons: true })
                .appendMarkdown(localize(139, 'Fold Unchanged Region')),
            glyphMarginClassName: 'fold-unchanged ' + ThemeIcon.asClassName(Codicon.fold),
            zIndex: 10001,
        };
        this._register(applyObservableDecorations(this._editors.original, derived(this, reader => {
            /** @description decorations */
            const curUnchangedRegions = unchangedRegions.read(reader);
            const result = curUnchangedRegions.map(r => ({
                range: r.originalUnchangedRange.toInclusiveRange(),
                options: unchangedLinesDecoration,
            }));
            for (const r of curUnchangedRegions) {
                if (this._variant !== 'compact' && r.shouldHideControls(reader)) {
                    result.push({
                        range: Range.fromPositions(new Position(r.originalLineNumber, 1)),
                        options: unchangedLinesDecorationShow,
                    });
                }
            }
            return result;
        })));
        this._register(applyObservableDecorations(this._editors.modified, derived(this, reader => {
            /** @description decorations */
            const curUnchangedRegions = unchangedRegions.read(reader);
            const result = curUnchangedRegions.map(r => ({
                range: r.modifiedUnchangedRange.toInclusiveRange(),
                options: unchangedLinesDecoration,
            }));
            for (const r of curUnchangedRegions) {
                if (this._variant !== 'compact' && r.shouldHideControls(reader)) {
                    result.push({
                        range: LineRange.ofLength(r.modifiedLineNumber, 1).toInclusiveRange(),
                        options: unchangedLinesDecorationShow,
                    });
                }
            }
            return result;
        })));
        this._register(autorun((reader) => {
            /** @description update folded unchanged regions */
            const curUnchangedRegions = unchangedRegions.read(reader);
            this._isUpdatingHiddenAreas = true;
            try {
                this._editors.original.setHiddenAreas(curUnchangedRegions.map(r => r.getHiddenOriginalRange(reader).toInclusiveRange()).filter(isDefined));
                this._editors.modified.setHiddenAreas(curUnchangedRegions.map(r => r.getHiddenModifiedRange(reader).toInclusiveRange()).filter(isDefined));
            }
            finally {
                this._isUpdatingHiddenAreas = false;
            }
        }));
        this._register(this._editors.modified.onMouseUp(event => {
            if (!event.event.rightButton && event.target.position && event.target.element?.className.includes('fold-unchanged')) {
                const lineNumber = event.target.position.lineNumber;
                const model = this._diffModel.get();
                if (!model) {
                    return;
                }
                const region = model.unchangedRegions.get().find(r => r.modifiedUnchangedRange.contains(lineNumber));
                if (!region) {
                    return;
                }
                region.collapseAll(undefined);
                event.event.stopPropagation();
                event.event.preventDefault();
            }
        }));
        this._register(this._editors.original.onMouseUp(event => {
            if (!event.event.rightButton && event.target.position && event.target.element?.className.includes('fold-unchanged')) {
                const lineNumber = event.target.position.lineNumber;
                const model = this._diffModel.get();
                if (!model) {
                    return;
                }
                const region = model.unchangedRegions.get().find(r => r.originalUnchangedRange.contains(lineNumber));
                if (!region) {
                    return;
                }
                region.collapseAll(undefined);
                event.event.stopPropagation();
                event.event.preventDefault();
            }
        }));
    }
};
HideUnchangedRegionsFeature = HideUnchangedRegionsFeature_1 = __decorate([
    __param(6, IInstantiationService)
], HideUnchangedRegionsFeature);
class CompactCollapsedCodeOverlayWidget extends ViewZoneOverlayWidget {
    constructor(editor, _viewZone, _unchangedRegion, _hide = false) {
        const root = h('div.diff-hidden-lines-widget');
        super(editor, _viewZone, root.root);
        this._unchangedRegion = _unchangedRegion;
        this._hide = _hide;
        this._nodes = h('div.diff-hidden-lines-compact', [
            h('div.line-left', []),
            h('div.text@text', []),
            h('div.line-right', [])
        ]);
        root.root.appendChild(this._nodes.root);
        if (this._hide) {
            this._nodes.root.replaceChildren();
        }
        this._register(autorun(reader => {
            /** @description update labels */
            if (!this._hide) {
                const lineCount = this._unchangedRegion.getHiddenModifiedRange(reader).length;
                const linesHiddenText = localize(140, '{0} hidden lines', lineCount);
                this._nodes.text.innerText = linesHiddenText;
            }
        }));
    }
}
let CollapsedCodeOverlayWidget = class CollapsedCodeOverlayWidget extends ViewZoneOverlayWidget {
    constructor(_editor, _viewZone, _unchangedRegion, _unchangedRegionRange, _hide, _modifiedOutlineSource, _revealModifiedHiddenLine, _options, _runWithScrollAnchor, _compactControl, _hoverService) {
        const root = h('div.diff-hidden-lines-widget');
        super(_editor, _viewZone, root.root);
        this._editor = _editor;
        this._unchangedRegion = _unchangedRegion;
        this._unchangedRegionRange = _unchangedRegionRange;
        this._hide = _hide;
        this._modifiedOutlineSource = _modifiedOutlineSource;
        this._revealModifiedHiddenLine = _revealModifiedHiddenLine;
        this._options = _options;
        this._runWithScrollAnchor = _runWithScrollAnchor;
        this._compactControl = _compactControl;
        this._hoverService = _hoverService;
        this._nodes = h('div.diff-hidden-lines', [
            h('div.top@top', { title: localize(141, 'Click or drag to show more above') }),
            h('div.center@content', { style: { display: 'flex' } }, [
                h('div.disclosure-toggle@toggle'),
                h('div.first@first', { style: { display: 'flex', alignItems: 'center', flexShrink: '0' } }, [
                    h('span.line-number-control@lineNumberControl', { 'aria-hidden': 'true' }),
                    $('a.default-control', { title: localize(142, 'Show Unchanged Region'), role: 'button', onclick: () => { this._unchangedRegion.showAll(undefined); } }, ...renderLabelWithIcons('$(unfold)'))
                ]),
                h('div.content-row@others', { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }),
            ]),
            h('div.bottom@bottom', { title: localize(143, 'Click or drag to show more below'), role: 'button' }),
        ]);
        root.root.appendChild(this._nodes.root);
        this._nodes.root.classList.toggle('diff-hidden-lines-disclosure', this._compactControl);
        if (!this._hide) {
            const editorLayout = observableCodeEditor(this._editor);
            this._register(applyStyle(this._nodes.first, { width: editorLayout.layoutInfoContentLeft }));
            if (this._compactControl) {
                this._register(autorun(reader => {
                    const layoutInfo = editorLayout.layoutInfo.read(reader);
                    this._nodes.lineNumberControl.style.left = `${layoutInfo.lineNumbersLeft}px`;
                    this._nodes.lineNumberControl.style.width = `${layoutInfo.lineNumbersWidth}px`;
                }));
            }
        }
        else {
            reset(this._nodes.first);
        }
        if (this._compactControl && !this._hide) {
            this._nodes.toggle.tabIndex = 0;
            this._nodes.toggle.setAttribute('role', 'button');
            this._register(this._hoverService.setupDelayedHover(this._nodes.toggle, () => ({
                content: this._nodes.toggle.getAttribute('aria-label'),
            })));
            this._register(addDisposableListener(this._nodes.toggle, EventType.CLICK, () => this._toggleAll()));
            this._register(addDisposableListener(this._nodes.toggle, EventType.KEY_DOWN, e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!e.repeat) {
                        this._toggleAll();
                    }
                }
            }));
        }
        this._register(autorun(reader => {
            /** @description Update CollapsedCodeOverlayWidget canMove* css classes */
            const isFullyRevealed = this._unchangedRegion.visibleLineCountTop.read(reader) + this._unchangedRegion.visibleLineCountBottom.read(reader) === this._unchangedRegion.lineCount;
            if (this._compactControl && !this._hide) {
                const actionLabel = isFullyRevealed
                    ? localize(144, 'Collapse unchanged lines')
                    : localize(145, 'Show {0} hidden lines', this._unchangedRegion.getHiddenModifiedRange(reader).length);
                this._nodes.toggle.setAttribute('aria-expanded', String(isFullyRevealed));
                this._nodes.toggle.setAttribute('aria-label', actionLabel);
                reset(this._nodes.lineNumberControl, ...renderLabelWithIcons(isFullyRevealed ? '$(fold)' : '$(unfold)'));
            }
            this._nodes.bottom.classList.toggle('canMoveTop', !isFullyRevealed);
            this._nodes.bottom.classList.toggle('canMoveBottom', this._unchangedRegion.visibleLineCountBottom.read(reader) > 0);
            this._nodes.top.classList.toggle('canMoveTop', this._unchangedRegion.visibleLineCountTop.read(reader) > 0);
            this._nodes.top.classList.toggle('canMoveBottom', !isFullyRevealed);
            const isDragged = this._unchangedRegion.isDragged.read(reader);
            const domNode = this._editor.getDomNode();
            if (domNode) {
                domNode.classList.toggle('draggingUnchangedRegion', !!isDragged);
                if (isDragged === 'top') {
                    domNode.classList.toggle('canMoveTop', this._unchangedRegion.visibleLineCountTop.read(reader) > 0);
                    domNode.classList.toggle('canMoveBottom', !isFullyRevealed);
                }
                else if (isDragged === 'bottom') {
                    domNode.classList.toggle('canMoveTop', !isFullyRevealed);
                    domNode.classList.toggle('canMoveBottom', this._unchangedRegion.visibleLineCountBottom.read(reader) > 0);
                }
                else {
                    domNode.classList.toggle('canMoveTop', false);
                    domNode.classList.toggle('canMoveBottom', false);
                }
            }
        }));
        const editor = this._editor;
        this._register(addDisposableListener(this._nodes.top, 'mousedown', e => {
            if (e.button !== 0) {
                return;
            }
            this._nodes.top.classList.toggle('dragging', true);
            this._nodes.root.classList.toggle('dragging', true);
            e.preventDefault();
            const startTop = e.clientY;
            let didMove = false;
            const cur = this._unchangedRegion.visibleLineCountTop.get();
            this._unchangedRegion.isDragged.set('top', undefined);
            const window = getWindow(this._nodes.top);
            const mouseMoveListener = addDisposableListener(window, 'mousemove', e => {
                const currentTop = e.clientY;
                const delta = currentTop - startTop;
                didMove = didMove || Math.abs(delta) > 2;
                const lineDelta = Math.round(delta / editor.getOption(75 /* EditorOption.lineHeight */));
                const newVal = Math.max(0, Math.min(cur + lineDelta, this._unchangedRegion.getMaxVisibleLineCountTop()));
                this._unchangedRegion.visibleLineCountTop.set(newVal, undefined);
            });
            const mouseUpListener = addDisposableListener(window, 'mouseup', e => {
                if (!didMove) {
                    if (this._compactControl && this._isFullyRevealed()) {
                        this._unchangedRegion.collapseAll(undefined);
                    }
                    else {
                        this._unchangedRegion.showMoreAbove(this._options.hideUnchangedRegionsRevealLineCount.get(), undefined);
                    }
                }
                this._nodes.top.classList.toggle('dragging', false);
                this._nodes.root.classList.toggle('dragging', false);
                this._unchangedRegion.isDragged.set(undefined, undefined);
                mouseMoveListener.dispose();
                mouseUpListener.dispose();
            });
        }));
        this._register(addDisposableListener(this._nodes.bottom, 'mousedown', e => {
            if (e.button !== 0) {
                return;
            }
            this._nodes.bottom.classList.toggle('dragging', true);
            this._nodes.root.classList.toggle('dragging', true);
            e.preventDefault();
            const startTop = e.clientY;
            let didMove = false;
            const cur = this._unchangedRegion.visibleLineCountBottom.get();
            this._unchangedRegion.isDragged.set('bottom', undefined);
            const window = getWindow(this._nodes.bottom);
            const mouseMoveListener = addDisposableListener(window, 'mousemove', e => {
                const currentTop = e.clientY;
                const delta = currentTop - startTop;
                didMove = didMove || Math.abs(delta) > 2;
                const lineDelta = Math.round(delta / editor.getOption(75 /* EditorOption.lineHeight */));
                const newVal = Math.max(0, Math.min(cur - lineDelta, this._unchangedRegion.getMaxVisibleLineCountBottom()));
                if (newVal === this._unchangedRegion.visibleLineCountBottom.get()) {
                    return;
                }
                this._runWithLowerScrollAnchor(() => this._unchangedRegion.visibleLineCountBottom.set(newVal, undefined));
            });
            const mouseUpListener = addDisposableListener(window, 'mouseup', e => {
                this._unchangedRegion.isDragged.set(undefined, undefined);
                if (!didMove) {
                    if (this._compactControl && this._isFullyRevealed()) {
                        this._unchangedRegion.collapseAll(undefined);
                    }
                    else {
                        this._runWithLowerScrollAnchor(() => this._unchangedRegion.showMoreBelow(this._options.hideUnchangedRegionsRevealLineCount.get(), undefined));
                    }
                }
                this._nodes.bottom.classList.toggle('dragging', false);
                this._nodes.root.classList.toggle('dragging', false);
                mouseMoveListener.dispose();
                mouseUpListener.dispose();
            });
        }));
        this._register(autorun(reader => {
            /** @description update labels */
            const children = [];
            if (!this._hide) {
                const isFullyRevealed = this._isFullyRevealed(reader);
                const lineCount = _unchangedRegion.getHiddenModifiedRange(reader).length;
                const linesHiddenText = localize(146, '{0} hidden lines', lineCount);
                const span = $('span', this._compactControl ? undefined : { title: localize(147, 'Double click to unfold') }, this._compactControl && isFullyRevealed ? localize(148, 'Collapse unchanged lines') : linesHiddenText);
                if (!this._compactControl) {
                    reader.store.add(addDisposableListener(span, EventType.DBLCLICK, e => {
                        if (e.button !== 0) {
                            return;
                        }
                        e.preventDefault();
                        this._unchangedRegion.showAll(undefined);
                    }));
                }
                children.push(span);
                const range = this._unchangedRegion.getHiddenModifiedRange(reader);
                const items = isFullyRevealed ? [] : this._modifiedOutlineSource.getBreadcrumbItems(range, reader);
                if (items.length > 0) {
                    children.push($('span', undefined, this._compactControl ? '\u00a0\u00b7\u00a0' : '\u00a0\u00a0|\u00a0\u00a0'));
                    for (let i = 0; i < items.length; i++) {
                        const item = items[i];
                        const icon = SymbolKinds.toIcon(item.kind);
                        const divItem = h('div.breadcrumb-item', {
                            style: { display: 'flex', alignItems: 'center' },
                        }, [
                            renderIcon(icon),
                            '\u00a0',
                            h('span.breadcrumb-label', [item.name]).root,
                            ...(i === items.length - 1
                                ? []
                                : [renderIcon(Codicon.chevronRight)])
                        ]).root;
                        children.push(divItem);
                        const revealBreadcrumb = (event) => {
                            event.stopPropagation();
                            this._revealModifiedHiddenLine(item.startLineNumber);
                        };
                        reader.store.add(addDisposableListener(divItem, EventType.CLICK, revealBreadcrumb));
                        if (this._compactControl) {
                            const label = localize(149, 'Go to {0}', item.name);
                            divItem.tabIndex = 0;
                            divItem.setAttribute('role', 'button');
                            divItem.setAttribute('aria-label', label);
                            reader.store.add(this._hoverService.setupDelayedHover(divItem, { content: label }));
                            reader.store.add(addDisposableListener(divItem, EventType.KEY_DOWN, e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    revealBreadcrumb(e);
                                }
                            }));
                        }
                    }
                }
            }
            if (this._compactControl && children.length > 0) {
                const content = h('div.disclosure-content', children).root;
                reader.store.add(this._hoverService.setupDelayedHover(content, { content: content.textContent ?? '' }));
                reset(this._nodes.others, h('div.line-left').root, content, h('div.line-right').root);
            }
            else {
                reset(this._nodes.others, ...children);
            }
        }));
    }
    _toggleAll() {
        if (this._isFullyRevealed()) {
            this._unchangedRegion.collapseAll(undefined);
        }
        else {
            this._unchangedRegion.showAll(undefined);
        }
    }
    _isFullyRevealed(reader) {
        return this._unchangedRegion.visibleLineCountTop.read(reader)
            + this._unchangedRegion.visibleLineCountBottom.read(reader)
            === this._unchangedRegion.lineCount;
    }
    _runWithLowerScrollAnchor(update) {
        const anchorLineNumber = this._unchangedRegionRange.endLineNumberExclusive;
        if (this._runWithScrollAnchor) {
            this._runWithScrollAnchor(anchorLineNumber, update);
            return;
        }
        const scrollTop = this._editor.getScrollTop();
        const top = this._getTopForLineNumber(anchorLineNumber);
        update();
        this._editor.setScrollTop(scrollTop + this._getTopForLineNumber(anchorLineNumber) - top);
    }
    _getTopForLineNumber(lineNumber) {
        return lineNumber > this._editor.getModel().getLineCount()
            ? this._editor.getContentHeight()
            : this._editor.getTopForLineNumber(lineNumber);
    }
};
CollapsedCodeOverlayWidget = __decorate([
    __param(10, IHoverService)
], CollapsedCodeOverlayWidget);

export { HideUnchangedRegionsFeature };
