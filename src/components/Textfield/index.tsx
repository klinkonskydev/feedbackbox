import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import * as S from './styles'

export type TextfieldProps = {
  name: string
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Textfield: ForwardRefRenderFunction<HTMLInputElement, TextfieldProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <S.Wrapper>
      <S.TextfieldWrapper>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.Textfield id={name} name={name} ref={ref} {...rest} />
      </S.TextfieldWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default forwardRef(Textfield)
