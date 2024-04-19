import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { ChangeEvent, ReactNode } from 'react';
import { P as PreferScheme } from '../common.d-CVe5-kNN.js';

interface CheckboxTheme {
    primary?: string;
    default?: PreferScheme;
    disabled?: PreferScheme;
}
interface CheckProps {
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    multiple?: boolean;
    name?: string;
    value?: string | readonly string[] | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    readOnly?: boolean;
    children?: ReactNode;
    theme?: CheckboxTheme;
}

declare const Check: (({ children, theme, ...props }: CheckProps) => react_jsx_runtime.JSX.Element) & {
    Box: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
        ref?: ((instance: HTMLLabelElement | null) => void) | react.RefObject<HTMLLabelElement> | null | undefined;
    }>, never>, never>>;
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
        ref?: ((instance: HTMLInputElement | null) => void) | react.RefObject<HTMLInputElement> | null | undefined;
    }>, never>, never>>;
    Mark: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
};

export { Check, type CheckProps };
