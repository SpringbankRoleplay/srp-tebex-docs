import { importPage, generateStaticParamsFor } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export const dynamic = 'force-static';

export const dynamicParams = false;

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath || [], params.lang || 'en')
  return metadata
}
 
const Wrapper = getMDXComponents().wrapper

export default async function Page({ params = {}, ...props }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'en'
  const mdxPath = resolvedParams.mdxPath || []

  const { default: MDXContent, toc, metadata } =
    await importPage(resolvedParams.mdxPath || [], resolvedParams.lang || 'en')

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={{ lang, mdxPath }} />
    </Wrapper>
  )
}
