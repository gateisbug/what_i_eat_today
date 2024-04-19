import{jsx as e}from"react/jsx-runtime";import r,{css as o}from"styled-components";import{p as t}from"../utils-CBXdwnnd.js";let i={surface:{light:"var(--surface, rgba(0, 0, 0, 0.11))",dark:"var(--surface, rgba(255, 255, 255, 0.13))"}},a=t("skeleton"),s=r.span.attrs({className:a("root")})`
  display: block;
  min-width: 1rem; // 16px
  min-height: 1rem; // 16px
  animation: animation-skeleton 2s ease-in-out 0.5s infinite;

  ${({$varient:e})=>{switch(e){case"text":return o`
          border-radius: 0.25rem; // 4px
          transform-origin: 0 55%;
          transform: scale(1, 0.6);
        `;case"circle":return o`
          border-radius: 50%;
        `;default:return o`
          border-radius: 0.25rem; // 4px
        `}}}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:e})=>{var r,o,t;return null!==(o=null===(r=e.surface)||void 0===r?void 0:r.light)&&void 0!==o?o:null===(t=i.surface)||void 0===t?void 0:t.light}};
    }

    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:e})=>{var r,o,t;return null!==(o=null===(r=e.surface)||void 0===r?void 0:r.dark)&&void 0!==o?o:null===(t=i.surface)||void 0===t?void 0:t.dark}};
    }
  }

  &:empty::before {
    display: inline-block;
    content: ' ';
    min-height: 1rem; // 16px
  }

  @keyframes animation-skeleton {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;s.defaultProps={theme:i};let n=Object.assign(({varient:r,theme:o})=>e(s,{$varient:r,theme:o}),{Root:s});export{n as Skeleton};
