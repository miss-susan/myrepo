$( function()
{

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var CoursetroContract = web3.eth.contract([
        {
            "constant": true,
            "inputs": [],
            "name": "getInstructor",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes15"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_fName",
                    "type": "bytes15"
                },
                {
                    "name": "_age",
                    "type": "uint256"
                }
            ],
            "name": "setInstructor",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "name",
                    "type": "bytes15"
                },
                {
                    "indexed": false,
                    "name": "age",
                    "type": "uint256"
                }
            ],
            "name": "Instructor",
            "type": "event"
        }

    ]);

    var Coursetro = CoursetroContract.at('0x83f89d95f0253e472f1da62f8b277c4cbf0459fb');

    console.log(Coursetro);

    $("#button").click(function() {
        $("#loader").show();
        Coursetro.setInstructor($("#name").val(), $("#age").val());

    });

})
