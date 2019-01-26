import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
// import web3 from './web3';

class App extends Component {
  render() {

      window.addEventListener('load', async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            const web3 = new Web3(Window.ethereum);
            try {
                // Request account access if needed
                await Window.ethereum.enable();
                // Acccounts now exposed
                console.log("attempting to get accounts");
                console.log("accounts:", web3.eth.getAccounts());
                // web3.eth.sendTransaction({/* ... */});
            } catch (error) {
                // User denied account access...ç
                console.log("error:", error);
                console.log("user denied access. What's going on??")
            }
        }; // end if
     }); //window.addEventListener



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>


        </header>
      </div>
    );
  }
}

export default App;
