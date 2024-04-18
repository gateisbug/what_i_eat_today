import{_ as r}from"../tslib.es6-ovUjsM8X.js";import{jsx as e}from"react/jsx-runtime";import o from"styled-components";import{p as i}from"../utils-CBXdwnnd.js";let l={primary:"var(--primary, #ffb74d)",border:{light:"var(--border, #0000003A)",dark:"var(--border, #ffffff3a)"},invalid:{light:"var(--invalid, #d32f2f)",dark:"var(--invalid, #f44336)"},placeholder:"var(--placeholder, #6B7A90)",disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},a=i("input"),d=o.label.attrs({className:a("box")})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem; // 8px
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent; // 1px
  border-radius: 0.25rem; // 4px
  padding: 0.75rem 1rem; // 12px 16px

  &:has(:focus) {
    border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:l.primary}};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.light)&&void 0!==e?e:null===(o=l.border)||void 0===o?void 0:o.light}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid.light)&&void 0!==e?e:null===(o=l.invalid)||void 0===o?void 0:o.light}};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.dark)&&void 0!==e?e:null===(o=l.invalid)||void 0===o?void 0:o.dark}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid.dark)&&void 0!==e?e:null===(o=l.invalid)||void 0===o?void 0:o.dark}};
      }
    }
  }
`;d.defaultProps={theme:l};let t=o.input.attrs({className:a("root")})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem; // 16px
  width: 100%;
  border: none;
  padding: 0;

  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.light)&&void 0!==e?e:null===(o=l.disabled)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.dark)&&void 0!==e?e:null===(o=l.disabled)||void 0===o?void 0:o.dark}};
    }
  }
  &::placeholder {
    color: ${({theme:r})=>r.placeholder};
  }

  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-clear-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;t.defaultProps={type:"text",theme:l};let n=Object.assign(o=>{var{type:i="text",theme:l}=o;return e(d,{theme:l,children:e(t,Object.assign({type:i,theme:l},r(o,["type","theme"])))})},{Box:d,Root:t});export{n as Input};
