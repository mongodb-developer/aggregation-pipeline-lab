"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[187],{6471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(5893),r=n(1151),s=n(3992),o=n(425);const i={},l="\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages",u={id:"simple-queries/repeating-stages",title:"\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages",description:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab",source:"@site/docs/30-simple-queries/7-repeating-stages.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/repeating-stages",permalink:"/aggregation-pipeline-lab/docs/simple-queries/repeating-stages",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/7-repeating-stages.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Writing long pipelines",permalink:"/aggregation-pipeline-lab/docs/simple-queries/writing-long-pipelines"},next:{title:"\ud83e\uddb8\u200d\u2642\ufe0f Aggregation options",permalink:"/aggregation-pipeline-lab/docs/simple-queries/aggregation-options"}},c={},d=[];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"\ufe0f-repeating-stages",children:"\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab"})}),"\n",(0,a.jsxs)(t.p,{children:["From the ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/#stages",children:"Aggregation Pipelines manual"}),"."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"All stages except the $out, $merge, $geoNear, $changeStream, and $changeStreamSplitLargeEvent stages can appear multiple times in a pipeline."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"So we can repeat most stages, and do something like this to get all books from 1985 with more than 100 pages (although it can make sense or not)"}),"\n",(0,a.jsxs)(s.Z,{groupId:"aggregations",children:[(0,a.jsx)(o.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"[\n    {\n        $match: { pages: {$gte: 100} }\n    },\n    {\n        $match: { year: 1985 }\n    }\n]\n"})})}),(0,a.jsx)(o.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: {$gte: 100}}}, {$match: {year: 1985}}])\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udcbb Add several ",(0,a.jsx)(t.code,{children:"$limit"})," stages at the end of the above aggregation, limiting to 1 book and see what happens"]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsxs)(s.Z,{groupId:"aggregations",children:[(0,a.jsx)(o.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"[\n    {$match: {pages: {$gte: 100}}}, \n    {$match: {year: 2011}},\n    {$limit: 1},\n    {$limit: 1},\n]\n"})})}),(0,a.jsx)(o.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"db.books.aggregate([\n    {$match: {pages: {$gte: 100}}}, \n    {$match: {year: 2011}},\n    {$limit: 1},\n    {$limit: 1},\n])\n"})})})]})})]})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},425:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6010);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},3992:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7294),r=n(6010),s=n(2957),o=n(6550),i=n(1270),l=n(5238),u=n(3609),c=n(2560);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=u??m;return g({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(7294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);