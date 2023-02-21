import { WagmiConfig } from 'wagmi'
import { client } from '@/modules/wagmi/config'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode;
}

export default function WagmiProvider({ children }: Props) {
  return <WagmiConfig client={client}>{children}</WagmiConfig>
}
