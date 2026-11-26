import { n } from '../../../../../../../base/browser/dom.js';
import { KeybindingLabel } from '../../../../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import { RunOnceScheduler } from '../../../../../../../base/common/async.js';
import { Disposable } from '../../../../../../../base/common/lifecycle.js';
import '../../../../../../../base/common/observableInternal/index.js';
import { OS } from '../../../../../../../base/common/platform.js';
import { IContextKeyService } from '../../../../../../../platform/contextkey/common/contextkey.js';
import { IKeybindingService } from '../../../../../../../platform/keybinding/common/keybinding.js';
import { defaultKeybindingLabelStyles } from '../../../../../../../platform/theme/browser/defaultStyles.js';
import { asCssVariable } from '../../../../../../../platform/theme/common/colorUtils.js';
import { IThemeService } from '../../../../../../../platform/theme/common/themeService.js';
import { Rect } from '../../../../../../common/core/2d/rect.js';
import { Range } from '../../../../../../common/core/range.js';
import { inlineSuggestCommitId } from '../../../controller/commandIds.js';
import { getEditorBlendedColor, inlineEditIndicatorPrimaryBorder, inlineEditIndicatorPrimaryForeground, inlineEditIndicatorPrimaryBackground } from '../theme.js';
import { rectToProps } from '../utils/utils.js';
import { derived } from '../../../../../../../base/common/observableInternal/observables/derived.js';
import { constObservable } from '../../../../../../../base/common/observableInternal/observables/constObservable.js';
import { DebugLocation } from '../../../../../../../base/common/observableInternal/debugLocation.js';
import { observableFromEvent } from '../../../../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { autorun } from '../../../../../../../base/common/observableInternal/reactions/autorun.js';

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
let JumpToView = class JumpToView extends Disposable {
    constructor(_editor, options, _data, _themeService, _keybindingService, _contextKeyService) {
        super();
        this._editor = _editor;
        this._data = _data;
        this._themeService = _themeService;
        this._keybindingService = _keybindingService;
        this._contextKeyService = _contextKeyService;
        this._styles = derived(this, reader => ({
            background: getEditorBlendedColor(inlineEditIndicatorPrimaryBackground, this._themeService).read(reader).toString(),
            foreground: getEditorBlendedColor(inlineEditIndicatorPrimaryForeground, this._themeService).read(reader).toString(),
            border: getEditorBlendedColor(inlineEditIndicatorPrimaryBorder, this._themeService).read(reader).toString(),
        }));
        this._pos = derived(this, reader => {
            return this._editor.observePosition(derived(reader => this._data.read(reader)?.jumpToPosition || null), reader.store);
        }).flatten();
        this._layout = derived(this, reader => {
            const data = this._data.read(reader);
            if (!data) {
                return undefined;
            }
            const position = data.jumpToPosition;
            const lineHeight = this._editor.observeLineHeightForLine(constObservable(position.lineNumber)).read(reader);
            const scrollLeft = this._editor.scrollLeft.read(reader);
            const point = this._pos.read(reader);
            if (!point) {
                return undefined;
            }
            const layout = this._editor.layoutInfo.read(reader);
            const widgetRect = Rect.fromLeftTopWidthHeight(point.x + layout.contentLeft + 2 - scrollLeft, point.y, 100, lineHeight);
            return {
                widgetRect,
            };
        });
        this._blink = animateFixedValues([
            { value: true, durationMs: 600 },
            { value: false, durationMs: 600 },
        ]);
        this._widget = n.div({
            class: 'inline-edit-jump-to-widget',
            style: {
                position: 'absolute',
                display: this._layout.map(l => l ? 'flex' : 'none'),
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                ...rectToProps(reader => this._layout.read(reader)?.widgetRect),
            }
        }, derived(reader => {
            if (this._data.read(reader) === undefined) {
                return [];
            }
            // Main content container with rounded border
            return n.div({
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '0 4px',
                    height: '100%',
                    backgroundColor: this._styles.map(s => s.background),
                    ['--vscodeIconForeground']: this._styles.map(s => s.foreground),
                    border: this._styles.map(s => `1px solid ${s.border}`),
                    borderRadius: '3px',
                    boxSizing: 'border-box',
                    fontSize: '11px',
                    color: this._styles.map(s => s.foreground),
                }
            }, [
                this._style === 'cursor' ?
                    n.elem('div', {
                        style: {
                            borderLeft: '2px solid',
                            height: 14,
                            opacity: this._blink.map(b => b ? '0' : '1'),
                        }
                    }) :
                    [
                        derived(() => n.elem('div', {}, keybindingLabel(this._keybinding))),
                        n.elem('div', { style: { lineHeight: this._layout.map(l => l?.widgetRect.height), marginTop: '-2px' } }, ['to jump',])
                    ],
            ]);
        }));
        this._style = options.style;
        this._keybinding = this._getKeybinding(inlineSuggestCommitId);
        const widget = this._widget.keepUpdated(this._store);
        this._register(this._editor.createOverlayWidget({
            domNode: widget.element,
            position: constObservable(null),
            allowEditorOverflow: false,
            minContentWidthInPx: constObservable(0),
        }));
        this._register(this._editor.setDecorations(derived(reader => {
            const data = this._data.read(reader);
            if (!data) {
                return [];
            }
            // use injected text at position
            return [{
                    range: Range.fromPositions(data.jumpToPosition, data.jumpToPosition),
                    options: {
                        description: 'inline-edit-jump-to-decoration',
                        inlineClassNameAffectsLetterSpacing: true,
                        showIfCollapsed: true,
                        after: {
                            content: this._style === 'label' ? '          ' : '  ',
                        }
                    },
                }];
        })));
    }
    _getKeybinding(commandId, debugLocation = DebugLocation.ofCaller()) {
        if (!commandId) {
            return constObservable(undefined);
        }
        return observableFromEvent(this, this._contextKeyService.onDidChangeContext, () => this._keybindingService.lookupKeybinding(commandId), debugLocation);
        // TODO: use contextkeyservice to use different renderings
    }
};
JumpToView = __decorate([
    __param(3, IThemeService),
    __param(4, IKeybindingService),
    __param(5, IContextKeyService)
], JumpToView);
function animateFixedValues(values, debugLocation = DebugLocation.ofCaller()) {
    let idx = 0;
    return observableFromEvent(undefined, (l) => {
        idx = 0;
        const timer = new RunOnceScheduler(() => {
            idx = (idx + 1) % values.length;
            l(null);
            timer.schedule(values[idx].durationMs);
        }, 0);
        timer.schedule(0);
        return timer;
    }, () => {
        return values[idx].value;
    }, debugLocation);
}
function keybindingLabel(keybinding) {
    return derived(_reader => n.div({
        style: {},
        ref: elem => {
            const keybindingLabel = _reader.store.add(new KeybindingLabel(elem, OS, {
                disableTitle: true,
                ...defaultKeybindingLabelStyles,
                keybindingLabelShadow: undefined,
                keybindingLabelForeground: asCssVariable(inlineEditIndicatorPrimaryForeground),
                keybindingLabelBackground: 'transparent',
                keybindingLabelBorder: asCssVariable(inlineEditIndicatorPrimaryForeground),
                keybindingLabelBottomBorder: undefined,
            }));
            _reader.store.add(autorun(reader => {
                keybindingLabel.set(keybinding.read(reader));
            }));
        }
    }));
}

export { JumpToView };
