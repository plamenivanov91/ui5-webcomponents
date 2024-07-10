import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/work-history.js";
import { pathData as pathDatav5 } from "./v5/work-history.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "work-history";
export { pathData, ltr, accData };