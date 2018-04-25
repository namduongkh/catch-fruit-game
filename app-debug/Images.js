import { sync } from "glob";

let allFiles = sync('./assets/*');

console.log(allFiles)
