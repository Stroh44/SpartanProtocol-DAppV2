import { ethers } from 'ethers'

// Testnet ABI Imports
import abiTnBondVault from '../ABI/TN/BondVault.json'
import abiTnDao from '../ABI/TN/Dao.json'
import abiTnDaoVault from '../ABI/TN/DaoVault.json'
import abiTnErc20 from '../ABI/TN/ERC20.json'
import abiTnFS from '../ABI/TN/FallenSpartans.json'
import abiTnPool from '../ABI/TN/Pool.json'
import abiTnPoolFactory from '../ABI/TN/PoolFactory.json'
import abiTnReserve from '../ABI/TN/Reserve.json'
import abiTnRouter from '../ABI/TN/Router.json'
import abiTnSparta from '../ABI/TN/Sparta.json'
import abiTnSynth from '../ABI/TN/Synth.json'
import abiTnSynthFactory from '../ABI/TN/SynthFactory.json'
import abiTnSynthVault from '../ABI/TN/SynthVault.json'
import abiTnUtils from '../ABI/TN/Utils.json'
import abiTnWbnb from '../ABI/TN/WBNB.json'

// Mainnet ABI Imports
import abiMnBondVault from '../ABI/MN/BondVault.json'
import abiMnDao from '../ABI/MN/Dao.json'
import abiMnDaoVault from '../ABI/MN/DaoVault.json'
import abiMnErc20 from '../ABI/MN/ERC20.json'
import abiMnFS from '../ABI/MN/FallenSpartans.json'
import abiMnPool from '../ABI/MN/Pool.json'
import abiMnPoolFactory from '../ABI/MN/PoolFactory.json'
import abiMnReserve from '../ABI/MN/Reserve.json'
import abiMnRouter from '../ABI/MN/Router.json'
import abiMnSparta from '../ABI/MN/Sparta.json'
import abiMnSynth from '../ABI/MN/Synth.json'
import abiMnSynthFactory from '../ABI/MN/SynthFactory.json'
import abiMnSynthVault from '../ABI/MN/SynthVault.json'
import abiMnUtils from '../ABI/MN/Utils.json'
import abiMnWbnb from '../ABI/MN/WBNB.json'

export const abisTN = {
  bondVault: abiTnBondVault.abi,
  dao: abiTnDao.abi,
  daoVault: abiTnDaoVault.abi,
  erc20: abiTnErc20.abi,
  fallenSpartans: abiTnFS.abi,
  pool: abiTnPool.abi,
  poolFactory: abiTnPoolFactory.abi,
  reserve: abiTnReserve.abi,
  router: abiTnRouter.abi,
  sparta: abiTnSparta.abi,
  synth: abiTnSynth.abi,
  synthFactory: abiTnSynthFactory.abi,
  synthVault: abiTnSynthVault.abi,
  utils: abiTnUtils.abi,
  wbnb: abiTnWbnb.abi,
}

export const abisMN = {
  bondVault: abiMnBondVault.abi,
  dao: abiMnDao.abi,
  daoVault: abiMnDaoVault.abi,
  erc20: abiMnErc20.abi,
  fallenSpartans: abiMnFS.abi,
  pool: abiMnPool.abi,
  poolFactory: abiMnPoolFactory.abi,
  reserve: abiMnReserve.abi,
  router: abiMnRouter.abi,
  sparta: abiMnSparta.abi,
  synth: abiMnSynth.abi,
  synthFactory: abiMnSynthFactory.abi,
  synthVault: abiMnSynthVault.abi,
  utils: abiMnUtils.abi,
  wbnb: abiMnWbnb.abi,
}

// ADDRESSES FOR TESTS (UPDATE WHENEVER TESTS POINT SOMEWHERE ELSE)
export const TEST_WALLET = '0x0E8196b0EFe6e0062Da1B1d9F03f0a3ab3d53C77'
export const TEST_TOKEN = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
export const TEST_POOL = '0x48963a679e6708a39A166343FE289dbE9aBaEfeF'

