async function main() {

  const usdcAddress =
    "0x3600000000000000000000000000000000000000";

const Contract =
  await ethers.getContractFactory(
    "BlizPredictionMarketV2"
  );

  console.log("Deploying...");

  const contract =
    await Contract.deploy(
      usdcAddress
    );

  await contract.waitForDeployment();

  console.log(
    "Contract deployed:",
    await contract.getAddress()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });