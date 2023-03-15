import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.big};
  `}
`

export const Label = styled.p`
  ${({ theme }) => css`
    font: normal 500 14px Inter, 'sans-serif';
    color: ${theme.color.gray[700]};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    font: normal 400 14px Inter, 'sans-serif';
    color: ${theme.color.gray[500]};
    display: block;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const RecommendWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`

export const Error = styled.label`
  ${({ theme }) => css`
    font: normal 500 14px Inter, 'sans-serif';
    color: ${theme.color.red};
    width: fit-content;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  `}
`

