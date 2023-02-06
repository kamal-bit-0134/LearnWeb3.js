// const { values } = require("lodash")

// web3InteractSmartContract
//  her we connected remix with ganaceh and now we are using web3 to give values


console.log("Learn web3js");
let Web3 = require("web3");


let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// console.log(web3)

let contract = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "x",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],"0xCf3D216f620AcF1d7746Ca5B2A0fFE35D7DA10d6");

// input are ABI and Address

// Now lets call the methods

contract.methods.x().call().then(console.log);
// Returns value of x;
contract.methods.set(20).send({from:"0x4B0A4EC6FdfD6D584C757CF8a138eeE13B65C3Be"});
// contract.methods.x().call().then(console.log);



