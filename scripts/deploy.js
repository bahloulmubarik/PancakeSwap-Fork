const { ethers } = require ("hardhat");

async function main(){

  //load Token contract
  const HopeToken = await ethers.getContractFactory("HopeToken");
  const hopeToken = await HopeToken.deploy();

  //deploy the contract

  await HopeToken.deployed();

  console.log("HopeToken deploy to :", hopeToken.address);
}
main ()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});