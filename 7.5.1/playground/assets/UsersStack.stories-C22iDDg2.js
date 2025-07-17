import{j as e}from"./iframe-DSAhScPT.js";import{w as d}from"./withCartesian-DYTwxWqf.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-cgC8nKLS.js";import{U as v}from"./UsersStack-wv-R1PlV.js";import"./useFloatingElement-B86DbLui.js";import"./usePatchChildren-D-Lkz7QH.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DIajmvBr.js";import"./useGlobalEscKeyDown-CVYviqwN.js";import"./usePlacementChangeCallback-BG0wibxD.js";import"./floating-ui.react-dom-DRzDlYnr.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CbqgyVDK.js";import"./useGlobalOnClickOutside-DPwfoaaT.js";import"./AppRootPortal-CxrPafwR.js";import"./useColorScheme-Cus1gWwQ.js";import"./createPortal-D1QM7FM5.js";import"./ColorSchemeProvider-DxBekgIw.js";import"./ConfigProviderOverride-0fOmGBwc.js";import"./TooltipBase-CVQrxReA.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-B8GxgOa-.js";import"./Tappable-41du4Si_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-6oth1gD7.js";import"./InputUtils-CLCgtllv.js";import"./Subhead-CkgCAX-J.js";import"./VisuallyHidden-DIyQgeho.js";import"./cancel_16-ClU_GfUS.js";import"./SvgIconRoot-CIYgEGRf.js";import"./useConfigDirection-Dm4173QE.js";import"./Caption-Cgr-BZCX.js";import"./Footnote-BKhvF0_1.js";const sr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
