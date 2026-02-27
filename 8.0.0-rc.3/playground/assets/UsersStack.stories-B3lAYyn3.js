import{j as e}from"./iframe-Cn0klKvz.js";import{w as p}from"./withCartesian-pzStfd1W.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,b as m}from"./mock-KFM_xxXO.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-Drwa8d2y.js";import{U as l}from"./UsersStack-D6cC-neL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-CdThb1Je.js";import"./usePatchChildren-BhtEeB8o.js";import"./useReferenceHiddenChangeCallback-C__GEFDu.js";import"./useGlobalEscKeyDown-CspiQrnP.js";import"./usePlacementChangeCallback-BcR5bXER.js";import"./floating-ui.react-dom-DkSLRTT4.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-0lh_FwAV.js";import"./type_checkers-B4iEhslY.js";import"./useGlobalOnClickOutside-BUgtwJyi.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./TooltipBase-T6YDFrM1.js";import"./FloatingArrow-rIv3MFV8.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./Subhead-BQyoBjlR.js";import"./VisuallyHidden-C9tNf48m.js";import"./cancel_16-DzhBEMr_.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./useConfigDirection-DuEYXWS_.js";import"./Caption-Bj6KpxiH.js";import"./Footnote-BwZkqEqY.js";const rr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
