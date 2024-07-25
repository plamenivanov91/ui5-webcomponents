import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/offsite-work.js";
import { pathData as pathDatav5 } from "./v5/offsite-work.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "offsite-work";
export { pathData, ltr, accData };