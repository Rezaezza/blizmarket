const hre = require('hardhat')

async function main() {

  const usdcAddress =
    '0xYourUSDCAddress'

  const Contract =
    await hre.ethers.getContractFactory(
      'BlizPredictionMarket'
    )

  const contract =
    await Contract.deploy(
      usdcAddress
    )

  await contract.waitForDeployment()

  console.log(
    'Contract deployed:',
    await contract.getAddress()
  )
}

main().catch((error) => {

  console.error(error)

  process.exitCode = 1

})