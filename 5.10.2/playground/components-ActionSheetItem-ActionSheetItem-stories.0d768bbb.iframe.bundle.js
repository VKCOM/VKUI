"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5838],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":function(e,n,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),s=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(s)()(r());i.push([e.id,".VisuallyHidden--bAIOu{clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px!important;margin:-1px!important;opacity:0;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.VisuallyHidden--focusable-input--gqp5y{clip:auto!important;block-size:100%!important;-webkit-clip-path:none!important;clip-path:none!important;inline-size:100%!important;inset-block-start:0;inset-inline-start:0;pointer-events:none}",""]),i.locals={VisuallyHidden:"VisuallyHidden--bAIOu","VisuallyHidden--focusable-input":"VisuallyHidden--focusable-input--gqp5y"},n.Z=i},"./src/components/ActionSheetItem/ActionSheetItem.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Playground:function(){return h},WithChecked:function(){return C},WithIcon:function(){return S},WithSubtitle:function(){return I}});var o,r,s,i,l,c,u,d,a,p,m,y,b=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var f=t("./src/storybook/Icons.tsx"),O=t("./src/storybook/constants.ts"),_=t("./src/components/ActionSheetItem/ActionSheetItem.tsx");function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function k(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var v=(0,f.N$)(/^Icon2[04]Check/),g={title:"Popouts/ActionSheetItem",component:_.Q,parameters:j({},O.tW,O.nB),argTypes:{before:f.TO,iconChecked:v,meta:O.R0,subtitle:O.R0}};n.default=g;var h={render:function(e){var n=e.before,t=e.iconChecked,o=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["before","iconChecked"]),r=(0,f.ky)(n),s=(0,f.ky)(t);return(0,b.jsx)(_.Q,j({style:{border:"1px dashed red"},before:r,iconChecked:s},o))},args:{children:"Сохранить в закладках"}},S=k(j({},h),{args:{children:"Редактировать профиль",before:"Icon28EditOutline"}}),I=k(j({},h),{args:{children:"Качество",subtitle:"Авто"}}),C=k(j({},h),{args:{children:"Друзья по школе",selectable:!0,defaultChecked:!0}});h.parameters=k(j({},h.parameters),{docs:k(j({},null===(o=h.parameters)||void 0===o?void 0:o.docs),{source:j({originalSource:"{\n  render: function Render({\n    before,\n    iconChecked,\n    ...args\n  }) {\n    const Icon = getIconComponent(before);\n    const CheckIcon = getIconComponent(iconChecked);\n    return <ActionSheetItem style={{\n      border: '1px dashed red'\n    }} before={Icon} iconChecked={CheckIcon} {...args} />;\n  },\n  args: {\n    children: 'Сохранить в закладках'\n  }\n}"},null===(s=h.parameters)||void 0===s?void 0:null===(r=s.docs)||void 0===r?void 0:r.source)})}),S.parameters=k(j({},S.parameters),{docs:k(j({},null===(i=S.parameters)||void 0===i?void 0:i.docs),{source:j({originalSource:"{\n  ...Playground,\n  args: {\n    children: 'Редактировать профиль',\n    before: 'Icon28EditOutline'\n  }\n}"},null===(c=S.parameters)||void 0===c?void 0:null===(l=c.docs)||void 0===l?void 0:l.source)})}),I.parameters=k(j({},I.parameters),{docs:k(j({},null===(u=I.parameters)||void 0===u?void 0:u.docs),{source:j({originalSource:"{\n  ...Playground,\n  args: {\n    children: 'Качество',\n    subtitle: 'Авто'\n  }\n}"},null===(a=I.parameters)||void 0===a?void 0:null===(d=a.docs)||void 0===d?void 0:d.source)})}),C.parameters=k(j({},C.parameters),{docs:k(j({},null===(p=C.parameters)||void 0===p?void 0:p.docs),{source:j({originalSource:"{\n  ...Playground,\n  args: {\n    children: 'Друзья по школе',\n    selectable: true,\n    defaultChecked: true\n  }\n}"},null===(y=C.parameters)||void 0===y?void 0:null===(m=y.docs)||void 0===m?void 0:m.source)})})},"./src/components/VisuallyHidden/VisuallyHidden.tsx":function(e,n,t){t.d(n,{T:function(){return j}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=t("./src/components/RootComponent/RootComponent.tsx"),i=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(i),c=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=t.n(c),d=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),a=t.n(d),p=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=t.n(p),y=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=t.n(y),f=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),O={attributes:{class:"vkui-style"}};O.setAttributes=m(),O.insert=a().bind(null,"head"),O.domAPI=u(),O.insertStyleElement=b(),l()(f.Z,O);var _=f.Z&&f.Z.locals?f.Z.locals:void 0,j=function(e){var n=e.Component,t=void 0===n?"span":n,i=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["Component"]);return(0,o.jsx)(s.U,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({Component:t},i),{baseClassName:(0,r.AK)(_.VisuallyHidden,"input"===t&&_["VisuallyHidden--focusable-input"])}))};try{j.displayName="VisuallyHidden",j.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:j.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}},"./src/storybook/Icons.tsx":function(e,n,t){t.d(n,{N$:function(){return I},TO:function(){return S},ky:function(){return C}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/icons/dist/es6/28/copy_outline_28.js"),s=t("../../node_modules/@vkontakte/icons/dist/es6/28/delete_outline_28.js"),i=t("../../node_modules/@vkontakte/icons/dist/es6/28/edit_outline_28.js"),l=t("../../node_modules/@vkontakte/icons/dist/es6/28/list_play_outline_28.js"),c=t("../../node_modules/@vkontakte/icons/dist/es6/28/play_speed_outline_28.js"),u=t("../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js"),d=t("../../node_modules/@vkontakte/icons/dist/es6/28/share_outline_28.js"),a=t("../../node_modules/@vkontakte/icons/dist/es6/28/subtitles_outline_28.js"),p=t("../../node_modules/@vkontakte/icons/dist/es6/20/copy_outline_20.js"),m=t("../../node_modules/@vkontakte/icons/dist/es6/20/delete_outline_20.js"),y=t("../../node_modules/@vkontakte/icons/dist/es6/20/gear_outline_20.js"),b=t("../../node_modules/@vkontakte/icons/dist/es6/20/list_play_outline_20.js"),f=t("../../node_modules/@vkontakte/icons/dist/es6/20/share_outline_20.js"),O=t("../../node_modules/@vkontakte/icons/dist/es6/20/check_circle_on_20.js"),_=t("../../node_modules/@vkontakte/icons/dist/es6/24/check_circle_on_24.js"),j=t("../../node_modules/@vkontakte/icons/dist/es6/24/thumbs_up_outline_24.js"),k=t("../../node_modules/@vkontakte/icons/dist/es6/16/cancel_16.js"),v=t("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),g={None:void 0,Icon28CopyOutline:r._,Icon28DeleteOutline:s.t,Icon28EditOutline:i.K,Icon28ListPlayOutline:l.W,Icon28PlaySpeedOutline:c.b,Icon28SettingsOutline:u.R,Icon28ShareOutline:d.G,Icon28SubtitlesOutline:a.b,Icon20CopyOutline:p.i,Icon20DeleteOutline:m.A,Icon20GearOutline:y.K,Icon20ListPlayOutline:b.m,Icon20ShareOutline:f.F,Icon20CheckCircleOn:O.J,Icon24CheckCircleOn:_.i,Icon24ThumbsUpOutline:j.C,Icon16Cancel:k.Q,Icon28MessageOutline:v.C},h=Object.keys(g),S={options:h,control:"select"},I=function(e){return{options:h.filter(function(n){return e.test(n)||"None"===n}),control:"select"}},C=function(e,n){if(e&&"None"!==e){var t=g[e];return(0,o.jsx)(t,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({},n))}};try{I.displayName="getIconArgBySize",I.__docgenInfo={description:"",displayName:"getIconArgBySize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook/Icons.tsx#getIconArgBySize"]={docgenInfo:I.__docgenInfo,name:"getIconArgBySize",path:"src/storybook/Icons.tsx#getIconArgBySize"})}catch(e){}}}]);