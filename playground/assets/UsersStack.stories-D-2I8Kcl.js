import{j as e}from"./iframe-BnACcuaj.js";import{w as p}from"./withCartesian-Dw98jfVn.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-Bp4Lo8yF.js";import{U as l}from"./UsersStack-ByozhPrb.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-CoVwRvlO.js";import"./usePatchChildren-D0Lbz2Q6.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DuuiI3jw.js";import"./useGlobalEscKeyDown-B1Tkvi1V.js";import"./usePlacementChangeCallback-CDmlNiC1.js";import"./floating-ui.react-dom-bTtkFxJ_.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CGKhw2zb.js";import"./useGlobalOnClickOutside-BQBFwIVb.js";import"./AppRootPortal-Cx_aCdV6.js";import"./useColorScheme-DVykw0fJ.js";import"./createPortal-BHYOSBDo.js";import"./ColorSchemeProvider-CDWwKyNi.js";import"./ConfigProviderOverride-BjbSWsz2.js";import"./TooltipBase-CgtWgXHQ.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-D2O-SNso.js";import"./Tappable-Bp0BqfGQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BArC-ALh.js";import"./useState-Bfn4OdDS.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./InputUtils-Bef-cQxi.js";import"./Subhead-ctfJxtXj.js";import"./VisuallyHidden-UrXKAcy6.js";import"./cancel_16-XNcRXdRh.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./useConfigDirection-BP7XHPEm.js";import"./Caption-BCwlm_4N.js";import"./Footnote-DxEsaF8U.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
