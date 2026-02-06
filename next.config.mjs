import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
    // ... Add Nextra-specific options here
})

// Export the final Next.js config with Nextra included
export default withNextra({
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/srp-tebex-docs',
    assetPrefix: '/srp-tebex-docs'
    // turbopack: {
    //     resolveAlias: {
    //         'next-mdx-import-source-file': './src/mdx-components.tsx'
    //     }
    // }
})
