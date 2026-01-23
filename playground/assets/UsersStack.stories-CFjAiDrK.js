import{j as e}from"./iframe-KtxhC7Vu.js";import{w as p}from"./withCartesian-Bzs9tFbL.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-BzM2Tglg.js";import{U as l}from"./UsersStack-DM7Xs7Tl.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-vZTb7h1E.js";import"./usePatchChildren-NEc7IVsb.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-D2CAbs8d.js";import"./useGlobalEscKeyDown-BhbGumL_.js";import"./usePlacementChangeCallback-D7f72DhY.js";import"./floating-ui.react-dom-aiJhAjls.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-Dalnicbc.js";import"./useGlobalOnClickOutside-fF6T54Dc.js";import"./AppRootPortal-CebRltsZ.js";import"./useColorScheme-Ujmv4Cvg.js";import"./createPortal-Tz19WZo6.js";import"./ColorSchemeProvider-B2dHDCmM.js";import"./ConfigProviderOverride-ieUFn-Fm.js";import"./TooltipBase-BHHz45PL.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-x9VSrLhI.js";import"./Tappable-BHKu77gD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./InputUtils-BueJ8J_Y.js";import"./Subhead-AWezZjK6.js";import"./VisuallyHidden-8TqRJKxj.js";import"./cancel_16-B1WNNliN.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./useConfigDirection-CX53j0Ve.js";import"./Caption-Yrm4oGty.js";import"./Footnote-lwK0vUsu.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
