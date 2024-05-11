import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav2, ltr, accData } from "./v2/data-input-arrow.js";
import { pathData as pathDatav3 } from "./v3/data-input-arrow.js";

const pathData = isLegacyThemeFamily() ? pathDatav2 : pathDatav3;

export default "tnt/data-input-arrow";
export { pathData, ltr, accData };