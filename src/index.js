import "./style.css";
import { fibs } from "./modules/fibs";
import { fibsRec } from "./modules/fibsRec";

const args = process.argv;
if (args.length < 4) {
  console.log(
    "Please provide a function (fibs or fibsRec) and a number as arguments"
  );
  process.exit(1);
}

const funcName = args[2];
const number = parseInt(args[3], 10);
if (isNaN(number)) {
  console.log("Invalid number provided");
  process.exit(1);
}

let result;
if (funcName === "fibs") {
  result = fibs(number);
} else if (funcName === "fibsRec") {
  result = fibsRec(number);
} else {
  console.log("Invalid function name provided. Use 'fibs' or 'fibsRec'.");
  process.exit(1);
}

console.log(`Fibonacci sequence up to ${number} using ${funcName}:`, result);
