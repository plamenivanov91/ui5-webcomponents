import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/multiple-bar-chart.js";
import { pathData as pathDatav5 } from "./v5/multiple-bar-chart.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "multiple-bar-chart";
export { pathData, ltr, accData };