import{j as e}from"./iframe-7s0T-F6L.js";import{w as d}from"./withCartesian-Doqc41Sx.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-DVfSp2DY.js";import{U as v}from"./UsersStack-DJEZicHT.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-BDLXKJc2.js";import"./usePatchChildren-C-AcFi_l.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DCB56tXG.js";import"./useGlobalEscKeyDown-B-3TMy9Q.js";import"./usePlacementChangeCallback-Cqx7bnT2.js";import"./floating-ui.react-dom-sf4yENU9.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-yAfZICsK.js";import"./useGlobalOnClickOutside-BSFvmrML.js";import"./AppRootPortal-8JJCRvIt.js";import"./useColorScheme-BL2QEz1W.js";import"./createPortal-BLAX00_m.js";import"./ColorSchemeProvider-ftW5T2o8.js";import"./ConfigProviderOverride-CXr_UxnZ.js";import"./TooltipBase-Dx5OW2VF.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-CMttNlxp.js";import"./Tappable-BPO49mNS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LGVh7luH.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./InputUtils-CP-PNx6u.js";import"./Subhead-D1_aWRaG.js";import"./VisuallyHidden-CNF1CStS.js";import"./cancel_16-BwTGakTO.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./useConfigDirection--PDr40UE.js";import"./Caption-COQCwN-F.js";import"./Footnote-BCofusdy.js";const ir={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const mr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,mr as __namedExportsOrder,ir as default};
