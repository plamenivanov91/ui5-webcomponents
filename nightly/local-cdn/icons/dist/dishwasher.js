import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/dishwasher.js";
import { pathData as pathDatav5 } from "./v5/dishwasher.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "dishwasher";
export { pathData, ltr, accData };