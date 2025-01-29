"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["6553"],{4724:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>l,assets:()=>d,toc:()=>h,contentTitle:()=>c});var l=JSON.parse('{"id":"simple-queries/match","title":"\uD83D\uDC50 $match","description":"$match \u64CD\u4F5C\u7B26\u4E0E\u805A\u5408\u6846\u67B6\u4E00\u8D77\u4F7F\u7528\uFF0C\u7528\u4E8E\u8FC7\u6EE4\u96C6\u5408\u4E2D\u7684\u6587\u6863\u3002\u5B83\u63A5\u53D7\u4E00\u4E2A\u6587\u6863\u4F5C\u4E3A\u8F93\u5165\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6587\u6863\uFF0C\u4EC5\u5305\u542B\u7B26\u5408\u6307\u5B9A\u6761\u4EF6\u7684\u6587\u6863\u3002$match \u64CD\u4F5C\u7B26\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/30-simple-queries/2-match.mdx","sourceDirName":"30-simple-queries","slug":"/simple-queries/match","permalink":"/aggregation-pipeline-lab/zh/docs/simple-queries/match","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/2-match.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 \u7A7A\u805A\u5408\u7BA1\u9053","permalink":"/aggregation-pipeline-lab/zh/docs/simple-queries/empty-aggregation"},"next":{"title":"\uD83D\uDC50 $project","permalink":"/aggregation-pipeline-lab/zh/docs/simple-queries/project"}}'),a=r("5893"),s=r("65"),t=r("8168"),i=r("7645");let o={},c="\uD83D\uDC50 $match",d={},h=[{value:"\u8868\u8FBE\u5F0F",id:"\u8868\u8FBE\u5F0F",level:2},{value:"\u5339\u914D\u4E66\u7C4D\u6587\u6863",id:"\u5339\u914D\u4E66\u7C4D\u6587\u6863",level:2},{value:"AND",id:"and",level:2},{value:"\u7B80\u5199 AND",id:"\u7B80\u5199-and",level:3}];function u(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:r,Screenshot:l}=n;return r||g("Details",!0),l||g("Screenshot",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-match",children:"\uD83D\uDC50 $match"})}),"\n",(0,a.jsx)(n.p,{children:"$match \u64CD\u4F5C\u7B26\u4E0E\u805A\u5408\u6846\u67B6\u4E00\u8D77\u4F7F\u7528\uFF0C\u7528\u4E8E\u8FC7\u6EE4\u96C6\u5408\u4E2D\u7684\u6587\u6863\u3002\u5B83\u63A5\u53D7\u4E00\u4E2A\u6587\u6863\u4F5C\u4E3A\u8F93\u5165\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6587\u6863\uFF0C\u4EC5\u5305\u542B\u7B26\u5408\u6307\u5B9A\u6761\u4EF6\u7684\u6587\u6863\u3002$match \u64CD\u4F5C\u7B26\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"{ $match: { <expression>: <value> } }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8868\u8FBE\u5F0F",children:"\u8868\u8FBE\u5F0F"}),"\n",(0,a.jsxs)(n.p,{children:["$match \u64CD\u4F5C\u7B26\u4E2D\u7684 ",(0,a.jsx)(n.code,{children:"<expression>"})," \u90E8\u5206\u53EF\u4EE5\u662F\u4EFB\u4F55\u6709\u6548\u7684 MongoDB \u8868\u8FBE\u5F0F\u3002\u8FD9\u5305\u62EC\uFF1A"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u6BD4\u8F83\u64CD\u4F5C\u7B26\uFF1A",(0,a.jsx)(n.code,{children:"eq"}),"\u3001",(0,a.jsx)(n.code,{children:"neq"}),"\u3001",(0,a.jsx)(n.code,{children:"gte"}),"\u3001",(0,a.jsx)(n.code,{children:"lte"}),"\u3001",(0,a.jsx)(n.code,{children:"gt"}),"\u3001",(0,a.jsx)(n.code,{children:"lt"}),"\u3001",(0,a.jsx)(n.code,{children:"in"}),"\u3001",(0,a.jsx)(n.code,{children:"nin"}),"\u3001",(0,a.jsx)(n.code,{children:"exists"})]}),"\n",(0,a.jsxs)(n.li,{children:["\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A",(0,a.jsx)(n.code,{children:"regex"})]}),"\n",(0,a.jsxs)(n.li,{children:["\u903B\u8F91\u64CD\u4F5C\u7B26\uFF1A",(0,a.jsx)(n.code,{children:"and"}),"\u3001",(0,a.jsx)(n.code,{children:"or"}),"\u3001",(0,a.jsx)(n.code,{children:"not"})]}),"\n",(0,a.jsxs)(n.li,{children:["\u5B50\u6587\u6863\u548C\u6570\u7EC4\uFF1A",(0,a.jsx)(n.code,{children:"{ field: <value> }, [ <item>, <item>, ... ]"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5339\u914D\u4E66\u7C4D\u6587\u6863",children:"\u5339\u914D\u4E66\u7C4D\u6587\u6863"}),"\n",(0,a.jsxs)(t.Z,{groupId:"aggregations-year",children:[(0,a.jsxs)(i.Z,{value:"atlas",label:"Atlas UI",children:[(0,a.jsxs)(n.p,{children:["\u9996\u5148\uFF0C\u786E\u4FDD\u5728 Atlas UI \u4E2D\u9009\u62E9 ",(0,a.jsx)(n.code,{children:"books"})," \u96C6\u5408\u3002"]}),(0,a.jsx)(l,{src:"/img/30-simple-queries/select-books-collection.png",url:"http://cloud.mongodb.com/",alt:"Atlas UI \u6570\u636E\u5E93\u90E8\u7F72\uFF0C\u7A81\u51FA\u663E\u793A books \u96C6\u5408\u3002"}),(0,a.jsxs)(n.p,{children:["\u7136\u540E\uFF0C\u5BFC\u822A\u5230 ",(0,a.jsx)(n.code,{children:"Aggregation"})," \u9009\u9879\u5361\u5E76\u70B9\u51FB ",(0,a.jsx)(n.code,{children:"Add Stage"}),"\u3002"]}),(0,a.jsx)(l,{src:"/img/30-simple-queries/new-aggregation.png",url:"http://cloud.mongodb.com/",alt:"Atlas UI \u6570\u636E\u5E93\u90E8\u7F72\uFF0C\u7A81\u51FA\u663E\u793A\u805A\u5408\u9009\u9879\u5361\u3002"}),(0,a.jsxs)(n.p,{children:["\u5047\u8BBE\u6211\u4EEC\u60F3\u8981\u6240\u6709 2010 \u5E74\u7684\u4E66\u7C4D\u3002\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A ",(0,a.jsx)(n.code,{children:"$match"})," \u9636\u6BB5\u6765\u8FC7\u6EE4 books \u96C6\u5408\u4E2D\u7684\u6587\u6863\uFF1A"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[\n    {\n        $match: { year: 2010 }\n    }\n]\n"})}),(0,a.jsx)(l,{src:"/img/30-simple-queries/match-screenshot.png",url:"http://cloud.mongodb.com/",alt:"Atlas AI $match \u805A\u5408\u3002"})]}),(0,a.jsxs)(i.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:[(0,a.jsx)(n.p,{children:"\u5047\u8BBE\u6211\u4EEC\u60F3\u8981\u6240\u6709 2010 \u5E74\u7684\u4E66\u7C4D\u3002\u6211\u4EEC\u4F1A\u5199\uFF1A"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"db.books.aggregate([{$match: {year: 2010}}])\n"})})]})]}),"\n",(0,a.jsxs)(n.p,{children:["\uD83D\uDC50 \u8FD4\u56DE\u6240\u6709\u6709\u6070\u597D 100 \u9875\u7684 ",(0,a.jsx)(n.code,{children:"books"}),"\u3002"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"\u7B54\u6848"}),(0,a.jsx)("div",{children:(0,a.jsxs)(t.Z,{groupId:"aggregations-pages",children:[(0,a.jsx)(i.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[\n    {\n        $match: { pages: 100 }\n    }\n]\n"})})}),(0,a.jsx)(i.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"db.books.aggregate([{$match: {pages: 100}}])\n"})})})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"and",children:"AND"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u6211\u4EEC\u9700\u8981\u4F7F\u7528 AND \u6DFB\u52A0\u66F4\u591A\u6761\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"$and"})," \u64CD\u4F5C\u7B26\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u6211\u4EEC\u60F3\u8981\u6240\u6709\u6709 100 \u9875\u5E76\u4E14 ",(0,a.jsx)(n.code,{children:"totalInventory"})," \u6070\u597D\u4E3A 2 \u7684\u4E66\u7C4D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"$and"})," \u64CD\u4F5C\u7B26\u3002\u8FD9\u4E2A\u64CD\u4F5C\u7B26\u63A5\u53D7\u4E00\u4E2A\u5305\u542B\u6240\u6709\u6761\u4EF6\u7684\u6587\u6863\u6570\u7EC4\uFF0C\u8FD9\u4E9B\u6761\u4EF6\u90FD\u5FC5\u987B\u4E3A\u771F\uFF0CAND \u64CD\u4F5C\u624D\u4F1A\u6210\u529F\uFF1A"]}),"\n",(0,a.jsxs)(t.Z,{groupId:"aggregations-and",children:[(0,a.jsx)(i.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { totalInventory: 2 }\n            ]\n        }\n    }\n]\n"})})}),(0,a.jsx)(i.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {totalInventory: 2}]}}])\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"IF pages == 100 AND totalInventory == 2 {\nreturn matching docs\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\uD83D\uDC50 \u8FD4\u56DE\u6240\u6709 2015 \u5E74\u7684 ",(0,a.jsx)(n.code,{children:"books"}),"\uFF0C\u8FD9\u4E9B\u4E66\u7C4D\u6070\u597D\u6709 100 \u9875\u3002"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"\u7B54\u6848"}),(0,a.jsx)("div",{children:(0,a.jsxs)(t.Z,{groupId:"aggregations",children:[(0,a.jsx)(i.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { year: 2015 }\n            ]\n        }\n    }\n]\n"})})}),(0,a.jsx)(i.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}])\n"})})})]})})]}),"\n",(0,a.jsx)(n.p,{children:"\uD83D\uDC50 \u5B83\u4EEC\u6709\u591A\u5C11\uFF1F"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"\u7B54\u6848"}),(0,a.jsx)("div",{children:(0,a.jsxs)(t.Z,{groupId:"aggregations",children:[(0,a.jsx)(i.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { year: 2015 }\n            ]\n        }\n    },\n    {\n        $count: "books_count"\n    }\n]\n'})})}),(0,a.jsx)(i.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}]).itcount()\n"})})})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u7B80\u5199-and",children:"\u7B80\u5199 AND"}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012\u5305\u542B\u6240\u6709\u6761\u4EF6\u7684\u6587\u6863\u6765\u8FDB\u884C\u9690\u5F0F AND\uFF08\u800C\u4E0D\u662F\u6587\u6863\u6570\u7EC4\uFF09\uFF1A"}),"\n",(0,a.jsxs)(t.Z,{groupId:"aggregations-shorthand-and",children:[(0,a.jsx)(i.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {pages: 100, totalInventory: 2}\n    }\n]\n"})})}),(0,a.jsx)(i.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, totalInventory: 2}}])\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\uD83D\uDC50 \u4F7F\u7528\u7B80\u5355\u7684 $and \u8BED\u6CD5\u8FD4\u56DE\u6240\u6709 2015 \u5E74\u7684 ",(0,a.jsx)(n.code,{children:"books"}),"\uFF0C\u8FD9\u4E9B\u4E66\u7C4D\u6070\u597D\u6709 100 \u9875"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"\u7B54\u6848"}),(0,a.jsx)("div",{children:(0,a.jsxs)(t.Z,{groupId:"aggregations-shorthand-and-exercise",children:[(0,a.jsx)(i.Z,{value:"atlas",label:"Atlas UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {pages: 100, year: 2015}\n    }\n]\n"})})}),(0,a.jsx)(i.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, year: 2015}}])\n"})})})]})})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function g(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7645:function(e,n,r){r.d(n,{Z:()=>s});var l=r("5893");r("7294");var a=r("4904");function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:r,children:n})}},8168:function(e,n,r){r.d(n,{Z:()=>b});var l=r("5893"),a=r("7294"),s=r("4904"),t=r("4718"),i=r("6550"),o=r("8714"),c=r("9207"),d=r("9413"),h=r("4510");function u(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var g=r("6735");function x(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),h=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==a&&(d(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:t}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{c.push(e)},onKeyDown:u,onClick:h,...t,className:(0,s.Z)("tabs__item","tabItem_LNqP",t?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function j(e){let{lazy:n,children:r,selectedValue:t}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===t);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function m(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:l}=e,s=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??u(r).map(e=>{let{props:{value:n,label:r,attributes:l,default:a}}=e;return{value:n,label:r,attributes:l,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[t,g]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let l=r.find(e=>e.default)??r[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:s})),[x,j]=function(e){let{queryString:n=!1,groupId:r}=e,l=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(s),(0,a.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})},[s,l])]}({queryString:r,groupId:l}),[m,b]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[l,s]=(0,h.Nk)(r);return[l,(0,a.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:l}),f=(()=>{let e=x??m;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{f&&g(f)},[f]),{selectedValue:t,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);g(e),j(e),b(e)},[j,b,s]),tabValues:s}}(e);return(0,l.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,l.jsx)(x,{...n,...e}),(0,l.jsx)(j,{...n,...e})]})}function b(e){let n=(0,g.Z)();return(0,l.jsx)(m,{...e,children:u(e.children)},String(n))}},65:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var l=r(7294);let a={},s=l.createContext(a);function t(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);