"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[14],{4919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(5893),i=t(1151);const s={description:"Let's compare SQL with an Aggregation Pipeline"},o="\ud83d\udcd8 SQL vs Aggregations",r={id:"what-is-aggregation/sql-vs-aggregation",title:"\ud83d\udcd8 SQL vs Aggregations",description:"Let's compare SQL with an Aggregation Pipeline",source:"@site/docs/20-what-is-aggregation/2-sql-vs-aggregation.mdx",sourceDirName:"20-what-is-aggregation",slug:"/what-is-aggregation/sql-vs-aggregation",permalink:"/aggregation-pipeline-lab/docs/what-is-aggregation/sql-vs-aggregation",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/20-what-is-aggregation/2-sql-vs-aggregation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Let's compare SQL with an Aggregation Pipeline"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 What is an Aggregation Pipeline",permalink:"/aggregation-pipeline-lab/docs/what-is-aggregation/what-is-aggregation"},next:{title:"\ud83d\udcd8 Structure of an aggregation pipeline",permalink:"/aggregation-pipeline-lab/docs/what-is-aggregation/structure-aggregation"}},g={},d=[{value:"SQL",id:"sql",level:2},{value:"Equivalent MongoDB Aggregation Pipeline",id:"equivalent-mongodb-aggregation-pipeline",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"-sql-vs-aggregations",children:"\ud83d\udcd8 SQL vs Aggregations"}),"\n",(0,a.jsx)(n.h2,{id:"sql",children:"SQL"}),"\n",(0,a.jsxs)(n.p,{children:["A SQL query statement usually starts with a ",(0,a.jsx)(n.code,{children:"SELECT"})," where we put a list of the fields we need, then a ",(0,a.jsx)(n.code,{children:"FROM"})," clause to state the table/s (or as in this case the subquery) that will return the rows. We can filter out using ",(0,a.jsx)(n.code,{children:"WHERE"})," and group data using ",(0,a.jsx)(n.code,{children:"GROUP"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"We read this from the inside. If there's too much nesting is not easy to follow."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'SELECT\n    city,\n    SUM(annual_spend) Total_Spend,\n    AVG(annual_spend) Average_Spend,\n    MAX(annual_spend) Max_Spend,\n    COUNT(annual_spend) customers\nFROM (\n    SELECT t1.city, customer.annual_spend\n    FROM customer \n    LEFT JOIN (\n        SELECT address.address_id, city.city,\n               address.customer_id, address.location\n        FROM address LEFT JOIN city\n        ON address.city_id = city.city_id\n        ) AS t1\n    ON\n    (customer.customer_id = t1.customer_id AND\n              t1.location = "home")\n) AS t2\nGROUP BY city;\n'})}),"\n",(0,a.jsx)(n.h2,{id:"equivalent-mongodb-aggregation-pipeline",children:"Equivalent MongoDB Aggregation Pipeline"}),"\n",(0,a.jsxs)(n.p,{children:["Here we pass three stages, one to return one document per element in the ",(0,a.jsx)(n.code,{children:"address"})," array, then we filter out to get only the documents that have a ",(0,a.jsx)(n.code,{children:"home"})," address location and finally we do the grouping. As we'll see, this can be split and tested separately, and resembles our code."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.customers.aggregate([\n\t{\n\t\t$unwind: "$address",\n\t},\n\t{\n\t\t$match: {"address.location": "home"}\n\t},\n\t{\n\t\t $group: {\n\t\t\t_id: "$address.city",\n\t\t\ttotalSpend: {$sum: "$annualSpend"},\n\t\t\taverageSpend: {$avg: "$annualSpend"},\n\t\t\tmaximumSpend: {$max: "$annualSpend"},\n\t\t\tcustomers: {$sum: 1}\n\t\t}\n\t}\n])\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["See also ",(0,a.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/sql-aggregation-comparison/",children:"SQL to Aggregation Mapping Chart"})]})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(7294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);