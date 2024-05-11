import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/end-user-experience-monitoring.js";
import { pathData as pathDatav5 } from "./v5/end-user-experience-monitoring.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "end-user-experience-monitoring";
export { pathData, ltr, accData };