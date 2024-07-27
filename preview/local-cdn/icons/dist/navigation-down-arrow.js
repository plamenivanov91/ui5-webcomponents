import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/navigation-down-arrow.js";
import { pathData as pathDatav5 } from "./v5/navigation-down-arrow.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "navigation-down-arrow";
export { pathData, ltr, accData };