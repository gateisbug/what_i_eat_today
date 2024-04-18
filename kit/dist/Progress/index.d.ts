import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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

export { CircularProgress, type CircularProgressProps };
