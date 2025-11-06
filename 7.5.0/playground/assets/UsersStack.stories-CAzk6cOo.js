import{j as e}from"./iframe-CRvvLw_c.js";import{w as d}from"./withCartesian-NpmVpHK4.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-B_as6-Qg.js";import{U as v}from"./UsersStack-mdk_cFEu.js";import"./useFloatingElement-DIRsqqwJ.js";import"./usePatchChildren-Ii5cHK8d.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-WDhIB5eK.js";import"./useGlobalEscKeyDown-NQx2zGkg.js";import"./usePlacementChangeCallback-CO1Ai17Q.js";import"./floating-ui.react-dom-BDvHgZmU.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-Cn1DQzZT.js";import"./useGlobalOnClickOutside-CxR8ftxE.js";import"./AppRootPortal-NZw49JW8.js";import"./useColorScheme-Dg8vGXhe.js";import"./createPortal-CEA54U8j.js";import"./ColorSchemeProvider-Cyqs8Swv.js";import"./ConfigProviderOverride-AsEUQZ3i.js";import"./TooltipBase-B1X8cmjP.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-T5Ka_chK.js";import"./Tappable-BL_Dp9-M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C5yyRKxt.js";import"./InputUtils-jCwC7LNS.js";import"./Subhead-BYsNdrqQ.js";import"./VisuallyHidden-ExmaeT5t.js";import"./cancel_16-CfE_EEJn.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./useConfigDirection-B3mnQ7qq.js";import"./Caption-Ci2Nlz7Z.js";import"./Footnote-Dyjj_lEj.js";const sr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const er=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,er as __namedExportsOrder,sr as default};
