import { mainnet } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const walletConnect = new WalletConnectConnector({
  chains: [mainnet],
  options: {
    qrcode: true,
  },
})

const ledger = new LedgerConnector({
  chains: [mainnet],
})

const injected = new InjectedConnector({
  chains: [mainnet],
  options: {
    shimDisconnect: true,
    name: 'Browser',
  },
})

const connectors = [injected, ledger, walletConnect]

export default connectors
