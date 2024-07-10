import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/tri-state.js";
import { pathData as pathDatav5 } from "./v5/tri-state.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "tri-state";
export { pathData, ltr, accData };