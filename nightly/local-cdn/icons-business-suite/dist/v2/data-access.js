import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "data-access";
const pathData = "M494 131c1 3 1 5 1 8s0 7-1 9c-2 3-4 6-6 8l-94 94c-4 4-10 7-17 7s-12-3-16-7c-10-9-10-24 0-33l52-54H41c-13 0-24-11-24-24s11-23 24-23h372l-52-54c-10-9-10-24 0-33 9-10 24-10 33 0l94 94c3 3 4 5 6 8zM99 358h372c13 0 24 11 24 24s-11 24-24 24H99l52 53c10 9 10 25 0 34-4 4-9 7-16 7s-13-3-17-7l-94-94c-3-2-4-5-6-8-1-2-1-6-1-9s0-7 1-9c2-3 4-4 6-7v-1l94-94c9-10 24-10 33 0 10 9 10 25 0 34z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/data-access";
export { pathData, ltr, accData };