import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type Table from "./Table.js";
import type { ITableGrowing } from "./Table.js";
import TableGrowingMode from "./types/TableGrowingMode.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-table-growing` component is used inside the `ui5-table` to add a growing/data loading functionalities
 * to the table.
 *
 * The component offers two options:
 * * Button - a More button is displayed, clicking it will load more data.
 * * Scroll - additional data is loaded automatically when the user scrolls to the end of the table.
 *
 * ### Usage
 *
 * The `ui5-table-growing` component is only used inside the `ui5-table` component as a feature.
 * It has to be slotted inside the `ui5-table` in the `features` slot.
 * The component is not intended to be used as a standalone component.
 *
 * ```html
 * <ui5-table>
 * 	<ui5-table-growing type="Button" growing-text="More" slot="features"></ui5-table-growing>
 * </ui5-table>
 * ```
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TableGrowing.js";`
 *
 * @constructor
 * @extends UI5Element
 * @since 2.0
 * @public
 */
declare class TableGrowing extends UI5Element implements ITableGrowing {
    /**
     * Defines the mode of the <code>ui5-table</code> growing.
     *
     * Available options are:
     *
     * Button - Shows a More button at the bottom of the table, pressing it will load more rows.
     *
     * Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable, this option is the same as the Button.
     * @default "Button"
     * @public
     */
    type: `${TableGrowingMode}`;
    /**
     * Defines the text that will be displayed inside the growing button.
     * Has no effect when type is set to `Scroll`.
     *
     * **Note:** When not provided and the type is set to Button, a default text is displayed, corresponding to the
     * current language.
     *
     * @default ""
     * @public
     */
    growingText: string;
    /**
     * Defines the text that will be displayed below the `growingText` inside the growing button.
     * Has no effect when type is set to Scroll.
     *
     * @default ""
     * @public
     */
    growingSubText: string;
    /**
     * Disables the growing feature.
     */
    disabled: boolean;
    /**
     * Defines the active state of the growing button.
     * Used for keyboard interaction.
     * @private
     */
    _activeState?: boolean;
    _table?: Table;
    _observer?: IntersectionObserver;
    _individualSlot?: string;
    _currentLastRow?: HTMLElement;
    _shouldFocusRow?: boolean;
    static i18nBundle: I18nBundle;
    static onDefine(): Promise<void>;
    onTableActivate(table: Table): void;
    onTableRendered(): void;
    onExitDOM(): void;
    onBeforeRendering(): void;
    hasGrowingComponent(): boolean;
    /**
     * An event handler that can be used by the Table to notify the TableGrowing that
     * the Table is growing either by pressing the load more button or by scrolling to the end of the table.
     */
    loadMore(): void;
    _hasScrollToLoad(): boolean;
    /**
     * Observes the end of the table.
     * @private
     */
    _observeTableEnd(): void;
    /**
     * Returns the IntersectionObserver instance. If it does not exist, it will be created.
     * The observer will call the loadMore function when the end of the table is reached.
     * @private
     */
    _getIntersectionObserver(): IntersectionObserver;
    _onIntersection(entries: Array<IntersectionObserverEntry>): void;
    _invalidateTable(): void;
    /**
     * Handles the keydown event on the growing button.
     *
     * Calls the loadMore function when the Enter and Space keys are pressed.
     * @private
     */
    _onKeydown(e: KeyboardEvent): void;
    _onKeyup(e: KeyboardEvent): void;
    _onFocusout(): void;
    get _growingButtonText(): string;
    get _growingButtonDescription(): string;
    get _hasGrowingButton(): boolean;
}
export default TableGrowing;
