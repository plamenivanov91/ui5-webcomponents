import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/vds-file.js";
import { pathData as pathDatav5 } from "./v5/vds-file.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "vds-file";
export { pathData, ltr, accData };