import{j as e}from"./iframe-CNYWi-tv.js";import{w as d}from"./withCartesian-_QqQGWJq.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-BpFFQ37b.js";import{U as v}from"./UsersStack-B8wjFAnj.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-BtgOXA9J.js";import"./usePatchChildren-B8unOO2s.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DrJqA32s.js";import"./useGlobalEscKeyDown-DqyL_YGN.js";import"./usePlacementChangeCallback-Cojz57y6.js";import"./floating-ui.react-dom-B41PFPvr.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BpSX3TsH.js";import"./useGlobalOnClickOutside-DtFsO1r0.js";import"./AppRootPortal-DIw5dSpY.js";import"./useColorScheme-Cfkm4fLV.js";import"./createPortal-Rj5gNAak.js";import"./ColorSchemeProvider-CnyWnc2N.js";import"./ConfigProviderOverride-HCjSxczU.js";import"./TooltipBase-DkqfZe6F.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-D53bG7gO.js";import"./Tappable-Bt2S1yMc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-PPkKMUDS.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./InputUtils-Bfhccirq.js";import"./Subhead-BeVsNNt7.js";import"./VisuallyHidden-CIbqknZb.js";import"./cancel_16-BaRnUpV1.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./useConfigDirection-C_6xjTM7.js";import"./Caption-VNaRRNHV.js";import"./Footnote-BYeJ88ZB.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
