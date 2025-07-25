import{j as e}from"./iframe-D2wkiYbA.js";import{w as d}from"./withCartesian-DUAvVKt1.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-BB65AtZ8.js";import{U as v}from"./UsersStack-DWmGabDr.js";import"./useFloatingElement-C7r_o2yq.js";import"./usePatchChildren-D_N7fncK.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CXW6Zd17.js";import"./useGlobalEscKeyDown-aLLUliyT.js";import"./usePlacementChangeCallback-B0_BqOZm.js";import"./floating-ui.react-dom-Cab1-L-I.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BM8G-vFy.js";import"./useGlobalOnClickOutside-BLCE7OKW.js";import"./AppRootPortal-CD39ER_Q.js";import"./useColorScheme-DEY2vJy9.js";import"./createPortal-DmNeOwZo.js";import"./ColorSchemeProvider-CST3LDrj.js";import"./ConfigProviderOverride-llMEn7P1.js";import"./TooltipBase-Dxrjc8xc.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-H9XdygxR.js";import"./Tappable-D1Sdra8V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BU3u--9M.js";import"./InputUtils-QU0WrbnN.js";import"./Subhead-UUuxM49Y.js";import"./VisuallyHidden-ChTSElWV.js";import"./cancel_16-Btdg1xUF.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./useConfigDirection-DrnKoeri.js";import"./Caption-Bow6F5xg.js";import"./Footnote-4HzFQCBl.js";const sr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const er=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,er as __namedExportsOrder,sr as default};
