import{j as e}from"./iframe-dTlwAXGa.js";import{w as d}from"./withCartesian-D0EUO-_7.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-DPWKNcF_.js";import{U as v}from"./UsersStack-Cr4ZhCCT.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-CiTTcsQM.js";import"./usePatchChildren-DbPd82DS.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Igx7JX9x.js";import"./useGlobalEscKeyDown-DJ-PRx5J.js";import"./usePlacementChangeCallback-dDt_8z3X.js";import"./floating-ui.react-dom-BpBaiSJG.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-De_YF1Cc.js";import"./useGlobalOnClickOutside-Ibw0LsG6.js";import"./AppRootPortal-DvsIiuGf.js";import"./useColorScheme-BL3jX5yR.js";import"./createPortal-HGqhkvd7.js";import"./ColorSchemeProvider-DYm1IVe2.js";import"./ConfigProviderOverride-xMCWz3c3.js";import"./TooltipBase-DFq4wTiK.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-VZsTDbup.js";import"./Tappable-qMfTC7Pz.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./InputUtils-CtGJ0DI4.js";import"./Subhead-BlOKXAAl.js";import"./VisuallyHidden-JumwXwcS.js";import"./cancel_16-DMYQqNM0.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./useConfigDirection-BIk700TM.js";import"./Caption-BzXaktSd.js";import"./Footnote-DJb5ZlwN.js";const ir={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const mr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,mr as __namedExportsOrder,ir as default};
