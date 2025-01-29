"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["4405"],{7322:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>u,contentTitle:()=>c});var t=JSON.parse('{"id":"simple-queries/project","title":"\uD83D\uDC50 $project","description":"Including fields in a projection","source":"@site/docs/30-simple-queries/3-project.mdx","sourceDirName":"30-simple-queries","slug":"/simple-queries/project","permalink":"/aggregation-pipeline-lab/docs/simple-queries/project","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/3-project.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 $match","permalink":"/aggregation-pipeline-lab/docs/simple-queries/match"},"next":{"title":"\uD83D\uDC50 $limit","permalink":"/aggregation-pipeline-lab/docs/simple-queries/limiting-results"}}'),l=i("5893"),r=i("65"),a=i("8168"),s=i("7645");let o={},c="\uD83D\uDC50 $project",d={},u=[{value:"Including fields in a projection",id:"including-fields-in-a-projection",level:2},{value:"Excluding fields",id:"excluding-fields",level:2},{value:"Including and excluding fields",id:"including-and-excluding-fields",level:2}];function h(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"-project",children:"\uD83D\uDC50 $project"})}),"\n",(0,l.jsx)(n.h2,{id:"including-fields-in-a-projection",children:"Including fields in a projection"}),"\n",(0,l.jsxs)(n.p,{children:["A document from the ",(0,l.jsx)(n.code,{children:"books"})," collection looks like:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"{\n  _id: '0395623650',\n  title: 'Platero y yo / Platero and I (Spanish-English Bilingual Edition) (English and Spanish Edition)',\n  authors: [\n    {\n      _id: '64cc2db4830ba29148db5180',\n      name: 'Juan Ram\xf3n Jim\xe9nez'\n    }\n  ],\n  pages: 64,\n  year: 1994,\n  synopsis: 'Selections from a classic of world literature present a picture of life in the town of Moguer, in Andalusia, Spain.\\n' +\n    '\\n' +\n    '\\n' +\n    '                        Presents a picture of life in the town of Moguer, in Andalusia, Spain, as seen through the eyes of a wandering poet and his faithful donkey.\\n',\n  cover: 'https://images.isbndb.com/covers/36/57/9780395623657.jpg',\n  attributes: [\n    {\n      key: 'edition',\n      value: 'F First Edition Thus'\n    },\n    {\n      key: 'dimensions',\n      value: 'Height: 10.499979 Inches, Length: 6.999986 Inches, Weight: 2.0502990366 Pounds, Width: 0.12499975 Inches'\n    },\n    {\n      key: 'isbn13',\n      value: '9780395623657'\n    },\n    {\n      key: 'msrp',\n      value: 1.99\n    },\n    {\n      key: 'isbn',\n      value: '0395623650'\n    },\n    {\n      key: 'isbn10',\n      value: '0395623650'\n    }\n  ],\n  totalInventory: 1,\n  available: 1,\n  binding: 'Hardcover',\n  language: 'en',\n  longTitle: 'Platero y yo / Platero and I (Spanish-English Bilingual Edition) (English and Spanish Edition)',\n  publisher: 'Clarion Books'\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If we're interested in the titles, we can use ",(0,l.jsx)(n.code,{children:"$project"})," to select just the fields we're interested in. As an example, to get just the book's title and year, we'll write:"]}),"\n",(0,l.jsxs)(a.Z,{groupId:"aggregations",children:[(0,l.jsx)(s.Z,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: { title: 1, year: 1 }\n  }\n]\n"})})}),(0,l.jsx)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n  {\n    $project: { title: 1, year: 1 }\n  }\n])\n"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'1 means "show that field.". Once you started an inclusion projection you can\'t exclude other fields (you just keep adding the fields you want to see)'}),"\n",(0,l.jsx)(n.li,{children:"0 means \"hide that field.\". Once you started an exclusion projection you can't include other fields (you just keep adding the fields you don't want to see)"}),"\n",(0,l.jsxs)(n.li,{children:["The primary key ",(0,l.jsx)(n.code,{children:"_id"})," field is shown by default."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["So we can exclude fields and show all fields except ",(0,l.jsx)(n.code,{children:"attributes"})," using:"]}),"\n",(0,l.jsxs)(a.Z,{groupId:"aggregations",children:[(0,l.jsx)(s.Z,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: { attributes: 0 }\n  }\n]\n"})})}),(0,l.jsx)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n  {\n    $project: { attributes: 0 }\n  }\n])\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\uD83D\uDC50 Show only ",(0,l.jsx)(n.code,{children:"title"})," and ",(0,l.jsx)(n.code,{children:"cover"}),"."]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"Answer"}),(0,l.jsx)("div",{children:(0,l.jsxs)(a.Z,{groupId:"aggregations",children:[(0,l.jsx)(s.Z,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: { title: 1, cover: 1 }\n  }\n]\n"})})}),(0,l.jsx)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n  {\n    $project: { title: 1, cover: 1 }\n  }\n])\n"})})})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"excluding-fields",children:"Excluding fields"}),"\n",(0,l.jsxs)(n.p,{children:["\uD83D\uDC50 Exclude the ",(0,l.jsx)(n.code,{children:"cover"}),", ",(0,l.jsx)(n.code,{children:"attributes"}),", and ",(0,l.jsx)(n.code,{children:"_id"})," fields from the result."]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"Answer"}),(0,l.jsx)("div",{children:(0,l.jsxs)(a.Z,{groupId:"aggregations",children:[(0,l.jsx)(s.Z,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: {_id: 0, attributes: 0, cover: 0}\n  }\n]\n"})})}),(0,l.jsx)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$project: {_id: 0, attributes: 0, cover: 0}}])\n"})})})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"including-and-excluding-fields",children:"Including and excluding fields"}),"\n",(0,l.jsx)(n.admonition,{type:"danger",children:(0,l.jsx)(n.p,{children:"You can't include and exclude fields in the same projection. If you start including, you must keep including, and vice versa."})}),"\n",(0,l.jsx)(n.p,{children:"For instance, this will fail:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$project: {title: 1, attributes: 0}}])\n\nMongoServerError: Invalid $project :: caused by :: Cannot do exclusion on field attributes in inclusion projection\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["The only exception to this rule is the ",(0,l.jsx)(n.code,{children:"_id"})," field, which we can exclude in an inclusion projection."]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$project: {title: 1, _id: 0}}])\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7645:function(e,n,i){i.d(n,{Z:()=>r});var t=i("5893");i("7294");var l=i("4904");function r(e){let{children:n,hidden:i,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)("tabItem_Ymn6",r),hidden:i,children:n})}},8168:function(e,n,i){i.d(n,{Z:()=>x});var t=i("5893"),l=i("7294"),r=i("4904"),a=i("4718"),s=i("6550"),o=i("8714"),c=i("9207"),d=i("9413"),u=i("4510");function h(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:i}=e;return i.some(e=>e.value===n)}var g=i("6735");function j(e){let{className:n,block:i,selectedValue:l,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),u=e=>{let n=e.currentTarget,i=o[c.indexOf(n)].value;i!==l&&(d(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{let i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},n),children:o.map(e=>{let{value:n,label:i,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...a,className:(0,r.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":l===n}),children:i??n},n)})})}function f(e){let{lazy:n,children:i,selectedValue:a}=e,s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===a);return e?(0,l.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function m(e){let n=function(e){let{defaultValue:n,queryString:i=!1,groupId:t}=e,r=function(e){let{values:n,children:i}=e;return(0,l.useMemo)(()=>{let e=n??h(i).map(e=>{let{props:{value:n,label:i,attributes:t,default:l}}=e;return{value:n,label:i,attributes:t,default:l}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,i])}(e),[a,g]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=i.find(e=>e.default)??i[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:r})),[j,f]=function(e){let{queryString:n=!1,groupId:i}=e,t=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c._X)(r),(0,l.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})},[r,t])]}({queryString:i,groupId:t}),[m,x]=function(e){let{groupId:n}=e,i=n?`docusaurus.tab.${n}`:null,[t,r]=(0,u.Nk)(i);return[t,(0,l.useCallback)(e=>{i&&r.set(e)},[i,r])]}({groupId:t}),b=(()=>{let e=j??m;return p({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{b&&g(b)},[b]),{selectedValue:a,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),x(e)},[f,x,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(j,{...n,...e}),(0,t.jsx)(f,{...n,...e})]})}function x(e){let n=(0,g.Z)();return(0,t.jsx)(m,{...e,children:h(e.children)},String(n))}},65:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return a}});var t=i(7294);let l={},r=t.createContext(l);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);