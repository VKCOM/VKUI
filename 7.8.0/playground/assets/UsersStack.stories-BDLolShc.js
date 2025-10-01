import{j as e}from"./iframe-DJZLDe2v.js";import{w as p}from"./withCartesian-BpwZZplL.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-DGh7tN4p.js";import{U as l}from"./UsersStack-Dy99zBtE.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-DfmvgIge.js";import"./usePatchChildren-CcwPUKgy.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BLBLca1c.js";import"./useGlobalEscKeyDown-DmXybXeI.js";import"./usePlacementChangeCallback-DPCse-sq.js";import"./floating-ui.react-dom-lakl85H9.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-Cp0sdS7L.js";import"./useGlobalOnClickOutside-piARu2k4.js";import"./AppRootPortal-CbG6gCHO.js";import"./useColorScheme-DOPlqjNA.js";import"./createPortal-D4c259Iv.js";import"./ColorSchemeProvider-DhQPwwFm.js";import"./ConfigProviderOverride-CI0r-TE-.js";import"./TooltipBase-9Jnizg1l.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-D8cEO-Yg.js";import"./Tappable-CY0nsltg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DJi6sM1Y.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./InputUtils-CYWMeBJ6.js";import"./Subhead-DeeiPlYW.js";import"./VisuallyHidden-D0jMNSCO.js";import"./cancel_16-Df48sQ_x.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./useConfigDirection-Codxpgcm.js";import"./Caption-B1NS-klr.js";import"./Footnote-D8Ch1fTG.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
