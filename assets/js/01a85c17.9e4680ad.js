"use strict";(self.webpackChunkkyojintachi_wiki=self.webpackChunkkyojintachi_wiki||[]).push([[8209],{5774:(e,t,s)=>{s.d(t,{A:()=>v});var a=s(758),i=s(3526),r=s(7132),l=s(9851),n=s(7714),c=s(5812),o=s(5557),d=s(9767);function m(e){const{pathname:t}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_SNjY",sidebarItemTitle:"sidebarItemTitle_DWIB",sidebarItemList:"sidebarItemList_Chgq",sidebarItem:"sidebarItem_jebu",sidebarItemLink:"sidebarItemLink_APmK",sidebarItemLinkActive:"sidebarItemLinkActive_DMcN"};var b=s(6070);function g(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,b.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(994);function j(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,b.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,b.jsx)(p,{sidebar:t}):(0,b.jsx)(g,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,b.jsx)(r.A,{...l,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:t}),(0,b.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),s&&(0,b.jsx)("div",{className:"col col--2",children:s})]})})})}},6057:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(758);var a=s(3526),i=s(5812);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(864),n=s(2297),c=s(5774),o=s(3259),d=s(9809);const m={tag:"tag_qCe9"};var u=s(6070);function b(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(b,{letterEntry:e},e.letter)))})}var h=s(2123);function j(e){let{tags:t,sidebar:s}=e;const i=r();return(0,u.jsxs)(l.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,u.jsx)(l.be,{title:i}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:s,children:[(0,u.jsx)(d.A,{as:"h1",children:i}),(0,u.jsx)(g,{tags:t})]})]})}},3259:(e,t,s)=>{s.d(t,{A:()=>n});s(758);var a=s(3526),i=s(7714);const r={tag:"tag_nDLd",tagRegular:"tagRegular_Z2LI",tagWithCount:"tagWithCount_EwoZ"};var l=s(6070);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.A,{href:t,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);