import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.big};
    padding: ${theme.spacings.hue} calc(${theme.spacings.big} - 0.5rem);
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
  `}
`

export const SendAuthorization = styled.p`
  ${({ theme }) => css`
    font: normal 400 11px Inter, 'sans-serif';
    color: ${theme.color.gray[500]};
    & span {
      font: normal 600 11px Inter, 'sans-serif';
      color: ${theme.color.gray[500]};
    }
  `}
`

export const AboutCupom = styled.p`
  ${({ theme }) => css`
    font: normal 400 10px Inter, 'sans-serif';
    color: ${theme.color.gray[500]};
  `}
`
