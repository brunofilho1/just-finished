/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SidebarLayout } from '@/components/Layouts/layout-sidebar'
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Just Finished</title>
        <desc>List yours finished games!</desc>
      </Head>

      <SidebarLayout>
        <Component {...pageProps} />
      </SidebarLayout>
    </>
  )
}
