import { createClient } from 'wagmi'
import chains from './chains'
import connectors from './connectors'

const { provider } = chains

const client = createClient({
  autoConnect: true,
  provider,
  connectors,
})

export default client
