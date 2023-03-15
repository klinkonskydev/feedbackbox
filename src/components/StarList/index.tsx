import StarIcon from 'components/Star'
import { useState } from 'react'

import * as S from './styles'

export type StarListProps = {
  handleChange?: (v: number) => void
  initialStarValue?: number
  error?: string
}

const StarList = ({ handleChange, initialStarValue, error }: StarListProps) => {
  const [value, setValue] = useState(initialStarValue)
  const handleClickStar = (starValue: number) => {
    setValue(starValue)
    !!handleChange && handleChange(starValue)
  }

  return (
    <S.Wrapper>
      <S.StarsWrapper>
        {Array.from({ length: 5 }).map((_, i) => {
          const starValue = i + 1
          return (
            <StarIcon
              {...(value && { isChecked: starValue <= value })}
              key={i}
              onClick={() => handleClickStar(starValue)}
              title={`Nota ${starValue}`}
              titleId={String(starValue)}
            />
          )
        })}
      </S.StarsWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default StarList
