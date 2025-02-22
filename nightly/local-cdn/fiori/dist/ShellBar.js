var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ShellBar_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import { renderFinished } from "@ui5/webcomponents-base/dist/Render.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";
import i18n from "@ui5/webcomponents-base/dist/decorators/i18n.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import { isSpace, isEnter, isLeft, isRight, } from "@ui5/webcomponents-base/dist/Keys.js";
import { getEffectiveAriaLabelText } from "@ui5/webcomponents-base/dist/util/AccessibilityTextsHelper.js";
import ListItemStandard from "@ui5/webcomponents/dist/ListItemStandard.js";
import List from "@ui5/webcomponents/dist/List.js";
import Popover from "@ui5/webcomponents/dist/Popover.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import Menu from "@ui5/webcomponents/dist/Menu.js";
import Icon from "@ui5/webcomponents/dist/Icon.js";
import { isDesktop } from "@ui5/webcomponents-base/dist/Device.js";
import search from "@ui5/webcomponents-icons/dist/search.js";
import da from "@ui5/webcomponents-icons/dist/da.js";
import bell from "@ui5/webcomponents-icons/dist/bell.js";
import overflow from "@ui5/webcomponents-icons/dist/overflow.js";
import grid from "@ui5/webcomponents-icons/dist/grid.js";
import throttle from "@ui5/webcomponents-base/dist/util/throttle.js";
import { getScopedVarName } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";
import getActiveElement from "@ui5/webcomponents-base/dist/util/getActiveElement.js";
// Templates
import ShellBarTemplate from "./ShellBarTemplate.js";
// Styles
import shellBarStyles from "./generated/themes/ShellBar.css.js";
import ShellBarPopoverCss from "./generated/themes/ShellBarPopover.css.js";
import { SHELLBAR_LABEL, SHELLBAR_LOGO, SHELLBAR_NOTIFICATIONS, SHELLBAR_NOTIFICATIONS_NO_COUNT, SHELLBAR_CANCEL, SHELLBAR_PROFILE, SHELLBAR_PRODUCTS, SHELLBAR_SEARCH, SHELLBAR_SEARCH_FIELD, SHELLBAR_OVERFLOW, SHELLBAR_LOGO_AREA, SHELLBAR_ADDITIONAL_CONTEXT, SHELLBAR_SEARCHFIELD_DESCRIPTION, SHELLBAR_SEARCH_BTN_OPEN, SHELLBAR_PRODUCT_SWITCH_BTN, } from "./generated/i18n/i18n-defaults.js";
const RESIZE_THROTTLE_RATE = 200; // ms
// actions always visible in lean mode, order is important
const PREDEFINED_PLACE_ACTIONS = ["feedback", "sys-help"];
/**
 * @class
 * ### Overview
 *
 * The `ui5-shellbar` is meant to serve as an application header
 * and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on.
 *
 * ### Stable DOM Refs
 *
 * You can use the following stable DOM refs for the `ui5-shellbar`:
 *
 * - logo
 * - notifications
 * - overflow
 * - profile
 * - product-switch
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents-fiori/dist/ShellBar.js";`
 * @csspart root - Used to style the outermost wrapper of the `ui5-shellbar`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 0.8.0
 */
