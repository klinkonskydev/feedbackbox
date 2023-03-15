import NextHead from 'next/head'

type HeadProps = {
  name: string
}

const Head = ({ name }: HeadProps) => {
  return (
    <NextHead>
      <title>{!!name ? name : 'feedbackbox'}</title>
      <meta name="description" content={`${name} avaliação de produto`} />
    </NextHead>
  )
}

export default Head
