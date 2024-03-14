var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SideNavigation_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ResponsivePopover from "@ui5/webcomponents/dist/ResponsivePopover.js";
import NavigationMenu from "@ui5/webcomponents/dist/NavigationMenu.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import { renderFinished } from "@ui5/webcomponents-base/dist/Render.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import { isPhone, isTablet, isCombi, } from "@ui5/webcomponents-base/dist/Device.js";
import { isSpace, isEnter, } from "@ui5/webcomponents-base/dist/Keys.js";
import NavigationMode from "@ui5/webcomponents-base/dist/types/NavigationMode.js";
import Icon from "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/circle-task-2.js";
import "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";
import "@ui5/webcomponents-icons/dist/navigation-down-arrow.js";
import SideNavigationItem from "./SideNavigationItem.js";
import SideNavigationSubItem from "./SideNavigationSubItem.js";
import SideNavigationTemplate from "./generated/templates/SideNavigationTemplate.lit.js";
import SideNavigationPopoverTemplate from "./generated/templates/SideNavigationPopoverTemplate.lit.js";
import { SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT, SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC, SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC, SIDE_NAVIGATION_OVERFLOW_ACCESSIBLE_NAME, } from "./generated/i18n/i18n-defaults.js";
// Styles
import SideNavigationCss from "./generated/themes/SideNavigation.css.js";
import SideNavigationPopoverCss from "./generated/themes/SideNavigationPopover.css.js";
const PAGE_UP_DOWN_SIZE = 10;
/**
 * @class
 *
 * ### Overview
 *
 * The `SideNavigation` is used as a standard menu in applications.
 * It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).
 *
 * - The header is meant for displaying user related information - profile data, avatar, etc.
 * - The main navigation section is related to the user’s current work context
 * - The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on).
 *
 * ### Usage
 *
 * Use the available `ui5-side-navigation-item` and `ui5-side-navigation-sub-item` components to build your menu.
 * The items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level.
 * You must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level.
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or ` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up`.
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigation.js";`
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";` (for `ui5-side-navigation-item`)
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";` (for `ui5-side-navigation-sub-item`)
 * @constructor
 * @extends UI5Element
 * @since 1.0.0-rc.8
 * @public
 */
