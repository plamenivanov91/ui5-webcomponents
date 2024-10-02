/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader ? block1.call(this, context, tags, suffix) : undefined}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length ? block10.call(this, context, tags, suffix) : undefined}${this._showResizeHandle ? block11.call(this, context, tags, suffix) : undefined}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `; }
function block1(context, tags, suffix) { return html `<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${ifDefined(this.effectiveAriaDescribedBy)} aria-roledescription=${ifDefined(this.ariaRoleDescriptionHeaderText)} tabindex="${ifDefined(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${ifDefined(this.state)}">${this.hasValueState ? block2.call(this, context, tags, suffix) : undefined}${this.header.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}${this.resizable ? block5.call(this, context, tags, suffix) : block8.call(this, context, tags, suffix)}</div></header>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-dialog-value-state-icon" name="${ifDefined(this._dialogStateIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-dialog-value-state-icon" name="${ifDefined(this._dialogStateIcon)}"></ui5-icon>`; }
function block3(context, tags, suffix) { return html `<slot name="header"></slot>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-title", tags, suffix)} level="H1" id="ui5-popup-header-text" class="ui5-popup-header-text">${ifDefined(this.headerText)}</${scopeTag("ui5-title", tags, suffix)}>` : html `<ui5-title level="H1" id="ui5-popup-header-text" class="ui5-popup-header-text">${ifDefined(this.headerText)}</ui5-title>`; }
function block5(context, tags, suffix) { return html `${this.draggable ? block6.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}`; }
function block6(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`; }
function block7(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextResizable)}</span>`; }
function block8(context, tags, suffix) { return html `${this.draggable ? block9.call(this, context, tags, suffix) : undefined}`; }
function block9(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextDraggable)}</span>`; }
function block10(context, tags, suffix) { return html `<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`; }
function block11(context, tags, suffix) { return suffix ? html `<div class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"><${scopeTag("ui5-icon", tags, suffix)} name="resize-corner"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"><ui5-icon name="resize-corner"></ui5-icon></div>`; }
export default block0;
//# sourceMappingURL=DialogTemplate.lit.js.map