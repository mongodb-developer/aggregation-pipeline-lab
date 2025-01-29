"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["5569"],{4674:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>u});var r=JSON.parse('{"id":"simple-queries/writing-long-pipelines","title":"\uD83E\uDDB8\u200D\u2642\uFE0F Writing Long Pipelines","description":"Extra activity! Do it if you have extra time or are following along at home. It won\'t be covered during the hands-on lab.","source":"@site/docs/30-simple-queries/6-writing-long-pipelines.mdx","sourceDirName":"30-simple-queries","slug":"/simple-queries/writing-long-pipelines","permalink":"/aggregation-pipeline-lab/docs/simple-queries/writing-long-pipelines","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/6-writing-long-pipelines.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 Combining stages","permalink":"/aggregation-pipeline-lab/docs/simple-queries/combining-them-all"},"next":{"title":"\uD83E\uDDB8\u200D\u2642\uFE0F Repeating Stages","permalink":"/aggregation-pipeline-lab/docs/simple-queries/repeating-stages"}}'),i=t("5893"),o=t("65"),a=t("8168"),s=t("7645");let l={},u="\uD83E\uDDB8\u200D\u2642\uFE0F Writing Long Pipelines",c={},d=[];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\uFE0F-writing-long-pipelines",children:"\uD83E\uDDB8\u200D\u2642\uFE0F Writing Long Pipelines"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Extra activity! Do it if you have extra time or are following along at home. It won't be covered during the hands-on lab."})}),"\n",(0,i.jsxs)(n.p,{children:["Aggregation pipelines can get very long, depending on how many stages we need to run. Writing a pipeline is writing code, as you will write it using one of the many MongoDB drivers in your own language. Here we're presenting the examples using JavaScript suitable for the MongoDB shell ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/mongodb-shell/",children:"mongosh"}),", but if you are writing a microservice in Rust, you'll definitely write your pipelines in Rust."]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["The following syntax doesn't work in the Atlas UI aggregations editor. The editor doesn't support declaring variables. You can try this using the built-in MongoDB Shell in ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/products/tools/compass",children:"MongoDB Compass"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"This is why we should rewrite our last pipeline like this:"}),"\n",(0,i.jsxs)(n.p,{children:["Get 15 books from 1985 with less than 150 pages. Show only the ",(0,i.jsx)(n.code,{children:"title"}),", ",(0,i.jsx)(n.code,{children:"year"}),", ",(0,i.jsx)(n.code,{children:"totalInventory"}),", and ",(0,i.jsx)(n.code,{children:"available"})," books (sample doc ",(0,i.jsx)(n.a,{href:"/docs/simple-queries/project",children:"here"}),")."]}),"\n",(0,i.jsx)(a.Z,{groupId:"aggregations",children:(0,i.jsxs)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n    { $match: {year: 1985, pages: { $lt: 150 } } }, \n    { $project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1} }, \n    { $limit: 15 }\n])\n"})}),(0,i.jsx)(n.p,{children:"Will be changed into:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let lessThan150 = { $lt: 150 };\nlet booksFrom1985With150pages = {$match: {year: 1985, pages: lessThan150 }};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}};\nlet getJust15books =  {$limit: 15};\n\ndb.books.aggregate([\n    booksFrom1985With150pages,\n    showOnlyTheseFields,\n    getJust15books,\n]);\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:"Easier to read and understand, right?"}),"\n",(0,i.jsx)(n.p,{children:"\uD83D\uDC50 Try to run the above pipeline and compare your results. They should be the same as before."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Write your aggregation pipelines like you'll compose functions in your programming language. Aggregations ",(0,i.jsx)(n.em,{children:"are"})," code that runs on the server. In the client, you just express ",(0,i.jsx)(n.em,{children:"what"})," you want to be done, not ",(0,i.jsx)(n.em,{children:"how"})," to do it."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["As this is code, we can even add comments (starting with ",(0,i.jsx)(n.code,{children:"//"}),") to our pipelines. Or write functions that take parameters and return a stage. Or unit test our stages."]})}),"\n",(0,i.jsxs)(n.p,{children:["\uD83D\uDC50 We can also use ",(0,i.jsx)(n.code,{children:"$gte"})," to get the books with 150 pages or more. Check $gte syntax in the ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/query/gte/",children:"docucumentation"})," and write an aggregation pipeline to return 15 books from 1985 with more than 150 pages. Show only the ",(0,i.jsx)(n.code,{children:"title"}),", ",(0,i.jsx)(n.code,{children:"year"}),", ",(0,i.jsx)(n.code,{children:"totalInventory"}),", and ",(0,i.jsx)(n.code,{children:"available"})," books (sample doc ",(0,i.jsx)(n.a,{href:"/docs/simple-queries/project",children:"here"}),")."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Answer"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let moreThan150pages =  {pages: {$gte: 150}}\nlet booksFrom1985WithMoreThan150pages = {$match: {$and: [{year: 1985}, moreThan150pages]}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}};\nlet getJust15books =  {$limit: 15};\n\ndb.books.aggregate([\n    booksFrom1985WithMoreThan150pages,\n    showOnlyTheseFields,\n    getJust15books,\n]);\n"})})})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7645:function(e,n,t){t.d(n,{Z:()=>o});var r=t("5893");t("7294");var i=t("4904");function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",o),hidden:t,children:n})}},8168:function(e,n,t){t.d(n,{Z:()=>x});var r=t("5893"),i=t("7294"),o=t("4904"),a=t("4718"),s=t("6550"),l=t("8714"),u=t("9207"),c=t("9413"),d=t("4510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var g=t("6735");function m(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{let n=e.currentTarget,t=l[u.indexOf(n)].value;t!==i&&(c(n),s(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...a,className:(0,o.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function f(e){let{lazy:n,children:t,selectedValue:a}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,o=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,g]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:o})),[m,f]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,i.useCallback)(e=>{if(!o)return;let n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})},[o,r])]}({queryString:t,groupId:r}),[b,x]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,o]=(0,d.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&o.set(e)},[t,o])]}({groupId:r}),y=(()=>{let e=m??b;return p({value:e,tabValues:o})?e:null})();return(0,l.Z)(()=>{y&&g(y)},[y]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),x(e)},[f,x,o]),tabValues:o}}(e);return(0,r.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(m,{...n,...e}),(0,r.jsx)(f,{...n,...e})]})}function x(e){let n=(0,g.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(n))}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var r=t(7294);let i={},o=r.createContext(i);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);