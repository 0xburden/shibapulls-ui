import Head from 'next/head'
import type { ReactNode } from 'react'

interface Props {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export default function Meta({ title, description, children }: Props) {
  return (
    <Head>
      <title>{`Shiba Pulls NFT ${title ? `| ${title}` : ''}`}</title>

      <meta
        name="description"
        content={`${
          description ??
          'Collection of unique banner image NFTs on the Ethereum mainnet.'
        }`}
      />
      {children}
    </Head>
  )
}
