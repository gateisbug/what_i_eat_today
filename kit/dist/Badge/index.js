import{jsxs as t,jsx as r}from"react/jsx-runtime";import o,{css as a}from"styled-components";import{p as e}from"../utils-CBXdwnnd.js";let n={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)"},i=e("badge"),l=!0,s="standard",m="top",c="right",p=99,d=t=>{var r;return{contents:"standard"===t.variant?"number"==typeof t.content&&t.content>t.max?`${t.max}+`:null!==(r=t.content)&&void 0!==r?r:"":null}},h=o.span.attrs({className:i("box")})`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`,u=o.span.attrs({className:i("root")})`
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

  background-color: ${({theme:t})=>{var r;return null!==(r=t.primary)&&void 0!==r?r:n.primary}};
  color: ${({theme:t})=>{var r;return null!==(r=t.onPrimary)&&void 0!==r?r:n.onPrimary}};

  // show
  display: ${({$show:t})=>t?"flex":"none"};

  // variant
  ${t=>"standard"===t.$variant?a`
        font-size: 0.75rem; // 12px
        padding: 0.25rem 0.5rem; // 4px 8px
        border-radius: 0.75rem; // 12px
      `:a`
        width: 0.5rem; // 8px
        height: 0.5rem; // 8px
        border-radius: 0.25rem; // 4px
      `}

  // vertical | horizontal
  transform: ${({$vertical:t,$horizontal:r})=>"top"===t?"right"===r?"translate(50%, -50%)":"translate(-50%, -50%)":"right"===r?"translate(50%, 50%)":"translate(-50%, 50%)"};
  top: ${({$vertical:t})=>"top"===t?"0":"auto"};
  bottom: ${({$vertical:t})=>"bottom"===t?"0":"auto"};
  right: ${({$horizontal:t})=>"right"===t?"0":"auto"};
  left: ${({$horizontal:t})=>"left"===t?"0":"auto"};
`;u.defaultProps={$show:l,$variant:s,$vertical:m,$horizontal:c,theme:n};let f=Object.assign(({show:o=l,variant:a=s,vertical:e=m,horizontal:i=c,max:f=p,theme:b=n,children:$,content:v})=>{let{contents:g}=d({variant:a,content:v,max:f});return t(h,{children:[$,r(u,{$variant:a,$show:o,$vertical:e,$horizontal:i,theme:b,children:g})]})},{Box:h,Root:u,hook:d});export{f as Badge};
