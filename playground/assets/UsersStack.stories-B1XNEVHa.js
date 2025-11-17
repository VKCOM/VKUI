import{j as e}from"./iframe-DhuutAfC.js";import{w as p}from"./withCartesian-DlJDWAE1.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-BOLkwsFC.js";import{U as l}from"./UsersStack-DOifS1CW.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-CM1dpnyI.js";import"./usePatchChildren-BfPkiP_F.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-C54G18M-.js";import"./useGlobalEscKeyDown-B_v1H5Hb.js";import"./usePlacementChangeCallback-Dqqe6zNt.js";import"./floating-ui.react-dom-D_ZuLwN8.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BpH5tC17.js";import"./useGlobalOnClickOutside-CYNE3tgF.js";import"./AppRootPortal-BhnEIrq-.js";import"./useColorScheme-BGUvzePH.js";import"./createPortal-BLvM0w_F.js";import"./ColorSchemeProvider-DdceUlQQ.js";import"./ConfigProviderOverride-CpU6P7F6.js";import"./TooltipBase-CLOh7CXY.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-Cnm_pG-Z.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./Subhead-N3Y6Abab.js";import"./VisuallyHidden-BkhWnsJf.js";import"./cancel_16-B_c_nEwm.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./useConfigDirection-BKOpe2-3.js";import"./Caption-BhiEFCof.js";import"./Footnote-BE0sRU6f.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
