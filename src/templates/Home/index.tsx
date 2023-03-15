import Head from 'components/Head'
import Header from 'components/Header'
import FeedbackForm from 'components/FeedbackForm'

import * as S from './styles'

export type HomeTemplateProps = {
  name: string
  logo: string
  color: string
  couponPercentage: number
}

const HomeTemplate = ({
  name,
  logo,
  color,
  couponPercentage
}: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <Head name={name} />
      <Header
        name={name}
        logo={logo}
        couponPercentage={couponPercentage}
        heading={`Responda essa pergunta e receba um cupom* de ${couponPercentage}% de
          desconto na próxima compra`}
      />
      <FeedbackForm color={color} />
      <S.SendAuthorization>
        Ao clicar em <span>&quot;Receber meu cupom&quot;</span> você autoriza o
        envio de comunicações por WhatsApp.
      </S.SendAuthorization>
      <S.AboutCupom>*cupom valido por 30 dias.</S.AboutCupom>
    </S.Wrapper>
  )
}

export default HomeTemplate
