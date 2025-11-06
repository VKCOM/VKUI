import{j as e}from"./iframe-VQuwIBim.js";import{w as d}from"./withCartesian-C2mj4ghH.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-B2STm_6G.js";import{U as v}from"./UsersStack-jcsmbWUK.js";import"./useFloatingElement-BpEWbAgA.js";import"./usePatchChildren-ogaDh4Dy.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Bmr5y_bS.js";import"./useGlobalEscKeyDown-f8N8lSw_.js";import"./usePlacementChangeCallback-DmGIfBmK.js";import"./floating-ui.react-dom-Pmp8ft10.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DHCjfbrM.js";import"./useGlobalOnClickOutside-CjPG_8Vr.js";import"./AppRootPortal-Cj8kaYA6.js";import"./useColorScheme-3PoJfbUB.js";import"./createPortal-CagxG8Ef.js";import"./ColorSchemeProvider-CD6Xwm8-.js";import"./ConfigProviderOverride-CgHQ0Bf4.js";import"./TooltipBase-DeKXInKX.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BBql9SkG.js";import"./Tappable-DJKRXU4j.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./InputUtils-esLGIMz7.js";import"./Subhead-BovRsuwk.js";import"./VisuallyHidden-Bn9barOE.js";import"./cancel_16-CS8Axx3h.js";import"./SvgIconRoot-CQoq0Nal.js";import"./useConfigDirection-BhKWnP92.js";import"./Caption-C4GZRvva.js";import"./Footnote-CFr_RCRn.js";const er={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const pr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,pr as __namedExportsOrder,er as default};
