import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    border: 1px solid ${theme.color.gray[300]};
    background: ${theme.color.white};
    padding: 1.5rem 2.6rem;
    width: 100%;
    margin: 0 auto;
    position: relative;

    &::before,
    &::after {
      content: '';
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      position: absolute;
      top: 50%;
      background: ${theme.color.white};
    }

    &::before {
      border: inherit;
      left: -13px;
      border-top: 0;
      border-left: 0;
      border-bottom: 0;
      transform: translateY(-50%);
    }

    &::after {
      border: inherit;
      right: -13px;
      border-top: 0;
      border-right: 0;
      border-bottom: 0;
      transform: translateY(-50%);
    }
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    font: normal 600 2rem Inter, 'sans-serif';
    color: ${theme.color.gray[800]};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font: normal 400 1.2rem Inter, 'sans-serif';
    color: ${theme.color.gray[500]};
  `}
`
