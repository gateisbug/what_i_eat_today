import { useCallback, useEffect, useRef } from 'react';
import type { ReactNode, MouseEvent } from 'react';

import { prefix } from '../utils';

export interface ModalTheme {
  surface?: string;
  backdrop?: string;
  shadow?: string;
}

export const THEME: ModalTheme = {
  backdrop: 'var(--backdrop, #0000007F)',
  surface: 'var(--surface, #fff)',
  shadow: 'var(--shadow, #00000099)',
};

export interface ModalProps {
  open: boolean;
  onClickAway?: () => void;
  theme?: ModalTheme;
  children?: ReactNode;
}

export const px = prefix('Modal');

export const useScrollBlock = (trigger: boolean, style?: string) => {
  useEffect(() => {
    const body = document.body;
    const index = body.getAttribute('data-index') ?? '0';

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (trigger) {
      if (Number(index) === 0) {
        body.setAttribute(
          'style',
          style ?? `overflow: hidden; padding-right: ${scrollbarWidth}px`,
        );
        body.setAttribute('data-index', '1');
      } else {
        body.setAttribute('data-index', (Number(index) + 1).toString());
      }
    } else {
      if (Number(index) <= 1) {
        body.removeAttribute('style');
        body.removeAttribute('data-index');
      } else {
        body.setAttribute('data-index', (Number(index) - 1).toString());
      }
    }
  }, [trigger, style]);
};

export const useModal = (props: ModalProps) => {
  const { open, onClickAway } = props;
  useScrollBlock(open);

  const backdropRef = useRef<HTMLDivElement>(null);

  const _onClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === backdropRef.current) {
        onClickAway && onClickAway();
      }
    },
    [onClickAway],
  );

  return {
    backdropRef,
    onClickAway: _onClickAway,
  };
};
