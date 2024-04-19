import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { ChangeEvent } from 'react';
import { P as PreferScheme } from '../common.d-CVe5-kNN.js';

interface TextareaTheme {
    primary?: string;
    border?: PreferScheme;
    invalid?: PreferScheme;
    placeholder?: string;
    disabled?: PreferScheme;
}
interface TextareaProps {
    autoFocus?: boolean;
    autoResize?: boolean;
    defaultValue?: string | number | readonly string[];
    disabled?: boolean;
    maxHeight?: number;
    onChange?: (e: ChangeEvent) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    value?: string | number | readonly string[];
    rows?: number;
    theme?: TextareaTheme;
}

declare const Textarea: (({ rows, onChange, theme, autoResize, maxHeight, ...props }: TextareaProps) => react_jsx_runtime.JSX.Element) & {
    Box: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
        ref?: ((instance: HTMLLabelElement | null) => void) | react.RefObject<HTMLLabelElement> | null | undefined;
    }>, never>, never>>;
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
        ref?: ((instance: HTMLTextAreaElement | null) => void) | react.RefObject<HTMLTextAreaElement> | null | undefined;
    }>, never>, never>>;
    hook: (props: TextareaProps) => {
        internalRef: react.RefObject<HTMLTextAreaElement>;
        resizeInChange: (e: react.ChangeEvent<HTMLTextAreaElement>) => void;
    };
};

export { Textarea, type TextareaProps };
