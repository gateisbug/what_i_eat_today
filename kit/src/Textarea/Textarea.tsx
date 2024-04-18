import styled from 'styled-components';

import {
  TextareaProps,
  px,
  THEME,
  DEFAULT_PROPS,
  useTextarea,
} from './preamble';

export const TextareaBox = styled.label.attrs({
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
      border-color: ${({ theme }) => theme.border ?? THEME.border?.light};
      &:has(:invalid) {
        border-color: ${({ theme }) => theme.invalid ?? THEME.invalid?.light};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({ theme }) => theme.border ?? THEME.border?.dark};
      &:has(:invalid) {
        border-color: ${({ theme }) => theme.invalid ?? THEME.invalid?.dark};
      }
    }
  }
`;
TextareaBox.defaultProps = {
  theme: THEME,
};

export const TextareaRoot = styled.textarea.attrs({
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
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder ?? THEME.placeholder};
  }
  &:disabled {
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.disabled.light ?? THEME.disabled?.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.disabled.dark ?? THEME.disabled?.dark};
    }
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

TextareaRoot.defaultProps = {
  rows: DEFAULT_PROPS.rows,
  theme: THEME,
};

const TextareaComponent = ({
  rows = DEFAULT_PROPS.rows,
  onChange,
  theme,
  autoResize = DEFAULT_PROPS.autoResize,
  maxHeight,
  ...props
}: TextareaProps) => {
  const { internalRef, resizeInChange } = useTextarea({
    onChange,
    autoResize,
    maxHeight,
  });

  return (
    <TextareaBox theme={theme}>
      <TextareaRoot
        rows={rows}
        theme={theme}
        ref={internalRef}
        onChange={resizeInChange}
        {...props}
      />
    </TextareaBox>
  );
};

const Textarea = Object.assign(TextareaComponent, {
  Box: TextareaBox,
  Root: TextareaRoot,
  hook: useTextarea,
});

export default Textarea;
