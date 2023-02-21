import Head from 'next/head'
import { TopBar, Footer } from '@/modules/common/components'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode;
  preContent?: ReactNode;
  postContent?: ReactNode;
}

export default function BaseLayout({
  children,
  preContent,
  postContent,
}: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      {preContent}

      <div className="bg-shiba-yellow min-w-screen">
        <div className="p-4">{children}</div>
      </div>

      {postContent}

      <Footer />
    </>
  )
}
