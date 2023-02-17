import Head from 'next/head'
import { TopBar, Footer } from '@/modules/common/components'
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

      <TopBar />

      <div className="bg-shiba-yellow min-w-screen min-h-screen">
        <div className="p-4">{children}</div>
      </div>

      <Footer />
    </>
  )
}
