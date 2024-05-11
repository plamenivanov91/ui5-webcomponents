import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/close-command-field.js";
import { pathData as pathDatav5 } from "./v5/close-command-field.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "close-command-field";
export { pathData, ltr, accData };