import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "email-read";
const pathData = "M328 294l152-135L255 37 32 159l151 135-17 18L32 191v273l223-170 225 168V192L347 312zm136 186L256 326 48 480h416zm48-337v337q0 13-9.5 22.5T480 512H32q-14 0-23-9.5T0 480V143L254 0z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/email-read";
export { pathData, ltr, accData };