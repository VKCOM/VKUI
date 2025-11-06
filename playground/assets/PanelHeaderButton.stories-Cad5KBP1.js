import{c as D,j as e,n as C}from"./iframe-DcUCz3Gq.js";import{S as E,D as F,C as B}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{P as A}from"./PanelHeaderBack-ScvfyrQ4.js";import{P as v}from"./PanelHeaderClose-uK5sUG_e.js";import{A as b}from"./AdaptiveIconRenderer-D8fi58IV.js";import{P as i}from"./PanelHeaderButton-CO3IJ1zl.js";import{V as y}from"./VisuallyHidden-IsgabQ9w.js";import{I as g,a as P}from"./done_outline_28-BmcfYuDM.js";import{I as h}from"./edit_outline_28-DTawkQHX.js";import{I as H}from"./pen_outline_24-5PH-c1zr.js";import{P as S}from"./PanelHeaderSubmit-5BxalI1l.js";import{I as V}from"./add_outline_28-DRdW8wXE.js";import"./preload-helper-PPVm8Dsz.js";import"./useConfigDirection-BglQDqbm.js";import"./chevron_left_outline_28-Da2NQpZ9.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_left_outline_20-BgodPbFJ.js";import"./cancel_outline_28-DTBoYd1n.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./Title-Cb6EL7Un.js";const s=({isActive:u=!1,editLabel:m="Редактировать",doneLabel:c="Готово",...p})=>{const d=D(),l=u?c:m;return e.jsx(i,{...p,label:d==="ios"?l:l&&e.jsx(y,{children:l}),children:d!=="ios"&&e.jsx(b,{IconCompact:u?P:H,IconRegular:u?g:h})})};try{s.displayName="PanelHeaderEdit",s.__docgenInfo={description:"",displayName:"PanelHeaderEdit",props:{isActive:{defaultValue:{value:"false"},description:"Включен ли режим редактирования.",name:"isActive",required:!1,type:{name:"boolean"}},editLabel:{defaultValue:{value:"Редактировать"},description:"Текст кнопки, когда режим редактирования не активен. Визуально скрыт везде, кроме iOS.",name:"editLabel",required:!1,type:{name:"string"}},doneLabel:{defaultValue:{value:"Готово"},description:"Текст кнопки при активном режиме редактирования для выхода из него. Визуально скрыт везде, кроме iOS.",name:"doneLabel",required:!1,type:{name:"string"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`.",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.\n@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `activeMode`.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.\n@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `hoverMode`.",name:"hoverClassName",required:!1,type:{name:"string"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active.",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover.",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}},primary:{defaultValue:null,description:`Флаг для обозначения первичной кнопки
Влияет на стилизацию кнопки.`,name:"primary",required:!1,type:{name:"boolean"}}}}}catch{}const o4={title:"Navigation/PanelHeader/PanelHeaderButton",component:i,parameters:f("PanelHeaderButton",B,F),args:{onClick:C}},a={render:u=>e.jsx(i,{...u,children:e.jsx(V,{})})},r={render:u=>e.jsx(v,{...u})},n={argTypes:{hideLabelOnVKCom:{type:"boolean"},hideLabelOnIOS:{type:"boolean"}},render:u=>e.jsx(A,{...u})},t={args:{isActive:!0},argTypes:{doneLabel:E,editLabel:E},render:u=>e.jsx(s,{...u})},o={render:u=>e.jsx(S,{...u})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const l4=["Playground","PanelHeaderClose","PanelHeaderBack","PanelHeaderEdit","PanelHeaderSubmit"];export{n as PanelHeaderBack,r as PanelHeaderClose,t as PanelHeaderEdit,o as PanelHeaderSubmit,a as Playground,l4 as __namedExportsOrder,o4 as default};
