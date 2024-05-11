import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav2, ltr, accData } from "./v2/error-start-event.js";
import { pathData as pathDatav3 } from "./v3/error-start-event.js";

const pathData = isLegacyThemeFamily() ? pathDatav2 : pathDatav3;

export default "tnt/error-start-event";
export { pathData, ltr, accData };