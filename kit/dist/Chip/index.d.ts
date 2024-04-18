import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { N as NodeType } from '../common.d-Bt3q9sPo.js';

interface ChipTheme {
    primary?: string;
    onPrimary?: string;
}
interface ChipRootTransientProps {
    $variant?: VariantType;
}
interface ChipProps {
    variant?: VariantType;
    theme?: ChipTheme;
    children?: NodeType;
}
type VariantType = 'fill' | 'line' | 'text';

declare const Chip: (({ variant, children, theme, }: ChipProps) => react_jsx_runtime.JSX.Element) & {
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
    }>, never>, ChipRootTransientProps>>;
};

export { Chip, type ChipProps };
