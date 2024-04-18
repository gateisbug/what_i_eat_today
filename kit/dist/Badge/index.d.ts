import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface BadgeTheme {
    primary?: string;
    onPrimary?: string;
}
interface BadgeRootTransientProps {
    $horizontal?: HorizontalType;
    $show?: boolean;
    $variant?: VariantType;
    $vertical?: VerticalType;
}
interface BadgeProps {
    content?: number | string;
    horizontal?: HorizontalType;
    max?: number;
    show?: boolean;
    theme?: BadgeTheme;
    variant?: VariantType;
    vertical?: VerticalType;
    children?: NodeType;
}
type VariantType = 'standard' | 'dot';
type VerticalType = 'top' | 'bottom';
type HorizontalType = 'right' | 'left';

declare const Badge: (({ show, variant, vertical, horizontal, max, theme, children, content, }: BadgeProps) => react_jsx_runtime.JSX.Element) & {
    Box: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
    }>, never>, never>>;
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
    }>, never>, BadgeRootTransientProps>>;
    hook: (props: BadgeProps) => {
        contents: string | number | null;
    };
};

export { Badge, type BadgeProps };
