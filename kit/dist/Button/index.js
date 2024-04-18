import{jsx as r}from"react/jsx-runtime";import o,{css as e}from"styled-components";import{p as a}from"../utils-CBXdwnnd.js";let l={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)",primaryHover:"var(--primary-hover, #b28035)",disabled:{light:"var(--disabled, #0000001E)",dark:"var(--disabled, #FFFFFF1E)"},onDisabled:{light:"var(--on-disabled, #00000042)",dark:"var(--on-disabled, #FFFFFF4C)"}},i=a("button"),d="fill",n=!1,t=!1,s=o.button.attrs({className:i("root")})`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 0.0625rem solid transparent; // 1px
  padding: 0.5rem 1rem; // 8px 16px
  border-radius: 0.25rem; // 4px

  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }

  // fullWidth
  width: ${({$fullWidth:r})=>!0===r?"100%":"auto"};

  // variant
  ${({$variant:r})=>{switch(r){case"fill":return e`
          border-color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:l.primary}};
          background-color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:l.primary}};
          color: ${({theme:r})=>{var o;return null!==(o=r.onPrimary)&&void 0!==o?o:l.onPrimary}};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>{var o;return null!==(o=r.primaryHover)&&void 0!==o?o:l.primaryHover}};
            background-color: ${({theme:r})=>{var o;return null!==(o=r.primaryHover)&&void 0!==o?o:l.primaryHover}};
          }
        `;case"line":return e`
          border-color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:l.primary}};
          background-color: transparent;
          color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:l.primary}};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>{var o;return null!==(o=r.primaryHover)&&void 0!==o?o:l.primaryHover}};
            color: ${({theme:r})=>{var o;return null!==(o=r.primaryHover)&&void 0!==o?o:l.primaryHover}};
          }
        `;default:return e`
          border-color: transparent;
          color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:l.primary}};
          background-color: transparent;
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: transparent;
            color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:l.primary}};
            background-color: transparent;
          }
        `}}}

  // disabled
  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      ${({$variant:r,theme:o})=>{var a,i;return"text"!==r&&e`
          border-color: transparent;
          background-color: ${null!==(a=o.disabled.light)&&void 0!==a?a:null===(i=l.disabled)||void 0===i?void 0:i.light};
        `}}
      color: ${({theme:r})=>{var o,e;return null!==(o=r.onDisabled.light)&&void 0!==o?o:null===(e=l.onDisabled)||void 0===e?void 0:e.light}};
    }

    @media (prefers-color-scheme: dark) {
      ${({$variant:r,theme:o})=>{var a,i;return"text"!==r&&e`
          border-color: transparent;
          background-color: ${null!==(a=o.disabled.dark)&&void 0!==a?a:null===(i=l.disabled)||void 0===i?void 0:i.dark};
        `}}
      color: ${({theme:r})=>{var o,e;return null!==(o=r.onDisabled.dark)&&void 0!==o?o:null===(e=l.onDisabled)||void 0===e?void 0:e.dark}};
    }
  }
`;s.defaultProps={$variant:d,$fullWidth:n,disabled:t,theme:l};let u=Object.assign(({children:o,disabled:e=t,fullWidth:a=n,variant:i=d,theme:u=l,onClick:c})=>r(s,{$variant:i,$fullWidth:a,disabled:e,theme:u,onClick:c,children:o}),{Root:s});export{u as Button};
