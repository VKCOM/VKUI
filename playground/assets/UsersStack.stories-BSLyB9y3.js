import{j as e}from"./iframe-CDzsgUJ6.js";import{w as p}from"./withCartesian-Dc-q2kCz.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,b as m}from"./mock-KFM_xxXO.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-BFQG9HLm.js";import{U as l}from"./UsersStack-BbWmXpiU.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-DxzK9_Az.js";import"./usePatchChildren-CS8PpuiL.js";import"./useReferenceHiddenChangeCallback-CY63qTPH.js";import"./useGlobalEscKeyDown-BcOQOr64.js";import"./usePlacementChangeCallback-Bsdm3Pu3.js";import"./floating-ui.react-dom-B9MYDRsG.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DK0f39Al.js";import"./useGlobalOnClickOutside-CAsM7bq_.js";import"./AppRootPortal-CCVAQZe-.js";import"./useColorScheme-BJ9q12Ap.js";import"./createPortal-CVhd8q9v.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DTaIndt4.js";import"./ConfigProviderOverride-CcLe0DKj.js";import"./TooltipBase-DEd1-BZX.js";import"./FloatingArrow-DUrMOVGb.js";import"./Tappable-BF8rCM_k.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./InputUtils-DkBsdccT.js";import"./Subhead-BNbydgjR.js";import"./VisuallyHidden-hrbUbT1W.js";import"./cancel_16-BlaGgBnb.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./useConfigDirection-BVbAx_rU.js";import"./Caption-Boi85h93.js";import"./Footnote-EhoXcm5o.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
