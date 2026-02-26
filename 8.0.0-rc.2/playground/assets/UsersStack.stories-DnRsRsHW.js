import{j as e}from"./iframe-C4bTyPBQ.js";import{w as p}from"./withCartesian-BQ6gkXm4.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,b as m}from"./mock-KFM_xxXO.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-CcdpUdcK.js";import{U as l}from"./UsersStack-C5e7tTps.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-DXIydDxc.js";import"./usePatchChildren-WVXUbl0d.js";import"./useReferenceHiddenChangeCallback-DNsZVkB4.js";import"./useGlobalEscKeyDown-CvS_H8_H.js";import"./usePlacementChangeCallback-CvoK5TDA.js";import"./floating-ui.react-dom-D2lgGwq0.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-D1T8oqbk.js";import"./type_checkers-B4iEhslY.js";import"./useGlobalOnClickOutside-3C106353.js";import"./AppRootPortal-CWanvcnq.js";import"./useColorScheme-B5qdSLTx.js";import"./createPortal-BVIABMB9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B34yrt0u.js";import"./ConfigProviderOverride-BLhdVd3U.js";import"./TooltipBase-Dz4jM7k2.js";import"./FloatingArrow-Bxs0n5DK.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./Subhead-CGMBr7DJ.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./cancel_16-CoNztr4w.js";import"./SvgIconRootV2-DbftVVP5.js";import"./useConfigDirection-OBrCdmzr.js";import"./Caption-D_3C1Hvb.js";import"./Footnote-wW_hecXF.js";const rr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
