import React,{Component} from 'react';
import WalletFunction from './walletFunction';

class Wallet extends Component {

    render() {
        return(
            <div className="wallet">
                <div className="left_side">
                    <button onClick={WalletFunction.createWallet}>Create Wallet</button><br/>

                    <button onClick={WalletFunction.addAccount1}>Add Account1</button><br/>

                    <button onClick={WalletFunction.addAccount2}>Add Account2</button><br/>

                    <button onClick={WalletFunction.encryptWallet}>Encrypt</button><br/>

                    <button onClick={WalletFunction.saveWallet}>Save</button><br/>

                    <button onClick={WalletFunction.loadWallet}>Load Wallet</button><br/>

                    <button onClick={WalletFunction.removeAccount}>Remove account</button><br/>

                    <button onClick={WalletFunction.clearWallet}>Empty Wallet</button><br/>
                </div>
                <div className="right_side">
                    <h3 id="output"/>
                </div>
            </div>
        )
    }
}

export default Wallet;