export const addressesTN = {
  // OLD ADDRESSES SPV1
  bondv1: '0x4551457647f6810a917AF70Ca47252BbECD2A36c',
  bondv2: '0x2021047F7E3F8c9882e502A63eF036daEFA0B5f6',
  bondv3: '0xa11D0a9F919EDc6D72aF8F90D56735cAd0EBE836',
  daov1: '0xbC6134840a2604D00222F276c16d143dd3666dA3',
  incentivev1: '0xc241d694d51db9e934b147130cfefe8385813b86',
  routerv1: '0x94fFAD4568fF00D921C76aA158848b33D7Bd65d3',
  routerv2a: '0x111589F4cE6f10E72038F1E4a19F7f19bF31Ee35',
  routerv2b: '0x772E6dE5165A70B9a6aBe33fa20ddB78C28E6f50',
  routerv2c: '0x772E6dE5165A70B9a6aBe33fa20ddB78C28E6f50',
  utilsv1: '0x4029A4173F9431763Ee68F5BfCF0C6aA703B1653',
  // OLD ADDRESSES SPV2
  bondv4: '0xFbaCb851716FFA718111f069937cDbCF7003B384',
  bondVaultv1: '0x7f06678Bf6199CdEF6Cf76C264b94ffA6CD22e40',
  daov2: '0x0dFA75B8e76101aDBf588A4C03653f59DE3D4B23',
  daoVaultv1: '0x2d53adc5e5acc92226FAaFf1a5FcdEf4fEFAA4DD',
  fallenSpartansv1: '0x0Facf7AD25Ce97F174Cd1E7664fD1b8867C3909b',
  migratev1: '0x197C0fc4Ea92b58f375De66647368862677C95B7',
  poolFactoryv1: '0x47621301afa9FC76d61d6c34f96636D95a788142',
  reservev1: '0xaCb7645eb7784ee421dE0b4C4e2D31bbE29d3bD7',
  routerv3: '0xC9B60E2b1Fa28CeA42fD6f25D76766e1D5908eF2',
  synthFactoryv1: '0x18f48fB0881B263B26266B4db2bF034fEe7a2b43',
  synthVaultv1: '0x8db384Ee61F6F56750e64f8011dD3e323d885d2C',
  utilsv2: '0x7c5bBc0A7E21c22936f3788F5d58fB732659B76E',
  // CURRENT ADDRESSES
  bondVault: '0x91A0862f8fb5B9b430BF634720114c7173A1D0FC', // f2bb6131c8ae2c8242c9f72a4d49cdf29bf19771
  dao: '0x4F45fB8C7cFeAFeFA4B9159F92396dC19B437517', // f2bb6131c8ae2c8242c9f72a4d49cdf29bf19771
  daoVault: '0x7f5E5A443001D85d9f7a13E566fD9E1423B6Eac8', // f2bb6131c8ae2c8242c9f72a4d49cdf29bf19771
  fallenSpartans: '0x0Facf7AD25Ce97F174Cd1E7664fD1b8867C3909b', // N/A
  poolFactory: '0x88B0A87189d140EfD460D5A1b9b8Cbc77F2910E5', // f2bb6131c8ae2c8242c9f72a4d49cdf29bf19771
  reserve: '0xf5aB990cdC7B69717AA378A76eB8538F71318478', // 1d882f10adf42b4e2696ff9868b0e27226d5f370 ???
  router: '0x20e41Cc498CF27efD62EBFAD9B633Ad7a45bDC48', // f2bb6131c8ae2c8242c9f72a4d49cdf29bf19771
  synthFactory: '0x16e6c2ba0A0d90203Cc592Ff1E6776f3dd0C6e4f', // 56c9c1dd3d25f5545cb8194b4095b4a49087c460
  synthVault: '0x347BB26CE4eE2575A0C5a7d9FA253D5D40E9BfEE', // 737b6196fc2b2e8f6d2fa2c5b88bc338577121c5
  utils: '0x1C7437c145bD0bb7EE0dcFD30434173893596ee1', // f2bb6131c8ae2c8242c9f72a4d49cdf29bf19771
  // TOKEN ADDRESSES
  bnb: '0x0000000000000000000000000000000000000000',
  wbnb: '0x27c6487C9B115c184Bb04A1Cf549b670a22D2870',
  spartav1: '0x6e812dD5B642334bbd17636d3865CE82C3D4d7eB',
  spartav2: '0xd055ADFdD53963F578A929eaA440DBED95407472',
}

