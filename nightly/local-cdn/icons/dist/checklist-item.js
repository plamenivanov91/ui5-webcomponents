import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/checklist-item.js";
import { pathData as pathDatav5 } from "./v5/checklist-item.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "checklist-item";
export { pathData, ltr, accData };