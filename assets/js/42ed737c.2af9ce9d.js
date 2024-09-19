"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[9882],{7232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(4848),r=n(8453),o=n(1470),l=n(9365);const s={},i="\ud83e\uddb8 Saving to a Collection",c={id:"exporting-data/saving-to-collection",title:"\ud83e\uddb8 Saving to a Collection",description:"You can export the result of an aggregation pipeline to a different DB/collection. To do that, just add a last aggregation stage to your pipeline:",source:"@site/docs/90-exporting-data/saving-to-collection.mdx",sourceDirName:"90-exporting-data",slug:"/exporting-data/saving-to-collection",permalink:"/aggregation-pipeline-lab/docs/exporting-data/saving-to-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/90-exporting-data/saving-to-collection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exporting Data",permalink:"/aggregation-pipeline-lab/docs/category/exporting-data"},next:{title:"\ud83d\udcd8 Lecture material",permalink:"/aggregation-pipeline-lab/docs/lecture-material"}},u={},d=[];function p(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-saving-to-a-collection",children:"\ud83e\uddb8 Saving to a Collection"})}),"\n",(0,a.jsx)(t.p,{children:"You can export the result of an aggregation pipeline to a different DB/collection. To do that, just add a last aggregation stage to your pipeline:"}),"\n",(0,a.jsxs)(o.A,{groupId:"aggregations",children:[(0,a.jsxs)(l.A,{value:"atlas",label:"Atlas UI",children:[(0,a.jsx)(t.p,{children:"Run this from the source collection"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'[{ $out: { db: "<output-db>", coll: "<output-collection>" } }]\n'})})]}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'db.sourceCollection.aggregate[{ $out: { db: "<output-db>", coll: "<output-collection>" } }]\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["You can omit the ",(0,a.jsx)(t.code,{children:"db"})," attribute, and the new collection will be created in the current DB."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'{ $out: "<output-collection>" }\n'})}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udc50 Create a copy of the books with exactly 100 pages and output as a new collection named ",(0,a.jsx)(t.code,{children:"OneHundredPagesBooks"}),"."]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.A,{groupId:"aggregations",children:[(0,a.jsx)(l.A,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'[\n    {$match: {pages: 100}},\n    {$out: "OneHundredPagesBooks"}\n]\n'})})}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'let oneHundredPagesBooks = {$match: {pages: 100}};\nlet saveToNewCollection = {$out: "OneHundredPagesBooks"}\n\ndb.books.aggregate([\n    oneHundredPagesBooks,\n    saveToNewCollection\n]);\n'})})})]}),(0,a.jsx)(t.p,{children:"After running this, we should see a new collection with:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"show collections\n"})})]})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(8215);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(6540),r=n(8215),o=n(3104),l=n(6347),s=n(205),i=n(7485),c=n(1682),u=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,d]=h({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=c??b;return g({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=s[n].value;r!==a&&(c(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);