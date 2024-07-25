import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/open-folder.js";
import { pathData as pathDatav5 } from "./v5/open-folder.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "open-folder";
export { pathData, ltr, accData };