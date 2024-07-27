import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/sort-descending.js";
import { pathData as pathDatav5 } from "./v5/sort-descending.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "sort-descending";
export { pathData, ltr, accData };