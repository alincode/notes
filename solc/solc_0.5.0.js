var solc = require('solc');

var output = JSON.parse(solc.compile(JSON.stringify({
  language: 'Solidity',
  settings: {
    optimizer: {
      enabled: true
    },
    metadata: {
      useLiteralContent: true
    },
    outputSelection: {
      "*": {
        "*": ["abi", "metadata", "evm.bytecode"]
      }
    }
  },
  sources: {
    'MyContract': {
      content: `contract SimpleStorage {
          uint storedData;

            function set(uint x) public {
              storedData = x;
            }

          function get() public view returns(uint) {
          return storedData;
        }
      }`
    },
    'MyContract2': {
      content: 'contract d { uint public storedData; }'
    }
  }
})))

console.dir(output)

for (var contractName in output.contracts) {
  console.log(contractName + ': ')
  console.dir(output.contracts[contractName])
  console.log('============')
}