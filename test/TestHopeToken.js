const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hope token", function () {
  it("Should return owner of token", async function () {
    const [owner]=await ethers.getSigners();
    const HopeToken = await ethers.getContractFactory("HopeToken");
    const hopeToken = await HopeToken.deploy();
    await hopeToken.deployed();
    const owneraddress= await HopeToken.owner();

    expect(owneraddress).to.equal(owner.address);
  });
});


