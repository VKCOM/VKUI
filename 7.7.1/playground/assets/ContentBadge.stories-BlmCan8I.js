import{r as y,j as e,h as z,k as N,aN as R}from"./iframe-Bz8JpgqB.js";import{D as j,C as O}from"./constants-DdkjnEgz.js";import{c as L}from"./createStoryParameters-CcwS40kl.js";import{F as M}from"./Flex-DGGiNY0p.js";import{G as D}from"./Group-DTDZzv4b.js";import{T as G}from"./Tappable-DGSycWIS.js";import{c as q}from"./Caption-DWsz_D6l.js";import{f as E}from"./Footnote-CXG5ZQyY.js";import{I as l,a as p,b as P}from"./services_filled_20-CojdITQ8.js";const m=y.createContext({isSingleChild:!1,size:"m"});try{m.displayName="ContentBadgeContext",m.__docgenInfo={description:"Контекст для внутреннего использовния.",displayName:"ContentBadgeContext",props:{}}}catch{}const F="_host_17477_1",T="_sizeS_17477_20",V="_sizeM_17477_27",b="_singleIconSlotSizeM_17477_35",w="_sizeL_17477_40",H="_iconSlotSizeL_17477_48",k="_singleIconSlotSizeL_17477_53",W="_capsule_17477_58",Y="_primaryAccent_17477_63",J="_primaryNeutral_17477_68",K="_primaryAccentGreen_17477_73",Q="_primaryAccentRed_17477_78",U="_primaryOverlay_17477_83",X="_secondaryAccent_17477_89",Z="_secondaryNeutral_17477_94",$="_secondaryAccentGreen_17477_99",ee="_secondaryAccentRed_17477_104",ne="_secondaryOverlay_17477_109",te="_modeOutline_17477_115",oe="_outlineAccent_17477_125",ae="_outlineNeutral_17477_133",re="_outlineAccentGreen_17477_141",ce="_outlineAccentRed_17477_149",se="_outlineOverlay_17477_157",n={host:F,sizeS:T,sizeM:V,singleIconSlotSizeM:b,sizeL:w,iconSlotSizeL:H,singleIconSlotSizeL:k,capsule:W,primaryAccent:Y,primaryNeutral:J,primaryAccentGreen:K,primaryAccentRed:Q,primaryOverlay:U,secondaryAccent:X,secondaryNeutral:Z,secondaryAccentGreen:$,secondaryAccentRed:ee,secondaryOverlay:ne,modeOutline:te,outlineAccent:oe,outlineNeutral:ae,outlineAccentGreen:re,outlineAccentRed:ce,outlineOverlay:se},le={m:null,l:n.iconSlotSizeL},ie={m:n.singleIconSlotSizeM,l:n.singleIconSlotSizeL},_=({className:t,getRootRef:a,children:r,...c})=>{const{size:s,isSingleChild:u}=y.useContext(m);return s==="s"?null:e.jsx("div",{ref:a,className:z(t,u?ie[s]:le[s]),...c,children:r})};try{_.displayName="ContentBadgeIconSlot",_.__docgenInfo={description:"",displayName:"ContentBadgeIconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const de={accent:{primary:n.primaryAccent,secondary:n.secondaryAccent,outline:n.outlineAccent},neutral:{primary:n.primaryNeutral,secondary:n.secondaryNeutral,outline:n.outlineNeutral},"accent-green":{primary:n.primaryAccentGreen,secondary:n.secondaryAccentGreen,outline:n.outlineAccentGreen},"accent-red":{primary:n.primaryAccentRed,secondary:n.secondaryAccentRed,outline:n.outlineAccentRed},overlay:{primary:n.primaryOverlay,secondary:n.secondaryOverlay,outline:n.outlineOverlay}},ue={s:n.sizeS,m:n.sizeM,l:n.sizeL},o=({appearance:t="accent",mode:a="primary",capsule:r,size:c="m",weight:s="2",children:u,...A})=>{const{sizeY:g="none"}=N(),h=c==="l"?E(g):q(g);return e.jsx(G,{baseClassName:z(n.host,c!=="s"&&r&&n.capsule,a==="outline"&&n.modeOutline,de[t][a],ue[c],h,R(s)),DefaultComponent:"span",hoverMode:"opacity",activeMode:"opacity",...A,children:e.jsx(m.Provider,{value:{isSingleChild:y.Children.count(u)===1,size:c},children:u})})};o.IconSlot=_;o.SlotIcon=_;try{o.displayName="ContentBadge",o.__docgenInfo={description:"Компонент, который позволяет добавить текстовые или иконочные бейджи. Как правило, используются\nповерх других элементов или рядом с ними.\n\nИспользуйте `ContentBadge.SlotIcon` для размещения иконок внутри `ContentBadge`.",displayName:"ContentBadge",props:{mode:{defaultValue:{value:"primary"},description:"Вид отображения.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},appearance:{defaultValue:{value:"accent"},description:"Цвет оформления.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"overlay"'},{value:'"accent-green"'},{value:'"accent-red"'}]}},capsule:{defaultValue:null,description:`Включает приближение значения закругления к форме круга.

> Note: игнорируется при size="s".`,name:"capsule",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:'Определяет отступы и размер текста.\n\nСоответствие размеров иконок в слоте `<ContentBadge.SlotIcon />`:\n\n- size="s" – ⚠️ не поддерживает иконки;\n- size="m" – при **одиночной** иконке `16x16`, в остальных случаях `12x12`;\n- size="l" – при **одиночной** иконке `20x20`, в остальных случаях `16x16`.',name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},weight:{defaultValue:{value:"2"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}}}}}catch{}try{o.IconSlot.displayName="ContentBadge.IconSlot",o.IconSlot.__docgenInfo={description:"",displayName:"ContentBadge.IconSlot",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}try{o.SlotIcon.displayName="ContentBadge.SlotIcon",o.SlotIcon.__docgenInfo={description:"",displayName:"ContentBadge.SlotIcon",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const pe={title:"Data Display/ContentBadge",component:o,parameters:L("ContentBadge",O,j),tags:["Отображение данных"]},B=t=>e.jsx(D,{style:{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap",outline:"1px dashed",padding:24},children:e.jsx(t,{})}),i={decorators:[B],render({children:t="Text",size:a,...r}){return e.jsxs(M,{align:"center",gap:24,children:[e.jsx(o,{...r,size:a,children:t}),e.jsxs(o,{...r,size:a,children:[e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})}),t]}),e.jsxs(o,{...r,size:a,children:[t,e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})})]}),e.jsxs(o,{...r,size:a,children:[e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})}),t,e.jsx(o.IconSlot,{children:a==="l"?e.jsx(l,{}):e.jsx(p,{})})]})]})}},d={args:{capsule:!0},decorators:[B],render({size:t,...a}){return t==="s"?e.jsx("div",{children:'size="s" не поддерживает иконки'}):e.jsx(o,{...a,size:t,children:e.jsx(o.IconSlot,{children:t==="l"?e.jsx(P,{}):e.jsx(l,{})})})}};var S,C,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const me=["Playground","SingleIcon"],ze=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,SingleIcon:d,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{o as C,i as P,ze as a};
