// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Mapping{

    //Mapping Demo
    mapping(address => uint256) public valueMapping;
    

    //Constructor Demo
    constructor (){
        valueMapping[msg.sender] = 100;
    }


    function setValue(uint256 _value) public nonZeroValue(_value){

        //Condition Demo
        if (_value > valueMapping[msg.sender]){
            valueMapping[msg.sender] = _value;
        }
    }

    //Modifier Demo
    modifier nonZeroValue(uint256 _value){
        //Error Handling Demo
        require(_value != 0, "Value cannot be zero");
        _;
    }
    modifier valueHasBeenSet(){
        require(valueMapping[msg.sender] != 0, "No value set for sender");
        _;
    }

    function getValue() public view valueHasBeenSet returns (uint256){
        return valueMapping[msg.sender];
    }
}