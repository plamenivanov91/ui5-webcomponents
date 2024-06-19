import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/hr-approval.js";
import { pathData as pathDatav5 } from "./v5/hr-approval.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "hr-approval";
export { pathData, ltr, accData };