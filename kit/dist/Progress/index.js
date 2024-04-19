import{jsx as r}from"react/jsx-runtime";import e from"styled-components";import{p as t}from"../utils-CBXdwnnd.js";let s={primary:"var(--primary, #ffb74d)"},o=t("progress"),a=e.div.attrs({className:o("box")})`
  display: flex;
`,i=e.div.attrs({className:o("block")})`
  display: inline-block;
  color: ${({theme:r})=>{var e;return null!==(e=r.primary)&&void 0!==e?e:s.primary}};
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
`;i.defaultProps={$width:40,$height:40,theme:s};let n=e.svg.attrs({className:o("root")})`
  display: block;
`,m=e.circle.attrs({className:o("spinner")})`
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
`,l=Object.assign(({width:e=40,height:t=40,theme:o=s})=>r(a,{children:r(i,{$width:e,$height:t,theme:o,children:r(n,{viewBox:"22 22 44 44",children:r(m,{cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"3.6"})})})}),{Box:a,Block:i,Root:n,Circle:m});export{l as CircularProgress};
