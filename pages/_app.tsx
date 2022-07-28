import type { AppProps } from 'next/app'
import { Footer } from '../src/components/footer'
import '../styles/globals.css'
import { GlobalStyle } from '../styles/globalStyles'




export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        
        <Component {...pageProps} />
        <GlobalStyle/>
   

    </>
  )
}
