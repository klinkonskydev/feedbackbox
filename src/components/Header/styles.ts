import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: calc(${theme.spacings.xmedium} + ${theme.spacings.xsmall});
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
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

export const Name = styled.h1`
  font: normal 600 1.6rem Inter, 'sans-serif';
`

export const Heading = styled.div`
  ${({ theme }) => css`
    font: normal 500 2rem Inter, 'sans-serif';
    color: ${theme.color.gray[800]};
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font: normal 400 1.6rem Inter, 'sans-serif';
    color: ${theme.color.black};
    margin-top: ${theme.spacings.medium};
  `}
`
