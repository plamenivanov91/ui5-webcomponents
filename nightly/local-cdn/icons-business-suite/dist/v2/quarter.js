import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "quarter";
const pathData = "M428 416V114c0-12-9-21-21-21h-66v29c0 13-9 22-21 22-13 0-22-9-22-22V93h-86v29c0 13-9 22-21 22s-21-9-21-22V93h-65c-12 0-21 9-21 21v302c0 12 9 21 21 21h302c12 0 21-9 21-21zM341 50h66c36 0 64 28 64 64v302c0 36-28 64-64 64H105c-36 0-64-28-64-64V114c0-36 28-64 64-64h65V22c0-12 9-21 21-21s21 9 21 21v28h86V22c0-12 9-21 22-21 12 0 21 9 21 21v28zM148 187c12 0 22 9 22 21v165c0 12-10 21-22 21s-21-9-21-21V208c0-12 9-21 21-21zm72 0c12 0 22 9 22 21v165c0 12-10 21-22 21s-21-9-21-21V208c0-12 9-21 21-21zm71 0c12 0 22 9 22 21v165c0 12-10 21-22 21s-21-9-21-21V208c0-12 9-21 21-21zm71 0c12 0 22 9 22 21v165c0 12-10 21-22 21s-21-9-21-21V208c0-12 9-21 21-21z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/quarter";
export { pathData, ltr, accData };