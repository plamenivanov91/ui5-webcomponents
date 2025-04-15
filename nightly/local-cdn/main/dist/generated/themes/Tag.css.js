import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{font-size:var(--sapFontSmallSize);font-family:var(--sapFontBoldFamily);font-weight:var(--_ui5-v2-10-0-rc-0-tag-font-weight);letter-spacing:var(--_ui5-v2-10-0-rc-0-tag-letter-spacing);line-height:var(--_ui5-v2-10-0-rc-0-tag-height)}.ui5-tag-root{display:flex;align-items:baseline;justify-content:center;width:100%;min-width:1.125em;max-width:100%;box-sizing:border-box;padding:var(--_ui5-v2-10-0-rc-0-tag-text-padding);border:.0625rem solid;border-radius:var(--sapButton_BorderCornerRadius);white-space:normal;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit}:host([interactive]) .ui5-tag-root:active{text-shadow:var(--ui5-v2-10-0-rc-0-tag-text-shadow)}:host([interactive]) .ui5-tag-root{cursor:pointer}:host([desktop][interactive]) .ui5-tag-root:focus,:host([interactive]) .ui5-tag-root:focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:1px}:host([wrapping-type="None"]) .ui5-tag-root{white-space:nowrap}:host([_icon-only]) .ui5-tag-root{padding-inline:var(--_ui5-v2-10-0-rc-0-tag-padding-inline-icon-only)}.ui5-tag-text{text-transform:var(--_ui5-v2-10-0-rc-0-tag-text-transform);text-align:start;pointer-events:none;overflow:hidden;text-overflow:ellipsis}:host([_has-icon]) .ui5-tag-text{padding-inline-start:var(--_ui5-v2-10-0-rc-0-tag-icon-gap)}[ui5-icon],::slotted([ui5-icon]){width:var(--_ui5-v2-10-0-rc-0-tag-icon-width);min-width:var(--_ui5-v2-10-0-rc-0-tag-icon-width);color:inherit;pointer-events:none;align-self:flex-start}.ui5-tag-root{background-color:var(--sapNeutralBackground);border-color:var(--sapNeutralBorderColor);color:var(--sapTextColor);text-shadow:var(--ui5-v2-10-0-rc-0-tag-text-shadow)}:host([interactive]) .ui5-tag-root:hover{background-color:var(--sapButton_Neutral_Hover_Background);border-color:var(--sapButton_Neutral_Hover_BorderColor);color:var(--sapButton_Neutral_Hover_TextColor)}:host([interactive]) .ui5-tag-root:active{background-color:var(--sapButton_Neutral_Active_Background);border-color:var(--sapButton_Neutral_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design="Positive"]) .ui5-tag-root{background-color:var(--sapButton_Success_Background);border-color:var(--sapButton_Success_BorderColor);color:var(--sapButton_Success_TextColor);text-shadow:var(--ui5-v2-10-0-rc-0-tag-contrast-text-shadow)}:host([interactive][design="Positive"]) .ui5-tag-root:hover{background-color:var(--sapButton_Success_Hover_Background);border-color:var(--sapButton_Success_Hover_BorderColor);color:var(--sapButton_Success_Hover_TextColor)}:host([interactive][design="Positive"]) .ui5-tag-root:active{background-color:var(--sapButton_Success_Active_Background);border-color:var(--sapButton_Success_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Negative"]) .ui5-tag-root{background-color:var(--sapButton_Negative_Background);border-color:var(--sapButton_Negative_BorderColor);color:var(--sapButton_Negative_TextColor);text-shadow:var(--ui5-v2-10-0-rc-0-tag-contrast-text-shadow)}:host([interactive][design="Negative"]) .ui5-tag-root:hover{background-color:var(--sapButton_Negative_Hover_Background);border-color:var(--sapButton_Negative_Hover_BorderColor);color:var(--sapButton_Negative_Hover_TextColor)}:host([interactive][design="Negative"]) .ui5-tag-root:active{background-color:var(--sapButton_Negative_Active_Background);border-color:var(--sapButton_Negative_Active_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Critical"]) .ui5-tag-root{background-color:var(--sapButton_Critical_Background);border-color:var(--sapButton_Critical_BorderColor);color:var(--sapButton_Critical_TextColor);text-shadow:var(--ui5-v2-10-0-rc-0-tag-contrast-text-shadow)}:host([interactive][design="Critical"]) .ui5-tag-root:hover{background-color:var(--sapButton_Critical_Hover_Background);border-color:var(--sapButton_Critical_Hover_BorderColor);color:var(--sapButton_Critical_Hover_TextColor)}:host([interactive][design="Critical"]) .ui5-tag-root:active{background-color:var(--sapButton_Critical_Active_Background);border-color:var(--sapButton_Critical_Active_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Information"]) .ui5-tag-root{background-color:var(--sapButton_Information_Background);border-color:var(--sapButton_Information_BorderColor);color:var(--sapButton_Information_TextColor);text-shadow:var(--ui5-v2-10-0-rc-0-tag-information-text-shadow)}:host([interactive][design="Information"]) .ui5-tag-root:hover{background-color:var(--sapButton_Information_Hover_Background);border-color:var(--sapButton_Information_Hover_BorderColor);color:var(--sapButton_Information_Hover_TextColor)}:host([interactive][design="Information"]) .ui5-tag-root:active{background-color:var(--sapButton_Information_Active_Background);border-color:var(--sapButton_Information_Active_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design="Set1"]) .ui5-tag-root{text-shadow:var(--ui5-v2-10-0-rc-0-tag-contrast-text-shadow)}:host([design="Set1"]) .ui5-tag-root,:host([interactive][design="Set1"]) .ui5-tag-root{background-color:var(--sapIndicationColor_1_Background);border-color:var(--sapIndicationColor_1_BorderColor);color:var(--sapIndicationColor_1_TextColor)}:host([interactive][design="Set1"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_1_Hover_Background)}:host([interactive][design="Set1"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_1_Active_Background);border-color:var(--sapIndicationColor_1_Active_BorderColor);color:var(--sapIndicationColor_1_Active_TextColor)}:host([design="Set1"][color-scheme="2"]) .ui5-tag-root{background-color:var(--sapIndicationColor_2_Background);border-color:var(--sapIndicationColor_2_BorderColor);color:var(--sapIndicationColor_2_TextColor)}:host([interactive][design="Set1"][color-scheme="2"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_2_Hover_Background)}:host([interactive][design="Set1"][color-scheme="2"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_2_Active_Background);border-color:var(--sapIndicationColor_2_Active_BorderColor);color:var(--sapIndicationColor_2_Active_TextColor)}:host([design="Set1"][color-scheme="3"]) .ui5-tag-root{background-color:var(--sapIndicationColor_3_Background);border-color:var(--sapIndicationColor_3_BorderColor);color:var(--sapIndicationColor_3_TextColor)}:host([interactive][design="Set1"][color-scheme="3"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_3_Hover_Background)}:host([interactive][design="Set1"][color-scheme="3"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_3_Active_Background);border-color:var(--sapIndicationColor_3_Active_BorderColor);color:var(--sapIndicationColor_3_Active_TextColor)}:host([design="Set1"][color-scheme="4"]) .ui5-tag-root{background-color:var(--sapIndicationColor_4_Background);border-color:var(--sapIndicationColor_4_BorderColor);color:var(--sapIndicationColor_4_TextColor)}:host([interactive][design="Set1"][color-scheme="4"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_4_Hover_Background)}:host([interactive][design="Set1"][color-scheme="4"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_4_Active_Background);border-color:var(--sapIndicationColor_4_Active_BorderColor);color:var(--sapIndicationColor_4_Active_TextColor)}:host([design="Set1"][color-scheme="5"]) .ui5-tag-root{background-color:var(--sapIndicationColor_5_Background);border-color:var(--sapIndicationColor_5_BorderColor);color:var(--sapIndicationColor_5_TextColor)}:host([interactive][design="Set1"][color-scheme="5"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_5_Hover_Background)}:host([interactive][design="Set1"][color-scheme="5"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_5_Active_Background);border-color:var(--sapIndicationColor_5_Active_BorderColor);color:var(--sapIndicationColor_5_Active_TextColor)}:host([design="Set1"][color-scheme="6"]) .ui5-tag-root{background-color:var(--sapIndicationColor_6_Background);border-color:var(--sapIndicationColor_6_BorderColor);color:var(--sapIndicationColor_6_TextColor)}:host([interactive][design="Set1"][color-scheme="6"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_6_Hover_Background)}:host([interactive][design="Set1"][color-scheme="6"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_6_Active_Background);border-color:var(--sapIndicationColor_6_Active_BorderColor);color:var(--sapIndicationColor_6_Active_TextColor)}:host([design="Set1"][color-scheme="7"]) .ui5-tag-root{background-color:var(--sapIndicationColor_7_Background);border-color:var(--sapIndicationColor_7_BorderColor);color:var(--sapIndicationColor_7_TextColor)}:host([interactive][design="Set1"][color-scheme="7"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_7_Hover_Background)}:host([interactive][design="Set1"][color-scheme="7"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_7_Active_Background);border-color:var(--sapIndicationColor_7_Active_BorderColor);color:var(--sapIndicationColor_7_Active_TextColor)}:host([design="Set1"][color-scheme="8"]) .ui5-tag-root{background-color:var(--sapIndicationColor_8_Background);border-color:var(--sapIndicationColor_8_BorderColor);color:var(--sapIndicationColor_8_TextColor)}:host([interactive][design="Set1"][color-scheme="8"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_8_Hover_Background)}:host([interactive][design="Set1"][color-scheme="8"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_8_Active_Background);border-color:var(--sapIndicationColor_8_Active_BorderColor);color:var(--sapIndicationColor_8_Active_TextColor)}:host([design="Set1"][color-scheme="9"]) .ui5-tag-root{background-color:var(--sapIndicationColor_9_Background);border-color:var(--sapIndicationColor_9_BorderColor);color:var(--sapIndicationColor_9_TextColor)}:host([interactive][design="Set1"][color-scheme="9"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_9_Hover_Background)}:host([interactive][design="Set1"][color-scheme="9"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_9_Active_Background);border-color:var(--sapIndicationColor_9_Active_BorderColor);color:var(--sapIndicationColor_9_Active_TextColor)}:host([design="Set1"][color-scheme="10"]) .ui5-tag-root{background-color:var(--sapIndicationColor_10_Background);border-color:var(--sapIndicationColor_10_BorderColor);color:var(--sapIndicationColor_10_TextColor)}:host([interactive][design="Set1"][color-scheme="10"]) .ui5-tag-root:hover{background-color:var(--sapIndicationColor_10_Hover_Background)}:host([interactive][design="Set1"][color-scheme="10"]) .ui5-tag-root:active{background-color:var(--sapIndicationColor_10_Active_Background);border-color:var(--sapIndicationColor_10_Active_BorderColor);color:var(--sapIndicationColor_10_Active_TextColor)}:host([design="Set2"]) .ui5-tag-root{text-shadow:var(--ui5-v2-10-0-rc-0-tag-text-shadow)}:host([design="Set2"]) .ui5-tag-root,:host([interactive][design="Set2"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-1-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-1-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-1-color)}:host([interactive][design="Set2"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-1-hover-background)}:host([interactive][design="Set2"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-1-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-1-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-1-active-color)}:host([design="Set2"][color-scheme="2"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-2-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-2-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-2-color)}:host([design="Set2"][color-scheme="3"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-3-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-3-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-3-color)}:host([interactive][design="Set2"][color-scheme="3"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-3-hover-background)}:host([interactive][design="Set2"][color-scheme="3"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-3-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-3-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-3-active-color)}:host([design="Set2"][color-scheme="4"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-4-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-4-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-4-color)}:host([interactive][design="Set2"][color-scheme="4"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-4-hover-background)}:host([interactive][design="Set2"][color-scheme="4"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-4-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-4-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-4-active-color)}:host([design="Set2"][color-scheme="5"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-5-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-5-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-5-color)}:host([interactive][design="Set2"][color-scheme="5"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-5-hover-background)}:host([interactive][design="Set2"][color-scheme="5"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-5-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-5-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-5-active-color)}:host([design="Set2"][color-scheme="6"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-6-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-6-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-6-color)}:host([interactive][design="Set2"][color-scheme="6"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-6-hover-background)}:host([interactive][design="Set2"][color-scheme="6"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-6-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-6-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-6-active-color)}:host([design="Set2"][color-scheme="7"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-7-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-7-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-7-color)}:host([interactive][design="Set2"][color-scheme="7"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-7-hover-background)}:host([interactive][design="Set2"][color-scheme="7"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-7-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-7-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-7-active-color)}:host([design="Set2"][color-scheme="8"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-8-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-8-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-8-color)}:host([interactive][design="Set2"][color-scheme="8"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-8-hover-background)}:host([interactive][design="Set2"][color-scheme="8"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-8-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-8-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-8-active-color)}:host([design="Set2"][color-scheme="9"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-9-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-9-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-9-color)}:host([interactive][design="Set2"][color-scheme="9"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-9-hover-background)}:host([interactive][design="Set2"][color-scheme="9"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-9-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-9-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-9-active-color)}:host([interactive][design="Set2"][color-scheme="10"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-10-hover-background)}:host([interactive][design="Set2"][color-scheme="10"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-10-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-10-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-10-active-color)}:host([design="Set2"][color-scheme="10"]) .ui5-tag-root{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-10-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-10-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-10-color)}:host([interactive][design="Set2"][color-scheme="2"]) .ui5-tag-root:hover{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-2-hover-background)}:host([interactive][design="Set2"][color-scheme="2"]) .ui5-tag-root:active{background-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-2-active-background);border-color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-2-active-border);color:var(--ui5-v2-10-0-rc-0-tag-set2-color-scheme-2-active-color)}:host([size="L"]){font-family:var(--sapFontSemiboldDuplexFamily);line-height:var(--_ui5-v2-10-0-rc-0-tag-height_size_l)}:host([size="L"]) .ui5-tag-root{font-size:var(--_ui5-v2-10-0-rc-0-tag-font-size_size_l);min-width:var(--_ui5-v2-10-0-rc-0-tag-min-width_size_l);padding:var(--_ui5-v2-10-0-rc-0-tag-text_padding_size_l)}:host([size="L"]) [ui5-icon],:host([size="L"]) ::slotted([ui5-icon]){min-width:var(--_ui5-v2-10-0-rc-0-tag-icon_min_width_size_l);min-height:var(--_ui5-v2-10-0-rc-0-tag-icon_min_height_size_l);height:var(--_ui5-v2-10-0-rc-0-tag-icon_height_size_l)}
`;
//# sourceMappingURL=Tag.css.js.map