import { ChangeEvent, ReactNode } from 'react';

import { PreferScheme } from '../common';
import { prefix } from '../utils';

export interface RadioTheme {
  primary?: string;
  default?: PreferScheme;
  disabled?: PreferScheme;
}

export const THEME: RadioTheme = {
  primary: 'var(--primary, #ffb74d)',
  default: {
    light: 'var(--default, #00000099)',
    dark: 'var(--default, #ffffffb2)',
  },
  disabled: {
    light: 'var(--disabled, #00000042)',
    dark: 'var(--disabled, #ffffff4c)',
  },
};

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent) => void;
  require?: boolean;
  readOnly?: boolean;
  value?: string | readonly string[] | number;
  theme?: RadioTheme;
  children?: ReactNode;
}

export const px = prefix('radio');
