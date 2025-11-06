import{j as e}from"./iframe-OJ1C6fMc.js";import{w as d}from"./withCartesian-IgutvX62.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-CpskxaWN.js";import{U as v}from"./UsersStack-ZagUyzDn.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-CXBXhPGs.js";import"./usePatchChildren-Byhua5aJ.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BxabS6iI.js";import"./useGlobalEscKeyDown-Tfi-9PxX.js";import"./usePlacementChangeCallback-B257mnAK.js";import"./floating-ui.react-dom-DVR29jSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-EZ1T13Lg.js";import"./useGlobalOnClickOutside-B60ruIgq.js";import"./AppRootPortal-BQNLj1SY.js";import"./useColorScheme-Bl13B3Wz.js";import"./createPortal-BUdXaYYW.js";import"./ColorSchemeProvider-CI-3hzwt.js";import"./ConfigProviderOverride-iLzFNrjD.js";import"./TooltipBase-D3vz6HUH.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-B3NLPmUL.js";import"./Tappable-BvI9Mb-u.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./InputUtils-CNd9WeYt.js";import"./Subhead-DtXruDSo.js";import"./VisuallyHidden-BNf-15JI.js";import"./cancel_16-Ca-rlfQm.js";import"./SvgIconRootV2-BNUX11r8.js";import"./useConfigDirection-jCjot1AW.js";import"./Caption-eNcQJads.js";import"./Footnote-JF6_a0Sk.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
