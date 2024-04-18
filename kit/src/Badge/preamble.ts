import { NodeType } from '../common';
import { prefix } from '../utils';

export interface BadgeTheme {
  primary?: string;
  onPrimary?: string;
}

export const THEME: BadgeTheme = {
  primary: 'var(--primary, #ffb74d)',
  onPrimary: 'var(--on-primary, #1c2025)',
};

export interface BadgeRootTransientProps {
  $horizontal?: HorizontalType;
  $show?: boolean;
  $variant?: VariantType;
  $vertical?: VerticalType;
}

export interface BadgeProps {
  content?: number | string;
  horizontal?: HorizontalType;
  max?: number;
  show?: boolean;
  theme?: BadgeTheme;
  variant?: VariantType;
  vertical?: VerticalType;
  children?: NodeType;
}

export type VariantType = 'standard' | 'dot';
export type VerticalType = 'top' | 'bottom';
export type HorizontalType = 'right' | 'left';

export const px = prefix('badge');

export const DEFAULT_PROPS = {
  show: true,
  variant: 'standard' as VariantType,
  vertical: 'top' as VerticalType,
  horizontal: 'right' as HorizontalType,
  max: 99,
};

export const useBadge = (props: BadgeProps) => {
  const contents =
    props.variant === 'standard'
      ? typeof props.content === 'number' && props.content > props.max!
        ? `${props.max}+`
        : props.content ?? ''
      : null;

  return { contents };
};
