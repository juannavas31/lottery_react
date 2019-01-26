import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import web3js from './web3';
import lottery from './lottery';


class App extends Component {

    constructor (props){
        super(props);
        this.state= {manager: '',
                players: [],
                balance: '',
                value: '',
                message:''};
    };


    async componentDidMount(){
        // get manager contractAddress
        // as we use MetaMask provider, we don't have to specify a from:address in call() method
        // because MetaMask has a default provider

        const managerAddress = await lottery.methods.manager().call();
        const players = await lottery.methods.getPlayers().call();
        const balance = await lottery.methods.getBalance().call();

        this.setState({manager:managerAddress,
                        players: players,
                        balance: balance});

    }

    // this is an event handler, we need to take care of the state
    onSubmit = async (event)=>{
        event.preventDefatul();  // classic html to avoid that the events calls itself
        // to send money, we need to specify an address from which
        const accounts = await web3js.eth.getAccounts();  //fetch list of accounts.
        // as the sending transaction is gonna take time, let's send a message to the user
        this.setState({message:'Waiting on transaction success...'});

        // execute the actual transaction. This is going to take 15-30 seconds.
        await lottery.methods.enter().send(
                {from:accounts[0],
                value: web3js.utils.toWei(this.state.value, 'ether')}
        );

        // update message to user, once the transaction if executed
        this.setState({message:'Transaction executed!' });

    }

    onClick = async ()=>{
        const accounts = await web3js.eth.getAccounts();
        // as the sending transaction is gonna take time, let's send a message to the user
        this.setState({message:'Waiting on transaction success...'});

        await lottery.methods.pickWinner().send({
            from:accounts[0]
        });

        // update message to user, once the transaction if executed
        this.setState({message:'A winner has been picked!' });

    };

  render() {

      console.log('web3js.version=', web3js.version);

    return (
        <div>
            <h2>Lottery Contract</h2>
            <div>
                <p>This contract is managed by {this.state.manager}</p>
                <p>There are currently {this.state.players} competing to win {web3js.utils.fromWei(this.state.balance, 'ether')} ether!</p>
            </div>
            <div>
                <form onSubmit={this.onSubmit} >
                    <h4>Want to try your luck? </h4>
                        <label>Amount of ether to enter</label>
                        <input
                            value = {this.state.value}
                            onChange={event => this.setState({value:event.target.value})}
                        />
                    <button>Enter</button>
                </form>
            </div>
                <h4>Ready to pick a winner? </h4>
                <div>
                    <button onClick={this.onClick}>Pick a winner!</button>
                </div>
            <div>
                <h1>{this.state.message}</h1>
            </div>
        </div>
    )
  }  // end render
}

export default App;
