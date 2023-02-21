import { configureChains } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { mainnet } from 'wagmi/chains'

const apiKey = process.env.ALCHEMY_API_KEY ?? ''

const chains = configureChains([mainnet], [alchemyProvider({ apiKey })])

export default chains
