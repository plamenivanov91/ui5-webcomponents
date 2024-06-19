import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/fax-machine.js";
import { pathData as pathDatav5 } from "./v5/fax-machine.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "fax-machine";
export { pathData, ltr, accData };