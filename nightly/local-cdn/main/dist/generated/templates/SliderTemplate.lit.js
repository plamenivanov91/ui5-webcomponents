/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-slider-root ${classMap(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><div class="ui5-slider-inner">${this.step ? block1.call(this, context, tags, suffix) : undefined}<div class="ui5-slider-progress-container" aria-hidden="true" part="progress-container"><div class="ui5-slider-progress" style="${styleMap(this.styles.progress)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" tabindex="-1" part="progress-bar"></div></div><div class="ui5-slider-handle" style="${styleMap(this.styles.handle)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this.value)}" aria-labelledby="${ifDefined(this._ariaLabelledByHandleRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}" data-sap-focus-ref part="handle"><${scopeTag("ui5-icon", tags, suffix)} mode="Decorative" "direction-arrows" part="icon-slider" slider-icon></${scopeTag("ui5-icon", tags, suffix)}>${this.showTooltip ? block8.call(this, context, tags, suffix) : undefined}</div></div><span id="${ifDefined(this._id)}-accName" class="ui5-hidden-text">${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-sliderDesc" class="ui5-hidden-text">${ifDefined(this._ariaLabelledByText)}</span></div> ` : html `<div class="ui5-slider-root ${classMap(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><div class="ui5-slider-inner">${this.step ? block1.call(this, context, tags, suffix) : undefined}<div class="ui5-slider-progress-container" aria-hidden="true" part="progress-container"><div class="ui5-slider-progress" style="${styleMap(this.styles.progress)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" tabindex="-1" part="progress-bar"></div></div><div class="ui5-slider-handle" style="${styleMap(this.styles.handle)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" role="slider" tabindex="${ifDefined(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${ifDefined(this.min)}" aria-valuemax="${ifDefined(this.max)}" aria-valuenow="${ifDefined(this.value)}" aria-labelledby="${ifDefined(this._ariaLabelledByHandleRefs)}" aria-disabled="${ifDefined(this._ariaDisabled)}" data-sap-focus-ref part="handle"><ui5-icon mode="Decorative" "direction-arrows" part="icon-slider" slider-icon></ui5-icon>${this.showTooltip ? block8.call(this, context, tags, suffix) : undefined}</div></div><span id="${ifDefined(this._id)}-accName" class="ui5-hidden-text">${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-sliderDesc" class="ui5-hidden-text">${ifDefined(this._ariaLabelledByText)}</span></div> `; }
function block1(context, tags, suffix) { return html `${this.showTickmarks ? block2.call(this, context, tags, suffix) : undefined}`; }
function block2(context, tags, suffix) { return html `<ul class="ui5-slider-tickmarks">${repeat(this.tickmarksObject, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</ul>${this.labelInterval ? block6.call(this, context, tags, suffix) : undefined}`; }
function block3(context, tags, suffix, item, index) { return html `${item ? block4.call(this, context, tags, suffix, item, index) : block5.call(this, context, tags, suffix, item, index)}`; }
function block4(context, tags, suffix, item, index) { return html `<li class="ui5-slider-tickmark ui5-slider-tickmark-in-range"></li>`; }
function block5(context, tags, suffix, item, index) { return html `<li class="ui5-slider-tickmark"></li>`; }
function block6(context, tags, suffix) { return html `<ul class="ui5-slider-labels ${classMap(this.classes.labelContainer)}" style="${styleMap(this.styles.labelContainer)}">${repeat(this._labels, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}</ul>`; }
function block7(context, tags, suffix, item, index) { return html `<li style="${styleMap(this.styles.label)}">${ifDefined(item)}</li>`; }
function block8(context, tags, suffix) { return html `<div class="ui5-slider-tooltip" style="${styleMap(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${ifDefined(this.tooltipValue)}</span></div>`; }
export default block0;
//# sourceMappingURL=SliderTemplate.lit.js.map