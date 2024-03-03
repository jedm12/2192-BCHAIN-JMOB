// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
pragma solidity ^0.8.3;

import "contracts/4_structs_demo.sol";

contract Todos {
    Todo[] public todos;

    function todoList() public{
        Todo memory newTask = Todo("blockchain", true);
        todos.push(newTask);
    }
} 