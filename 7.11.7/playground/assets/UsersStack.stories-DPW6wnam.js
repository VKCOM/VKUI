import{j as e}from"./iframe-CmkY54f5.js";import{w as p}from"./withCartesian-D8vYpj6V.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-CR6tcJwb.js";import{U as l}from"./UsersStack-CBW4rw8T.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-CuYoLvlQ.js";import"./usePatchChildren-DaUN-dd-.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CXmxCSux.js";import"./useGlobalEscKeyDown-BHWXmifq.js";import"./usePlacementChangeCallback-D4ejLsOm.js";import"./floating-ui.react-dom-l5QuDyvu.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DvsDNI3j.js";import"./useGlobalOnClickOutside-B7nntoG6.js";import"./AppRootPortal-DhIktMNn.js";import"./useColorScheme-BCWY6G93.js";import"./createPortal-CzK3IUGW.js";import"./ColorSchemeProvider-BA0ymiYZ.js";import"./ConfigProviderOverride-DzFZq6HF.js";import"./TooltipBase-BPDs76im.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BVH0iJE6.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./Subhead-BS8ES9bw.js";import"./VisuallyHidden-Da3ud9kw.js";import"./cancel_16-BvUE-S4Y.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./useConfigDirection-Duqs0EiT.js";import"./Caption-CsrSECTC.js";import"./Footnote-Dh1koNQe.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
