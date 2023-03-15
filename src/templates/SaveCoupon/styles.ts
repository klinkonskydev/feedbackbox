import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    gap: ${theme.spacings.xbig};
  `}
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    font: normal 700 4.4rem Inter, 'sans-serif';
    color: ${theme.color.gray[800]};
    text-align: center;
  `}
`

export const ImageWrapper = styled.div`
  max-width: 100px;
  height: 40px;
  overflow: hidden;
  position: relative;

  & img {
    object-fit: contain;
  }
`
