import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import type SideNavigation from "./SideNavigation.js";
/**
 * Fired when the component is activated either with a
 * click/tap or by using the Enter or Space key.
 * @public
 */
declare class SideNavigationItemBase extends UI5Element implements ITabbable {
    /**
     * Defines the text of the item.
     * @public
     * @default ""
     */
    text: string;
    /**
     * Defines the icon of the item.
     *
     * The SAP-icons font provides numerous options.
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @public
     * @default ""
     */
    icon: string;
    /**
     * Defines whether the item is selected
     * @public
     * @default false
     */
    selected: boolean;
    /**
     * Defines the link target URI. Supports standard hyperlink behavior.
     * If a JavaScript action should be triggered,
     * this should not be set, but instead an event handler
     * for the `click` event should be registered.
     * @public
     * @default ""
     * @since 1.19.0
     */
    href: string;
    /**
     * Defines the component target.
     *
     * **Notes:**
     *
     * - `_self`
     * - `_top`
     * - `_blank`
     * - `_parent`
     * - `_search`
     *
     * **This property must only be used when the `href` property is set.**
     * @public
     * @default ""
     * @since 1.19.0
     */
    target: string;
    /**
     * Defines whether the component is disabled.
     * A disabled component can't be pressed or
     * focused, and it is not in the tab chain.
     * @default false
     * @public
     * @since 1.19.0
     */
    disabled: boolean;
    /**
     * Defines the tooltip of the component.
     * @default ""
     * @private
     * @since 1.0.0-rc.16
     */
    title: string;
    forcedTabIndex: string;
    get _tooltip(): string;
    get _href(): string | undefined;
    get _target(): string | undefined;
    get _selected(): boolean;
    get classesArray(): string[];
    get _classes(): string;
    get _ariaCurrent(): "page" | undefined;
    get _effectiveTabIndex(): string | undefined;
    get _isExternalLink(): boolean | "";
    get sideNavigation(): SideNavigation | undefined;
    getDomRef(): HTMLElement;
    _onkeydown(e: KeyboardEvent): void;
    _onkeyup(e: KeyboardEvent): void;
    _onclick(e: PointerEvent): void;
    get isFixedItem(): boolean;
    _onfocusin(e: FocusEvent): void;
    _activate(e: KeyboardEvent | PointerEvent): void;
}
export default SideNavigationItemBase;
