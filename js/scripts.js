/**
 * Charles Johnson
 * Expressions Assignment
 * Tip Calculator
 * SDI Section 1
 * February 12, 2015
 */

var waitName = prompt("What is your waiter's name?");
var srvAmount = prompt("Please Enter Receipt Amount:");
// var srvAmount = srvAmountPrompt;
// var quality = prompt("Was the service poor, good, or excellent")
var tipPercentage = [srvAmount * .05, srvAmount * .15, srvAmount * .2];
var totalBill = [srvAmount + tipPercentage[0], srvAmount + tipPercentage[1], srvAmount + tipPercentage[2]];
var fivePercent = tipPercentage[0];
var totalBill1 = srvAmount + fivePercent;



console.log(waitName + " should get a tip either of the following tips. ");
console.log("Poor Service (5%): $" + tipPercentage[0] + " / Good Service (15%): $" + tipPercentage[1] + " / Excellent (20%): $" + tipPercentage[2]);
console.log("If " + waitName + " provided poor service pay $" + totalBill1);
console.log("If " + waitName + " provided good service pay $" + totalBill[1]);
console.log("If " + waitName + " provided excellent service pay $" + totalBill[2]);
