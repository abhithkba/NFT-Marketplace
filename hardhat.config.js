require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
  //   mumbai:{
  //     url:"",
  //     accounts:[""]
  //   }
   },
  solidity: "0.8.19",
};
