"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([["206"],{7611:function(n,e,a){a.r(e),a.d(e,{default:()=>g,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"what-is-aggregation/sql-vs-aggregation","title":"\uD83D\uDCD8 SQL \u4E0E\u805A\u5408","description":"\u8BA9\u6211\u4EEC\u6BD4\u8F83\u4E00\u4E0B SQL \u548C\u805A\u5408\u7BA1\u9053","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/20-what-is-aggregation/2-sql-vs-aggregation.mdx","sourceDirName":"20-what-is-aggregation","slug":"/what-is-aggregation/sql-vs-aggregation","permalink":"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/sql-vs-aggregation","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/20-what-is-aggregation/2-sql-vs-aggregation.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"\u8BA9\u6211\u4EEC\u6BD4\u8F83\u4E00\u4E0B SQL \u548C\u805A\u5408\u7BA1\u9053"},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDCD8 \u4EC0\u4E48\u662F\u805A\u5408\u7BA1\u9053","permalink":"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/what-is-aggregation"},"next":{"title":"\uD83D\uDCD8 \u805A\u5408\u7BA1\u9053\u7684\u7ED3\u6784","permalink":"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/structure-aggregation"}}'),i=a("5893"),s=a("65");let r={description:"\u8BA9\u6211\u4EEC\u6BD4\u8F83\u4E00\u4E0B SQL \u548C\u805A\u5408\u7BA1\u9053"},o="\uD83D\uDCD8 SQL \u4E0E\u805A\u5408",d={},c=[{value:"SQL",id:"sql",level:2},{value:"\u7B49\u6548\u7684 MongoDB \u805A\u5408\u7BA1\u9053",id:"\u7B49\u6548\u7684-mongodb-\u805A\u5408\u7BA1\u9053",level:2}];function l(n){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"-sql-\u4E0E\u805A\u5408",children:"\uD83D\uDCD8 SQL \u4E0E\u805A\u5408"})}),"\n",(0,i.jsx)(e.h2,{id:"sql",children:"SQL"}),"\n",(0,i.jsxs)(e.p,{children:["\u4E00\u4E2A SQL \u67E5\u8BE2\u8BED\u53E5\u901A\u5E38\u4EE5 ",(0,i.jsx)(e.code,{children:"SELECT"})," \u5F00\u59CB\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u5217\u51FA\u6240\u9700\u7684\u5B57\u6BB5\uFF0C\u7136\u540E\u662F ",(0,i.jsx)(e.code,{children:"FROM"})," \u5B50\u53E5\u6765\u6307\u5B9A\u5C06\u8FD4\u56DE\u884C\u7684\u8868\uFF08\u6216\u5728\u672C\u4F8B\u4E2D\u4E3A\u5B50\u67E5\u8BE2\uFF09\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"WHERE"})," \u8FDB\u884C\u7B5B\u9009\uFF0C\u5E76\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"GROUP"})," \u5BF9\u6570\u636E\u8FDB\u884C\u5206\u7EC4\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4EEC\u4ECE\u8BFB\u53D6 SQL \u9700\u4ECE\u5D4C\u5957\u4E2D\u7406\u89E3\u6574\u4E2A\u8BED\u53E5\u7684\u542B\u4E49\u3002\u5982\u679C\u5D4C\u5957\u8FC7\u591A\uFF0C\u5219\u4E0D\u6613\u7406\u89E3\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT\n    city,\n    SUM(annual_spend) Total_Spend,\n    AVG(annual_spend) Average_Spend,\n    MAX(annual_spend) Max_Spend,\n    COUNT(annual_spend) customers\nFROM (\n    SELECT t1.city, customer.annual_spend\n    FROM customer \n    LEFT JOIN (\n        SELECT address.address_id, city.city,\n               address.customer_id, address.location\n        FROM address LEFT JOIN city\n        ON address.city_id = city.city_id\n        ) AS t1\n    ON\n    (customer.customer_id = t1.customer_id AND\n              t1.location = "home")\n) AS t2\nGROUP BY city;\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u7B49\u6548\u7684-mongodb-\u805A\u5408\u7BA1\u9053",children:"\u7B49\u6548\u7684 MongoDB \u805A\u5408\u7BA1\u9053"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8FD9\u91CC\u6211\u4EEC\u901A\u8FC7\u4E09\u4E2A\u9636\u6BB5\uFF0C\u4E00\u4E2A\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"address"})," \u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684\u6587\u6863\uFF0C\u7136\u540E\u6211\u4EEC\u7B5B\u9009\u51FA\u4EC5\u5305\u542B ",(0,i.jsx)(e.code,{children:"home"})," \u5730\u5740\u4F4D\u7F6E\u7684\u6587\u6863\uFF0C\u6700\u540E\u6211\u4EEC\u8FDB\u884C\u5206\u7EC4\u3002\u6B63\u5982\u6211\u4EEC\u5C06\u52A8\u624B\u5B9E\u8DF5\u5E76\u770B\u5230\u7684\uFF0CMongoDB \u805A\u5408\u7BA1\u9053\u53EF\u4EE5\u5206\u5F00\u6D4B\u8BD5\uFF0C\u5E76\u4E14\u8FD0\u884C\u903B\u8F91\u7C7B\u4F3C\u4E8E\u6211\u4EEC\u7684\u4EE3\u7801\u7ED3\u6784\u672C\u8EAB\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'db.customers.aggregate([\n	{\n		$unwind: "$address",\n	},\n	{\n		$match: {"address.location": "home"}\n	},\n	{\n		 $group: {\n			_id: "$address.city",\n			totalSpend: {$sum: "$annualSpend"},\n			averageSpend: {$avg: "$annualSpend"},\n			maximumSpend: {$max: "$annualSpend"},\n			customers: {$sum: 1}\n		}\n	}\n])\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["\u53E6\u8BF7\u53C2\u9605 ",(0,i.jsx)(e.a,{href:"https://www.mongodb.com/docs/manual/reference/sql-aggregation-comparison/",children:"SQL \u4E0E\u805A\u5408\u6620\u5C04\u8868"})]})})]})}function g(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},65:function(n,e,a){a.d(e,{Z:function(){return o},a:function(){return r}});var t=a(7294);let i={},s=t.createContext(i);function r(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);