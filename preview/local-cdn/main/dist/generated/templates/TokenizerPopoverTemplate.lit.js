/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} tokenizer-popover="true" style=${styleMap(this.styles.popover)} class=${classMap(this.classes.popover)} ?content-only-on-desktop="${this.noValueStatePopover}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}">${!this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${this._isPhone ? block4.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-list", tags, suffix)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${ifDefined(this.itemDelete)}>${repeat(this._tokens, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>${this._isPhone ? block8.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover tokenizer-popover="true" style=${styleMap(this.styles.popover)} class=${classMap(this.classes.popover)} ?content-only-on-desktop="${this.noValueStatePopover}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}">${!this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${this._isPhone ? block4.call(this, context, tags, suffix) : undefined}<ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${ifDefined(this.itemDelete)}>${repeat(this._tokens, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}</ui5-list>${this._isPhone ? block8.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>`; }
function block1(context, tags, suffix) { return html `<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(this.styles.popoverHeader)}">${!this.noValueStatePopover ? block2.call(this, context, tags, suffix) : undefined}</div>`; }
function block2(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</div>`; }
function block3(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block4(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(this.styles.popoverHeader)}"><div class="row" style="${styleMap(this.styles.popoverHeaderTitle)}"><${scopeTag("ui5-title", tags, suffix)} level="H5" class="ui5-responsive-popover-header-text">${ifDefined(this.morePopoverTitle)}</${scopeTag("ui5-title", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></${scopeTag("ui5-button", tags, suffix)}></div></div>${!this.noValueStatePopover ? block5.call(this, context, tags, suffix) : undefined}` : html `<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(this.styles.popoverHeader)}"><div class="row" style="${styleMap(this.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${ifDefined(this.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></ui5-button></div></div>${!this.noValueStatePopover ? block5.call(this, context, tags, suffix) : undefined}`; }
function block5(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6.call(this, context, tags, suffix, item, index))}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6.call(this, context, tags, suffix, item, index))}</div>`; }
function block6(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block7(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} .tokenRef=${ifDefined(item)} wrapping-type="Normal">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li .tokenRef=${ifDefined(item)} wrapping-type="Normal">${ifDefined(item.text)}</ui5-li>`; }
function block8(context, tags, suffix) { return suffix ? html `<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</ui5-button></div>`; }
export default block0;
//# sourceMappingURL=TokenizerPopoverTemplate.lit.js.map