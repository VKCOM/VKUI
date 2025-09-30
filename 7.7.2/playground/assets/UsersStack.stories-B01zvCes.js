import{j as e}from"./iframe-qoTtUH8h.js";import{w as d}from"./withCartesian-CgmRx60J.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-o6I-J36I.js";import{U as v}from"./UsersStack-LUmOEpiS.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-CHRMqlSt.js";import"./usePatchChildren-_UFdewNj.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CoBcnP-Y.js";import"./useGlobalEscKeyDown-CkQxHSrF.js";import"./usePlacementChangeCallback-DXVqMB8T.js";import"./floating-ui.react-dom-XNsbD0-z.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-Dz1TjRJ3.js";import"./useGlobalOnClickOutside-BwI1vE8o.js";import"./AppRootPortal-xRZPOq86.js";import"./useColorScheme-xLZC0aKi.js";import"./createPortal-yS_K3Zg-.js";import"./ColorSchemeProvider-DCb80HKd.js";import"./ConfigProviderOverride-CdXDfhg5.js";import"./TooltipBase-R6AyPMTt.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BSMg02bE.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./InputUtils-DCqC4s6H.js";import"./Subhead-B5MAyB6Q.js";import"./VisuallyHidden-BqFtMTWb.js";import"./cancel_16-wfglQx50.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./useConfigDirection-DgRc04K6.js";import"./Caption-bIdYMpTC.js";import"./Footnote-DrM4b0WC.js";const ir={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
