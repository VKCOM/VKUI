import{j as e}from"./iframe-OAvG3iJ-.js";import{w as p}from"./withCartesian-BIO2OLuw.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,b as m}from"./mock-KFM_xxXO.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-DgeJ4PUP.js";import{U as l}from"./UsersStack-BrBpib3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-BVCY9Ww6.js";import"./usePatchChildren-4HQpmr0n.js";import"./useReferenceHiddenChangeCallback-Bc3k5tTE.js";import"./useGlobalEscKeyDown-BZHzgl9G.js";import"./usePlacementChangeCallback-BbKwBRGz.js";import"./floating-ui.react-dom-Bt2SuClg.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BaJkbR4W.js";import"./useGlobalOnClickOutside-BeiE0_bp.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./TooltipBase-8RPJ0DyR.js";import"./FloatingArrow-BhWR0dA3.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./Subhead-Bec_-0uq.js";import"./VisuallyHidden-W5VCXPiv.js";import"./cancel_16-IH85jasE.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./useConfigDirection-EOrqXudq.js";import"./Caption-Dncllwwc.js";import"./Footnote-Fnz7EDP7.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
