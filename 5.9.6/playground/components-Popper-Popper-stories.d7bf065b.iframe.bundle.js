"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7489],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css":function(e,t,n){var r=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(r),s=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(s)()(o());i.push([e.id,".Div--jWBVN{padding:12px 16px;padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}",""]),i.locals={Div:"Div--jWBVN"},t.Z=i},"./src/components/Popper/Popper.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return y}});var r,o,s,i=n("../../node_modules/react/jsx-runtime.js"),u=n("../../node_modules/react/index.js"),c=n("./src/storybook/constants.ts"),l=n("./src/components/Button/Button.tsx"),a=n("./src/components/Div/Div.tsx"),d=n("./src/components/Popper/Popper.tsx");function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var v={title:"Poppers/Popper",component:d.r,parameters:f({},c.tW,c.nB)};t.default=v;var y={render:function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],i=!0,u=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(e){u=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(u)throw r}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(u.useState(!1),2),n=t[0],r=t[1],o=u.useRef(null);return(0,i.jsxs)(u.Fragment,{children:[(0,i.jsx)(l.z,{getRootRef:o,onClick:function(){return r(!n)},children:n?"Закрыть":"Открыть"}),n&&(0,i.jsx)(d.r,m(f({forcePortal:!1,offsetDistance:8},e),{targetRef:o,children:(0,i.jsx)(a.Z,{children:"Привет"})}))]})}};y.parameters=m(f({},y.parameters),{docs:m(f({},null===(r=y.parameters)||void 0===r?void 0:r.docs),{source:f({originalSource:"{\n  render: function Render(args) {\n    const [shown, setShown] = React.useState(false);\n    const buttonRef = React.useRef(null);\n    return <React.Fragment>\n        <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>\n          {shown ? 'Закрыть' : 'Открыть'}\n        </Button>\n        {shown && <Popper forcePortal={false} offsetDistance={8} {...args} targetRef={buttonRef}>\n            <Div>Привет</Div>\n          </Popper>}\n      </React.Fragment>;\n  }\n}"},null===(s=y.parameters)||void 0===s?void 0:null===(o=s.docs)||void 0===o?void 0:o.source)})})},"./src/components/Div/Div.tsx":function(e,t,n){n.d(t,{Z:function(){return j}});var r=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var o=n("./src/components/RootComponent/RootComponent.tsx"),s=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(s),u=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(u),l=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),a=n.n(l),d=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(d),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=n.n(f),v=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=p(),y.insert=a().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=m(),i()(v.Z,y);var b=v.Z&&v.Z.locals?v.Z.locals:void 0,j=function(e){return(0,r.jsx)(o.U,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({baseClassName:b.Div},e))};try{j.displayName="Div",j.__docgenInfo={description:"",displayName:"Div",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Div/Div.tsx#Div"]={docgenInfo:j.__docgenInfo,name:"Div",path:"src/components/Div/Div.tsx#Div"})}catch(e){}}}]);