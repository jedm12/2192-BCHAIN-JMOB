// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ownable{
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event AnotherOwnershiptTransferred();

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "not owner");
        _;
    }

    function transferOwnership(address newOwner) external onlyOwner{
        require(newOwner != address(0), "invalid address");
        owner = newOwner;
        emit OwnershipTransferred(owner, newOwner);
        emit AnotherOwnershiptTransferred();
    }
 
}

contract MyContract is Ownable{
    uint256 public someValue;
    function setSomeValue (uint256 newvalue) public onlyOwner{
        someValue = newvalue;
    }
}