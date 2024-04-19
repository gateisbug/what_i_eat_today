import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { ChangeEvent } from 'react';
import { P as PreferScheme } from '../common.d-CVe5-kNN.js';

interface InputTheme {
    primary?: string;
    border?: PreferScheme;
    invalid?: PreferScheme;
    placeholder?: string;
    disabled?: PreferScheme;
}
interface InputProps {
    type?: InputTypes;
    autoFocus?: boolean;
    defaultValue?: string | number | readonly string[];
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    value?: string | number | readonly string[];
    theme?: InputTheme;
}
type InputTypes = 'text' | 'password' | 'url' | 'email' | 'date' | 'number';

declare const Input: (({ type, theme, ...others }: InputProps) => react_jsx_runtime.JSX.Element) & {
    Box: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
        ref?: ((instance: HTMLLabelElement | null) => void) | react.RefObject<HTMLLabelElement> | null | undefined;
    }>, never>, never>>;
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
        ref?: ((instance: HTMLInputElement | null) => void) | react.RefObject<HTMLInputElement> | null | undefined;
    }>, never>, never>>;
};

export { Input, type InputProps };
