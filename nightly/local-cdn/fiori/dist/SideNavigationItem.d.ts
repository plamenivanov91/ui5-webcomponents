import SideNavigationItemBase from "./SideNavigationItemBase.js";
import type SideNavigationSubItem from "./SideNavigationSubItem.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-side-navigation-item` is used within `ui5-side-navigation` only.
 * Via the `ui5-side-navigation-item` you control the content of the `SideNavigation`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";`
 * @constructor
 * @extends SideNavigationItemBase
 * @abstract
 * @public
 * @since 1.0.0-rc.8
 */
declare class SideNavigationItem extends SideNavigationItemBase {
    /**
     * Defines if the item is expanded
     * @public
     * @default false
     */
    expanded: boolean;
    /**
     * Defines if the item should be collapsible or not.
     * It is true, for example, for the items inside the Popover of the Side Navigation
     * @private
     * @default false
     * @since 1.10.0
     */
    _fixed: boolean;
    /**
     * Defines nested items by passing `ui5-side-navigation-sub-item` to the default slot.
     * @public
     */
    items: Array<SideNavigationSubItem>;
    /**
     * Defines whether clicking the whole item or only pressing the icon will show/hide the sub items (if present).
     * If set to true, clicking the whole item will toggle the sub items, and it won't fire the `click` event.
     * By default, only clicking the arrow icon will toggle the sub items.
     * @public
     * @default false
     * @since 1.0.0-rc.11
     */
    wholeItemToggleable: boolean;
    get _ariaHasPopup(): "tree" | undefined;
    get _groupId(): string | undefined;
    get _expanded(): boolean | undefined;
    get _toggleIconName(): "navigation-right-arrow" | "navigation-down-arrow";
    get classesArray(): string[];
    get _selected(): boolean;
    get isFixedItem(): boolean;
    _onToggleClick: (e: PointerEvent) => void;
    _onkeydown: (e: KeyboardEvent) => void;
    _onkeyup: (e: KeyboardEvent) => void;
    _onfocusin: (e: FocusEvent) => void;
    _onclick: (e: PointerEvent) => void;
    _onfocusout: () => void;
    _onmouseenter: () => void;
    _onmouseleave: () => void;
}
export default SideNavigationItem;
