import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_ADD_CONTACT } from "../generated/i18n/i18n-defaults.js";

const name = "add-contact";
const pathData = "M422 320q11 0 18.5 7.5T448 346v76q0 38-26 64t-64 26H90q-38 0-64-26T0 422V154q0-38 26-64t64-26h108q11 0 18.5 7.5T224 90t-7.5 18-18.5 7H90q-17 0-28 11t-11 28v268q0 17 11 28t28 11h268q17 0 28-11t11-28v-76q0-11 7-18.5t18-7.5zM96 385q0-25 20.5-45t49.5-20h116q29 0 49.5 20t20.5 45q0 15-7.5 23t-18.5 8H122q-11 0-18.5-8T96 385zm80-177q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM486 86q11 0 18.5 7.5T512 112t-7.5 18-18.5 7h-61v61q0 11-7 18.5t-18 7.5-18.5-7.5T374 198v-61h-60q-11 0-18.5-7t-7.5-18 7.5-18.5T314 86h60V26q0-11 7.5-18.5T400 0t18 7.5 7 18.5v60h61z";
const ltr = false;
const accData = ICON_ADD_CONTACT;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "SAP-icons-v5/add-contact";
export { pathData, ltr, accData };