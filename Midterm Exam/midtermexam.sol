// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GradeContract{
    enum GradeStatus {Fail, Pass}

        string name;
        uint256 public prelimGrade;
        uint256 public midtermGrade;
        uint256 public finalGrade;
        GradeStatus status;
        address public owner;

    modifier onlyOwner(){
        require(msg.sender == owner, "You don't have the access");
        _;
    }

    modifier validGrade(uint256 grade){
        require(grade >= 0 && grade <= 100, "Invalid Inputted Grades");
        _;
    }

    event GradeComputed(string studName, GradeStatus status);

    constructor(){
        owner = msg.sender;

    }

    function setName(string calldata _name) external onlyOwner{
        name=_name;
    }

    function setPrelimGrade(uint256 _prelimgrade) external onlyOwner validGrade(_prelimgrade){
        prelimGrade = _prelimgrade;
    }
    function setMidtermGrade(uint256 _midtermgrade) external onlyOwner validGrade(_midtermgrade){
        midtermGrade = _midtermgrade;
    }
    function setFinalGrade(uint256 _finalgrade) external onlyOwner validGrade(_finalgrade){
        finalGrade = _finalgrade;
    }
    function gradeStatus() public view returns (GradeStatus){
        return status;
    }

    function calculateGrade() external onlyOwner {
        uint256 overallGrade = (prelimGrade + midtermGrade + finalGrade)/3;
        if (overallGrade <= 74){
            status = GradeStatus.Fail;
        }else {
            status = GradeStatus.Pass;
        }

        emit GradeComputed(name, status);
    }

}