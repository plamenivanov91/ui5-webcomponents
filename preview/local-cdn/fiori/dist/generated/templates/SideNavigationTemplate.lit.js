/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<nav class="ui5-sn-root ${classMap(this.classes.root)}" role="${ifDefined(this._rootRole)}">${this.showHeader ? block1.call(this, context, tags, suffix) : undefined}${this.collapsed ? block2.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}${this.hasFixedItems ? block27.call(this, context, tags, suffix) : undefined}</nav> `; }
function block1(context, tags, suffix) { return html `<slot name="header"></slot>`; }
function block2(context, tags, suffix) { return suffix ? html `<div role="menubar" class="ui5-sn-list ui5-sn-flexible" aria-orientation="vertical" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}<div id="${ifDefined(this._id)}-sn-overflow-item" class="ui5-sn-item ui5-sn-item-level1 ui5-sn-item-overflow" role="menuitem" data-sap-focus-ref @keydown="${this._onkeydownOverflow}" @keyup="${this._onkeyupOverflow}" @click="${this._handleOverflowClick}" aria-haspopup="menu" tabindex="0" title="${ifDefined(this.overflowAccessibleName)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" accessible-role="presentation" name="overflow"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-sn-item-text">${ifDefined(this.overflowAccessibleName)}</div></div></div>` : html `<div role="menubar" class="ui5-sn-list ui5-sn-flexible" aria-orientation="vertical" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}<div id="${ifDefined(this._id)}-sn-overflow-item" class="ui5-sn-item ui5-sn-item-level1 ui5-sn-item-overflow" role="menuitem" data-sap-focus-ref @keydown="${this._onkeydownOverflow}" @keyup="${this._onkeyupOverflow}" @click="${this._handleOverflowClick}" aria-haspopup="menu" tabindex="0" title="${ifDefined(this.overflowAccessibleName)}"><ui5-icon class="ui5-sn-item-icon" accessible-role="presentation" name="overflow"></ui5-icon><div class="ui5-sn-item-text">${ifDefined(this.overflowAccessibleName)}</div></div></div>`; }
function block3(context, tags, suffix, item, index) { return html `${item._href ? block4.call(this, context, tags, suffix, item, index) : block7.call(this, context, tags, suffix, item, index)}`; }
function block4(context, tags, suffix, item, index) { return suffix ? html `<a id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block5.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block6.call(this, context, tags, suffix, item, index) : undefined}</a>` : html `<a id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}"><ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block5.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block6.call(this, context, tags, suffix, item, index) : undefined}</a>`; }
function block5(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></ui5-icon>`; }
function block6(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block7(context, tags, suffix, item, index) { return suffix ? html `<div id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block8.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block9.call(this, context, tags, suffix, item, index) : undefined}</div>` : html `<div id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}"><ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block8.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block9.call(this, context, tags, suffix, item, index) : undefined}</div>`; }
function block8(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></ui5-icon>`; }
function block9(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block10(context, tags, suffix) { return html `<ul role="tree" class="ui5-sn-list ui5-sn-flexible" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}</ul>`; }
function block11(context, tags, suffix, item, index) { return html `<li id="${ifDefined(item._id)}" class="ui5-sn-list-li" role="none">${item._href ? block12.call(this, context, tags, suffix, item, index) : block16.call(this, context, tags, suffix, item, index)}${item.items.length ? block20.call(this, context, tags, suffix, item, index) : undefined}</li>`; }
function block12(context, tags, suffix, item, index) { return suffix ? html `<a class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block13.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${item.items.length ? block14.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block15.call(this, context, tags, suffix, item, index) : undefined}</a>` : html `<a class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block13.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${item.items.length ? block14.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block15.call(this, context, tags, suffix, item, index) : undefined}</a>`; }
function block13(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
function block14(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></ui5-icon>`; }
function block15(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block16(context, tags, suffix, item, index) { return suffix ? html `<div class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}">${item.icon ? block17.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${item.items.length ? block18.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block19.call(this, context, tags, suffix, item, index) : undefined}</div>` : html `<div class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}">${item.icon ? block17.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${item.items.length ? block18.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block19.call(this, context, tags, suffix, item, index) : undefined}</div>`; }
function block17(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
function block18(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></ui5-icon>`; }
function block19(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block20(context, tags, suffix, item, index) { return html `<ul id="${ifDefined(item._groupId)}" class="ui5-sn-item-group" aria-label="${ifDefined(item.text)}" role="group">${repeat(item.items, (item, index) => item._id || index, (item, index) => block21.call(this, context, tags, suffix, item, index))}</ul>`; }
function block21(context, tags, suffix, item, index) { return html `<li id="${ifDefined(item._id)}" class="ui5-sn-list-li" role="none">${item._href ? block22.call(this, context, tags, suffix, item, index) : block25.call(this, context, tags, suffix, item, index)}</li>`; }
function block22(context, tags, suffix, item, index) { return suffix ? html `<a class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block23.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${item._isExternalLink ? block24.call(this, context, tags, suffix, item, index) : undefined}</a>` : html `<a class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block23.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${item._isExternalLink ? block24.call(this, context, tags, suffix, item, index) : undefined}</a>`; }
function block23(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
function block24(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block25(context, tags, suffix, item, index) { return suffix ? html `<div class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}">${item.icon ? block26.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}">${item.icon ? block26.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon></div>`; }
function block26(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
function block27(context, tags, suffix) { return html `<div role="separator" class="ui5-sn-spacer"></div>${this.collapsed ? block28.call(this, context, tags, suffix) : block36.call(this, context, tags, suffix)}`; }
function block28(context, tags, suffix) { return html `<div role="menubar" class="ui5-sn-list ui5-sn-fixed" aria-orientation="vertical" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}">${repeat(this.fixedItems, (item, index) => item._id || index, (item, index) => block29.call(this, context, tags, suffix, item, index))}</div>`; }
function block29(context, tags, suffix, item, index) { return html `${item._href ? block30.call(this, context, tags, suffix, item, index) : block33.call(this, context, tags, suffix, item, index)}`; }
function block30(context, tags, suffix, item, index) { return suffix ? html `<a id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block31.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block32.call(this, context, tags, suffix, item, index) : undefined}</a>` : html `<a id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}"><ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block31.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block32.call(this, context, tags, suffix, item, index) : undefined}</a>`; }
function block31(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></ui5-icon>`; }
function block32(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block33(context, tags, suffix, item, index) { return suffix ? html `<div id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block34.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block35.call(this, context, tags, suffix, item, index) : undefined}</div>` : html `<div id="${ifDefined(item._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="menuitemradio" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" @focusout="${item._onfocusout}" @mouseenter="${item._onmouseenter}" @mouseleave="${item._onmouseleave}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-haspopup="${ifDefined(item._ariaHasPopup)}" aria-checked="${ifDefined(item.selected)}" title="${ifDefined(item._tooltip)}"><ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon><div class="ui5-sn-item-text">${ifDefined(item.text)}</div>${item.items.length ? block34.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block35.call(this, context, tags, suffix, item, index) : undefined}</div>`; }
function block34(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></ui5-icon>`; }
function block35(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block36(context, tags, suffix) { return html `<ul role="tree" class="ui5-sn-list ui5-sn-fixed" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}">${repeat(this.fixedItems, (item, index) => item._id || index, (item, index) => block37.call(this, context, tags, suffix, item, index))}</ul>`; }
function block37(context, tags, suffix, item, index) { return html `<li id="${ifDefined(item._id)}" class="ui5-sn-list-li" role="none">${item._href ? block38.call(this, context, tags, suffix, item, index) : block42.call(this, context, tags, suffix, item, index)}${item.items.length ? block46.call(this, context, tags, suffix, item, index) : undefined}</li>`; }
function block38(context, tags, suffix, item, index) { return suffix ? html `<a class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block39.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${item.items.length ? block40.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block41.call(this, context, tags, suffix, item, index) : undefined}</a>` : html `<a class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block39.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${item.items.length ? block40.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block41.call(this, context, tags, suffix, item, index) : undefined}</a>`; }
function block39(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
function block40(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></ui5-icon>`; }
function block41(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block42(context, tags, suffix, item, index) { return suffix ? html `<div class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}">${item.icon ? block43.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${item.items.length ? block44.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block45.call(this, context, tags, suffix, item, index) : undefined}</div>` : html `<div class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-expanded="${ifDefined(item._expanded)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" aria-owns="${ifDefined(item._groupId)}">${item.icon ? block43.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${item.items.length ? block44.call(this, context, tags, suffix, item, index) : undefined}${item._isExternalLink ? block45.call(this, context, tags, suffix, item, index) : undefined}</div>`; }
function block43(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
function block44(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(item._toggleIconName)}" @click="${item._onToggleClick}"></ui5-icon>`; }
function block45(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block46(context, tags, suffix, item, index) { return html `<ul id="${ifDefined(item._groupId)}" class="ui5-sn-item-group" aria-label="${ifDefined(item.text)}" role="group">${repeat(item.items, (item, index) => item._id || index, (item, index) => block47.call(this, context, tags, suffix, item, index))}</ul>`; }
function block47(context, tags, suffix, item, index) { return html `<li id="${ifDefined(item._id)}" class="ui5-sn-list-li" role="none">${item._href ? block48.call(this, context, tags, suffix, item, index) : block51.call(this, context, tags, suffix, item, index)}</li>`; }
function block48(context, tags, suffix, item, index) { return suffix ? html `<a class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block49.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${item._isExternalLink ? block50.call(this, context, tags, suffix, item, index) : undefined}</a>` : html `<a class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}">${item.icon ? block49.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${item._isExternalLink ? block50.call(this, context, tags, suffix, item, index) : undefined}</a>`; }
function block49(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
function block50(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block51(context, tags, suffix, item, index) { return suffix ? html `<div class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}">${item.icon ? block52.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div class="ui5-sn-item ui5-sn-item-level2 ${ifDefined(item._classes)}" role="treeitem" data-sap-focus-ref @keydown="${item._onkeydown}" @keyup="${item._onkeyup}" @click="${item._onclick}" @focusin="${item._onfocusin}" tabindex="${ifDefined(item._effectiveTabIndex)}" aria-current="${ifDefined(item._ariaCurrent)}" title="${ifDefined(item._tooltip)}">${item.icon ? block52.call(this, context, tags, suffix, item, index) : undefined}<div class="ui5-sn-item-text">${ifDefined(item.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon></div>`; }
function block52(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(item.icon)}"></ui5-icon>`; }
export default block0;
//# sourceMappingURL=SideNavigationTemplate.lit.js.map