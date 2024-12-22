"use strict";(self.webpackChunkkyojintachi_wiki=self.webpackChunkkyojintachi_wiki||[]).push([[9048],{4310:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(758),i=n(3526),o=n(2505),s=n(5852),l=n(5414),r=n(4587),c=n(3923),d=n(5707),u=n(8565);const m={backToTopButton:"backToTopButton_fdAZ",backToTopButtonShow:"backToTopButtonShow_DUkK"};var h=n(6070);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(o.current?o.current=!1:a>=s?(l(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,u.$)((e=>{e.location.hash&&(o.current=!0,i(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(3628),x=n(5557),j=n(9098),f=n(3243),v=n(1433);function _(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g="collapseSidebarButton_GRug",A="collapseSidebarButtonIcon_YvwJ";function k(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",g),onClick:t,children:(0,h.jsx)(_,{className:A})})}var C=n(9860),S=n(9601);const T=Symbol("EmptyContext"),N=a.createContext(T);function I(e){let{children:t}=e;const[n,i]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:i})),[n]);return(0,h.jsx)(N.Provider,{value:o,children:t})}var y=n(4143),w=n(7142),B=n(2668),L=n(4269);function E(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,h.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function M(e){let{item:t,onItemClick:n,activePath:o,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:b,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,f.p)(),v=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),_=(0,l.w8)(t,o),g=(0,w.ys)(x,o),{collapsed:A,setCollapsed:k}=(0,y.u)({initialState:()=>!!b&&(!_&&t.collapsed)}),{expandedItem:C,setExpandedItem:I}=function(){const e=(0,a.useContext)(N);if(e===T)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!A),I(e?null:c),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const o=(0,S.ZC)(t);(0,a.useEffect)((()=>{t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:_,collapsed:A,updateCollapsed:M}),(0,a.useEffect)((()=>{b&&null!=C&&C!==c&&j&&k(!0)}),[b,C,c,k,j]),(0,h.jsxs)("li",{className:(0,i.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":A},p),children:[(0,h.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,h.jsx)(B.A,{className:(0,i.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!x&&b,"menu__link--active":_}),onClick:b?e=>{n?.(t),x?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":g?"page":void 0,role:b&&!x?"button":void 0,"aria-expanded":b&&!x?!A:void 0,href:b?v??"#":v,...d,children:m}),x&&b&&(0,h.jsx)(E,{collapsed:A,categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})]}),(0,h.jsx)(y.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A,children:(0,h.jsx)(V,{items:u,tabIndex:A?-1:0,onItemClick:n,activePath:o,level:r+1})})]})}var H=n(2292),G=n(8706);const R="menuExternalLink_USeS";function P(e){let{item:t,onItemClick:n,activePath:a,level:o,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:b}=t,p=(0,l.w8)(t,a),x=(0,H.A)(d);return(0,h.jsx)("li",{className:(0,i.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),children:(0,h.jsxs)(B.A,{className:(0,i.A)("menu__link",!x&&R,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,h.jsx)(G.A,{})]})},u)}const W="menuHtmlItem_N6Pj";function D(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:l,className:r}=t;return(0,h.jsx)("li",{className:(0,i.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[W,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:o}},a)}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(M,{item:t,...n});case"html":return(0,h.jsx)(D,{item:t,...n});default:return(0,h.jsx)(P,{item:t,...n})}}function F(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,h.jsx)(I,{children:a.map(((e,t)=>(0,h.jsx)(U,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(F),Y="menu_ZLYy",z="menuWithAnnouncementBar_iak5";function K(e){let{path:t,sidebar:n,className:o}=e;const l=function(){const{isActive:e}=(0,C.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",Y,l&&z,o),children:(0,h.jsx)("ul",{className:(0,i.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:n,activePath:t,level:1})})})}const O="sidebar_e4Ua",Z="sidebarWithHideableNavbar_KGWv",q="sidebarHidden_vAn6",J="sidebarLogo_eA_3";function Q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:o}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,f.p)();return(0,h.jsxs)("div",{className:(0,i.A)(O,s&&Z,o&&q),children:[s&&(0,h.jsx)(v.A,{tabIndex:-1,className:J}),(0,h.jsx)(K,{path:t,sidebar:n}),l&&(0,h.jsx)(k,{onClick:a})]})}const X=a.memo(Q);var $=n(4969),ee=n(5138);const te=e=>{let{sidebar:t,path:n}=e;const a=(0,ee.M)();return(0,h.jsx)("ul",{className:(0,i.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ne(e){return(0,h.jsx)($.GX,{component:te,props:e})}const ae=a.memo(ne);function ie(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(X,{...e}),a&&(0,h.jsx)(ae,{...e})]})}const oe={expandButton:"expandButton_Usjp",expandButtonIcon:"expandButtonIcon_hEko"};function se(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:oe.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(_,{className:oe.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_lQ4l",docSidebarContainerHidden:"docSidebarContainerHidden_m0B6",sidebarViewport:"sidebarViewport_TeNg"};function re(e){let{children:t}=e;const n=(0,r.t)();return(0,h.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:l}=(0,x.zy)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,p.O)()&&c(!0),o((e=>!e))}),[o,r]);return(0,h.jsx)("aside",{className:(0,i.A)(s.G.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&c(!0)},children:(0,h.jsx)(re,{children:(0,h.jsxs)("div",{className:(0,i.A)(le.sidebarViewport,r&&le.sidebarViewportHidden),children:[(0,h.jsx)(ie,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,h.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_n_4R",docMainContainerEnhanced:"docMainContainerEnhanced_yj2d",docItemWrapperEnhanced:"docItemWrapperEnhanced_ihf1"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.t)();return(0,h.jsx)("main",{className:(0,i.A)(de.docMainContainer,(t||!a)&&de.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const me={docRoot:"docRoot_TJdO",docsWrapper:"docsWrapper_DjIa"};function he(e){let{children:t}=e;const n=(0,r.t)(),[i,o]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:me.docsWrapper,children:[(0,h.jsx)(b,{}),(0,h.jsxs)("div",{className:me.docRoot,children:[n&&(0,h.jsx)(ce,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),(0,h.jsx)(ue,{hiddenSidebarContainer:i,children:t})]})]})}var be=n(3523);function pe(e){const t=(0,l.B5)(e);if(!t)return(0,h.jsx)(be.A,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,h.jsx)(o.e3,{className:(0,i.A)(s.G.page.docsDocPage),children:(0,h.jsx)(r.V,{name:a,items:c,children:(0,h.jsx)(he,{children:n})})})}},3523:(e,t,n)=>{n.d(t,{A:()=>l});n(758);var a=n(3526),i=n(3923),o=n(3497),s=n(6070);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(o.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);