import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{flex-grow:1}#growing-button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}#growing-button{margin:0;padding:0;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}@media (hover: hover){#growing-button:hover{background:var(--sapButton_Hover_Background)}}#growing-button:active,#growing-button[data-ui5-growing-active=true]{background:var(--sapList_Active_Background)}#growing-text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#growing-subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;
//# sourceMappingURL=TableGrowing.css.js.map