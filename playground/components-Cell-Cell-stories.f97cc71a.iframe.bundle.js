"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7981],{"./src/testing/mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E8:()=>cities,TW:()=>getAvatarUrl,hw:()=>getRandomInt,$A:()=>getRandomUser,uM:()=>getRandomUsers});var user_dataset_users=[{id:3520,first_name:"Вадим",last_name:"Дорохов",screen_name:"dorokhov",photo_100:"https://sun9-60.userapi.com/c855032/v855032963/15d4f9/XOQY9NSlP5A.jpg?ava=1",photo_200:"https://sun9-32.userapi.com/c855032/v855032963/15d4f8/YWT1CBkuDUM.jpg?ava=1"},{id:83492458,first_name:"Влад",last_name:"Анесов",screen_name:"va",photo_100:"https://sun9-44.userapi.com/c858128/v858128761/67fe1/nAnraWnpHK8.jpg?ava=1",photo_200:"https://sun9-69.userapi.com/c858128/v858128761/67fe0/itnUs52j974.jpg?ava=1"},{id:79153907,first_name:"Александр",last_name:"Колобов",screen_name:"iamaleko",photo_100:"https://sun9-44.userapi.com/c848528/v848528590/1e57b2/JA3HmfitPZU.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c848528/v848528590/1e57b1/rwQw-askMow.jpg?ava=1"},{id:403563269,first_name:"Artur",last_name:"Stambultsian",screen_name:"arthurstam",photo_100:"https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1",photo_200:"https://sun9-62.userapi.com/z4_z-ls5mVpMw1edyggl4gz6RoItDjH0pGxbyg/FII3YzuW73Y.jpg?ava=1"},{id:1122996,first_name:"Илья",last_name:"Таратухин",screen_name:"darkilfa",photo_100:"https://sun9-19.userapi.com/yGUuBADgtYRKU5yN_Vb3UkZL6PEaY3OWTBCEeA/bGpg5AL0WiM.jpg?ava=1",photo_200:"https://sun9-57.userapi.com/K2opK6HGnGq1eQ292zUP4q4IAjjdxOcixJxbBw/VbOeiRIGEnI.jpg?ava=1"},{id:26277006,first_name:"Роман",last_name:"Захаров",screen_name:"rom",photo_100:"https://sun9-21.userapi.com/c854428/v854428614/479c6/jSqse8LyfS8.jpg?ava=1",photo_200:"https://sun9-31.userapi.com/c854428/v854428614/479c5/tQyKztSqZfU.jpg?ava=1"},{id:818250,first_name:"Миша",last_name:"Андриевский",screen_name:"m.andrievskiy",photo_100:"https://sun9-52.userapi.com/c846017/v846017974/114170/WFIMAZh8H1o.jpg?ava=1",photo_200:"https://sun9-21.userapi.com/c846017/v846017974/11416f/4geIRdA2GkQ.jpg?ava=1"},{id:37700627,first_name:"Тарас",last_name:"Иванов",screen_name:"ti",photo_100:"https://sun9-16.userapi.com/c857724/v857724589/9c7ad/01M-8UlcNoo.jpg?ava=1",photo_200:"https://sun9-29.userapi.com/c857724/v857724589/9c7ac/_OQ6lzK7PSc.jpg?ava=1"},{id:92093600,first_name:"Илья",last_name:"Гришин",screen_name:"ilyagrshn",photo_100:"https://sun9-34.userapi.com/c857132/v857132690/49628/r4wBoWw0mJI.jpg?ava=1",photo_200:"https://sun9-14.userapi.com/c857132/v857132690/49627/MCT6QoygisY.jpg?ava=1"},{id:274123,first_name:"Илья",last_name:"Пеняев",screen_name:"ia",photo_100:"https://sun9-53.userapi.com/c857620/v857620811/76951/_1bkgzBj5M0.jpg?ava=1",photo_200:"https://sun9-13.userapi.com/c857620/v857620811/76950/mcdVNs_siHk.jpg?ava=1"},{id:50875477,first_name:"Иван",last_name:"Барышев",screen_name:"wayshev",photo_100:"https://sun9-4.userapi.com/oDjqp-AYVog1kuee5JOjzP9fMOvzCWCGBY0YHg/WW88aTocBxA.jpg?ava=1",photo_200:"https://sun9-5.userapi.com/-NguPXLiF8tpwvEwBjtPgz89ads9fadFWCLxYw/o0xdilzOClE.jpg?ava=1"},{id:54986442,first_name:"Иван",last_name:"Гусев",screen_name:"girl",photo_100:"https://sun9-9.userapi.com/U_neC4C0b0k2TacpGigQf_4cbGKN7Z7tj4QzHQ/WCj1fIGbtZ8.jpg?ava=1",photo_200:"https://sun9-13.userapi.com/EdYJ0DLky80jbtItUYw6BZliBw9KDNxxPUjuSA/vdEHQgCkWdI.jpg?ava=1"},{id:690765,first_name:"Макс",last_name:"Павлов",screen_name:"mp",photo_100:"https://sun9-5.userapi.com/c852232/v852232119/15fdda/0Ghe0f06u3s.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c852232/v852232119/15fdd9/hXPvs--xpBE.jpg?ava=1"},{id:494075,first_name:"Антон",last_name:"Циварев",screen_name:"tsivarev",photo_100:"https://sun9-47.userapi.com/c830708/v830708352/1c50b4/Nl8LPuMRj5k.jpg?ava=1",photo_200:"https://sun9-71.userapi.com/c830708/v830708352/1c50b3/W-ZDnTalKLE.jpg?ava=1"},{id:168850,first_name:"Юля",last_name:"Брук",screen_name:"yb",photo_100:"https://sun9-9.userapi.com/c850032/v850032014/5a495/rZnSh_81UgY.jpg?ava=1",photo_200:"https://sun9-44.userapi.com/c850032/v850032014/5a494/4xtk-O2o1Z4.jpg?ava=1"},{id:6492,first_name:"Андрей",last_name:"Рогозов",screen_name:"andrew",photo_100:"https://sun9-27.userapi.com/c837536/v837536492/2f070/HT6-ucTq-cQ.jpg?ava=1",photo_200:"https://sun9-41.userapi.com/c837536/v837536492/2f06f/O0YuCLtzlDg.jpg?ava=1"},{id:53448,first_name:"Андрей",last_name:"Новосельский",screen_name:"andrewnovoselsky",photo_100:"https://sun9-44.userapi.com/c848628/v848628445/16041a/6K1dtEwQl5g.jpg?ava=1",photo_200:"https://sun9-57.userapi.com/c848628/v848628445/160419/pT8x_uOMMlc.jpg?ava=1"},{id:331639485,first_name:"Igor",last_name:"Fedorov",screen_name:"xyz",photo_100:"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1",photo_200:"https://sun9-50.userapi.com/mN6GLkHt4Ul_AoWy-qGsHyOGrq3zdYboHvo8Cg/T87c3LJBVuk.jpg?ava=1"},{id:52826694,first_name:"Михаил",last_name:"Лихачёв",screen_name:"lihachyov",photo_100:"https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1",photo_200:"https://sun9-28.userapi.com/c850332/v850332555/11502f/rVlRIjlWkWw.jpg?ava=1"},{id:2604586,first_name:"Тимофей",last_name:"Чаптыков",screen_name:"tc",photo_100:"https://sun9-60.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1",photo_200:"https://sun9-19.userapi.com/c851416/v851416327/be83f/zS1b6d0GLvs.jpg?ava=1"},{id:163093483,first_name:"Алексей",last_name:"Мазелюк",screen_name:"mm",photo_100:"https://sun9-60.userapi.com/c855124/v855124003/167f36/TzgXYX1Izqk.jpg?ava=1",photo_200:"https://sun9-15.userapi.com/c855124/v855124003/167f35/lbGw8DnDPbs.jpg?ava=1"},{id:61351294,first_name:"Евгений",last_name:"Котляров",screen_name:"eee",photo_100:"https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1",photo_200:"https://sun9-21.userapi.com/Qs3nvx49pimar_UID28JXOIcVEA_4Yx3Itd8CQ/ORdcJxdkow8.jpg?ava=1"},{id:19039187,first_name:"Иван",last_name:"Недзвецкий",screen_name:"in",photo_100:"https://sun9-71.userapi.com/S6sD78Ezdj0a63Tm3wU2gzS1sq-bP42TwKLYGg/BRRvQaRNJPE.jpg?ava=1",photo_200:"https://sun9-32.userapi.com/SXlqIOOYqVZyfmcOE66dnWvK-dguVsLYXbw1KQ/c3lwSlf75qM.jpg?ava=1"},{id:3538429,first_name:"Иван",last_name:"Тимофеев",screen_name:"ox",photo_100:"https://sun9-11.userapi.com/c858420/v858420276/5e9b7/WodDi1aEvFQ.jpg?ava=1",photo_200:"https://sun9-8.userapi.com/c858420/v858420276/5e9b6/QrbYATzAdQc.jpg?ava=1"},{id:84115983,first_name:"Настя",last_name:"Манзюк",screen_name:"manzuk",photo_100:"https://sun9-72.userapi.com/c857628/v857628986/22ddf/6gkgoYPj-Ms.jpg?ava=1",photo_200:"https://sun9-11.userapi.com/c857628/v857628986/22dde/4AiaIut-n5g.jpg?ava=1"},{id:82613762,first_name:"Jean",last_name:"Isahakyan",screen_name:"ji",photo_100:"https://sun9-27.userapi.com/zmcGxRfZe3fdjIdMlq0OgjYGfIdYGOF67YfiLQ/TJi2eetIwN0.jpg?ava=1",photo_200:"https://sun9-14.userapi.com/l5q9tXplH5akRTPKfhqkJynKdCd6DcHImS9z3g/kWUJAOv51o0.jpg?ava=1"},{id:66748,first_name:"Олег",last_name:"Илларионов",screen_name:"illarionov",photo_100:"https://sun9-18.userapi.com/c841629/v841629884/290aa/TUPsSYQXzKg.jpg?ava=1",photo_200:"https://sun9-36.userapi.com/c841629/v841629884/290a9/xwmA1U54rNw.jpg?ava=1"},{id:34,first_name:"Татьяна",last_name:"Плуталова",screen_name:"id34",photo_100:"https://sun9-70.userapi.com/c636327/v636327034/2be84/TYzZpZ8BL0k.jpg?ava=1",photo_200:"https://sun9-12.userapi.com/c636327/v636327034/2be83/n8JO0z5V8FA.jpg?ava=1"},{id:39840293,first_name:"Евгений",last_name:"Авсиевич",screen_name:"evg",photo_100:"https://sun9-19.userapi.com/c846020/v846020298/1d0e79/R41LGoPtIK0.jpg?ava=1",photo_200:"https://sun9-67.userapi.com/c846020/v846020298/1d0e78/Nte_l9WWJTU.jpg?ava=1"},{id:2050,first_name:"Катя",last_name:"Лебедева",screen_name:"me",photo_100:"https://sun9-45.userapi.com/c857436/v857436004/f3f2c/eQ-xaP73964.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c857436/v857436004/f3f2b/81R9C6HQ7GI.jpg?ava=1"},{id:1986125,first_name:"Настя",last_name:"Семенюк",screen_name:"ya",photo_100:"https://sun9-13.userapi.com/c855036/v855036032/16d259/tJwjpfzoPRc.jpg?ava=1",photo_200:"https://sun9-24.userapi.com/c855036/v855036032/16d258/RiAL8XjFGqs.jpg?ava=1"},{id:13329312,first_name:"Павел",last_name:"Князев",screen_name:"apvel",photo_100:"https://sun9-52.userapi.com/c844521/v844521213/83b9f/uYAH_OJZisM.jpg?ava=1",photo_200:"https://sun9-9.userapi.com/c844521/v844521213/83b9e/eQ-X89V6J3k.jpg?ava=1"},{id:242670751,first_name:"Кирилл",last_name:"Аверьянов",screen_name:"kir",photo_100:"https://sun9-68.userapi.com/c849032/v849032673/112633/pUPD0KXXWGc.jpg?ava=1",photo_200:"https://sun9-53.userapi.com/c849032/v849032673/112632/cVO914r-OsU.jpg?ava=1"},{id:151477469,first_name:"Коля",last_name:"Борисов",screen_name:"casper6479",photo_100:"https://sun9-12.userapi.com/c850128/v850128006/86340/1IV4iSrVWQY.jpg?ava=1",photo_200:"https://sun9-2.userapi.com/c850128/v850128006/8633f/yRgM9VtYjBA.jpg?ava=1"},{id:152199439,first_name:"Виталя",last_name:"Волынский",screen_name:"vitalyavolyn",photo_100:"https://sun9-55.userapi.com/c848416/v848416376/1b82ab/K5YJ8Htn3as.jpg?ava=1",photo_200:"https://sun9-56.userapi.com/c848416/v848416376/1b82aa/IhAknTNCFjE.jpg?ava=1"}];function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1)+min)}function getRandomArrayElement(items){return items[Math.floor(Math.random()*items.length)]}var photos={app_shorm_online:{photo_100:"https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg"},app_shashki:{photo_100:"https://pp.userapi.com/c848536/v848536020/18242/ZLjAYM59EqY.jpg"},app_vega_mix:{photo_100:"https://pp.userapi.com/c849028/v849028348/1b353/Na_GRlqgRNM.jpg"},app_zagadki:{photo_100:"https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg",photo_200:"https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg"},app_promokot:{photo_100:"https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg"},app_split_bill:{photo_100:"https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg"},app_emails:{photo_100:"https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg"},app_lyrics:{photo_100:"https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg"},audio_arctic_monkeys:{photo_100:"https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg"},audio_leto_zveri:{photo_100:"https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg"},audio_depeche_mode:{photo_100:"https://pp.userapi.com/c837628/v837628453/39175/4JRjMaFvCrw.jpg"},audio_linkin_park:{photo_100:"https://pp.userapi.com/c846120/v846120617/1ff005/WmCcgV5CozY.jpg"},audio_face:{photo_100:"https://pp.userapi.com/c845218/v845218888/182681/Al6XrhpJYn0.jpg"},chat_basketball:{photo_100:"https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg",photo_200:"https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg"}};function getAvatarUrl(id,size){var object;return(null==id?void 0:id.startsWith("user_"))?(object=user_dataset_users.find((function(user){return"user_"+user.screen_name===id})))||(object=getRandomArrayElement(user_dataset_users)):(id&&photos.hasOwnProperty(id)||(id=function getRandomObjectKey(object){var keys=Object.keys(object);return keys[keys.length*Math.random()|0]}(photos)),object=photos[id]),200===size&&object.photo_200||object.photo_100}function prepareUser(user){return _object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},user),{name:"".concat(user.first_name," ").concat(user.last_name),initials:"".concat(user.first_name[0]).concat(user.last_name[0])})}function getRandomUser(){var user=Object.assign({},getRandomArrayElement(user_dataset_users));return user.id=getRandomInt(1,2e9),prepareUser(user)}function getRandomUsers(count){for(var items=[],names={},i=0;i<count;i++){var user=getRandomUser();if(names[user.name])for(var j=0;j<5&&names[(user=getRandomUser()).name];j++);items.push(user),names[user.name]=!0}return items}var cities=[{label:"Санкт-Петербург",description:"Россия",value:"0"},{label:"Москва",description:"Россия",value:"1"},{label:"Новосибирск",description:"Россия",disabled:!0,value:"2"},{label:"Нью-Йорк",description:"США",value:"3"},{label:"Чикаго",description:"США",value:"4"}]},"./src/components/Cell/Cell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiple:()=>Multiple,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_testing_mock__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/testing/mock.ts"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_Group_Group__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Group/Group.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Cell",component:__webpack_require__("./src/components/Cell/Cell.tsx").f,parameters:_object_spread({},_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eC),decorators:[_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_4__.fd,_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_4__.E4],args:{onClick:_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.lQ}};var Playground={args:{children:"Игорь Федоров",before:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__.e,{src:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_6__.TW)("user_xyz")})},decorators:[function(Component,context){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Group_Group__WEBPACK_IMPORTED_MODULE_7__.Y,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_object_spread({},context.args))})}]},Multiple=_object_spread_props(_object_spread({},Playground),{args:{before:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__.e,{})},decorators:[function(Component,context){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Group_Group__WEBPACK_IMPORTED_MODULE_7__.Y,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{args:_object_spread_props(_object_spread({},context.args),{children:"Игорь Федоров"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{args:_object_spread_props(_object_spread({},context.args),{children:"Вадим Дорохов"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{args:_object_spread_props(_object_spread({},context.args),{children:"Евгения Полозова"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{args:_object_spread_props(_object_spread({},context.args),{children:"Владимир Клепов"})})]})}]});Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Игорь Федоров',\n    before: <Avatar src={getAvatarUrl('user_xyz')} />\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>]\n}",...Playground.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  args: {\n    before: <Avatar />\n  },\n  decorators: [(Component, context) => <Group>\n        <Component args={{\n      ...context.args,\n      children: 'Игорь Федоров'\n    }} />\n        <Component args={{\n      ...context.args,\n      children: 'Вадим Дорохов'\n    }} />\n        <Component args={{\n      ...context.args,\n      children: 'Евгения Полозова'\n    }} />\n        <Component args={{\n      ...context.args,\n      children: 'Владимир Клепов'\n    }} />\n      </Group>]\n}",...Multiple.parameters?.docs?.source}}};const __namedExportsOrder=["Playground","Multiple"]},"../../node_modules/@vkontakte/icons/dist_es6/12/circle_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Icon12Circle});var Icon12Circle=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/12/online_mobile_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Icon12OnlineMobile});var Icon12OnlineMobile=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.5.5 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.5.5 0 0 0 .502-.502V3.503A.5.5 0 0 0 5.997 3" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/16/chevron_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Icon16Chevron});var Icon16Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_box_off_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Icon20CheckBoxOff});var Icon20CheckBoxOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckBoxOff","check_box_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_off_20"><path fill="currentColor" fill-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.64 3.64 0 0 1-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.64 3.64 0 0 1-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.65 3.65 0 0 1 1.512-1.512m3.082.966c-1.531 0-1.962.136-2.374.357a2.15 2.15 0 0 0-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374q.313.585.897.897c.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357q.585-.313.897-.897c.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.15 2.15 0 0 0-.897-.897c-.412-.22-.843-.357-2.374-.357z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_box_on_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Icon20CheckBoxOn});var Icon20CheckBoxOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckBoxOn","check_box_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_on_20"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m12.2 3.803a.9.9 0 1 0-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 0 0 5.364 10.6l2.691 2.687a.9.9 0 0 0 1.272 0z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_circle_off_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Icon20CheckCircleOff});var Icon20CheckCircleOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckCircleOff","check_circle_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 20 20" id="check_circle_off_20"><defs><path id="check_circle_off_20_a" fill="currentColor" fill-rule="evenodd" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18" clip-rule="evenodd" /></defs><use xlink:href="#check_circle_off_20_a" fill-rule="evenodd" clip-rule="evenodd" /><use xlink:href="#check_circle_off_20_a" fill-rule="evenodd" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/check_circle_on_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Icon20CheckCircleOn});var Icon20CheckCircleOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20CheckCircleOn","check_circle_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" id="check_circle_on_20"><path fill-rule="evenodd" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m5.35-12.72a.75.75 0 1 0-1.062-1.06l-5.955 5.968L5.81 9.66a.75.75 0 1 0-1.062 1.06l3.054 3.06a.75.75 0 0 0 1.062 0z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/cancel_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Icon24Cancel});var Icon24Cancel=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Cancel","cancel_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_box_off_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Icon24CheckBoxOff});var Icon24CheckBoxOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckBoxOff","check_box_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_off_24"><path fill="currentColor" d="M16.872 2c1.783 0 2.43.186 3.082.534s1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.64 3.64 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756S4 5.673 4 6.563v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757s.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756s.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.8 1.8 0 0 0-.756-.757c-.326-.174-.65-.267-1.54-.267" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_box_on_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Icon24CheckBoxOn});var Icon24CheckBoxOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckBoxOn","check_box_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_on_24"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m15.771 5.023a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_circle_off_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Icon24CheckCircleOff});var Icon24CheckCircleOff=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckCircleOff","check_circle_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_off_24"><path fill="currentColor" d="M12 0c6.629 0 12 5.373 12 12 0 6.629-5.373 12-12 12-6.629 0-12-5.373-12-12C0 5.371 5.373 0 12 0m0 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/check_circle_on_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Icon24CheckCircleOn});var Icon24CheckCircleOn=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24CheckCircleOn","check_circle_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_on_24"><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m6.207-14.793a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/chevron_compact_right_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Icon24ChevronCompactRight});var Icon24ChevronCompactRight=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a1 1 0 0 1 0 1.416l-5.084 5.084a1 1 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/reorder_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Icon24Reorder});var Icon24Reorder=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Reorder","reorder_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M21 18a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/reorder_ios_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Icon24ReorderIos});var Icon24ReorderIos=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24ReorderIos","reorder_ios_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity=".1" /><path fill="currentColor" fill-rule="nonzero" d="M2.75 7h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5" /></g></symbol>',24,24,!1,void 0)}}]);