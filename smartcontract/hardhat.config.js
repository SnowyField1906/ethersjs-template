require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity : '0.8.0',
  networks : {
    ropsten:{
      url: `https://eth-rinkeby.alchemyapi.io/v2/Ufvjrdj1BIlCIHBCH2Tn8hGeNFm-98A-`,
      accounts: ['e657d4ea627fa889d81f291a79a631f5f7eedf76e8c8ed1f38ca667c85135c47']
    } 
  }
}