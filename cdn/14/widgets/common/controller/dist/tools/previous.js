System.register(["jimu-core","jimu-ui"],(function(e,t){var r={},o={};return{setters:[function(e){r.appActions=e.appActions,r.getAppStore=e.getAppStore,r.i18n=e.i18n},function(e){o.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={11407:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=o}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,i),l.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";i.r(l),i.d(l,{default:()=>a});var e=i(48891),t=i(30726),r=i(3273),o=i.n(r),n=i(11407),s=i.n(n);class a{constructor(){this.index=1,this.id="controller-roll-list-previous",this.classes={}}visible(t){const r=(0,e.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];return!(null==r?void 0:r.hideArrow)}disabled(t){const r=(0,e.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];return null==r?void 0:r.disablePrevious}getGroupId(){return"controller-tools"}getTitle(){const r=e.i18n.getIntl("_jimu");return r?r.formatMessage({id:"previous",defaultMessage:t.defaultMessages.previous}):"Previous"}getIcon(){var t;return(null===(t=(0,e.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)?o():s()}onClick(t){var r;const o=t.layoutItem.widgetId,i=(0,e.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];if(null==i?void 0:i.onArrowClick){i.onArrowClick(!0,!1);let t=null!==(r=null==i?void 0:i.version)&&void 0!==r?r:0;(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(o,"version",++t))}}getSettingPanel(e){return null}}})(),l})())}}}));