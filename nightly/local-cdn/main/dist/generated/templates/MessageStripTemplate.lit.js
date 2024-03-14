/* eslint no-unused-vars: 0 */
import { html, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="${classMap(this.classes.root)}" id="${ifDefined(this._id)}" role="note" aria-labelledby="${ifDefined(this._id)}">${!this.hideIcon ? block1.call(this, context, tags, suffix) : undefined}<span class="ui5-hidden-text">${ifDefined(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${!this.hideCloseButton ? block4.call(this, context, tags, suffix) : undefined}</div>`; }
function block1(context, tags, suffix) { return html `<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div>`; }
function block2(context, tags, suffix) { return html `<slot name="icon"></slot>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.standardIconName)}" class="ui5-message-strip-icon"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon name="${ifDefined(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${ifDefined(this._closeButtonText)}" @click=${this._closeClick}></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${ifDefined(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`; }
export default block0;
//# sourceMappingURL=MessageStripTemplate.lit.js.map