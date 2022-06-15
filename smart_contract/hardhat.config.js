require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",

  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/jelfHdP2A5WoYGYe9qLS87BGDPBTGiYD',
      accounts: ['4c3fcf9cf60ba3d56d24efcec3ed74eee6e35985b2badc8c67f46eed6918eb8e']
    }
  }
};
