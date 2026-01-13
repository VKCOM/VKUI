import{j as e}from"./iframe-DP0c1f9Y.js";import{w as p}from"./withCartesian-Bm9Pi-tV.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-C5z5nQ3K.js";import{U as l}from"./UsersStack-WWwld8m6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-fZQeRXnQ.js";import"./usePatchChildren-CFYUKag5.js";import"./useReferenceHiddenChangeCallback-btJOraww.js";import"./useGlobalEscKeyDown-XvABs4cA.js";import"./usePlacementChangeCallback-DsJnrfKn.js";import"./floating-ui.react-dom-C28MpNR-.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BQTVtCet.js";import"./type_checkers-B4iEhslY.js";import"./useGlobalOnClickOutside-BcNivly3.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./TooltipBase-BFnMySNG.js";import"./FloatingArrow-CAd55EkA.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./Subhead-CZ6CT0II.js";import"./VisuallyHidden-CsBByQHJ.js";import"./cancel_16-CKShxaQm.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./useConfigDirection-BNkwGAZM.js";import"./Caption-Bf2pK2j4.js";import"./Footnote-DJoQQEv9.js";const rr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
