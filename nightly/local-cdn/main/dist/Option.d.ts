import type { IOption } from "./Select.js";
import ListItemBase from "./ListItemBase.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-option` component defines the content of an option in the `ui5-select`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/Option.js";`
 * @constructor
 * @extends ListItemBase
 * @implements {IOption}
 * @public
 */
declare class Option extends ListItemBase implements IOption {
    /**
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     * @public
     */
    text: Array<Node>;
    /**
     * Defines the value of the `ui5-select` inside an HTML Form element when this component is selected.
     * For more information on HTML Form support, see the `name` property of `ui5-select`.
     * @default ""
     * @public
     */
    value: string;
    /**
     * Defines the `icon` source URI.
     *
     * **Note:**
     * SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @default ""
     * @public
     */
    icon: string;
    /**
     * Defines the `additionalText`, displayed in the end of the list item.
     * @default ""
     * @public
     * @since 1.0.0-rc.15
     */
    additionalText: string;
    /**
     * Defines the text of the tooltip that would be displayed for the list item.
     * @default ""
     * @public
     * @since 1.23.0
     */
    tooltip: string;
    onEnterDOM(): void;
    get displayIconBegin(): boolean;
    get effectiveDisplayText(): string;
}
export default Option;
