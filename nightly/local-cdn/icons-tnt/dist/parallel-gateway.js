import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav2, ltr, accData } from "./v2/parallel-gateway.js";
import { pathData as pathDatav3 } from "./v3/parallel-gateway.js";

const pathData = isLegacyThemeFamily() ? pathDatav2 : pathDatav3;

export default "tnt/parallel-gateway";
export { pathData, ltr, accData };