// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract MQuizContract {
    address public owner;
    uint256 public age;
    uint256 public hrsWork;
    uint256 public hrPay;
    uint256 public totalSalary;

    modifier onlyOwner(){
        require(msg.sender == owner, "You have no access");
        _;
    }

    modifier rateGreaterThanZero(uint256 _rate){
        require(_rate > 0, "Hourly Rate must be greater than O");
        _;

    }

    modifier hoursWorkedGreaterThanZero(uint256 _hoursWorked){
    require(_hoursWorked > 0, "Hours worked must be greater than 0");
    _;
    }

    constructor(){
        owner = msg.sender;
    }

    function setAge(uint256 _age) public{
        age = _age;
    }

    function setHrsWrk(uint _hoursWorked) public hoursWorkedGreaterThanZero (_hoursWorked){
        hrsWork = _hoursWorked;
    }
     function setRate(uint _rate) public rateGreaterThanZero (_rate) onlyOwner(){
        hrPay = _rate;
    }

    function calculateTotalSal() public onlyOwner returns (uint256){
        if (hrPay == 0 && hrsWork == 0){
            revert("The Hour Pay and Hours Work must be equal to 0");
        }
        return totalSalary = hrPay * hrsWork;
    
    }
}