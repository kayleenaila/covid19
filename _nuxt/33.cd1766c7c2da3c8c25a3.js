(window.webpackJsonp=window.webpackJsonp||[]).push([[33,7,34,35,36,66],{411:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},417:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(292),n(101);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},449:function(t,e,n){"use strict";var o=n(1);function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},l=e.value,d="object"===Object(o.a)(l)?l:{handler:l,options:{}},c=d.handler,v=d.options,f=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(t._observe){var l=e.some((function(t){return t.isIntersecting}));!c||n.quiet&&!t._observe.init||n.once&&!l&&t._observe.init||c(e,o,l),l&&n.once?r(t):t._observe.init=!0}}),v);t._observe={init:!1,observer:f},f.observe(t)}},unbind:r};e.a=l},459:function(t,e,n){"use strict";n(101);var o=n(19),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),d=Object(o.f)(this.maxWidth),c=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),d&&(t.maxWidth=d),c&&(t.width=c),t}}})},460:function(t,e,n){"use strict";n(23),n(28),n(36),n(38);var o=n(7),r=(n(101),n(26),n(35),n(69),n(277),n(21),n(39),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(40),n(47),n(12),n(70),n(291),n(0)),l=n(183),d=n(19);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],_=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(d.C)(e)]={type:[String,Number],default:null},t}),{}),w=f.reduce((function(t,e){return t["order"+Object(d.C)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(_),offset:Object.keys(m),order:Object.keys(w)};function h(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},_),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,d=(e.parent,"");for(var c in n)d+=String(n[c]);var v=y.get(d);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var o=n[t],r=h(e,t,o);r&&v.push(r)}));var r=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(d,v)}(),t(n.tag,Object(l.a)(data,{class:v}),r)}})},462:function(t,e,n){var content=n(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5e22af2d",content,!0,{sourceMap:!1})},477:function(t,e,n){"use strict";n.r(e);n(47),n(48);var o=n(0).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),r=n(484),l=n(10);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},484:function(t,e,n){"use strict";var o=n(462),r=n.n(o);n.d(e,"default",(function(){return r.a}))},485:function(t,e,n){var o=n(32)(!1);o.push([t.i,".parent_25AIV{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),o.locals={parent:"parent_25AIV"},t.exports=o},492:function(t,e,n){var content=n(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4509a34d",content,!0,{sourceMap:!1})},493:function(t,e,n){var content=n(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5f38c72d",content,!0,{sourceMap:!1})},513:function(t,e,n){var content=n(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("bc065de8",content,!0,{sourceMap:!1})},530:function(t){t.exports=JSON.parse('{"date":"2021/10/21 19:00","data":{"専門家3行コメント":[{"@ja":"ワクチンを2回接種した後も感染する可能性があり、軽症や無症状でも周囲の人に感染させるリスクがある。","@en":"ワクチンを2回接種した後も感染する可能性があり、軽症や無症状でも周囲の人に感染させるリスクがある。"},{"@ja":"ワクチン接種後も、感染リスクの高い行動を引き続き避けるとともに、基本的な感染防止対策を徹底する必要がある。","@en":"ワクチン接種後も、感染リスクの高い行動を引き続き避けるとともに、基本的な感染防止対策を徹底する必要がある。"},{"@ja":"入院患者数と重症患者数は継続して減少しており、通常医療との両立が可能になりつつある。","@en":"入院患者数と重症患者数は継続して減少しており、通常医療との両立が可能になりつつある。"}],"(1)新規陽性者数":43.6,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":53.6,"(3)新規陽性者における接触歴等不明者（人数）":27.1,"(3)新規陽性者における接触歴等不明者（増加比）":60.3,"(4)PCR・抗原検査（陽性率）":0.7,"(4)PCR・抗原検査（検査人数）":5822.4,"(5)救急医療の東京ルールの適用件数":45.3,"(6)入院患者数":256,"(6)入院患者確保病床数":6651,"(7)重症患者数":24,"(7)重症患者確保病床数":503,"総括コメント-感染状況":{"date":"2021-10-21","level":2,"display":{"@ja":"感染状況は改善傾向にあるが、注意が必要である","@en":"Although the infection situation is improving, caution against the virus is needed."}},"総括コメント-医療提供体制":{"date":"2021-10-21","level":2,"display":{"@ja":"通常の医療との両立が可能な状況である\\n","@en":"A balance between the provision of COVID and non-COVID health care is possible."}}}}')},531:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(417),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},d=Object(o.a)(0),c=Object(o.a)(1);return{"(1)新規陽性者数":{value:c(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:c(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:c(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:c(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:c(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:c(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:c(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:d(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:d(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:d(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:d(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},562:function(t,e,n){"use strict";var o=n(492),r=n.n(o);n.d(e,"default",(function(){return r.a}))},563:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.container_3XjJx{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_3XjJx,.container_3XjJx *{box-sizing:border-box}.container_3XjJx ul{padding-left:0}.group_1p13o{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_2oIg7{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_2oIg7>span{display:block;font-size:1.4rem}.content_2oIg7>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_2oIg7>span:not(:last-child){word-wrap:break-word}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{display:block;margin-top:3px}.box_1PPAr.parent_3YN05{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_1PPAr.parent_3YN05:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_1p13o{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_2oIg7{padding:.396vw .792vw;border:.238vw solid #008830}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.08vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.238vw}.box_1PPAr.parent_3YN05{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_1PPAr.parent_3YN05:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_1p13o{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_2oIg7{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.105vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.313vw}.box_1PPAr.parent_3YN05{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_1PPAr.parent_3YN05:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_1p13o{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_2oIg7{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.167vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.5vw}.box_1PPAr.parent_3YN05{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_1PPAr.parent_3YN05:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_3XjJx",group:"group_1p13o",content:"content_2oIg7",unit:"unit_2PKD5",box:"box_1PPAr",parent:"parent_3YN05"},t.exports=o},564:function(t,e,n){"use strict";var o=n(493),r=n.n(o);n.d(e,"default",(function(){return r.a}))},565:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.container_z0XXc{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_z0XXc,.container_z0XXc *{box-sizing:border-box}.container_z0XXc ul{padding-left:0}.group_2pBHl{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_1kFjt{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_1kFjt>span{display:block;font-size:1.4rem}.content_1kFjt>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_1kFjt>span:not(:last-child){word-wrap:break-word}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{display:block;margin-top:3px}.box_2T-dp.parent_1ZNHR{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_2T-dp.parent_1ZNHR:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_2pBHl{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_1kFjt{padding:.396vw .792vw;border:.238vw solid #008830}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.08vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.238vw}.box_2T-dp.parent_1ZNHR{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_2T-dp.parent_1ZNHR:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_2pBHl{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_1kFjt{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.105vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.313vw}.box_2T-dp.parent_1ZNHR{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_2T-dp.parent_1ZNHR:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_2pBHl{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_1kFjt{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.167vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.5vw}.box_2T-dp.parent_1ZNHR{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_2T-dp.parent_1ZNHR:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_z0XXc",group:"group_2pBHl",content:"content_1kFjt",unit:"unit_26rAD",box:"box_2T-dp",parent:"parent_1ZNHR"},t.exports=o},606:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(477),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),d=n(562),c=n(10);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(1)新規陽性者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(1)新規陽性者数"].value,unit:t.items["(1)新規陽性者数"].unit,bold:t.items["(1)新規陽性者数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("潜在・市中感染")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v("\n            "+t._s(t.$t("(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "))+"\n          ")]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].value,unit:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].unit,bold:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(3)新規陽性者における接触歴等不明者")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("人数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（人数）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（人数）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("増加比")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},607:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(477),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),d=n(564),c=n(10);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(4)PCR・抗原検査")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性率")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（陽性率）"].value,unit:t.items["(4)PCR・抗原検査（陽性率）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査人数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（検査人数）"].value,unit:t.items["(4)PCR・抗原検査（検査人数）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("受入体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(5)救急医療の東京ルールの適用件数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(5)救急医療の東京ルールの適用件数"].value,unit:t.items["(5)救急医療の東京ルールの適用件数"].unit,bold:t.items["(5)救急医療の東京ルールの適用件数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(6)入院患者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者数"].value,unit:t.items["(6)入院患者数"].unit,bold:t.items["(6)入院患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者確保病床数"].value,unit:t.items["(6)入院患者確保病床数"].unit,bold:t.items["(6)入院患者確保病床数"].bold}})],1)])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(7)重症患者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者数"].value,unit:t.items["(7)重症患者数"].unit,bold:t.items["(7)重症患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者確保病床数"].value,unit:t.items["(7)重症患者確保病床数"].unit,bold:t.items["(7)重症患者確保病床数"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},638:function(t,e,n){"use strict";var o=n(513),r=n.n(o);n.d(e,"default",(function(){return r.a}))},639:function(t,e,n){var o=n(32)(!1);o.push([t.i,".section_3Eksn{margin:0 0 20px}.section_3Eksn:first-child{margin-top:-10px}.section_3Eksn h4{margin:5px 0 10px;font-weight:400;font-size:1.6rem}.button_LXhGM{color:#008830!important;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.button_LXhGM:hover{color:#fff!important;background-color:#008830;color:#fff}.button_LXhGM:hover>i{color:#fff!important}.button-wrap_106Sw{margin-bottom:16px}.inner-link_33Oxp{text-decoration:none}dfn{font-style:normal;font-weight:600}",""]),o.locals={section:"section_3Eksn",button:"button_LXhGM","button-wrap":"button-wrap_106Sw","inner-link":"inner-link_33Oxp"},t.exports=o},715:function(t,e,n){"use strict";n.r(e);var o=n(88),r=n(418),l=n(606),d=n(607),c=n(530),v=n(531),f={components:{DataView:r.default,InfectionStatus:l.default,MedicalSystem:d.default,AppLink:o.default},data:function(){var t=Object(v.b)(c.data);return{monitoringItemsData:c,monitoringItems:t}}},_=n(638),m=n(10),w=n(59),x=n.n(w),h=n(460);var component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringItemsOverviewCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("モニタリング項目"),"title-id":"monitoring-items-overview",date:t.monitoringItemsData.date},scopedSlots:t._u([t.$route.path!==t.localePath("/monitoring")?{key:"description",fn:function(){return[n("app-link",{class:[t.$style.button,t.$style["inner-link"]],attrs:{to:t.localePath("/monitoring")}},[t._v("\n          "+t._s(t.$t("モニタリング項目の各グラフはこちら"))+"\n        ")])]},proxy:!0}:null,{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[n("i18n",{attrs:{tag:"span",path:"{number}：急病やけがの際に、緊急受診の必要性や診察可能な医療機関をアドバイスする電話相談窓口"},scopedSlots:t._u([{key:"number",fn:function(){return[n("dfn",[t._v("#7119")])]},proxy:!0}])})],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(1)～(5)は7日間移動平均で算出"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(4)(5)は報告日の前日時点の数値"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(6)の確保病床数には、(7)の確保病床数を含む"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("速報値として公表するものであり、後日修正する場合がある"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(5)は土曜日、日曜日、祝日は更新しない。(4)は日曜日、祝日は更新しない"))+"\n          ")])])]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.monitoringItems}})],1),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),n("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.monitoringItems}})],1),t._v(" "),n("div",{class:t.$style["button-wrap"]},[n("app-link",{class:t.$style.button,attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"}},[t._v("\n          "+t._s(t.$t("最新のモニタリング項目の分析・総括コメントについて"))+"\n        ")])],1),t._v(" "),n("div",[n("app-link",{class:t.$style.button,attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/kunishihyou.html"}},[t._v("\n          "+t._s(t.$t("国のステージ判断のための指標"))+"\n        ")])],1)])],1)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;x()(component,{VCol:h.a})}}]);