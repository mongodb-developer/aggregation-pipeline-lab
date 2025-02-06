"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["744"],{4222:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>o,metadata:()=>r,assets:()=>u,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"modifying-results/adding-fields","title":"\uD83D\uDC50 Adding New Fields to Results","description":"$addFields","source":"@site/docs/80-modifying-results/adding-fields.mdx","sourceDirName":"80-modifying-results","slug":"/modifying-results/adding-fields","permalink":"/aggregation-pipeline-lab/docs/modifying-results/adding-fields","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/80-modifying-results/adding-fields.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Modifying Results","permalink":"/aggregation-pipeline-lab/docs/category/modifying-results"},"next":{"title":"\uD83D\uDC50 Unset Fields from Results","permalink":"/aggregation-pipeline-lab/docs/modifying-results/unset-fields"}}'),a=t("5893"),i=t("65"),l=t("8168"),s=t("7645");let o={sidebar_position:10},d="\uD83D\uDC50 Adding New Fields to Results",u={},c=[{value:"$addFields",id:"addfields",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-adding-new-fields-to-results",children:"\uD83D\uDC50 Adding New Fields to Results"})}),"\n",(0,a.jsx)(n.h2,{id:"addfields",children:"$addFields"}),"\n",(0,a.jsxs)(n.p,{children:["We want to estimate the reading time for a book. But we don't have that field stored in our data. We can use ",(0,a.jsx)(n.code,{children:"$addFields"})," for this. If the field exists, it'll get updated, and if it doesn't, it's added."]}),"\n",(0,a.jsxs)(l.Z,{groupId:"aggregations",children:[(0,a.jsx)(s.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$project: {\n        title: 1,\n        pages: 1,\n        }\n    },\n    {$addFields: {readingTimeHours: {$divide: [{$multiply: ["$pages", 2]}, 60]}}},\n]\n'})})}),(0,a.jsx)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$project: {\n        title: 1,\n        pages: 1,\n        }\n    },\n    {$addFields: {readingTimeHours: {$divide: [{$multiply: ["$pages", 2]}, 60]}}},\n])\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\uD83D\uDC50 Add a new field, ",(0,a.jsx)(n.code,{children:"notes"}),", that contains the text ",(0,a.jsx)(n.code,{children:"PLACEHOLDER"})," for all documents."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsxs)(l.Z,{groupId:"aggregations",children:[(0,a.jsx)(s.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$project: \n        {\n            title: 1,\n            pages: 1,\n        }\n    },\n    {$addFields: {notes: "PLACEHOLDER"}}\n]\n'})})}),(0,a.jsx)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$project: \n        {\n            title: 1,\n            pages: 1,\n        }\n    },\n    {$addFields: {notes: "PLACEHOLDER"}}\n])\n'})})})]})}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation/set/#mongodb-pipeline-pipe.-set",children:"$set"})," is an alias for $addFields that you'll find on many older posts and documentation."]})})]})]})}function f(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},7645:function(e,n,t){t.d(n,{Z:()=>i});var r=t("5893");t("7294");var a=t("4904");function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",i),hidden:t,children:n})}},8168:function(e,n,t){t.d(n,{Z:()=>x});var r=t("5893"),a=t("7294"),i=t("4904"),l=t("4718"),s=t("6550"),o=t("8714"),d=t("9207"),u=t("9413"),c=t("4510");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var h=t("6735");function g(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{let n=e.currentTarget,t=o[d.indexOf(n)].value;t!==a&&(u(n),s(t))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{d.push(e)},onKeyDown:p,onClick:c,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function m(e){let{lazy:n,children:t,selectedValue:l}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,i=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,h]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[g,m]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(i),(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:t,groupId:r}),[b,x]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,i]=(0,c.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:r}),v=(()=>{let e=g??b;return f({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{v&&h(v)},[v]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!f({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);h(e),m(e),x(e)},[m,x,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(m,{...n,...e})]})}function x(e){let n=(0,h.Z)();return(0,r.jsx)(b,{...e,children:p(e.children)},String(n))}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(7294);let a={},i=r.createContext(a);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);