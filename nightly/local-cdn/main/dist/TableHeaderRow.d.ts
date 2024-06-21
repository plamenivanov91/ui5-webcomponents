import TableRowBase from "./TableRowBase.js";
import TableHeaderCell from "./TableHeaderCell.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-table-header-row` component represents the table headers of a `ui5-table`.
 *
 * It is tightly coupled to the `ui5-table` and should therefore be used in the `ui5-table` only.
 * The header row is placed in the `headerRow` slot of the table.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TableHeaderRow.js";`
 *
 * @constructor
 * @extends TableRowBase
 * @since 2.0
 * @public
 */
declare class TableHeaderRow extends TableRowBase {
    /**
     * Defines the cells of the component.
     *
     * **Note:** Use `ui5-table-header-cell` for the intended design.
     *
     * @public
     */
    cells: Array<TableHeaderCell>;
    /**
     * Sticks the `ui5-table-header-row` to the top of a table.
     *
     * @default false
     * @public
     */
    sticky: boolean;
    onBeforeRendering(): void;
    isHeaderRow(): boolean;
    get _isSelectable(): boolean | undefined;
    get _isSelected(): boolean | undefined;
    get _i18nSelection(): string;
    get _i18nRowPopin(): string;
}
export default TableHeaderRow;
