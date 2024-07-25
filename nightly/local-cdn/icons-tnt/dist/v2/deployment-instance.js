import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "deployment-instance";
const pathData = "M359 288q-31 0-51 20t-20 50 20 50 51 20q30 0 50-20t20-50-20-50-50-20zM154 511H77q-32 0-54.5-24T0 428V83q0-35 22.5-59T77 0h358q32 0 54.5 24T512 83v87q0 11-7 18t-18 7-18.5-7-7.5-18V83q0-14-7.5-23T435 51H77q-11 0-18.5 9T51 83v345q0 14 7.5 23t18.5 9h77q11 0 18 7.5t7 18.5-7 18-18 7zm108-32q-5 0-9-1t-9-6q-8-8-8-18t8-18l12-12q-11-17-16-41h-9q-11 0-18.5-7t-7.5-18 7.5-18.5T231 332h9q2-11 6-21t10-19l-12-12q-8-8-8-18t8-18 18-8 18 8l12 12q19-13 41-17v-9q0-11 7.5-18t18.5-7 18 7 7 18v9q21 4 40 17l12-12q8-8 19-8 10 0 18 8t7.5 18-7.5 18l-12 12q12 20 16 40h10q11 0 18 7.5t7 18.5-7 18-18 7h-10q-5 24-16 41l12 12q7 8 7 18t-7 18q-7 7-19 7-11 0-18-7l-12-12q-19 13-40 17v9q0 11-7 18t-18 7-18.5-7-7.5-18v-9q-22-4-41-17l-12 12q-7 7-18 7z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/deployment-instance";
export { pathData, ltr, accData };