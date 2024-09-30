"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8620],{"./src/components/Tabs/Tabs.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Playground:function(){return T},WithHorizontalScroll:function(){return x}});var n,s,o,c,a,l,i=r("../../node_modules/react/jsx-runtime.js");r("../../node_modules/react/index.js");var u=r("@storybook/preview-api"),d=r("./src/storybook/VKUIDecorators.tsx"),p=r("./src/storybook/constants.ts"),m=r("./src/components/Group/Group.tsx"),f=r("./src/components/HorizontalScroll/HorizontalScroll.tsx"),g=r("./src/components/TabsItem/TabsItem.tsx"),b=r("./src/components/TabsItem/TabsItem.stories.tsx"),y=r("./src/components/Tabs/Tabs.tsx");function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function k(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var o=[],c=!0,a=!1;try{for(s=s.call(e);!(c=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){a=!0,n=e}finally{try{c||null==s.return||s.return()}finally{if(a)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S={title:"Blocks/Tabs",component:y.m,parameters:j({},p.tW,p.nB),argTypes:{selected:{control:{type:"select"},options:["groups","news","recommendations","friends","photos"]}}};t.default=S;var T={render:function(e){var t=e.selected,r=void 0===t?"groups":t,n=k(e,["selected"]),s=O((0,u.useArgs)(),2)[1];return(0,i.jsxs)(y.m,v(j({},n),{children:[(0,i.jsx)(g.L,v(j({},b.Playground.args),{selected:"groups"===r,onClick:function(){return s({selected:"groups"})}})),(0,i.jsx)(g.L,v(j({},b.WithBeforeAfter.args),{selected:"news"===r,onClick:function(){return s({selected:"news"})}})),(0,i.jsx)(g.L,v(j({},b.WithBadge.args),{selected:"recommendations"===r,onClick:function(){return s({selected:"recommendations"})}})),(0,i.jsx)(g.L,v(j({},b.WithCounter.args),{selected:"friends"===r,onClick:function(){return s({selected:"friends"})}})),(0,i.jsx)(g.L,v(j({},b.WithNumberStatus.args),{selected:"photos"===r,onClick:function(){return s({selected:"photos"})}}))]}))},decorators:[function(e){return(0,i.jsx)(m.Z,{children:(0,i.jsx)(e,{})})}]},x={render:function(e){var t=e.selected,r=void 0===t?"groups":t,n=k(e,["selected"]),s=O((0,u.useArgs)(),2)[1];return(0,i.jsx)(y.m,v(j({},n),{children:(0,i.jsxs)(f.Z,{arrowSize:"m",children:[(0,i.jsx)(g.L,v(j({},b.Playground.args),{selected:"groups"===r,onClick:function(){return s({selected:"groups"})}})),(0,i.jsx)(g.L,v(j({},b.WithBeforeAfter.args),{selected:"news"===r,onClick:function(){return s({selected:"news"})}})),(0,i.jsx)(g.L,v(j({},b.WithBadge.args),{selected:"recommendations"===r,onClick:function(){return s({selected:"recommendations"})}})),(0,i.jsx)(g.L,v(j({},b.WithCounter.args),{selected:"friends"===r,onClick:function(){return s({selected:"friends"})}})),(0,i.jsx)(g.L,v(j({},b.WithNumberStatus.args),{selected:"photos"===r,onClick:function(){return s({selected:"photos"})}}))]})}))},decorators:[function(e){return(0,i.jsx)(m.Z,{style:{maxWidth:500},children:(0,i.jsx)(e,{})})},d.vO]};T.parameters=v(j({},T.parameters),{docs:v(j({},null===(n=T.parameters)||void 0===n?void 0:n.docs),{source:j({originalSource:"{\n  render: function Render({\n    selected = 'groups',\n    ...args\n  }) {\n    const [, updateArg] = useArgs();\n    return <Tabs {...args}>\n        <TabsItem {...BasicTabsItemStory.args} selected={selected === 'groups'} onClick={() => updateArg({\n        selected: 'groups'\n      })} />\n        <TabsItem {...BeforeAfterTabsItemStory.args} selected={selected === 'news'} onClick={() => updateArg({\n        selected: 'news'\n      })} />\n        <TabsItem {...BadgeTabsItemStory.args} selected={selected === 'recommendations'} onClick={() => updateArg({\n        selected: 'recommendations'\n      })} />\n        <TabsItem {...CounterTabsItemStory.args} selected={selected === 'friends'} onClick={() => updateArg({\n        selected: 'friends'\n      })} />\n        <TabsItem {...NumberStatusTabsItemStory.args} selected={selected === 'photos'} onClick={() => updateArg({\n        selected: 'photos'\n      })} />\n      </Tabs>;\n  },\n  decorators: [Component => <Group>\n        <Component />\n      </Group>]\n}"},null===(o=T.parameters)||void 0===o?void 0:null===(s=o.docs)||void 0===s?void 0:s.source)})}),x.parameters=v(j({},x.parameters),{docs:v(j({},null===(c=x.parameters)||void 0===c?void 0:c.docs),{source:j({originalSource:"{\n  render: function Render({\n    selected = 'groups',\n    ...args\n  }) {\n    const [, updateArg] = useArgs();\n    return <Tabs {...args}>\n        <HorizontalScroll arrowSize=\"m\">\n          <TabsItem {...BasicTabsItemStory.args} selected={selected === 'groups'} onClick={() => updateArg({\n          selected: 'groups'\n        })} />\n          <TabsItem {...BeforeAfterTabsItemStory.args} selected={selected === 'news'} onClick={() => updateArg({\n          selected: 'news'\n        })} />\n          <TabsItem {...BadgeTabsItemStory.args} selected={selected === 'recommendations'} onClick={() => updateArg({\n          selected: 'recommendations'\n        })} />\n          <TabsItem {...CounterTabsItemStory.args} selected={selected === 'friends'} onClick={() => updateArg({\n          selected: 'friends'\n        })} />\n          <TabsItem {...NumberStatusTabsItemStory.args} selected={selected === 'photos'} onClick={() => updateArg({\n          selected: 'photos'\n        })} />\n        </HorizontalScroll>\n      </Tabs>;\n  },\n  decorators: [Component => <Group style={{\n    maxWidth: 500\n  }}>\n        <Component />\n      </Group>, withSinglePanel]\n}"},null===(l=x.parameters)||void 0===l?void 0:null===(a=l.docs)||void 0===a?void 0:a.source)})})}}]);