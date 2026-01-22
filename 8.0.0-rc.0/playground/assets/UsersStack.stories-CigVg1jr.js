import{j as e}from"./iframe-CJSxyW9U.js";import{w as p}from"./withCartesian-Cm3TpuPo.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-3Z7os5wq.js";import{U as l}from"./UsersStack-C0RUXa02.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-C-3KoW17.js";import"./usePatchChildren-Cfc-8ukB.js";import"./useReferenceHiddenChangeCallback-D1-xpaTE.js";import"./useGlobalEscKeyDown-Ctvb27ds.js";import"./usePlacementChangeCallback-CcbRo2C7.js";import"./floating-ui.react-dom-DgoDJi3n.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DVOSKHBB.js";import"./useGlobalOnClickOutside-D_d0MryI.js";import"./AppRootPortal-DnnFjexz.js";import"./useColorScheme-cIrBBNZn.js";import"./createPortal-BAw7aojS.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-COmjjYbo.js";import"./ConfigProviderOverride-CF8gkful.js";import"./TooltipBase-DjQ109Nb.js";import"./FloatingArrow-D3RfVyEp.js";import"./Tappable-B_lgqKnQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./InputUtils-CQXgm4mM.js";import"./Subhead-B39S2HHi.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./cancel_16-oWyxmFnc.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./useConfigDirection-C3cHGESc.js";import"./Caption-DJRq5DSE.js";import"./Footnote-PeEhUyBm.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
