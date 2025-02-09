import BinanceChain from '../../assets/icons/BinanceChain.svg'
import MetaMask from '../../assets/icons/metamask.svg'
// import WalletConnect from '../../assets/icons/WalletConnect.svg'
import TrustWallet from '../../assets/icons/TrustWallet.svg'
import MathWallet from '../../assets/icons/MathWallet.svg'
import TokenPocket from '../../assets/icons/TokenPocket.svg'

const walletTypes = [
  {
    id: 'BC',
    title: 'BinanceChain',
    icon: [BinanceChain],
    inject: 'bsc',
  },
  {
    id: 'MM',
    title: 'MetaMask',
    icon: [MetaMask],
    inject: undefined,
  },
  {
    id: 'TW',
    title: 'TrustWallet',
    icon: [TrustWallet],
    inject: 'injected',
  },
  {
    id: 'OOT',
    title: 'Others',
    icon: [TokenPocket, MathWallet],
    inject: 'injected',
  },
  // {
  //   id: 'WC',
  //   title: 'WalletConnect',
  //   icon: [WalletConnect],
  //   inject: 'walletconnect',
  // },
]

export default walletTypes
