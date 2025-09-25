import{j as e}from"./iframe-Bz8JpgqB.js";import{w as d}from"./withCartesian-DJz-fGS0.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-Dp_4_XDM.js";import{U as v}from"./UsersStack-CL_kEeP1.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-Ds0VGXgb.js";import"./usePatchChildren-DQ9nKrgO.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Bry62V7f.js";import"./useGlobalEscKeyDown-AMJx9qHv.js";import"./usePlacementChangeCallback-Dm4G90RH.js";import"./floating-ui.react-dom-BSyzrD7n.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CQ9aTHQJ.js";import"./useGlobalOnClickOutside-dfXbByJN.js";import"./AppRootPortal-BfEQGkF-.js";import"./useColorScheme-DVyOIIkN.js";import"./createPortal-5lj2qVdy.js";import"./ColorSchemeProvider-CDk5uzXv.js";import"./ConfigProviderOverride-iG9hzCRC.js";import"./TooltipBase-Do-eN933.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BEP7PKoE.js";import"./Tappable-DGSycWIS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./InputUtils-C36z3TAr.js";import"./Subhead-CQ9JxnC_.js";import"./VisuallyHidden-Civmtkn4.js";import"./cancel_16-XWUplmpx.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./useConfigDirection-1j4RIbQo.js";import"./Caption-DWsz_D6l.js";import"./Footnote-CXG5ZQyY.js";const ir={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
