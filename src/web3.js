// we import web3 version 1, which has been installed on this project by 'npm install --save web3' command
import Web3 from 'web3';

// we presume the user's browser has Metamask installed, which injects web3 (an old version)
// however, we need to copy the Metamask provider, which is connected to Rinkeby network
// and holds the private/public keys we need for the transactions.

/*
if (window.ethereum) {
    const web3js = new Web3(window.ethereum);
    try {
        window.ethereum.enable();
    } catch(e) {
        console.log('error enabling ethereum:', e);
    }
}
// Legacy DApp Browsers
else if (window.web3) {
*/

    const web3js = new Web3(window.web3.currentProvider);
/*
}
else{
    console.log('error initializing web3 ');
};
*/

// now we export the web3 interface, version1, with the provider from Metamask
export default web3js;
