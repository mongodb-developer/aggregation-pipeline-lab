"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[621],{2294:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(5893),t=n(1151);const i={},a="\ud83d\udc50 Lookupups AKA Left Outer Join",r={id:"lookups/lookups",title:"\ud83d\udc50 Lookupups AKA Left Outer Join",description:"Using Documents we usually model 1many relationships embedding documents inside other documents, even using arrays for that. For instance an Author can have many aliases, and they live inside an array in the authors collection.",source:"@site/docs/60-lookups/1-lookups.mdx",sourceDirName:"60-lookups",slug:"/lookups/lookups",permalink:"/aggregation-pipeline-lab/docs/lookups/lookups",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/60-lookups/1-lookups.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lookups / Joins",permalink:"/aggregation-pipeline-lab/docs/category/lookups--joins"},next:{title:"\ud83e\uddb8\u200d\u2642\ufe0f Advanced lookups",permalink:"/aggregation-pipeline-lab/docs/lookups/advanced-lookups"}},l={},d=[{value:"Lookups from a previous stage",id:"lookups-from-a-previous-stage",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"-lookupups-aka-left-outer-join",children:"\ud83d\udc50 Lookupups AKA Left Outer Join"}),"\n",(0,s.jsxs)(o.p,{children:["Using Documents we usually model 1:1, 1",":many"," relationships embedding documents inside other documents, even using arrays for that. For instance an Author can have many aliases, and they live inside an array in the ",(0,s.jsx)(o.code,{children:"authors"})," collection."]}),"\n",(0,s.jsxs)(o.p,{children:["But other times we need to use references to those documents instead of embedding them. For instance an author has an array of the books she has written, but instead of moving the book documents inside an array inside author (which will be tricky for books with multiple authors) we embed the books ",(0,s.jsx)(o.code,{children:"_id"})," instead."]}),"\n",(0,s.jsxs)(o.p,{children:["So how can we get the authors and all the books she has written, embedded in the array? Using ",(0,s.jsx)(o.code,{children:"$lookup"}),", that will do a Left Outer Join and return author docs containing book docs inside."]}),"\n",(0,s.jsx)(o.p,{children:"\ud83d\udc50 Run this aggregation and look at the results:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",children:'db.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       as: "booksWritten"\n     } \n    },\n    {$project: {_id: 0}}\n])\n'})}),"\n",(0,s.jsxs)(o.p,{children:["The syntax for this version of ",(0,s.jsx)(o.code,{children:"$lookup"})," is:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",children:'{\n   $lookup:\n     {\n       from: <collection to join>,\n       localField: <field from the input documents>,\n       foreignField: <field from the documents of the "from" collection>,\n       as: <output array field>\n     }\n}\n'})}),"\n",(0,s.jsx)(o.h2,{id:"lookups-from-a-previous-stage",children:"Lookups from a previous stage"}),"\n",(0,s.jsxs)(o.p,{children:["We can do a $lookup on the result of another pipeline, not only joining with a collection. For instance, we want to remove some noise from the books before joining, so we use ",(0,s.jsx)(o.code,{children:"$project"})," to exclude a couple arrays."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",children:'db.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       pipeline: [\n         {$project: {title: 1, synopsis: 1}}\n       ],\n       as: "booksWritten"\n     } \n    }\n])\n'})}),"\n",(0,s.jsx)(o.p,{children:"The nice part is that we can extract that pipeline and test it / tweak it."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",children:'let justShowTitleSynopsis = [\n    {$project: {title: 1, synopsis: 1}},\n]\n\ndb.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       pipeline:\n          justShowTitleSynopsis,\n       as: "booksWritten"\n     } \n    }\n])\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>a});var s=n(7294);const t={},i=s.createContext(t);function a(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);