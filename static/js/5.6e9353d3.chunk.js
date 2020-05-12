(this["webpackJsonpphoto-store"]=this["webpackJsonpphoto-store"]||[]).push([[5],{167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(159),l=a(283);t.a=function(e){var t=e.name,a=e.img,n=e.size,s=Object(i.a)((function(e){return{small:{width:e.spacing(4),height:e.spacing(4)},large:{width:e.spacing(19),height:e.spacing(19)}}}))();return r.a.createElement(l.a,{src:t||a,className:s[n]})}},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(171);t.a=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a,className:"form-wrapper  mt-2 text-center"},r.a.createElement("div",{className:"position-relative input-holder "},r.a.createElement("input",{className:" search-input",placeholder:"Search for a photo",onChange:t,value:n}))))}},171:function(e,t,a){},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(36),r=function(e,t){n.a.push({pathname:e,search:t||""})}},185:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(197),l=a.n(i);a(199),a(200),a(186);t.a=function(e){var t=e.list,a=e.SliderSettings,n=e.handleClick;return r.a.createElement("section",{className:"slider-wrapper "},r.a.createElement(l.a,a,t&&t.length>0&&t.map((function(e,t){return r.a.createElement("div",{id:e,key:t,className:"font-weight-bold",onClick:function(t){return n(e)}},e)}))))}},186:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},195:function(e,t,a){"use strict";var n=a(17),r=a(54),i=a(55),l=a(57),s=a(56),o=a(0),u=a.n(o),c=a(28),p=a(61),d=a(37),f=a(159),m=a(266),g=a(284),h=a(267),b=a(268),v=a(264),y=a(167),C=a(173),P=a.n(C),k=a(180),E=a.n(k),O=a(194),_=a(278),j=a(280),x=a(257),w=a(259),S=a(261),N=a(263),T=a(256),M=a(258),D=a(260),L=a(262),R=a(202),F=a.n(R);function I(e){var t=e.url,a=u.a.useState(null),n=Object(O.a)(a,2),r=n[0],i=n[1],l=u.a.useState([u.a.createElement(T.a,{children:u.a.createElement(x.a,{size:32,round:"true"}),url:t}),u.a.createElement(M.a,{children:u.a.createElement(w.a,{size:32,round:"true"}),url:t}),u.a.createElement(D.a,{children:u.a.createElement(S.a,{size:32,round:"true"}),url:t}),u.a.createElement(L.a,{children:u.a.createElement(N.a,{size:32,round:"true"}),url:t})]),s=Object(O.a)(l,2),o=s[0],c=(s[1],function(){i(null)});return u.a.createElement("div",null,u.a.createElement(v.a,{onClick:function(e){i(e.currentTarget)}},u.a.createElement(F.a,{className:"share-icon","aria-haspopup":"true"})),u.a.createElement(_.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:c},o.map((function(e,t){return u.a.createElement(j.a,{onClick:c,key:t},e)}))))}a(191);var q=Object(f.a)((function(e){return{media:{height:"16em",paddingTop:"56.25%"}}})),z=function(e){var t=e.imgData,a=t.full,n=t.regular,r=t.alt_description,i=t.likes,l=e.userData,s=e.userData,o=s.name,c=s.username,p=s.profile_image.small,f=e.handleModalState,C=e.downloadSelectedImage,k=q();return u.a.createElement(m.a,{className:k.root},u.a.createElement(g.a,{avatar:u.a.createElement(d.a,{to:{pathname:"/profile/".concat(c),state:{userData:l}}},u.a.createElement(y.a,{img:p,size:"small"})),title:o,subheader:"@"+c}),u.a.createElement(h.a,{className:k.media,image:n,title:r,onClick:f}),u.a.createElement(b.a,{className:"my-2 justify-content-between"},u.a.createElement("div",null,u.a.createElement(P.a,{color:"secondary"}),u.a.createElement("span",{className:"no-of-likes mx-2"},i)),u.a.createElement("div",{className:"d-flex"},u.a.createElement(I,{url:a}),u.a.createElement(v.a,{onClick:C},u.a.createElement(E.a,{className:"download-icon"})))))},V=a(281),U=a(269),A=a(270),W=a(193),G=a.n(W),J=(a(192),function(e){var t=e.isOpen,a=e.handleModalState,n=e.imgObj,r=n.imgUrl,i=n.likes,l=e.userObj,s=l.profile_image,o=l.location,c=l.username,p=e.downloadSelectedImage;return u.a.createElement(V.a,{fullWidth:!0,maxWidth:"lg",scroll:"body",open:t,onClose:a,className:"dialog-wrapper"},u.a.createElement(U.a,null,u.a.createElement("div",{className:"d-flex justify-content-between"},u.a.createElement("div",{className:"d-flex "},u.a.createElement(y.a,{img:s,size:"small"}),u.a.createElement("p",{className:"user-name m-2"},"@"+c)),u.a.createElement("div",{className:"d-flex"},u.a.createElement(I,{url:r}),u.a.createElement(v.a,{onClick:p},u.a.createElement(E.a,{className:"download-icon"})))),u.a.createElement("div",{className:"text-center img-wrapper",style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),u.a.createElement("div",{className:"mt-1"},o&&u.a.createElement(u.a.Fragment,null,u.a.createElement(G.a,{color:"secondary"}),u.a.createElement("span",{className:"location mx-2"},o)),i&&u.a.createElement("p",{className:"mt-2  no-of-likes"},u.a.createElement(P.a,{color:"secondary"}),u.a.createElement("span",{className:"mx-2"},i)))),u.a.createElement(A.a,null,u.a.createElement("button",{onClick:a,className:"btn button-secondary"},"Close")))}),B=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).handleModalState=function(e,t,a,r,l,s,o){i.state.isOpen?i.setState({isOpen:!1}):i.setState({isOpen:!0,userObj:Object(n.a)({},i.state.userObj,{profile_image:r,location:l,username:s}),imgObj:Object(n.a)({},i.state.imgObj,{imgId:e,img_description:t,imgUrl:a,likes:o})})},i.downloadSelectedImage=function(e){(0,i.props.downloadApPhotoRequest)({id:e})},i.state={isOpen:!1,searchList:[],total:null,userObj:{profile_image:null,location:null,username:null},imgObj:{imgId:null,img_description:"",imgUrl:null,likes:null}},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.isOpen,n=t.imgObj,r=t.userObj,i=this.props.list;return console.log(i),u.a.createElement(u.a.Fragment,null,i&&i.length>0?u.a.createElement("div",{className:"row mx-0"},i.map((function(t,a){var n=t.id,r=t.urls,i=r.full,l=r.regular,s=t.likes,o=t.description,c=t.alt_description,p=t.user,d=t.user,f=d.profile_image.small,m=d.username,g=d.location;return u.a.createElement(u.a.Fragment,{key:a},u.a.createElement("div",{className:"card-wrapper col-lg-3 col-md-4 col-sm-6 px-2 mb-4"},u.a.createElement(z,{userData:p,imgData:{full:i,likes:s,alt_description:c,description:o,regular:l},handleModalState:function(){return e.handleModalState(n,o,i,f,g,m,s)},downloadSelectedImage:function(){return e.downloadSelectedImage(n)}})))}))):u.a.createElement("h4",{className:"text-muted text-center"},"There are no photos :("),u.a.createElement(J,{isOpen:a,handleModalState:this.handleModalState,downloadSelectedImage:function(){return e.downloadSelectedImage(n.imgId)},imgObj:n,userObj:r}))}}]),a}(o.Component);t.a=Object(c.b)(null,{downloadApPhotoRequest:p.b})(B)},231:function(e,t,a){},232:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=o(a(7)),i=o(a(233)),l=o(a(234)),s=o(a(165));function o(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){function t(){return p(this,t),f(this,m(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),a=t,(r=[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,r=t.pageRangeDisplayed,o=t.activePage,u=t.prevPageText,c=t.nextPageText,p=t.firstPageText,d=t.lastPageText,f=t.totalItemsCount,m=t.onChange,g=t.activeClass,h=t.itemClass,b=t.itemClassFirst,v=t.itemClassPrev,y=t.itemClassNext,C=t.itemClassLast,P=t.activeLinkClass,k=t.disabledClass,E=(t.hideDisabled,t.hideNavigation,t.linkClass),O=t.linkClassFirst,_=t.linkClassPrev,j=t.linkClassNext,x=t.linkClassLast,w=(t.hideFirstLastPages,t.getPageUrl),S=new i.default(a,r).build(f,o),N=S.first_page;N<=S.last_page;N++)e.push(n.default.createElement(l.default,{isActive:N===o,key:N,href:w(N),pageNumber:N,pageText:N+"",onClick:m,itemClass:h,linkClass:E,activeClass:g,activeLinkClass:P,ariaLabel:"Go to page number ".concat(N)}));return this.isPrevPageVisible(S.has_previous_page)&&e.unshift(n.default.createElement(l.default,{key:"prev"+S.previous_page,href:w(S.previous_page),pageNumber:S.previous_page,onClick:m,pageText:u,isDisabled:!S.has_previous_page,itemClass:(0,s.default)(h,v),linkClass:(0,s.default)(E,_),disabledClass:k,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(S.has_previous_page)&&e.unshift(n.default.createElement(l.default,{key:"first",href:w(1),pageNumber:1,onClick:m,pageText:p,isDisabled:!S.has_previous_page,itemClass:(0,s.default)(h,b),linkClass:(0,s.default)(E,O),disabledClass:k,ariaLabel:"Go to first page"})),this.isNextPageVisible(S.has_next_page)&&e.push(n.default.createElement(l.default,{key:"next"+S.next_page,href:w(S.next_page),pageNumber:S.next_page,onClick:m,pageText:c,isDisabled:!S.has_next_page,itemClass:(0,s.default)(h,y),linkClass:(0,s.default)(E,j),disabledClass:k,ariaLabel:"Go to next page"})),this.isLastPageVisible(S.has_next_page)&&e.push(n.default.createElement(l.default,{key:"last",href:w(S.total_pages),pageNumber:S.total_pages,onClick:m,pageText:d,isDisabled:S.current_page===S.total_pages,itemClass:(0,s.default)(h,C),linkClass:(0,s.default)(E,x),disabledClass:k,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}])&&d(a.prototype,r),o&&d(a,o),t}(n.default.Component);t.default=b,h(b,"propTypes",{totalItemsCount:r.default.number.isRequired,onChange:r.default.func.isRequired,activePage:r.default.number,itemsCountPerPage:r.default.number,pageRangeDisplayed:r.default.number,prevPageText:r.default.oneOfType([r.default.string,r.default.element]),nextPageText:r.default.oneOfType([r.default.string,r.default.element]),lastPageText:r.default.oneOfType([r.default.string,r.default.element]),firstPageText:r.default.oneOfType([r.default.string,r.default.element]),disabledClass:r.default.string,hideDisabled:r.default.bool,hideNavigation:r.default.bool,innerClass:r.default.string,itemClass:r.default.string,itemClassFirst:r.default.string,itemClassPrev:r.default.string,itemClassNext:r.default.string,itemClassLast:r.default.string,linkClass:r.default.string,activeClass:r.default.string,activeLinkClass:r.default.string,linkClassFirst:r.default.string,linkClassPrev:r.default.string,linkClassNext:r.default.string,linkClassLast:r.default.string,hideFirstLastPages:r.default.bool,getPageUrl:r.default.func}),h(b,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})},233:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),r=Math.min(a,t+Math.floor(this.length/2));r-n+1<this.length&&(t<a/2?r=Math.min(a,r+(this.length-(r-n))):n=Math.max(1,n-(this.length-(r-n)))),r-n+1>this.length&&(t>a/2?n++:r--);var i=this.per_page*(t-1);i<0&&(i=0);var l=this.per_page*t-1;return l<0&&(l=0),l>Math.max(e-1,0)&&(l=Math.max(e-1,0)),{total_pages:a,pages:Math.min(r-n+1,a),current_page:t,first_page:n,last_page:r,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(l-i+1,e),first_result:i,last_result:l}}},234:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=l(a(7)),i=l(a(165));function l(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g=function(e){function t(){return u(this,t),p(this,d(t).apply(this,arguments))}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,r=(t.pageNumber,t.activeClass),l=t.itemClass,s=t.linkClass,o=t.activeLinkClass,u=t.disabledClass,c=t.isActive,p=t.isDisabled,d=t.href,f=t.ariaLabel,g=(0,i.default)(l,(m(e={},r,c),m(e,u,p),e)),h=(0,i.default)(s,m({},o,c));return n.default.createElement("li",{className:g,onClick:this.handleClick.bind(this)},n.default.createElement("a",{className:h,href:d,"aria-label":f},a))}}])&&c(a.prototype,r),l&&c(a,l),t}(n.Component);t.default=g,m(g,"propTypes",{pageText:r.default.oneOfType([r.default.string,r.default.element]),pageNumber:r.default.number.isRequired,onClick:r.default.func.isRequired,isActive:r.default.bool.isRequired,isDisabled:r.default.bool,activeClass:r.default.string,activeLinkClass:r.default.string,itemClass:r.default.string,linkClass:r.default.string,disabledClass:r.default.string,href:r.default.string}),m(g,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})},282:function(e,t,a){"use strict";a.r(t);var n=a(54),r=a(55),i=a(57),l=a(56),s=a(0),o=a.n(s),u=a(28),c=(a(36),a(60)),p=a(170),d=a(185),f=a(195),m=a(59),g=(a(231),a(232)),h=a.n(g),b=function(e){var t=e.activePage,a=e.photosPerPage,n=e.total,r=e.handlePageChange;return o.a.createElement(h.a,{className:"justify-content-center",itemClass:"page-item",linkClass:"page-link",activePage:t,itemsCountPerPage:a,totalItemsCount:n,onChange:r,pageRangeDisplayed:5,prevPageText:"Prev",nextPageText:"Next"})},v=a(172),y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){var e=r.state.photosPerPage,t=r.props.searchRequest;if(r.props.computedMatch&&r.props.computedMatch.params.hasOwnProperty("searcTerm")){var a=r.props.computedMatch.params.searcTerm,n=window.location.search.split("=")[1];t({query:a,page:+n,per_page:e}),r.setState({searchTerm:a,activePage:n})}},r.componentDidUpdate=function(e){var t=r.state.photosPerPage,a=r.props,n=a.results,i=a.total,l=a.searchRequest,s=a.computedMatch.params,o=a.location;if(e.computedMatch.params.searcTerm!==s.searcTerm||e.location.search!==o.search){var u=s.searcTerm,c=o.search.split("=")[1];l({query:u,page:+c,per_page:t}),r.setState({searchTerm:u,activePage:c})}e.results===n&&e.total===i||r.setState({searchList:n,total:i})},r.handleChange=function(e){r.setState({searchTerm:e.target.value})},r.handleSubmit=function(e){e.preventDefault();var t=r.props.searchRequest,a=r.state,n=a.activePage,i=a.photosPerPage,l=a.searchTerm;Object(v.a)("/imagesList/".concat(l),"?page=1"),t({query:r.state.searchTerm,page:n,per_page:i})},r.getCollectionData=function(e){Object(v.a)("/imagesList/".concat(e),"?page=1")},r.handlePageChange=function(e){var t=r.props.computedMatch.url;r.setState({activePage:e},(function(){var e=r.state.activePage;Object(v.a)(t,"?page=".concat(e))}))},r.state={searchList:[],searchTerm:"",activePage:1,photosPerPage:20,SliderSettings:{dots:!1,infinite:!0,speed:100,slidesToShow:8,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=e.searchList,n=e.SliderSettings,r=e.total,i=e.activePage,l=e.photosPerPage;return o.a.createElement("section",{className:"image-list-wrapper container-fluid my-4 min-vh-100"},o.a.createElement("div",{className:"wrapper container-fluid"},o.a.createElement(d.a,{handleClick:this.getCollectionData,list:m.b,SliderSettings:n}),o.a.createElement("div",{className:"pb-3 my-5"},o.a.createElement(p.a,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,value:t}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{list:a,total:r}),a.length>0&&r>0&&o.a.createElement("div",{className:"my-4 w-100"},o.a.createElement(b,{activePage:+i,photosPerPage:l,total:r,handlePageChange:this.handlePageChange}))))}}]),a}(s.Component);t.default=Object(u.b)((function(e){var t=e.search;return{results:t.results,total:t.total}}),{searchRequest:c.b})(y)}}]);
//# sourceMappingURL=5.6e9353d3.chunk.js.map