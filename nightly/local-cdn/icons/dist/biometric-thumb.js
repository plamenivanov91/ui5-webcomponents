import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/biometric-thumb.js";
import { pathData as pathDatav5 } from "./v5/biometric-thumb.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "biometric-thumb";
export { pathData, ltr, accData };