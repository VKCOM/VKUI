import{j as e}from"./iframe-F_0bvJrc.js";import{w as p}from"./withCartesian-DmH2k9Od.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-CbKnCUyS.js";import{U as l}from"./UsersStack-BZuw21Yg.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-C8xhDFLa.js";import"./usePatchChildren-BaoZaZm8.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BgaI2Iei.js";import"./useGlobalEscKeyDown-Cj6flF0V.js";import"./usePlacementChangeCallback-mGGiHeRj.js";import"./floating-ui.react-dom-BwXaV5NM.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BBTm3kq1.js";import"./useGlobalOnClickOutside-BBvlc0L4.js";import"./AppRootPortal-C5ZjlUn-.js";import"./useColorScheme-CMuS3Rce.js";import"./createPortal-3kBuG0xS.js";import"./ColorSchemeProvider-CBhvh-QL.js";import"./ConfigProviderOverride-DP-FN5VZ.js";import"./TooltipBase-DivW6YE_.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BFutSiUS.js";import"./Tappable-DJ3rCQkY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./InputUtils-CneTbOko.js";import"./Subhead-CtWFTcAD.js";import"./VisuallyHidden-CRrL_L2y.js";import"./cancel_16-CJb_-qse.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./useConfigDirection-poWhsvcV.js";import"./Caption-DLbzsWHi.js";import"./Footnote-DfPFidfa.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map((photoUrl): UsersStackPhoto => ({
      src: photoUrl,
      renderWrapper: AvatarWrapper
    }))
  }
}`,...a.parameters?.docs?.source}}};const or=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,or as __namedExportsOrder,tr as default};
