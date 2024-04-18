import{jsxs as r,jsx as e}from"react/jsx-runtime";import o,{css as a}from"styled-components";import{createPortal as l}from"react-dom";import{useEffect as i,useRef as t,useCallback as n,useImperativeHandle as d,useState as s}from"react";function c(r){return e=>`kit-${r}-${e}`}let u={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)"},v=c("badge"),p=!0,m="standard",b="top",h="right",f=99,g=r=>{var e;return{contents:"standard"===r.variant?"number"==typeof r.content&&r.content>r.max?`${r.max}+`:null!==(e=r.content)&&void 0!==e?e:"":null}},y=o.span.attrs({className:v("box")})`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`,k=o.span.attrs({className:v("root")})`
  position: absolute;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  font-weight: 500;

  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:u.primary}};
  color: ${({theme:r})=>{var e;return null!==(e=r.onPrimary)&&void 0!==e?e:u.onPrimary}};

  // show
  display: ${({$show:r})=>r?"flex":"none"};

  // variant
  ${r=>"standard"===r.$variant?a`
        font-size: 0.75rem; // 12px
        padding: 0.25rem 0.5rem; // 4px 8px
        border-radius: 0.75rem; // 12px
      `:a`
        width: 0.5rem; // 8px
        height: 0.5rem; // 8px
        border-radius: 0.25rem; // 4px
      `}

  // vertical | horizontal
  transform: ${({$vertical:r,$horizontal:e})=>"top"===r?"right"===e?"translate(50%, -50%)":"translate(-50%, -50%)":"right"===e?"translate(50%, 50%)":"translate(-50%, 50%)"};
  top: ${({$vertical:r})=>"top"===r?"0":"auto"};
  bottom: ${({$vertical:r})=>"bottom"===r?"0":"auto"};
  right: ${({$horizontal:r})=>"right"===r?"0":"auto"};
  left: ${({$horizontal:r})=>"left"===r?"0":"auto"};
`;k.defaultProps={$show:p,$variant:m,$vertical:b,$horizontal:h,theme:u};let x=Object.assign(({show:o=p,variant:a=m,vertical:l=b,horizontal:i=h,max:t=f,theme:n=u,children:d,content:s})=>{let{contents:c}=g({variant:a,content:s,max:t});return r(y,{children:[d,e(k,{$variant:a,$show:o,$vertical:l,$horizontal:i,theme:n,children:c})]})},{Box:y,Root:k,hook:g}),$={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)",primaryHover:"var(--primary-hover, #b28035)",disabled:{light:"var(--disabled, #0000001E)",dark:"var(--disabled, #FFFFFF1E)"},onDisabled:{light:"var(--on-disabled, #00000042)",dark:"var(--on-disabled, #FFFFFF4C)"}},w=c("button"),F="fill",z=!1,C=!1,P=o.button.attrs({className:w("root")})`
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
  ${({$variant:r})=>{switch(r){case"fill":return a`
          border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:$.primary}};
          background-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:$.primary}};
          color: ${({theme:r})=>{var e;return null!==(e=r.onPrimary)&&void 0!==e?e:$.onPrimary}};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>{var e;return null!==(e=r.primaryHover)&&void 0!==e?e:$.primaryHover}};
            background-color: ${({theme:r})=>{var e;return null!==(e=r.primaryHover)&&void 0!==e?e:$.primaryHover}};
          }
        `;case"line":return a`
          border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:$.primary}};
          background-color: transparent;
          color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:$.primary}};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>{var e;return null!==(e=r.primaryHover)&&void 0!==e?e:$.primaryHover}};
            color: ${({theme:r})=>{var e;return null!==(e=r.primaryHover)&&void 0!==e?e:$.primaryHover}};
          }
        `;default:return a`
          border-color: transparent;
          color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:$.primary}};
          background-color: transparent;
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: transparent;
            color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:$.primary}};
            background-color: transparent;
          }
        `}}}

  // disabled
  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      ${({$variant:r,theme:e})=>{var o,l;return"text"!==r&&a`
          border-color: transparent;
          background-color: ${null!==(o=e.disabled.light)&&void 0!==o?o:null===(l=$.disabled)||void 0===l?void 0:l.light};
        `}}
      color: ${({theme:r})=>{var e,o;return null!==(e=r.onDisabled.light)&&void 0!==e?e:null===(o=$.onDisabled)||void 0===o?void 0:o.light}};
    }

    @media (prefers-color-scheme: dark) {
      ${({$variant:r,theme:e})=>{var o,l;return"text"!==r&&a`
          border-color: transparent;
          background-color: ${null!==(o=e.disabled.dark)&&void 0!==o?o:null===(l=$.disabled)||void 0===l?void 0:l.dark};
        `}}
      color: ${({theme:r})=>{var e,o;return null!==(e=r.onDisabled.dark)&&void 0!==e?e:null===(o=$.onDisabled)||void 0===o?void 0:o.dark}};
    }
  }
