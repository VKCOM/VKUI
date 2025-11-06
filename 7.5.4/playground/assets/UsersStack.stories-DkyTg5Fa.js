import{j as e}from"./iframe-DQDZnzQe.js";import{w as d}from"./withCartesian-Cd5XUTsF.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-5ctm-MjI.js";import{U as v}from"./UsersStack-CzC0bOta.js";import"./useFloatingElement-qzUakPRZ.js";import"./usePatchChildren-De3qA-oR.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Dbj80JL7.js";import"./useGlobalEscKeyDown-BtNGk_rz.js";import"./usePlacementChangeCallback-CLm-XiCo.js";import"./floating-ui.react-dom-B2Zm5IGL.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CXLvoAQT.js";import"./useGlobalOnClickOutside-BKTdEidI.js";import"./AppRootPortal-Bq1Lh75N.js";import"./useColorScheme-alZiR8qg.js";import"./createPortal-7OEOxVfD.js";import"./ColorSchemeProvider-KH2nDpqI.js";import"./ConfigProviderOverride-iezr64Uj.js";import"./TooltipBase-_n8GqmIy.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-B7uRlAoA.js";import"./Tappable-GGjjvyZD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./InputUtils-CKZOM7f4.js";import"./Subhead-CV6mVfj0.js";import"./VisuallyHidden-vRsYbH_6.js";import"./cancel_16-hZiKNl_V.js";import"./SvgIconRoot-wcV10mZC.js";import"./useConfigDirection-CFM_wEcG.js";import"./Caption-BxTGQxAz.js";import"./Footnote-y02Efo06.js";const er={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
