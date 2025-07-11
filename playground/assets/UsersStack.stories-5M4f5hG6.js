import{j as e}from"./iframe-DDos8QSD.js";import{w as d}from"./withCartesian-CMfOc2kK.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-DS1GUIeZ.js";import{U as v}from"./UsersStack-KIF2s6zN.js";import"./useFloatingElement-CUaLIte7.js";import"./usePatchChildren-CbTV-DSV.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BNMZQcE1.js";import"./useGlobalEscKeyDown-DIqYGwj0.js";import"./usePlacementChangeCallback-iLcROg5y.js";import"./FloatingArrow-AYA0w7FM.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DPf8E04f.js";import"./useGlobalOnClickOutside-CiSE1t3Q.js";import"./AppRootPortal-Ba3z6brt.js";import"./useColorScheme-DqjxLW2f.js";import"./createPortal-pZ_xEb8D.js";import"./ColorSchemeProvider-DlGS5IA_.js";import"./ConfigProviderOverride-CyArhSE9.js";import"./TooltipBase-B8JVtoZN.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-B0kWxOOO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CWxsm2KA.js";import"./InputUtils-Dyyzogrc.js";import"./Subhead-94kqPIfE.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./cancel_16-Dv9sHB8j.js";import"./SvgIconRoot-D7q7mL8J.js";import"./useConfigDirection-BVLc7CyO.js";import"./Caption-C8aMWNCU.js";import"./Footnote-DolN14Rp.js";const ar={title:"Blocks/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start'
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map((photoUrl): UsersStackPhoto => ({
      src: photoUrl,
      renderWrapper: AvatarWrapper
    }))
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const sr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,sr as __namedExportsOrder,ar as default};
