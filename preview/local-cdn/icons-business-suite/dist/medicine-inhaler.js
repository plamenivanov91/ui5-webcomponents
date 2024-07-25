import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/medicine-inhaler.js";
import { pathData as pathDatav2 } from "./v2/medicine-inhaler.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/medicine-inhaler";
export { pathData, ltr, accData };