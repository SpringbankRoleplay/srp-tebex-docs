
import nextra from 'nextra'
// Set up Nextra with its configuration
const withNextra = nextra({

})


// Export the final Next.js config with Nextra included
const nextConfig = withNextra({
    output: 'export',
    skipTrailingSlashRedirect: true,
    images: {
        unoptimized: false,
    },
    i18n: {
        locales: ['en', 'nl'],
        defaultLocale: 'en'
    }
})

export default nextConfig