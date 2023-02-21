import { createClient } from 'wagmi'
import { chains } from '@/modules/wagmi/config'

const { provider } = chains

const client = createClient({ autoConnect: true, provider })

export default client
