const Web3 = require('web3');

// Create a web3 instance
const web3 = new Web3();

// Message details
const address = "0x27f832d6835c279ABD8c827039F9EF7c975C4b04"; // Example address
const message = "I, hereby verify that I am the owner/creator of the address [" + address + "]";

// Calculate message hash
const messageHash = web3.utils.soliditySha3(message);

console.log("Message Hash:", messageHash);
