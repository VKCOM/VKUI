import{j as e,i as N,w as I,b as P}from"./iframe-CGpIZMk8.js";import{S as T,D as R,C as w}from"./constants-DdkjnEgz.js";import{g as o}from"./mock-BznupqUM.js";import{A as L}from"./Avatar-C-0ggE1O.js";import{G as j}from"./Group-CoQ5RzN5.js";import{H as k}from"./HorizontalCell-BVW9PhL9.js";import{H as W}from"./HorizontalScroll-Cktdm_az.js";import{T as G}from"./Tappable-BEdABn7b.js";import{S as U}from"./Subhead-D_tBif6E.js";import{I as K}from"./chevron_right_circle_28-B2NC6mvW.js";import"./ImageBase-Dgt2gvRv.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Bmifrsur.js";import"./useColorScheme-B2GHpbyp.js";import"./InputUtils-Z7In03iI.js";import"./useFocusWithin-mFqouh7d.js";import"./useIsClient-CR0g9cri.js";import"./useConfigDirection-Dz_AGVHb.js";import"./online_mobile_12-BfJB-Idm.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DPd01TxJ.js";import"./Caption-J3zu-s3t.js";import"./fx-COm1Tbx7.js";import"./ScrollArrow-B2rjeMBm.js";import"./VisuallyHidden-CdBh7Iry.js";import"./chevron_24-DxaNHOrp.js";import"./chevron_16-C7AVBXEj.js";const $="_host_3bn3m_1",O="_centered_3bn3m_5",J="_body_3bn3m_14",Q="_sizeS_3bn3m_24",X="_sizeM_3bn3m_29",Y="_icon_3bn3m_39",Z="_text_3bn3m_43",t={host:$,centered:O,body:J,sizeS:Q,sizeM:X,icon:Y,text:Z},u4={s:t.sizeS,m:t.sizeM},d=({className:r,style:u,getRef:E,getRootRef:n,height:M,size:m="s",children:V=m==="s"?"Все":"Показать все",centered:x=!1,...q})=>e.jsx("div",{style:u,className:N(t.host,x&&t.centered,u4[m],r),ref:n,children:e.jsxs(G,{style:m==="s"?void 0:{height:M},className:t.body,getRootRef:E,activeMode:"opacity",hoverMode:"opacity",...q,children:[e.jsx(K,{className:t.icon}),e.jsx(U,{className:t.text,weight:"2",children:V})]})});try{d.displayName="HorizontalCellShowMore",d.__docgenInfo={description:"",displayName:"HorizontalCellShowMore",props:{height:{defaultValue:null,description:`Задаёт высоту компонента. Должeн соответствовать размеру картинок
внутри соседних \`HorizontalCell\` компонентов.

Используйте размеры, заданные дизайн-системой (смотри типы).

> ⚠️ Использование кастомного размера – это пограничный кейс.

Игнорируется, если \`size='s'\`.`,name:"height",required:!1,type:{name:"LiteralUnion<16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},size:{defaultValue:{value:"s"},description:'Задаёт размер компонента.\n\nЗначение `s` применяется для `<HorizontalCell size="s"`, в остальных случаях рекомендуется `m`.',name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},children:{defaultValue:{value:"size === 's' ? 'Все' : 'Показать все'"},description:"Предназначен для отрисовки текста.\nПо умолчанию для `size='s'` содержит текст `Все`, для `size='m'` - `Показать все`.",name:"children",required:!1,type:{name:"ReactNode"}},centered:{defaultValue:{value:"false"},description:"Выравнивание по центру относительно родителя.",name:"centered",required:!1,type:{name:"boolean"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.\n@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `activeMode`.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.\n@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `hoverMode`.",name:"hoverClassName",required:!1,type:{name:"string"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active.",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover.",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const P4={title:"Data Display/HorizontalScroll/HorizontalCellShowMore",component:d,parameters:{...w,...R},argTypes:{children:T}},e4=[{id:1,title:"Промокот",icon:o("app_promokot")},{id:2,title:"Разделите счёт",icon:o("app_split_bill")},{id:3,title:"Рассылки",icon:o("app_emails")},{id:4,title:"Тексты песен",icon:o("app_lyrics")}];function p({size:r,height:u}){return r==="s"?56:r==="m"&&u&&u>88?88:u}const a={render:function({...u}){return e.jsx(e.Fragment,{children:e.jsx(d,{...u,height:p(u),children:u.children})})},args:{size:"m",height:96},decorators:[(r,{args:u})=>{const E=p(u);return e.jsx(j,{children:e.jsxs(W,{children:[e4.map(n=>e.jsx(k,{size:u.size,title:n.title,children:e.jsx(L,{size:E,src:n.icon,alt:`avatar: ${n.title}`})},n.id)),e.jsx(r,{...u})]})})},I,P]},i={...a,args:{...a.args,size:"s",height:56}},s={...a,args:{...a.args,size:"m",height:88}},l=a,c={...a,args:{...a.args,size:"m",height:88,children:"Show More"}};var C,D,F;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(D=a.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var h,B,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 's',
    height: 56
  }
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var g,v,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,z,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:"Playground",...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var b,_,H;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88,
    children: 'Show More'
  }
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const T4=["Playground","Small","Middle","Large","WithCustomText"];export{l as Large,s as Middle,a as Playground,i as Small,c as WithCustomText,T4 as __namedExportsOrder,P4 as default};
