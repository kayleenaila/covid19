(window.webpackJsonp=window.webpackJsonp||[]).push([[17,18,19,66,124],{411:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},417:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(292),n(101);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},449:function(t,e,n){"use strict";var o=n(1);function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},l=e.value,c="object"===Object(o.a)(l)?l:{handler:l,options:{}},m=c.handler,d=c.options,f=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(t._observe){var l=e.some((function(t){return t.isIntersecting}));!m||n.quiet&&!t._observe.init||n.once&&!l&&t._observe.init||m(e,o,l),l&&n.once?r(t):t._observe.init=!0}}),d);t._observe={init:!1,observer:f},f.observe(t)}},unbind:r};e.a=l},459:function(t,e,n){"use strict";n(101);var o=n(19),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),c=Object(o.f)(this.maxWidth),m=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),m&&(t.width=m),t}}})},460:function(t,e,n){"use strict";n(23),n(28),n(36),n(38);var o=n(7),r=(n(101),n(26),n(35),n(69),n(277),n(21),n(39),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(40),n(47),n(12),n(70),n(291),n(0)),l=n(183),c=n(19);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),C=f.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(C)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var _=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},C),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var m in n)c+=String(n[m]);var d=_.get(c);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),r)}})},524:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("45d64bcf",content,!0,{sourceMap:!1})},525:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("d93b19ee",content,!0,{sourceMap:!1})},530:function(t){t.exports=JSON.parse('{"date":"2021/10/21 19:00","data":{"専門家3行コメント":[{"@ja":"ワクチンを2回接種した後も感染する可能性があり、軽症や無症状でも周囲の人に感染させるリスクがある。","@en":"ワクチンを2回接種した後も感染する可能性があり、軽症や無症状でも周囲の人に感染させるリスクがある。"},{"@ja":"ワクチン接種後も、感染リスクの高い行動を引き続き避けるとともに、基本的な感染防止対策を徹底する必要がある。","@en":"ワクチン接種後も、感染リスクの高い行動を引き続き避けるとともに、基本的な感染防止対策を徹底する必要がある。"},{"@ja":"入院患者数と重症患者数は継続して減少しており、通常医療との両立が可能になりつつある。","@en":"入院患者数と重症患者数は継続して減少しており、通常医療との両立が可能になりつつある。"}],"(1)新規陽性者数":43.6,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":53.6,"(3)新規陽性者における接触歴等不明者（人数）":27.1,"(3)新規陽性者における接触歴等不明者（増加比）":60.3,"(4)PCR・抗原検査（陽性率）":0.7,"(4)PCR・抗原検査（検査人数）":5822.4,"(5)救急医療の東京ルールの適用件数":45.3,"(6)入院患者数":256,"(6)入院患者確保病床数":6651,"(7)重症患者数":24,"(7)重症患者確保病床数":503,"総括コメント-感染状況":{"date":"2021-10-21","level":2,"display":{"@ja":"感染状況は改善傾向にあるが、注意が必要である","@en":"Although the infection situation is improving, caution against the virus is needed."}},"総括コメント-医療提供体制":{"date":"2021-10-21","level":2,"display":{"@ja":"通常の医療との両立が可能な状況である\\n","@en":"A balance between the provision of COVID and non-COVID health care is possible."}}}}')},531:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(417),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),m=Object(o.a)(1);return{"(1)新規陽性者数":{value:m(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:m(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:m(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:m(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:m(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:m(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:m(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},539:function(t,e,n){var content=n(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("76b3c5a9",content,!0,{sourceMap:!1})},550:function(t,e,n){"use strict";n(524)},551:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-592c53a8]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-592c53a8]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-592c53a8]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},552:function(t,e,n){"use strict";n(525)},553:function(t,e,n){var o=n(32)(!1);o.push([t.i,".RandomImageContainer[data-v-cc1b0b78]{display:flex;justify-content:center}",""]),t.exports=o},599:function(t,e,n){"use strict";n.r(e);n(101);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(550),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"592c53a8",null);e.default=component.exports},600:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{currentImage:function(){var t=this.monitoringCommentImage.data.images.length,e=Math.floor(Math.random()*t);return this.monitoringCommentImage.data.images[e]},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=(n(552),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RandomImageContainer"},[n("a",{attrs:{target:"_blank",href:t.currentImage.href}},[n("img",{attrs:{width:"320",height:"240",src:t.currentImage.src,alt:t.currentImage.alt}})])])}),[],!1,null,"cc1b0b78",null);e.default=component.exports},632:function(t,e,n){"use strict";n(539)},633:function(t,e,n){var o=n(32)(!1);o.push([t.i,".MonitoringComment-date[data-v-44ff3322]{text-align:right;font-size:1.4rem}.MonitoringComment-summary-item[data-v-44ff3322]{margin-bottom:8px;font-size:1.4rem}.MonitoringCommentFrame[data-v-44ff3322]{margin:20px 0}.MonitoringCommentFrame-title[data-v-44ff3322]{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringCommentImage[data-v-44ff3322]{margin-top:50px}.MonitoringCommentLink[data-v-44ff3322]{display:flex;justify-content:center;align-items:center;margin-top:12px;font-size:1.4rem}",""]),t.exports=o},707:function(t,e,n){"use strict";n.r(e);n(47),n(20);var o=n(45),r=n(0),l=n(88),c=n(418),m=n(599),d=n(530),f=n(531),v=n(600),h=r.default.extend({components:{AppLink:l.default,DataView:c.default,Frame:m.default,RandomImage:v.default},data:function(){return{monitoringComment:Object(f.a)(d.data),date:d.date,mdiChevronRight:o.e}},computed:{translatedMonitoringSummarizedComments:function(){var t=d.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]},formattedDate:function(t){return this.$d(new Date(t),"date")}}}),C=(n(632),n(10)),j=n(59),y=n.n(j),_=n(460),O=n(399),component=Object(C.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringCommentCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("感染状況・医療提供体制の分析"),"title-id":"monitoring-comment",date:t.date,"is-set-title-row":""},scopedSlots:t._u([{key:"infoPanel",fn:function(){return[n("div",{staticClass:"MonitoringComment-date"},[t._v("\n          "+t._s(t.$t("{date}時点",{date:t.formattedDate(t.monitoringComment["総括コメント-感染状況"].date)}))+"\n        ")])]},proxy:!0}])},[t._v(" "),n("div",[n("ul",t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("li",{key:i,staticClass:"MonitoringComment-summary-item"},[t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1),t._v(" "),n("div",{staticClass:"MonitoringCommentImage"},[n("random-image"),t._v(" "),n("div",{staticClass:"MonitoringCommentLink"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"}},[t._v("\n              "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n            ")])],1)],1)])])],1)],1)}),[],!1,null,"44ff3322",null);e.default=component.exports;y()(component,{VCol:_.a,VIcon:O.a})}}]);