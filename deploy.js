const hre = require("hardhat");

async function main() {
  
  const HopeToken = await hre.ethers.getContractFactory("HopeToken");
  const hopeToken = await HopeToken.deploy();

  await hopeToken.deployed();

  console.log("Hope Token deployed to:", hopeToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
