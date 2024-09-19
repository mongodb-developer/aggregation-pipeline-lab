"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[4761],{874:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=r(4848),t=r(8453),s=r(1470),l=r(9365);const o={},i="\ud83d\udc50 Group",u={id:"grouping/group",title:"\ud83d\udc50 Group",description:"We can sum all the pages for all books in each year:",source:"@site/docs/70-grouping/group.mdx",sourceDirName:"70-grouping",slug:"/grouping/group",permalink:"/aggregation-pipeline-lab/docs/grouping/group",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/70-grouping/group.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Grouping Results",permalink:"/aggregation-pipeline-lab/docs/category/grouping-results"},next:{title:"Modifying Results",permalink:"/aggregation-pipeline-lab/docs/category/modifying-results"}},c={},d=[];function g(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-group",children:"\ud83d\udc50 Group"})}),"\n",(0,a.jsx)(n.p,{children:"We can sum all the pages for all books in each year:"}),"\n",(0,a.jsxs)(s.A,{groupId:"aggregations",children:[(0,a.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$group:{\n        _id: "$year",\n        totalPages: {$sum: "$pages"}\n    }}\n]\n'})})}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$group:{\n        _id: "$year",\n        totalPages: {$sum: "$pages"}\n    }}\n])\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, we group by the book's ",(0,a.jsx)(n.code,{children:"year"})," (the _id of the grouping), and then we create a new field called ",(0,a.jsx)(n.code,{children:"totalPages"})," that's the sum of all pages."]}),"\n",(0,a.jsx)(n.p,{children:"\ud83d\udc50 Can you get the results ordered ascending by year?"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsxs)(s.A,{groupId:"aggregations",children:[(0,a.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$group:{\n        _id: "$year",\n        totalPages: {$sum: "$pages"}\n    }},\n    {$sort: {_id: 1}}\n]\n'})})}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$group:{\n        _id: "$year",\n        totalPages: {$sum: "$pages"}\n    }},\n    {$sort: {_id: 1}}\n])\n'})})})]})})]}),"\n",(0,a.jsxs)(n.p,{children:["\ud83d\udc50 Can you get the average pages per year (hint: use ",(0,a.jsx)(n.code,{children:"$avg"}),")?"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsxs)(s.A,{groupId:"aggregations",children:[(0,a.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$group:{\n        _id: "$year",\n        totalPages: {$avg: "$pages"}\n    }},\n    {$sort: {_id: 1}}\n]\n'})})}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$group:{\n        _id: "$year",\n        totalPages: {$avg: "$pages"}\n    }},\n    {$sort: {_id: 1}}\n])\n'})})})]})})]}),"\n",(0,a.jsx)(n.p,{children:"\ud83d\udc50 Which year had the most printed-out pages?"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsxs)(s.A,{groupId:"aggregations",children:[(0,a.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$group:{\n        _id: "$year",\n        totalPages: {$sum: "$pages"}\n    }},\n    {$sort: {totalPages: -1}},\n    {$limit: 1}\n]\n'})})}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$group:{\n        _id: "$year",\n        totalPages: {$sum: "$pages"}\n    }},\n    {$sort: {totalPages: -1}},\n    {$limit: 1}\n])\n'})})})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var a=r(8215);const t={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>$});var a=r(6540),t=r(8215),s=r(3104),l=r(6347),o=r(205),i=r(7485),u=r(1682),c=r(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=g(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:r,groupId:t}),[b,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),f=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function j(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==a&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,t.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function $(e){const n=(0,m.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var a=r(6540);const t={},s=a.createContext(t);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);