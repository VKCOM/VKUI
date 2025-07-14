import{j as e}from"./iframe-A37C1jR-.js";import{w as d}from"./withCartesian-B4N9KG1L.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-BexzDmOb.js";import{U as v}from"./UsersStack-DCv-NokR.js";import"./useFloatingElement-CfkGoeS0.js";import"./usePatchChildren-DjE1CTLF.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DYfWerJO.js";import"./useGlobalEscKeyDown-BcjSG-4D.js";import"./usePlacementChangeCallback-CIqLvTp3.js";import"./floating-ui.react-dom-O8fuuV_i.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-B8kDh8y7.js";import"./useGlobalOnClickOutside-CkQ5LrVl.js";import"./AppRootPortal-DBF1tBzb.js";import"./useColorScheme-AJAxISWR.js";import"./createPortal-CMKk957J.js";import"./ColorSchemeProvider-DrI_6v3H.js";import"./ConfigProviderOverride-Bu8U2Yft.js";import"./TooltipBase-BI0AAMsd.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-CKKoyZ-4.js";import"./Tappable-bphv_Btw.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-yIrZH96-.js";import"./InputUtils-C1lt5OkO.js";import"./Subhead-BEeAaWS4.js";import"./VisuallyHidden-DX4ud0qi.js";import"./cancel_16-Ce9nrR5S.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./useConfigDirection-EbyEgXYN.js";import"./Caption-C53AGAFT.js";import"./Footnote-DEEoTBIm.js";const sr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
