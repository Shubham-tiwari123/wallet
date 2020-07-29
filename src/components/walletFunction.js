import React from "react";
import Web3 from 'web3'

let web3 = new Web3("http://localhost:8545");

const WalletFunction = {
    createWallet() {
        const result = web3.eth.accounts.create()
        let json = {
            msg: "Wallet created",
            details: {
                address: result.address,
                privateKey: result.privateKey
            }
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    },

    addAccount1() {
        const result = web3.eth.accounts.wallet.add("8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63")
        let json = {
            msg: "account added",
            details: {
                index: result.index,
                address: result.address,
                privateKey: result.privateKey
            }
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    },

    addAccount2() {
        const result = web3.eth.accounts.wallet.add("ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f")
        let json = {
            msg: "account added",
            details: {
                index: result.index,
                address: result.address,
                privateKey: result.privateKey
            }
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    },

    encryptWallet() {
        const result = web3.eth.accounts.wallet.encrypt("shubham")
        //encryptedValue = result;
        let json;
        if (result.length === 0) {
            json = {msg: "Wallet is empty hence cannot encrypt it"}
        } else {
            json = {
                msg: "Wallet encrypted",
                details: result["0"]
            }
            console.log("Wallet encrypted:", result["0"])
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    },

    saveWallet() {
        let json
        const result = web3.eth.accounts.wallet.save("shubham", "wallet");
        if (result) {
            json = {msg: "Wallet saved"}
        } else {
            json = {msg: "Could not save wallet"}
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    },

    clearWallet() {
        let json;
        const result = web3.eth.accounts.wallet.clear()
        if (result.length === 0) {
            json = {msg: "Removed all accounts from wallet"}
        } else {
            json = {msg: "Could not remove accounts wallet"}
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    },

    removeAccount() {
        let json
        const result = web3.eth.accounts.wallet.remove(0)
        if (result) {
            json = {msg: "Removed account"}
        } else {
            json = {msg: "Could not remove account"}
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    },

    loadWallet() {
        const result = web3.eth.accounts.wallet.load("shubham", "wallet")
        let json
        if (result.length === 0) {
            json = {msg: "No account/wallet present"}
        } else {
            json = {
                msg: "Wallet found",
                details: result["0"]
            }
        }
        document.getElementById("output").innerText = JSON.stringify(json)
    }
}

export default WalletFunction