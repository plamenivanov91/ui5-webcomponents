import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/meter-chained.js";
import { pathData as pathDatav2 } from "./v2/meter-chained.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/meter-chained";
export { pathData, ltr, accData };