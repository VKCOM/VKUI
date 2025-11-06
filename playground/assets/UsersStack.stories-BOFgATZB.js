import{j as e}from"./iframe-CdM-7Hfu.js";import{w as p}from"./withCartesian-BhVv3VNh.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-B2iMVqup.js";import{U as l}from"./UsersStack-h-DpkDCP.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-CBMe4KSb.js";import"./usePatchChildren-Dbpex2qD.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-a5Ub5Z76.js";import"./useGlobalEscKeyDown-C4BXSa2F.js";import"./usePlacementChangeCallback-DnaDcZAl.js";import"./floating-ui.react-dom-BSROouZA.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CU7WNJSU.js";import"./useGlobalOnClickOutside-BqCEnhoP.js";import"./AppRootPortal-CwmZylQ9.js";import"./useColorScheme-Bgl1tdyG.js";import"./createPortal-DwlYohy5.js";import"./ColorSchemeProvider-BOMlpu1V.js";import"./ConfigProviderOverride-BX__wZpg.js";import"./TooltipBase-BOTJ8GSI.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-_HqT_hN_.js";import"./Tappable-DK6ahodC.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B55EaeOQ.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./InputUtils-BMsEEBIJ.js";import"./Subhead-BqjD9mjg.js";import"./VisuallyHidden-DydpD7lG.js";import"./cancel_16-C0t2DuYR.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./useConfigDirection-BPbTAtL3.js";import"./Caption-DWx61OOh.js";import"./Footnote-NEMh_4A6.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
