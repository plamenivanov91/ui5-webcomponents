import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/official-service-group.js";
import { pathData as pathDatav2 } from "./v2/official-service-group.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/official-service-group";
export { pathData, ltr, accData };