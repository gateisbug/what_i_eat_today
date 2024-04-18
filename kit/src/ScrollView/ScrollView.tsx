import styled from 'styled-components';

import { px, ScrollviewProps } from './preamble';

export const ScrollviewRoot = styled.div.attrs({
  className: px('root'),
})`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  box-sizing: border-box;
`;

const ScrollviewComponent = ({ children }: ScrollviewProps) => (
  <ScrollviewRoot>{children}</ScrollviewRoot>
);

const Scrollview = Object.assign(ScrollviewComponent, {
  Root: ScrollviewRoot,
});

export default Scrollview;