// List of BSC Mainnet Addresses
export const addressesMN = {
  // OLD ADDRESSES SPV1
  bondv1: '0xDa7d913164C5611E5440aE8c1d3e06Df713a13Da',
  bondv2: '0xE6844821B03828Fd4067167Bc258FA1EEFD1cCdf',
  bondv3: '0xf2EbA4b92fAFD47a6403d24a567b38C07D7A5b43',
  daov1: '0x04e283c9350Bab8A1243ccfc1dd9BF1Ab72dF4f0',
  incentivev1: '0xdbe936901aeed4718608d0574cbaab01828ae016',
  routerv1: '0x4ab5b40746566c09f4B90313D0801D3b93f56EF5',
  routerv2a: '0xDbe936901aeed4718608D0574cbAAb01828AE016',
  routerv2b: '0x9dB88952380c0E35B95e7047E5114971dFf20D07',
  routerv2c: '0x6239891FC4030dc050fB9F7083aa68a2E4Fe426D',
  utilsv1: '0xCaF0366aF95E8A03E269E52DdB3DbB8a00295F91',
  tempUtilsv1a: '0x20d0270649c9f13c081FF98350148706A05557F8',
  // OLD ADDRESSES SPV2
  bondVaultv1: '',
  daov2: '0xaa1977d313C265982F24c59D49a35F0aB6F8C7bB',
  daoVaultv1: '',
  fallenSpartansv1: '0xfEB0a2A1AE523E4786f6916ff00E037fF82Ab1A6',
  poolFactoryv1: '',
  reservev1: '0x5304c4449b51ff774D0557cFACDbA6fF35DB33C1',
  routerv3: '',
  synthFactoryv1: '',
  synthVaultv1: '',
  utilsv2: '',
  // CURRENT ADDRESSES
  bondVault: '',
  dao: '0xaa1977d313C265982F24c59D49a35F0aB6F8C7bB',
  daoVault: '',
  fallenSpartans: '0xfEB0a2A1AE523E4786f6916ff00E037fF82Ab1A6',
  poolFactory: '',
  reserve: '0x5304c4449b51ff774D0557cFACDbA6fF35DB33C1',
  router: '',
  synthFactory: '',
  synthVault: '',
  utils: '',
  // TOKEN ADDRESSES
  bnb: '0x0000000000000000000000000000000000000000',
  wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  spartav1: '0xE4Ae305ebE1AbE663f261Bc00534067C80ad677C',
  spartav2: '0x3910db0600eA925F63C36DdB1351aB6E2c6eb102',
}

export const bscRpcsTN = [
  'https://data-seed-prebsc-1-s1.binance.org:8545/',
  'https://data-seed-prebsc-2-s1.binance.org:8545/',
  'https://data-seed-prebsc-1-s2.binance.org:8545/',
  'https://data-seed-prebsc-2-s2.binance.org:8545/',
  'https://data-seed-prebsc-1-s3.binance.org:8545/',
  // 'https://data-seed-prebsc-2-s3.binance.org:8545/', MAJOR ISSUES WITH THIS ONE
]

export const bscRpcsMN = [
  'https://bsc-dataseed.binance.org/',
  'https://bsc-dataseed1.defibit.io/',
  'https://bsc-dataseed1.ninicoin.io/',
  // BACKUPS BELOW
  // 'https://bsc-dataseed2.defibit.io/',
  // 'https://bsc-dataseed3.defibit.io/',
  // 'https://bsc-dataseed4.defibit.io/',
  // 'https://bsc-dataseed2.ninicoin.io/',
  // 'https://bsc-dataseed3.ninicoin.io/',
  // 'https://bsc-dataseed4.ninicoin.io/',
  // 'https://bsc-dataseed1.binance.org/',
  // 'https://bsc-dataseed2.binance.org/',
  // 'https://bsc-dataseed3.binance.org/',
  // 'https://bsc-dataseed4.binance.org/',
]

/**
 * Format long string into a string with '...' separator (ideally for anchor text)
 * @param {string} longString
 * @returns {string} shortString
 */
export const formatShortString = (longString) => {
  const addr = longString || '0x000000000000000'
  const shortString = `${addr.substring(0, 5)}...${addr?.substring(
    addr.length - 3,
    addr.length,
  )}`
  return shortString
}

/**
 * Trigger change between Addresses
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} Relevant list of addresses
 */
export const changeAddresses = (_network) => {
  const addresses = _network === 97 ? addressesTN : addressesMN
  window.localStorage.setItem('addresses', JSON.stringify(addresses))
  return addresses
}

const tryParse = (data) => {
  try {
    return JSON.parse(data)
  } catch (e) {
    return false
  }
}

/**
 * Check localStorage for addresses and set default if missing
 * @returns {Object} Relevant list of addresses
 */
