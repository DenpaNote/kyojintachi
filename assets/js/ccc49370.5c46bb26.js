"use strict";(self.webpackChunkkyojintachi_wiki=self.webpackChunkkyojintachi_wiki||[]).push([[249],{9593:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(758);var i=n(3526),a=n(864),o=n(2297),r=n(8873),s=n(5774),l=n(6513),c=n(5812),d=n(6642),u=n(6070);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.e)(),{title:n,description:i,date:o,tags:s,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var h=n(792),p=n(2002);function f(){const e=(0,p.J)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=n(3345),x=n(2121);function b(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,r.e)(),{nextItem:o,prevItem:c,frontMatter:d,unlisted:g}=i,{hide_table_of_contents:h,toc_min_heading_level:p,toc_max_heading_level:f}=d;return(0,u.jsxs)(s.A,{sidebar:t,toc:!h&&a.length>0?(0,u.jsx)(v.A,{toc:a,minHeadingLevel:p,maxHeadingLevel:f}):void 0,children:[g&&(0,u.jsx)(x.A,{}),(0,u.jsx)(l.A,{children:n}),(o||c)&&(0,u.jsx)(m,{nextItem:o,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(r.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,i.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(f,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},3345:(e,t,n)=>{n.d(t,{A:()=>c});n(758);var i=n(3526),a=n(1821);const o={tableOfContents:"tableOfContents_nnsz",docItemContainer:"docItemContainer_ltie"};var r=n(6070);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(a.A,{...n,linkClassName:s,linkActiveClassName:l})})}},1821:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(758),a=n(9200);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>s(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var u=n(7714),m=n(6070);function g(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const p=(0,a.p)(),f=c??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:v}}),[s,l,f,v])),(0,m.jsx)(h,{toc:x,className:n,linkClassName:s,...g})}},2121:(e,t,n)=>{n.d(t,{A:()=>g});n(758);var i=n(3526),a=n(5812),o=n(792),r=n(6070);function s(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(2297),u=n(2905);function m(e){let{className:t}=e;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},2002:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var i=n(4125),a=n(8902),o=n(4143);var r=n(8873);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.A)(),{withBaseUrl:n}=(0,i.h)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:o}=e,{date:r,title:d,description:u,lastUpdatedAt:m}=o,g=i.image??a.image,h=a.keywords??[],p=`${t.url}${o.permalink}`,f=m?s(m):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:u,datePublished:r,...f?{dateModified:f}:{},...l(o.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.e)(),{siteConfig:d}=(0,a.A)(),{withBaseUrl:u}=(0,i.h)(),{date:m,title:g,description:h,frontMatter:p,lastUpdatedAt:f}=n,v=t.image??p.image,x=p.keywords??[],b=f?s(f):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:h,datePublished:m,...b?{dateModified:b}:{},...l(n.authors),...c(v,u,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},7480:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(6503),a=n(758),o=n(6070);const r=()=>{const[e,t]=(0,a.useState)("preferred_color_scheme"),n=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{if(!n.current){n.current=!0;new MutationObserver((()=>{t(document.documentElement.getAttribute("data-theme"))})).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}}),[]),(0,o.jsx)("div",{style:{paddingTop:"2rem"},children:(0,o.jsx)(i.A,{repo:"DenpaNote/kyojintachi",repoId:"R_kgDOL_ERAQ",category:"General",categoryId:"DIC_kwDOL_ERAc4Cfis-",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:e,lang:"zh-CN",loading:"lazy"})})}},7586:(e,t,n)=>{n.d(t,{A:()=>r});n(758);var i=n(4953),a=n(7480),o=n(6070);function r(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{...e}),(0,o.jsx)(a.A,{})]})}}}]);