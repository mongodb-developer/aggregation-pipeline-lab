"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[658],{7278:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=a(5893),s=a(1151);const t={},i="\ud83d\udc50 Simple Array queries",o={id:"using-arrays/simple-match-array",title:"\ud83d\udc50 Simple Array queries",description:"Find data in arrays",source:"@site/docs/40-using-arrays/1-simple-match-array.mdx",sourceDirName:"40-using-arrays",slug:"/using-arrays/simple-match-array",permalink:"/aggregation-pipeline-lab/docs/using-arrays/simple-match-array",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/40-using-arrays/1-simple-match-array.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Arrays",permalink:"/aggregation-pipeline-lab/docs/category/using-arrays"},next:{title:"\ud83d\udc50 Searching inside Objects in arrays",permalink:"/aggregation-pipeline-lab/docs/using-arrays/search-inside-objects-in-arrays"}},c={},d=[{value:"Find data in arrays",id:"find-data-in-arrays",level:2},{value:"Size of an array",id:"size-of-an-array",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-simple-array-queries",children:"\ud83d\udc50 Simple Array queries"}),"\n",(0,r.jsx)(n.h2,{id:"find-data-in-arrays",children:"Find data in arrays"}),"\n",(0,r.jsxs)(n.p,{children:["A JSON Array can contain scalar values or objects. In our data, ",(0,r.jsx)(n.code,{children:"authors"})," have an array of the books they've authored (their ISBNs). Let's get one author:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"db.authors.aggregate([{$limit: 1}])\n"})}),"\n",(0,r.jsx)(n.p,{children:"\ud83d\udc50 Run this aggregation to get one author"}),"\n",(0,r.jsx)(n.p,{children:"I got this one (can change depending on the data source you imported)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  _id: ObjectId(\"64cc2db4830ba29148da4c3b\"),\n  name: 'Richard Bruce Wright',\n  sanitizedName: 'richardbrucewright',\n  books: [\n    '0002005018'\n  ],\n  aliases: [\n    'Wright, Richard Bruce'\n  ]\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Can I get all authors for book ",(0,r.jsx)(n.code,{children:"0002005018"}),"? For that, I want all authors that have ",(0,r.jsx)(n.code,{children:"0002005018"})," inside the ",(0,r.jsx)(n.code,{children:"books"})," array. Turns out it's quite simple:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'db.authors.aggregate([\n    {$match: {books: "0002005018"}}\n])\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udc50 Get book's author name for ISBN ",(0,r.jsx)(n.code,{children:"0395623650"}),":"]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"db.authors.aggregate([{$match: {books: \"0395623650\"}}])\n\n>   name: 'Juan Ram\xf3n Jim\xe9nez',\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"size-of-an-array",children:"Size of an array"}),"\n",(0,r.jsxs)(n.p,{children:["What if we want to know how many aliases an Author has? To do that we can use ",(0,r.jsx)(n.code,{children:"$size"}),", adding the array field that we're interested in:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'db.authors.aggregate([\n{$project: {\n    name: 1,\n    bookCount: {$size: "$books"}\n }\n},\n])\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udc50 Who wrote the most books? (we can sort using ",(0,r.jsx)(n.code,{children:'{ $sort: {"bookCount": -1}}'}),")"]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'let addNumberBooks = {\n    $project: {\n        name: 1,\n        bookCount: {$size: "$books"}\n    }\n}\n\nlet orderByNumberOfBooksDesc = { $sort: {"bookCount": -1}}\n\nlet getOne = {$limit: 1}\n\ndb.authors.aggregate([\n    addNumberBooks,\n    orderByNumberOfBooksDesc,\n    getOne,\n])\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var r=a(7294);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);