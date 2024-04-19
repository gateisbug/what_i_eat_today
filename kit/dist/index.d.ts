import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { MouseEvent as MouseEvent$1, ReactNode, ChangeEvent } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

// noinspection JSDeprecatedSymbols

type NodeType = string | JSX.Element | JSX.Element[] | null;

type PreferScheme = {
  light?: string;
  dark?: string;
};

interface BadgeTheme {
    primary?: string;
    onPrimary?: string;
}
interface BadgeRootTransientProps {
    $horizontal?: HorizontalType;
    $show?: boolean;
    $variant?: VariantType$2;
    $vertical?: VerticalType;
}
interface BadgeProps {
    content?: number | string;
    horizontal?: HorizontalType;
    max?: number;
    show?: boolean;
    theme?: BadgeTheme;
    variant?: VariantType$2;
    vertical?: VerticalType;
    children?: NodeType;
}
type VariantType$2 = 'standard' | 'dot';
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

interface ButtonTheme {
    primary?: string;
    onPrimary?: string;
    primaryHover?: string;
    disabled?: PreferScheme;
    onDisabled?: PreferScheme;
}
interface ButtonRootTransientProps {
    $fullWidth?: boolean;
    $variant?: VariantType$1;
}
interface ButtonProps {
    fullWidth?: boolean;
    theme?: ButtonTheme;
    variant?: VariantType$1;
    disabled?: boolean;
    onClick?: ((event: MouseEvent$1) => void) | undefined;
    children?: ReactNode;
}
type VariantType$1 = 'fill' | 'line' | 'text';

declare const Button: (({ children, disabled, fullWidth, variant, theme, onClick, }: ButtonProps) => react_jsx_runtime.JSX.Element) & {
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
    }>, never>, ButtonRootTransientProps>>;
};

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

interface ModalTheme {
    surface?: string;
    backdrop?: string;
    shadow?: string;
}
interface ModalProps {
    open: boolean;
    onClickAway?: () => void;
    theme?: ModalTheme;
    children?: ReactNode;
}

declare const Modal: (({ open, onClickAway, children, theme }: ModalProps) => react.ReactPortal | null) & {
    Backdrop: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
    hook: (props: ModalProps) => {
        backdropRef: react.RefObject<HTMLDivElement>;
        onClickAway: (e: react.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    };
    scrollBlock: (trigger: boolean, style?: string | undefined) => void;
};

interface ProgressTheme {
    primary?: string;
}
interface CircularProgressProps {
    width?: number | string;
    height?: number | string;
    theme?: ProgressTheme;
}
interface CircularProgressBlockTransientProps {
    $width?: number | string;
    $height?: number | string;
}

declare const CircularProgress: (({ width, height, theme, }: CircularProgressProps) => react_jsx_runtime.JSX.Element) & {
    Box: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
    Block: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, CircularProgressBlockTransientProps>>;
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.SVGProps<SVGSVGElement>, Omit<react.SVGProps<SVGSVGElement>, "ref"> & {
        ref?: ((instance: SVGSVGElement | null) => void) | react.RefObject<SVGSVGElement> | null | undefined;
    }>, never>, never>>;
    Circle: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.SVGProps<SVGCircleElement>, Omit<react.SVGProps<SVGCircleElement>, "ref"> & {
        ref?: ((instance: SVGCircleElement | null) => void) | react.RefObject<SVGCircleElement> | null | undefined;
    }>, never>, never>>;
};

interface RadioTheme {
    primary?: string;
    default?: PreferScheme;
    disabled?: PreferScheme;
}
interface RadioProps {
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

declare const Radio: (({ children, theme, ...props }: RadioProps) => react_jsx_runtime.JSX.Element) & {
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

interface ScrollviewProps {
    children?: NodeType;
}

declare const Scrollview: (({ children }: ScrollviewProps) => react_jsx_runtime.JSX.Element) & {
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
};

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

type SkeletonVarientType = 'text' | 'circle' | 'paragraph';
interface SkeletonTheme {
    surface?: PreferScheme;
}
interface SkeletonRootTransientProps {
    $varient?: SkeletonVarientType;
}
interface SkeletonProps {
    varient?: SkeletonVarientType;
    theme?: SkeletonTheme;
}

declare const Skeleton: (({ varient, theme }: SkeletonProps) => react_jsx_runtime.JSX.Element) & {
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
    }>, never>, SkeletonRootTransientProps>>;
};

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

export { Badge, type BadgeProps, Button, type ButtonProps, Check, type CheckProps, Chip, type ChipProps, CircularProgress, type CircularProgressProps, Input, type InputProps, Modal, type ModalProps, Radio, type RadioProps, Scrollview as ScrollView, type ScrollviewProps, Select, type SelectProps, Skeleton, type SkeletonProps, Textarea, type TextareaProps };
