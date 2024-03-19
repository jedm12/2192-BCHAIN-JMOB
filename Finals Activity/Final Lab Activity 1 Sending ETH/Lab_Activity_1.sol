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

// Creating the EtherWallet contract offered valuable insights into the fundamentals 
// of smart contract development. The process underscored the importance of ownership control and event emission mechanisms in 
// promoting transparency and security within decentralized systems. While the contract's simplicity is commendable, 
// exploring additional features and refining its design could unlock greater versatility 
// and robustness for future applications.

