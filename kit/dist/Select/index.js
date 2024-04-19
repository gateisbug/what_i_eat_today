import{jsxs as r,jsx as e}from"react/jsx-runtime";import l from"styled-components";import{useRef as o,useImperativeHandle as a,useEffect as d,useState as t,useCallback as n}from"react";import{p as i}from"../utils-CBXdwnnd.js";let u={placeholder:"var(--placeholder, #6B7A90)",surface:{light:"var(--surface, #f1f1f2)",dark:"var(--surface, #242424)"},border:{light:"var(--border, #0000003A)",dark:"var(--border, #FFFFFF3A)"}},c=i("select"),s=(r,e)=>{let l=o(null);return a(e,()=>l.current),d(()=>{let e=e=>{var o;(null===(o=null==l?void 0:l.current)||void 0===o?void 0:o.contains(e.target))||r(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),l},v=r=>{var e;let[l,o]=t(!1),a=n(()=>{o(!l)},[l]),i=s(o),[u,c]=t(null!==(e=r.defaultValue)&&void 0!==e?e:""),v=n(e=>{var l;r.multiple?c(r=>{var l,o;let a=r.length>0?r.split(","):[],d=(null!==(l=e.value)&&void 0!==l?l:"").toString(),t=a.findIndex(r=>r===d);return t>-1?a.splice(t,1):a.push((null!==(o=e.value)&&void 0!==o?o:"").toString()),a.join(",")}):(c((null!==(l=e.value)&&void 0!==l?l:"").toString()),o(!1))},[u]);return d(()=>{r.onChange&&r.onChange(u)},[u]),{formRef:i,open:l,inputValue:u,onClickItem:v,onFieldClick:a}},m=l.div.attrs({className:c("form")})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`,p=l.div.attrs({className:c("field")})`
  padding: 0.75rem 1rem; // 12px 16px
  border-radius: 0.25rem; // 4px
  border: 0.0625rem solid transparent; // 1px
  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:r})=>{var e,l;return null!==(e=r.surface.light)&&void 0!==e?e:null===(l=u.surface)||void 0===l?void 0:l.light}};
      border-color: ${({theme:r})=>{var e,l;return null!==(e=r.border.light)&&void 0!==e?e:null===(l=u.border)||void 0===l?void 0:l.light}};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:r})=>{var e,l;return null!==(e=r.surface.dark)&&void 0!==e?e:null===(l=u.surface)||void 0===l?void 0:l.dark}};
      border-color: ${({theme:r})=>{var e,l;return null!==(e=r.border.dark)&&void 0!==e?e:null===(l=u.border)||void 0===l?void 0:l.dark}};
    }
  }
`;p.defaultProps={theme:u};let h=l.span.attrs({className:c("placeholder")})`
  color: ${({theme:r})=>{var e;return null!==(e=r.placeholder)&&void 0!==e?e:u.placeholder}};
`;h.defaultProps={theme:u};let f=l.input`
  display: none;
`,g=l.ul.attrs({className:c("Box")})`
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
      background-color: ${({theme:r})=>{var e,l;return null!==(e=r.surface.light)&&void 0!==e?e:null===(l=u.surface)||void 0===l?void 0:l.light}};
      border-color: ${({theme:r})=>{var e,l;return null!==(e=r.border.light)&&void 0!==e?e:null===(l=u.border)||void 0===l?void 0:l.light}};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:r})=>{var e,l;return null!==(e=r.surface.dark)&&void 0!==e?e:null===(l=u.surface)||void 0===l?void 0:l.dark}};
      border-color: ${({theme:r})=>{var e,l;return null!==(e=r.border.dark)&&void 0!==e?e:null===(l=u.border)||void 0===l?void 0:l.dark}};
    }
  }
`;g.defaultProps={theme:u};let b=l.li.attrs({className:c("Item")})`
  list-style: none;
`,k=Object.assign(({items:l,multiple:o,placeholder:a,theme:d,top:t,children:n,onChange:i,defaultValue:u})=>{let{formRef:c,open:s,inputValue:k,onClickItem:x,onFieldClick:$}=v({items:l,multiple:o,placeholder:a,theme:d,top:t,children:n,onChange:i,defaultValue:u});return r(m,{ref:c,children:[r(p,{theme:d,onClick:$,children:[k.length>0?n:e(h,{theme:d,children:null!=a?a:"Please select value."}),e(f,{readOnly:!0,value:k})]}),e(g,{theme:d,$top:t,$open:s,children:null==l?void 0:l.map((r,l)=>{var o;return e(b,{onClick:()=>{x(r)},children:null!==(o=r.label)&&void 0!==o?o:r.value},`${r.value}_${l}`)})})]})},{Form:m,Field:p,Placeholder:h,Box:g,Item:b,clickAway:s,hook:v});export{k as Select};
