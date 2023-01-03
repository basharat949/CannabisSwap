const hre = require("hardhat");

async function main() {
  console.log("testnet")
    /**deploy the loyalswapFactory Smart Contract */
  let cannabisSwapFactory = await hre.ethers.getContractFactory("CannabisSwapFactory");
  deployedCannabisSwapFactory = await cannabisSwapFactory.deploy("0x598C7d70e515a11BE99f8A46E24bAC78b5531556");
  cannabisSwapFactory = await deployedCannabisSwapFactory.deployed();
  console.log("CannabisSwapFactory Contract Address:",cannabisSwapFactory.address);


    /**deploy the cannabisSwapRouter02 Smart Contract */
  let cannabisSwapRouter02 = await hre.ethers.getContractFactory("CannabisSwapRouter02");
  deployedCannabisSwapRouter02 = await cannabisSwapRouter02.deploy(cannabisSwapFactory.address, "0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F");
  cannabisSwapRouter02 = await deployedCannabisSwapRouter02.deployed();
  console.log("cannabisSwapRouter02 Contract Address:",cannabisSwapRouter02.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
