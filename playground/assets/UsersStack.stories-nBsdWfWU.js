import{j as e}from"./iframe-DIYy3-CH.js";import{w as p}from"./withCartesian-CImVCZF5.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-t2cYRNML.js";import{U as l}from"./UsersStack-KRPqpib3.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-DPUL7dsU.js";import"./usePatchChildren-BCYHdOnE.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CW-8m34o.js";import"./useGlobalEscKeyDown-CrRLZS7D.js";import"./usePlacementChangeCallback-CgA_U0ts.js";import"./floating-ui.react-dom-SH6Hwo0U.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-7dmeozfI.js";import"./useGlobalOnClickOutside-C8n_e1R1.js";import"./AppRootPortal-B6-nwskM.js";import"./useColorScheme-BPR6ME_0.js";import"./createPortal-w5gOwCV_.js";import"./ColorSchemeProvider-Ncvd_GBc.js";import"./ConfigProviderOverride-C79xSzNm.js";import"./TooltipBase-BHUBxxQU.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-B11NdP-t.js";import"./Tappable-sYAEqFlc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BAIHKsz8.js";import"./useState-p4Iaaoae.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./InputUtils-MuCAFNzU.js";import"./Subhead-CZ6Imw4B.js";import"./VisuallyHidden-B6N7VZPM.js";import"./cancel_16-7cpCCUKH.js";import"./SvgIconRootV2-DBT-DabK.js";import"./useConfigDirection-5JvPOI0y.js";import"./Caption-CaOppkeD.js";import"./Footnote-CRCyeFbn.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
