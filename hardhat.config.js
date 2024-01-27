require("@nomicfoundation/hardhat-toolbox");

require("@nomicfoundation/hardhat-verify");

require('dotenv').config();

const metamask_private_key  = "keyy";

  module.exports = {
     solidity: "0.6.12",
     defaultNetwork: "sepolia",
     networks: {
        hardhat: {},
      
       sepolia: {
          url: "url of sepolia(infura)",                          
          accounts: "0x00"  ,    //Metamask Private Key
        },

     },

     etherscan: {
      apiKey: APIKEY,
    },
  }