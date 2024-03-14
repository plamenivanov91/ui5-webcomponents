import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/bullet-chart.js";
import { pathData as pathDatav2 } from "./v2/bullet-chart.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/bullet-chart";
export { pathData, ltr, accData };