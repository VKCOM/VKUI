import{j as e}from"./iframe-DdjuqQRP.js";import{w as d}from"./withCartesian-DAATo9U1.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-Cskezn_m.js";import{U as v}from"./UsersStack-zKIQIXlC.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-CfdIfFIE.js";import"./usePatchChildren-czzJu_Pz.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CpFVkuG8.js";import"./useGlobalEscKeyDown-CdV91bfx.js";import"./usePlacementChangeCallback-BojqPjpp.js";import"./floating-ui.react-dom-BBiLDifA.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CdHy4ml_.js";import"./useGlobalOnClickOutside-D6ZkU7JW.js";import"./AppRootPortal-9OX03cZM.js";import"./useColorScheme-CYrptSaC.js";import"./createPortal-DlGqdrzK.js";import"./ColorSchemeProvider-Dc6luGdy.js";import"./ConfigProviderOverride-CI3Q5Goh.js";import"./TooltipBase-D4sczyRU.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-Bqx-gDMR.js";import"./Tappable-BrYIPFio.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CMjmakJq.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./InputUtils-DQHFk4OZ.js";import"./Subhead-BeRrVUPj.js";import"./VisuallyHidden-DYNTcNls.js";import"./cancel_16-CpUU2xC2.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./useConfigDirection-DvOEXyz7.js";import"./Caption-CY-tJQn6.js";import"./Footnote-BRLGHUUX.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
