/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SidebarLayout } from '@/components/Layouts/layout-sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/logo/png/logo-color.png"
          type="image/x-icon"
        />
        <title>Just Finished</title>
        <desc>List yours finished games!</desc>
      </Head>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarLayout>
          <Component {...pageProps} />
        </SidebarLayout>
      </ThemeProvider>
    </>
  )
}
