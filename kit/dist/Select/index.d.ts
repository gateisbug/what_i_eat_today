import * as react from 'react';
import { ReactNode } from 'react';
import { P as PreferScheme } from '../common.d-CVe5-kNN.js';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface SelectTheme {
    placeholder?: string;
    surface?: PreferScheme;
    border?: PreferScheme;
}
interface SelectBoxTransientProps {
    $open?: boolean;
    $top?: string;
}
interface SelectProps {
    items?: SelectItemType[];
    multiple?: boolean;
    top?: string;
    placeholder?: string;
    theme?: SelectTheme;
    onChange?: (value: string) => void;
    defaultValue?: string;
    children?: ReactNode;
}
type SelectItemType = {
    label?: ReactNode;
    value: string | number | boolean | null;
};

declare const Select: (({ items, multiple, placeholder, theme, top, children, onChange, defaultValue, }: SelectProps) => react_jsx_runtime.JSX.Element) & {
    Form: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
    Field: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
    Placeholder: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
    }>, never>, never>>;
    Box: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
        ref?: ((instance: HTMLUListElement | null) => void) | react.RefObject<HTMLUListElement> | null | undefined;
    }>, never>, SelectBoxTransientProps>>;
    Item: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
        ref?: ((instance: HTMLLIElement | null) => void) | react.RefObject<HTMLLIElement> | null | undefined;
    }>, never>, never>>;
    clickAway: (setOpen: react.Dispatch<react.SetStateAction<boolean>>, forwardRef?: react.ForwardedRef<HTMLDivElement> | undefined) => react.RefObject<HTMLDivElement>;
    hook: (props: SelectProps) => {
        formRef: react.RefObject<HTMLDivElement>;
        open: boolean;
        inputValue: string;
        onClickItem: (item: SelectItemType) => void;
        onFieldClick: () => void;
    };
};

export { Select, type SelectProps };
