import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import CalendarLegendItemType from "./types/CalendarLegendItemType.js";
import CalendarLegendItem from "./CalendarLegendItem.js";
type CalendarLegendItemSelectionChangeEventDetail = {
    item: CalendarLegendItem;
};
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-calendar-legend` component is designed for use within the `ui5-calendar` to display a legend.
 * Each `ui5-calendar-legend-item` represents a unique date type, specifying its visual style
 * and a corresponding textual label.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/CalendarLegend.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.23.0
 */
declare class CalendarLegend extends UI5Element {
    /**
     * Hides the Today item in the legend.
     * @default false
     * @public
     */
    hideToday: boolean;
    /**
     * Hides the Selected day item in the legend.
     * @default false
     * @public
     */
    hideSelectedDay: boolean;
    /**
     * Hides the Non-Working day item in the legend.
     * @default false
     * @public
     */
    hideNonWorkingDay: boolean;
    /**
     * Hides the Working day item in the legend.
     * @default false
     * @public
     */
    hideWorkingDay: boolean;
    /**
     * Defines the items of the component.
     * @public
     */
    items: Array<CalendarLegendItem>;
    _itemNavigation: ItemNavigation;
    _lastFocusedItemIndex: number | null;
    constructor();
    onAfterRendering(): void;
    _onMouseDown(e: MouseEvent): void;
    _onFocusIn(e: FocusEvent): void;
    _onFocusOut(): void;
    _onItemKeyDown(e: KeyboardEvent): void;
    get focusableElements(): CalendarLegendItem[];
    get legendItems(): CalendarLegendItem[];
    get defaultItemsMapping(): {
        type: CalendarLegendItemType[];
        hide: boolean;
    }[];
}
export default CalendarLegend;
export type { CalendarLegendItemSelectionChangeEventDetail, };