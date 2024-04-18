import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';

interface ScrollviewProps {
    children?: NodeType;
}

declare const Scrollview: (({ children }: ScrollviewProps) => react_jsx_runtime.JSX.Element) & {
    Root: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
    }>, never>, never>>;
};

export { Scrollview as ScrollView, type ScrollviewProps };
