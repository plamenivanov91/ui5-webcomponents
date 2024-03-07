import SideNavigationItemBase from "./SideNavigationItemBase.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-side-navigation-sub-item` is intended to be used inside a `ui5-side-navigation-item` only.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";`
 * @constructor
 * @extends SideNavigationItemBase
 * @public
 * @abstract
 * @since 1.0.0-rc.8
 */
declare class SideNavigationSubItem extends SideNavigationItemBase {
    get isFixedItem(): boolean;
    _onkeydown: (e: KeyboardEvent) => void;
    _onkeyup: (e: KeyboardEvent) => void;
    _onfocusin: (e: FocusEvent) => void;
    _onclick: (e: PointerEvent) => void;
}
export default SideNavigationSubItem;
