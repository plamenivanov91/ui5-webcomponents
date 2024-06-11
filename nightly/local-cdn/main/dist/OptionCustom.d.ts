import type { IOption } from "./Select.js";
import ListItemBase from "./ListItemBase.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-option-custom` component defines a custom content of an option in the `ui5-select`.
 * A component to be the same way as the standard `ui5-option`.
 * The component accepts arbitrary HTML content to allow full customization.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/OptionCustom.js";`
 * @constructor
 * @since 2.0.0
 * @extends ListItemBase
 * @implements {IOption}
 * @public
 */
declare class OptionCustom extends ListItemBase implements IOption {
    /**
     * Defines the text, displayed inside the `ui5-select` input filed
     * when the option gets selected.
     * @default ""
     * @public
     */
    displayText: string;
    /**
     * Defines the value of the `ui5-select` inside an HTML Form element when this component is selected.
     * For more information on HTML Form support, see the `name` property of `ui5-select`.
     * @default ""
     * @public
     */
    value: string;
    /**
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     * @public
     */
    content: Array<Node>;
    /**
     * Defines the text of the tooltip that would be displayed for the list item.
     * @default ""
     * @public
     */
    tooltip: string;
    onEnterDOM(): void;
    get effectiveDisplayText(): string;
}
export default OptionCustom;
