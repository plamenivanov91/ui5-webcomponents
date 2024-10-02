/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `${this.options ? block1.call(this, context, tags, suffix) : undefined}${this.shouldOpenValueStateMessagePopover ? block10.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} hide-arrow prevent-initial-focus part="popover" placement="Bottom" class="ui5-select-popover ${classMap(this.classes.popover)}" horizontal-align="Start" @ui5-open="${ifDefined(this._afterOpen)}" @ui5-before-open="${ifDefined(this._beforeOpen)}" @ui5-close="${ifDefined(this._afterClose)}" @keydown="${this._onkeydown}" style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block2.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block6.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-list", tags, suffix)} mode="SingleAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${ifDefined(this._handleItemPress)}"><slot></slot></${scopeTag("ui5-list", tags, suffix)}></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover hide-arrow prevent-initial-focus part="popover" placement="Bottom" class="ui5-select-popover ${classMap(this.classes.popover)}" horizontal-align="Start" @ui5-open="${ifDefined(this._afterOpen)}" @ui5-before-open="${ifDefined(this._beforeOpen)}" @ui5-close="${ifDefined(this._afterClose)}" @keydown="${this._onkeydown}" style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block2.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block6.call(this, context, tags, suffix) : undefined}<ui5-list mode="SingleAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${ifDefined(this._handleItemPress)}"><slot></slot></ui5-list></ui5-responsive-popover>`; }
function block2(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></${scopeTag("ui5-button", tags, suffix)}></div>${this.hasValueStateText ? block3.call(this, context, tags, suffix) : undefined}</div>` : html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></ui5-button></div>${this.hasValueStateText ? block3.call(this, context, tags, suffix) : undefined}</div>`; }
function block3(context, tags, suffix) { return html `<div class="${classMap(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.shouldDisplayDefaultValueStateMessage ? block4.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}</div>`; }
function block4(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block5(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
function block6(context, tags, suffix) { return html `${this.hasValueStateText ? block7.call(this, context, tags, suffix) : undefined}`; }
function block7(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.responsivePopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block8.call(this, context, tags, suffix) : block9.call(this, context, tags, suffix)}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block8.call(this, context, tags, suffix) : block9.call(this, context, tags, suffix)}</div>`; }
function block8(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block9(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
function block10(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} part="popover" skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block11.call(this, context, tags, suffix) : block12.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover part="popover" skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block11.call(this, context, tags, suffix) : block12.call(this, context, tags, suffix)}</div></ui5-popover>`; }
function block11(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block12(context, tags, suffix) { return html `<slot name="valueStateMessage"></slot>`; }
export default block0;
//# sourceMappingURL=SelectPopoverTemplate.lit.js.map