pragma solidity ^0.6.6;

contract Patient {

    struct patientData {
        address id;
        uint fileCount;
    }

    struct fileData {
        string fileName;
        string fileHash;
        string datetime;
    }
    
    mapping (address => patientData) public patients;
    mapping (address => mapping (uint => fileData)) public files;

    constructor() public {}

    function addPatient(address _id) public {
        patientData storage p = patients[msg.sender];
        p.id = _id;
        p.fileCount = 0;
    }

    function saveFile(string memory _fname, string memory _fhash, string memory _datetime) public {
        patientData storage p = patients[msg.sender];
        files[msg.sender][p.fileCount] = fileData(_fname, _fhash, _datetime);
        p.fileCount ++;
    }

}