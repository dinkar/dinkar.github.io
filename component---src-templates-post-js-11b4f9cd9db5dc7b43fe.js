(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return _});var r=n(0),o=n.n(r),i=n(2),a=n.n(i),s=n(162),l=n.n(s),c=n(43),u=n(155),m=n(163),p=n.n(m),d=n(160),f=n(156),h=n(157),g=n.n(h),b=n(177),y=n.n(b),w=(n(173),u.b.article.withConfig({displayName:"post__Content",componentId:"s6jq8n-0"})(["grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);max-width:1000px;border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-3rem;@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},f.a.tablet,f.a.phone)),v=u.b.h1.withConfig({displayName:"post__Title",componentId:"s6jq8n-1"})(["margin-bottom:1rem;"]),E=u.b.div.withConfig({displayName:"post__PostContent",componentId:"s6jq8n-2"})(["margin-top:4rem;"]),x=function(e){var t=e.pageContext,n=t.slug,r=t.prev,i=t.next,a=e.data.markdownRemark,s=a.frontmatter,u={url:g.a.siteUrl+"/"+n,identifier:n,title:s.title},m=g.a.disqusShortName;return o.a.createElement(d.c,null,o.a.createElement(d.h,null,o.a.createElement(d.e,{postPath:n,postNode:a,postSEO:!0}),o.a.createElement(l.a,{title:s.title+" | "+g.a.siteTitle}),o.a.createElement(d.b,null,o.a.createElement(c.Link,{to:"/"},g.a.siteTitle)),o.a.createElement(w,null,o.a.createElement(v,null,s.title),o.a.createElement(d.g,null,s.date," — ",a.timeToRead," Min Read — In"," ",o.a.createElement(c.Link,{to:"/categories/"+p()(s.category)},s.category)," — ",o.a.createElement(y.a.CommentCount,{shortname:m,config:u},"0 Comments")),o.a.createElement(E,{dangerouslySetInnerHTML:{__html:a.html}}),o.a.createElement(d.d,{prev:r,next:i}),o.a.createElement(y.a.DiscussionEmbed,{shortname:m,config:u}))))};t.default=x,x.propTypes={pageContext:a.a.shape({slug:a.a.string.isRequired,next:a.a.object,prev:a.a.object}),data:a.a.shape({markdownRemark:a.a.object.isRequired}).isRequired},x.defaultProps={pageContext:a.a.shape({next:null,prev:null})};var _="3907910174"},156:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},157:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Subliminal Undertones",siteTitleAlt:"Subliminal Undertones - Mostly Harmless",siteUrl:"https://dinkar.github.io",siteLanguage:"en",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"My Punching Bag",author:"DinkarPundir",siteLogo:"/social/logo.png",userTwitter:"@dinkarpundir",ogSiteName:"",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",disqusShortName:"dpundir"}},160:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(2),a=n.n(i),s=n(155),l=n(43),c=n(163),u=n.n(c),m=s.b.article.withConfig({displayName:"Article__Post",componentId:"sc-1xvk6ny-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),p=s.b.h2.withConfig({displayName:"Article__Title",componentId:"sc-1xvk6ny-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),d=s.b.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1xvk6ny-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),f=s.b.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1xvk6ny-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),h=function(e){var t=e.title,n=e.date,r=e.excerpt,i=e.slug,a=e.timeToRead,s=e.category,c=t.charAt(0);return o.a.createElement(m,null,o.a.createElement(p,null,o.a.createElement(d,null,c),o.a.createElement(l.Link,{to:i},t)),o.a.createElement(F,null,n," — ",a," Min Read — In"," ",o.a.createElement(l.Link,{to:"/categories/"+u()(s)},s)),o.a.createElement(f,null,r))},g=h;h.propTypes={title:a.a.string.isRequired,date:a.a.string.isRequired,excerpt:a.a.string.isRequired,slug:a.a.string.isRequired,timeToRead:a.a.number.isRequired,category:a.a.string.isRequired};n(165);var b=n(159),y=s.b.button.withConfig({displayName:"Button",componentId:"r0tpwz-0"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return Object(b.b)(.05,e.theme.colors.primary)}),w=s.b.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1i1r4q4-0"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],function(e){return Object(b.a)(.1,e.theme.colors.primary)},function(e){return Object(b.b)(.1,e.theme.colors.primary)}),v=s.b.div.withConfig({displayName:"Header__Content",componentId:"sc-1i1r4q4-1"})(["max-width:1000px;margin:0 auto;a{color:white;&:hover{opacity:0.85;color:white;}}"]),E=function(e){return o.a.createElement(w,null,o.a.createElement(v,null,e.children))},x=E;E.propTypes={children:a.a.oneOfType([a.a.array,a.a.node]).isRequired};var _=n(164),C=n.n(_),k=n(161),S={colors:{primary:"#505050",bg:"white",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"}},I=n(156);function j(){var e=C()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: underline;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return j=function(){return e},e}Object(s.c)(j(),S.colors.bg,S.colors.primary,S.colors.bg,S.default,I.a.phone,S.colors.grey.dark,S.transitions.normal,S.colors.primary,S.colors.grey.dark,S.colors.primary,S.colors.grey.dark);var O=s.b.footer.withConfig({displayName:"Layout__Footer",componentId:"ezc04b-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),q=function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"1719855500",render:function(e){return o.a.createElement(s.a,{theme:S},o.a.createElement(o.a.Fragment,null,o.a.createElement(W,null),t,o.a.createElement(O,null,"© 2018 by Dinkar Pundir. All rights reserved. ",o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/dinkar/dinkar.github.io"},"GitHub Repository")," ",o.a.createElement("br",null),o.a.createElement("span",null,"Last build: ",e.site.buildTime))))},data:k})},P=q;q.propTypes={children:a.a.oneOfType([a.a.array,a.a.node]).isRequired};var T=s.b.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"zmiu1k-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),N=s.b.div.withConfig({displayName:"PrevNext__Prev",componentId:"zmiu1k-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),D=s.b.div.withConfig({displayName:"PrevNext__Next",componentId:"zmiu1k-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),U=function(e){var t=e.next,n=e.prev;return o.a.createElement(T,null,n&&o.a.createElement(N,null,o.a.createElement("span",null,"Previous"),o.a.createElement(l.Link,{to:n.fields.slug},n.frontmatter.title)),t&&o.a.createElement(D,null,o.a.createElement("span",null,"Next"),o.a.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)))},R=U;U.propTypes={next:a.a.object,prev:a.a.object},U.defaultProps={next:null,prev:null};n(158);var z=s.b.div.withConfig({displayName:"SectionTitle",componentId:"qa3tjq-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.colors.grey.ultraLight}),M=n(162),L=n.n(M),B=n(157),A=n.n(B),Q=function(e){var t,n,r,i,a=e.postNode,s=e.postPath,l=e.postSEO,c="/"===A.a.pathPrefix?"":A.a.pathPrefix;l?(t=a.frontmatter.title,n=a.excerpt,r=A.a.siteBanner,i=A.a.siteUrl+c+s):(t=A.a.siteTitle,n=A.a.siteDescription,r=A.a.siteBanner);r=A.a.siteUrl+c+r;var u=A.a.siteUrl+A.a.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite","@id":u,url:u,name:t,alternateName:A.a.siteTitleAlt?A.a.siteTitleAlt:""}];return l&&(m=[{"@context":"http://schema.org","@type":"BlogPosting","@id":i,url:i,name:t,alternateName:A.a.siteTitleAlt?A.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:n,datePublished:a.frontmatter.date,dateModified:a.frontmatter.date,author:{"@type":"Person",name:A.a.author},publisher:{"@type":"Organization",name:A.a.author,logo:{"@type":"ImageObject",url:A.a.siteUrl+c+A.a.siteLogo}},isPartOf:u,mainEntityOfPage:{"@type":"WebSite","@id":u}}]),o.a.createElement(L.a,null,o.a.createElement("html",{lang:A.a.siteLanguage}),o.a.createElement("title",null,A.a.siteTitle),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{name:"image",content:r}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),o.a.createElement("meta",{property:"og:locale",content:A.a.ogLanguage}),o.a.createElement("meta",{property:"og:site_name",content:A.a.ogSiteName?A.a.ogSiteName:""}),o.a.createElement("meta",{property:"og:url",content:l?i:u}),l?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{property:"og:image",content:r}),o.a.createElement("meta",{property:"fb:app_id",content:A.a.siteFBAppID?A.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:A.a.userTwitter?A.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:url",content:A.a.siteUrl}),o.a.createElement("meta",{name:"twitter:description",content:n}),o.a.createElement("meta",{name:"twitter:image",content:r}))},W=Q;Q.propTypes={postNode:a.a.object,postPath:a.a.string,postSEO:a.a.bool};var F=s.b.div.withConfig({displayName:"Subline",componentId:"sc-19xw41h-0"})(["font-size:",";color:",";",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.light},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"}),H=s.b.div.withConfig({displayName:"Wrapper",componentId:"njm843-0"})(["display:grid;grid-template-columns:1fr minmax(320px,1000px) 1fr;padding:0 1rem;"]);n.d(t,"a",function(){return g}),n.d(t,!1,function(){return y}),n.d(t,"b",function(){return x}),n.d(t,"c",function(){return P}),n.d(t,"d",function(){return R}),n.d(t,"f",function(){return z}),n.d(t,"e",function(){return W}),n.d(t,"g",function(){return F}),n.d(t,"h",function(){return H})},161:function(e){e.exports={data:{site:{buildTime:"24.09.2018"}}}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}}},173:function(e,t,n){},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(167);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(167);var l=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(176),o=n(175),i=n(174);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a}}]);
//# sourceMappingURL=component---src-templates-post-js-11b4f9cd9db5dc7b43fe.js.map