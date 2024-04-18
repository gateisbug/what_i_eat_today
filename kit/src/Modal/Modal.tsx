import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { ModalProps, px, THEME, useModal, useScrollBlock } from './preamble';

export const ModalBackdrop = styled.div.attrs({
  className: px('Backdrop'),
})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backdrop ?? THEME.backdrop};
  z-index: 1000;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;
ModalBackdrop.defaultProps = {
  theme: THEME,
};

export const ModalRoot = styled.div.attrs({
  className: px('Root'),
})`
  width: 100%;
  background-color: ${({ theme }) => theme.surface ?? THEME.surface};
  border-radius: 0.5rem; // 8px
  box-shadow: 0 0.25rem 1rem 0 ${({ theme }) => theme.shadow ?? THEME.shadow}; // 0 4px 16px 0
  overflow-y: auto;
`;
ModalRoot.defaultProps = {
  theme: THEME,
};

const ModalComponent = ({ open, onClickAway, children, theme }: ModalProps) => {
  const { backdropRef, onClickAway: _onClickAway } = useModal({
    open,
    onClickAway,
  });

  return open
    ? createPortal(
        <ModalBackdrop ref={backdropRef} onClick={_onClickAway} theme={theme}>
          <ModalRoot theme={theme}>{children}</ModalRoot>
        </ModalBackdrop>,
        document.body,
      )
    : null;
};

const Modal = Object.assign(ModalComponent, {
  Backdrop: ModalBackdrop,
  Root: ModalRoot,
  hook: useModal,
  scrollBlock: useScrollBlock,
});

export default Modal;
