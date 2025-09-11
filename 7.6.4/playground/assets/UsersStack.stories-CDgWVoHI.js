import{j as e}from"./iframe-D9ctG7Ns.js";import{w as d}from"./withCartesian-CYOLsPz-.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-CY8V-wer.js";import{U as v}from"./UsersStack-DHmdv3zL.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-IG-kLztB.js";import"./usePatchChildren-DAeWWU6E.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Cmfrj-4J.js";import"./useGlobalEscKeyDown-NKGDJz9c.js";import"./usePlacementChangeCallback-BNOpKcC7.js";import"./floating-ui.react-dom-i0bg-Iov.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-C-x_bIxV.js";import"./useGlobalOnClickOutside-B4IBMNzP.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./ConfigProviderOverride-BJZJ1bpA.js";import"./TooltipBase-Cv7F3WeH.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-C_eyXCdC.js";import"./Tappable-DOmAnzcN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./InputUtils-dk1yVFOH.js";import"./Subhead-DjvqikOr.js";import"./VisuallyHidden-XRinxkJw.js";import"./cancel_16-DYxBW21y.js";import"./SvgIconRootV2-DlJGpm03.js";import"./useConfigDirection-BepSmh67.js";import"./Caption-6ObnKwfL.js";import"./Footnote-BcHikxS0.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