`;P.defaultProps={$variant:F,$fullWidth:z,disabled:C,theme:$};let N=Object.assign(({children:r,disabled:o=C,fullWidth:a=z,variant:l=F,theme:i=$,onClick:t})=>e(P,{$variant:l,$fullWidth:a,disabled:o,theme:i,onClick:t,children:r}),{Root:P});function j(r,e){var o={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&0>e.indexOf(a)&&(o[a]=r[a]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(r);l<a.length;l++)0>e.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(r,a[l])&&(o[a[l]]=r[a[l]]);return o}"function"==typeof SuppressedError&&SuppressedError;let O={primary:"var(--primary, #ffb74d)",default:{light:"var(--default, #00000099)",dark:"var(--default, #FFFFFFB2)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},H=c("check"),B=o.label.attrs({className:H("box")})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem; // 4px
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`,A=o.input.attrs({className:H("root")})`
  display: none;
`;A.defaultProps={type:"checkbox"};let R=o.div.attrs({className:H("mark")})`
  display: inline-block;
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
  user-select: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:O.primary}};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.default.light)&&void 0!==e?e:null===(o=O.default)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.default.dark)&&void 0!==e?e:null===(o=O.default)||void 0===o?void 0:o.dark}};
    }
  }
  input:disabled + & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.light)&&void 0!==e?e:null===(o=O.disabled)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.dark)&&void 0!==e?e:null===(o=O.disabled)||void 0===o?void 0:o.dark}};
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
`;R.defaultProps={theme:O};let S=Object.assign(o=>{var{children:a,theme:l}=o;return r(B,{children:[e(A,Object.assign({type:"checkbox"},j(o,["children","theme"]))),e(R,{theme:l,children:e("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor"})})}),a]})},{Box:B,Root:A,Mark:R}),M={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)"},E=c("chip"),V="fill",W=o.span.attrs({className:E("root")})`
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

  ${({$variant:r})=>{switch(r){case"fill":return a`
          border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:M.primary}};
          background-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:M.primary}};
          color: ${({theme:r})=>{var e;return null!==(e=r.onPrimary)&&void 0!==e?e:M.onPrimary}};
        `;case"line":return a`
          border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:M.primary}};
          background-color: transparent;
          color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:M.primary}};
        `;default:return a`
          color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:M.primary}};
          border-color: transparent;
          background-color: transparent;
        `}}}
