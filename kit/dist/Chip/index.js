import{jsx as r}from"react/jsx-runtime";import o,{css as e}from"styled-components";import{p as a}from"../utils-CBXdwnnd.js";let i={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)"},n=a("chip"),t="fill",l=o.span.attrs({className:n("root")})`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  width: fit-content;
  border: 0.0625rem solid transparent; // 1px
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 0.5rem 1rem; // 8px 16px
  border-radius: 3rem; // 48px

  ${({$variant:r})=>{switch(r){case"fill":return e`
          border-color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:i.primary}};
          background-color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:i.primary}};
          color: ${({theme:r})=>{var o;return null!==(o=r.onPrimary)&&void 0!==o?o:i.onPrimary}};
        `;case"line":return e`
          border-color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:i.primary}};
          background-color: transparent;
          color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:i.primary}};
        `;default:return e`
          color: ${({theme:r})=>{var o;return null!==(o=r.primary)&&void 0!==o?o:i.primary}};
          border-color: transparent;
          background-color: transparent;
        `}}}
`;l.defaultProps={$variant:t,theme:i};let c=Object.assign(({variant:o=t,children:e,theme:a})=>r(l,{$variant:o,theme:a,children:e}),{Root:l});export{c as Chip};
