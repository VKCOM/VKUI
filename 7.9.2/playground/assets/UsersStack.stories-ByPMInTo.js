import{j as e}from"./iframe-CjlHPZNU.js";import{w as p}from"./withCartesian-B8m5trzi.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-D1h9USu9.js";import{U as l}from"./UsersStack-D8lLzvy6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-DSHz3QOG.js";import"./usePatchChildren-BpNZpPVW.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BYBOPzRw.js";import"./useGlobalEscKeyDown-CrcrbX0j.js";import"./usePlacementChangeCallback-BUGqU92G.js";import"./floating-ui.react-dom-BOvPne9Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-B_VfQasx.js";import"./useGlobalOnClickOutside-xSKnEgMI.js";import"./AppRootPortal-D2B8wiWM.js";import"./useColorScheme-BIeu6EL3.js";import"./createPortal-CZhxf4lQ.js";import"./ColorSchemeProvider-DgPkTADU.js";import"./ConfigProviderOverride-BAEtQBTT.js";import"./TooltipBase-BuziwQcb.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-CXk5BXWM.js";import"./Tappable-B5zgJODm.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./InputUtils-DGnaA_Jg.js";import"./Subhead-LlQLYw53.js";import"./VisuallyHidden-BhHQTREx.js";import"./cancel_16-H58NJ25u.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./useConfigDirection-CtCMtXRC.js";import"./Caption-BGNxLEI7.js";import"./Footnote-OilvUFbZ.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
