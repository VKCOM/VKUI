"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3430],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/SubnavigationBar/SubnavigationBar.module.css":function(e,t,n){var r=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(r),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(o());a.push([e.id,'.SubnavigationBar__in--n2PJP{margin:-8px 0}.SubnavigationBar__scrollIn--GHljt{display:flex;margin:0;padding:calc(12px + 8px) 0;padding:calc(var(--vkui--size_subnavigation_bar_padding_vertical--regular) + 8px) 0}.SubnavigationBar__scrollIn--GHljt:after,.SubnavigationBar__scrollIn--GHljt:before{content:"";min-width:16px;min-width:var(--vkui--size_base_padding_horizontal--regular)}.SubnavigationBar__item--uo5CC{display:flex;list-style-type:none}.SubnavigationBar__item--uo5CC+.SubnavigationBar__item--uo5CC{margin-left:8px;margin-left:var(--vkui--size_subnavigation_bar_gap--regular)}.vkuiInternalSubnavigationBar--mode-fixed .SubnavigationBar__item--uo5CC{flex:1;min-width:0}',""]),a.locals={SubnavigationBar__in:"SubnavigationBar__in--n2PJP",SubnavigationBar__scrollIn:"SubnavigationBar__scrollIn--GHljt",SubnavigationBar__item:"SubnavigationBar__item--uo5CC"},t.Z=a},"./src/components/SubnavigationBar/SubnavigationBar.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return G},default:function(){return N}});var r,o,i,a=n("../../node_modules/react/jsx-runtime.js"),s=n("../../node_modules/react/index.js"),l=n("@storybook/addons"),u=n("./src/storybook/VKUIDecorators.tsx"),c=n("./src/storybook/constants.ts"),d=n("./src/components/Group/Group.tsx"),g=n("./src/components/SubnavigationButton/SubnavigationButton.tsx"),b=n("./src/components/SubnavigationButton/SubnavigationButton.stories.tsx"),f=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),p=n("./src/components/HorizontalScroll/HorizontalScroll.tsx"),m=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=n.n(m),y=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),S=n.n(y),j=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),O=n.n(j),_=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=n.n(_),B=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=n.n(B),x=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/SubnavigationBar/SubnavigationBar.module.css"),P={attributes:{class:"vkui-style"}};P.setAttributes=h(),P.insert=O().bind(null,"head"),P.domAPI=S(),P.insertStyleElement=w(),v()(x.Z,P);var k=x.Z&&x.Z.locals?x.Z.locals:void 0;function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function C(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var I=function(e){return e-240},D=function(e){return e+240},T=function(e){var t,n=e.mode,r=void 0===n?"overflow":n,o=e.children,i=e.showArrows,l=e.getScrollToLeft,u=e.getScrollToRight,c=e.scrollAnimationDuration,d=e.className,g=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["mode","children","showArrows","getScrollToLeft","getScrollToRight","scrollAnimationDuration","className"]),b={};return"fixed"===r?t="div":(t=p.Z,b={showArrows:void 0===i||i,getScrollToLeft:void 0===l?I:l,getScrollToRight:void 0===u?D:u,scrollAnimationDuration:c}),(0,a.jsx)("div",C(A({},g),{className:(0,f.AK)("fixed"===r&&(0,f.AK)("vkuiInternalSubnavigationBar--mode-fixed"),d),children:(0,a.jsx)(t,C(A({className:k.SubnavigationBar__in},b),{children:(0,a.jsx)("ul",{className:k.SubnavigationBar__scrollIn,children:s.Children.map(o,function(e,t){return(0,a.jsx)("li",{className:k.SubnavigationBar__item,children:e},t)})})}))}))};try{T.displayName="SubnavigationBar",T.__docgenInfo={description:"",displayName:"SubnavigationBar",props:{mode:{defaultValue:{value:"overflow"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"overflow"'}]}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},getScrollToLeft:{defaultValue:{value:"(x) => x - 240"},description:"Функция для расчета величины прокрутки при клике на левую стрелку.",name:"getScrollToLeft",required:!1,type:{name:"ScrollPositionHandler"}},getScrollToRight:{defaultValue:{value:"(x) => x + 240"},description:"Функция для расчета величины прокрутки при клике на правую стрелку.",name:"getScrollToRight",required:!1,type:{name:"ScrollPositionHandler"}},scrollAnimationDuration:{defaultValue:null,description:"",name:"scrollAnimationDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SubnavigationBar/SubnavigationBar.tsx#SubnavigationBar"]={docgenInfo:T.__docgenInfo,name:"SubnavigationBar",path:"src/components/SubnavigationBar/SubnavigationBar.tsx#SubnavigationBar"})}catch(e){}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function R(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var N={title:"Blocks/SubnavigationBar",component:T,parameters:E({},c.tW,c.nB),argTypes:{selected:{control:"select",options:["size","favorite","filters"]}}},G={render:function(e){var t=e.selected,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["selected"]),r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,l.useArgs)(),2)[1];return(0,a.jsxs)(T,R(E({},n),{children:[(0,a.jsx)(g.m,R(E({},b.Playground.args),{selected:"size"===t,onClick:function(){return r({selected:"size"})}})),(0,a.jsx)(g.m,R(E({},b.WithIcon.args),{selected:"favorite"===t,onClick:function(){return r({selected:"favorite"})}})),(0,a.jsx)(g.m,R(E({},b.WithCounter.args),{selected:"filters"===t,onClick:function(){return r({selected:"filters"})}}))]}))},args:{selected:"size"},decorators:[function(e,t){return(0,a.jsx)(d.Z,{children:(0,a.jsx)(e,E({},t.args))})},u.vO,u.Z0]};G.parameters=R(E({},G.parameters),{docs:R(E({},null===(r=G.parameters)||void 0===r?void 0:r.docs),{source:E({originalSource:"{\n  render: function Render({\n    selected,\n    ...args\n  }) {\n    const [, updateArg] = useArgs();\n    return <SubnavigationBar {...args}>\n        <SubnavigationButton {...BasicSubnavigationButtonStory.args} selected={selected === 'size'} onClick={() => updateArg({\n        selected: 'size'\n      })} />\n        <SubnavigationButton {...IconSubnavigationButtonStory.args} selected={selected === 'favorite'} onClick={() => updateArg({\n        selected: 'favorite'\n      })} />\n        <SubnavigationButton {...CounterSubnavigationButtonStory.args} selected={selected === 'filters'} onClick={() => updateArg({\n        selected: 'filters'\n      })} />\n      </SubnavigationBar>;\n  },\n  args: {\n    selected: 'size'\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}"},null===(i=G.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})}}]);