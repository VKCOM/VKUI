import{j as e}from"./iframe-C2_PECK0.js";import{w as d}from"./withCartesian-DAKMWDCJ.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-DhyCbXI_.js";import{U as v}from"./UsersStack-C7DeNujG.js";import"./useFloatingElement-GlfeZokC.js";import"./usePatchChildren-vUXQ5_Tp.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-2ArwOqZN.js";import"./useGlobalEscKeyDown-DFIkrwZ8.js";import"./usePlacementChangeCallback-DeYYV3Z9.js";import"./FloatingArrow-_eZKd9-i.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-D3OYDbAS.js";import"./useGlobalOnClickOutside-Dn3BANiI.js";import"./AppRootPortal-Q7WzAGvZ.js";import"./useColorScheme-5WrknPov.js";import"./createPortal-yC0ym91a.js";import"./ColorSchemeProvider-DdoBpxie.js";import"./ConfigProviderOverride-6qFI0Cam.js";import"./TooltipBase-BI2mrK18.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-DLQDSygG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Ctz6ZMd9.js";import"./InputUtils-BDpjj3t6.js";import"./Subhead-tEP5dl-0.js";import"./VisuallyHidden-DSMrBIlo.js";import"./cancel_16-CB2v-scR.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./useConfigDirection-CkTav0j8.js";import"./Caption-D3QJC-zO.js";import"./Footnote-B_H7tDpo.js";const ar={title:"Blocks/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
