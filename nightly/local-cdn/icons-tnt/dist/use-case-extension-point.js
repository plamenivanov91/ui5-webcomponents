import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav2, ltr, accData } from "./v2/use-case-extension-point.js";
import { pathData as pathDatav3 } from "./v3/use-case-extension-point.js";

const pathData = isLegacyThemeFamily() ? pathDatav2 : pathDatav3;

export default "tnt/use-case-extension-point";
export { pathData, ltr, accData };