/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-input-root ui5-input-focusable-element" part="root" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><span id="hiddenText-nMore" class="ui5-hidden-text">${ifDefined(this._tokensCountText)}</span><${scopeTag("ui5-tokenizer", tags, suffix)} class="ui5-multi-input-tokenizer" .opener=${ifDefined(this.morePopoverOpener)} .popoverMinWidth=${ifDefined(this._inputWidth)} hide-popover-arrow ?expanded="${this.tokenizerExpanded}" @keydown="${this._onTokenizerKeydown}" @ui5-token-delete=${ifDefined(this.tokenDelete)} @focusout="${this._tokenizerFocusOut}">${repeat(this.tokens, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-tokenizer", tags, suffix)}><input id="inner" part="input" class="ui5-input-inner" style="${styleMap(this.styles.innerInput)}" type="${ifDefined(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${ifDefined(this._innerValue)}" placeholder="${ifDefined(this._placeholder)}" maxlength="${ifDefined(this.maxlength)}" role="${ifDefined(this.accInfo.input.role)}" aria-controls="${ifDefined(this.accInfo.input.ariaControls)}" aria-invalid="${ifDefined(this.accInfo.input.ariaInvalid)}" aria-haspopup="${ifDefined(this.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(this.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(this.accInfo.input.ariaLabel)}" aria-required="${ifDefined(this.required)}" autocomplete="off" @input="${this._handleInput}" @change="${this._handleChange}" @select="${this._handleSelect}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${ifDefined(this.nativeInputAttributes.step)}" min="${ifDefined(this.nativeInputAttributes.min)}" max="${ifDefined(this.nativeInputAttributes.max)}" />${this._effectiveShowClearIcon ? block2.call(this, context, tags, suffix) : undefined}${this.icon.length ? block3.call(this, context, tags, suffix) : undefined}<div class="ui5-input-value-state-icon">${unsafeHTML(this._valueStateInputIcon)}</div>${this.showValueHelpIcon ? block4.call(this, context, tags, suffix) : undefined}${this._effectiveShowSuggestions ? block5.call(this, context, tags, suffix) : undefined}${this.accInfo.input.ariaDescription ? block6.call(this, context, tags, suffix) : undefined}${this.hasValueState ? block7.call(this, context, tags, suffix) : undefined}</div></div>${this._effectiveShowSuggestions ? block8.call(this, context, tags, suffix) : undefined}${this.hasValueStateMessage ? block20.call(this, context, tags, suffix) : undefined} ` : html `<div class="ui5-input-root ui5-input-focusable-element" part="root" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><span id="hiddenText-nMore" class="ui5-hidden-text">${ifDefined(this._tokensCountText)}</span><ui5-tokenizer class="ui5-multi-input-tokenizer" .opener=${ifDefined(this.morePopoverOpener)} .popoverMinWidth=${ifDefined(this._inputWidth)} hide-popover-arrow ?expanded="${this.tokenizerExpanded}" @keydown="${this._onTokenizerKeydown}" @ui5-token-delete=${ifDefined(this.tokenDelete)} @focusout="${this._tokenizerFocusOut}">${repeat(this.tokens, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</ui5-tokenizer><input id="inner" part="input" class="ui5-input-inner" style="${styleMap(this.styles.innerInput)}" type="${ifDefined(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${ifDefined(this._innerValue)}" placeholder="${ifDefined(this._placeholder)}" maxlength="${ifDefined(this.maxlength)}" role="${ifDefined(this.accInfo.input.role)}" aria-controls="${ifDefined(this.accInfo.input.ariaControls)}" aria-invalid="${ifDefined(this.accInfo.input.ariaInvalid)}" aria-haspopup="${ifDefined(this.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(this.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(this.accInfo.input.ariaLabel)}" aria-required="${ifDefined(this.required)}" autocomplete="off" @input="${this._handleInput}" @change="${this._handleChange}" @select="${this._handleSelect}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${ifDefined(this.nativeInputAttributes.step)}" min="${ifDefined(this.nativeInputAttributes.min)}" max="${ifDefined(this.nativeInputAttributes.max)}" />${this._effectiveShowClearIcon ? block2.call(this, context, tags, suffix) : undefined}${this.icon.length ? block3.call(this, context, tags, suffix) : undefined}<div class="ui5-input-value-state-icon">${unsafeHTML(this._valueStateInputIcon)}</div>${this.showValueHelpIcon ? block4.call(this, context, tags, suffix) : undefined}${this._effectiveShowSuggestions ? block5.call(this, context, tags, suffix) : undefined}${this.accInfo.input.ariaDescription ? block6.call(this, context, tags, suffix) : undefined}${this.hasValueState ? block7.call(this, context, tags, suffix) : undefined}</div></div>${this._effectiveShowSuggestions ? block8.call(this, context, tags, suffix) : undefined}${this.hasValueStateMessage ? block20.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item._individualSlot)}"></slot>`; }
function block2(context, tags, suffix) { return suffix ? html `<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1"><${scopeTag("ui5-icon", tags, suffix)} part="clear-icon" tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1"><ui5-icon part="clear-icon" tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></ui5-icon></div>`; }
function block3(context, tags, suffix) { return html `<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} @click=${this.valueHelpPress} @mousedown=${this.valueHelpMouseDown} @mouseup=${this.valueHelpMouseUp} class="inputIcon" name="value-help" accessible-name="${ifDefined(this.valueHelpLabel)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon @click=${this.valueHelpPress} @mousedown=${this.valueHelpMouseDown} @mouseup=${this.valueHelpMouseUp} class="inputIcon" name="value-help" accessible-name="${ifDefined(this.valueHelpLabel)}"></ui5-icon>`; }
function block5(context, tags, suffix) { return html `<span id="suggestionsText" class="ui5-hidden-text">${ifDefined(this.suggestionsText)}</span><span id="selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="suggestionsCount" class="ui5-hidden-text" aria-live="polite">${ifDefined(this.availableSuggestionsCount)}</span>`; }
function block6(context, tags, suffix) { return html `<span id="descr" class="ui5-hidden-text">${ifDefined(this.accInfo.input.ariaDescription)}</span>`; }
function block7(context, tags, suffix) { return html `<span id="valueStateDesc" class="ui5-hidden-text">${ifDefined(this.ariaValueStateHiddenText)}</span>`; }
function block8(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} class="${classMap(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${ifDefined(this._afterOpenPicker)}" @ui5-close="${ifDefined(this._afterClosePicker)}" @ui5-scroll="${ifDefined(this._scroll)}" .open=${ifDefined(this.open)} .opener=${ifDefined(this)} accessible-name="${ifDefined(this._popupLabel)}">${this._isPhone ? block9.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block14.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-list", tags, suffix)} separators="${ifDefined(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${ifDefined(this._handleSuggestionItemPress)}" @ui5-selection-change="${ifDefined(this._handleSelectionChange)}"><slot></slot></${scopeTag("ui5-list", tags, suffix)}>${this._isPhone ? block19.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover class="${classMap(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${ifDefined(this._afterOpenPicker)}" @ui5-close="${ifDefined(this._afterClosePicker)}" @ui5-scroll="${ifDefined(this._scroll)}" .open=${ifDefined(this.open)} .opener=${ifDefined(this)} accessible-name="${ifDefined(this._popupLabel)}">${this._isPhone ? block9.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block14.call(this, context, tags, suffix) : undefined}<ui5-list separators="${ifDefined(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${ifDefined(this._handleSuggestionItemPress)}" @ui5-selection-change="${ifDefined(this._handleSelectionChange)}"><slot></slot></ui5-list>${this._isPhone ? block19.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>`; }
function block9(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></${scopeTag("ui5-button", tags, suffix)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${scopeTag("ui5-input", tags, suffix)} class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></${scopeTag("ui5-input", tags, suffix)}></div></div></div>${this.hasValueStateMessage ? block10.call(this, context, tags, suffix) : undefined}` : html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></ui5-input></div></div></div>${this.hasValueStateMessage ? block10.call(this, context, tags, suffix) : undefined}`; }
function block10(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.open ? block11.call(this, context, tags, suffix) : undefined}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block11.call(this, context, tags, suffix) : undefined}</div>`; }
function block11(context, tags, suffix) { return html `${this.shouldDisplayDefaultValueStateMessage ? block12.call(this, context, tags, suffix) : block13.call(this, context, tags, suffix)}`; }
function block12(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block13(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
function block14(context, tags, suffix) { return html `${this.hasValueStateMessage ? block15.call(this, context, tags, suffix) : undefined}`; }
function block15(context, tags, suffix) { return suffix ? html `<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.open ? block16.call(this, context, tags, suffix) : undefined}</div>` : html `<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block16.call(this, context, tags, suffix) : undefined}</div>`; }
function block16(context, tags, suffix) { return html `${this.shouldDisplayDefaultValueStateMessage ? block17.call(this, context, tags, suffix) : block18.call(this, context, tags, suffix)}`; }
function block17(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block18(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
function block19(context, tags, suffix) { return suffix ? html `<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closePicker}">OK</${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closePicker}">OK</ui5-button></div>`; }
function block20(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" .opener=${ifDefined(this)} .open=${ifDefined(this.valueStateOpen)} @ui5-close="${ifDefined(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.valueStateOpen ? block21.call(this, context, tags, suffix) : undefined}</div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" .opener=${ifDefined(this)} .open=${ifDefined(this.valueStateOpen)} @ui5-close="${ifDefined(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.valueStateOpen ? block21.call(this, context, tags, suffix) : undefined}</div></ui5-popover>`; }
function block21(context, tags, suffix) { return html `${this.shouldDisplayDefaultValueStateMessage ? block22.call(this, context, tags, suffix) : block23.call(this, context, tags, suffix)}`; }
function block22(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block23(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
export default block0;
//# sourceMappingURL=MultiInputTemplate.lit.js.map