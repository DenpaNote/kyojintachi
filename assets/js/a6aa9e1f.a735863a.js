"use strict";(self.webpackChunkkyojintachi_wiki=self.webpackChunkkyojintachi_wiki||[]).push([[7643],{4165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(758);var n=a(3526),i=a(8902),r=a(864),o=a(2297),s=a(8273),l=a(8533),c=a(2123),d=a(4864),g=a(792),m=a(2002),u=a(6070);function p(e){const t=(0,m.k)(e);return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.A)(),{blogDescription:n,blogTitle:o,permalink:s}=t,l="/"===s?a:o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.be,{title:l,description:n}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,u.jsxs)(s.A,{sidebar:n,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(l.A,{metadata:t})]})}function f(e){return(0,u.jsxs)(r.e3,{className:(0,n.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,u.jsx)(h,{...e}),(0,u.jsx)(p,{...e}),(0,u.jsx)(b,{...e})]})}},8533:(e,t,a)=>{a.d(t,{A:()=>o});a(758);var n=a(5812),i=a(6642),r=a(6070);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(i.A,{permalink:a,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.A,{permalink:o,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},4864:(e,t,a)=>{a.d(t,{A:()=>o});a(758);var n=a(8873),i=a(4488),r=a(6070);function o(e){let{items:t,component:a=i.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.i,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},2002:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>g});var n=a(4125),i=a(8902),r=a(4143);var o=a(8873);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:u({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:a}=(0,n.h)(),{metadata:{blogDescription:r,blogTitle:o,permalink:d}}=e,g=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:i,metadata:r}=e,{date:o,title:d,description:g,lastUpdatedAt:m}=r,u=n.image??i.image,p=i.keywords??[],h=`${t.url}${r.permalink}`,b=m?s(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:g,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...c(u,a,d),...p?{keywords:p}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,o.e)(),{siteConfig:d}=(0,i.A)(),{withBaseUrl:g}=(0,n.h)(),{date:m,title:u,description:p,frontMatter:h,lastUpdatedAt:b}=a,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,A=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:u,name:u,description:p,datePublished:m,...j?{dateModified:j}:{},...l(a.authors),...c(f,g,u),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function u(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},7480:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6503),i=a(758),r=a(6070);const o=()=>{const[e,t]=(0,i.useState)("preferred_color_scheme"),a=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{if(t(document.documentElement.getAttribute("data-theme")),!a.current){a.current=!0;new MutationObserver((()=>{t(document.documentElement.getAttribute("data-theme"))})).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}}),[]),(0,r.jsx)("div",{style:{paddingTop:"2rem"},children:(0,r.jsx)(n.A,{repo:"DenpaNote/kyojintachi",repoId:"R_kgDOL_ERAQ",category:"General",categoryId:"DIC_kwDOL_ERAc4Cfis-",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:e,lang:"zh-CN",loading:"lazy"})})}},8273:(e,t,a)=>{a.d(t,{A:()=>l});a(758);var n=a(3526),i=a(7132),r=a(4009),o=a(7480),s=a(6070);function l(e){const{sidebar:t,toc:a,children:l,...c}=e,d=t&&t.items.length>0;return(0,s.jsx)(i.A,{...c,children:(0,s.jsx)("div",{className:"container margin-vert--lg",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)(r.A,{sidebar:t}),(0,s.jsxs)("main",{className:(0,n.A)("col",{"col--7":d,"col--9 col--offset-1":!d}),children:[l,(0,s.jsx)(o.A,{})]}),a&&(0,s.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);