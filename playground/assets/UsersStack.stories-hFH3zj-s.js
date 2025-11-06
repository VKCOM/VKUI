import{j as e}from"./iframe-DcUCz3Gq.js";import{w as p}from"./withCartesian-CwEevyGb.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-DHbIAGb_.js";import{U as l}from"./UsersStack-q-AeMhvy.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-ho7DzjmG.js";import"./usePatchChildren-Dgtj0HRQ.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CSFFsN8n.js";import"./useGlobalEscKeyDown-DDOzlMAf.js";import"./usePlacementChangeCallback-qGx5x2BN.js";import"./floating-ui.react-dom-BD4t0KnS.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-B2KTcbi_.js";import"./useGlobalOnClickOutside-CHpV_-0M.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./TooltipBase-BKRFfXFC.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-AZDnUaK5.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./InputUtils-Dt7ctke5.js";import"./Subhead-CcORohtB.js";import"./VisuallyHidden-IsgabQ9w.js";import"./cancel_16-Dmbi-9wn.js";import"./SvgIconRootV2-CiN65TpX.js";import"./useConfigDirection-BglQDqbm.js";import"./Caption-CDwF9hKw.js";import"./Footnote-lAEBSvha.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
