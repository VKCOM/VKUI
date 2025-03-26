"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1517],{"./src/testing/presets/createFieldWithPresets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>createFieldWithPresets});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/index.js"));const ICON_REGEX=/Icon(\d+)/,sizeToIconsMap=new Map;Object.keys(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__).forEach((iconName=>{if(!ICON_REGEX.test(iconName))return;const typedIconName=iconName,node=_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__[typedIconName],size=(iconName=>{const match=iconName.match(ICON_REGEX);return match?.[1]})(typedIconName);if(!size)return;const iconsBySize=sizeToIconsMap.get(size),Icon=node;iconsBySize?iconsBySize.set(typedIconName,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{})):sizeToIconsMap.set(size,new Map([[typedIconName,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{},"icon")]]))}));const createFieldWithPresets=({iconSizes=[],sizeIconsCount=5,requiredIcons=[],additionalPresets={}})=>{const options=["None"],mapping={None:null};iconSizes.forEach((iconSize=>{const iconsBySize=sizeToIconsMap.get(iconSize);Array.from(iconsBySize.keys()).slice(0,sizeIconsCount).forEach((iconName=>{options.push(iconName),mapping[iconName]=iconsBySize.get(iconName)}))})),requiredIcons.forEach((iconName=>{if(options.includes(iconName))return;options.push(iconName);const Icon=_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__[iconName];mapping[iconName]=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{})}));for(const presetName in additionalPresets)additionalPresets.hasOwnProperty(presetName)&&(options.push(presetName),mapping[presetName]=additionalPresets[presetName]);return{control:"select",options,mapping}};try{createFieldWithPresets.displayName="createFieldWithPresets",createFieldWithPresets.__docgenInfo={description:"",displayName:"createFieldWithPresets",props:{iconSizes:{defaultValue:{value:"[]"},description:"",name:"iconSizes",required:!1,type:{name:"IconSize[]"}},sizeIconsCount:{defaultValue:{value:"5"},description:"",name:"sizeIconsCount",required:!1,type:{name:"number"}},requiredIcons:{defaultValue:{value:"[]"},description:"",name:"requiredIcons",required:!1,type:{name:"IconName[]"}},additionalPresets:{defaultValue:{value:"{}"},description:"",name:"additionalPresets",required:!1,type:{name:"{ [K in CustomPresetName]?: ReactNode; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/testing/presets/createFieldWithPresets.tsx#createFieldWithPresets"]={docgenInfo:createFieldWithPresets.__docgenInfo,name:"createFieldWithPresets",path:"src/testing/presets/createFieldWithPresets.tsx#createFieldWithPresets"})}catch(__react_docgen_typescript_loader_error){}},"./src/testing/presets/getFormFieldIconsPresets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>getFormFieldIconsPresets});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/message_outline_28.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/clear_16.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_createFieldWithPresets__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/testing/presets/createFieldWithPresets.tsx");const getFormFieldIconsPresets=()=>(0,_createFieldWithPresets__WEBPACK_IMPORTED_MODULE_2__.z)({iconSizes:["12","16","20","24","28"],additionalPresets:{MessageButton:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.K,{onClick:_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.lQ,label:"Сообщения",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__.P,{})}),DeleteIconButton:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.K,{onClick:_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.lQ,label:"Очистить",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.M,{})})}})},"./src/testing/storybook/createStoryParameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>createStoryParameters});const COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL={ActionSheet:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=24799-204331",ActionSheetItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=24477-202231",Alert:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-0",Avatar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=16776-66998",Image:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=19718-127678",Button:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17380-81012",ButtonGroup:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=26852-212384",Banner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=896-0",CellButton:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-1",Calendar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21893-168556",CalendarRange:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21910-174978",Card:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=8920-64087",CardGrid:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21611-159029",CardScroll:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21611-159105",ContentCard:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=26950-217134",Cell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27-2",Counter:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17363-76319",Badge:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=11187-7535",Epic:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=9374-63616",FormItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=19141-111940",Slider:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18562-104232",FormStatus:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18562-104579",Input:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211639",ChipsInput:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211639",Select:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211640",CustomSelect:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211640",ChipsSelect:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211640",DateInput:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211641",DateRangeInput:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211641",Textarea:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211642",Gradient:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=1365-65563",Group:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=3362-140",Header:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23978-210701",Footer:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23671-181627",HorizontalCell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=2121-114693",HorizontalScroll:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=2121-114693",MiniInfoCell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=5513-0",ModalCard:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-4",ModalPage:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-5",Pagination:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=22596-199246",PanelHeader:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27-0",Placeholder:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23166-193544",Spinner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=11194-4905",ScreenSpinner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=11195-64195",PanelSpinner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=8855-62589",Progress:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=179-5",RichCell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-9",Search:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=34-12533",SegmentedControl:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=22164-174288",Checkbox:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=19548-128313",Radio:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=20378-129222",Switch:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17404-92880",RadioGroup:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=20390-129014",Skeleton:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=34571-282616",Snackbar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-10",SubnavigationBar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27545-219646",SubnavigationButton:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=24011-185205",Tabbar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27137-216928",TabbarItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27137-216096",Tabs:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17312-69733",TabsItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=25061-207232",Tooltip:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=77-1765",UsersStack:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-11",Typography:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Caption:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",DisplayTitle:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",EllipsisText:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Footnote:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Headline:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Paragraph:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Subhead:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Text:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Title:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",ScrollArrows:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=26757-213067",WriteBar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=28392-239347",Separator:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21342-144690"},COMPONENTS_TO_FIGMA_IOS_DESIGN_URL={ActionSheet:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1902",ActionSheetItem:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1902",Alert:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7714",Avatar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=31295-53578",Button:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3-130",Banner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=1856-0",CellButton:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1901",Card:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",CardGrid:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",CardScroll:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",ContentCard:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",Cell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=538-0",Counter:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=2-205",Epic:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=17311-457",Slider:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",FormStatus:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Input:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Select:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",CustomSelect:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Gradient:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3298-8484",Group:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=540-2",Header:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=14853-51608",Footer:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=20499-51286",HorizontalCell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3458-50352",HorizontalScroll:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3458-50352",MiniInfoCell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=10844-101626",ModalCard:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7715",ModalPage:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7716",PanelHeader:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1903",Placeholder:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=540-0",Spinner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=20501-240",ScreenSpinner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=20501-241",PanelSpinner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=16561-49951",Progress:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3-83",RichCell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=1070-21070",Search:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1905",SegmentedControl:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=41435-63938",Checkbox:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Radio:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Snackbar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7713",SubnavigationBar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=28766-53402",SubnavigationButton:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=28766-53402",Tabbar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1904",TabbarItem:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1904",Tabs:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=4-132",TabsItem:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=4-132",Tooltip:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=4-133",UsersStack:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=540-1",Typography:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Caption:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",DisplayTitle:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",EllipsisText:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Footnote:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Headline:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Paragraph:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Subhead:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Text:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Title:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34"},createStoryParameters=(componentName,...additionalParameters)=>{const parameters=additionalParameters.reduce(((result,parameters)=>Object.assign(result,parameters)),{}),commonDesignUrl=COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL[componentName],iosDesignUrl=COMPONENTS_TO_FIGMA_IOS_DESIGN_URL[componentName];return(commonDesignUrl||iosDesignUrl)&&(parameters.design=[commonDesignUrl&&{name:"Web/Android",type:"figma",url:commonDesignUrl},iosDesignUrl&&{name:"IOS",type:"figma",url:iosDesignUrl}].filter(Boolean)),parameters}}}]);