let SideNavigation = SideNavigation_1 = class SideNavigation extends UI5Element {
    constructor() {
        super();
        this._flexibleItemNavigation = new ItemNavigation(this, {
            skipItemsSize: PAGE_UP_DOWN_SIZE,
            navigationMode: NavigationMode.Vertical,
            getItemsCallback: () => this.getEnabledFlexibleItems(),
        });
        this._fixedItemNavigation = new ItemNavigation(this, {
            skipItemsSize: PAGE_UP_DOWN_SIZE,
            navigationMode: NavigationMode.Vertical,
            getItemsCallback: () => this.getEnabledFixedItems(),
        });
        this._handleResizeBound = this.handleResize.bind(this);
        this._isOverflow = false;
    }
    async _onAfterPopoverOpen() {
        // as the tree/list inside the popover is never destroyed,
        // item navigation index should be managed, because items are
        // dynamically recreated and tabIndexes are not updated
        const tree = await this.getPickerTree();
        const selectedItem = tree._findSelectedItem(tree.items);
        if (selectedItem) {
            selectedItem.focus();
        }
        else {
            tree.items[0]?.focus();
        }
    }
    async _onAfterMenuClose() {
        const selectedItem = this._findSelectedItem(this.items);
        await renderFinished();
        selectedItem.getDomRef().focus();
    }
    async _onBeforePopoverOpen() {
        const popover = await this.getPicker();
        popover?.opener?.classList.add("ui5-sn-item-active");
    }
    async _onBeforePopoverClose() {
        const popover = await this.getPicker();
        popover?.opener?.classList.remove("ui5-sn-item-active");
    }
    async _onBeforeMenuOpen() {
        const popover = await this.getOverflowPopover();
        popover?.opener?.classList.add("ui5-sn-item-active");
    }
    async _onBeforeMenuClose() {
        const popover = await this.getOverflowPopover();
        popover?.opener?.classList.remove("ui5-sn-item-active");
    }
    get accSideNavigationPopoverHiddenText() {
        return SideNavigation_1.i18nBundle.getText(SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT);
    }
    get ariaRoleDescNavigationList() {
        let key = SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC;
        if (this.collapsed) {
            key = SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC;
        }
        return SideNavigation_1.i18nBundle.getText(key);
    }
    get overflowAccessibleName() {
        return SideNavigation_1.i18nBundle.getText(SIDE_NAVIGATION_OVERFLOW_ACCESSIBLE_NAME);
    }
    async handlePopupItemClick(e) {
        const associatedItem = e.target.associatedItem;
        associatedItem.fireEvent("click");
        if (associatedItem.selected) {
            this.closePicker();
            return;
        }
        this._selectItem(associatedItem);
        this.closePicker();
        await renderFinished();
        this._popoverContents.item.getDomRef().classList.add("ui5-sn-item-no-hover-effect");
    }
    handleOverflowItemClick(e) {
        const associatedItem = e.detail.item.associatedItem;
        associatedItem.fireEvent("click");
        if (associatedItem.selected) {
            this.closeMenu();
            return;
        }
        this._selectItem(associatedItem);
        // When subitem is selected in collapsed mode parent element should be focused
        if (associatedItem.nodeName.toLowerCase() === "ui5-side-navigation-sub-item") {
            const parent = associatedItem.parentElement;
            this._flexibleItemNavigation.setCurrentItem(parent);
        }
        else {
            this._flexibleItemNavigation.setCurrentItem(associatedItem);
        }
        this.closeMenu();
    }
    async getOverflowPopover() {
        return (await this.getStaticAreaItemDomRef()).querySelector(".ui5-side-navigation-overflow-menu");
    }
    async getPicker() {
        return (await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]");
    }
    async openPicker(opener) {
        opener.classList.add("ui5-sn-item-active");
        const responsivePopover = await this.getPicker();
        responsivePopover.opener = opener;
        responsivePopover.showAt(opener);
    }
    async openOverflowMenu(opener) {
        opener.classList.add("ui5-sn-item-active");
        const menu = await this.getOverflowPopover();
        menu.opener = opener;
        menu.showAt(opener);
    }
    async closePicker() {
        const responsivePopover = await this.getPicker();
        responsivePopover.close();
    }
    async closeMenu() {
        const menu = await this.getOverflowPopover();
        menu.close();
    }
    async getPickerTree() {
        const picker = await this.getPicker();
        return picker.querySelector("[ui5-side-navigation]");
    }
    get hasHeader() {
        return !!this.header.length;
    }
    get showHeader() {
        return this.hasHeader && !this.collapsed;
    }
    get hasFixedItems() {
        return !!this.fixedItems.length;
    }
    get _rootRole() {
        return this._inPopover ? "none" : undefined;
    }
    get classes() {
        return {
            root: {
                "ui5-sn-collapsed": this.collapsed,
                "ui5-sn-in-popover": this._inPopover,
            },
        };
    }
    getEnabledFixedItems() {
        return this.getEnabledItems(this.fixedItems);
    }
    getEnabledFlexibleItems() {
        if (!this._overflowDom) {
            return this.getEnabledItems(this.items);
        }
        return [...this.getEnabledItems(this.items), this._overflowDom];
    }
    getEnabledItems(items) {
        let result = new Array();
        items.forEach(item => {
            if (item.getDomRef()?.classList.contains("ui5-sn-item-hidden")) {
                return;
            }
            if (!item.disabled) {
                result.push(item);
            }
            if (!this.collapsed && item.expanded) {
                result = result.concat(item.items.filter(el => !el.disabled));
            }
        });
        return result;
    }
    focusItem(item) {
        if (item.isFixedItem) {
            this._fixedItemNavigation.setCurrentItem(item);
        }
        else {
            this._flexibleItemNavigation.setCurrentItem(item);
        }
    }
    onAfterRendering() {
        const activeElement = this.shadowRoot.activeElement;
        const flexibleDom = this.shadowRoot.querySelector(".ui5-sn-flexible");
        if (!flexibleDom.contains(activeElement)) {
            const selectedItem = this._findSelectedItem(this.items);
            if (selectedItem) {
                this._flexibleItemNavigation.setCurrentItem(selectedItem);
            }
            else {
                const focusedItem = this._findFocusedItem(this.items);
                if (!focusedItem) {
                    this._flexibleItemNavigation.setCurrentItem(this.items[0]);
                }
            }
        }
        const fixedDom = this.shadowRoot.querySelector(".ui5-sn-fixed");
        if (!fixedDom?.contains(activeElement)) {
            const selectedItem = this._findSelectedItem(this.fixedItems);
            if (selectedItem) {
                this._fixedItemNavigation.setCurrentItem(selectedItem);
            }
            else {
                const focusedItem = this._findFocusedItem(this.fixedItems);
                if (!focusedItem) {
                    this._fixedItemNavigation.setCurrentItem(this.fixedItems[0]);
                }
            }
        }
        if (this.collapsed) {
            this.handleResize();
        }
    }
    onEnterDOM() {
        ResizeHandler.register(this, this._handleResizeBound);
        this.isTouchDevice = isPhone() || (isTablet() && !isCombi());
    }
    onExitDOM() {
        ResizeHandler.deregister(this, this._handleResizeBound);
    }
    handleResize() {
        const domRef = this.getDomRef(), overflowItemRef = domRef?.querySelector(".ui5-sn-item-overflow");
        this._updateOverflowItems();
        if (this._getOverflowItems().length > 0 && this.collapsed) {
            overflowItemRef?.classList.remove("ui5-sn-item-hidden");
        }
        else {
            overflowItemRef?.classList.add("ui5-sn-item-hidden");
        }
    }
    _updateOverflowItems() {
        const domRef = this.getDomRef();
        if (!this.collapsed || !domRef) {
            return null;
        }
        const overflowItemRef = domRef.querySelector(".ui5-sn-item-overflow");
        const flexibleContentDomRef = domRef.querySelector(".ui5-sn-flexible");
        if (!overflowItemRef) {
            return null;
        }
        overflowItemRef.classList.add("ui5-sn-item-hidden");
        const itemsRefs = [...domRef.querySelectorAll(".ui5-sn-flexible .ui5-sn-item-level1:not(.ui5-sn-item-overflow)")];
        let itemsHeight = itemsRefs.reduce((sum, itemRef) => {
            itemRef.classList.remove("ui5-sn-item-hidden");
            return sum + itemRef.offsetHeight;
        }, 0);
        const { paddingTop, paddingBottom } = window.getComputedStyle(flexibleContentDomRef);
        const listHeight = flexibleContentDomRef?.offsetHeight - parseInt(paddingTop) - parseInt(paddingBottom);
        overflowItemRef.classList.remove("ui5-sn-item-hidden");
        itemsHeight = overflowItemRef.offsetHeight;
        const oSelectedItemRef = domRef.querySelector(".ui5-sn-item-selected");
        if (oSelectedItemRef) {
            const { marginTop, marginBottom } = window.getComputedStyle(oSelectedItemRef);
            itemsHeight += oSelectedItemRef.offsetHeight + parseFloat(marginTop) + parseFloat(marginBottom);
        }
        itemsRefs.forEach(itemRef => {
            if (itemRef === oSelectedItemRef) {
                return;
            }
            const { marginTop, marginBottom } = window.getComputedStyle(itemRef);
            itemsHeight += itemRef.offsetHeight + parseFloat(marginTop) + parseFloat(marginBottom);
            if (itemsHeight >= listHeight) {
                itemRef.classList.add("ui5-sn-item-hidden");
            }
        });
    }
    _findFocusedItem(items) {
        let focusedItem;
        if (this.collapsed) {
            focusedItem = items.find(item => item.forcedTabIndex === "0");
        }
        else {
            focusedItem = this._getWithNestedItems(items, true).find(item => item.forcedTabIndex === "0");
        }
        return focusedItem;
    }
    _getWithNestedItems(items, expandedOnly = false) {
        let result = new Array();
        items.forEach(item => {
            result.push(item);
            if (!expandedOnly || item.expanded) {
                result = result.concat(item.items);
            }
        });
        return result;
    }
    _findSelectedItem(items) {
        let selectedItem;
        if (this.collapsed) {
            selectedItem = items.find(item => item._selected);
        }
        else {
            selectedItem = this._getWithNestedItems(items).find(current => current.selected);
        }
        return selectedItem;
    }
    _handleItemClick(e, item) {
        if (item.selected && !this.collapsed) {
            item.fireEvent("click");
            return;
        }
        if (this.collapsed && item instanceof SideNavigationItem && item.items.length) {
            e.preventDefault();
            this._isOverflow = false;
            this._popoverContents = {
                item,
                subItems: item.items,
            };
            this.openPicker(item.getFocusDomRef());
        }
        else {
            item.fireEvent("click");
            if (!item.selected) {
                this._selectItem(item);
            }
        }
    }
    _handleOverflowClick() {
        this._isOverflow = true;
        this._menuPopoverItems = this._getOverflowItems();
        this.openOverflowMenu(this._overflowDom);
    }
    _getOverflowItems() {
        const overflowClass = "ui5-sn-item-hidden";
        const result = [];
        this.items.forEach(item => {
            if (item.getDomRef().classList.contains(overflowClass)) {
                result.push(item);
            }
        });
        return result;
    }
    _selectItem(item) {
        if (item.disabled) {
            return;
        }
        if (!this.fireEvent("selection-change", { item }, true)) {
            return;
        }
        let items = this._getWithNestedItems(this.items);
        items = items.concat(this._getWithNestedItems(this.fixedItems));
        items.forEach(current => {
            current.selected = false;
        });
        item.selected = true;
        if (this.collapsed && item.getDomRef()?.classList.contains("ui5-sn-item-hidden")) {
            item.getDomRef().classList.remove("ui5-sn-item-hidden");
        }
    }
    get _overflowDom() {
        return this.shadowRoot.querySelector(".ui5-sn-item-overflow");
    }
    get isOverflow() {
        return this._isOverflow;
    }
    _onkeydownOverflow(e) {
        if (isSpace(e)) {
            e.preventDefault();
        }
        if (isEnter(e)) {
            this._handleOverflowClick();
        }
    }
    _onkeyupOverflow(e) {
        if (isSpace(e)) {
            this._handleOverflowClick();
        }
    }
    static async onDefine() {
        [SideNavigation_1.i18nBundle] = await Promise.all([
            getI18nBundle("@ui5/webcomponents-fiori"),
            super.onDefine(),
        ]);
    }
};
__decorate([
    property({ type: Boolean })
], SideNavigation.prototype, "collapsed", void 0);
__decorate([
    slot({ type: HTMLElement, invalidateOnChildChange: true, "default": true })
], SideNavigation.prototype, "items", void 0);
__decorate([
    slot()
], SideNavigation.prototype, "header", void 0);
__decorate([
    slot({ type: HTMLElement, invalidateOnChildChange: true })
], SideNavigation.prototype, "fixedItems", void 0);
__decorate([
    property({ type: Object })
], SideNavigation.prototype, "_popoverContents", void 0);
__decorate([
    property({ type: Boolean })
], SideNavigation.prototype, "_inPopover", void 0);
__decorate([
    property({ type: Object, multiple: true })
], SideNavigation.prototype, "_menuPopoverItems", void 0);
__decorate([
    property({ type: Boolean })
], SideNavigation.prototype, "isTouchDevice", void 0);
SideNavigation = SideNavigation_1 = __decorate([
    customElement({
        tag: "ui5-side-navigation",
        fastNavigation: true,
        renderer: litRender,
        template: SideNavigationTemplate,
        staticAreaTemplate: SideNavigationPopoverTemplate,
        styles: SideNavigationCss,
        staticAreaStyles: SideNavigationPopoverCss,
        dependencies: [
            ResponsivePopover,
            SideNavigationItem,
            SideNavigationSubItem,
            Icon,
            NavigationMenu,
        ],
    })
    /**
     * Fired when the selection has changed via user interaction
     * @param {SideNavigationItemBase} item the clicked item.
     * @allowPreventDefault
     * @public
     */
    ,
    event("selection-change", {
        detail: {
            /**
             * @public
             */
            item: { type: HTMLElement },
        },
    })
], SideNavigation);
SideNavigation.define();
export default SideNavigation;
//# sourceMappingURL=SideNavigation.js.map