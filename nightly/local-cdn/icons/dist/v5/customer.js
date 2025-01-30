import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "customer";
const pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 96q41 0 68.5 27.5T352 192t-27.5 68.5T256 288t-68.5-27.5T160 192t27.5-68.5T256 96zm161 286q21-26 32.5-58.5T461 256q0-42-16-79.5T401 111t-65.5-44T256 51t-79.5 16-65.5 44-44 65.5T51 256q0 35 11.5 67.5T95 382q17-29 46.5-45.5T205 320h102q35 0 64 17t46 45zm-284 38q26 19 57 30t66 11 66-11 57-30q-8-22-28.5-35.5T307 371H205q-24 0-43.5 13T133 420zm123-183q20 0 32.5-12.5T301 192t-12.5-32.5T256 147t-32.5 12.5T211 192t12.5 32.5T256 237z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/customer";
export { pathData, ltr, accData };