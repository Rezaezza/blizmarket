const { ethers } = require("hardhat");

async function main() {

  const CONTRACT_ADDRESS =
    "0x084A95B785e52F859b3c737d4e4A11333dEec619";

  const USDC_ADDRESS =
    "0x3600000000000000000000000000000000000000";

const usdc =
  await ethers.getContractAt(
    "contracts/BlizPredictionMarketV2.sol:IERC20",
    USDC_ADDRESS
  );

  const contract =
    await ethers.getContractAt(
      "BlizPredictionMarketV2",
      CONTRACT_ADDRESS
    );

  const amount =
    ethers.parseUnits(
      "100",
      6
    );

  console.log(
    "Approving..."
  );

  const approveTx =
    await usdc.approve(
      CONTRACT_ADDRESS,
      amount
    );

  await approveTx.wait();

  console.log(
    "Depositing..."
  );

  const depositTx =
    await contract.depositTreasury(
      amount
    );

  await depositTx.wait();

  console.log(
    "Treasury funded!"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });