import{j as e}from"./iframe-BqdgnJE0.js";import{w as p}from"./withCartesian-C7OPVJEs.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-DFte1qta.js";import{U as l}from"./UsersStack-Fgq9guZt.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-BV-h5og7.js";import"./usePatchChildren-M9neRATe.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CIJGa2Ph.js";import"./useGlobalEscKeyDown-BPqBZLrI.js";import"./usePlacementChangeCallback-DKDruSlP.js";import"./floating-ui.react-dom-Jxcy3D_W.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BBQaujFI.js";import"./useGlobalOnClickOutside-Bom_H9q_.js";import"./AppRootPortal-DRaDzdXH.js";import"./useColorScheme-B3VXvXnZ.js";import"./createPortal-CfJRRh6m.js";import"./ColorSchemeProvider-BPL5atgs.js";import"./ConfigProviderOverride-BYZnQAAH.js";import"./TooltipBase-CZM6aLrY.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-Bdu_em3L.js";import"./Tappable-C0ES09y8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-_lommW0d.js";import"./useState-CWGeE8jE.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./InputUtils-ESzsNRN2.js";import"./Subhead-ubP323Lg.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./cancel_16-GeHSc2Gr.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./useConfigDirection-D5bRs-MF.js";import"./Caption-DQ3GIvfa.js";import"./Footnote-Bj-28HDg.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
