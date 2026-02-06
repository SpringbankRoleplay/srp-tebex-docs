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
    trailingSlash: true,
    // No basePath or assetPrefix needed for custom domain
    // turbopack: {
    //     resolveAlias: {
    //         'next-mdx-import-source-file': './src/mdx-components.tsx'
    //     }
    // }
})
