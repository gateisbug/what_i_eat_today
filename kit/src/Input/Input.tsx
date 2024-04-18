import styled from 'styled-components';

import { THEME, px, InputProps, DEFAULT_PROPS } from './preamble';

export const InputBox = styled.label.attrs({
  className: px('box'),
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem; // 8px
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent; // 1px
  border-radius: 0.25rem; // 4px
  padding: 0.75rem 1rem; // 12px 16px

  &:has(:focus) {
    border-color: ${({ theme }) => theme.primary ?? THEME.primary};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({ theme }) => theme.border.light ?? THEME.border?.light};
      &:has(:invalid) {
        border-color: ${({ theme }) =>
          theme.invalid.light ?? THEME.invalid?.light};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({ theme }) => theme.border.dark ?? THEME.invalid?.dark};
      &:has(:invalid) {
        border-color: ${({ theme }) =>
          theme.invalid.dark ?? THEME.invalid?.dark};
      }
    }
  }
`;
InputBox.defaultProps = {
  theme: THEME,
};

export const InputRoot = styled.input.attrs({
  className: px('root'),
})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem; // 16px
  width: 100%;
  border: none;
  padding: 0;

  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.disabled.light ?? THEME.disabled?.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.disabled.dark ?? THEME.disabled?.dark};
    }
  }
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-clear-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
InputRoot.defaultProps = {
  type: DEFAULT_PROPS.type,
  theme: THEME,
};

const InputComponent = ({ type = 'text', theme, ...others }: InputProps) => (
  <InputBox theme={theme}>
    <InputRoot type={type} theme={theme} {...others} />
  </InputBox>
);

const Input = Object.assign(InputComponent, {
  Box: InputBox,
  Root: InputRoot,
});

export default Input;
