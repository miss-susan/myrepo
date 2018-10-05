pragma solidity ^0.4.24;

contract Coursetro {

    bytes15 fName;
    uint age;

    event Instructor(
        bytes15 name,
        uint age
    );

    function setInstructor(bytes15 _fName, uint _age) public {
        fName = _fName;
        age = _age;
        emit Instructor(_fName, _age);
    }

    function getInstructor() public constant returns (bytes15, uint) {
        return (fName, age);
    }

}
