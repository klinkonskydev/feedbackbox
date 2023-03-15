import Image from 'next/image'
import * as S from './styles'

type HeaderProps = {
  logo: string
  name: string
  couponPercentage: number
  description?: string
  heading: string
}

const Header = ({ logo, name, description, heading }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        {!!logo && (
          <S.ImageWrapper>
            <Image alt={`${name} logo`} src={logo} width={100} height={40} />
          </S.ImageWrapper>
        )}

        <S.Name>{name}</S.Name>
      </S.Header>

      <div>
        <S.Heading>{heading}</S.Heading>
        {!!description && <S.Description>{description}</S.Description>}
      </div>
    </S.Wrapper>
  )
}

export default Header