`;W.defaultProps={$variant:V,theme:M};let D=Object.assign(({variant:r=V,children:o,theme:a})=>e(W,{$variant:r,theme:a,children:o}),{Root:W}),I={primary:"var(--primary, #ffb74d)",border:{light:"var(--border, #0000003A)",dark:"var(--border, #ffffff3a)"},invalid:{light:"var(--invalid, #d32f2f)",dark:"var(--invalid, #f44336)"},placeholder:"var(--placeholder, #6B7A90)",disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},L=c("input"),U=o.label.attrs({className:L("box")})`
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
    border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:I.primary}};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.light)&&void 0!==e?e:null===(o=I.border)||void 0===o?void 0:o.light}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid.light)&&void 0!==e?e:null===(o=I.invalid)||void 0===o?void 0:o.light}};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.dark)&&void 0!==e?e:null===(o=I.invalid)||void 0===o?void 0:o.dark}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid.dark)&&void 0!==e?e:null===(o=I.invalid)||void 0===o?void 0:o.dark}};
      }
    }
  }
`;U.defaultProps={theme:I};let Y=o.input.attrs({className:L("root")})`
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
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.light)&&void 0!==e?e:null===(o=I.disabled)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.dark)&&void 0!==e?e:null===(o=I.disabled)||void 0===o?void 0:o.dark}};
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
`;Y.defaultProps={type:"text",theme:I};let T=Object.assign(r=>{var{type:o="text",theme:a}=r;return e(U,{theme:a,children:e(Y,Object.assign({type:o,theme:a},j(r,["type","theme"])))})},{Box:U,Root:Y}),Z={backdrop:"var(--backdrop, #0000007F)",surface:"var(--surface, #fff)",shadow:"var(--shadow, #00000099)"},_=c("Modal"),q=(r,e)=>{i(()=>{var o;let a=document.body,l=null!==(o=a.getAttribute("data-index"))&&void 0!==o?o:"0",i=window.innerWidth-document.documentElement.clientWidth;r?0===Number(l)?(a.setAttribute("style",null!=e?e:`overflow: hidden; padding-right: ${i}px`),a.setAttribute("data-index","1")):a.setAttribute("data-index",(Number(l)+1).toString()):1>=Number(l)?(a.removeAttribute("style"),a.removeAttribute("data-index")):a.setAttribute("data-index",(Number(l)-1).toString())},[r,e])},G=r=>{let{open:e,onClickAway:o}=r;q(e);let a=t(null),l=n(r=>{r.target===a.current&&o&&o()},[o]);return{backdropRef:a,onClickAway:l}},J=o.div.attrs({className:_("Backdrop")})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({theme:r})=>{var e;return null!==(e=r.backdrop)&&void 0!==e?e:Z.backdrop}};
  z-index: 1000;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;J.defaultProps={theme:Z};let K=o.div.attrs({className:_("Root")})`
  width: 100%;
  background-color: ${({theme:r})=>{var e;return null!==(e=r.surface)&&void 0!==e?e:Z.surface}};
  border-radius: 0.5rem; // 8px
  box-shadow: 0 0.25rem 1rem 0 ${({theme:r})=>{var e;return null!==(e=r.shadow)&&void 0!==e?e:Z.shadow}}; // 0 4px 16px 0
  overflow-y: auto;
`;K.defaultProps={theme:Z};let Q=Object.assign(({open:r,onClickAway:o,children:a,theme:i})=>{let{backdropRef:t,onClickAway:n}=G({open:r,onClickAway:o});return r?l(e(J,{ref:t,onClick:n,theme:i,children:e(K,{theme:i,children:a})}),document.body):null},{Backdrop:J,Root:K,hook:G,scrollBlock:q}),X={primary:"var(--primary, #ffb74d)"},rr=c("progress"),re=o.div.attrs({className:rr("box")})`
  display: flex;
