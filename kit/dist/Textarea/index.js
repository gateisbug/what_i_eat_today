import{_ as r}from"../tslib.es6-ovUjsM8X.js";import{jsx as e}from"react/jsx-runtime";import o from"styled-components";import{useRef as l,useCallback as i}from"react";import{p as a}from"../utils-CBXdwnnd.js";let d={primary:"var(--primary, #ffb74d)",placeholder:"var(--placeholder, #6B7A90)",border:{light:"var(--border, #0000003A)",dark:"var(--border, #ffffff3a)"},invalid:{light:"var(--invalid, #d32f2f)",dark:"var(--invalid, #f44336)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},t=a("textarea"),n=r=>{let e=l(null),o=i(o=>{let l=e.current;if(r.autoResize&&l){l.style.height="auto";let e=r.maxHeight?Math.min(l.scrollHeight,r.maxHeight):l.scrollHeight;l.style.height=e+"px",void 0===r.maxHeight?l.style.overflowY="hidden":l.style.overflowY=o.target.value.length>0&&l.scrollHeight>r.maxHeight?"auto":"hidden"}r.onChange&&r.onChange(o)},[r.autoResize,r.maxHeight,r.onChange]);return{internalRef:e,resizeInChange:o}},s=o.label.attrs({className:t("box")})`
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
    border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:d.primary}};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border)&&void 0!==e?e:null===(o=d.border)||void 0===o?void 0:o.light}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid)&&void 0!==e?e:null===(o=d.invalid)||void 0===o?void 0:o.light}};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border)&&void 0!==e?e:null===(o=d.border)||void 0===o?void 0:o.dark}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid)&&void 0!==e?e:null===(o=d.invalid)||void 0===o?void 0:o.dark}};
      }
    }
  }
`;s.defaultProps={theme:d};let h=o.textarea.attrs({className:t("root")})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem; // 16px
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: ${({theme:r})=>{var e;return null!==(e=r.placeholder)&&void 0!==e?e:d.placeholder}};
  }
  &:disabled {
    @media (prefers-color-scheme: light) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.light)&&void 0!==e?e:null===(o=d.disabled)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.dark)&&void 0!==e?e:null===(o=d.disabled)||void 0===o?void 0:o.dark}};
    }
  }

  &:focus {
    border: none;
    outline: none;
  }
`;h.defaultProps={rows:1,theme:d};let v=Object.assign(o=>{var{rows:l=1,onChange:i,theme:a,autoResize:d=!0,maxHeight:t}=o,v=r(o,["rows","onChange","theme","autoResize","maxHeight"]);let{internalRef:c,resizeInChange:m}=n({onChange:i,autoResize:d,maxHeight:t});return e(s,{theme:a,children:e(h,Object.assign({rows:l,theme:a,ref:c,onChange:m},v))})},{Box:s,Root:h,hook:n});export{v as Textarea};
