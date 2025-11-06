import{c as I,j as e,n as q}from"./iframe-gnG2DlPI.js";import{S as E,D as L,C as x}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{P as M}from"./PanelHeaderBack-B5HArLiC.js";import{P as _}from"./PanelHeaderClose-DvfP-Wqy.js";import{A as j}from"./AdaptiveIconRenderer-QV1MdQeO.js";import{P as i}from"./PanelHeaderButton-DE1FFYyv.js";import{V as k}from"./VisuallyHidden-CKM3u7Sn.js";import{I as N,a as R}from"./done_outline_28-CudOj6wm.js";import{I as T}from"./edit_outline_28-BEp-6c-G.js";import{I as $}from"./pen_outline_24-Du05gAf7.js";import{P as W}from"./PanelHeaderSubmit-CGGWQ7bk.js";import{I as K}from"./add_outline_28-B4RXPYek.js";import"./preload-helper-Dp1pzeXC.js";import"./useConfigDirection-Dd3ud1i-.js";import"./chevron_left_outline_28-C60arpqC.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_left_outline_20-S4du1SZv.js";import"./cancel_outline_28-CdbgUv_k.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./Title-B3iIrqRR.js";const s=({isActive:u=!1,editLabel:H="Редактировать",doneLabel:S="Готово",...V})=>{const d=I(),l=u?S:H;return e.jsx(i,{...V,label:d==="ios"?l:l&&e.jsx(k,{children:l}),children:d!=="ios"&&e.jsx(j,{IconCompact:u?R:$,IconRegular:u?N:T})})};try{s.displayName="PanelHeaderEdit",s.__docgenInfo={description:"",displayName:"PanelHeaderEdit",props:{isActive:{defaultValue:{value:"false"},description:"Включен ли режим редактирования.",name:"isActive",required:!1,type:{name:"boolean"}},editLabel:{defaultValue:{value:"Редактировать"},description:"Текст кнопки, когда режим редактирования не активен. Визуально скрыт везде, кроме iOS.",name:"editLabel",required:!1,type:{name:"string"}},doneLabel:{defaultValue:{value:"Готово"},description:"Текст кнопки при активном режиме редактирования для выхода из него. Визуально скрыт везде, кроме iOS.",name:"doneLabel",required:!1,type:{name:"string"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`.",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.\n@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `activeMode`.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.\n@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `hoverMode`.",name:"hoverClassName",required:!1,type:{name:"string"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
Влияет на стилизацию кнопки.`,name:"primary",required:!1,type:{name:"boolean"}}}}}catch{}const A4={title:"Navigation/PanelHeader/PanelHeaderButton",component:i,parameters:O("PanelHeaderButton",x,L),args:{onClick:q}},a={render:u=>e.jsx(i,{...u,children:e.jsx(K,{})})},r={render:u=>e.jsx(_,{...u})},n={argTypes:{hideLabelOnVKCom:{type:"boolean"},hideLabelOnIOS:{type:"boolean"}},render:u=>e.jsx(M,{...u})},t={args:{isActive:!0},argTypes:{doneLabel:E,editLabel:E},render:u=>e.jsx(s,{...u})},o={render:u=>e.jsx(W,{...u})};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <PanelHeaderButton {...args}>
        <Icon28AddOutline />
      </PanelHeaderButton>;
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var D,C,F;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    return <PanelHeaderCloseCmp {...args} />;
  }
}`,...(F=(C=r.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var B,f,A;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(f=n.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var v,b,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var g,P,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <PanelHeaderSubmitCmp {...args} />;
  }
}`,...(h=(P=o.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};const v4=["Playground","PanelHeaderClose","PanelHeaderBack","PanelHeaderEdit","PanelHeaderSubmit"];export{n as PanelHeaderBack,r as PanelHeaderClose,t as PanelHeaderEdit,o as PanelHeaderSubmit,a as Playground,v4 as __namedExportsOrder,A4 as default};
