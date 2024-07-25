import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav2, ltr, accData } from "./v2/send-task.js";
import { pathData as pathDatav3 } from "./v3/send-task.js";

const pathData = isLegacyThemeFamily() ? pathDatav2 : pathDatav3;

export default "tnt/send-task";
export { pathData, ltr, accData };