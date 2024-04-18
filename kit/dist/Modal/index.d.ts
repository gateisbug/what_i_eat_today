import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { ReactNode } from 'react';

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

export { Modal, type ModalProps };
