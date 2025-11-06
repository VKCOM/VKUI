import{j as e}from"./iframe-CdtcRMP-.js";import{w as d}from"./withCartesian-Ct1LVHr9.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip--ZfCT3Eh.js";import{U as v}from"./UsersStack-C4NUO_wM.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-DrMXol6P.js";import"./usePatchChildren-DQt_5Ro5.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-JE-hnu_T.js";import"./useGlobalEscKeyDown-BITr0cgo.js";import"./usePlacementChangeCallback-BB0AFdrs.js";import"./floating-ui.react-dom-Dfkb5x82.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-D2ifizI6.js";import"./useGlobalOnClickOutside-CDT8utyH.js";import"./AppRootPortal-BFk_fNEt.js";import"./useColorScheme-Bqwp8l3s.js";import"./createPortal-DFnZY35-.js";import"./ColorSchemeProvider-DeJkjfVG.js";import"./ConfigProviderOverride--tQEj98o.js";import"./TooltipBase-Cw5VWstm.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BleoPFqO.js";import"./Tappable-znRvcKvt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./InputUtils-4kqGTgL9.js";import"./Subhead-DKX6pZDk.js";import"./VisuallyHidden-CtlI0uOO.js";import"./cancel_16-CbxMAvwC.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./useConfigDirection-I0bRjt3K.js";import"./Caption-DOhalbqy.js";import"./Footnote-UnTPOYYT.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
