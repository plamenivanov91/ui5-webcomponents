import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/nutrition-activity.js";
import { pathData as pathDatav5 } from "./v5/nutrition-activity.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "nutrition-activity";
export { pathData, ltr, accData };