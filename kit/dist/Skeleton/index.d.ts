import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';

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

export { Skeleton, type SkeletonProps };
