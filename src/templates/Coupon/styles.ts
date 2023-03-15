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

export const CouponWrapper = styled.div`
  display: none;
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
  `}
`
