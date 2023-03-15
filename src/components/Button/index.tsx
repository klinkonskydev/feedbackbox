import * as S from './styles'

export type ButtonProps = {
  variant?: 'outlined' | 'contained' | 'text'
  isChecked?: boolean
  color?: string
  fullWidth?: boolean
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant = 'contained', children, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper variant={variant} {...rest}>
      {children}
    </S.Wrapper>
  )
}
export default Button
