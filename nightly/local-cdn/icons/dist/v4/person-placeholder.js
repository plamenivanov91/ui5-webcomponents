import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "person-placeholder";
const pathData = "M64 512V384q0-26 10-49.5t27.5-41T142 266t50-10h64q-27 0-50-10t-40.5-27.5T138 178t-10-50q0-26 10-49.5t27.5-41T206 10t50-10q26 0 49.5 10t41 27.5 27.5 41 10 49.5q0 27-10 50t-27.5 40.5-41 27.5-49.5 10h64q26 0 49.5 10t41 27.5 27.5 41 10 49.5v128H64zm32-128v96h320v-96q0-40-28-68t-68-28H192q-40 0-68 28t-28 68zm64-256q0 40 28 68t68 28 68-28 28-68-28-68-68-28-68 28-28 68z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/person-placeholder";
export { pathData, ltr, accData };