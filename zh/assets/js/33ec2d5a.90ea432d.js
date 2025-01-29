"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["3432"],{5029:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>r,assets:()=>g,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"what-is-aggregation/structure-aggregation","title":"\uD83D\uDCD8 \u805A\u5408\u7BA1\u9053\u7684\u7ED3\u6784","description":"\u67E5\u770B\u7EC4\u6210\u805A\u5408\u7BA1\u9053\u7684\u90E8\u5206","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/20-what-is-aggregation/3-structure-aggregation.mdx","sourceDirName":"20-what-is-aggregation","slug":"/what-is-aggregation/structure-aggregation","permalink":"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/structure-aggregation","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/20-what-is-aggregation/3-structure-aggregation.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"\u67E5\u770B\u7EC4\u6210\u805A\u5408\u7BA1\u9053\u7684\u90E8\u5206"},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDCD8 SQL \u4E0E\u805A\u5408","permalink":"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/sql-vs-aggregation"},"next":{"title":"Simple Pipelines","permalink":"/aggregation-pipeline-lab/zh/docs/category/simple-pipelines"}}'),i=t("5893"),a=t("65");let o={description:"\u67E5\u770B\u7EC4\u6210\u805A\u5408\u7BA1\u9053\u7684\u90E8\u5206"},s="\uD83D\uDCD8 \u805A\u5408\u7BA1\u9053\u7684\u7ED3\u6784",g={},c=[{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-\u805A\u5408\u7BA1\u9053\u7684\u7ED3\u6784",children:"\uD83D\uDCD8 \u805A\u5408\u7BA1\u9053\u7684\u7ED3\u6784"})}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u5E38\uFF0C\u6211\u4EEC\u4F7F\u7528 SQL \u8FD9\u79CD\u7B2C\u56DB\u4EE3\u8BED\u8A00\u6765\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u8FDB\u884C\u4EA4\u4E92\u3002\u800C\u5728 MongoDB \u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u589E\u91CF\u6B65\u9AA4\u6765\u83B7\u53D6\u548C\u8F6C\u6362\u6570\u636E\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E00\u4E2A\u805A\u5408\u7BA1\u9053\u662F\u7531 ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/",children:(0,i.jsx)(n.strong,{children:"\u9636\u6BB5"})})," \u7EC4\u6210\u7684\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u5C06\u4E00\u4E2A\u5305\u542B\u591A\u4E2A\u9636\u6BB5\u7684\u6570\u7EC4\u4F20\u9012\u7ED9 ",(0,i.jsx)(n.code,{children:"aggregate"})," \u65B9\u6CD5\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"db.mycollection.aggregate([\n    stage1,\n    stage2,\n    stage3\n])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.p,{children:"\u4E00\u4E2A\u6267\u884C\u4E0A\u8FF0 SQL \u8BED\u53E5\u7684\u805A\u5408\u7BA1\u9053\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'db.mycollection.aggregate([\n  {\n    $sort:\n      /**\n       * \u63D0\u4F9B\u4EFB\u610F\u6570\u91CF\u7684\u5B57\u6BB5/\u6392\u5E8F\u5BF9\u3002\n       */\n      {\n        num_mflix_comments: -1,\n      },\n  },\n  {\n    $limit:\n      /**\n       * \u63D0\u4F9B\u8981\u9650\u5236\u7684\u6587\u6863\u6570\u91CF\u3002\n       */\n      1,\n  },\n  {\n    $unwind:\n      /**\n       * path: \u6570\u7EC4\u5B57\u6BB5\u7684\u8DEF\u5F84\u3002\n       * includeArrayIndex: \u7D22\u5F15\u540D\u79F0\uFF08\u53EF\u9009\uFF09\u3002\n       * preserveNullAndEmptyArrays: \u5C55\u5F00 null \u548C\u7A7A\u503C\uFF08\u53EF\u9009\uFF09\u3002\n       */\n      {\n        path: "$cast",\n      },\n  },\n  {\n    $project:\n      /**\n       * \u89C4\u8303\uFF1A\u8981\u5305\u542B\u6216\u6392\u9664\u7684\u5B57\u6BB5\u3002\n       */\n      {\n        cast: 1,\n      },\n  },\n])\n'})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var r=t(7294);let i={},a=r.createContext(i);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);