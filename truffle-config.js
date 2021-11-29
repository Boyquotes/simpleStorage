const path = require("path");

const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
//    develop: {
//      port: 8545
//    }
    ropsten: {
     provider: function() {
       return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`)
     },
     network_id: 3
    }
  },
 // Configure your compilers
 compilers: {
   solc: {
     version: "0.6.11",    // Fetch exact version from solc-bin (default: truffle's version)
     // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
     settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
       enabled: false,
       runs: 200
       },
     evmVersion: "byzantium"
     }
   },
 }


};
