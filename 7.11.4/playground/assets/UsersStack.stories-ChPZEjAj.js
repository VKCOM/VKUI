import{j as e}from"./iframe-ChnjXsIu.js";import{w as p}from"./withCartesian-Dj7W7GjQ.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-BzUNwyB2.js";import{U as l}from"./UsersStack-D77hOA60.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-DX5XQ1lt.js";import"./usePatchChildren-BOl-PIrl.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-2W8QGwUV.js";import"./useGlobalEscKeyDown-g8Q5PGzv.js";import"./usePlacementChangeCallback-Cm3J6Vod.js";import"./floating-ui.react-dom-Dvn3YOYt.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CI320LI0.js";import"./useGlobalOnClickOutside-CVH9hgWw.js";import"./AppRootPortal-wSVjQS-M.js";import"./useColorScheme-BoHVEH1Y.js";import"./createPortal-psqf4yVg.js";import"./ColorSchemeProvider-DwB0ecjh.js";import"./ConfigProviderOverride-0ZAKsyIC.js";import"./TooltipBase-Bc9qMap3.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BeHWd8nc.js";import"./Tappable-BDf7UE95.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zj2UWImj.js";import"./useState-ZDhvxYGh.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./InputUtils-D67zZ2HF.js";import"./Subhead-4jBJxz3c.js";import"./VisuallyHidden-C0GQz0ke.js";import"./cancel_16-99w3wgRx.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./useConfigDirection-Cu4tNejP.js";import"./Caption-DTswF5wb.js";import"./Footnote-a8vRHGoF.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
