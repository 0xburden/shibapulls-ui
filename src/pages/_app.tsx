import '@/styles/globals.css'
import { Montserrat, Mochiy_Pop_One } from '@next/font/google'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({ subsets: ['latin'] })

const mochiy = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mochiy-pop-one',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <div className={mochiy.variable}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
