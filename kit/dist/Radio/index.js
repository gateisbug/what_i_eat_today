import{_ as e}from"../tslib.es6-ovUjsM8X.js";import{jsxs as r,jsx as i}from"react/jsx-runtime";import l from"styled-components";import{p as a}from"../utils-CBXdwnnd.js";let t={primary:"var(--primary, #ffb74d)",default:{light:"var(--default, #00000099)",dark:"var(--default, #ffffffb2)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #ffffff4c)"}},o=a("radio"),s=l.label.attrs({className:o("box")})`
  display: inline-flex;
  flex-flow: row nowrap;
  gap: 0.25rem;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`,d=l.input.attrs({className:o("root")})`
  display: none;
`;d.defaultProps={type:"radio"};let n=l.div.attrs({className:o("mark")})`
  position: relative;
  display: inline-flex;
  user-select: none;
  width: 1.5rem;
  height: 1.5rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({theme:e})=>{var r;return null!==(r=e.primary)&&void 0!==r?r:t.primary}};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>{var r,i;return null!==(r=e.default)&&void 0!==r?r:null===(i=t.default)||void 0===i?void 0:i.light}};
      input:disabled + & {
        color: ${({theme:e})=>{var r,i;return null!==(r=e.disabled)&&void 0!==r?r:null===(i=t.disabled)||void 0===i?void 0:i.light}};
      }
    }
    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>{var r,i;return null!==(r=e.default)&&void 0!==r?r:null===(i=t.default)||void 0===i?void 0:i.dark}};
      input:disabled + & {
        color: ${({theme:e})=>{var r,i;return null!==(r=e.disabled)&&void 0!==r?r:null===(i=t.disabled)||void 0===i?void 0:i.dark}};
      }
    }
  }

  & > svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
  }
  & > svg:first-of-type {
    transform: scale(1);
  }
  & > svg:last-of-type {
    transform: scale(0);
    position: absolute;
    left: 0;
    transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
  }
  input:not(:disabled):checked + & > svg:last-of-type {
    transform: scale(1);
  }
`;n.defaultProps={theme:t};let f=Object.assign(l=>{var{children:a,theme:t}=l;return r(s,{children:[i(d,Object.assign({type:"radio"},e(l,["children","theme"]))),r(n,{theme:t,children:[i("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",fill:"currentColor"})}),i("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:i("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",fill:"currentColor"})})]}),a]})},{Box:s,Root:d,Mark:n});export{f as Radio};
