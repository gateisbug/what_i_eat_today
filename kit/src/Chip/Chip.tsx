import styled, { css } from 'styled-components';

import {
  px,
  THEME,
  ChipRootTransientProps,
  DEFAULT_PROPS,
  ChipProps,
} from './preamble';

export const ChipRoot = styled.span.attrs({
  className: px('root'),
})<ChipRootTransientProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  width: fit-content;
  border: 0.0625rem solid transparent; // 1px
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 0.5rem 1rem; // 8px 16px
  border-radius: 3rem; // 48px

  ${({ $variant }) => {
    switch ($variant) {
      case 'fill':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: ${({ theme }) => theme.primary ?? THEME.primary};
          color: ${({ theme }) => theme.onPrimary ?? THEME.onPrimary};
        `;
      case 'line':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: transparent;
          color: ${({ theme }) => theme.primary ?? THEME.primary};
        `;
      case 'text':
      default:
        return css`
          color: ${({ theme }) => theme.primary ?? THEME.primary};
          border-color: transparent;
          background-color: transparent;
        `;
    }
  }}
`;
ChipRoot.defaultProps = {
  $variant: DEFAULT_PROPS.variant,
  theme: THEME,
};

const ChipComponent = ({
  variant = DEFAULT_PROPS.variant,
  children,
  theme,
}: ChipProps) => (
  <ChipRoot $variant={variant} theme={theme}>
    {children}
  </ChipRoot>
);

const Chip = Object.assign(ChipComponent, {
  Root: ChipRoot,
});

export default Chip;
