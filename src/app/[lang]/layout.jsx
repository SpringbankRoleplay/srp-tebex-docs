import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
    title: 'SRP Scripts Documentation',
    description: 'Documentation for the SRP Script.',
    icons: {
      icon: '/favicon.ico',
    },
}
 
const banner = <Banner storageKey="springbank-scripts-beta">Springbank - Scripts | Beta🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Springbank</b>}
    chatLink="https://discord.gg/5H6kG8XAur"
    projectLink='https://github.com/SpringbankRoleplay/srp-tebex-docs'
    // ... Your additional navbar options
  />
)
const footer = <Footer>{new Date().getFullYear()} © Springbank.</Footer>
 
export default async function RootLayout({ children, params }) {
  let { lang } = await params
  if (!lang) lang = 'en'
  const pageMap = await getPageMap(`/${lang}`)

  return (
    <html
      // Not required, but good for SEO
      lang={lang}
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
           banner={banner}
          toc={{
            float: true,
            title: lang === 'nl' ? 'Op deze pagina' : 'On this page'
          }}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/springbank/"
          footer={footer}
          // ... Your additional layout options
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'nl', name: 'Nederlands' }
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}