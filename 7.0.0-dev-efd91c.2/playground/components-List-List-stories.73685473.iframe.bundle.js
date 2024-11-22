"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9749],{"./src/components/List/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/user_outline_28.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/settings_outline_28.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/privacy_outline_28.js"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_Cell_Cell__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Cell/Cell.tsx"),_Group_Group__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Group/Group.tsx"),_List__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/List.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/List",component:_List__WEBPACK_IMPORTED_MODULE_2__.B,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eC}},Playground={render:function Render({items,...args}){const[draggingList,updateDraggingList]=react__WEBPACK_IMPORTED_MODULE_1__.useState(items),onDragFinish=({from,to})=>{const _list=[...draggingList];_list.splice(from,1),_list.splice(to,0,draggingList[from]),updateDraggingList(_list)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_List__WEBPACK_IMPORTED_MODULE_2__.B,{...args,children:draggingList.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cell_Cell__WEBPACK_IMPORTED_MODULE_4__.f,{before:item.before,draggable:!0,onDragFinish,children:item.title},item.title)))})},args:{items:[{before:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.$,{}),title:"Учетная запись"},{before:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__.H,{}),title:"Основные"},{before:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__.i,{}),title:"Приватность"}]},decorators:[(Component,context)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Group_Group__WEBPACK_IMPORTED_MODULE_8__.Y,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...context.args})}),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_9__.fd,_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_9__.E4]},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    items,\n    ...args\n  }) {\n    const [draggingList, updateDraggingList] = React.useState(items);\n    const onDragFinish = ({\n      from,\n      to\n    }: {\n      from: number;\n      to: number;\n    }) => {\n      const _list = [...draggingList];\n      _list.splice(from, 1);\n      _list.splice(to, 0, draggingList[from]);\n      updateDraggingList(_list);\n    };\n    return <List {...args}>\n        {draggingList.map(item => <Cell key={item.title} before={item.before} draggable onDragFinish={onDragFinish}>\n            {item.title}\n          </Cell>)}\n      </List>;\n  },\n  args: {\n    items: [{\n      before: <Icon28UserOutline />,\n      title: 'Учетная запись'\n    }, {\n      before: <Icon28SettingsOutline />,\n      title: 'Основные'\n    }, {\n      before: <Icon28PrivacyOutline />,\n      title: 'Приватность'\n    }]\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/16/chevron_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Icon16Chevron});var Icon16Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_box_off_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Icon20CheckBoxOff});var Icon20CheckBoxOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckBoxOff","check_box_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_off_20"><path fill="currentColor" fill-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.64 3.64 0 0 1-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.64 3.64 0 0 1-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.65 3.65 0 0 1 1.512-1.512m3.082.966c-1.531 0-1.962.136-2.374.357a2.15 2.15 0 0 0-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374q.313.585.897.897c.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357q.585-.313.897-.897c.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.15 2.15 0 0 0-.897-.897c-.412-.22-.843-.357-2.374-.357z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_box_on_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Icon20CheckBoxOn});var Icon20CheckBoxOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckBoxOn","check_box_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_on_20"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m12.2 3.803a.9.9 0 1 0-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 0 0 5.364 10.6l2.691 2.687a.9.9 0 0 0 1.272 0z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_circle_off_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Icon20CheckCircleOff});var Icon20CheckCircleOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckCircleOff","check_circle_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 20 20" id="check_circle_off_20"><defs><path id="check_circle_off_20_a" fill="currentColor" fill-rule="evenodd" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18" clip-rule="evenodd" /></defs><use xlink:href="#check_circle_off_20_a" fill-rule="evenodd" clip-rule="evenodd" /><use xlink:href="#check_circle_off_20_a" fill-rule="evenodd" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_circle_on_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Icon20CheckCircleOn});var Icon20CheckCircleOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckCircleOn","check_circle_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" id="check_circle_on_20"><path fill-rule="evenodd" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m5.35-12.72a.75.75 0 1 0-1.062-1.06l-5.955 5.968L5.81 9.66a.75.75 0 1 0-1.062 1.06l3.054 3.06a.75.75 0 0 0 1.062 0z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/cancel_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Icon24Cancel});var Icon24Cancel=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Cancel","cancel_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_box_off_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Icon24CheckBoxOff});var Icon24CheckBoxOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckBoxOff","check_box_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_off_24"><path fill="currentColor" d="M16.872 2c1.783 0 2.43.186 3.082.534s1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.64 3.64 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756S4 5.673 4 6.563v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757s.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756s.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.8 1.8 0 0 0-.756-.757c-.326-.174-.65-.267-1.54-.267" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_box_on_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Icon24CheckBoxOn});var Icon24CheckBoxOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckBoxOn","check_box_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_on_24"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m15.771 5.023a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_circle_off_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Icon24CheckCircleOff});var Icon24CheckCircleOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckCircleOff","check_circle_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_off_24"><path fill="currentColor" d="M12 0c6.629 0 12 5.373 12 12 0 6.629-5.373 12-12 12-6.629 0-12-5.373-12-12C0 5.371 5.373 0 12 0m0 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_circle_on_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Icon24CheckCircleOn});var Icon24CheckCircleOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckCircleOn","check_circle_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_on_24"><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m6.207-14.793a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/chevron_compact_right_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Icon24ChevronCompactRight});var Icon24ChevronCompactRight=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a1 1 0 0 1 0 1.416l-5.084 5.084a1 1 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/reorder_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Icon24Reorder});var Icon24Reorder=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Reorder","reorder_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M21 18a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/reorder_ios_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Icon24ReorderIos});var Icon24ReorderIos=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24ReorderIos","reorder_ios_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity=".1" /><path fill="currentColor" fill-rule="nonzero" d="M2.75 7h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/28/privacy_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Icon28PrivacyOutline});var Icon28PrivacyOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon28PrivacyOutline","privacy_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="privacy_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M24.442 12.058c.513.77.588 1.831.192 2.663l-2.679 5.625C20.435 23.539 16.54 26 12.998 26H12c-4.422 0-8-3.58-8-8.009v-7.863a2.746 2.746 0 0 1 3.5-2.642v-.732a2.75 2.75 0 0 1 3.571-2.629A2.75 2.75 0 0 1 13.75 2c1.47 0 2.67 1.15 2.746 2.604A2.748 2.748 0 0 1 20 7.254v4.264c1.299-1.278 3.357-1.087 4.442.54M6.75 9.383a.746.746 0 0 0-.75.745v7.863A6 6 0 0 0 12 24h.998c2.773 0 5.964-2.02 7.151-4.514l2.679-5.625a.79.79 0 0 0-.05-.694c-.428-.642-1.123-.65-1.55-.01l-2.177 3.267c-.576.864-1.051.726-1.051-.323V7.255a.75.75 0 0 0-.75-.755.746.746 0 0 0-.75.747v5.757c0 .55-.448.996-1 .996-.556 0-1-.446-1-.995V4.752a.749.749 0 1 0-1.5 0v8.253c0 .54-.448.995-1 .995-.556 0-1-.446-1-.997v-6.25A.756.756 0 0 0 10.25 6a.75.75 0 0 0-.75.754v6.738c0 .551-.448 1.008-1 1.008-.556 0-1-.447-1-.999v-3.363a.75.75 0 0 0-.75-.755" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/28/settings_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Icon28SettingsOutline});var Icon28SettingsOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon28SettingsOutline","settings_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_outline_28"><g fill="none" fill-rule="nonzero"><path d="M0 0h28v28H0z" /><path fill="currentColor" d="M15.148 2.04c.428.07.832.233 1.195.523.595.476.878 1.076 1.097 1.952.056.224.153.486.275.74q.417.176.815.393c.262-.065.513-.15.714-.244 1.412-.658 2.597-.623 3.567.423.082.089.131.148.238.28l.629.776c.17.21.241.305.348.482.692 1.152.422 2.224-.452 3.386a4 4 0 0 0-.417.71q.117.425.195.86c.222.178.46.334.668.441.804.41 1.325.821 1.655 1.508.202.42.27.85.24 1.282a3.5 3.5 0 0 1-.106.64l-.225.975c-.065.285-.099.41-.185.622a2.5 2.5 0 0 1-.778 1.047c-.598.473-1.246.614-2.148.63-.229.004-.502.04-.773.1q-.265.365-.563.704c.003.275.03.544.077.764.187.884.196 1.547-.13 2.236-.2.42-.491.744-.845.993a3.5 3.5 0 0 1-.565.32l-.899.44a3.5 3.5 0 0 1-.6.247c-.414.126-.85.156-1.303.054-.744-.167-1.261-.582-1.842-1.273a4 4 0 0 0-.591-.561 10 10 0 0 1-.878 0c-.228.18-.437.378-.591.56-.58.692-1.098 1.107-1.842 1.274a2.5 2.5 0 0 1-1.303-.054 3.5 3.5 0 0 1-.6-.248l-.899-.438-.185-.093c-1.312-.683-1.696-1.847-1.355-3.457.047-.22.074-.49.077-.764a10 10 0 0 1-.563-.705 4 4 0 0 0-.773-.099c-.902-.016-1.55-.157-2.148-.63a2.5 2.5 0 0 1-.778-1.047 3.5 3.5 0 0 1-.185-.622l-.225-.974a3.4 3.4 0 0 1-.109-.681 2.5 2.5 0 0 1 .296-1.346c.339-.629.84-1.015 1.602-1.404a4 4 0 0 0 .668-.441q.078-.435.195-.86a4 4 0 0 0-.417-.71c-.874-1.162-1.144-2.234-.452-3.386.107-.177.179-.273.348-.482l.63-.777c.106-.131.155-.19.237-.279.97-1.046 2.155-1.08 3.567-.423.201.093.452.18.714.244q.398-.216.815-.394c.122-.253.219-.515.275-.74.219-.875.502-1.475 1.097-1.95.363-.291.767-.455 1.195-.523.18-.03.3-.038.49-.04L14.5 2c.292 0 .422.005.648.04M14.586 4H13.5c-.5 0-.75 0-1 1a6.4 6.4 0 0 1-.836 1.87 7.5 7.5 0 0 0-1.8.872 6.4 6.4 0 0 1-1.952-.525c-.934-.435-1.092-.24-1.406.148l-.63.777c-.314.389-.472.583.148 1.406.35.464.721 1.15.937 1.857a7.5 7.5 0 0 0-.429 1.894 6.4 6.4 0 0 1-1.643 1.245c-.918.468-.862.712-.75 1.199l.225.974c.113.487.169.731 1.2.75.57.01 1.323.135 2.003.39.345.575.765 1.1 1.247 1.56a6.4 6.4 0 0 1-.072 2.032c-.213 1.008.011 1.118.46 1.337l.9.439c.449.219.674.328 1.337-.46a6.3 6.3 0 0 1 1.59-1.327 7.6 7.6 0 0 0 1.942 0 6.3 6.3 0 0 1 1.59 1.326c.663.79.888.68 1.337.46l.9-.438c.449-.219.673-.329.46-1.337a6.4 6.4 0 0 1-.072-2.031 7.5 7.5 0 0 0 1.247-1.56 6.4 6.4 0 0 1 2.003-.391c1.031-.019 1.087-.263 1.2-.75l.225-.974c.112-.487.168-.73-.75-1.2a6.4 6.4 0 0 1-1.643-1.244 7.5 7.5 0 0 0-.43-1.894 6.3 6.3 0 0 1 .938-1.857c.62-.823.462-1.017.148-1.406l-.63-.777c-.314-.389-.472-.583-1.406-.148a6.4 6.4 0 0 1-1.952.525 7.5 7.5 0 0 0-1.8-.871A6.4 6.4 0 0 1 15.5 5c-.235-.941-.47-.997-.914-1M14 9.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/28/user_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Icon28UserOutline});var Icon28UserOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon28UserOutline","user_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 28 28" id="user_outline_28"><path fill-rule="evenodd" d="M14 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-6 13.475c0-4.109 4.415-6.475 9.5-6.475s9.5 2.366 9.5 6.475c0 2.135-.802 3.025-2.522 3.025H7.022c-1.72 0-2.522-.89-2.522-3.025m2 0c0-1.224.618-2.266 1.916-3.09C9.758 18.032 11.735 17.5 14 17.5s4.242.532 5.584 1.385c1.297.824 1.916 1.866 1.916 3.09 0 .417-.04.69-.085.859a1 1 0 0 1-.042.127c-.06.016-.182.039-.395.039H7.022c-.213 0-.335-.023-.395-.039a1 1 0 0 1-.042-.127c-.045-.168-.085-.442-.085-.86Z" clip-rule="evenodd" /></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/List/List.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".List__host--V87Tm{display:grid;grid-template-columns:minmax(0,1fr)}.List__placeholder--P0jwa{display:none}","",{version:3,sources:["webpack://./src/components/List/List.module.css"],names:[],mappings:"AAAA,mBACE,YAAa,CACb,mCACF,CAEA,0BACE,YACF",sourcesContent:[".host {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.placeholder {\n  display: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"List__host--V87Tm",placeholder:"List__placeholder--P0jwa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/List/List.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>List});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js")),constants=__webpack_require__("./src/hooks/useDraggableWithDomApi/constants.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),List_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/List/List.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(List_module.A,options);const List_List_module=List_module.A&&List_module.A.locals?List_module.A.locals:void 0,List=({children,gap=0,className,style,...restProps})=>(0,jsx_runtime.jsxs)(RootComponent.I,{role:"list",className:(0,lib.xW)(List_List_module.host,className),style:{gridGap:gap,...style},...restProps,children:[children,(0,jsx_runtime.jsx)("div",{"aria-hidden":!0,...constants.bv,className:List_List_module.placeholder})]});try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},gap:{defaultValue:{value:"0"},description:"Задает отступ между элементами",name:"gap",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}}}]);