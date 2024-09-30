"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5739],{"./src/components/PanelHeaderContext/PanelHeaderContext.stories.tsx":(e,n,t)=>{t.r(n),t.d(n,{Example:()=>en,__namedExportsOrder:()=>et,default:()=>ee});var o,a,r,l,s=t("../../node_modules/react/jsx-runtime.js"),i=t("../../node_modules/react/index.js"),d=t("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js"),c=t("../../node_modules/@vkontakte/icons/dist/es6/16/dropdown_16.js"),u=t("../../node_modules/@vkontakte/icons/dist/es6/28/users_outline_28.js"),p=t("../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js"),m=t("../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js"),x=t("./src/storybook/VKUIDecorators.tsx"),f=t("./src/storybook/constants.ts"),C=t("./src/components/Cell/Cell.tsx"),P=t("./src/components/Div/Div.tsx"),b=t("./src/components/Panel/Panel.tsx"),_=t("./src/components/PanelHeader/PanelHeader.tsx"),y=t("./src/components/PanelHeaderBack/PanelHeaderBack.tsx"),H=t("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),g=t("./src/components/PanelHeaderContent/PanelHeaderContent.tsx"),v=t("./src/components/View/View.tsx"),h=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),j=t("./src/hooks/useAdaptivity.ts"),k=t("./src/hooks/useGlobalEventListener.ts"),O=t("./src/hooks/usePlatform.ts"),w=t("./src/hooks/useTimeout.ts"),S=t("./src/lib/dom.tsx"),A=t("./src/lib/useIsomorphicLayoutEffect.ts"),M=t("./src/components/AppRoot/ScrollContext.tsx"),X=t("./src/components/FixedLayout/FixedLayout.tsx"),z=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=t.n(z),I=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),E=t.n(I),R=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),T=t.n(R),B=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),L=t.n(B),N=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=t.n(N),U=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContext/PanelHeaderContext.module.css"),F={attributes:{class:"vkui-style"}};F.setAttributes=L(),F.insert=T().bind(null,"head"),F.domAPI=E(),F.insertStyleElement=Z(),D()(U.Z,F);let V=U.Z&&U.Z.locals?U.Z.locals:void 0;function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var K=(q(o={none:V["PanelHeaderContext--sizeX-none"]},"compact",V["PanelHeaderContext--sizeX-compact"]),q(o,"regular",V["PanelHeaderContext--sizeX-regular"]),o),W=function(e){var n=e.children,t=e.onClose,o=e.opened,a=void 0!==o&&o,r=e.className,l=function(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["children","onClose","opened","className"]),d=(0,S.NG)().document,c=(0,O.F)(),u=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],l=!0,s=!1;try{for(a=a.call(e);!(l=(t=a.next()).done)&&(r.push(t.value),!n||r.length!==n);l=!0);}catch(e){s=!0,o=e}finally{try{l||null==a.return||a.return()}finally{if(s)throw o}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(i.useState(a),2),p=u[0],m=u[1],x=p&&!a,f=(0,j.g)().sizeX,C=i.useRef(null);(0,A.L)(function(){a&&m(!0)},[a]),(0,M.Pr)("vkcom"!==c&&a),(0,k.J)(d,"click",a&&!x&&function(e){C.current&&!C.current.contains(e.target)&&(e.stopPropagation(),t())},{capture:!0});var P=function(){return m(!1)},b=(0,w.K)(P,200);return i.useEffect(function(){return x?b.set():b.clear()},[b,x]),(0,s.jsxs)(X.e,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){q(e,n,t[n])})}return e}({},l),{className:(0,h.AK)(V.PanelHeaderContext,"ios"===c&&V["PanelHeaderContext--ios"],a&&V["PanelHeaderContext--opened"],x&&V["PanelHeaderContext--closing"],K[void 0===f?"none":f],r),vertical:"top",children:[p&&(0,s.jsx)("div",{onClick:function(e){e.stopPropagation(),t()},className:V.PanelHeaderContext__fade}),(0,s.jsx)("div",{className:V.PanelHeaderContext__in,ref:C,onAnimationEnd:x?P:void 0,children:p&&(0,s.jsx)("div",{className:V.PanelHeaderContext__content,children:n})})]}))};try{W.displayName="PanelHeaderContext",W.__docgenInfo={description:"",displayName:"PanelHeaderContext",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"VoidFunction"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderContext/PanelHeaderContext.tsx#PanelHeaderContext"]={docgenInfo:W.__docgenInfo,name:"PanelHeaderContext",path:"src/components/PanelHeaderContext/PanelHeaderContext.tsx#PanelHeaderContext"})}catch(e){}function G(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function $(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function J(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],l=!0,s=!1;try{for(a=a.call(e);!(l=(t=a.next()).done)&&(r.push(t.value),!n||r.length!==n);l=!0);}catch(e){s=!0,o=e}finally{try{l||null==a.return||a.return()}finally{if(s)throw o}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return G(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}let ee={title:"Layout/PanelHeaderContext",component:W,parameters:Q({},f.tW,f.nB),decorators:[x.Z0]};var en={render:function(){var e=J(i.useState(!0),2),n=e[0],t=e[1],o=J(i.useState("all"),2),a=o[0],r=o[1],l=function(){t(function(e){return!e})},x=function(e){r(e.currentTarget.dataset.mode),requestAnimationFrame(l)};return(0,s.jsx)(v.G,{id:"main",activePanel:"panel1",children:(0,s.jsxs)(b.s,{id:"panel1",children:[(0,s.jsx)(_.V,{before:(0,s.jsx)(y.b,{}),after:(0,s.jsx)(H.C,{children:(0,s.jsx)(d.P,{})}),children:(0,s.jsx)(g.S,{aside:(0,s.jsx)(c.T,{style:{transform:"rotate(".concat(n?"180deg":"0",")")}}),onClick:l,children:"Communities"})}),(0,s.jsxs)(W,{opened:n,onClose:l,children:[(0,s.jsx)(C.b,{before:(0,s.jsx)(u.T,{}),after:"all"===a?(0,s.jsx)(p.R,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:x,"data-mode":"all",children:"Communities"}),(0,s.jsx)(C.b,{before:(0,s.jsx)(m.R,{}),after:"managed"===a?(0,s.jsx)(p.R,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:x,"data-mode":"managed",children:"Managed Communities"})]}),(0,s.jsx)(P.Z,{children:"PanelHeaderContext"})]})})}};en.parameters=$(Q({},en.parameters),{docs:$(Q({},null===(a=en.parameters)||void 0===a?void 0:a.docs),{source:Q({originalSource:'{\n  render: function Render() {\n    const [contextOpened, setContextOpened] = React.useState(true);\n    const [mode, setMode] = React.useState<string | undefined>(\'all\');\n    const toggleContext = () => {\n      setContextOpened(prev => !prev);\n    };\n    const select = (e: React.MouseEvent<HTMLElement>) => {\n      const mode = e.currentTarget.dataset.mode;\n      setMode(mode);\n      requestAnimationFrame(toggleContext);\n    };\n    return <View id="main" activePanel="panel1">\n        <Panel id="panel1">\n          <PanelHeader before={<PanelHeaderBack />} after={<PanelHeaderButton>\n                <Icon28AddOutline />\n              </PanelHeaderButton>}>\n            <PanelHeaderContent aside={<Icon16Dropdown style={{\n            transform: `rotate(${contextOpened ? \'180deg\' : \'0\'})`\n          }} />} onClick={toggleContext}>\n              Communities\n            </PanelHeaderContent>\n          </PanelHeader>\n          <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>\n            <Cell before={<Icon28UsersOutline />} after={mode === \'all\' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="all">\n              Communities\n            </Cell>\n            <Cell before={<Icon28SettingsOutline />} after={mode === \'managed\' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="managed">\n              Managed Communities\n            </Cell>\n          </PanelHeaderContext>\n          <Div>PanelHeaderContext</Div>\n        </Panel>\n      </View>;\n  }\n}'},null===(l=en.parameters)||void 0===l?void 0:null===(r=l.docs)||void 0===r?void 0:r.source)})});let et=["Example"]},"../../node_modules/@vkontakte/icons/dist/es6/16/dropdown_16.js":(e,n,t)=>{t.d(n,{T:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Dropdown","dropdown_16","0 0 16 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12" id="dropdown_16"><path fill="currentColor" d="M4.454 3.691a.9.9 0 0 0-1.108 1.418l4.096 3.203a.9.9 0 0 0 1.109 0l4.1-3.203a.9.9 0 1 0-1.109-1.418L7.997 6.46l-3.543-2.77Z" /></symbol>',16,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js":(e,n,t)=>{t.d(n,{R:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Done","done_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="done_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="m9 16.2-3.5-3.5a.99.99 0 1 0-1.4 1.4l4.193 4.193a1 1 0 0 0 1.414 0L20.3 7.7a.99.99 0 0 0-1.4-1.4L9 16.2" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":(e,n,t)=>{t.d(n,{P:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js":(e,n,t)=>{t.d(n,{R:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28SettingsOutline","settings_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_outline_28"><g fill="none" fill-rule="nonzero"><path d="M0 0h28v28H0z" /><path fill="currentColor" d="M15.148 2.04c.428.07.832.233 1.195.523.595.476.878 1.076 1.097 1.952.056.224.153.486.275.74.278.117.55.249.815.393.262-.065.513-.15.714-.244 1.412-.658 2.597-.623 3.567.423.082.089.131.148.238.28l.629.776c.17.21.241.305.348.482.692 1.152.422 2.224-.452 3.386a4.112 4.112 0 0 0-.417.71c.078.283.143.57.195.86.222.178.46.334.668.441.804.41 1.325.821 1.655 1.508.202.42.27.85.24 1.282a3.48 3.48 0 0 1-.106.64l-.225.975c-.065.285-.099.41-.185.622a2.515 2.515 0 0 1-.778 1.047c-.598.473-1.246.614-2.148.63-.229.004-.502.04-.773.1-.177.243-.364.478-.563.704.003.275.03.544.077.764.187.884.196 1.547-.13 2.236-.2.42-.491.744-.845.993a3.48 3.48 0 0 1-.565.32l-.899.44a3.48 3.48 0 0 1-.6.247c-.414.126-.85.156-1.303.054-.744-.167-1.261-.582-1.842-1.273a4.103 4.103 0 0 0-.591-.561 9.627 9.627 0 0 1-.878 0c-.228.18-.437.378-.591.56-.58.692-1.098 1.107-1.842 1.274a2.515 2.515 0 0 1-1.303-.054 3.48 3.48 0 0 1-.6-.248l-.899-.438a7.152 7.152 0 0 1-.185-.093c-1.312-.683-1.696-1.847-1.355-3.457.047-.22.074-.49.077-.764a9.535 9.535 0 0 1-.563-.705 4.066 4.066 0 0 0-.773-.099c-.902-.016-1.55-.157-2.148-.63a2.515 2.515 0 0 1-.778-1.047 3.48 3.48 0 0 1-.185-.622l-.225-.974a3.381 3.381 0 0 1-.109-.681 2.509 2.509 0 0 1 .296-1.346c.339-.629.84-1.015 1.602-1.404a4.09 4.09 0 0 0 .668-.441c.052-.29.117-.577.195-.86a4.112 4.112 0 0 0-.417-.71c-.874-1.162-1.144-2.234-.452-3.386.107-.177.179-.273.348-.482l.63-.777c.106-.131.155-.19.237-.279.97-1.046 2.155-1.08 3.567-.423.201.093.452.18.714.244.265-.144.537-.276.815-.394.122-.253.219-.515.275-.74.219-.875.502-1.475 1.097-1.95.363-.291.767-.455 1.195-.523.18-.03.3-.038.49-.04L14.5 2c.292 0 .422.005.648.04M14.586 4H13.5c-.5 0-.75 0-1 1a6.347 6.347 0 0 1-.836 1.87 7.47 7.47 0 0 0-1.8.872 6.35 6.35 0 0 1-1.952-.525c-.934-.435-1.092-.24-1.406.148l-.63.777c-.314.389-.472.583.148 1.406.35.464.721 1.15.937 1.857a7.458 7.458 0 0 0-.429 1.894 6.345 6.345 0 0 1-1.643 1.245c-.918.468-.862.712-.75 1.199l.225.974c.113.487.169.731 1.2.75.57.01 1.323.135 2.003.39.345.575.765 1.1 1.247 1.56a6.35 6.35 0 0 1-.072 2.032c-.213 1.008.011 1.118.46 1.337l.9.439c.449.219.674.328 1.337-.46a6.343 6.343 0 0 1 1.59-1.327 7.571 7.571 0 0 0 1.942 0 6.343 6.343 0 0 1 1.59 1.326c.663.79.888.68 1.337.46l.9-.438c.449-.219.673-.329.46-1.337a6.35 6.35 0 0 1-.072-2.031 7.533 7.533 0 0 0 1.247-1.56 6.348 6.348 0 0 1 2.003-.391c1.031-.019 1.087-.263 1.2-.75l.225-.974c.112-.487.168-.73-.75-1.2a6.345 6.345 0 0 1-1.643-1.244 7.458 7.458 0 0 0-.43-1.894 6.342 6.342 0 0 1 .938-1.857c.62-.823.462-1.017.148-1.406l-.63-.777c-.314-.389-.472-.583-1.406-.148a6.35 6.35 0 0 1-1.952.525 7.47 7.47 0 0 0-1.8-.871A6.347 6.347 0 0 1 15.5 5c-.235-.941-.47-.997-.914-1M14 9.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContext/PanelHeaderContext.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(o),r=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(r)()(a());l.push([e.id,".PanelHeaderContext--ZdWHR{z-index:var(--vkui_internal--z_index_panel_header_context)}.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--opened--OHMZF{height:100%;width:100%}.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--opened--OHMZF{height:auto}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--opened--OHMZF{height:auto}}.PanelHeaderContext__in--MufTw{box-sizing:border-box;left:0;padding:8px;pointer-events:none;position:absolute;width:100%}.PanelHeaderContext__fade--NtCLo{background:rgba(0,0,0,.4);display:none;height:100%;left:0;position:absolute;top:0;width:100%}.PanelHeaderContext--sizeX-compact--lZYFw .PanelHeaderContext__fade--NtCLo{display:block}@media (max-width:767.9px){.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__fade--NtCLo{display:block}}.PanelHeaderContext--opened--OHMZF .PanelHeaderContext__fade--NtCLo{animation:animation-panelheadercontext-fade-in--PhfhU .2s ease}.PanelHeaderContext--closing--U1Xrk .PanelHeaderContext__fade--NtCLo{animation:animation-panelheadercontext-fade-out--XC2Na .2s ease}.PanelHeaderContext--opened--OHMZF .PanelHeaderContext__in--MufTw{animation:animation-panelheadercontext-translate-in--U7OfA .2s ease;pointer-events:auto}.PanelHeaderContext--closing--U1Xrk .PanelHeaderContext__in--MufTw{animation:animation-panelheadercontext-translate-out--tkQ0b .2s ease}.PanelHeaderContext__content--o2C9j{background:var(--vkui--color_background_content);overflow:hidden}.PanelHeaderContext--ios--Psolf .PanelHeaderContext__in--MufTw{padding:0}.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--ios--Psolf .PanelHeaderContext__content--o2C9j,.PanelHeaderContext--ZdWHR:not(.PanelHeaderContext--ios--Psolf) .PanelHeaderContext__content--o2C9j{border-radius:12px;padding:8px 0}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--ios--Psolf .PanelHeaderContext__content--o2C9j{border-radius:12px;padding:8px 0}}.PanelHeaderContext--sizeX-regular--ijBpw .PanelHeaderContext__in--MufTw{padding:12px 8px}.PanelHeaderContext--sizeX-regular--ijBpw .PanelHeaderContext__content--o2C9j{border-radius:12px;box-shadow:0 0 4px rgba(0,0,0,.08),0 8px 8px rgba(0,0,0,.16)}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__in--MufTw{padding:12px 8px}.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__content--o2C9j{border-radius:12px;box-shadow:0 0 4px rgba(0,0,0,.08),0 8px 8px rgba(0,0,0,.16)}}@keyframes animation-panelheadercontext-translate-in--U7OfA{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes animation-panelheadercontext-translate-out--tkQ0b{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes animation-panelheadercontext-fade-in--PhfhU{0%{opacity:0}to{opacity:1}}@keyframes animation-panelheadercontext-fade-out--XC2Na{0%{opacity:1}to{opacity:0}}",""]),l.locals={PanelHeaderContext:"PanelHeaderContext--ZdWHR","PanelHeaderContext--closing":"PanelHeaderContext--closing--U1Xrk","PanelHeaderContext--opened":"PanelHeaderContext--opened--OHMZF","PanelHeaderContext--sizeX-regular":"PanelHeaderContext--sizeX-regular--ijBpw","PanelHeaderContext--sizeX-none":"PanelHeaderContext--sizeX-none--r5fbx",PanelHeaderContext__in:"PanelHeaderContext__in--MufTw",PanelHeaderContext__fade:"PanelHeaderContext__fade--NtCLo","PanelHeaderContext--sizeX-compact":"PanelHeaderContext--sizeX-compact--lZYFw","animation-panelheadercontext-fade-in":"animation-panelheadercontext-fade-in--PhfhU","animation-panelheadercontext-fade-out":"animation-panelheadercontext-fade-out--XC2Na","animation-panelheadercontext-translate-in":"animation-panelheadercontext-translate-in--U7OfA","animation-panelheadercontext-translate-out":"animation-panelheadercontext-translate-out--tkQ0b",PanelHeaderContext__content:"PanelHeaderContext__content--o2C9j","PanelHeaderContext--ios":"PanelHeaderContext--ios--Psolf"};let s=l}}]);