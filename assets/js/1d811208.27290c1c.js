"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[813],{4137:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return n?r.createElement(m,a(a({ref:t},g),{},{components:n})):r.createElement(m,a({ref:t},g))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const s={},a="Sorting",i={unversionedId:"counting-sorting/sorting",id:"counting-sorting/sorting",title:"Sorting",description:"We can sort our results using the $sort stage. We need to sort on a field, being 1 ascending and -1 descending order.",source:"@site/docs/50-counting-sorting/10-sorting.mdx",sourceDirName:"50-counting-sorting",slug:"/counting-sorting/sorting",permalink:"/aggregation-workshop/docs/counting-sorting/sorting",draft:!1,editUrl:"https://github.com/mongodb-developer/aggregation-workshop/blob/main/docs/50-counting-sorting/10-sorting.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$count",permalink:"/aggregation-workshop/docs/counting-sorting/counting-documents"},next:{title:"Lookups / Joins",permalink:"/aggregation-workshop/docs/category/lookups--joins"}},l={},c=[],g={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sorting"},"Sorting"),(0,o.kt)("p",null,"We can sort our results using the ",(0,o.kt)("inlineCode",{parentName:"p"},"$sort")," stage. We need to sort on a field, being 1 ascending and -1 descending order."),(0,o.kt)("p",null,"Let's get all books from 1984, sorted by number of pages. We'll only show the title, pages and authors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let booksFrom1984 = {$match: {year: 1984}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, pages: 1, authors: 1}};\nlet slimmerBooksFirst = {$sort: {"pages": 1}}\n\ndb.books.aggregate([\n    booksFrom1984,\n    showOnlyTheseFields,\n    slimmerBooksFirst,\n]);\n')),(0,o.kt)("p",null,"As we can see, we don't get any ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," info as these documents don't have that information, hence is ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," and gets sorted as less than any number. We can sort the other way around:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let booksFrom1984 = {$match: {year: 1984}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, pages: 1, authors: 1}};\nlet thickerBooksFirst = {$sort: {"pages": -1}}\n\ndb.books.aggregate([\n    booksFrom1984,\n    showOnlyTheseFields,\n    thickerBooksFirst,\n]);\n')),(0,o.kt)("p",null,"\ud83d\udcbb How can we get the thickest book from 1984?"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let booksFrom1984 = {$match: {year: 1984}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, pages: 1, authors: 1}};\nlet thickerBooksFirst = {$sort: {"pages": -1}}\nlet justOne = {$limit: 1}\n\ndb.books.aggregate([\n    booksFrom1984,\n    showOnlyTheseFields,\n    thickerBooksFirst,\n    justOne\n]);\n')))))}u.isMDXComponent=!0}}]);