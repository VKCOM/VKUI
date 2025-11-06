import{j as e}from"./iframe-gnG2DlPI.js";import{w as d}from"./withCartesian-CEpshsR1.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-DyXoqbU6.js";import{U as v}from"./UsersStack-CkchHde3.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-PTWjLEfY.js";import"./usePatchChildren-BRhqMNMI.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DFZxSJq2.js";import"./useGlobalEscKeyDown-7duGVSqH.js";import"./usePlacementChangeCallback-BKIMntET.js";import"./floating-ui.react-dom-B5yNzxXa.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-25o_zjEi.js";import"./useGlobalOnClickOutside-DUaMRA_1.js";import"./AppRootPortal-Czy3ESyL.js";import"./useColorScheme-vbaHcGpn.js";import"./createPortal-B06EttXw.js";import"./ColorSchemeProvider-BCLoO_b0.js";import"./ConfigProviderOverride-BGC5vwuB.js";import"./TooltipBase-BuDJtK70.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-BxfAO7YE.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./InputUtils-Bge3OIaY.js";import"./Subhead-CTHKnpeS.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./cancel_16-CitrMCMl.js";import"./SvgIconRootV2-DT4nia1k.js";import"./useConfigDirection-Dd3ud1i-.js";import"./Caption-BFNedaFH.js";import"./Footnote-CONk622S.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
