// Import Statement for Prompt-Sync Library
const prompt = require("prompt-sync")({ sigint: true });

// Write Your Code Below
console.log(`--------------------------------------`);
console.log(`|                Menu                |`);
console.log(`--------------------------------------`);
console.log(`| Services:                          |`);
console.log(`| - 🌈 Color Load:    $2.50 per pound |`);
console.log(`| - ⚪ Whites Load:   $4.00 per pound |`);
console.log(`| - ⚫ Darks Load:    $6.00 per pound |`);
console.log(`|                                    |`);
console.log(`| Additional Services:               |`);
console.log(`| - Detergent:        $1.50 per load |`);
console.log(`| - Softener:         $1.00 per load |`);
console.log(`| - Dryer Sheets:     $0.50 each     |`);
console.log(`--------------------------------------`);
console.log(`\n\nWelcome to Miss Bubble's Laundromat.\n`);

let colorWeight = prompt(
  `How many pounds of color clothes would you like to wash? `
);
console.log(``);
let whiteWeight = prompt(
  `How many pounds of white clothes would you like to wash? `
);
console.log(``);
let darkWeight = prompt(
  `How many pounds of dark clothes would you like to wash? `
);
console.log(``);
let needDetergent = prompt(`Do you need detergent (true/false)? `);
console.log(``);
let needSoftener = prompt(`Do you need fabric softener (true/false)? `);
console.log(``);
let numDryerSheets = prompt(`How many dryer sheets per drying load? `);
console.log(`\n`);

colorWeight = parseFloat(colorWeight); // Change let variable colorWeight from a string to a float number
whiteWeight = parseFloat(whiteWeight);
darkWeight = parseFloat(darkWeight);

let colorCost = colorWeight * 2.5;
colorCost = colorCost.toFixed(2);

let whiteCost = whiteWeight * 4;
whiteCost = whiteCost.toFixed(2);

let darkCost = darkWeight * 6;
darkCost = darkCost.toFixed(2);

needDetergent = needDetergent === "true"; // If needDetergent is "true", returns boolean true, if not "true", returns boolean false
needSoftener = needSoftener === "true";

let loads =
  Math.ceil(colorWeight / 10) +
  Math.ceil(whiteWeight / 10) +
  Math.ceil(darkWeight / 10); // If a type of load is more than 1, Math.ceil will round up to next larger number
let detergentLoads = Number(needDetergent) * loads; // Convert needDetergent to 1 or 0 based on boolean value and multiply by total number of loads
let softenerLoads = Number(needSoftener) * loads;

let dryerSheetLoads;
if (Number(numDryerSheets) === 0) {
  dryerSheetLoads = 0;
} else {
  dryerSheetLoads = loads;
}

let dryerSheetCost = loads * 0.5 * numDryerSheets;
dryerSheetCost = dryerSheetCost.toFixed(2);
let detergentCost = 1.5 * detergentLoads;
detergentCost = detergentCost.toFixed(2);
let softenerCost = 1 * softenerLoads;
softenerCost = softenerCost.toFixed(2);

let cost =
  Number(colorCost) +
  Number(darkCost) +
  Number(whiteCost) +
  Number(detergentCost) +
  Number(softenerCost) +
  Number(dryerSheetCost); // Converts different costs into numbers then adds together
cost = cost.toFixed(2);

console.log(`-------\n`);
console.log(`Thank you! Here is your receipt:\n`);
console.log(`--------------------------------------`);
console.log(`|               Receipt              |`);
console.log(`| Services:                          |`);
console.log(`| - Color Load:      ${colorWeight} lbs   $${colorCost} |`);
console.log(`| - Whites Load:     ${whiteWeight} lbs   $${whiteCost} |`);
console.log(`| - Darks Load:      ${darkWeight} lbs   $${darkCost} |`);
console.log(`|                                    |`);
console.log(`| Additional Services:               |`);
console.log(
  `| - Detergent:      ${detergentLoads} loads   $${detergentCost}  |`
);
console.log(`| - Softener:       ${softenerLoads} loads   $${softenerCost}  |`);
console.log(
  `| - Dryer Sheets:   ${dryerSheetLoads} loads   $${dryerSheetCost}  |`
);
console.log(`|                                    |`);
console.log(`| Subtotal:                  $${cost} |`);
console.log(`| Total:                     $${cost} |`);
console.log(`|                                    |`);
console.log(`| Thank you, have a nice day!        |`);
console.log(`--------------------------------------`);
