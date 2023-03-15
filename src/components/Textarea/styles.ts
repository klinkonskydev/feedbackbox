import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font: normal 500 14px Inter, 'sans-serif';
    color: ${theme.color.gray[700]};
    width: fit-content;
  `}
`

export const Error = styled.label`
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

export const TextareaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    background: ${theme.color.white};
    border-radius: ${theme.spacings.medium};
    font: normal 400 16px Inter, 'sans-serif';
    color: ${theme.color.gray[500]};
    padding: calc(${theme.spacings.xmedium} + 0.2rem) ${theme.spacings.medium};
    border: 1px solid ${theme.color.gray[300]};
    resize: none;
    min-height: 12rem;
    &::placeholder {
      color: ${lighten(0.35, theme.color.gray[500])};
    }
  `}
`