let ShellBar = ShellBar_1 = class ShellBar extends UI5Element {
    static get FIORI_3_BREAKPOINTS() {
        return [
            599,
            1023,
            1439,
            1919,
            10000,
        ];
    }
    static get FIORI_3_BREAKPOINTS_MAP() {
        return {
            "599": "S",
            "1023": "M",
            "1439": "L",
            "1919": "XL",
            "10000": "XXL",
        };
    }
    constructor() {
        super();
        /**
         * Defines, if the notification icon would be displayed.
         * @default false
         * @public
         */
        this.showNotifications = false;
        /**
         * Defines, if the product switch icon would be displayed.
         * @default false
         * @public
         */
        this.showProductSwitch = false;
        /**
         * Defines, if the Search Field would be displayed when there is a valid `searchField` slot.
         *
         * **Note:** By default the Search Field is not displayed.
         * @default false
         * @public
         */
        this.showSearchField = false;
        /**
         * Defines additional accessibility attributes on different areas of the component.
         *
         * The accessibilityAttributes object has the following fields,
         * where each field is an object supporting one or more accessibility attributes:
         *
         * - **logo** - `logo.role` and `logo.name`.
         * - **notifications** - `notifications.expanded` and `notifications.hasPopup`.
         * - **profile** - `profile.expanded`, `profile.hasPopup` and `profile.name`.
         * - **product** - `product.expanded` and `product.hasPopup`.
         * - **search** - `search.hasPopup`.
         * - **overflow** - `overflow.expanded` and `overflow.hasPopup`.
         *
         * The accessibility attributes support the following values:
         *
         * - **role**: Defines the accessible ARIA role of the logo area.
         * Accepts the following string values: `button` or `link`.
         *
         * - **expanded**: Indicates whether the button, or another grouping element it controls,
         * is currently expanded or collapsed.
         * Accepts the following string values: `true` or `false`.
         *
         * - **hasPopup**: Indicates the availability and type of interactive popup element,
         * such as menu or dialog, that can be triggered by the button.
         *
         * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
         * - **name**: Defines the accessible ARIA name of the area.
         * Accepts any string.
         *
         * @default {}
         * @public
         * @since 1.10.0
         */
        this.accessibilityAttributes = {};
        /**
         * @private
         */
        this.breakpointSize = "S";
        /**
         * @private
         */
        this.withLogo = false;
        this._itemsInfo = [];
        this._contentInfo = [];
        this._menuPopoverExpanded = false;
        this._overflowPopoverExpanded = false;
        this.showFullWidthSearch = false;
        this._cachedHiddenContent = [];
        this._lastOffsetWidth = 0;
        this._observableContent = [];
        this._autoRestoreSearchField = false;
        this._hiddenIcons = [];
        this._isInitialRendering = true;
        this._overflowNotifications = null;
        // marks if preventDefault() is called in item's press handler
        this._defaultItemPressPrevented = false;
        this.contentItemsObserver = new MutationObserver(() => {
            this._handleActionsOverflow();
        });
        this._headerPress = () => {
            if (this.hasMenuItems) {
                const menuPopover = this._getMenuPopover();
                menuPopover.opener = this.shadowRoot.querySelector(".ui5-shellbar-menu-button");
                menuPopover.open = true;
            }
        };
        this._handleResize = throttle(() => {
            this.menuPopover = this._getMenuPopover();
            this.overflowPopover = this._getOverflowPopover();
            this.overflowPopover.open = false;
            if (this._lastOffsetWidth !== this.offsetWidth) {
                this._overflowActions();
                if (this.autoSearchField) {
                    this._updateSearchFieldState();
                }
            }
        }, RESIZE_THROTTLE_RATE);
    }
    _updateSearchFieldState() {
        const spacerWidth = this.shadowRoot.querySelector(".ui5-shellbar-spacer") ? this.shadowRoot.querySelector(".ui5-shellbar-spacer").getBoundingClientRect().width : 0;
        const searchFieldWidth = this.domCalculatedValues("--_ui5_shellbar_search_field_width");
        if (this.showFullWidthSearch) {
            this.showSearchField = false;
            return;
        }
        if ((spacerWidth <= searchFieldWidth && this.contentItemsHidden.length !== 0) && this.showSearchField) {
            this.showSearchField = false;
            this._autoRestoreSearchField = true;
        }
        else if (spacerWidth > searchFieldWidth && this._autoRestoreSearchField) {
            this.showSearchField = true;
            this._autoRestoreSearchField = false;
        }
    }
    _onKeyDown(e) {
        const items = this._getVisibleAndInteractiveItems();
        const activeElement = getActiveElement();
        const currentIndex = items.findIndex(el => el === activeElement);
        if (isLeft(e) || isRight(e)) {
            e.preventDefault(); // Prevent the default behavior to avoid any further automatic focus movemen
            // Focus navigation based on the key pressed
            if (isLeft(e)) {
                this._focusPreviousItem(items, currentIndex);
            }
            else if (isRight(e)) {
                this._focusNextItem(items, currentIndex);
            }
        }
    }
    _focusNextItem(items, currentIndex) {
        if (currentIndex < items.length - 1) {
            (items[currentIndex + 1]).focus(); // Focus the next element
        }
    }
    _focusPreviousItem(items, currentIndex) {
        if (currentIndex > 0) {
            (items[currentIndex - 1]).focus(); // Focus the previous element
        }
    }
    _isVisible(element) {
        const style = getComputedStyle(element);
        return style.display !== "none" && style.visibility !== "hidden" && element.offsetWidth > 0 && element.offsetHeight > 0;
    }
    _getNavigableContent() {
        const elements = [
            ...this.startButton,
            ...this.logo,
            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-logo"),
            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-logo-area"),
            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-menu-button"),
            ...this.contentItems,
            ...this._getRightChildItems(),
        ];
        return elements.map((element) => {
            const component = element;
            if (component.isUI5Element) {
                return component.getFocusDomRef();
            }
            return element;
        }).filter(el => !!el);
    }
    _getRightChildItems() {
        return [
            ...this.searchField,
            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-search-item-for-arrow-nav"),
            ...this.assistant,
            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-items-for-arrow-nav"),
        ];
    }
    _getVisibleAndInteractiveItems() {
        const items = this._getNavigableContent();
        const visibleAndInteractiveItems = items.filter(item => {
            return this._isVisible(item) && item.tabIndex === 0;
        });
        return visibleAndInteractiveItems;
    }
    _menuItemPress(e) {
        const shouldContinue = this.fireDecoratorEvent("menu-item-click", {
            item: e.detail.selectedItems[0],
        });
        if (shouldContinue) {
            this.menuPopover.open = false;
        }
    }
    _logoPress() {
        this.fireDecoratorEvent("logo-click", {
            targetRef: this.shadowRoot.querySelector(".ui5-shellbar-logo"),
        });
    }
    _menuPopoverBeforeOpen() {
        this._menuPopoverExpanded = true;
        if (this.menuPopover.content && this.menuPopover.content.length) {
            this.menuPopover.content[0].focusFirstItem();
        }
    }
    _menuPopoverAfterClose() {
        this._menuPopoverExpanded = false;
    }
    _overflowPopoverBeforeOpen() {
        this._overflowPopoverExpanded = true;
        if (this.overflowPopover.content && this.overflowPopover.content.length) {
            this.overflowPopover.content[0].focusFirstItem();
        }
    }
    _overflowPopoverAfterClose() {
        this._overflowPopoverExpanded = false;
    }
    _logoKeyup(e) {
        if (isSpace(e)) {
            this._logoPress();
        }
    }
    _logoKeydown(e) {
        if (isSpace(e)) {
            e.preventDefault();
            return;
        }
        if (isEnter(e)) {
            this._logoPress();
        }
    }
    _calculateCSSREMValue(styleSet, propertyName) {
        return Number(styleSet.getPropertyValue(propertyName).replace("rem", "")) * parseInt(getComputedStyle(document.body).getPropertyValue("font-size"));
    }
    _parsePxValue(styleSet, propertyName) {
        return Number(styleSet.getPropertyValue(propertyName).replace("px", ""));
    }
    domCalculatedValues(cssVar) {
        const shellbarComputerStyle = getComputedStyle(this.getDomRef());
        return this._calculateCSSREMValue(shellbarComputerStyle, getScopedVarName(cssVar)); // px
    }
    onBeforeRendering() {
        this.withLogo = this.hasLogo;
        this._hiddenIcons = this._itemsInfo.filter(info => {
            const isHidden = (info.classes.indexOf("ui5-shellbar-hidden-button") !== -1);
            const isSet = info.classes.indexOf("ui5-shellbar-invisible-button") === -1;
            const isOverflowIcon = info.classes.indexOf("ui5-shellbar-overflow-button") !== -1;
            const isImageIcon = info.classes.indexOf("ui5-shellbar-image-button") !== -1;
            const shouldStayOnScreen = isOverflowIcon || (isImageIcon && this.hasProfile);
            return isHidden && isSet && !shouldStayOnScreen;
        });
        this._observeContentItems();
    }
    onAfterRendering() {
        this._lastOffsetWidth = this.offsetWidth;
        this._overflowActions();
        this.onInitialRendering();
    }
    async onInitialRendering() {
        if (this._isInitialRendering) {
            await renderFinished();
            if (this.autoSearchField) {
                this._updateSearchFieldState();
            }
        }
        this._isInitialRendering = false;
    }
    /**
     * Closes the overflow area.
     * Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event
     * @public
     */
    closeOverflow() {
        if (this.overflowPopover) {
            this.overflowPopover.open = false;
        }
    }
    _handleBarBreakpoints() {
        const width = this.getBoundingClientRect().width;
        const breakpoints = ShellBar_1.FIORI_3_BREAKPOINTS;
        const size = breakpoints.find(bp1 => width <= bp1) || ShellBar_1.FIORI_3_BREAKPOINTS[ShellBar_1.FIORI_3_BREAKPOINTS.length - 1];
        const mappedSize = ShellBar_1.FIORI_3_BREAKPOINTS_MAP[size];
        if (this.breakpointSize !== mappedSize) {
            this.breakpointSize = mappedSize;
        }
    }
    _hideItems(items) {
        items.forEach(item => {
            if (item.classes.indexOf("ui5-shellbar-no-overflow-button") === -1) {
                item.classes = `${item.classes} ui5-shellbar-hidden-button`;
            }
        });
        return items;
    }
    _resetItemsVisibility(items) {
        items.forEach(item => {
            item.classList.remove("ui5-shellbar-hidden-button");
        });
    }
    _handleActionsOverflow() {
        const inner = this.overflowInner;
        const wrapper = this.overflowWrapper;
        const hidableDomElements = this.hidableDomElements;
        const hiddenItems = [];
        let lastHiddenIndex = 0;
        this._resetItemsVisibility(hidableDomElements);
        for (let i = 0; i < hidableDomElements.length; i++) {
            if (inner?.offsetWidth === wrapper?.offsetWidth) {
                lastHiddenIndex = i;
                break;
            }
            const item = hidableDomElements[i];
            hiddenItems.push(item.id);
            item.classList.add("ui5-shellbar-hidden-button");
        }
        if (hiddenItems.length === 1 && !this.showSearchField) {
            const nextItemToHide = hidableDomElements[++lastHiddenIndex];
            if (nextItemToHide) {
                hiddenItems.push(nextItemToHide.id);
            }
        }
        const itemsInfo = this._getItemsInfo().filter(item => item.show && item.classes.indexOf("ui5-shellbar-no-overflow-button") === -1);
        const contentInfo = this._getContentInfo().sort((a, b) => a.hideOrder - b.hideOrder);
        const itemsToHide = [...itemsInfo, ...contentInfo].filter(item => hiddenItems.includes(item.id));
        this._hideItems(itemsToHide);
        return { itemsInfo, contentInfo };
    }
    _overflowActions() {
        this._handleBarBreakpoints();
        const { itemsInfo, contentInfo } = this._handleActionsOverflow();
        this._updateItemsInfo(itemsInfo);
        this._updateContentInfo(contentInfo);
        this._updateOverflowNotifications();
        this.showFullWidthSearch = this.overflowed;
    }
    _toggleActionPopover() {
        const overflowButton = this.shadowRoot.querySelector(".ui5-shellbar-overflow-button");
        const overflowPopover = this._getOverflowPopover();
        overflowPopover.opener = overflowButton;
        overflowPopover.open = true;
    }
    onEnterDOM() {
        ResizeHandler.register(this, this._handleResize);
        if (isDesktop()) {
            this.setAttribute("desktop", "");
        }
    }
    onExitDOM() {
        this.contentItemsObserver.disconnect();
        this._observableContent = [];
        ResizeHandler.deregister(this, this._handleResize);
    }
    _handleSearchIconPress() {
        const searchButtonRef = this.shadowRoot.querySelector(".ui5-shellbar-search-button");
        const defaultPrevented = !this.fireDecoratorEvent("search-button-click", {
            targetRef: searchButtonRef,
            searchFieldVisible: this.showSearchField,
        });
        if (defaultPrevented) {
            return;
        }
        this.showSearchField = !this.showSearchField;
        if (!this.showSearchField) {
            return;
        }
        const input = this.searchField[0];
        // update the state immediately
        if (input) {
            input.focused = true;
        }
        // move the focus later
        setTimeout(() => {
            if (input) {
                input.focus();
            }
        }, 100);
    }
    async _handleActionListClick() {
        if (!this._defaultItemPressPrevented) {
            this.closeOverflow();
            // wait for DOM to be updated when ui5-popover is closed, otherwise if Enter key is hold
            // there will be no visual indication that this has happened
            await renderFinished();
        }
        this._defaultItemPressPrevented = false;
    }
    _handleCustomActionPress(e) {
        const target = e.target;
        const refItemId = target.getAttribute("data-ui5-external-action-item-id");
        if (refItemId) {
            const shellbarItem = this.items.find(item => {
                return item._id === refItemId;
            });
            const prevented = shellbarItem.fireClickEvent(e);
            this._defaultItemPressPrevented = prevented;
        }
    }
    _handleOverflowPress() {
        this._toggleActionPopover();
    }
    _handleNotificationsPress(e) {
        const notificationIconRef = this.shadowRoot.querySelector(".ui5-shellbar-bell-button"), target = e.target;
        this._defaultItemPressPrevented = !this.fireDecoratorEvent("notifications-click", {
            targetRef: notificationIconRef.classList.contains("ui5-shellbar-hidden-button") ? target : notificationIconRef,
        });
    }
    _handleProfilePress() {
        this.fireDecoratorEvent("profile-click", {
            targetRef: this.shadowRoot.querySelector(".ui5-shellbar-image-button"),
        });
    }
    _handleCancelButtonPress() {
        this.showSearchField = false;
    }
    _handleProductSwitchPress(e) {
        const buttonRef = this.shadowRoot.querySelector(".ui5-shellbar-button-product-switch"), target = e.target;
        this._defaultItemPressPrevented = !this.fireDecoratorEvent("product-switch-click", {
            targetRef: buttonRef.classList.contains("ui5-shellbar-hidden-button") ? target : buttonRef,
        });
    }
    /**
     * Returns the `logo` DOM ref.
     * @public
     * @default null
     * @since 1.0.0-rc.16
     */
    get logoDomRef() {
        return this.shadowRoot.querySelector(`*[data-ui5-stable="logo"]`);
    }
    /**
     * Returns the `notifications` icon DOM ref.
     * @public
     * @default null
     * @since 1.0.0-rc.16
     */
    get notificationsDomRef() {
        return this.shadowRoot.querySelector(`*[data-ui5-stable="notifications"]`);
    }
    /**
     * Returns the `overflow` icon DOM ref.
     * @public
     * @default null
     * @since 1.0.0-rc.16
     */
    get overflowDomRef() {
        return this.shadowRoot.querySelector(`*[data-ui5-stable="overflow"]`);
    }
    /**
     * Returns the `profile` icon DOM ref.
     * @public
     * @default null
     * @since 1.0.0-rc.16
     */
    get profileDomRef() {
        return this.shadowRoot.querySelector(`*[data-ui5-stable="profile"]`);
    }
    /**
     * Returns the `product-switch` icon DOM ref.
     * @public
     * @default null
     * @since 1.0.0-rc.16
     */
    get productSwitchDomRef() {
        return this.shadowRoot.querySelector(`*[data-ui5-stable="product-switch"]`);
    }
    _getContentInfo() {
        return [
            ...this.contentItemsSorted.map(item => {
                return {
                    hideOrder: parseInt(item.getAttribute("data-hide-order") || "0"),
                    id: item.slot,
                    classes: "ui5-shellbar-content-item",
                    show: false,
                };
            }),
        ];
    }
    /**
     * Returns all items that will be placed in the right of the bar as icons / dom elements.
     */
    _getItemsInfo() {
        const items = [
            {
                icon: search,
                text: this._searchText,
                classes: `${this.searchField.length ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-search-button ui5-shellbar-button`,
                id: `${this._id}-item-${1}`,
                press: this._handleSearchIconPress.bind(this),
                show: !!this.searchField.length,
                tooltip: this._searchText,
            },
            {
                icon: da,
                text: "Assistant",
                classes: `${this.assistant.length ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-assistant-button`,
                id: `${this._id}-assistant`,
                show: !!this.assistant.length,
                press: () => { },
                tooltip: this.assistant.length ? (this.assistant[0].getAttribute("text") || this.assistant[0].getAttribute("title") || undefined) : undefined,
            },
            {
                icon: bell,
                title: this._notificationsText,
                text: ShellBar_1.i18nBundle.getText(SHELLBAR_NOTIFICATIONS_NO_COUNT),
                count: this.notificationsCount,
                classes: `${this.showNotifications ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-bell-button ui5-shellbar-button`,
                id: `${this._id}-item-${2}`,
                show: this.showNotifications,
                press: this._handleNotificationsPress.bind(this),
                tooltip: this._notificationsText,
            },
            // sort feedback and help to always be last
            ...this.items.sort((a, b) => {
                const aIndex = PREDEFINED_PLACE_ACTIONS.indexOf(a.icon || "");
                const bIndex = PREDEFINED_PLACE_ACTIONS.indexOf(b.icon || "");
                return aIndex - bIndex;
            }).map((item) => {
                item._getRealDomRef = () => this.getDomRef().querySelector(`*[data-ui5-stable=${item.stableDomRef}]`);
                // check if included for lean mode
                const show = !!item.icon || false;
                return {
                    icon: item.icon,
                    id: item._id,
                    count: item.count || undefined,
                    refItemid: item._id,
                    text: item.text,
                    classes: "ui5-shellbar-custom-item ui5-shellbar-button",
                    show,
                    press: this._handleCustomActionPress.bind(this),
                    custom: true,
                    title: item.title,
                    stableDomRef: item.stableDomRef,
                    tooltip: item.title || item.text,
                };
            }),
            {
                icon: overflow,
                text: "Overflow",
                classes: "ui5-shellbar-hidden-button ui5-shellbar-no-overflow-button ui5-shellbar-overflow-button ui5-shellbar-button",
                id: `${this.id}-item-${5}`,
                press: this._handleOverflowPress.bind(this),
                show: true,
                tooltip: this._overflowText,
            },
            {
                text: "Person",
                classes: `${this.hasProfile ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-no-overflow-button ui5-shellbar-image-button ui5-shellbar-button`,
                profile: true,
                id: `${this._id}-item-${3}`,
                show: this.hasProfile,
                press: this._handleProfilePress.bind(this),
                tooltip: this._profileText,
            },
            {
                icon: grid,
                text: this._productsText,
                classes: `${this.showProductSwitch ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-no-overflow-button ui5-shellbar-button ui5-shellbar-image-button ui5-shellbar-button-product-switch`,
                id: `${this._id}-item-${4}`,
                show: this.showProductSwitch,
                press: this._handleProductSwitchPress.bind(this),
                tooltip: this._productsText,
            },
        ];
        return items;
    }
    _updateItemsInfo(newItemsInfo) {
        const isDifferent = JSON.stringify(this._itemsInfo) !== JSON.stringify(newItemsInfo);
        if (isDifferent) {
            this._itemsInfo = newItemsInfo;
        }
    }
    _updateContentInfo(newContentInfo) {
        const isDifferent = JSON.stringify(this._contentInfo) !== JSON.stringify(newContentInfo);
        if (isDifferent) {
            this._contentInfo = newContentInfo;
            this._fireContentItemVisibilityChangeEvent();
        }
    }
    _fireContentItemVisibilityChangeEvent() {
        const hiddenByClass = this._contentInfo
            .filter(item => item.classes.indexOf("ui5-shellbar-hidden-button") !== -1)
            .map(item => item.id);
        this.fireDecoratorEvent("content-item-visibility-change", {
            items: this.contentItems.filter(item => hiddenByClass.includes(item.slot)),
        });
    }
    _updateOverflowNotifications() {
        const notificationsArr = [];
        let overflowNotifications = null;
        this._itemsInfo.forEach(item => {
            if (item.count && this.isIconHidden(item.icon)) {
                notificationsArr.push(item.count);
            }
        });
        if (notificationsArr.length === 1) {
            overflowNotifications = notificationsArr[0];
        }
        else if (notificationsArr.length > 1) {
            overflowNotifications = " ";
        }
        this._overflowNotifications = overflowNotifications;
    }
    _observeContentItems() {
        if (JSON.stringify(this.contentItems) === JSON.stringify(this._observableContent)) {
            return false;
        }
        this.contentItems.forEach(item => {
            if (!this._observableContent.includes(item)) {
                this.contentItemsObserver.observe(item, {
                    characterData: false,
                    childList: false,
                    subtree: false,
                    attributes: true,
                    attributeFilter: ["data-hide-order"],
                });
            }
        });
        this._observableContent = this.contentItems;
    }
    _getOverflowPopover() {
        return this.shadowRoot.querySelector(".ui5-shellbar-overflow-popover");
    }
    _getMenuPopover() {
        return this.shadowRoot.querySelector(".ui5-shellbar-menu-popover");
    }
    isIconHidden(name) {
        const itemInfo = this._itemsInfo.find(item => item.icon === name);
        if (!itemInfo) {
            return false;
        }
        return itemInfo.classes.indexOf("ui5-shellbar-hidden-button") !== -1;
    }
    get contentItemsSorted() {
        return this.contentItems.toReversed().sort((a, b) => {
            return parseInt(a.getAttribute("data-hide-order") || "0") - parseInt(b.getAttribute("data-hide-order") || "0");
        });
    }
    get contentItemsWrappersSorted() {
        return this.contentItemsSorted.map(item => this.shadowRoot.querySelector(`#${item.slot}`)).filter(item => item !== null);
    }
    get autoSearchField() {
        const onFocus = document.activeElement === this.searchField[0];
        const isEmpty = this.searchField[0]?.value.length === 0;
        return (this.showSearchField || this._autoRestoreSearchField) && !onFocus && isEmpty;
    }
    get showStartSeparatorInWrapper() {
        // show separator at the beginning of content if more than one
        // item is visible, otherwise, the separator is packed with the
        // first visible item to be calculated with the next overflow action
        const starContent = this.startContent;
        const hiddenStartContentItems = this._contentInfo.filter(item => {
            const isHidden = item.classes.indexOf("ui5-shellbar-hidden-button") !== -1;
            const isInContent = starContent.find(contentItem => contentItem.slot === item.id);
            return isHidden && isInContent;
        }).map(item => item.id);
        return (starContent.length - hiddenStartContentItems.length) > 0;
    }
    get showEndSeparatorInWrapper() {
        // show separator at the end of content if more than one
        // item is visible, otherwise, the separator is packed with the
        // last visible item to be calculated with the next overflow
        const endContent = this.endContent;
        const hiddenEndContentItems = this._contentInfo.filter(item => {
            const isHidden = item.classes.indexOf("ui5-shellbar-hidden-button") !== -1;
            const isInContent = endContent.find(contentItem => contentItem.slot === item.id);
            return isHidden && isInContent;
        }).map(item => item.id);
        return (endContent.length - hiddenEndContentItems.length) > 0;
    }
    get classes() {
        return {
            wrapper: {
                "ui5-shellbar-root": true,
                "ui5-shellbar-with-searchfield": this.hasSearchField,
            },
            button: {
                "ui5-shellbar-menu-button--interactive": this.hasMenuItems,
            },
            notification: {
                "ui5-shellbar-hidden-button": this.isIconHidden("bell"),
            },
            search: {
                "ui5-shellbar-hidden-button": this.isIconHidden("search"),
            },
            overflow: {
                "ui5-shellbar-hidden-button": this._hiddenIcons.length === 0,
            },
            assistant: {
                "ui5-shellbar-hidden-button": this.isIconHidden("assistant"),
                "ui5-shellbar-assistant-button": true,
            },
        };
    }
    get styles() {
        return {
            searchField: {
                "display": this.showSearchField ? "flex" : "none",
            },
        };
    }
    get customItemsInfo() {
        return this._itemsInfo.filter(itemInfo => !!itemInfo.custom);
    }
    get hasLogo() {
        return !!this.logo.length;
    }
    get showLogoInMenuButton() {
        return this.hasLogo && (this.breakpointSize === "S");
    }
    get showTitleInMenuButton() {
        return this.primaryTitle && !(this.showLogoInMenuButton);
    }
    get showMenuButton() {
        return this.primaryTitle || this.showLogoInMenuButton;
    }
    get popoverHorizontalAlign() {
        return this.effectiveDir === "rtl" ? "Start" : "End";
    }
    get hasAssistant() {
        return !!this.assistant.length;
    }
    get hasSearchField() {
        return !!this.searchField.length;
    }
    get hasMidContent() {
        return !!this.midContent.length;
    }
    get hasProfile() {
        return !!this.profile.length;
    }
    get hasMenuItems() {
        return this.menuItems.length > 0;
    }
    get imageBtnText() {
        return getEffectiveAriaLabelText(this);
    }
    get _shellbarText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_LABEL);
    }
    get _logoText() {
        return this.accessibilityAttributes.logo?.name || ShellBar_1.i18nBundle.getText(SHELLBAR_LOGO);
    }
    get _notificationsText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_NOTIFICATIONS, this.notificationsCount || 0);
    }
    get _cancelBtnText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_CANCEL);
    }
    get _logoAreaText() {
        const primaryTitle = this.primaryTitle ?? "";
        const secondaryTitle = this.secondaryTitle ?? "";
        return ShellBar_1.i18nBundle.getText(SHELLBAR_LOGO_AREA, primaryTitle, secondaryTitle);
    }
    get _contentItemsText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_ADDITIONAL_CONTEXT);
    }
    get _searchFieldDescription() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_SEARCHFIELD_DESCRIPTION);
    }
    get _contentItemsRole() {
        if (this.contentItems.length === 1) {
            return;
        }
        return "group";
    }
    get contentItems() {
        return [...this.startContent, ...this.endContent];
    }
    get startContent() {
        // all items before the first spacer
        const spacerIndex = this.content.findIndex(child => child.hasAttribute("ui5-shellbar-spacer"));
        return this.content.slice(0, spacerIndex);
    }
    get endContent() {
        // all items after the first spacer
        const spacerIndex = this.content.findIndex(child => child.hasAttribute("ui5-shellbar-spacer"));
        return this.content.slice(spacerIndex + 1);
    }
    get _rightChildRole() {
        const items = this._getRightChildItems();
        const visibleItems = items.filter(item => {
            return this._isVisible(item);
        });
        if (visibleItems.length === 1) {
            return;
        }
        return "toolbar";
    }
    get _searchFieldText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_SEARCH_FIELD);
    }
    get _searchBtnOpen() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_SEARCH_BTN_OPEN);
    }
    get _productSwitchBtnText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_PRODUCT_SWITCH_BTN);
    }
    get isSearchFieldVisible() {
        return this.searchField[0]?.offsetWidth || 0;
    }
    get _profileText() {
        return this.accessibilityAttributes.profile?.name || ShellBar_1.i18nBundle.getText(SHELLBAR_PROFILE);
    }
    get _productsText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_PRODUCTS);
    }
    get _searchText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_SEARCH);
    }
    get _overflowText() {
        return ShellBar_1.i18nBundle.getText(SHELLBAR_OVERFLOW);
    }
    get hasContentItems() {
        return this.contentItems.length > 0;
    }
    get hidableDomElements() {
        const items = Array.from(this.shadowRoot.querySelectorAll(".ui5-shellbar-button:not(.ui5-shellbar-search-button):not(.ui5-shellbar-overflow-button):not(.ui5-shellbar-cancel-button):not(.ui5-shellbar-no-overflow-button)"));
        const assistant = this.shadowRoot.querySelector(".ui5-shellbar-assistant-button");
        const searchButton = this.shadowRoot.querySelector(".ui5-shellbar-search-button");
        const contentItems = this.contentItemsWrappersSorted;
        const firstContentItem = contentItems.pop();
        const prioritizeContent = this.showSearchField && this.hasSearchField;
        // order here is important for the responsive behavior, the items will be
        // measured and hidden in the order they are returned until no overlap is detected
        let itemsToHide = [];
        if (prioritizeContent) {
            // search field was toggled, the content items should make space for it
            const overflowItems = [...items, assistant];
            const visibleItems = overflowItems.filter(item => item && !item.classList.contains("ui5-shellbar-hidden-button"));
            const hiddenItems = overflowItems.filter(item => item && item.classList.contains("ui5-shellbar-hidden-button"));
            itemsToHide = [
                ...hiddenItems,
                ...contentItems,
                firstContentItem,
                ...visibleItems,
            ];
        }
        else {
            // search field is close, actions should go to the overflow first
            itemsToHide = [
                ...items.toReversed(),
                assistant,
                ...contentItems,
                searchButton,
                firstContentItem,
            ];
        }
        return itemsToHide.filter(Boolean);
    }
    get contentItemsHidden() {
        return this.contentItemsWrappersSorted.filter(item => item.classList.contains("ui5-shellbar-hidden-button"));
    }
    get overflowWrapper() {
        return this.shadowRoot.querySelector(".ui5-shellbar-overflow-container-right");
    }
    get overflowInner() {
        return this.shadowRoot.querySelector(".ui5-shellbar-overflow-container-right-inner");
    }
    get overflowed() {
        const wrapper = this.overflowWrapper;
        const inner = this.overflowInner;
        if (!wrapper || !inner) {
            return false;
        }
        return inner.offsetWidth > wrapper.offsetWidth;
    }
    get accInfo() {
        const overflowExpanded = this.accessibilityAttributes.overflow?.expanded;
        return {
            notifications: {
                "title": this._notificationsText,
                "accessibilityAttributes": {
                    expanded: this.accessibilityAttributes.notifications?.expanded,
                    hasPopup: this.accessibilityAttributes.notifications?.hasPopup,
                },
            },
            profile: {
                "title": this._profileText,
                "accessibilityAttributes": {
                    hasPopup: this.accessibilityAttributes.profile?.hasPopup,
                    expanded: this.accessibilityAttributes.profile?.expanded,
                },
            },
            products: {
                "title": this._productsText,
                "accessibilityAttributes": {
                    hasPopup: this.accessibilityAttributes.product?.hasPopup,
                    expanded: this.accessibilityAttributes.product?.expanded,
                },
            },
            search: {
                "title": this._searchText,
                "accessibilityAttributes": {
                    hasPopup: this.accessibilityAttributes.search?.hasPopup,
                },
            },
            overflow: {
                "title": this._overflowText,
                "accessibilityAttributes": {
                    hasPopup: this.accessibilityAttributes.overflow?.hasPopup || "menu",
                    expanded: overflowExpanded === undefined ? this._overflowPopoverExpanded : overflowExpanded,
                },
            },
        };
    }
    get accLogoRole() {
        return this.accessibilityAttributes.logo?.role || "link";
    }
    get isSBreakPoint() {
        return this.breakpointSize === "S";
    }
};
__decorate([
    property()
], ShellBar.prototype, "primaryTitle", void 0);
__decorate([
    property()
], ShellBar.prototype, "secondaryTitle", void 0);
__decorate([
    property()
], ShellBar.prototype, "notificationsCount", void 0);
__decorate([
    property({ type: Boolean })
], ShellBar.prototype, "showNotifications", void 0);
__decorate([
    property({ type: Boolean })
], ShellBar.prototype, "showProductSwitch", void 0);
__decorate([
    property({ type: Boolean })
], ShellBar.prototype, "showSearchField", void 0);
__decorate([
    property({ type: Object })
], ShellBar.prototype, "accessibilityAttributes", void 0);
__decorate([
    property()
], ShellBar.prototype, "breakpointSize", void 0);
__decorate([
    property({ type: Boolean })
], ShellBar.prototype, "withLogo", void 0);
__decorate([
    property({ type: Object })
], ShellBar.prototype, "_itemsInfo", void 0);
__decorate([
    property({ type: Object })
], ShellBar.prototype, "_contentInfo", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], ShellBar.prototype, "_menuPopoverExpanded", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], ShellBar.prototype, "_overflowPopoverExpanded", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], ShellBar.prototype, "showFullWidthSearch", void 0);
__decorate([
    slot()
], ShellBar.prototype, "assistant", void 0);
__decorate([
    slot({ type: HTMLElement, "default": true, invalidateOnChildChange: true })
], ShellBar.prototype, "items", void 0);
__decorate([
    slot()
], ShellBar.prototype, "profile", void 0);
__decorate([
    slot()
], ShellBar.prototype, "logo", void 0);
__decorate([
    slot()
], ShellBar.prototype, "menuItems", void 0);
__decorate([
    slot()
], ShellBar.prototype, "searchField", void 0);
__decorate([
    slot()
], ShellBar.prototype, "startButton", void 0);
__decorate([
    slot()
], ShellBar.prototype, "midContent", void 0);
__decorate([
    slot({ type: HTMLElement, individualSlots: true })
], ShellBar.prototype, "content", void 0);
__decorate([
    i18n("@ui5/webcomponents-fiori")
], ShellBar, "i18nBundle", void 0);
ShellBar = ShellBar_1 = __decorate([
    customElement({
        tag: "ui5-shellbar",
        fastNavigation: true,
        languageAware: true,
        renderer: jsxRenderer,
        template: ShellBarTemplate,
        styles: [shellBarStyles, ShellBarPopoverCss],
        dependencies: [
            Button,
            Icon,
            List,
            Popover,
            ListItemStandard,
            Menu,
        ],
    })
    /**
     *
     * Fired, when the notification icon is activated.
     * @param {HTMLElement} targetRef dom ref of the activated element
     * @public
     */
    ,
    event("notifications-click", {
        cancelable: true,
        bubbles: true,
    })
    /**
     * Fired, when the profile slot is present.
     * @param {HTMLElement} targetRef dom ref of the activated element
     * @public
     */
    ,
    event("profile-click", {
        bubbles: true,
    })
    /**
     * Fired, when the product switch icon is activated.
     *
     * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
     * @param {HTMLElement} targetRef dom ref of the activated element
     * @public
     */
    ,
    event("product-switch-click", {
        cancelable: true,
        bubbles: true,
    })
    /**
     * Fired, when the logo is activated.
     * @param {HTMLElement} targetRef dom ref of the activated element
     * @since 0.10
     * @public
     */
    ,
    event("logo-click", {
        bubbles: true,
    })
    /**
     * Fired, when a menu item is activated
     *
     * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
     * @param {HTMLElement} item DOM ref of the activated list item
     * @since 0.10
     * @public
     */
    ,
    event("menu-item-click", {
        bubbles: true,
        cancelable: true,
    })
    /**
     * Fired, when the search button is activated.
     *
     * **Note:** You can prevent expanding/collapsing of the search field by calling `event.preventDefault()`.
     * @param {HTMLElement} targetRef dom ref of the activated element
     * @param {Boolean} searchFieldVisible whether the search field is visible
     * @public
     */
    ,
    event("search-button-click", {
        cancelable: true,
        bubbles: true,
    })
    /**
     * Fired, when an item from the content slot is hidden or shown.
     * **Note:** The `content-item-visibility-change` event is in an experimental state and is a subject to change.
     *
     * @param {Array<HTMLElement>} array of all the items that are hidden
     * @public
     * @since 2.7.0
     */
    ,
    event("content-item-visibility-change", {
        bubbles: true,
    })
], ShellBar);
ShellBar.define();
export default ShellBar;
//# sourceMappingURL=ShellBar.js.map