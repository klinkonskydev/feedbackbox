import Image from 'next/image'

import { Answer, CompanySettings } from 'templates/Coupon'
import Coupon from 'components/Coupon'

import * as S from './styles'
import { forwardRef, ForwardRefRenderFunction } from 'react'

export interface SaveCouponTemplateProps {
  answer: Answer
  settings: CompanySettings
}

const SaveCouponTemplate: ForwardRefRenderFunction<
  HTMLDivElement,
  SaveCouponTemplateProps
> = ({ answer, settings }, ref) => (
  <S.Wrapper ref={ref}>
    {!!settings?.logo && (
      <S.ImageWrapper>
        <Image
          alt={`${settings.name} logo`}
          src={settings.logo}
          width={100}
          height={40}
        />
      </S.ImageWrapper>
    )}
    <S.Heading>Esse é o meu cupom de desconto</S.Heading>
    <Coupon {...answer} />
  </S.Wrapper>
)

export default forwardRef(SaveCouponTemplate)
