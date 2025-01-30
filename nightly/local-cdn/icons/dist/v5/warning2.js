import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "warning2";
const pathData = "M256 83q-14 0-21 12L54 396q-3 6-3 11 0 10 7.5 16t17.5 6h360q10 0 17.5-6t7.5-16q0-5-3-11L277 95q-7-12-21-12zm0 318q-13 0-22-9t-9-23q0-13 9-22t22-9 22 9 9 22q0 14-9 23t-22 9zm0-105q-11 0-18.5-7.5T230 270v-85q0-11 7.5-18t18.5-7 18.5 7 7.5 18v85q0 11-7.5 18.5T256 296zm180 184H76q-31 0-53.5-21T0 407q0-21 10-37L191 68q10-17 27.5-26.5T256 32t37.5 9.5T321 68l181 302q10 16 10 37 0 31-22.5 52T436 480z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/warning2";
export { pathData, ltr, accData };