`,ro=o.div.attrs({className:rr("block")})`
  display: inline-block;
  color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:X.primary}};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: 1.4s linear 0s infinite normal none running rotate;

  ${({$width:r,$height:e})=>`
      width: ${"number"==typeof r?r+"px":r};
      height: ${"number"==typeof e?e+"px":e};
    `};

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;ro.defaultProps={$width:40,$height:40,theme:X};let ra=o.svg.attrs({className:rr("root")})`
  display: block;
`,rl=o.circle.attrs({className:rr("spinner")})`
  stroke: currentColor;
  stroke-dasharray: 5rem, 12.5rem; /* 80px, 200px; */
  stroke-dashoffset: 0;
  animation: 1.4s ease-in-out 0s infinite normal none running spinning;

  @keyframes spinning {
    0% {
      stroke-dasharray: 0.0625rem, 12.5rem; /* 1px, 200px */
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100px, 200px */
      stroke-dashoffset: -0.9375rem; /* -15px */
    }
    100% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100px, 200px */
      stroke-dashoffset: -7.8125rem; /* -125px */
    }
  }
`,ri=Object.assign(({width:r=40,height:o=40,theme:a=X})=>e(re,{children:e(ro,{$width:r,$height:o,theme:a,children:e(ra,{viewBox:"22 22 44 44",children:e(rl,{cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"3.6"})})})}),{Box:re,Block:ro,Root:ra,Circle:rl}),rt={primary:"var(--primary, #ffb74d)",default:{light:"var(--default, #00000099)",dark:"var(--default, #ffffffb2)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #ffffff4c)"}},rn=c("radio"),rd=o.label.attrs({className:rn("box")})`
  display: inline-flex;
  flex-flow: row nowrap;
  gap: 0.25rem;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`,rs=o.input.attrs({className:rn("root")})`
  display: none;
`;rs.defaultProps={type:"radio"};let rc=o.div.attrs({className:rn("mark")})`
  position: relative;
  display: inline-flex;
  user-select: none;
  width: 1.5rem;
  height: 1.5rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:rt.primary}};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.default)&&void 0!==e?e:null===(o=rt.default)||void 0===o?void 0:o.light}};
      input:disabled + & {
        color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled)&&void 0!==e?e:null===(o=rt.disabled)||void 0===o?void 0:o.light}};
      }
    }
    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.default)&&void 0!==e?e:null===(o=rt.default)||void 0===o?void 0:o.dark}};
      input:disabled + & {
        color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled)&&void 0!==e?e:null===(o=rt.disabled)||void 0===o?void 0:o.dark}};
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
`;rc.defaultProps={theme:rt};let ru=Object.assign(o=>{var{children:a,theme:l}=o;return r(rd,{children:[e(rs,Object.assign({type:"radio"},j(o,["children","theme"]))),r(rc,{theme:l,children:[e("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",fill:"currentColor"})}),e("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:e("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",fill:"currentColor"})})]}),a]})},{Box:rd,Root:rs,Mark:rc}),rv=c("scrollview"),rp=o.div.attrs({className:rv("root")})`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  box-sizing: border-box;
`,rm=Object.assign(({children:r})=>e(rp,{children:r}),{Root:rp}),rb={placeholder:"var(--placeholder, #6B7A90)",surface:{light:"var(--surface, #f1f1f2)",dark:"var(--surface, #242424)"},border:{light:"var(--border, #0000003A)",dark:"var(--border, #FFFFFF3A)"}},rh=c("select"),rf=(r,e)=>{let o=t(null);return d(e,()=>o.current),i(()=>{let e=e=>{var a;(null===(a=null==o?void 0:o.current)||void 0===a?void 0:a.contains(e.target))||r(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),o},rg=r=>{var e;let[o,a]=s(!1),l=n(()=>{a(!o)},[o]),t=rf(a),[d,c]=s(null!==(e=r.defaultValue)&&void 0!==e?e:""),u=n(e=>{var o;r.multiple?c(r=>{var o,a;let l=r.length>0?r.split(","):[],i=(null!==(o=e.value)&&void 0!==o?o:"").toString(),t=l.findIndex(r=>r===i);return t>-1?l.splice(t,1):l.push((null!==(a=e.value)&&void 0!==a?a:"").toString()),l.join(",")}):(c((null!==(o=e.value)&&void 0!==o?o:"").toString()),a(!1))},[d]);return i(()=>{r.onChange&&r.onChange(d)},[d]),{formRef:t,open:o,inputValue:d,onClickItem:u,onFieldClick:l}},ry=o.div.attrs({className:rh("form")})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`,rk=o.div.attrs({className:rh("field")})`
  padding: 0.75rem 1rem; // 12px 16px
  border-radius: 0.25rem; // 4px
  border: 0.0625rem solid transparent; // 1px
  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:r})=>{var e,o;return null!==(e=r.surface.light)&&void 0!==e?e:null===(o=rb.surface)||void 0===o?void 0:o.light}};
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.light)&&void 0!==e?e:null===(o=rb.border)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:r})=>{var e,o;return null!==(e=r.surface.dark)&&void 0!==e?e:null===(o=rb.surface)||void 0===o?void 0:o.dark}};
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.dark)&&void 0!==e?e:null===(o=rb.border)||void 0===o?void 0:o.dark}};
    }
  }
`;rk.defaultProps={theme:rb};let rx=o.span.attrs({className:rh("placeholder")})`
  color: ${({theme:r})=>{var e;return null!==(e=r.placeholder)&&void 0!==e?e:rb.placeholder}};
`;rx.defaultProps={theme:rb};let r$=o.input`
  display: none;
`,rw=o.ul.attrs({className:rh("Box")})`
  position: absolute;
  top: ${({$top:r})=>null!=r?r:"calc(100% + 0.5rem)"}; // 8px
  left: 0;
  right: 0;
  z-index: 1;
  display: ${({$open:r})=>r?"flex":"none"};
  flex-flow: column nowrap;
  border-radius: 0.25rem; // 4px
  border: 0.0625rem solid transparent; // 1px
  padding: 0;
  margin: 0;

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:r})=>{var e,o;return null!==(e=r.surface.light)&&void 0!==e?e:null===(o=rb.surface)||void 0===o?void 0:o.light}};
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.light)&&void 0!==e?e:null===(o=rb.border)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:r})=>{var e,o;return null!==(e=r.surface.dark)&&void 0!==e?e:null===(o=rb.surface)||void 0===o?void 0:o.dark}};
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border.dark)&&void 0!==e?e:null===(o=rb.border)||void 0===o?void 0:o.dark}};
    }
  }
`;rw.defaultProps={theme:rb};let rF=o.li.attrs({className:rh("Item")})`
  list-style: none;
`,rz=Object.assign(({items:o,multiple:a,placeholder:l,theme:i,top:t,children:n,onChange:d,defaultValue:s})=>{let{formRef:c,open:u,inputValue:v,onClickItem:p,onFieldClick:m}=rg({items:o,multiple:a,placeholder:l,theme:i,top:t,children:n,onChange:d,defaultValue:s});return r(ry,{ref:c,children:[r(rk,{theme:i,onClick:m,children:[v.length>0?n:e(rx,{theme:i,children:null!=l?l:"Please select value."}),e(r$,{readOnly:!0,value:v})]}),e(rw,{theme:i,$top:t,$open:u,children:null==o?void 0:o.map((r,o)=>{var a;return e(rF,{onClick:()=>{p(r)},children:null!==(a=r.label)&&void 0!==a?a:r.value},`${r.value}_${o}`)})})]})},{Form:ry,Field:rk,Placeholder:rx,Box:rw,Item:rF,clickAway:rf,hook:rg}),rC={surface:{light:"var(--surface, rgba(0, 0, 0, 0.11))",dark:"var(--surface, rgba(255, 255, 255, 0.13))"}},rP=c("skeleton"),rN=o.span.attrs({className:rP("root")})`
  display: block;
  min-width: 1rem; // 16px
  min-height: 1rem; // 16px
  animation: animation-skeleton 2s ease-in-out 0.5s infinite;

  ${({$varient:r})=>{switch(r){case"text":return a`
          border-radius: 0.25rem; // 4px
          transform-origin: 0 55%;
          transform: scale(1, 0.6);
        `;case"circle":return a`
          border-radius: 50%;
        `;default:return a`
          border-radius: 0.25rem; // 4px
        `}}}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:r})=>{var e,o,a;return null!==(o=null===(e=r.surface)||void 0===e?void 0:e.light)&&void 0!==o?o:null===(a=rC.surface)||void 0===a?void 0:a.light}};
    }

    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:r})=>{var e,o,a;return null!==(o=null===(e=r.surface)||void 0===e?void 0:e.dark)&&void 0!==o?o:null===(a=rC.surface)||void 0===a?void 0:a.dark}};
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
`;rN.defaultProps={theme:rC};let rj=Object.assign(({varient:r,theme:o})=>e(rN,{$varient:r,theme:o}),{Root:rN}),rO={primary:"var(--primary, #ffb74d)",placeholder:"var(--placeholder, #6B7A90)",border:{light:"var(--border, #0000003A)",dark:"var(--border, #ffffff3a)"},invalid:{light:"var(--invalid, #d32f2f)",dark:"var(--invalid, #f44336)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},rH=c("textarea"),rB=r=>{let e=t(null),o=n(o=>{let a=e.current;if(r.autoResize&&a){a.style.height="auto";let e=r.maxHeight?Math.min(a.scrollHeight,r.maxHeight):a.scrollHeight;a.style.height=e+"px",void 0===r.maxHeight?a.style.overflowY="hidden":a.style.overflowY=o.target.value.length>0&&a.scrollHeight>r.maxHeight?"auto":"hidden"}r.onChange&&r.onChange(o)},[r.autoResize,r.maxHeight,r.onChange]);return{internalRef:e,resizeInChange:o}},rA=o.label.attrs({className:rH("box")})`
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
    border-color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:rO.primary}};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border)&&void 0!==e?e:null===(o=rO.border)||void 0===o?void 0:o.light}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid)&&void 0!==e?e:null===(o=rO.invalid)||void 0===o?void 0:o.light}};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({theme:r})=>{var e,o;return null!==(e=r.border)&&void 0!==e?e:null===(o=rO.border)||void 0===o?void 0:o.dark}};
      &:has(:invalid) {
        border-color: ${({theme:r})=>{var e,o;return null!==(e=r.invalid)&&void 0!==e?e:null===(o=rO.invalid)||void 0===o?void 0:o.dark}};
      }
    }
  }
