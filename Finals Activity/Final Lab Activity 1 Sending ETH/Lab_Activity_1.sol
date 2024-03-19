// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherWallet{
    address payable public owner;
    event Withdraw(uint amount);

    constructor(){
            owner = payable(msg.sender);
        }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "Not owner!");
        owner.transfer(_amount);
        emit Withdraw(_amount);
    }

    function getBalance() external view returns (uint){
        return (address(this).balance);
    }

}

// As the creator of the EtherWallet contract, my goal was to create a safe and effective way to handle Ether transactions on Ethereum. 
// By adding features like ownership control and event notifications, I made sure the contract was transparent and accountable. 
// While it does what it's supposed to, I know there's room to make it even better for real-life situations.
