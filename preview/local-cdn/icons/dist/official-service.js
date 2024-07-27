import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/official-service.js";
import { pathData as pathDatav5 } from "./v5/official-service.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "official-service";
export { pathData, ltr, accData };