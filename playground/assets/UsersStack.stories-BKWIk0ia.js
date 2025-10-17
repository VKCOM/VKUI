import{j as e}from"./iframe-DdZr-4mP.js";import{w as p}from"./withCartesian-f4SrTWZy.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-ByOB3bDD.js";import{U as l}from"./UsersStack-CVaeBsmc.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-rB-hsgSN.js";import"./usePatchChildren-kOf0h1X5.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CSiwGfQ7.js";import"./useGlobalEscKeyDown-Db-k_ygQ.js";import"./usePlacementChangeCallback-DXOFFQMQ.js";import"./floating-ui.react-dom-BugnXWB1.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CmGQ-V-a.js";import"./useGlobalOnClickOutside-exGRwYKA.js";import"./AppRootPortal-C2gdNLsf.js";import"./useColorScheme-DV5aetKH.js";import"./createPortal-rWuLF35z.js";import"./ColorSchemeProvider-IMjSaaWc.js";import"./ConfigProviderOverride-VA0sqvdw.js";import"./TooltipBase-BHD2RiYc.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-CqnmVrPx.js";import"./Tappable-CovdKVQt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./InputUtils-CcKtkKuI.js";import"./Subhead-xzDyxoRX.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./cancel_16-BJb-DamK.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./useConfigDirection-BdfXEpUn.js";import"./Caption-DtU_BWrV.js";import"./Footnote-1KqsUf4m.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
