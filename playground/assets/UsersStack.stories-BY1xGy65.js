import{j as e}from"./iframe-BW2_2Sqh.js";import{w as d}from"./withCartesian-DYrU1P04.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-BMUXM8Bs.js";import{U as v}from"./UsersStack-DYdGJrkE.js";import"./useFloatingElement-nfAcuS-5.js";import"./usePatchChildren-CKYmKfnu.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-D-Y2YXE4.js";import"./useGlobalEscKeyDown-CHY6tzP1.js";import"./usePlacementChangeCallback-B_7WiNet.js";import"./FloatingArrow-BwItcUE2.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-C3ZVk8ic.js";import"./useGlobalOnClickOutside-Dt9YTwri.js";import"./AppRootPortal-F6rxXrpM.js";import"./useColorScheme-DfFLwB8B.js";import"./createPortal-BgwYQhDs.js";import"./ColorSchemeProvider-DNcZYulN.js";import"./ConfigProviderOverride-DKz7Q2_Q.js";import"./TooltipBase-Cykt3onb.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-D_Pc41Ky.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSLKIgEW.js";import"./InputUtils-DYuPlK4j.js";import"./Subhead-BlMIzlRi.js";import"./VisuallyHidden-0_L4g8bM.js";import"./cancel_16-Cy5lofFG.js";import"./SvgIconRoot-CjRB6jtF.js";import"./useConfigDirection-DNUhHzMQ.js";import"./Caption-B3YPJibB.js";import"./Footnote-DqSrPGSc.js";const ar={title:"Blocks/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const sr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,sr as __namedExportsOrder,ar as default};
