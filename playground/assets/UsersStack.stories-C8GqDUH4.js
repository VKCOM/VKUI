import{j as e}from"./iframe-CkliH7Ym.js";import{w as d}from"./withCartesian-v9tII3iV.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-1KUKyaaQ.js";import{U as v}from"./UsersStack-rSA1aAV7.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-CLPKp2dI.js";import"./usePatchChildren-B1klpWdP.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CrbKL3K8.js";import"./useGlobalEscKeyDown-B9SZydpa.js";import"./usePlacementChangeCallback-DQYCmAMk.js";import"./floating-ui.react-dom-DQc45krP.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DPyJ8XQk.js";import"./useGlobalOnClickOutside-By7I8TNY.js";import"./AppRootPortal-_qkzjwpD.js";import"./useColorScheme-D8FQD_Wa.js";import"./createPortal-DdOejS3g.js";import"./ColorSchemeProvider-B9rX6vOp.js";import"./ConfigProviderOverride-Btyq71wt.js";import"./TooltipBase-BQIZj03y.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-B53s4wIh.js";import"./Tappable-fZc2zE5Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D0QQafOF.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./InputUtils-BZxXqLFf.js";import"./Subhead-DmZ-gnSD.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./cancel_16-CVLOC4uu.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./useConfigDirection-Cu9Dkwyc.js";import"./Caption-XD0QEt-A.js";import"./Footnote-CVpuTKzI.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
