import "./style.css";
import { fibs } from "./modules/fibs.js";
import { fibsRec } from "./modules/fibsRec.js";
import { mergeSort } from "./modules/mergeSort.js";

const args = process.argv;
if (args.length < 4) {
  console.log(
    "Please provide a function (fibs, fibsRec, or mergeSort) and an argument (number for fibs/fibsRec or array for mergeSort)"
  );
  process.exit(1);
}

const funcName = args[2];
const input = args[3];

let result;

if (funcName === "fibs" || funcName === "fibsRec") {
  const number = parseInt(input, 10);
  if (isNaN(number)) {
    console.log("Invalid number provided");
    process.exit(1);
  }

  if (funcName === "fibs") {
    result = fibs(number);
  } else if (funcName === "fibsRec") {
    result = fibsRec(number);
  }
  console.log(`Fibonacci sequence up to ${number} using ${funcName}:`, result);
} else if (funcName === "mergeSort") {
  let array;
  try {
    array = JSON.parse(input);
    if (
      !Array.isArray(array) ||
      !array.every((item) => typeof item === "number")
    ) {
      throw new Error("Invalid array");
    }
  } catch {
    console.log(
      "Invalid array provided. Ensure it's a JSON array of numbers, e.g., [1,2,3]"
    );
    process.exit(1);
  }
  result = mergeSort(array);
  console.log(`Sorted array using mergeSort:`, result);
} else {
  console.log(
    "Invalid function name provided. Use 'fibs', 'fibsRec', or 'mergeSort'."
  );
  process.exit(1);
}
