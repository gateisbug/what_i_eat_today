import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { MouseEvent, ReactNode } from 'react';
import { P as PreferScheme } from '../common.d-Bt3q9sPo.js';

interface ButtonTheme {
    primary?: string;
    onPrimary?: string;
    primaryHover?: string;
    disabled?: PreferScheme;
    onDisabled?: PreferScheme;
}
interface ButtonRootTransientProps {
    $fullWidth?: boolean;
    $variant?: VariantType;
}
interface ButtonProps {
    fullWidth?: boolean;
    theme?: ButtonTheme;
    variant?: VariantType;
    disabled?: boolean;
    onClick?: ((event: MouseEvent) => void) | undefined;
    children?: ReactNode;
}
type VariantType = 'fill' | 'line' | 'text';

declare const Button: (({ children, disabled, fullWidth, variant, theme, onClick, }: ButtonProps) => react_jsx_runtime.JSX.Element) & {
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
    }>, never>, ButtonRootTransientProps>>;
};

export { Button, type ButtonProps };
