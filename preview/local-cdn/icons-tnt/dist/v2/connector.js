import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "connector";
const pathData = "M483 224H29q-12 0-20.5-8.5T0 195q0-11 8.5-19.5T29 167h454q12 0 20.5 8.5T512 195q0 12-8.5 20.5T483 224zM78 415q-9 0-14.5-6.5T58 394v-84l-16 5q-8 2-16-1.5T16 302q-7-20 13-28l43-14q5-1 9.5-.5T91 263q8 6 8 17v114q0 8-5.5 14.5T78 415zm405 0q-8 0-14.5-6.5T462 394v-84l-15 5q-8 2-16.5-1.5T420 302q-3-9 1.5-16.5T434 274l42-14q9-4 20 3 9 6 9 17v114q0 8-6.5 14.5T483 415z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/connector";
export { pathData, ltr, accData };