"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[8481],{4552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(4848),s=r(8453);r(1470),r(9365);const a={sidebar_position:0},l="\u4ecb\u7ecd",i={id:"intro",title:"\u4ecb\u7ecd",description:"|\u5b9e\u9a8c\u76ee\u6807|\u4e86\u89e3\u805a\u5408\u7ba1\u9053\uff0c\u7f16\u5199\u805a\u5408\u7ba1\u9053|",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/aggregation-pipeline-lab/zh/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Prerequisites",permalink:"/aggregation-pipeline-lab/zh/docs/category/prerequisites"}},o={},u=[];function c(e){const t={h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"})}),"\n","\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u5b9e\u9a8c\u76ee\u6807"}),(0,n.jsx)(t.th,{children:"\u4e86\u89e3\u805a\u5408\u7ba1\u9053\uff0c\u7f16\u5199\u805a\u5408\u7ba1\u9053"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u4f60\u5c06\u5b66\u5230"}),(0,n.jsx)(t.td,{children:"\u4ec0\u4e48\u662f\u805a\u5408\u7ba1\u9053"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5b83\u4eec\u4e0e\u7b80\u5355\u7684 MongoDB \u67e5\u8be2\u6216 SQL \u6709\u4ec0\u4e48\u4e0d\u540c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5982\u4f55\u4f7f\u7528\u7b80\u5355\u7684\u805a\u5408\u7ba1\u9053\u83b7\u53d6\u6570\u636e\u3001\u8fc7\u6ee4\u6570\u636e\u3001\u663e\u793a\u6240\u9700\u7684\u5b57\u6bb5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5982\u4f55\u7f16\u5199\u66f4\u9ad8\u7ea7\u7684\u7ba1\u9053\uff0c\u67e5\u8be2\u6570\u7ec4\u3001\u8ba1\u6570\u548c\u6392\u5e8f\u7ed3\u679c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5982\u4f55\u4f7f\u7528 $lookup \u8fdb\u884c\u8de8\u96c6\u5408 JOIN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5982\u4f55\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ec4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5982\u4f55\u5bfc\u51fa\u6570\u636e"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5982\u4f55\u4f7f\u7528\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u805a\u5408\uff08\u5f85\u5b9a\uff09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u5b8c\u6210\u65f6\u95f4"}),(0,n.jsx)(t.td,{children:"90 \u5206\u949f"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u5bfc\u822a\u680f\u548c\u67d0\u4e9b\u9875\u9762\u4e2d\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u4e00\u4e9b\u56fe\u6807\u3002\u5b83\u4eec\u7684\u542b\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u56fe\u6807"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u542b\u4e49"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\ud83d\udcd8"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u8bb2\u4e49\u6750\u6599 - \u5982\u679c\u60a8\u6b63\u5728\u8ddf\u968f\u5bfc\u5e08\u4e3b\u5bfc\u7684\u8bfe\u7a0b\uff0c\u4ed6\u4eec\u53ef\u80fd\u5df2\u7ecf\u8986\u76d6\u4e86\u8fd9\u4e9b\u6750\u6599\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\ud83d\udc50"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u52a8\u624b\u5185\u5bb9 - \u51c6\u5907\u597d\u8fdb\u884c\u4e00\u4e9b\u5b9e\u9645\u64cd\u4f5c\u3002\u60a8\u5e94\u8be5\u6309\u7167\u8fd9\u4e9b\u6b65\u9aa4\u8fdb\u884c\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\ud83d\udcac"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u8bdd\u9898\u8ba8\u8bba - \u5728\u5b9e\u9a8c\u671f\u95f4\u53c2\u4e0e\u8ba8\u8bba\u7684\u9879\u76ee\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\ud83e\uddb8"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u9ad8\u7ea7\u5185\u5bb9 - \u8fd9\u4e9b\u5185\u5bb9\u5728\u5b9e\u9a8c\u671f\u95f4\u672a\u8986\u76d6\uff0c\u4f46\u5982\u679c\u60a8\u6709\u5174\u8da3\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u4ee5\u67e5\u770b\u3002"})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var n=r(8215);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),s=r(8215),a=r(3104),l=r(6347),i=r(205),o=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=x({queryString:r,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),s=i[r].value;s!==n&&(u(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,m.jsx)(g,{...t,...e}),(0,m.jsx)(v,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,m.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(6540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);