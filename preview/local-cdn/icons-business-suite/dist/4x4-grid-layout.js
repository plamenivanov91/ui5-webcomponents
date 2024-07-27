import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/4x4-grid-layout.js";
import { pathData as pathDatav2 } from "./v2/4x4-grid-layout.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/4x4-grid-layout";
export { pathData, ltr, accData };