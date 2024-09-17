"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[677],{6382:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(4848),i=n(8453);const a={},r="\ud83e\uddb8\u200d\u2642\ufe0f Aggregation options",s={id:"simple-queries/aggregation-options",title:"\ud83e\uddb8\u200d\u2642\ufe0f Aggregation options",description:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab",source:"@site/docs/30-simple-queries/8-aggregation-options.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/aggregation-options",permalink:"/aggregation-pipeline-lab/docs/simple-queries/aggregation-options",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/8-aggregation-options.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages",permalink:"/aggregation-pipeline-lab/docs/simple-queries/repeating-stages"},next:{title:"Using Arrays",permalink:"/aggregation-pipeline-lab/docs/category/using-arrays"}},g={},c=[];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"\ufe0f-aggregation-options",children:"\ud83e\uddb8\u200d\u2642\ufe0f Aggregation options"}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab"})}),"\n",(0,t.jsx)(o.admonition,{type:"danger",children:(0,t.jsx)(o.p,{children:"The following syntax doesn't work in the Atlas UI aggregations editor."})}),"\n",(0,t.jsxs)(o.p,{children:["We can pass a document to ",(0,t.jsx)(o.code,{children:"aggregate"})," with some options."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"let options = {\n    maxTimeMS: 100\n};\n\ndb.authors.aggregate([], options);\n"})}),"\n",(0,t.jsxs)(o.p,{children:["\ud83d\udcbb Have a look at the ",(0,t.jsx)(o.a,{href:"https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/#mongodb-method-db.collection.aggregate",children:"different options you can pass to the aggregate method"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["\ud83d\udcbb Try to launch an ",(0,t.jsx)(o.code,{children:"itcount"})," (a long operation) to iterate through the whole books cursor with a time limit of 10 ms: you should see the operation timing out and failing."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"let options = {\n    maxTimeMS: 10\n};\n\ndb.authors.aggregate([], options).itcount();\n\n> MongoServerError: operation exceeded time limit\n"})})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>s});var t=n(6540);const i={},a=t.createContext(i);function r(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);