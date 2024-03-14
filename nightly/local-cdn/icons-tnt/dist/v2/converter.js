import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "converter";
const pathData = "M220 197q-8 0-12.5 5t-4.5 12v181q0 17 17 17h145q7 0 12-4.5t5-12.5V214q0-7-5-12t-12-5H220zM0 392q0-37 27-62l30-28 5 4q-20 26-20 56 0 14 3 24.5T58 407l39 37 27-28h2q0 2 1 2v93H31v-2l25-26-29-30Q0 423 0 392zm111-13q-8 0-13.5-6T92 359V142q0-23 16.5-39.5T148 86h181q8 0 13.5 5.5T348 105t-5.5 14-13.5 6H148q-8 0-13 4.5t-5 12.5v217q0 8-5.5 14t-13.5 6zm254 72H220q-23 0-39.5-16.5T164 395V214q0-23 16.5-39.5T220 158h145q23 0 39 16.5t16 39.5v181q0 23-16 39.5T365 451zm-36-72h-73q-8 0-13.5-6t-5.5-14 5.5-13.5T256 340h73q8 0 13.5 5.5T348 359t-5.5 14-13.5 6zm0-55h-73q-19 0-19-20 0-8 5.5-13t13.5-5h73q8 0 13.5 5t5.5 13q0 9-5.5 14.5T329 324zM382 0h99l-2 4-26 26 31 30q28 28 28 65 0 39-28 63l-32 32-5-4q22-27 22-58t-18-49l-41-38-25 24q0 2-2 2-1 0-1-4V0z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/converter";
export { pathData, ltr, accData };