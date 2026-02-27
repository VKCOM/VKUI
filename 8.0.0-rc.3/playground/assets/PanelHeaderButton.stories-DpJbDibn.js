import{E as D,j as e,n as F}from"./iframe-Cn0klKvz.js";import{S as E,D as C,C as B}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{P as A}from"./PanelHeaderBack-BupP6OB1.js";import{P as v}from"./PanelHeaderClose-BQOVOwrN.js";import{A as b}from"./AdaptiveIconRenderer-BkROPn6l.js";import{P as i}from"./PanelHeaderButton-BYqA14CU.js";import{V as y}from"./VisuallyHidden-C9tNf48m.js";import{I as g,a as P}from"./done_outline_28-CLw1jVSp.js";import{I as h}from"./edit_outline_28-CXhRei5j.js";import{I as H}from"./pen_outline_24-Cj5k16Ka.js";import{P as V}from"./PanelHeaderSubmit-D0WrgwKc.js";import{I}from"./add_outline_28-2ouzDw8O.js";import"./preload-helper-PPVm8Dsz.js";import"./useConfigDirection-DuEYXWS_.js";import"./chevron_left_outline_28-DMU6b4wv.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./chevron_left_outline_20-9God32SQ.js";import"./cancel_outline_28-CFA5mWpV.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./Title-C-xuvkmu.js";const s=({isActive:u=!1,editLabel:m="Редактировать",doneLabel:c="Готово",...p})=>{const d=D(),l=u?c:m;return e.jsx(i,{...p,label:d==="ios"?l:l&&e.jsx(y,{children:l}),children:d!=="ios"&&e.jsx(b,{IconCompact:u?P:H,IconRegular:u?g:h})})};try{s.displayName="PanelHeaderEdit",s.__docgenInfo={description:"",displayName:"PanelHeaderEdit",props:{isActive:{defaultValue:{value:"false"},description:"Включен ли режим редактирования.",name:"isActive",required:!1,type:{name:"boolean"}},editLabel:{defaultValue:{value:"Редактировать"},description:"Текст кнопки, когда режим редактирования не активен. Визуально скрыт везде, кроме iOS.",name:"editLabel",required:!1,type:{name:"string"}},doneLabel:{defaultValue:{value:"Готово"},description:"Текст кнопки при активном режиме редактирования для выхода из него. Визуально скрыт везде, кроме iOS.",name:"doneLabel",required:!1,type:{name:"string"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},primary:{defaultValue:null,description:`Флаг для обозначения первичной кнопки
Влияет на стилизацию кнопки.`,name:"primary",required:!1,type:{name:"boolean"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`.",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.\n@deprecated Since 7.3.0. Будет удалeно в **VKUI v9**.\n\nИспользуйте свойство `activeMode`.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.\n@deprecated Since 7.3.0. Будет удалeно в **VKUI v9**.\n\nИспользуйте свойство `hoverMode`.",name:"hoverClassName",required:!1,type:{name:"string"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
иметь \`hovered\`-cостояние при наведении
на любой дочерний элемент.
По умолчанию состояние hovered у родителя сбрасывается.

Присваивается родителькому компоненту.
@example <Tappable hasHoverWithChildren>
  <IconButton />
  <IconButton />
  <IconButton />
</Tappable>`,name:"hasHoverWithChildren",required:!1,type:{name:"boolean"}},unlockParentHover:{defaultValue:null,description:`Позволяет родительскому компоненту показывать hovered-состояние при наведении
на текущий дочерний компонент.

Присваивается дочернему компоненту.
@example <Tappable>
  <IconButton unlockParentHover />
  <IconButton unlockParentHover />
  <IconButton />
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active.",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover.",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}}}catch{}const n4={title:"Navigation/PanelHeader/PanelHeaderButton",component:i,parameters:f("PanelHeaderButton",B,C),args:{onClick:F}},a={render:u=>e.jsx(i,{...u,children:e.jsx(I,{})})},r={render:u=>e.jsx(v,{...u})},n={argTypes:{hideLabelOnVKCom:{type:"boolean"},hideLabelOnIOS:{type:"boolean"}},render:u=>e.jsx(A,{...u})},t={args:{isActive:!0},argTypes:{doneLabel:E,editLabel:E},render:u=>e.jsx(s,{...u})},o={render:u=>e.jsx(V,{...u})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <PanelHeaderButton {...args}>
        <Icon28AddOutline />
      </PanelHeaderButton>;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <PanelHeaderCloseCmp {...args} />;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  argTypes: {
    hideLabelOnVKCom: {
      type: 'boolean'
    },
    hideLabelOnIOS: {
      type: 'boolean'
    }
  },
  render: args => {
    return <PanelHeaderBackCmp {...args} />;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: true
  },
  argTypes: {
    doneLabel: StringArg,
    editLabel: StringArg
  },
  render: args => {
    return <PanelHeaderEditCmp {...args} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <PanelHeaderSubmitCmp {...args} />;
  }
}`,...o.parameters?.docs?.source}}};const t4=["Playground","PanelHeaderClose","PanelHeaderBack","PanelHeaderEdit","PanelHeaderSubmit"];export{n as PanelHeaderBack,r as PanelHeaderClose,t as PanelHeaderEdit,o as PanelHeaderSubmit,a as Playground,t4 as __namedExportsOrder,n4 as default};
