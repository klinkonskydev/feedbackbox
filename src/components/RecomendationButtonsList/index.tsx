import Button from 'components/Button'
import { useState } from 'react'
import * as S from './styles'

export type RecommendationButtonsListProps = {
  color?: string
  handleChange?: (v: number) => void
  error?: string
}

const RecommendationButtonsList = ({
  handleChange,
  color,
  error
}: RecommendationButtonsListProps) => {
  const [value, setValue] = useState<number | undefined>()

  const handleClick = (newValue: number) => {
    setValue(newValue)
    !!handleChange && handleChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.RecommendationButtonsWrapper>
        {Array.from({ length: 11 }).map((_, i) => (
          <Button
            variant="outlined"
            key={String(i)}
            color={color}
            type="button"
            isChecked={value === i}
            onClick={() => handleClick(i)}
          >
            {i}
          </Button>
        ))}
      </S.RecommendationButtonsWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default RecommendationButtonsList
