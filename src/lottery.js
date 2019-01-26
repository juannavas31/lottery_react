import web3js from './web3';


// address of a deployed contract


const contractAddress = '0x6d7ecD5E9668704C95c6bc2AA08aA87698176245';

const account = '0xD46981a35F854f72e3662519Bdf96200aDF57F0f';

const ABIinterface =
'[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]';


// let's create a local copy of the contract
const lottery = new web3js.eth.Contract(JSON.parse(ABIinterface), contractAddress, {from: account, gas:'1000000'} );


console.log('lottery contract:', lottery);

export default lottery;