`;rA.defaultProps={theme:rO};let rR=o.textarea.attrs({className:rH("root")})`
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
    color: ${({theme:r})=>{var e;return null!==(e=r.placeholder)&&void 0!==e?e:rO.placeholder}};
  }
  &:disabled {
    @media (prefers-color-scheme: light) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.light)&&void 0!==e?e:null===(o=rO.disabled)||void 0===o?void 0:o.light}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:r})=>{var e,o;return null!==(e=r.disabled.dark)&&void 0!==e?e:null===(o=rO.disabled)||void 0===o?void 0:o.dark}};
    }
  }

  &:focus {
    border: none;
    outline: none;
  }
`;rR.defaultProps={rows:1,theme:rO};let rS=Object.assign(r=>{var{rows:o=1,onChange:a,theme:l,autoResize:i=!0,maxHeight:t}=r,n=j(r,["rows","onChange","theme","autoResize","maxHeight"]);let{internalRef:d,resizeInChange:s}=rB({onChange:a,autoResize:i,maxHeight:t});return e(rA,{theme:l,children:e(rR,Object.assign({rows:o,theme:l,ref:d,onChange:s},n))})},{Box:rA,Root:rR,hook:rB});export{x as Badge,N as Button,S as Check,D as Chip,ri as CircularProgress,T as Input,Q as Modal,ru as Radio,rm as ScrollView,rz as Select,rj as Skeleton,rS as Textarea};
