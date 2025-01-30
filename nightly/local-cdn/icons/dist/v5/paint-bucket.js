import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "paint-bucket";
const pathData = "M448 352q12 0 23.5 11.5T492 391t14.5 33.5T512 453q0 21-19 40t-45 19-45-19-19-40q0-11 5.5-28.5T404 391t20.5-27.5T448 352zm-71-114q7 9 7 18t-7 18L210 441q-7 7-18 7-9 0-18-7L7 274q-7-9-7-18t7-18L156 90l-46-46q-8-8-8-18 0-11 7.5-18.5T128 0t18 7zm-55 18L192 126 62 256h260z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/paint-bucket";
export { pathData, ltr, accData };