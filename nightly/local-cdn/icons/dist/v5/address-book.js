import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "address-book";
const pathData = "M403 64q32 0 54.5 22.5T480 141v294q0 32-22.5 54.5T403 512H109q-32 0-54.5-22.5T32 435V141q0-32 22.5-54.5T109 64h19V26q0-11 7.5-18.5T154 0t18 7.5 7 18.5v38h154V26q0-11 7-18.5T358 0t18.5 7.5T384 26v38h19zm-89 256q29 0 49.5 20t20.5 45q0 15-7.5 23t-18.5 8H154q-11 0-18.5-8t-7.5-23q0-25 20.5-45t49.5-20h116zm-58-48q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm173-131q0-11-7.5-18.5T403 115h-19v19q0 11-7.5 18.5T358 160t-18-7.5-7-18.5v-19H179v19q0 11-7 18.5t-18 7.5-18.5-7.5T128 134v-19h-19q-11 0-18.5 7.5T83 141v294q0 11 7.5 18.5T109 461h294q11 0 18.5-7.5T429 435V141z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/address-book";
export { pathData, ltr, accData };