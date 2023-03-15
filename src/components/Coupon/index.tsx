import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Answer } from 'templates/Coupon'

import * as S from './styles'

const Coupon: ForwardRefRenderFunction<HTMLDivElement, Answer> = (
  { coupon, discount, name, validityInDays },
  ref
) => {
  return (
    <S.Wrapper ref={ref}>
      <S.Column>
        <S.Heading>{discount}% OFF</S.Heading>
        <S.Subtitle>{name}</S.Subtitle>
      </S.Column>

      <S.Column>
        <S.Heading>#{coupon}</S.Heading>
        <S.Subtitle>Válido até {validityInDays}</S.Subtitle>
      </S.Column>
    </S.Wrapper>
  )
}

export default forwardRef(Coupon)
