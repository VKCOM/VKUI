import{j as e,g,w as f,b as B}from"./iframe-BKqRoeRO.js";import{S as v,D as y,C as A}from"./constants-DdkjnEgz.js";import{g as n}from"./mock-CiudtyON.js";import{A as z}from"./Avatar-CrqBO804.js";import{G as S}from"./Group-CgxNLM1q.js";import{H as _}from"./HorizontalCell-CmnT6ILe.js";import{H}from"./HorizontalScroll-BmlpcThH.js";import{T as M}from"./Tappable-EPRrmr_0.js";import{S as b}from"./Subhead-B3U-hqtC.js";import{I as V}from"./chevron_right_circle_28-DmzJnfP7.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-y9FR1LVQ.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./ImageBaseBadge-DvIHUtUv.js";import"./useColorScheme-CV37oJpw.js";import"./InputUtils-CQaATz1N.js";import"./useFocusWithin-cA-uu2zg.js";import"./useIsClient-DJKMF84F.js";import"./useConfigDirection-BH9mMD5y.js";import"./online_mobile_12-C3-ykd7K.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Footnote-BAb4Skv3.js";import"./Caption-BlAl9F9i.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-DhU7lQXM.js";import"./VisuallyHidden-B-uFrHKw.js";import"./chevron_24-IM4I5Oua.js";import"./chevron_16-o7PR2C3U.js";const x="_host_2uaow_1",w="_centered_2uaow_5",q="_body_2uaow_14",I="_sizeS_2uaow_24",T="_sizeM_2uaow_29",P="_icon_2uaow_39",N="_text_2uaow_43",t={host:x,centered:w,body:q,sizeS:I,sizeM:T,icon:P,text:N},R={s:t.sizeS,m:t.sizeM},d=({className:r,style:u,getRef:m,getRootRef:o,height:C,size:E="s",children:D=E==="s"?"Все":"Показать все",centered:F=!1,...h})=>e.jsx("div",{style:u,className:g(t.host,F&&t.centered,R[E],r),ref:o,children:e.jsxs(M,{style:E==="s"?void 0:{height:C},className:t.body,getRootRef:m,activeMode:"opacity",hoverMode:"opacity",...h,children:[e.jsx(V,{className:t.icon}),e.jsx(b,{className:t.text,weight:"2",children:D})]})});try{d.displayName="HorizontalCellShowMore",d.__docgenInfo={description:"",displayName:"HorizontalCellShowMore",props:{height:{defaultValue:null,description:`Задаёт высоту компонента. Должeн соответствовать размеру картинок
внутри соседних \`HorizontalCell\` компонентов.

Используйте размеры, заданные дизайн-системой (смотри типы).

> ⚠️ Использование кастомного размера – это пограничный кейс.

Игнорируется, если \`size='s'\`.`,name:"height",required:!1,type:{name:"LiteralUnion<16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},size:{defaultValue:{value:"s"},description:'Задаёт размер компонента.\n\nЗначение `s` применяется для `<HorizontalCell size="s"`, в остальных случаях рекомендуется `m`.',name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},children:{defaultValue:{value:"size === 's' ? 'Все' : 'Показать все'"},description:"Предназначен для отрисовки текста.\nПо умолчанию для `size='s'` содержит текст `Все`, для `size='m'` - `Показать все`.",name:"children",required:!1,type:{name:"ReactNode"}},centered:{defaultValue:{value:"false"},description:"Выравнивание по центру относительно родителя.",name:"centered",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.\n@deprecated Since 7.3.0. Будет удалeно в **VKUI v9**.\n\nИспользуйте свойство `activeMode`.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.\n@deprecated Since 7.3.0. Будет удалeно в **VKUI v9**.\n\nИспользуйте свойство `hoverMode`.",name:"hoverClassName",required:!1,type:{name:"string"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active.",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover.",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const v4={title:"Data Display/HorizontalScroll/HorizontalCellShowMore",component:d,parameters:{...A,...y},argTypes:{children:v}},L=[{id:1,title:"Промокот",icon:n("app_promokot")},{id:2,title:"Разделите счёт",icon:n("app_split_bill")},{id:3,title:"Рассылки",icon:n("app_emails")},{id:4,title:"Тексты песен",icon:n("app_lyrics")}];function p({size:r,height:u}){return r==="s"?56:r==="m"&&u&&u>88?88:u}const a={render:function({...u}){return e.jsx(e.Fragment,{children:e.jsx(d,{...u,height:p(u),children:u.children})})},args:{size:"m",height:96},decorators:[(r,{args:u})=>{const m=p(u);return e.jsx(S,{children:e.jsxs(H,{children:[L.map(o=>e.jsx(_,{size:u.size,title:o.title,children:e.jsx(z,{size:m,src:o.icon,alt:`avatar: ${o.title}`})},o.id)),e.jsx(r,{...u})]})})},f,B]},i={...a,args:{...a.args,size:"s",height:56}},s={...a,args:{...a.args,size:"m",height:88}},l=a,c={...a,args:{...a.args,size:"m",height:88,children:"Show More"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render({
    ...args
  }) {
    return <>
        <HorizontalCellShowMore {...args} height={getNotTooBigHeightBySize(args)}>
          {args.children}
        </HorizontalCellShowMore>
      </>;
  },
  args: {
    size: 'm',
    height: 96
  },
  decorators: [(Component, {
    args
  }) => {
    const cellImageSize = getNotTooBigHeightBySize(args);
    return <Group>
          <HorizontalScroll>
            {CELL_ITEMS.map(element => <HorizontalCell key={element.id} size={args.size} title={element.title}>
                <Avatar size={cellImageSize} src={element.icon} alt={\`avatar: \${element.title}\`} />
              </HorizontalCell>)}
            <Component {...args} />
          </HorizontalScroll>
        </Group>;
  }, withSinglePanel, withVKUILayout]
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 's',
    height: 56
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"Playground",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88,
    children: 'Show More'
  }
}`,...c.parameters?.docs?.source}}};const y4=["Playground","Small","Middle","Large","WithCustomText"];export{l as Large,s as Middle,a as Playground,i as Small,c as WithCustomText,y4 as __namedExportsOrder,v4 as default};
