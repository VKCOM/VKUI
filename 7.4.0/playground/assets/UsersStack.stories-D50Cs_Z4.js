import{j as e}from"./iframe-k6odcVfq.js";import{w as d}from"./withCartesian-BIV5f8J0.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-DTvdL6kS.js";import{U as v}from"./UsersStack-qy3td7c2.js";import"./useFloatingElement-DNwXYKkk.js";import"./usePatchChildren-BS61tSBX.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-5rOssyve.js";import"./useGlobalEscKeyDown-CikB-iIN.js";import"./usePlacementChangeCallback-BTz75stv.js";import"./FloatingArrow-DaP7ccM2.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BaxW7pA0.js";import"./useGlobalOnClickOutside-B_MJjHYc.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./TooltipBase-krF6iD-h.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./InputUtils-C1ugcw4m.js";import"./Subhead-CfBOCg31.js";import"./VisuallyHidden-D-1P4bzL.js";import"./cancel_16-DSe4OQBX.js";import"./SvgIconRoot-Dvsw40tX.js";import"./useConfigDirection-CxnUW9rE.js";import"./Caption-CAbXIvPt.js";import"./Footnote-DHnfr3c7.js";const ar={title:"Blocks/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
