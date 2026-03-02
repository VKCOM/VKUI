import{j as e}from"./iframe-DxxZLxeI.js";import{w as p}from"./withCartesian-B2JUeux9.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-C745u4D2.js";import{U as l}from"./UsersStack-C23zmYp7.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-B_wRJh6R.js";import"./usePatchChildren-CVzKBF84.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Bdeh3c_U.js";import"./useGlobalEscKeyDown-DKfI4FAB.js";import"./usePlacementChangeCallback-BQqykK7j.js";import"./floating-ui.react-dom-DLojga1i.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DmtaIsBi.js";import"./useGlobalOnClickOutside-CWp7-_1_.js";import"./AppRootPortal-BC3JV3T9.js";import"./useColorScheme-CToT-7qP.js";import"./createPortal-DlraoZsb.js";import"./ColorSchemeProvider-DtExgQxR.js";import"./ConfigProviderOverride-CeDxwPUE.js";import"./TooltipBase-BttPMORs.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-2W0GhyuX.js";import"./Tappable-C82LyDNp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./InputUtils-CuOtTanw.js";import"./Subhead-BP7ZzX_Z.js";import"./VisuallyHidden-DujZCwJ6.js";import"./cancel_16-B5ZWMyK2.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./useConfigDirection-Cl-SHqVT.js";import"./Caption-BaO_eCgt.js";import"./Footnote-C3-8h3B5.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
