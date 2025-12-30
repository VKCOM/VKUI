import{j as e}from"./iframe-D-vjmezP.js";import{w as p}from"./withCartesian-4-cwM2US.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-DwXcrorv.js";import{U as l}from"./UsersStack-k3bfctmH.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-C5c-W7-w.js";import"./usePatchChildren-ChqPc2hi.js";import"./useReferenceHiddenChangeCallback-DQvcIGyb.js";import"./useGlobalEscKeyDown-CJjuXJTQ.js";import"./usePlacementChangeCallback-BZEnW3tw.js";import"./floating-ui.react-dom-CT8q3J_f.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DBfsmsB8.js";import"./useGlobalOnClickOutside-FZPqeYZg.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./TooltipBase-CV8uXbHn.js";import"./FloatingArrow-DyGZMMOG.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./Subhead-DCgRz-zo.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./cancel_16-wQUalFDs.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./useConfigDirection-BUJREPxm.js";import"./Caption-Cdq4IzHJ.js";import"./Footnote-DApQXU2r.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
