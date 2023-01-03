require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
const { API_URL, PRIVATE_KEY, BSC_SMART_CHAIN } = process.env;
module.exports = {
  solidity:{
  compilers: [
    {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20,
        },
      },
    },
    {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20,
        },
      },
    },
    {
      version: "0.5.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20,
        },
      },
    },
    {
      version: "0.7.3",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20,
        },
      },
    },
    {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20,
        },
      },
    },
  ]
},
defaultNetwork: "hardhat",
        networks: {
            hardhat: {},
            rinkeby: {
               url: API_URL,
               accounts: [process.env.PRIVATE_KEY],
               gasPrice: 100000000000,
             },
             bsctestnet: {
               url: "https://data-seed-prebsc-1-s3.binance.org:8545",
               chainId: 97,
               accounts: [process.env.PRIVATE_KEY],
               gasPrice: 100000000000,
             },
             bscmainnet: {
              url: "https://bsc-dataseed.binance.org/",
              chainId: 56,
              accounts: [process.env.PRIVATE_KEY],
              gasPrice: 100000000000,
            }
        },
        etherscan: {
            // apiKey: ETHERSCAN_API_KEY,
           apiKey: BSC_SMART_CHAIN,
        }

};
