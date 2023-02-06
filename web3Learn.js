console.log("Learn web3js");
let Web3 = require("web3");


let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// console.log(web3)

// Fetch balance
console.log("Fetching balance");
web3.eth.getBalance("0x4B0A4EC6FdfD6D584C757CF8a138eeE13B65C3Be")
// it returns promise
web3.eth.getBalance("0x4B0A4EC6FdfD6D584C757CF8a138eeE13B65C3Be").then(console.log);
// It returns in ether
web3.eth.getBalance("0x4B0A4EC6FdfD6D584C757CF8a138eeE13B65C3Be").then(function(result){console.log(web3.utils.fromWei(result,"ether"))});
// It returns in ether


// transfer from one account to other acount money
web3.eth.sendTransaction({from:"0x4B0A4EC6FdfD6D584C757CF8a138eeE13B65C3Be",to:"0x822E1E23F6bD8f764ADDFaE39EB7E2e114165f52",value:web3.utils.toWei("5","ether")});