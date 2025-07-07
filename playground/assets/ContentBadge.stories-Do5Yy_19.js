import{r as y,j as e,i as z}from"./iframe-DTUKIQpa.js";import{D as h,C as j}from"./constants-DdkjnEgz.js";import{c as N}from"./createStoryParameters-CcwS40kl.js";import{F as O}from"./Flex-BfdKrZrN.js";import{G as L}from"./Group-CZGORHer.js";import{C as G}from"./Caption-D0cKPzOT.js";import{F as M}from"./Footnote-rQhC0WQs.js";import{I as l,a as u,b as F}from"./services_filled_20-DFvWy0XC.js";const p=y.createContext({isSingleChild:!1,size:"m"});try{p.displayName="ContentBadgeContext",p.__docgenInfo={description:"Контекст для внутреннего использовния.",displayName:"ContentBadgeContext",props:{}}}catch{}const q="_host_17477_1",D="_sizeS_17477_20",E="_sizeM_17477_27",P="_singleIconSlotSizeM_17477_35",V="_sizeL_17477_40",T="_iconSlotSizeL_17477_48",b="_singleIconSlotSizeL_17477_53",H="_capsule_17477_58",w="_primaryAccent_17477_63",k="_primaryNeutral_17477_68",W="_primaryAccentGreen_17477_73",J="_primaryAccentRed_17477_78",K="_primaryOverlay_17477_83",Q="_secondaryAccent_17477_89",U="_secondaryNeutral_17477_94",X="_secondaryAccentGreen_17477_99",Y="_secondaryAccentRed_17477_104",Z="_secondaryOverlay_17477_109",$="_modeOutline_17477_115",ee="_outlineAccent_17477_125",ne="_outlineNeutral_17477_133",te="_outlineAccentGreen_17477_141",oe="_outlineAccentRed_17477_149",re="_outlineOverlay_17477_157",n={host:q,sizeS:D,sizeM:E,singleIconSlotSizeM:P,sizeL:V,iconSlotSizeL:T,singleIconSlotSizeL:b,capsule:H,primaryAccent:w,primaryNeutral:k,primaryAccentGreen:W,primaryAccentRed:J,primaryOverlay:K,secondaryAccent:Q,secondaryNeutral:U,secondaryAccentGreen:X,secondaryAccentRed:Y,secondaryOverlay:Z,modeOutline:$,outlineAccent:ee,outlineNeutral:ne,outlineAccentGreen:te,outlineAccentRed:oe,outlineOverlay:re},ae={m:null,l:n.iconSlotSizeL},ce={m:n.singleIconSlotSizeM,l:n.singleIconSlotSizeL},_=({className:t,getRootRef:r,children:a,...c})=>{const{size:s,isSingleChild:m}=y.useContext(p);return s==="s"?null:e.jsx("div",{ref:r,className:z(t,m?ce[s]:ae[s]),...c,children:a})};try{_.displayName="ContentBadgeIconSlot",_.__docgenInfo={description:"",displayName:"ContentBadgeIconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const se={accent:{primary:n.primaryAccent,secondary:n.secondaryAccent,outline:n.outlineAccent},neutral:{primary:n.primaryNeutral,secondary:n.secondaryNeutral,outline:n.outlineNeutral},"accent-green":{primary:n.primaryAccentGreen,secondary:n.secondaryAccentGreen,outline:n.outlineAccentGreen},"accent-red":{primary:n.primaryAccentRed,secondary:n.secondaryAccentRed,outline:n.outlineAccentRed},overlay:{primary:n.primaryOverlay,secondary:n.secondaryOverlay,outline:n.outlineOverlay}},le={s:n.sizeS,m:n.sizeM,l:n.sizeL},o=({appearance:t="accent",mode:r="primary",capsule:a,size:c="m",weight:s="2",className:m,children:g,...A})=>{const R=c==="l"?M:G;return e.jsx(R,{...A,weight:s,normalize:!0,className:z(m,n.host,c!=="s"&&a&&n.capsule,r==="outline"&&n.modeOutline,se[t][r],le[c]),children:e.jsx(p.Provider,{value:{isSingleChild:y.Children.count(g)===1,size:c},children:g})})};o.IconSlot=_;o.SlotIcon=_;try{o.displayName="ContentBadge",o.__docgenInfo={description:"Компонент, который позволяет добавить текстовые или иконочные бейджи. Как правило, используются\nповерх других элементов или рядом с ними.\n\nИспользуйте `ContentBadge.SlotIcon` для размещения иконок внутри `ContentBadge`.",displayName:"ContentBadge",props:{mode:{defaultValue:{value:"primary"},description:"Вид отображения.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},appearance:{defaultValue:{value:"accent"},description:"Цвет оформления.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"overlay"'},{value:'"accent-green"'},{value:'"accent-red"'}]}},capsule:{defaultValue:null,description:`Включает приближение значения закругления к форме круга.

> Note: игнорируется при size="s".`,name:"capsule",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:'Определяет отступы и размер текста.\n\nСоответствие размеров иконок в слоте `<ContentBadge.SlotIcon />`:\n\n- size="s" – ⚠️ не поддерживает иконки;\n- size="m" – при **одиночной** иконке `16x16`, в остальных случаях `12x12`;\n- size="l" – при **одиночной** иконке `20x20`, в остальных случаях `16x16`.',name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},weight:{defaultValue:{value:"2"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}}}}}catch{}try{o.IconSlot.displayName="ContentBadge.IconSlot",o.IconSlot.__docgenInfo={description:"",displayName:"ContentBadge.IconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}try{o.SlotIcon.displayName="ContentBadge.SlotIcon",o.SlotIcon.__docgenInfo={description:"",displayName:"ContentBadge.SlotIcon",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const ie={title:"Blocks/ContentBadge",component:o,parameters:N("ContentBadge",j,h)},B=t=>e.jsx(L,{style:{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap",outline:"1px dashed",padding:24},children:e.jsx(t,{})}),i={decorators:[B],render({children:t="Text",size:r,...a}){return e.jsxs(O,{align:"center",gap:24,children:[e.jsx(o,{...a,size:r,children:t}),e.jsxs(o,{...a,size:r,children:[e.jsx(o.IconSlot,{children:r==="l"?e.jsx(l,{}):e.jsx(u,{})}),t]}),e.jsxs(o,{...a,size:r,children:[t,e.jsx(o.IconSlot,{children:r==="l"?e.jsx(l,{}):e.jsx(u,{})})]}),e.jsxs(o,{...a,size:r,children:[e.jsx(o.IconSlot,{children:r==="l"?e.jsx(l,{}):e.jsx(u,{})}),t,e.jsx(o.IconSlot,{children:r==="l"?e.jsx(l,{}):e.jsx(u,{})})]})]})}},d={args:{capsule:!0},decorators:[B],render({size:t,...r}){return t==="s"?e.jsx("div",{children:'size="s" не поддерживает иконки'}):e.jsx(o,{...r,size:t,children:e.jsx(o.IconSlot,{children:t==="l"?e.jsx(F,{}):e.jsx(l,{})})})}};var S,C,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var I,f,x;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const de=["Playground","SingleIcon"],ve=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,SingleIcon:d,__namedExportsOrder:de,default:ie},Symbol.toStringTag,{value:"Module"}));export{o as C,i as P,ve as a};
