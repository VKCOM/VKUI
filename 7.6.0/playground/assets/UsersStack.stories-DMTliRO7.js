import{j as e}from"./iframe-DveaDHpJ.js";import{w as d}from"./withCartesian-B27GpNph.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-BV7c6sE5.js";import{U as v}from"./UsersStack-BJhTs-Hh.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-DU5TbiBX.js";import"./usePatchChildren-B5hmQfH-.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DT-Tatoc.js";import"./useGlobalEscKeyDown-CQ_z4bxN.js";import"./usePlacementChangeCallback-Bz3H7LaO.js";import"./floating-ui.react-dom-CCMwIqsk.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-pDZ_aYUB.js";import"./useGlobalOnClickOutside-2PZpcNw8.js";import"./AppRootPortal-CrDvtA-l.js";import"./useColorScheme-Ca6Q1evu.js";import"./createPortal-DGpWZUDM.js";import"./ColorSchemeProvider-CxCT7c0Q.js";import"./ConfigProviderOverride-BzdBugdn.js";import"./TooltipBase-DMfCxxzT.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BTubR1vc.js";import"./Tappable-B6M0Cj2d.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Qd8MhpMK.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./InputUtils-DB2utYDB.js";import"./Subhead-CMDv2ZTP.js";import"./VisuallyHidden-C4fiFLiw.js";import"./cancel_16-BVJbY8rW.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./useConfigDirection-C-LxfHUm.js";import"./Caption-xmt4HAL3.js";import"./Footnote-DMEVDgek.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const ir=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,ir as __namedExportsOrder,pr as default};
