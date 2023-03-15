import { darken, getContrast, rgba } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Omit<ButtonProps, 'children'>
const wrapperModifiers = {
  outlined: (theme: DefaultTheme, color?: string) => css`
    border: 1px solid;
    border-color: ${color || theme.color.gray[300]};
    color: ${color || theme.color.gray[700]};
    padding: 8px 10px;
    background: ${theme.color.white};
  `,
  contained: (theme: DefaultTheme, color?: string) => css`
    background: ${color || theme.color.red};
    color: ${theme.color.white};
    padding: ${theme.spacings.xmedium};
    &:disabled {
      cursor: not-allowed;
      background: ${darken(0.25, color || theme.color.red)};
    }
  `,
  text: (theme: DefaultTheme, color?: string) => css`
    background: transparent;
    color: ${color || theme.color.gray[600]};
    padding: ${theme.spacings.xmedium};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  isChecked: (theme: DefaultTheme, color?: string) => css`
    color: ${getContrast(color!, '#FFF') < 3.5 ? theme.color.gray[700] : '#FFF' };
    background: ${color};
  `
}
export const Wrapper = styled.button<WrapperProps>`
  ${({ fullWidth, variant, theme, color, isChecked }) => css`
    outline: 0;
    border: 0;
    font: normal 600 14px Inter, 'sans-serif';
    border-radius: 8px;
    cursor: pointer;
    transition: background 200ms ease-out;

    ${!!variant && wrapperModifiers[variant](theme, color)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!isChecked && wrapperModifiers.isChecked(theme, color)}
  `}
`
