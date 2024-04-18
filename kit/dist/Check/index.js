import{_ as e}from"../tslib.es6-ovUjsM8X.js";import{jsxs as r,jsx as l}from"react/jsx-runtime";import a from"styled-components";import{p as i}from"../utils-CBXdwnnd.js";let t={primary:"var(--primary, #ffb74d)",default:{light:"var(--default, #00000099)",dark:"var(--default, #FFFFFFB2)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},d=i("check"),o=a.label.attrs({className:d("box")})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem; // 4px
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`,c=a.input.attrs({className:d("root")})`
  display: none;
`;c.defaultProps={type:"checkbox"};let s=a.div.attrs({className:d("mark")})`
  display: inline-block;
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
  user-select: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({theme:e})=>{var r;return null!==(r=e.primary)&&void 0!==r?r:t.primary}};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>{var r,l;return null!==(r=e.default.light)&&void 0!==r?r:null===(l=t.default)||void 0===l?void 0:l.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>{var r,l;return null!==(r=e.default.dark)&&void 0!==r?r:null===(l=t.default)||void 0===l?void 0:l.dark}};
    }
  }
  input:disabled + & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>{var r,l;return null!==(r=e.disabled.light)&&void 0!==r?r:null===(l=t.disabled)||void 0===l?void 0:l.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>{var r,l;return null!==(r=e.disabled.dark)&&void 0!==r?r:null===(l=t.disabled)||void 0===l?void 0:l.dark}};
    }
  }

  input:not(:checked) + & path {
    d: path(
      'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    );
  }
  input:checked + & path {
    d: path(
      'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    );
  }
  input[multiple]:checked + & path {
    d: path(
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z'
    );
  }
`;s.defaultProps={theme:t};let n=Object.assign(a=>{var{children:i,theme:t}=a;return r(o,{children:[l(c,Object.assign({type:"checkbox"},e(a,["children","theme"]))),l(s,{theme:t,children:l("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:l("path",{fill:"currentColor"})})}),i]})},{Box:o,Root:c,Mark:s});export{n as Check};
