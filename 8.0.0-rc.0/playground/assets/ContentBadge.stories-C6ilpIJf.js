import{r as y,j as e,g as S,i as I,aO as f}from"./iframe-DP0c1f9Y.js";import{D as z,C as B}from"./constants-DdkjnEgz.js";import{c as A}from"./createStoryParameters-CcwS40kl.js";import{F as q}from"./Flex-C--pQgbh.js";import{G as h}from"./Group-uVVNnULv.js";import{T as N}from"./Tappable-B2ZLiGfg.js";import{c as R}from"./Caption-Bf2pK2j4.js";import{f as j}from"./Footnote-DJoQQEv9.js";import{I as l,a as p,b as O}from"./services_filled_20-BMwokZSk.js";const m=y.createContext({isSingleChild:!1,size:"m"});try{m.displayName="ContentBadgeContext",m.__docgenInfo={description:"Контекст для внутреннего использовния.",displayName:"ContentBadgeContext",props:{}}}catch{}const L="_host_1qix4_1",M="_sizeS_1qix4_20",D="_sizeM_1qix4_27",G="_singleIconSlotSizeM_1qix4_35",E="_sizeL_1qix4_40",P="_iconSlotSizeL_1qix4_48",F="_singleIconSlotSizeL_1qix4_53",T="_capsule_1qix4_58",V="_primaryAccent_1qix4_63",b="_primaryNeutral_1qix4_68",w="_primaryAccentGreen_1qix4_73",H="_primaryAccentRed_1qix4_78",W="_primaryOverlay_1qix4_83",k="_iconSlot_1qix4_48",J="_secondaryAccent_1qix4_96",K="_secondaryNeutral_1qix4_105",Q="_secondaryAccentGreen_1qix4_114",U="_secondaryAccentRed_1qix4_119",X="_secondaryOverlay_1qix4_124",Y="_modeOutline_1qix4_134",Z="_outlineAccent_1qix4_144",$="_outlineNeutral_1qix4_156",ee="_outlineAccentGreen_1qix4_168",ne="_outlineAccentRed_1qix4_176",te="_outlineOverlay_1qix4_184",n={host:L,sizeS:M,sizeM:D,singleIconSlotSizeM:G,sizeL:E,iconSlotSizeL:P,singleIconSlotSizeL:F,capsule:T,primaryAccent:V,primaryNeutral:b,primaryAccentGreen:w,primaryAccentRed:H,primaryOverlay:W,iconSlot:k,secondaryAccent:J,secondaryNeutral:K,secondaryAccentGreen:Q,secondaryAccentRed:U,secondaryOverlay:X,modeOutline:Y,outlineAccent:Z,outlineNeutral:$,outlineAccentGreen:ee,outlineAccentRed:ne,outlineOverlay:te},oe={m:null,l:n.iconSlotSizeL},ae={m:n.singleIconSlotSizeM,l:n.singleIconSlotSizeL},_=({className:t,getRootRef:a,children:r,...c})=>{const{size:s,isSingleChild:u}=y.useContext(m);return s==="s"?null:e.jsx("div",{ref:a,className:S(t,n.iconSlot,u?ae[s]:oe[s]),...c,children:r})};try{_.displayName="ContentBadgeIconSlot",_.__docgenInfo={description:"",displayName:"ContentBadgeIconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const re={accent:{primary:n.primaryAccent,secondary:n.secondaryAccent,outline:n.outlineAccent},neutral:{primary:n.primaryNeutral,secondary:n.secondaryNeutral,outline:n.outlineNeutral},"accent-green":{primary:n.primaryAccentGreen,secondary:n.secondaryAccentGreen,outline:n.outlineAccentGreen},"accent-red":{primary:n.primaryAccentRed,secondary:n.secondaryAccentRed,outline:n.outlineAccentRed},overlay:{primary:n.primaryOverlay,secondary:n.secondaryOverlay,outline:n.outlineOverlay}},ce={s:n.sizeS,m:n.sizeM,l:n.sizeL},o=({appearance:t="accent",mode:a="primary",capsule:r,size:c="m",weight:s="2",children:u,...C})=>{const{density:g="none"}=I(),v=c==="l"?j(g):R(g);return e.jsx(N,{baseClassName:S(n.host,c!=="s"&&r&&n.capsule,a==="outline"&&n.modeOutline,re[t][a],ce[c],v,f(s)),DefaultComponent:"span",hoverMode:"opacity",activeMode:"opacity",...C,children:e.jsx(m.Provider,{value:{isSingleChild:y.Children.count(u)===1,size:c},children:u})})};o.IconSlot=_;o.SlotIcon=_;try{o.displayName="ContentBadge",o.__docgenInfo={description:"Компонент, который позволяет добавить текстовые или иконочные бейджи. Как правило, используются\nповерх других элементов или рядом с ними.\n\nИспользуйте `ContentBadge.SlotIcon` для размещения иконок внутри `ContentBadge`.",displayName:"ContentBadge",props:{mode:{defaultValue:{value:"primary"},description:"Вид отображения.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},appearance:{defaultValue:{value:"accent"},description:"Цвет оформления.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"overlay"'},{value:'"accent-green"'},{value:'"accent-red"'}]}},capsule:{defaultValue:null,description:`Включает приближение значения закругления к форме круга.

> Note: игнорируется при size="s".`,name:"capsule",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:'Определяет отступы и размер текста.\n\nСоответствие размеров иконок в слоте `<ContentBadge.SlotIcon />`:\n\n- size="s" – ⚠️ не поддерживает иконки;\n- size="m" – при **одиночной** иконке `16x16`, в остальных случаях `12x12`;\n- size="l" – при **одиночной** иконке `20x20`, в остальных случаях `16x16`.',name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},weight:{defaultValue:{value:"2"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}}}}}catch{}try{o.IconSlot.displayName="ContentBadge.IconSlot",o.IconSlot.__docgenInfo={description:"",displayName:"ContentBadge.IconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}try{o.SlotIcon.displayName="ContentBadge.SlotIcon",o.SlotIcon.__docgenInfo={description:"",displayName:"ContentBadge.SlotIcon",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const se={title:"Data Display/ContentBadge",component:o,parameters:A("ContentBadge",B,z),tags:["Отображение данных"]},x=t=>e.jsx(h,{style:{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap",outline:"1px dashed",padding:24},children:e.jsx(t,{})}),i={decorators:[x],render({children:t="Text",size:a,...r}){return e.jsxs(q,{align:"center",gap:24,children:[e.jsx(o,{...r,size:a,children:t}),e.jsxs(o,{...r,size:a,children:[e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})}),t]}),e.jsxs(o,{...r,size:a,children:[t,e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})})]}),e.jsxs(o,{...r,size:a,children:[e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})}),t,e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})})]})]})}},d={args:{capsule:!0},decorators:[x],render({size:t,...a}){return t==="s"?e.jsx("div",{children:'size="s" не поддерживает иконки'}):e.jsx(o,{...a,size:t,children:e.jsx(o.IconSlot,{children:t==="l"?e.jsx(O,{}):e.jsx(l,{})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [Container],
  render({
    children = 'Text',
    size,
    ...restProps
  }) {
    return <Flex align="center" gap={24}>
        <ContentBadge {...restProps} size={size}>
          {children}
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {children}
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          {children}
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {children}
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>
      </Flex>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    capsule: true
  },
  decorators: [Container],
  render({
    size,
    ...restProps
  }) {
    if (size === 's') {
      return <div>size=&quot;s&quot; не поддерживает иконки</div>;
    }
    return <ContentBadge {...restProps} size={size}>
        <ContentBadge.IconSlot>
          {size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
        </ContentBadge.IconSlot>
      </ContentBadge>;
  }
}`,...d.parameters?.docs?.source}}};const le=["Playground","SingleIcon"],xe=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,SingleIcon:d,__namedExportsOrder:le,default:se},Symbol.toStringTag,{value:"Module"}));export{o as C,i as P,xe as a};
