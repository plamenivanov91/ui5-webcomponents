import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/substraction-b-a.js";
import { pathData as pathDatav2 } from "./v2/substraction-b-a.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/substraction-b-a";
export { pathData, ltr, accData };