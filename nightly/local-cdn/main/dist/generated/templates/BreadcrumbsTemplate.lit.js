/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<nav class="ui5-breadcrumbs-root" aria-label="${ifDefined(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><${scopeTag("ui5-link", tags, suffix)} @ui5-click="${ifDefined(this._openRespPopover)}" accessible-role="button" accessible-name="${ifDefined(this._dropdownArrowAccessibleNameText)}" .accessibilityAttributes="${ifDefined(this.linkAccessibilityAttributes)}" wrapping-type="None"><${scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" title="${ifDefined(this._dropdownArrowAccessibleNameText)}"></${scopeTag("ui5-icon", tags, suffix)}></${scopeTag("ui5-link", tags, suffix)}></li>${repeat(this._linksData, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}${!this._endsWithCurrentLinkItem ? block3.call(this, context, tags, suffix) : undefined}</ol></nav><${scopeTag("ui5-responsive-popover", tags, suffix)} class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement="Bottom" horizontal-align="Start" _hide-header @keydown="${this._onkeydown}"><${scopeTag("ui5-list", tags, suffix)} selection-mode="Single" separators="None" @ui5-selection-change="${ifDefined(this._onOverflowListItemSelect)}">${repeat(this._overflowItemsData, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}><div slot="footer" class="ui5-breadcrumbs-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closeRespPopover}">${ifDefined(this._cancelButtonText)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<nav class="ui5-breadcrumbs-root" aria-label="${ifDefined(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><ui5-link @ui5-click="${ifDefined(this._openRespPopover)}" accessible-role="button" accessible-name="${ifDefined(this._dropdownArrowAccessibleNameText)}" .accessibilityAttributes="${ifDefined(this.linkAccessibilityAttributes)}" wrapping-type="None"><ui5-icon name="slim-arrow-down" title="${ifDefined(this._dropdownArrowAccessibleNameText)}"></ui5-icon></ui5-link></li>${repeat(this._linksData, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}${!this._endsWithCurrentLinkItem ? block3.call(this, context, tags, suffix) : undefined}</ol></nav><ui5-responsive-popover class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement="Bottom" horizontal-align="Start" _hide-header @keydown="${this._onkeydown}"><ui5-list selection-mode="Single" separators="None" @ui5-selection-change="${ifDefined(this._onOverflowListItemSelect)}">${repeat(this._overflowItemsData, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</ui5-list><div slot="footer" class="ui5-breadcrumbs-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">${ifDefined(this._cancelButtonText)}</ui5-button></div></ui5-responsive-popover>`; }
function block1(context, tags, suffix, item, index) { return suffix ? html `<li class="ui5-breadcrumbs-link-wrapper" id="${ifDefined(item._id)}-link-wrapper"><${scopeTag("ui5-link", tags, suffix)} @ui5-click="${ifDefined(this._onLinkPress)}" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" id="${ifDefined(item._id)}-link" design="${ifDefined(item._linkDesign)}" accessible-name="${ifDefined(item._accessibleNameText)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" wrapping-type="None">${ifDefined(item.innerText)}</${scopeTag("ui5-link", tags, suffix)}>${item._needsSeparator ? block2.call(this, context, tags, suffix, item, index) : undefined}</li>` : html `<li class="ui5-breadcrumbs-link-wrapper" id="${ifDefined(item._id)}-link-wrapper"><ui5-link @ui5-click="${ifDefined(this._onLinkPress)}" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" id="${ifDefined(item._id)}-link" design="${ifDefined(item._linkDesign)}" accessible-name="${ifDefined(item._accessibleNameText)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" wrapping-type="None">${ifDefined(item.innerText)}</ui5-link>${item._needsSeparator ? block2.call(this, context, tags, suffix, item, index) : undefined}</li>`; }
function block2(context, tags, suffix, item, index) { return html `<span class="ui5-breadcrumbs-separator" aria-hidden="true"></span>`; }
function block3(context, tags, suffix) { return html `${this._endsWithCurrentLocation ? block4.call(this, context, tags, suffix) : undefined}`; }
function block4(context, tags, suffix) { return suffix ? html `<li class="ui5-breadcrumbs-current-location" @click="${this._onLabelPress}"><span aria-current="page" aria-label="${ifDefined(this._currentLocationAccName)}" role="link" id="${ifDefined(this._id)}-labelWrapper"><${scopeTag("ui5-label", tags, suffix)}>${ifDefined(this._currentLocationText)}</${scopeTag("ui5-label", tags, suffix)}></span></li>` : html `<li class="ui5-breadcrumbs-current-location" @click="${this._onLabelPress}"><span aria-current="page" aria-label="${ifDefined(this._currentLocationAccName)}" role="link" id="${ifDefined(this._id)}-labelWrapper"><ui5-label>${ifDefined(this._currentLocationText)}</ui5-label></span></li>`; }
function block5(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} id="${ifDefined(item._id)}-li" accessible-name="${ifDefined(item.accessibleName)}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.textContent)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li id="${ifDefined(item._id)}-li" accessible-name="${ifDefined(item.accessibleName)}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.textContent)}</ui5-li>`; }
export default block0;
//# sourceMappingURL=BreadcrumbsTemplate.lit.js.map