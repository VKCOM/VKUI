import{j as e}from"./iframe-Db0SwwYs.js";import{w as p}from"./withCartesian-De4XxxrF.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-DC1JFAfa.js";import{U as l}from"./UsersStack-D94QKgqK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-vEvWSVIj.js";import"./usePatchChildren-BQJ3Rala.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BVfL_SN8.js";import"./useGlobalEscKeyDown-DSMRadhz.js";import"./usePlacementChangeCallback-Wr5lETKk.js";import"./floating-ui.react-dom-CXE2iVpv.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DC7ucSqy.js";import"./useGlobalOnClickOutside-2iI8FmpY.js";import"./AppRootPortal-D20gzpUj.js";import"./useColorScheme-BTSYlb-o.js";import"./createPortal-BhjAg26d.js";import"./ColorSchemeProvider-DZTdfkVT.js";import"./ConfigProviderOverride-CKegTf3s.js";import"./TooltipBase-BvaP3Bbu.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-A8JFHQho.js";import"./Tappable-DPDNr6uV.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./InputUtils-DU65P5CC.js";import"./Subhead-C2LPCYB7.js";import"./VisuallyHidden-CZDmCAU7.js";import"./cancel_16-UMpt-5Dk.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./useConfigDirection-BSBBgTCk.js";import"./Caption-02ZtUboh.js";import"./Footnote-CJOdhFdd.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
