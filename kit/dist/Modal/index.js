import{jsx as t}from"react/jsx-runtime";import{createPortal as e}from"react-dom";import r from"styled-components";import{useEffect as o,useRef as a,useCallback as d}from"react";import{p as i}from"../utils-CBXdwnnd.js";let l={backdrop:"var(--backdrop, #0000007F)",surface:"var(--surface, #fff)",shadow:"var(--shadow, #00000099)"},n=i("Modal"),u=(t,e)=>{o(()=>{var r;let o=document.body,a=null!==(r=o.getAttribute("data-index"))&&void 0!==r?r:"0",d=window.innerWidth-document.documentElement.clientWidth;t?0===Number(a)?(o.setAttribute("style",null!=e?e:`overflow: hidden; padding-right: ${d}px`),o.setAttribute("data-index","1")):o.setAttribute("data-index",(Number(a)+1).toString()):1>=Number(a)?(o.removeAttribute("style"),o.removeAttribute("data-index")):o.setAttribute("data-index",(Number(a)-1).toString())},[t,e])},c=t=>{let{open:e,onClickAway:r}=t;u(e);let o=a(null),i=d(t=>{t.target===o.current&&r&&r()},[r]);return{backdropRef:o,onClickAway:i}},s=r.div.attrs({className:n("Backdrop")})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({theme:t})=>{var e;return null!==(e=t.backdrop)&&void 0!==e?e:l.backdrop}};
  z-index: 1000;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;s.defaultProps={theme:l};let m=r.div.attrs({className:n("Root")})`
  width: 100%;
  background-color: ${({theme:t})=>{var e;return null!==(e=t.surface)&&void 0!==e?e:l.surface}};
  border-radius: 0.5rem; // 8px
  box-shadow: 0 0.25rem 1rem 0 ${({theme:t})=>{var e;return null!==(e=t.shadow)&&void 0!==e?e:l.shadow}}; // 0 4px 16px 0
  overflow-y: auto;
`;m.defaultProps={theme:l};let p=Object.assign(({open:r,onClickAway:o,children:a,theme:d})=>{let{backdropRef:i,onClickAway:l}=c({open:r,onClickAway:o});return r?e(t(s,{ref:i,onClick:l,theme:d,children:t(m,{theme:d,children:a})}),document.body):null},{Backdrop:s,Root:m,hook:c,scrollBlock:u});export{p as Modal};
