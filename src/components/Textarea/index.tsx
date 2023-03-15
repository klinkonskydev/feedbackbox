import { forwardRef, ForwardRefRenderFunction } from 'react'
import * as S from './styles'

export type TextareaProps = {
  name: string
  label?: string
  error?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <S.Wrapper>
      <S.TextareaWrapper>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.Textarea id={name} name={name} ref={ref} {...rest} />
      </S.TextareaWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default forwardRef(Textarea)
