import{j as e}from"./iframe-B4SbMwac.js";import{w as d}from"./withCartesian-Cp01bjUv.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-UB4nBtmC.js";import{U as v}from"./UsersStack-Dqpw5QxN.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-DhpQT2SO.js";import"./usePatchChildren-2KJYxw7S.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CRKvMz2H.js";import"./useGlobalEscKeyDown-CUgel8Sl.js";import"./usePlacementChangeCallback-Dnl7vUIF.js";import"./floating-ui.react-dom-B5IXheP8.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-OhL1_krT.js";import"./useGlobalOnClickOutside-CiWqRuxg.js";import"./AppRootPortal-BWPaNlwr.js";import"./useColorScheme-D4AzIlWD.js";import"./createPortal-BRXgEjGv.js";import"./ColorSchemeProvider-B6sJTJHQ.js";import"./ConfigProviderOverride-BEOiP_JX.js";import"./TooltipBase-DLNLPCjm.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-D8SaHZXW.js";import"./Tappable-DlzKIRC8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LHka_ZWc.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./InputUtils-C948cbKc.js";import"./Subhead-BszjoIm7.js";import"./VisuallyHidden-B_fMC41X.js";import"./cancel_16-CGmKO3B7.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./useConfigDirection-D94ZyAhW.js";import"./Caption-2zBCEySr.js";import"./Footnote-PzIaqeP1.js";const ir={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
