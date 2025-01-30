/**
 * Determines where the badge will be placed and how it will be styled.
 * @since 2.7.0
 * @public
 */
var ButtonBadgeDesign;
(function (ButtonBadgeDesign) {
    /**
     * The badge is displayed after the text, inside the button.
     * @public
     */
    ButtonBadgeDesign["InlineText"] = "InlineText";
    /**
     * The badge is displayed at the top-end corner of the button.
     *
     * **Note:** It's highly recommended to use the OverlayText design mode only in cozy density.
     * @public
     */
    ButtonBadgeDesign["OverlayText"] = "OverlayText";
    /**
     * The badge is displayed as an attention dot.
     * @public
     */
    ButtonBadgeDesign["AttentionDot"] = "AttentionDot";
})(ButtonBadgeDesign || (ButtonBadgeDesign = {}));
export default ButtonBadgeDesign;
//# sourceMappingURL=ButtonBadgeDesign.js.map