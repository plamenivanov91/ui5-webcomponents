import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type BadgeDesign from "./types/ButtonBadgeDesign.js";
/**
 * @class
 *
 * The `ui5-button-badge` component defines a badge that appears in the `ui5-button`.
 *
 *  * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/ButtonBadge.js";`
 * @constructor
 * @extends UI5Element
 * @since 2.7.0
 * @public
 */
declare class ButtonBadge extends UI5Element {
    /**
     * Determines where the badge should be placed and how it should be styled.
     * @since 2.7.0
     * @public
    */
    design: `${BadgeDesign}`;
    /**
     * Defines the text of the component.
     *
     * **Note:** Text is not needed when the `design` property is set to `AttentionDot`.
     * @since 2.7.0
     * @public
    */
    text: string;
}
export default ButtonBadge;
