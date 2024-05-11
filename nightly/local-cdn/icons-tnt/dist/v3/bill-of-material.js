import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "bill-of-material";
const pathData = "M32 448V63c0-17 14-31 31-31h385c17 0 32 14 32 31v385c0 17-15 32-32 32H63c-17 0-31-15-31-32zm32-192h384V64H64v192zm128-108c0-29 18-55 49-55 3 0 8 1 15 2 23 7 35 26 35 53 0 23-12 45-35 52-7 1-12 2-15 2-31 0-49-25-49-54zm-52 52H96V95h42c9 0 19 1 26 5 7 3 11 10 12 21v2c0 9-8 22-20 22 11 3 22 10 22 27 0 19-15 28-38 28zM308 95h30l24 78 22-78h32v105h-23v-72l-3 13-19 59h-20c-16-51-17-51-17-54-1-1-1-2-2-5l-2-6c0-3-1-5-1-8v73h-21V95zm-93 53c0 15 7 36 26 36s27-17 27-36-7-36-27-36c-19 0-26 17-26 36zm-96-35v25h17c11 0 17-1 17-12 0-9-6-13-17-13h-17zm0 70h18c8 0 19-2 19-14 0-9-7-14-20-14h-17v28zm41 137h288v-32H160v32zm-96 0h64v-32H64v32zm96 64h288v-32H160v32zm-32-32H64v32h64v-32zm32 96h288v-32H160v32zm-32-32H64v32h64v-32z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/bill-of-material";
export { pathData, ltr, accData };