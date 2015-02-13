/**
 * Charles Johnson
 * Expressions Assignment
 * Tip Calculator
 * SDI Section 1
 * February 12, 2015
 */

// Input Data
var restName = prompt("Which restaurant did you visit tonight?");
var waitName = prompt("What is your waiter's name?");
var srvAmount = prompt("Please enter the total amount of your dinner.");

// var srvAmount = srvAmountPrompt;
// var quality = prompt("Was the service poor, good, or excellent")

// Calculate tip amount based on percentages.
var tipPercentage = [.05, .15, .2];
var poorTip = srvAmount * tipPercentage[0];
var goodTip = srvAmount * tipPercentage[1];
var excelTip = srvAmount * tipPercentage[2];

//var totalTipl = [(srvAmount + poorTip), srvAmount + goodTip, srvAmount + excelTip];

// Calculate totals with dinner amount and tip
// var fivePercent = tipPercentage[0];
var poorBill = parseInt(srvAmount) + parseInt(poorTip);
var goodBill = parseInt(srvAmount) + parseInt(goodTip);
var excelBill = parseInt(srvAmount) + parseInt(excelTip);


// Output Data
console.log("Make sure that you call me the next time you go to " + restName);
console.log("The amount on your receipt was $" + srvAmount);
console.log(waitName + " should get a tip either of the following tips. ");
console.log("Poor Service Tip (5%): $" + poorTip + " / Good Service Tip (15%): $" + goodTip + " / Excellent Tip (20%): $" + excelTip);
// console.log(totalBill);

 console.log("If " + waitName + " provided poor service, you would pay a total of $" + poorBill);
 console.log("If " + waitName + " provided good service, you would pay a total of  $" + goodBill);
 console.log("If " + waitName + " provided excellent service, you would pay a total of $" + excelBill);
