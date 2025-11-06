import{j as e}from"./iframe-DZFG_ML5.js";import{w as d}from"./withCartesian-D_ODXolC.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-CNNPF6O2.js";import{U as v}from"./UsersStack-DEKKphlA.js";import"./useFloatingElement-BHJjuMLa.js";import"./usePatchChildren-yBv79Dgb.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-0wn49evO.js";import"./useGlobalEscKeyDown-D6qDr_Ha.js";import"./usePlacementChangeCallback-BMP1j3H_.js";import"./floating-ui.react-dom-BHf189t_.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DRpPGXB0.js";import"./useGlobalOnClickOutside-BrZpyugz.js";import"./AppRootPortal-DTIQQrr5.js";import"./useColorScheme-u4Oy3KJr.js";import"./createPortal-Cb1hOk6l.js";import"./ColorSchemeProvider-CduwPPyw.js";import"./ConfigProviderOverride-BPkye6ZO.js";import"./TooltipBase-EsQnydoE.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-C_-fnQXD.js";import"./Tappable-DivmMzZn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-O0RRum4C.js";import"./InputUtils-rnqmQ_3Q.js";import"./Subhead-D8223A8i.js";import"./VisuallyHidden-DUSQwRyI.js";import"./cancel_16-a7lfvdOs.js";import"./SvgIconRoot-CKNjcJVv.js";import"./useConfigDirection-BbxI4kck.js";import"./Caption-B5AzA_Bj.js";import"./Footnote-CYznJAmV.js";const sr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
