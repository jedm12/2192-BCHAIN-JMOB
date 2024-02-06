// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GlobalVariables {
    function goblalVars() external view returns (address, uint, uint, address, uint, address){
        address sender = msg.sender;
        uint timestamp = block.timestamp;
        uint blockNum = block.number;
        address blockCoin = block.coinbase;
        uint blockDifficulty = block.difficulty;
        address origin = tx.origin;
        return (sender, timestamp, blockNum, blockCoin, blockDifficulty,origin);

    }



}


// My insight in this activity is that we've used Global Variables that can be fetch accross functions.
// Global variables in Solidity are predefined variables available in any function or contract. 
// These variables reveal blockchain, contract, and transaction data. Some common global variables in Solidity:
