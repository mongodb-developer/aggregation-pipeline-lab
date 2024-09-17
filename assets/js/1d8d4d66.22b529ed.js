"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[248],{8430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(4848),i=t(8453);const r={description:"See the parts that compose an aggregation pipeline."},o="\ud83d\udcd8 Structure of an Aggregation Pipeline",s={id:"what-is-aggregation/structure-aggregation",title:"\ud83d\udcd8 Structure of an Aggregation Pipeline",description:"See the parts that compose an aggregation pipeline.",source:"@site/docs/20-what-is-aggregation/3-structure-aggregation.mdx",sourceDirName:"20-what-is-aggregation",slug:"/what-is-aggregation/structure-aggregation",permalink:"/aggregation-pipeline-lab/docs/what-is-aggregation/structure-aggregation",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/20-what-is-aggregation/3-structure-aggregation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"See the parts that compose an aggregation pipeline."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 SQL vs Aggregations",permalink:"/aggregation-pipeline-lab/docs/what-is-aggregation/sql-vs-aggregation"},next:{title:"Simple Pipelines",permalink:"/aggregation-pipeline-lab/docs/category/simple-pipelines"}},g={},l=[{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"-structure-of-an-aggregation-pipeline",children:"\ud83d\udcd8 Structure of an Aggregation Pipeline"}),"\n",(0,a.jsx)(n.p,{children:"To interact with a relational database, we typically use SQL, a 4th-generation language, to access our data. With MongoDB, we instead get data and transform it in incremental steps."}),"\n",(0,a.jsxs)(n.p,{children:["An aggregation pipeline is composed of ",(0,a.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/",children:(0,a.jsx)(n.strong,{children:"stages"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["We pass an array of stages to the ",(0,a.jsx)(n.code,{children:"aggregate"})," method like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"db.mycollection.aggregate([\n    stage1,\n    stage2,\n    stage3\n])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"An aggregation pipeline that does the same as the above SQL statement could be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'db.mycollection.aggregate([\n  {\n    $sort:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        num_mflix_comments: -1,\n      },\n  },\n  {\n    $limit:\n      /**\n       * Provide the number of documents to limit.\n       */\n      1,\n  },\n  {\n    $unwind:\n      /**\n       * path: Path to the array field.\n       * includeArrayIndex: Optional name for index.\n       * preserveNullAndEmptyArrays: Optional\n       *   toggle to unwind null and empty values.\n       */\n      {\n        path: "$cast",\n      },\n  },\n  {\n    $project:\n      /**\n       * Specifications: The fields to\n       *   include or exclude.\n       */\n      {\n        cast: 1,\n      },\n  },\n])\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);