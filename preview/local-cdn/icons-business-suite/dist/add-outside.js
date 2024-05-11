import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/add-outside.js";
import { pathData as pathDatav2 } from "./v2/add-outside.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/add-outside";
export { pathData, ltr, accData };