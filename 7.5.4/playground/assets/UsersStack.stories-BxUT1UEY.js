import{j as e}from"./iframe-BdL7Qu3-.js";import{w as d}from"./withCartesian-DwExuUpS.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-C1UpiNhd.js";import{U as v}from"./UsersStack-D8fWGr6C.js";import"./useFloatingElement-Cj5IbSYS.js";import"./usePatchChildren-BXaTGR91.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BDB-jZS9.js";import"./useGlobalEscKeyDown-e0KBnxSB.js";import"./usePlacementChangeCallback-TMZyVZQg.js";import"./floating-ui.react-dom-B1ZkUPW4.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-B3YM8IG7.js";import"./useGlobalOnClickOutside-zdYBw3AP.js";import"./AppRootPortal-Lr0ibmIo.js";import"./useColorScheme-BFusLRUe.js";import"./createPortal-B4xhqo8S.js";import"./ColorSchemeProvider-B2wMfrSB.js";import"./ConfigProviderOverride-KE2AAYgd.js";import"./TooltipBase-DHLWPCSm.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-C9usf79d.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./InputUtils-DfOLgQuD.js";import"./Subhead-CEr4zt5A.js";import"./VisuallyHidden-DMev6gKF.js";import"./cancel_16-CENPgfP-.js";import"./SvgIconRoot-DfIcWceh.js";import"./useConfigDirection-D_GPblpw.js";import"./Caption-A9YdzU-r.js";import"./Footnote-Cejbc8FV.js";const er={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
