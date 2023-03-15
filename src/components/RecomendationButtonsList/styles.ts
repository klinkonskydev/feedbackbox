import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const RecommendationButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
    flex-wrap: wrap;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    font: normal 500 13px Inter, 'sans-serif';
    color: ${theme.color.red};
    width: fit-content;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  `}
`
