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
var tipPercentage = [.05, .15, .2];
var poorTip = srvAmount * tipPercentage[0]+ parseInt(srvAmount) ;
var goodTip = srvAmount * tipPercentage[1];
var excelTip = srvAmount * tipPercentage[2];

//var totalTipl = [(srvAmount + poorTip), srvAmount + goodTip, srvAmount + excelTip];
var fivePercent = tipPercentage[0];
var poorBill = parseInt(srvAmount) + parseInt(poorTip);
var goodBill = parseInt(srvAmount) + parseInt(goodTip);
var excelBill = parseInt(srvAmount) + parseInt(excelTip);



console.log(waitName + " should get a tip either of the following tips. ");
console.log("Poor Service (5%): $" + poorTip + " / Good Service (15%): $" + goodTip + " / Excellent (20%): $" + excelTip);
// console.log(totalBill);

// console.log("If " + waitName + " provided poor service pay $" + totalBill1);
// console.log("If " + waitName + " provided good service pay $" + totalBill[1]);
// console.log("If " + waitName + " provided excellent service pay $" + totalBill[2]);
