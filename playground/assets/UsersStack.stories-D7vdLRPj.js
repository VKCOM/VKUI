import{j as e}from"./iframe-CEhhJuIi.js";import{w as p}from"./withCartesian-BKc4HSOc.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,b as m}from"./mock-KFM_xxXO.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-CfGcvN1A.js";import{U as l}from"./UsersStack-6SjnR3Lr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-H-3_e2_X.js";import"./usePatchChildren-U9eb7yhC.js";import"./useReferenceHiddenChangeCallback-DHx5mXYN.js";import"./useGlobalEscKeyDown-CE7TqF1-.js";import"./usePlacementChangeCallback-moWOJvM7.js";import"./floating-ui.react-dom-BUWNT6g6.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-R1Fp-Kd5.js";import"./useGlobalOnClickOutside-DOzt1Gf7.js";import"./AppRootPortal-uzyAKSZM.js";import"./useColorScheme-C52TR78y.js";import"./createPortal-BD13EKcF.js";import"./ColorSchemeProvider-fCsC8sPd.js";import"./ConfigProviderOverride-CSnPmu4b.js";import"./TooltipBase-Bpi-YbXr.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-D9rl4d8P.js";import"./Tappable-CTSOdpDd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./InputUtils-CN8Bpeve.js";import"./Subhead-4zP8hIFm.js";import"./VisuallyHidden-BYulTkKK.js";import"./cancel_16-L2iU7g3d.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./useConfigDirection-K0H5l3FT.js";import"./Caption-DB-0jBpG.js";import"./Footnote-wldoNL-p.js";const rr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const tr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,tr as __namedExportsOrder,rr as default};
