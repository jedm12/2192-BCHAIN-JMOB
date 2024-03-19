// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract FallbackExample{
    event FallbackReceived(address sender, uint amount);
    event PaymentReceived(address payer, uint amount);

    fallback() external payable {
        emit FallbackReceived(msg.sender, msg.value);
     }
     receive() external payable { 
        emit PaymentReceived(msg.sender, msg.value);
     }
}


// The FallbackExample contract offers insights into fallback and receive functions in Solidity, illustrating how they handle incoming transactions.
//  The fallback function captures Ether sent to the contract without a specified function call, while the receive function provides a designated 
//  entry point for receiving Ether. This contract showcases the flexibility and versatility of Solidity in managing and processing Ethereum transactions, 
//  emphasizing the importance of understanding fallback behavior for contract developers.