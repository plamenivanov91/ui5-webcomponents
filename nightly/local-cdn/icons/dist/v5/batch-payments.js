import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "batch-payments";
const pathData = "M480 229q14 8 23 21.5t9 30.5v6.5l-2 6.5-43 126q-10 27-33 43.5T382 480H88q-22 0-38.5-14.5T30 430L0 154q0-24 17-41t40-17h39V57q0-11 7-18t18-7h333q11 0 18.5 7t7.5 18v172zm-144-53q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zM71 325l10-22q2-6 6-10.5t9-9.5V147H57q-6 0-6 7zm390-45q0-6-7-6h-87l-40 39q-9 7-18 7H133q-5 0-6 4l-46 99q0 6 7 6h294q27 0 37-26zm-162-11l40-39q8-6 18-6h72v-96q-18-1-31-14t-14-31H192q-1 18-14 31t-31 14v96q18 2 31 14t14 31h107z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/batch-payments";
export { pathData, ltr, accData };