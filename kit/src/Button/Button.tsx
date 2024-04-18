import styled, { css } from 'styled-components';

import {
  px,
  THEME,
  ButtonRootTransientProps,
  ButtonProps,
  DEFAULT_PROPS,
} from './preamble';

// noinspection JSUnresolvedReference
export const ButtonRoot = styled.button.attrs({
  className: px('root'),
})<ButtonRootTransientProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 0.0625rem solid transparent; // 1px
  padding: 0.5rem 1rem; // 8px 16px
  border-radius: 0.25rem; // 4px

  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }

  // fullWidth
  width: ${({ $fullWidth }) => ($fullWidth === true ? '100%' : 'auto')};

  // variant
  ${({ $variant }) => {
    switch ($variant) {
      case 'fill':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: ${({ theme }) => theme.primary ?? THEME.primary};
          color: ${({ theme }) => theme.onPrimary ?? THEME.onPrimary};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({ theme }) =>
              theme.primaryHover ?? THEME.primaryHover};
            background-color: ${({ theme }) =>
              theme.primaryHover ?? THEME.primaryHover};
          }
        `;
      case 'line':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: transparent;
          color: ${({ theme }) => theme.primary ?? THEME.primary};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({ theme }) =>
              theme.primaryHover ?? THEME.primaryHover};
            color: ${({ theme }) => theme.primaryHover ?? THEME.primaryHover};
          }
        `;
      case 'text':
      default:
        return css`
          border-color: transparent;
          color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: transparent;
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: transparent;
            color: ${({ theme }) => theme.primary ?? THEME.primary};
            background-color: transparent;
          }
        `;
    }
  }}

  // disabled
  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      ${({ $variant, theme }) =>
        $variant !== 'text' &&
        css`
          border-color: transparent;
          background-color: ${theme.disabled.light ?? THEME.disabled?.light};
        `}
      color: ${({ theme }) =>
        theme.onDisabled.light ?? THEME.onDisabled?.light};
    }

    @media (prefers-color-scheme: dark) {
      ${({ $variant, theme }) =>
        $variant !== 'text' &&
        css`
          border-color: transparent;
          background-color: ${theme.disabled.dark ?? THEME.disabled?.dark};
        `}
      color: ${({ theme }) => theme.onDisabled.dark ?? THEME.onDisabled?.dark};
    }
  }
`;

ButtonRoot.defaultProps = {
  $variant: DEFAULT_PROPS.variant,
  $fullWidth: DEFAULT_PROPS.fullWidth,
  disabled: DEFAULT_PROPS.disabled,
  theme: THEME,
};

const ButtonComponent = ({
  children,
  disabled = DEFAULT_PROPS.disabled,
  fullWidth = DEFAULT_PROPS.fullWidth,
  variant = DEFAULT_PROPS.variant,
  theme = THEME,
  onClick,
}: ButtonProps) => (
  <ButtonRoot
    $variant={variant}
    $fullWidth={fullWidth}
    disabled={disabled}
    theme={theme}
    onClick={onClick}
  >
    {children}
  </ButtonRoot>
);

const Button = Object.assign(ButtonComponent, {
  Root: ButtonRoot,
});

export default Button;
