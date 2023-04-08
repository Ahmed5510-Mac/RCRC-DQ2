System.register(["jimu-core","jimu-ui","jimu-arcgis"],(function(t,e){var o={},a={},r={};return{setters:[function(t){o.BaseVersionManager=t.BaseVersionManager,o.DataRecordsSelectionChangeMessage=t.DataRecordsSelectionChangeMessage,o.DataSourceComponent=t.DataSourceComponent,o.DataSourceStatus=t.DataSourceStatus,o.DataSourceTypes=t.DataSourceTypes,o.MessageManager=t.MessageManager,o.React=t.React,o.appConfigUtils=t.appConfigUtils,o.css=t.css,o.getAppStore=t.getAppStore,o.jsx=t.jsx},function(t){a.Button=t.Button,a.DataActionDropDown=t.DataActionDropDown,a.Icon=t.Icon,a.WidgetPlaceholder=t.WidgetPlaceholder},function(t){r.loadArcGISJSAPIModules=t.loadArcGISJSAPIModules}],execute:function(){t((()=>{var t={62:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var a=o(81),r=o.n(a),n=o(645),i=o.n(n)()(r());i.push([t.id,".titleName{display:flex;align-items:center;justify-content:center}.inner-info{border-radius:20px;padding:10px;transition:0.5s}.parent{transition:0.5s;position:relative}.parent button{background-color:#b10e0e;color:#fff;position:absolute;top:-30px;left:30px;width:20px;height:20px;border-radius:50%;border-color:#fff;padding:10px;display:flex;align-items:center;justify-content:center}.widget-featureInfo{border-bottom-right-radius:0px;border-bottom-left-radius:20px;transition:0.5s;overflow:auto}.widget-featureInfo::-webkit-scrollbar{display:none}.data-container{border-top-right-radius:20px;border-top-left-radius:20px}.esri-feature__size-container{border-radius:40px}.esri-feature__size-container h2{background:#292525;border-radius:20px;margin-bottom:10px;width:calc(100% + 20px);margin-left:-10px !important;display:flex;align-items:center;justify-content:center;padding-top:5px !important}.app-root-emotion-cache-ltr-eevno1,.app-root-emotion-cache-ltr-1i9o8jg{filter:drop-shadow(0 0 3px rgba(255,255,255,0.701961))}.app-root-emotion-cache-ltr-5hxdue{background:#ffffff2b !important;backdrop-filter:blur(5px)}.app-root-emotion-cache-ltr-1i9o8jg{background:#1f1f1f3d}.panel-header{border-top-right-radius:20px;border-top-left-radius:20px}.d-none{transition-delay:0.4s !important}.app-root-emotion-cache-ltr-1lwb9ms.d-none,.app-root-emotion-cache-ltr-1kudb1r.d-none .app-root-emotion-cache-ltr-1i9o8jg.d-none{animation:test 0.7s  ease-out !important}.app-root-emotion-cache-ltr-1lwb9ms,.app-root-emotion-cache-ltr-1kudb1r,.app-root-emotion-cache-ltr-1i9o8jg{border-top-right-radius:20px;border-top-left-radius:20px;border-radius:20px;color:#fff;animation:showPopup 0.7s  ease-in}@keyframes showPopup{0%{opacity:0;transform:scale(0)}60%{opacity:.8;transform:scale(1.3)}100%{opacity:1;transform:scale(1) translate(100px, 100px) !important;display:block}}@keyframes test{0%{opacity:1;transform:scale(1)}40%{opacity:.8;transform:scale(1.3)}100%{opacity:0 !important;transform:scale(0);display:none !important}}.exbmap-ui-tool-shell .esri-widget--button{box-shadow:0 0 5px #ddd;margin-bottom:20px}.esri-widget--button:hover:hover{color:#333 !important}.esri-zoom .esri-widget--button:first-child{margin-bottom:10px}.app-root-emotion-cache-ltr-1pefey:not(:disabled):not(.disabled){border-radius:20%;background-color:rgba(72,66,66,0.55);border:1px solid var(--light-500);box-shadow:0px 0px 5px 0px var(--primary-800)}.esri-widget--button:not(.select-tool-btn),.select-tool-container>div>div+button{border-radius:50%;background-color:rgba(72,66,66,0.55);border:1px solid var(--light-500);box-shadow:0px 0px 5px 0px var(--primary-800)}.esri-zoom,.exbmap-ui-tool-shell{border-radius:50%;background:transparent}.exbmap-ui-tool-shell{box-shadow:0 0 10px #333}.select-tool-container>div>div button.select-tool-btn:first-child{border-right:none;box-shadow:none}.select-tool-container>div>div button.select-tool-btn:first-child:hover,.select-tool-container>div>div button.select-tool-btn:nth-child(2):hover{background-color:rgba(22,22,22,0.55) !important;text-decoration:none;font-style:normal;color:#8ba3af !important}.select-tool-container>div>div button.select-tool-btn:nth-child(2){border-left:none;box-shadow:none}.select-tool-container>div>div{border-radius:5%;background-color:#ffffff47 !important;box-shadow:0 0 5px #ddd;margin-inline:10px;overflow:hidden}.app-root-emotion-cache-ltr-1h1mf5x .avatar-card:not(.add-widget-btn)>.avatar>.avatar-button{background:linear-gradient(#189192, #16a474);border-color:#18aa0c;filter:drop-shadow(0 0 5px #333);padding:5px}.app-root-emotion-cache-ltr-spnjzd>.icon-btn-sizer{padding:8px}.app-root-emotion-cache-ltr-ps8kz1 .avatar-card:not(.add-widget-btn)>.avatar>.avatar-button{background-color:#456b7f;border-color:#18aa0c}.app-root-emotion-cache-ltr-1kd8vsw.icon-btn .icon-btn-sizer .svg-component{margin:5px !important}.app-root-emotion-cache-ltr-9hk3xi.icon-btn .icon-btn-sizer .svg-component{margin:5px !important}.app-root-emotion-cache-ltr-1lr4gno .select-tool-container,.app-root-emotion-cache-ltr-jh8yf .select-tool-container,.app-root-emotion-cache-ltr-1sab8aw .select-tool-container{background:transparent;border:none}.app-root-emotion-cache-ltr-mr1rd1>.exbmap-ui+.exbmap-ui,.app-root-emotion-cache-ltr-mr1rd1>.exbmap-ui+span{border:none;background:transparent;box-shadow:none}.exbmap-ui-tool-shell .esri-widget--button{margin-block:0px}.esri-zoom,.exbmap-ui-tool-shell{background-color:transparent !important}.app-root-emotion-cache-ltr-1dfbfmi .widget-coordinate-conversion .input-container .jimu-widget-setting--row-label{color:#fff !important}@media (max-width: 767px){.action-close{width:20px;height:20px;border-radius:50%;background:#850606;padding:10px;box-shadow:0 0 5px rgba(51,51,51,0.459);padding:10px}.icon-btn-sizer{-webkit-filter:drop-shadow(0px 0px 10px #44d);-Moz-filter:drop-shadow(0px 0px 10px #44d);filter:drop-shadow(0px 0px 10px #44d);box-shadow:0 0 2px 2px #3333338a;border-radius:50%}.app-root-emotion-cache-ltr-1ji3uca .jimu-icon,.app-root-emotion-cache-ltr-1ji3uca .left-icon{margin-right:0.5rem;color:#fff;width:10px}.app-root-emotion-cache-ltr-1dfbfmi .widget-coordinate-conversion .input-container{background-color:rgba(69,74,77,0.41);padding:5px;border-radius:2px}.exbmap-ui-tool-shell .esri-widget--button:not(.esri-search){box-shadow:0 0 5px #ddd}.esri-zoom .esri-widget--button:first-child{margin-bottom:10px}.esri-widget--button:not(.select-tool-btn),.select-tool-container>div>div+button{border-radius:50% !important;background-color:rgba(72,66,66,0.55) !important;border:1px solid var(--light-500) !important;box-shadow:0px 0px 5px 0px var(--primary-800) !important}.esri-zoom,.exbmap-ui-tool-shell{border-radius:50%;background:transparent}.exbmap-ui-tool-shell{box-shadow:0 0 10px #333}.select-tool-container>div>div button.select-tool-btn:first-child{border-right:none;box-shadow:none}.select-tool-container>div>div button.select-tool-btn:first-child:hover,.select-tool-container>div>div button.select-tool-btn:nth-child(2):hover{background-color:rgba(22,22,22,0.55) !important;text-decoration:none;font-style:normal;color:#8ba3af !important}.select-tool-container>div>div button.select-tool-btn:nth-child(2){border-left:none;box-shadow:none}.select-tool-container>div>div{border-radius:5%;background-color:#ffffff47 !important;box-shadow:0 0 5px #ddd;margin-inline:10px;overflow:hidden}.app-root-emotion-cache-ltr-1kd8vsw.icon-btn .icon-btn-sizer .svg-component{margin:5px !important}.app-root-emotion-cache-ltr-1lr4gno .select-tool-container,.app-root-emotion-cache-ltr-1sab8aw .select-tool-container{background:transparent;border:none}.app-root-emotion-cache-ltr-mr1rd1>.exbmap-ui+.exbmap-ui,.app-root-emotion-cache-ltr-mr1rd1>.exbmap-ui+span{border:none;background:transparent;box-shadow:none}.esri-search .esri-search__input-container .esri-search__input{text-overflow:ellipsis;padding-right:32px;border-top-left-radius:20px;border:1px solid #25256a}.esri-sketch__button{margin-top:10px}.esri-search__container,.esri-search{background:#383c50e0;border-radius:20px;overflow:hidden;border:1px solid #aeb3ae}.esri-search .esri-search__input-container .esri-search__input{text-overflow:ellipsis;padding-right:32px;color:#fff;background:transparent;border:none;outline:none}.esri-search .esri-search__input-container .esri-search__input::placeholder{color:#fff}.esri-search .esri-search__input-container .esri-search__input:focus{border:none !important;outline:none !important}.app-root-emotion-cache-ltr-1vuz6dz{fill:currentcolor;width:14px}.app-root-emotion-cache-ltr-1pclar9 div:nth-child(2){height:10px !important}.esri-zoom{gap:10px}}.action-close{width:20px;height:20px;border-radius:50%;background:#850606;padding:10px;box-shadow:0 0 5px rgba(51,51,51,0.459);padding:10px}.icon-btn-sizer{-webkit-filter:drop-shadow(0px 0px 10px #44d);-Moz-filter:drop-shadow(0px 0px 10px #44d);filter:drop-shadow(0px 0px 10px #44d);box-shadow:0 0 3px #ddd;border-radius:50%}.app-root-emotion-cache-ltr-1ji3uca .jimu-icon,.app-root-emotion-cache-ltr-1ji3uca .left-icon{margin-right:0.5rem;color:#fff;width:10px}.app-root-emotion-cache-ltr-1dfbfmi .widget-coordinate-conversion .input-container{background-color:rgba(69,74,77,0.41);padding:5px;border-radius:2px}.app-root-emotion-cache-ltr-1i9o8jg .widget-coordinate-conversion .input-container{background-color:rgba(69,74,77,0.41);padding:5px;border-radius:2px}.select-tool-container>div>div button.select-tool-btn:first-child,.select-tool-container>div>div button.select-tool-btn:nth-child(2){background:#06060669}.app-root-emotion-cache-ltr-1axdlzn{margin-top:10px}.app-root-emotion-cache-ltr-1axdlzn,.app-root-emotion-cache-ltr-1axdlzn .content-bg{transition:0.5s;background:transparent;border-radius:20px}.app-root-emotion-cache-ltr-k1zbiq{background-color:transparent;border-radius:20px;margin-top:10px}.app-root-emotion-cache-ltr-k1zbiq .content-bg,.app-root-emotion-cache-ltr-1axdlzn .content-bg,.exbmap-ui-popper .exbmap-ui-expand-content,.app-root-emotion-cache-ltr-n9twj8:not(:disabled):not(.disabled){background-color:#4645457f !important;backdrop-filter:blur(5px);border-radius:20px}.app-root-emotion-cache-ltr-19iq9u{border-radius:20px}.exbmap-ui-popper .exbmap-ui-expand-content .exbmap-ui-expand-content-header{background:#333333a1;border-radius:20px 20px 0 0}.app-root-emotion-cache-ltr-1ffvkm9 .select-tool-container{background-color:transparent !important;border:none}.esri-menu__list-item,.esri-menu__list-item:hover,.esri-menu__list-item:focus,.esri-distance-measurement-2d__container{background-color:#757373 !important}.esri-search .esri-search__container>.esri-widget--button{margin-top:2px;margin-right:5px;background-color:transparent !important;margin-left:10px;border:none}.app-root-emotion-cache-ltr-1bq77dr :hover .nav-link:not(:disabled):not(.disabled){color:#3333}.exbmap-ui-popper .exbmap-ui-expand-content .esri-widget--panel,.esri-layer-list__item,.surface-1{background-color:transparent !important}.app-root-emotion-cache-ltr-8b2ylz,.app-root-emotion-cache-ltr-dglv35.table-widget-widget_101 .top-button-list .top-button button{background:#333333a9}.app-root-emotion-cache-ltr-dglv35.table-widget-widget_101 .dropdown-tag-list .dropdown-button{border-radius:20px}.app-root-emotion-cache-ltr-8ke4wx{background-color:#b10e0e}.app-root-emotion-cache-ltr-1imql5l .widget-legend{background-color:transparent}.app-root-emotion-cache-ltr-1x49yon{border-radius:20px}.exbmap-ui-popper .exbmap-ui-expand-content .esri-widget{background:#ffffff59}\n",""]);const s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",a=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),a&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),a&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,a,r,n){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);a&&i[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function o(t){for(var o=-1,a=0;a<e.length;a++)if(e[a].identifier===t){o=a;break}return o}function a(t,a){for(var n={},i=[],s=0;s<t.length;s++){var d=t[s],c=a.base?d[0]+a.base:d[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var p=o(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var g=r(h,a);a.byIndex=s,e.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function r(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,r){var n=a(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<n.length;i++){var s=o(n[i]);e[s].references--}for(var d=a(t,r),c=0;c<n.length;c++){var l=o(n[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}n=d}}},569:t=>{"use strict";var e={};t.exports=function(t,o){var a=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{"use strict";t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,r&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var n=o.sourceMap;n&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},507:t=>{t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16Zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM6 14v3l-2-1.5L6 14Zm8 0 2 1.5-2 1.5v-3Zm2.5-4a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1h8Zm-11 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2Zm8-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5Zm-8 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm11-3a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1h8Zm-11 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2Z" fill="#000" fill-rule="nonzero"></path></svg>'},826:t=>{"use strict";t.exports=r},891:t=>{"use strict";t.exports=o},726:t=>{"use strict";t.exports=a}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="",n.nc=void 0;var i={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(i),n.d(i,{default:()=>L});var t,e,o=n(891),a=n(726);function r(t,a,r,n){let i;const s=r.backgroundColor?r.backgroundColor:t.surfaces[1].bg;let d;const c="";let l,u,p=c,h=c,g=c,f=c,m=c,b=c;"custom"===a?(i=r.textColor?r.textColor:t.colors.black,d=r.fontSize,d&&0!==d.distance&&r.fontSizeType!==e.auto&&(l=d.unit,u=d.distance,p=u+l,h=Math.round(1.428*u)+l,g=Math.round(1.142*u)+l,f=u,m=Math.round(.857*u)+l,b=Math.round(.857*u)+l)):"syncWithTheme"===a?(u=c,i=t.colors.black):(u=c,i="");let x="10px",v="auto";return n&&(x="auto",v="10px"),o.css`
    overflow: auto;
    .widget-featureInfo{
      width: 100%;
      height: 100%;
      background-color: ${s};
      color: ${i};
      font-size: ${p};
      .warning-icon{
        position: absolute;
        bottom: 10px;
        right: ${x};
        left: ${v};
      }
      .header-section{
        display: flex;
        justify-content: space-between;
        height: 40px;
        border-bottom: 1px solid #a8a8a8;
        background-color: ${s};
      }
      .data-action-placeholder{
        width: 41px;
      }
      .data-action-dropdown-content{
        width: 41px;
        padding: 9px 7px 0 7px;
      }
      .nav-section{
        flex-grow: 2;
        height: 40px;
        background-color: transparent;
        .nav-btn{
          color: ${t.colors.palette.primary[500]};
        }
        .nav-btn: hover{
          color: ${t.colors.palette.primary[600]};
        }
        .nav-btn:focus{
          box-shadow: none;
        }
      }
      .feature-info-component{
        background-color: ${"transparent"};
        padding: 0;
        .esri-feature__size-container{
          background-color: ${s};
          color: ${i};
        }
        .esri-widget * {
          font-size: ${p};
          color: ${i};
        }
        .esri-widget {
          background-color: transparent !important;
        }
        .esri-feature__title{
          padding: 10px 15px 0 15px;
          margin: auto;
        }
        .esri-feature__content-element{
        }
        .esri-widget__table tr td, .esri-widget__table tr th {
          font-size: ${b};
        }
        .esri-feature__main-container{
        }
        .esri-feature__media-previous:focus{
          outline: none;
        }
        .esri-feature__media-next:focus{
          outline: none;
        }
        .esri-feature__title {
          font-size: ${p};
        }
        .esri-feature h1 {
          font-size: ${h};
        }
        .esri-feature h2 {
          font-size: ${g};
        }
        .esri-feature h3,
        .esri-feature h4,
        .esri-feature h5,
        .esri-feature h6 {
          font-size: ${f};
        }
        .esri-feature p {
          font-size: ${p};
        }

        .esri-feature figcaption {
          font-size: ${b};
        }

        .esri-feature__media-item-title {
          font-size: ${g};
        }
        .esri-feature__media-item-caption {
          font-size: ${m};
        }
        .esri-feature__last-edited-info {
          font-size: ${b};
        }

      }
    }
  `}!function(t){t.syncWithTheme="syncWithTheme",t.usePopupDefined="usePopupDefined",t.custom="custom"}(t||(t={})),function(t){t.auto="auto",t.custom="custom"}(e||(e={}));const s="Feature Info";var d,c=n(826),l=n(379),u=n.n(l),p=n(795),h=n.n(p),g=n(569),f=n.n(g),m=n(565),b=n.n(m),x=n(216),v=n.n(x),S=n(589),y=n.n(S),w=n(62),D={};D.styleTagTransform=y(),D.setAttributes=b(),D.insert=f().bind(null,"head"),D.domAPI=h(),D.insertStyleElement=v(),u()(w.Z,D),w.Z&&w.Z.locals&&w.Z.locals,function(t){t.Pending="Pending",t.Fulfilled="Fulfilled",t.Rejected="Rejected"}(d||(d={}));class I extends o.React.PureComponent{constructor(t){super(t),this.state={loadStatus:d.Pending}}componentDidMount(){this.createFeature()}componentDidUpdate(){if(this.feature){const t={popupTemplate:{content:""}};this.feature.graphic=this.props.graphic||t,this.feature.visibleElements=this.props.visibleElements}}destoryFeature(){this.feature&&!this.feature.destroyed&&this.feature.destroy()}createFeature(){let t;return t=this.Feature?Promise.resolve():(0,c.loadArcGISJSAPIModules)(["esri/widgets/Feature"]).then((t=>{[this.Feature]=t})),t.then((()=>{var t,e;const o=document&&document.createElement("div");o.className="jimu-widget",o.className="data-container",this.refs.featureContainer.appendChild(o);const a=this.props.dataSource.getRootDataSource();this.destoryFeature(),this.feature=new this.Feature({container:o,defaultPopupTemplateEnabled:!0,spatialReference:(null===(e=null===(t=this.props.dataSource)||void 0===t?void 0:t.layer)||void 0===e?void 0:e.spatialReference)||null,map:(null==a?void 0:a.map)||null})})).then((()=>{this.setState({loadStatus:d.Fulfilled})}))}render(){return o.React.createElement("div",{className:"parent resizable floating-panel multiple-widget-launcher jimu-draggable jimu-draggable-dragged "},o.React.createElement("div",{className:"feature-info-component  resizable floating-panel  jimu-draggable"},o.React.createElement("h2",{className:"titleName"},"Title"),o.React.createElement("div",{ref:"featureContainer",className:"inner-info"})))}}var C=function(t,e,o,a){return new(o||(o=Promise))((function(r,n){function i(t){try{d(a.next(t))}catch(t){n(t)}}function s(t){try{d(a.throw(t))}catch(t){n(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(i,s)}d((a=a.apply(t,e||[])).next())}))};class k extends o.React.PureComponent{constructor(t){super(t),this.onDataSourceCreated=t=>{this.dataSource=t,this.previousIndex=this.props.index,this.isFirstLoad=!0,this.setState({dataSourceId:this.dataSource.id})},this.onCreateDataSourceFailed=t=>{},this.onDataSourceInfoChange=t=>{var e;if(!t)return;t.status===o.DataSourceStatus.NotReady&&this.props.onDataSourceStatusChanged(o.DataSourceStatus.NotReady,null===(e=this.dataSource)||void 0===e?void 0:e.getLabel()),this.setState({dataSourceStatus:t.status,dataSourceWidgetQueries:t.widgetQueries,dataSourceVersion:t.version});const a=t.selectedIds&&t.selectedIds[0];a?(this.previousSelectedId=a,this.getDataIndexByObjectId(a).then((t=>{t>-1&&t<this.dataBuffer.count&&this.props.onSelectedRecordIdChanged(t,this.dataSource.id)}))):this.previousSelectedId&&(this.previousSelectedId=null,this.props.onUnselectedRecordIdChanged(this.dataSource.id))},this.state={dataSourceId:null,dataSourceStatus:o.DataSourceStatus.Loaded,dataSourceVersion:void 0,dataSourceWidgetQueries:void 0},this.previousIndex=0,this.previousData={id:null,count:null,index:null,graphic:null,record:null,dataSourceVersion:void 0,dataSourceId:null},this.dataBuffer={count:null,dataMap:{},pagingNum:30},this.isFirstLoad=!1,this.previousSelectedId=null}componentDidMount(){}componentDidUpdate(){return C(this,void 0,void 0,(function*(){if(this.props.useDataSource&&this.state.dataSourceId===this.props.useDataSource.dataSourceId&&this.state.dataSourceStatus===o.DataSourceStatus.Loaded){let t;this.props.index===this.previousIndex?(this.clearData(),t=this.props.index):(this.previousIndex=this.props.index,t=this.props.index);let e=this.getData(t);if(!e)return yield this.dataSource.queryCount({}).then((o=>{const a=o.count;t>=a&&(t=0),this.queryGraphics(this.dataSource,null,t,this.dataBuffer.pagingNum,a).then((t=>{0===t.graphics.length?e=null:(this.addData(t,this.dataSource.id),e=this.getData(t.index)),this.onDataChanged(this.dataSource,e),this.isFirstLoad=!1}))}));this.onDataChanged(this.dataSource,e)}}))}onDataChanged(t,e){var a,r,n,i,s,d;e?(null===(a=this.previousData)||void 0===a?void 0:a.dataSourceId)!==(null==e?void 0:e.dataSourceId)||(null===(r=this.previousData)||void 0===r?void 0:r.id)!==(null==e?void 0:e.id)||(null===(n=this.previousData)||void 0===n?void 0:n.count)!==(null==e?void 0:e.count)||(null===(i=this.previousData)||void 0===i?void 0:i.index)!==(null==e?void 0:e.index)||(null===(s=this.previousData)||void 0===s?void 0:s.dataSourceVersion)!==(null==e?void 0:e.dataSourceVersion)?this.props.onDataChanged(this.dataSource,e,this.isFirstLoad):this.props.onDataSourceStatusChanged(o.DataSourceStatus.Loaded,null===(d=this.dataSource)||void 0===d?void 0:d.getLabel()):this.props.onDataChanged(this.dataSource,e),this.previousData=e}addData(t,e){t.records.forEach(((o,a)=>{const r=t.start+a;this.dataBuffer.dataMap[r]={id:o.getId(),count:this.dataBuffer.count,index:r,graphic:t.graphics[a],record:o,dataSourceId:e,dataSourceVersion:this.state.dataSourceVersion}}))}initData(t){this.dataBuffer.count=t}getData(t){return this.dataBuffer.dataMap[t]}getDataIndexByObjectId(t){return C(this,void 0,void 0,(function*(){let e=-1;if(Object.entries(this.dataBuffer.dataMap).some((o=>{var a;return t===(null===(a=o[1])||void 0===a?void 0:a.id)&&(e=Number(o[0]),!0)})),e<0&&this.dataSource){const o=this.dataSource.getIdField();return this.dataSource.queryCount({where:`${o}<=${t}`}).then((t=>(e=t.count-1,e)))}return Promise.resolve(e)}))}clearData(){this.dataBuffer.count=null,this.dataBuffer.dataMap={}}isEmptyData(){return null===this.dataBuffer.count}getLayerObject(t){return t.layer?t.layer.load().then((()=>Promise.resolve(t.layer))):t.createJSAPILayerByDataSource().then((t=>t.load().then((()=>Promise.resolve(t)))))}queryGraphics(t,e,a,r,n){var i;return C(this,void 0,void 0,(function*(){let e,s,d=a;return this.props.onDataSourceStatusChanged(o.DataSourceStatus.Loading,null===(i=this.dataSource)||void 0===i?void 0:i.getLabel()),this.getLayerObject(t).then((e=>C(this,void 0,void 0,(function*(){if(s=e,this.isEmptyData()&&this.initData(n),this.isFirstLoad){const e=t.getSelectedRecordIds()[0];if(void 0!==e)return yield this.getDataIndexByObjectId(e).then((t=>{d=-1===t?0:t}))}})))).then((()=>{e=Math.floor(d/this.dataBuffer.pagingNum)*this.dataBuffer.pagingNum;const o={outFields:["*"],returnGeometry:!0,page:Math.floor(e/r)+1,pageSize:r};return t.query(o)})).then((t=>{const o=t.records,a=o.map((t=>(t.feature.sourceLayer=s.associatedLayer||s,t.feature.layer=s.associatedLayer||s,t.feature)));return{index:d,start:e,num:r,graphics:a,records:o}})).catch((t=>(console.warn(t),{graphics:[],records:[]})))}))}getOrderBy(t,e){const a=[];let r;return e&&e.orderBy&&e.orderBy.length>0&&(e.orderBy.forEach((t=>{t.jimuFieldName&&a.push(`${t.jimuFieldName} ${t.order}`)})),r=t.type===o.DataSourceTypes.FeatureLayer?a.join(","):a),r}getQueryParamsFromDataSource(t){return t.getRealQueryParams({},"query")}loadGraphics(t,e){return C(this,void 0,void 0,(function*(){return this.props.onDataSourceStatusChanged(o.DataSourceStatus.Loading),yield(0,c.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer","esri/rest/support/Query"]).then((o=>{const[a,r]=o,n=new r;let i=t.layer;const s=e&&e.where.sql;let d;return n.where=s||"1=1",n.returnGeometry=!1,n.outFields=["*"],d=0===this.props.maxGraphics?null:this.props.maxGraphics,n.num=this.props.limitGraphics?d:null,!i&&t.url&&(i=new a({url:t.url})),i?i.queryFeatures(n).then((t=>t.features)):[]})).catch((t=>(console.warn(t),[])))}))}render(){return o.React.createElement(o.DataSourceComponent,{useDataSource:this.props.useDataSource,query:{},widgetId:this.props.widgetId,onDataSourceCreated:this.onDataSourceCreated,onDataSourceInfoChange:this.onDataSourceInfoChange,onCreateDataSourceFailed:this.onCreateDataSourceFailed})}}class M extends o.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.1.0",description:"added [styleType] and [fontSizeType]",upgrader:t=>{let e=t;return e=e.set("styleType","usePopupDefined"),e.getIn(["style","fontSize","distance"])||e.getIn(["style","textColor"])?e=e.setIn(["style","fontSizeType"],"custom"):(e=e.setIn(["style","fontSizeType"],"auto"),e=e.setIn(["style","fontSize","distance"],14)),e}}]}}const j=new M;var _=n(507),z=n.n(_);class L extends o.React.PureComponent{constructor(t){super(t),this.onPreGraphicBtnClick=()=>{let t=this.state.currentDataIndex;t>0&&(this.setState({currentDataIndex:--t}),this.lockSelection=!1)},this.onNextGraphictBtnClick=()=>{let t=this.state.currentDataIndex;t<this.currentData.count-1&&(this.setState({currentDataIndex:++t}),this.lockSelection=!1)},this.onSelectedRecordIdChanged=(t,e)=>{t>-1&&this.dataSource.id===e&&this.setState({currentDataIndex:t})},this.onUnselectedRecordIdChanged=t=>{var e;(null===(e=this.dataSource)||void 0===e?void 0:e.id)===t&&o.MessageManager.getInstance().publishMessage(new o.DataRecordsSelectionChangeMessage(this.props.id,[]))},this.onDataSourceStatusChanged=(t,e)=>{this.setState({loadDataStatus:t,dataSourceLabel:e})},this.onDataChanged=(t,e,a)=>{this.dataSource=t,this.previousData=this.currentData,this.currentData=e,this.setState({currentDataId:this.currentData?this.currentData.id:null,currentDataIndex:this.currentData?this.currentData.index:0,loadDataStatus:o.DataSourceStatus.Loaded}),this.lockSelection||(this.selectGraphic(),this.lockSelection=!0)},this.onCurrentFeatureClick=()=>{this.selectGraphic()},this.previousData=null,this.currentData=null,this.lockSelection=!0,this.warningIcon=`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M0.5 0.5H25.5V25.5H0.5V0.5Z" fill=${this.props.theme.colors.palette.warning[100]}\n                    stroke="${this.props.theme.colors.palette.warning[300]}"/>\n                  <path d="M12.0995 10.87C12.0462 10.3373 12.4646 9.875 13 9.875C13.5354 9.875 13.9538 10.3373 13.9005 10.87L13.5497 14.3775C13.5215 14.6599 13.2838 14.875 13 14.875C12.7162\n                    14.875 12.4785 14.6599 12.4502 14.3775L12.0995 10.87Z" fill="${this.props.theme.colors.palette.warning[700]}"/>\n                  <path d="M13 17.875C13.5523 17.875 14 17.4273 14 16.875C14 16.3227 13.5523 15.875 13 15.875C12.4477 15.875 12 16.3227 12 16.875C12 17.4273 12.4477 17.875 13 17.875Z"\n                    fill="${this.props.theme.colors.palette.warning[700]}"/>\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66666 19.875C5.91174 19.875 5.42905 19.0705 5.78431 18.4044L12.1176 6.52941C12.4941 5.82353 13.5059 5.82353 13.8824\n                    6.52941L20.2157 18.4044C20.5709 19.0705 20.0883 19.875 19.3333 19.875H6.66666ZM6.66666 18.875L13 7L19.3333 18.875H6.66666Z" fill="${this.props.theme.colors.palette.warning[700]}"/>\n                  </svg>`,this.state={currentDataId:null,currentDataIndex:0,loadDataStatus:o.DataSourceStatus.Loading,dataSourceWidgetId:null,dataSourceLabel:""}}componentDidMount(){}componentDidUpdate(){const t=this.props.useDataSources&&this.props.useDataSources[0];t?this.setState({dataSourceWidgetId:o.appConfigUtils.getWidgetIdByOutputDataSource(t)}):(this.setState({currentDataId:null,currentDataIndex:0}),this.currentData=null)}handleAction(t){}selectGraphic(){var t;const e=null===(t=this.currentData)||void 0===t?void 0:t.record;if(e&&this.dataSource){o.MessageManager.getInstance().publishMessage(new o.DataRecordsSelectionChangeMessage(this.props.id,[e]));const t=this.dataSource.getSelectedRecordIds(),a=e.getId();t.includes(a)||this.dataSource.queryById(a).then((t=>{this.dataSource.selectRecordsByIds([a],[t])}))}}getStyleConfig(){return this.props.config.style?this.props.config.style:{textColor:"",fontSizeType:e.auto,fontSize:null,backgroundColor:""}}render(){var t,e,n;const i=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],d=this.props.useDataSources&&this.props.useDataSources[0];let c=null;c=(0,o.jsx)(k,{useDataSource:d,widgetId:this.props.id,index:this.state.currentDataIndex,limitGraphics:this.props.config.limitGraphics,maxGraphics:this.props.config.maxGraphics,onSelectedRecordIdChanged:this.onSelectedRecordIdChanged,onUnselectedRecordIdChanged:this.onUnselectedRecordIdChanged,onDataSourceStatusChanged:this.onDataSourceStatusChanged,onDataChanged:this.onDataChanged});let l=null;if(this.props.config.useMapWidget?i:d){let e=null;this.state.loadDataStatus===o.DataSourceStatus.Loading&&(e=(0,o.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-secondary-loading"}));let r=null,n=null;const i=this.props.intl.formatMessage({id:"featureInfoDataActionLabel",defaultMessage:"{layer} feature info selection"},{layer:(null===(t=this.dataSource)||void 0===t?void 0:t.getLabel())||""}),d=void 0===this.props.enableDataAction||this.props.enableDataAction;this.currentData&&this.currentData.count>0&&d&&(r=(0,o.jsx)("div",{className:"data-action-placeholder"}),n=(0,o.jsx)("div",{className:"data-action-dropdown-content"},(0,o.jsx)(a.DataActionDropDown,{widgetId:this.props.id,dataSet:{dataSource:this.dataSource,records:[this.currentData.record],name:i},type:"tertiary"})));let u=null;if(this.currentData&&this.currentData.count>1){const t=this.props.intl.formatMessage({id:"featureNumbers",defaultMessage:"{index} of {count}"},{index:this.currentData.index+1,count:this.currentData.count});u=(0,o.jsx)("div",{className:"nav-section d-flex justify-content-center align-items-center"},(0,o.jsx)(a.Button,{className:"nav-btn",type:"tertiary",size:"sm",onClick:this.onPreGraphicBtnClick}," ","<"," "),(0,o.jsx)("span",null," ",t," "),(0,o.jsx)(a.Button,{className:"nav-btn",type:"tertiary",size:"sm",onClick:this.onNextGraphictBtnClick}," ",">"," "))}let p=null;this.currentData&&(1===this.currentData.count?d:this.currentData.count>1)&&this.state.loadDataStatus!==o.DataSourceStatus.NotReady&&(p=(0,o.jsx)("div",{className:"header-section"},r,u,n));const h={title:this.props.config.title,content:{fields:this.props.config.fields,text:this.props.config.fields,media:this.props.config.media,attachments:this.props.config.attachments,expression:!0},lastEditedInfo:this.props.config.lastEditInfo};let g;if(this.state.loadDataStatus===o.DataSourceStatus.NotReady){const t=this.props.intl.formatMessage({id:"outputDataIsNotGenerated",defaultMessage:"warning"},{outputDsLabel:this.state.dataSourceLabel,sourceWidgetName:this.props.dataSourceWidgetLabel});g=(0,o.jsx)("div",{className:"widget-featureInfo"},(0,o.jsx)(a.WidgetPlaceholder,{icon:z(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:s}),widgetId:this.props.id}),(0,o.jsx)(a.Icon,{className:"warning-icon",icon:this.warningIcon,size:26,title:t,currentColor:!1}))}else g=this.currentData&&this.dataSource?(0,o.jsx)("div",{style:{cursor:"pointer"},onClick:this.onCurrentFeatureClick},(0,o.jsx)(I,{graphic:this.currentData.graphic,visibleElements:h,dataSource:this.dataSource})):(0,o.jsx)("div",{className:"no-data-message p-4 font-weight-bold",dangerouslySetInnerHTML:{__html:this.props.config.noDataMessage||this.props.intl.formatMessage({id:"noDeataMessageDefaultText",defaultMessage:"No data found."})}});l=(0,o.jsx)("div",{className:"widget-featureInfo"},e,p,g,(0,o.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),(0,o.jsx)("div",{style:{position:"absolute",display:"none"}},c))}else l=(0,o.jsx)("div",{className:"widget-featureInfo"},(0,o.jsx)(a.WidgetPlaceholder,{icon:z(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:s}),widgetId:this.props.id})),this.currentData=null;return(0,o.jsx)("div",{css:r(this.props.theme,this.props.config.styleType,this.getStyleConfig(),null===(n=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===n?void 0:n.isRTL),className:"jimu-widget"},l)}}L.versionManager=j,L.mapExtraStateProps=(t,e)=>{var a,r;const n=e.useDataSources&&e.useDataSources[0],i=o.appConfigUtils.getWidgetIdByOutputDataSource(n);return{dataSourceWidgetLabel:null===(r=null===(a=t.appConfig)||void 0===a?void 0:a.widgets[i])||void 0===r?void 0:r.label}}})(),i})())}}}));