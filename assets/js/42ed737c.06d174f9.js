"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[960],{3630:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(5893),a=o(1151);const i={},r="Saving to a collection",c={id:"exporting-data/saving-to-collection",title:"Saving to a collection",description:"You can export the result of an aggregation pipeline to a different DB / Collection. To do that just add a last aggregation stage to your pipeline:",source:"@site/docs/90-exporting-data/saving-to-collection.mdx",sourceDirName:"90-exporting-data",slug:"/exporting-data/saving-to-collection",permalink:"/aggregation-pipeline-lab/docs/exporting-data/saving-to-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/90-exporting-data/saving-to-collection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exporting Data",permalink:"/aggregation-pipeline-lab/docs/category/exporting-data"},next:{title:"\ud83d\udcd8 Lecture material",permalink:"/aggregation-pipeline-lab/docs/lecture-material"}},s={},l=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"saving-to-a-collection",children:"Saving to a collection"}),"\n",(0,n.jsx)(t.p,{children:"You can export the result of an aggregation pipeline to a different DB / Collection. To do that just add a last aggregation stage to your pipeline:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{ $out: { db: "<output-db>", coll: "<output-collection>" } }\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can omit the ",(0,n.jsx)(t.code,{children:"db"})," attribute, in which case the new collection is created in the current DB."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{ $out: "<output-collection>" }\n'})}),"\n",(0,n.jsx)(t.p,{children:"\ud83d\udcbb Create a copy of the books with exactly 100 pages and output as a new collection named `OneHundredPagesBooks."}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Answer"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'let oneHundredPagesBooks = {$match: {pages: 100}};\nlet saveToNewCollection = {$out: "OneHundredPagesBooks"}\n\ndb.books.aggregate([\n    oneHundredPagesBooks,\n    saveToNewCollection\n]);\n'})}),(0,n.jsx)(t.p,{children:"After running this, we should see a new collection with:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"show collections\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>r});var n=o(7294);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);