export const getAddresses = () => {
  const addresses = tryParse(window.localStorage.getItem('addresses'))
    ? tryParse(window.localStorage.getItem('addresses'))
    : changeAddresses('testnet') // Change this to 'mainnet' after mainnet is deployed
  return addresses
}

/**
 * Filter finalArray (or any array) to the scope of the assetAddress
 * @param {string} assetAddress
 * @param {string} finalArray
 * @returns {Object} item from finalArray
 */
export const getItemFromArray = (asset, finalArray) => {
  const addr = getAddresses()
  let arrayItem = finalArray.filter(
    (item) => item.tokenAddress === addr.spartav2,
  )
  if (finalArray.find((item) => item.tokenAddress === asset.tokenAddress)) {
    arrayItem = finalArray.filter(
      (item) => item.tokenAddress === asset.tokenAddress,
    )
  }
  ;[arrayItem] = arrayItem
  return arrayItem
}

/**
 * Trigger change between ABIs
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} Relevant list of ABIs
 */
export const changeAbis = (_network) => {
  const abis = _network === 97 ? abisTN : abisMN
  window.localStorage.setItem('abis', JSON.stringify(abis))
  return abis
}

/**
 * Check localStorage for ABIs and set default if missing
 * @returns {Object} Relevant list of ABIs
 */
export const getAbis = () => {
  const abis = tryParse(window.localStorage.getItem('abis'))
    ? tryParse(window.localStorage.getItem('abis'))
    : changeAbis('testnet') // Change this to 'mainnet' after mainnet is deployed
  return abis
}

/**
 * Trigger random selection of a relevant RPC URL
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} RPC URL
 */
export const changeRpc = (_network) => {
  const rpcUrls = _network === 97 ? bscRpcsTN : bscRpcsMN
  const rpcIndex = Math.floor(Math.random() * rpcUrls.length)
  const rpcUrl = rpcUrls[rpcIndex]
  return rpcUrl
}

/**
 * Trigger change between mainnet and testnet
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} chainId (56), net (mainnet), chain (BSC)
 */
export const changeNetworkLsOnly = (_network) => {
  const rpcUrl = changeRpc(_network)
  const network =
    _network === 97
      ? { chainId: 97, net: 'testnet', chain: 'BSC', rpc: rpcUrl }
      : { chainId: 56, net: 'mainnet', chain: 'BSC', rpc: rpcUrl }
  window.localStorage.setItem('network', JSON.stringify(network))
  return network
}

/**
 * Trigger change between mainnet and testnet
 * @param {string} net - 'mainnet' or 'testnet'
 * @returns {Object} chainId (56), net (mainnet), chain (BSC)
 */
export const changeNetwork = async (_network) => {
  const rpcUrl = changeRpc(_network)
  await changeAbis(_network)
  await changeAddresses(_network)
  const network =
    _network === 97
      ? { chainId: 97, net: 'testnet', chain: 'BSC', rpc: rpcUrl }
      : { chainId: 56, net: 'mainnet', chain: 'BSC', rpc: rpcUrl }
  window.localStorage.setItem('network', JSON.stringify(network))
  return network
}

/**
 * Check localStorage for net and set default if missing
 * @returns {Object} chainId (56), net (mainnet), chain (BSC)
 */
export const getNetwork = () => {
  const network = tryParse(window.localStorage.getItem('network'))
    ? tryParse(window.localStorage.getItem('network'))
    : changeNetwork(56) // Change this to 56 (mainnet) after mainnet is deployed
  return network
}

// CONNECT WITH PROVIDER (& SIGNER IF WALLET IS CONNECTED)
export const getWalletProvider = (_provider) => {
  const network = getNetwork()
  let provider = new ethers.providers.JsonRpcProvider(network.rpc)
  if (_provider) {
    provider = new ethers.providers.Web3Provider(_provider)
    provider = provider.getSigner()
  }
  return provider
}

// GET GAS PRICE FROM PROVIDER
export const getProviderGasPrice = () => {
  const provider = getWalletProvider()
  const gasPrice = provider.getGasPrice()
  return gasPrice
}

/**
 * Get the 'window' object of the connected walletType
 * @param {} - uses localStorage
 * @returns {Object} window.ethereum or BinanceChain
 */
export const getWalletWindowObj = () => {
  let connectedWalletType = ''
  if (window.sessionStorage.getItem('lastWallet') === 'BC') {
    connectedWalletType = window.BinanceChain
  } else {
    connectedWalletType = window.ethereum
  }
  return connectedWalletType
}
