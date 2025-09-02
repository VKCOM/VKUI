import{j as e}from"./iframe-WscSQxk_.js";import{w as d}from"./withCartesian-DBsVLigS.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-B0hj8qtL.js";import{U as v}from"./UsersStack-TRNOiHp8.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-B_1rjYIs.js";import"./usePatchChildren-DpeOqL4G.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DXGV-oHr.js";import"./useGlobalEscKeyDown-6P5lEcup.js";import"./usePlacementChangeCallback-BEnhShFW.js";import"./floating-ui.react-dom-DLxqAOSM.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-D-lyK4Qo.js";import"./useGlobalOnClickOutside-H0DNbCq_.js";import"./AppRootPortal-99J6OfwT.js";import"./useColorScheme-C09gZSyP.js";import"./createPortal-Dh4UeMek.js";import"./ColorSchemeProvider-BohugYos.js";import"./ConfigProviderOverride-CE2xRMO6.js";import"./TooltipBase-xTNnisSC.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-CM5Y14V9.js";import"./Tappable-4pvQI-9h.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./InputUtils-JLBJXs47.js";import"./Subhead-Dng_N-gz.js";import"./VisuallyHidden-uW7N7P-s.js";import"./cancel_16-DqqQ33f0.js";import"./SvgIconRootV2-DxvRspKa.js";import"./useConfigDirection-f8qxYIIC.js";import"./Caption-wyHxTwpV.js";import"./Footnote-DadQ2vZ3.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start'
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map((photoUrl): UsersStackPhoto => ({
      src: photoUrl,
      renderWrapper: AvatarWrapper
    }))
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const ir=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,ir as __namedExportsOrder,pr as default};
