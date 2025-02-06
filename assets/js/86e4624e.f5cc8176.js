"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["4182"],{4596:function(e,n,r){r.r(n),r.d(n,{default:()=>g,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>u});var a=JSON.parse('{"id":"using-arrays/array-sizes","title":"\uD83E\uDDB8 Size of an array","description":"What if we want to know how many aliases an author has? To do that, we can use $size, adding the array field that we\'re interested in:","source":"@site/docs/40-using-arrays/80-array-sizes.mdx","sourceDirName":"40-using-arrays","slug":"/using-arrays/array-sizes","permalink":"/aggregation-pipeline-lab/docs/using-arrays/array-sizes","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/40-using-arrays/80-array-sizes.mdx","tags":[],"version":"current","sidebarPosition":80,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 Searching inside Objects in arrays","permalink":"/aggregation-pipeline-lab/docs/using-arrays/search-inside-objects-in-arrays"},"next":{"title":"Counting and Sorting","permalink":"/aggregation-pipeline-lab/docs/category/counting-and-sorting"}}'),t=r("5893"),s=r("65"),o=r("8168"),l=r("7645");let i={},u="\uD83E\uDDB8 Size of an array",c={},d=[];function h(e){let n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-size-of-an-array",children:"\uD83E\uDDB8 Size of an array"})}),"\n",(0,t.jsxs)(n.p,{children:["What if we want to know how many aliases an author has? To do that, we can use ",(0,t.jsx)(n.code,{children:"$size"}),", adding the array field that we're interested in:"]}),"\n",(0,t.jsxs)(o.Z,{groupId:"aggregations",children:[(0,t.jsx)(l.Z,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'[\n  { $project: {\n      name: 1,\n      bookCount: {$size: "$books"}\n    }\n  },\n]\n'})})}),(0,t.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'db.authors.aggregate([\n  { $project: {\n      name: 1,\n      bookCount: {$size: "$books"}\n    }\n  },\n])\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\uD83D\uDC50 Who wrote the most books? (We can sort using ",(0,t.jsx)(n.code,{children:'{ $sort: {"bookCount": -1}}'}),".)"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsxs)(o.Z,{groupId:"aggregations",children:[(0,t.jsx)(l.Z,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'[\n  {\n    $project: {\n        name: 1,\n        bookCount: {$size: "$books"}\n    }\n  },\n  { $sort: {"bookCount": -1} },\n  { $limit: 1 }\n]\n'})})}),(0,t.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let addNumberBooks = {\n  $project: {\n      name: 1,\n      bookCount: {$size: "$books"}\n  }\n}\n\nlet orderByNumberOfBooksDesc = { $sort: {"bookCount": -1} }\n\nlet getOne = { $limit: 1 }\n\ndb.authors.aggregate([\n  addNumberBooks,\n  orderByNumberOfBooksDesc,\n  getOne,\n])\n'})})})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["\uD83D\uDC50 Find books with exactly three genres (We can $match using ",(0,t.jsx)(n.code,{children:'{ {"bookCount": -1}}'}),".)"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsxs)(o.Z,{groupId:"aggregations",children:[(0,t.jsx)(l.Z,{value:"atlas",label:"Atlas UI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n  { \n      $match: { \n      genres: {$size: 3 } \n      } \n  },\n  {$project: {\n      title: 1,\n      genres: 1\n  }}\n]\n"})})}),(0,t.jsx)(l.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n  { \n      $match: { \n      genres: {$size: 3 } \n      } \n  },\n  {$project: {\n      title: 1,\n      genres: 1\n  }}\n])\n"})})})]})})]})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7645:function(e,n,r){r.d(n,{Z:()=>s});var a=r("5893");r("7294");var t=r("4904");function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",s),hidden:r,children:n})}},8168:function(e,n,r){r.d(n,{Z:()=>j});var a=r("5893"),t=r("7294"),s=r("4904"),o=r("4718"),l=r("6550"),i=r("8714"),u=r("9207"),c=r("9413"),d=r("4510");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("6735");function m(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{let n=e.currentTarget,r=i[u.indexOf(n)].value;r!==t&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:i.map(e=>{let{value:n,label:r,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...o,className:(0,s.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:o}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===o);return e?(0,t.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:a}=e,s=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[o,p]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:s})),[m,f]=function(e){let{queryString:n=!1,groupId:r}=e,a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(s),(0,t.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})},[s,a])]}({queryString:r,groupId:a}),[b,j]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[a,s]=(0,d.Nk)(r);return[a,(0,t.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:a}),x=(()=>{let e=m??b;return g({value:e,tabValues:s})?e:null})();return(0,i.Z)(()=>{x&&p(x)},[x]),{selectedValue:o,selectValue:(0,t.useCallback)(e=>{if(!g({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),j(e)},[f,j,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(m,{...n,...e}),(0,a.jsx)(f,{...n,...e})]})}function j(e){let n=(0,p.Z)();return(0,a.jsx)(b,{...e,children:h(e.children)},String(n))}},65:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var a=r(7294);let t={},s=a.createContext(t);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);