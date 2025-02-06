"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["8270"],{8219:function(e,n,t){t.r(n),t.d(n,{default:()=>b,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>u});var a=JSON.parse('{"id":"using-arrays/search-inside-objects-in-arrays","title":"\uD83D\uDC50 Searching inside Objects in arrays","description":"In our books, we\'re using the Attribute Pattern to have different attributes in our documents. As we can see in the sample doc, we have an attributes array, containing several objects, each with the same structure:","source":"@site/docs/40-using-arrays/40-search-inside-objects-in-arrays.mdx","sourceDirName":"40-using-arrays","slug":"/using-arrays/search-inside-objects-in-arrays","permalink":"/aggregation-pipeline-lab/zh/docs/using-arrays/search-inside-objects-in-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/40-using-arrays/40-search-inside-objects-in-arrays.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 Simple arrays","permalink":"/aggregation-pipeline-lab/zh/docs/using-arrays/simple-match-array"},"next":{"title":"\uD83E\uDDB8 Size of an array","permalink":"/aggregation-pipeline-lab/zh/docs/using-arrays/array-sizes"}}'),r=t("5893"),s=t("65"),i=t("8168"),l=t("7645");let o={},u="\uD83D\uDC50 Searching inside Objects in arrays",c={},d=[{value:"Matching object fields, the simplest way",id:"matching-object-fields-the-simplest-way",level:2},{value:"$unwind",id:"unwind",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-searching-inside-objects-in-arrays",children:"\uD83D\uDC50 Searching inside Objects in arrays"})}),"\n",(0,r.jsxs)(n.p,{children:["In our books, we're using the ",(0,r.jsx)(n.a,{href:"https://www.mongodb.com/developer/products/mongodb/attribute-pattern/",children:"Attribute Pattern"})," to have different attributes in our documents. As we can see in the ",(0,r.jsx)(n.a,{href:"/docs/simple-queries/project",children:"sample doc"}),", we have an ",(0,r.jsx)(n.code,{children:"attributes"})," array, containing several objects, each with the same structure:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"attributes: [\n  {\n    key: 'edition',\n    value: '1st'\n  },\n  {\n    key: 'dimensions',\n    value: 'Height: 1.111 Inches, Length: 1.111 Inches, Weight: 0.2 Pounds, Width: 1.111 Inches'\n  },\n  {\n    key: 'isbn13',\n    value: '9780765342508'\n  },\n  {\n    key: 'msrp',\n    value: 6.99\n  },\n  {\n    key: 'isbn',\n    value: '0765342502'\n  },\n  {\n    key: 'isbn10',\n    value: '0765342502'\n  }\n],\n"})}),"\n",(0,r.jsx)(n.h2,{id:"matching-object-fields-the-simplest-way",children:"Matching object fields, the simplest way"}),"\n",(0,r.jsxs)(n.p,{children:["How do we search for all the books that have an msrp of 9.99? We want books that, inside ",(0,r.jsx)(n.code,{children:"attributes"}),", have an object with key ",(0,r.jsx)(n.code,{children:"msrp"})," and value ",(0,r.jsx)(n.code,{children:"9.99"}),"?"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"aggregations",children:[(0,r.jsx)(l.Z,{value:"atlas",label:"Atlas UI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'[\n  { $match: {"attributes.key": "msrp", "attributes.value": 9.99} },\n  { $project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1, "attributes": 1} }\n]\n'})})}),(0,r.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  { $match: {"attributes.key": "msrp", "attributes.value": 9.99} },\n  { $project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1, "attributes": 1} }\n]);\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"Above example is using the shorthand $and operator, that we can also explicitly write:"}),"\n",(0,r.jsxs)(i.Z,{groupId:"aggregations",children:[(0,r.jsx)(l.Z,{value:"atlas",label:"Atlas UI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'[ \n  { $match: { $and: [{"attributes.key": "msrp", "attributes.value": 9.99}] } },\n  { $project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1, "attributes": 1} }\n]\n'})})}),(0,r.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([ \n  { $match: {$and: [{"attributes.key": "msrp", "attributes.value": 9.99}]} },\n  { $project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1, "attributes": 1} }\n]);\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Find all the books with an MSPR of 9.99 and that have been reprinted (hint: ",(0,r.jsx)(n.code,{children:"edition"})," is ",(0,r.jsx)(n.code,{children:"Reprint"}),")"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsxs)(i.Z,{groupId:"aggregations",children:[(0,r.jsx)(l.Z,{value:"atlas",label:"Atlas UI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'[\n  { $match: \n    {$and: [\n      {"attributes.key": "msrp", "attributes.value": 9.99}, \n      {"attributes.key": "edition", "attributes.value": "Reprint"}] \n    }\n  },\n  { $project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1, "attributes": 1} }\n]\n'})})}),(0,r.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  { $match: \n    {$and: [\n      {"attributes.key": "msrp", "attributes.value": 9.99}, \n      {"attributes.key": "edition", "attributes.value": "Reprint"}] \n    }\n  },\n  { $project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1, "attributes": 1} }\n]);\n'})})})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"unwind",children:"$unwind"}),"\n",(0,r.jsx)(n.p,{children:"This is OK, but we get all attributes, although we're only interested in the MSRP!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  "_id": "0002005018",\n  "title": "Clara Callan: A novel",\n  "attributes": [\n    {\n      "key": "edition",\n      "value": "1st"\n    },\n    {\n      "key": "dimensions",\n      "value": "Height: 11.11 Inches, Length: 6.11 Inches, Weight: 1 Pounds, Width: 1.11 Inches"\n    },\n    {\n      "key": "isbn13",\n      "value": "9780002005012"\n    },\n    {\n      "key": "msrp",\n      "value": "0.00"\n    },\n    {\n      "key": "isbn",\n      "value": "0002005018"\n    },\n    {\n      "key": "isbn10",\n      "value": "0002005018"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To improve, we'll use ",(0,r.jsx)(n.code,{children:"$unwind"}),":"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"aggregations",children:[(0,r.jsx)(l.Z,{value:"atlas",label:"Atlas UI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'[\n  { $unwind : "$attributes" },\n  { $match: {"attributes.key": "msrp", "attributes.value": 9.99} },\n  { $project: {title: 1, attributes: 1} }\n]\n'})})}),(0,r.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  { $unwind : "$attributes" },\n  { $match: {"attributes.key": "msrp", "attributes.value": 9.99} },\n  { $project: {title: 1, attributes: 1} }\n]);\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Here we're getting a copy of each book for each object inside the ",(0,r.jsx)(n.code,{children:"$attributes"}),' array. This "flattens" the array and returns many copies of the same documents, one for each different attribute that we have.']}),"\n",(0,r.jsxs)(n.p,{children:["\uD83D\uDC50 To better understand ",(0,r.jsx)(n.code,{children:"$unwind"}),", run this aggregation."]}),"\n",(0,r.jsxs)(i.Z,{groupId:"aggregations",children:[(0,r.jsxs)(l.Z,{value:"atlas",label:"Atlas UI",children:[(0,r.jsxs)(n.p,{children:["You need to select the ",(0,r.jsx)(n.code,{children:"books"})," collection."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'[\n  { $match: {_id: "0395623650"} },\n  { $unwind : "$attributes" },\n]\n'})})]}),(0,r.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  { $match: {_id: "0395623650"} },\n  { $unwind : "$attributes" },\n]);\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"You should get one document per attribute of the original book. All fields in these returned documents should be the same, except the ones in attributes."})]})}function b(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7645:function(e,n,t){t.d(n,{Z:()=>s});var a=t("5893");t("7294");var r=t("4904");function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},8168:function(e,n,t){t.d(n,{Z:()=>v});var a=t("5893"),r=t("7294"),s=t("4904"),i=t("4718"),l=t("6550"),o=t("8714"),u=t("9207"),c=t("9413"),d=t("4510");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function b(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("6735");function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=o[u.indexOf(n)].value;t!==r&&(c(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function m(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,s=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:s})),[g,m]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(s),(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})},[s,a])]}({queryString:t,groupId:a}),[j,v]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:a}),f=(()=>{let e=g??j;return b({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{f&&p(f)},[f]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!b({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),m(e),v(e)},[m,v,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(g,{...n,...e}),(0,a.jsx)(m,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,a.jsx)(j,{...e,children:h(e.children)},String(n))}},65:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(7294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);