"use strict";(self.webpackChunkkyojintachi_wiki=self.webpackChunkkyojintachi_wiki||[]).push([[8209],{8643:(e,t,a)=>{a.d(t,{A:()=>j});var s=a(758),i=a(3483),n=a(3526),r=a(3002),l=a(6956),c=a(5557),o=a(9927);function d(e){const{pathname:t}=(0,c.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,o.ys)(e.permalink,t))}(e,t)))),[e,t])}const m={sidebar:"sidebar_MKdD",sidebarItemTitle:"sidebarItemTitle_O_8I",sidebarItemList:"sidebarItemList_MP33",sidebarItem:"sidebarItem_EGq3",sidebarItemLink:"sidebarItemLink_mr_6",sidebarItemLinkActive:"sidebarItemLinkActive_wdlp"};var u=a(6070);function g(e){let{sidebar:t}=e;const a=d(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,n.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,n.A)(m.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,n.A)(m.sidebarItemList,"clean-list"),children:a.map((e=>(0,u.jsx)("li",{className:m.sidebarItem,children:(0,u.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=a(3922);function b(e){let{sidebar:t}=e;const a=d(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,u.jsx)(h.GX,{component:b,props:e})}function j(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?(0,u.jsx)(p,{sidebar:t}):(0,u.jsx)(g,{sidebar:t}):null}},8111:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});a(758);var s=a(3526),i=a(6956);const n=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(4608),l=a(6761),c=a(8273),o=a(6358),d=a(3616);const m={tag:"tag_aImY"};var u=a(6070);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var b=a(6798);function p(e){let{tags:t,sidebar:a}=e;const i=n();return(0,u.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,u.jsx)(r.be,{title:i}),(0,u.jsx)(b.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:a,children:[(0,u.jsx)(d.A,{as:"h1",children:i}),(0,u.jsx)(h,{tags:t})]})]})}},6358:(e,t,a)=>{a.d(t,{A:()=>l});a(758);var s=a(3526),i=a(3002);const n={tag:"tag_bTAI",tagRegular:"tagRegular_ohUj",tagWithCount:"tagWithCount_J32f"};var r=a(6070);function l(e){let{permalink:t,label:a,count:l,description:c}=e;return(0,r.jsxs)(i.A,{href:t,title:c,className:(0,s.A)(n.tag,l?n.tagWithCount:n.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},7480:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(6503),i=a(758),n=a(6070);const r=()=>{const[e,t]=(0,i.useState)("preferred_color_scheme"),a=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{if(t(document.documentElement.getAttribute("data-theme")),!a.current){a.current=!0;new MutationObserver((()=>{t(document.documentElement.getAttribute("data-theme"))})).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}}),[]),(0,n.jsx)("div",{style:{paddingTop:"2rem"},children:(0,n.jsx)(s.A,{repo:"DenpaNote/kyojintachi",repoId:"R_kgDOL_ERAQ",category:"General",categoryId:"DIC_kwDOL_ERAc4Cfis-",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:e,lang:"zh-CN",loading:"lazy"})})}},8273:(e,t,a)=>{a.d(t,{A:()=>c});a(758);var s=a(3526),i=a(9869),n=a(8643),r=a(7480),l=a(6070);function c(e){const{sidebar:t,toc:a,children:c,...o}=e,d=t&&t.items.length>0;return(0,l.jsx)(i.A,{...o,children:(0,l.jsx)("div",{className:"container margin-vert--lg",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)(n.A,{sidebar:t}),(0,l.jsxs)("main",{className:(0,s.A)("col",{"col--7":d,"col--9 col--offset-1":!d}),children:[c,(0,l.jsx)(r.A,{})]}),a&&(0,l.jsx)("div",{className:"col col--2",children:a})]})})})}},6503:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(6070),i=a(758);function n({id:e,host:t,repo:n,repoId:r,category:l,categoryId:c,mapping:o,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:b,lang:p,loading:j}){const[x,A]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{x||(a.e(1483).then(a.bind(a,1483)),A(!0))}),[]),x?(0,s.jsx)("giscus-widget",{id:e,host:t,repo:n,repoid:r,category:l,categoryid:c,mapping:o,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:b,lang:p,loading:j}):null}}}]);