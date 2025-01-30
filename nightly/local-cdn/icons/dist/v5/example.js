import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "example";
const pathData = "M192 256q0 41-27.5 68.5T96 352t-68.5-27.5T0 256t27.5-68.5T96 160t68.5 27.5T192 256zm64 64q41 0 68.5 27.5T352 416t-27.5 68.5T256 512t-68.5-27.5T160 416t27.5-68.5T256 320zm0-128q-40 0-68-28t-28-68 28-68 68-28 68 28 28 68-28 68-68 28zm160-32q41 0 68.5 27.5T512 256t-27.5 68.5T416 352t-68.5-27.5T320 256t27.5-68.5T416 160zM96 301q20 0 32.5-12.5T141 256t-12.5-32.5T96 211t-32.5 12.5T51 256t12.5 32.5T96 301zm160 160q20 0 32.5-12.5T301 416t-12.5-32.5T256 371t-32.5 12.5T211 416t12.5 32.5T256 461zm160-160q20 0 32.5-12.5T461 256t-12.5-32.5T416 211t-32.5 12.5T371 256t12.5 32.5T416 301z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/example";
export { pathData, ltr, accData };