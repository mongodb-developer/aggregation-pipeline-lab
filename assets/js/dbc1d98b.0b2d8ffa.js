"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[355],{9224:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(5893),a=s(1151);const r={},i="$match",o={id:"simple-queries/match",title:"$match",description:"This is the simplest one, similar to the WHERE SQL clause.",source:"@site/docs/30-simple-queries/2-match.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/match",permalink:"/aggregation-pipeline-lab/docs/simple-queries/match",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/2-match.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Empty aggregation pipeline",permalink:"/aggregation-pipeline-lab/docs/simple-queries/empty-aggregation"},next:{title:"$project",permalink:"/aggregation-pipeline-lab/docs/simple-queries/project"}},c={},l=[{value:"AND",id:"and",level:2},{value:"Shorthand AND",id:"shorthand-and",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"match",children:"$match"}),"\n",(0,t.jsxs)(n.p,{children:["This is the simplest one, similar to the ",(0,t.jsx)(n.code,{children:"WHERE"})," SQL clause."]}),"\n",(0,t.jsx)(n.p,{children:"Say we want all the books from 2010. We'll write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {year: 2010}}])\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udcbb Return all the ",(0,t.jsx)(n.code,{children:"books"})," that have exactly 100 pages."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100}}])\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"and",children:"AND"}),"\n",(0,t.jsxs)(n.p,{children:["If we need to add more conditions using AND, we can do it using the ",(0,t.jsx)(n.code,{children:"$and"})," operator."]}),"\n",(0,t.jsxs)(n.p,{children:["If we want all the books with 100 pages with exactly ",(0,t.jsx)(n.code,{children:"totalInventory"})," 2 we can use an ",(0,t.jsx)(n.code,{children:"$and"})," operator. This takes and array of documents with all the conditions that should be true for the AND to succeed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {totalInventory: 2}]}}])\n"})}),"\n",(0,t.jsx)(n.p,{children:"The pseudo-code for this would be something like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"IF pages == 100 AND totalInventory == 2 {\n    return matching docs\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udcbb Return all the ",(0,t.jsx)(n.code,{children:"books"})," from 2015 that have exactly 100 pages."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}])\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udcbb How many are they? (",(0,t.jsxs)(n.em,{children:["hint: use ",(0,t.jsx)(n.code,{children:"itcount()"})]}),")."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}]).itcount()\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"shorthand-and",children:"Shorthand AND"}),"\n",(0,t.jsx)(n.p,{children:"We can do an implicit AND just passing a document with all the conditions (instead of an array of documents):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, totalInventory: 2}}])\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udcbb Return all the ",(0,t.jsx)(n.code,{children:"books"})," from 2015 that have exactly 100 pages, using the simple $and notation"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, year: 2015}}])\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);