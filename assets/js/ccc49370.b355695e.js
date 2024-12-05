"use strict";(self.webpackChunkkyojintachi_wiki=self.webpackChunkkyojintachi_wiki||[]).push([[3249],{1589:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(758);var i=n(3526),a=n(7243),s=n(5209),r=n(6316),o=n(3391),l=n(4509),c=n(6367),d=n(3486),m=n(6070);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,r.e7)(),{title:n,description:i,date:s,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(a.be,{title:c.title_meta??n,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var f=n(5327);function g(){const e=(0,r.J_)();return(0,m.jsx)(f.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(7766),v=n(9365);function x(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,r.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=i,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:g}=d;return(0,m.jsxs)(o.A,{sidebar:t,toc:!h&&a.length>0?(0,m.jsx)(p.A,{toc:a,minHeadingLevel:f,maxHeadingLevel:g}):void 0,children:[(0,m.jsx)(v.A,{metadata:i}),(0,m.jsx)(l.A,{children:n}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function b(e){const t=e.content;return(0,m.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(a.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(g,{}),(0,m.jsx)(x,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},7914:(e,t,n)=>{n.d(t,{A:()=>c});n(758);var i=n(3526),a=n(4694),s=n(5209),r=n(7673),o=n(6070);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(a.Rc,{}),className:(0,i.A)(t,s.G.common.unlistedBanner),children:(0,o.jsx)(a.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AE,{}),(0,o.jsx)(l,{...e})]})}},9365:(e,t,n)=>{n.d(t,{A:()=>d});n(758);var i=n(3526),a=n(4694),s=n(5209),r=n(7673),o=n(6070);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(a.Yh,{}),className:(0,i.A)(t,s.G.common.draftBanner),children:(0,o.jsx)(a.TT,{})})}var c=n(7914);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:i}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||i.unlisted)&&(0,o.jsx)(c.A,{}),i.draft&&(0,o.jsx)(l,{})]})}},7766:(e,t,n)=>{n.d(t,{A:()=>c});n(758);var i=n(3526),a=n(4114);const s={tableOfContents:"tableOfContents_hOf_",docItemContainer:"docItemContainer_F6ro"};var r=n(6070);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(a.A,{...n,linkClassName:o,linkActiveClassName:l})})}},4114:(e,t,n)=>{n.d(t,{A:()=>g});var i=n(758),a=n(1216);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>o(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(4457),u=n(6070);function h(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const g=(0,a.p)(),p=c??g.tableOfContents.minHeadingLevel,v=m??g.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:v}}),[o,l,p,v])),(0,u.jsx)(f,{toc:x,className:n,linkClassName:o,...h})}},4694:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>r,TT:()=>d,Uh:()=>o,Yh:()=>c});n(758);var i=n(6367),a=n(5327),s=n(6070);function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},2122:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(6503),a=n(758),s=n(6070);const r=()=>{const[e,t]=(0,a.useState)("preferred_color_scheme"),n=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{if(t(document.documentElement.getAttribute("data-theme")),!n.current){n.current=!0;new MutationObserver((()=>{t(document.documentElement.getAttribute("data-theme"))})).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}}),[]),(0,s.jsx)("div",{style:{paddingTop:"2rem"},children:(0,s.jsx)(i.A,{repo:"DenpaNote/kyojintachi",repoId:"R_kgDOL_ERAQ",category:"General",categoryId:"DIC_kwDOL_ERAc4Cfis-",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:e,lang:"zh-CN",loading:"lazy"})})}},3391:(e,t,n)=>{n.d(t,{A:()=>l});n(758);var i=n(3526),a=n(8490),s=n(3695),r=n(2122),o=n(6070);function l(e){const{sidebar:t,toc:n,children:l,...c}=e,d=t&&t.items.length>0;return(0,o.jsx)(a.A,{...c,children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(s.A,{sidebar:t}),(0,o.jsxs)("main",{className:(0,i.A)("col",{"col--7":d,"col--9 col--offset-1":!d}),children:[l,(0,o.jsx)(r.A,{})]}),n&&(0,o.jsx)("div",{className:"col col--2",children:n})]})})})}}}]);