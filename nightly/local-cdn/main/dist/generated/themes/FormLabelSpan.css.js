import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/FormLabelSpan.css.ts", content: `@container (max-width: 600px){:host([label-span-s="1"]) .ui5-form-item,:host([label-span-s="1"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span1)}:host([label-span-s="2"]) .ui5-form-item,:host([label-span-s="2"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span2)}:host([label-span-s="3"]) .ui5-form-item,:host([label-span-s="3"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span3)}:host([label-span-s="4"]) .ui5-form-item,:host([label-span-s="4"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span4)}:host([label-span-s="5"]) .ui5-form-item,:host([label-span-s="5"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span5)}:host([label-span-s="6"]) .ui5-form-item,:host([label-span-s="6"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span6)}:host([label-span-s="7"]) .ui5-form-item,:host([label-span-s="7"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span7)}:host([label-span-s="8"]) .ui5-form-item,:host([label-span-s="8"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span8)}:host([label-span-s="9"]) .ui5-form-item,:host([label-span-s="9"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span9)}:host([label-span-s="10"]) .ui5-form-item,:host([label-span-s="10"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span10)}:host([label-span-s="11"]) .ui5-form-item,:host([label-span-s="11"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span11)}:host(:not([label-span-s])) .ui5-form-item,:host(:not([label-span-s])) .ui5-form-group,:host([label-span-s="12"]) .ui5-form-item,:host([label-span-s="12"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span12);--ui5-v2-3-0-rc-1-form-item-label-justify: var(--ui5-v2-3-0-rc-1-form-item-label-justify-span12);--ui5-v2-3-0-rc-1-form-item-label-padding: var(--ui5-v2-3-0-rc-1-form-item-label-padding-span12)}}@container (width > 600px) and (width <= 1024px){:host([label-span-m="1"]) .ui5-form-item,:host([label-span-m="1"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span1)}:host([label-span-m="2"]) .ui5-form-item,:host([label-span-m="2"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span2)}:host([label-span-m="3"]) .ui5-form-item,:host([label-span-m="3"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span3)}:host([label-span-m="4"]) .ui5-form-item,:host([label-span-m="4"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span4)}:host([label-span-m="5"]) .ui5-form-item,:host([label-span-m="5"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span5)}:host([label-span-m="6"]) .ui5-form-item,:host([label-span-m="6"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span6)}:host([label-span-m="7"]) .ui5-form-item,:host([label-span-m="7"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span7)}:host([label-span-m="8"]) .ui5-form-item,:host([label-span-m="8"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span8)}:host([label-span-m="9"]) .ui5-form-item,:host([label-span-m="9"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span9)}:host([label-span-m="10"]) .ui5-form-item,:host([label-span-m="10"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span10)}:host([label-span-m="11"]) .ui5-form-item,:host([label-span-m="11"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span11)}:host([label-span-m="12"]) .ui5-form-item,:host([label-span-m="12"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span12);--ui5-v2-3-0-rc-1-form-item-label-justify: var(--ui5-v2-3-0-rc-1-form-item-label-justify-span12);--ui5-v2-3-0-rc-1-form-item-label-padding: var(--ui5-v2-3-0-rc-1-form-item-label-padding-span12)}}@container (width > 1024px) and (width <= 1440px){:host([label-span-l="1"]) .ui5-form-item,:host([label-span-l="1"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span1)}:host([label-span-l="2"]) .ui5-form-item,:host([label-span-l="2"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span2)}:host([label-span-l="3"]) .ui5-form-item,:host([label-span-l="3"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span3)}:host([label-span-l="4"]) .ui5-form-item,:host([label-span-l="4"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span4)}:host([label-span-l="5"]) .ui5-form-item,:host([label-span-l="5"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span5)}:host([label-span-l="6"]) .ui5-form-item,:host([label-span-l="6"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span6)}:host([label-span-l="7"]) .ui5-form-item,:host([label-span-l="7"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span7)}:host([label-span-l="8"]) .ui5-form-item,:host([label-span-l="8"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span8)}:host([label-span-l="9"]) .ui5-form-item,:host([label-span-l="9"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span9)}:host([label-span-l="10"]) .ui5-form-item,:host([label-span-l="10"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span10)}:host([label-span-l="11"]) .ui5-form-item,:host([label-span-l="11"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span11)}:host([label-span-l="12"]) .ui5-form-item,:host([label-span-l="12"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span12);--ui5-v2-3-0-rc-1-form-item-label-justify: var(--ui5-v2-3-0-rc-1-form-item-label-justify-span12);--ui5-v2-3-0-rc-1-form-item-label-padding: var(--ui5-v2-3-0-rc-1-form-item-label-padding-span12)}}@container (min-width: 1441px){:host([label-span-xl="1"]) .ui5-form-item,:host([label-span-xl="1"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span1)}:host([label-span-xl="2"]) .ui5-form-item,:host([label-span-xl="2"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span2)}:host([label-span-xl="3"]) .ui5-form-item,:host([label-span-xl="3"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span3)}:host([label-span-xl="4"]) .ui5-form-item,:host([label-span-xl="4"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span4)}:host([label-span-xl="5"]) .ui5-form-item,:host([label-span-xl="5"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span5)}:host([label-span-xl="6"]) .ui5-form-item,:host([label-span-xl="6"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span6)}:host([label-span-xl="7"]) .ui5-form-item,:host([label-span-xl="7"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span7)}:host([label-span-xl="8"]) .ui5-form-item,:host([label-span-xl="8"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span8)}:host([label-span-xl="9"]) .ui5-form-item,:host([label-span-xl="9"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span9)}:host([label-span-xl="10"]) .ui5-form-item,:host([label-span-xl="10"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span10)}:host([label-span-xl="11"]) .ui5-form-item,:host([label-span-xl="11"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span11)}:host([label-span-xl="12"]) .ui5-form-item,:host([label-span-xl="12"]) .ui5-form-group{--ui5-v2-3-0-rc-1-form-item-layout: var(--ui5-v2-3-0-rc-1-form-item-layout-span12);--ui5-v2-3-0-rc-1-form-item-label-justify: var(--ui5-v2-3-0-rc-1-form-item-label-justify-span12);--ui5-v2-3-0-rc-1-form-item-label-padding: var(--ui5-v2-3-0-rc-1-form-item-label-padding-span12)}}
` };
export default styleData;
//# sourceMappingURL=FormLabelSpan.css.js.map