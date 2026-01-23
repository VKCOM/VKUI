import{j as e}from"./iframe-BJ9555aC.js";import{w as p}from"./withCartesian-C_RHUhdA.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-RmEtMmgB.js";import{U as l}from"./UsersStack-C1OS6s0c.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-Dwr-ot01.js";import"./usePatchChildren-DftKGZmT.js";import"./useReferenceHiddenChangeCallback-DY7Th_c3.js";import"./useGlobalEscKeyDown-CXkiU7ri.js";import"./usePlacementChangeCallback-BKmBlkkK.js";import"./floating-ui.react-dom-DIn9Ikqa.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-3-CGTCCX.js";import"./useGlobalOnClickOutside-NUXmRM8D.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./TooltipBase-BvGZ3PYo.js";import"./FloatingArrow-C4JFmSBi.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./Subhead-ppzL9p3g.js";import"./VisuallyHidden-BpRJPd7L.js";import"./cancel_16-DW-e6Ezq.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./useConfigDirection-BeEtg5OO.js";import"./Caption-BrB5DlXi.js";import"./Footnote-xxqNAETB.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
