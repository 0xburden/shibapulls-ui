import Head from 'next/head'
import { TopBar } from '@/modules/common/components'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-shiba-yellow w-screen h-screen">
        <TopBar />
        {children}
      </div>
    </>
  )
}
