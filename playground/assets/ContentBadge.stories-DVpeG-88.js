import{r as y,j as e,h as S,k as f,aP as x}from"./iframe-BdXaAE5r.js";import{D as z,C as B}from"./constants-DdkjnEgz.js";import{c as A}from"./createStoryParameters-CcwS40kl.js";import{F as h}from"./Flex-A11EO6LS.js";import{G as N}from"./Group-D1elF4gT.js";import{T as R}from"./Tappable-DfpzQKhB.js";import{c as j}from"./Caption-B8hxH2dQ.js";import{f as O}from"./Footnote-ByXPLsYQ.js";import{I as l,a as p,b as L}from"./services_filled_20-BKlX_bNR.js";const m=y.createContext({isSingleChild:!1,size:"m"});try{m.displayName="ContentBadgeContext",m.__docgenInfo={description:"Контекст для внутреннего использовния.",displayName:"ContentBadgeContext",props:{}}}catch{}const M="_host_17477_1",D="_sizeS_17477_20",G="_sizeM_17477_27",P="_singleIconSlotSizeM_17477_35",q="_sizeL_17477_40",E="_iconSlotSizeL_17477_48",F="_singleIconSlotSizeL_17477_53",T="_capsule_17477_58",V="_primaryAccent_17477_63",b="_primaryNeutral_17477_68",w="_primaryAccentGreen_17477_73",H="_primaryAccentRed_17477_78",k="_primaryOverlay_17477_83",W="_secondaryAccent_17477_89",Y="_secondaryNeutral_17477_94",J="_secondaryAccentGreen_17477_99",K="_secondaryAccentRed_17477_104",Q="_secondaryOverlay_17477_109",U="_modeOutline_17477_115",X="_outlineAccent_17477_125",Z="_outlineNeutral_17477_133",$="_outlineAccentGreen_17477_141",ee="_outlineAccentRed_17477_149",ne="_outlineOverlay_17477_157",n={host:M,sizeS:D,sizeM:G,singleIconSlotSizeM:P,sizeL:q,iconSlotSizeL:E,singleIconSlotSizeL:F,capsule:T,primaryAccent:V,primaryNeutral:b,primaryAccentGreen:w,primaryAccentRed:H,primaryOverlay:k,secondaryAccent:W,secondaryNeutral:Y,secondaryAccentGreen:J,secondaryAccentRed:K,secondaryOverlay:Q,modeOutline:U,outlineAccent:X,outlineNeutral:Z,outlineAccentGreen:$,outlineAccentRed:ee,outlineOverlay:ne},te={m:null,l:n.iconSlotSizeL},oe={m:n.singleIconSlotSizeM,l:n.singleIconSlotSizeL},_=({className:t,getRootRef:a,children:r,...c})=>{const{size:s,isSingleChild:u}=y.useContext(m);return s==="s"?null:e.jsx("div",{ref:a,className:S(t,u?oe[s]:te[s]),...c,children:r})};try{_.displayName="ContentBadgeIconSlot",_.__docgenInfo={description:"",displayName:"ContentBadgeIconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const ae={accent:{primary:n.primaryAccent,secondary:n.secondaryAccent,outline:n.outlineAccent},neutral:{primary:n.primaryNeutral,secondary:n.secondaryNeutral,outline:n.outlineNeutral},"accent-green":{primary:n.primaryAccentGreen,secondary:n.secondaryAccentGreen,outline:n.outlineAccentGreen},"accent-red":{primary:n.primaryAccentRed,secondary:n.secondaryAccentRed,outline:n.outlineAccentRed},overlay:{primary:n.primaryOverlay,secondary:n.secondaryOverlay,outline:n.outlineOverlay}},re={s:n.sizeS,m:n.sizeM,l:n.sizeL},o=({appearance:t="accent",mode:a="primary",capsule:r,size:c="m",weight:s="2",children:u,...v})=>{const{sizeY:g="none"}=f(),I=c==="l"?O(g):j(g);return e.jsx(R,{baseClassName:S(n.host,c!=="s"&&r&&n.capsule,a==="outline"&&n.modeOutline,ae[t][a],re[c],I,x(s)),DefaultComponent:"span",hoverMode:"opacity",activeMode:"opacity",...v,children:e.jsx(m.Provider,{value:{isSingleChild:y.Children.count(u)===1,size:c},children:u})})};o.IconSlot=_;o.SlotIcon=_;try{o.displayName="ContentBadge",o.__docgenInfo={description:"Компонент, который позволяет добавить текстовые или иконочные бейджи. Как правило, используются\nповерх других элементов или рядом с ними.\n\nИспользуйте `ContentBadge.SlotIcon` для размещения иконок внутри `ContentBadge`.",displayName:"ContentBadge",props:{mode:{defaultValue:{value:"primary"},description:"Вид отображения.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},appearance:{defaultValue:{value:"accent"},description:"Цвет оформления.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"overlay"'},{value:'"accent-green"'},{value:'"accent-red"'}]}},capsule:{defaultValue:null,description:`Включает приближение значения закругления к форме круга.

> Note: игнорируется при size="s".`,name:"capsule",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:'Определяет отступы и размер текста.\n\nСоответствие размеров иконок в слоте `<ContentBadge.SlotIcon />`:\n\n- size="s" – ⚠️ не поддерживает иконки;\n- size="m" – при **одиночной** иконке `16x16`, в остальных случаях `12x12`;\n- size="l" – при **одиночной** иконке `20x20`, в остальных случаях `16x16`.',name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},weight:{defaultValue:{value:"2"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}}}}}catch{}try{o.IconSlot.displayName="ContentBadge.IconSlot",o.IconSlot.__docgenInfo={description:"",displayName:"ContentBadge.IconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}try{o.SlotIcon.displayName="ContentBadge.SlotIcon",o.SlotIcon.__docgenInfo={description:"",displayName:"ContentBadge.SlotIcon",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const ce={title:"Data Display/ContentBadge",component:o,parameters:A("ContentBadge",B,z),tags:["Отображение данных"]},C=t=>e.jsx(N,{style:{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap",outline:"1px dashed",padding:24},children:e.jsx(t,{})}),i={decorators:[C],render({children:t="Text",size:a,...r}){return e.jsxs(h,{align:"center",gap:24,children:[e.jsx(o,{...r,size:a,children:t}),e.jsxs(o,{...r,size:a,children:[e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})}),t]}),e.jsxs(o,{...r,size:a,children:[t,e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})})]}),e.jsxs(o,{...r,size:a,children:[e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})}),t,e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})})]})]})}},d={args:{capsule:!0},decorators:[C],render({size:t,...a}){return t==="s"?e.jsx("div",{children:'size="s" не поддерживает иконки'}):e.jsx(o,{...a,size:t,children:e.jsx(o.IconSlot,{children:t==="l"?e.jsx(L,{}):e.jsx(l,{})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const se=["Playground","SingleIcon"],Se=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,SingleIcon:d,__namedExportsOrder:se,default:ce},Symbol.toStringTag,{value:"Module"}));export{o as C,i as P,Se as a};
