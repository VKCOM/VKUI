import{j as e}from"./iframe-DTUKIQpa.js";import{w as d}from"./withCartesian-6dQsYo8G.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-Bw-Tl-0E.js";import{U as v}from"./UsersStack-Bmai64dj.js";import"./useFloatingElement-C-ntYQ-k.js";import"./usePatchChildren-D9CH9LKd.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-ojQ1DOCE.js";import"./useGlobalEscKeyDown-C5tbqG1i.js";import"./usePlacementChangeCallback-XITFD2B3.js";import"./FloatingArrow-k99_XB05.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DZdU0p0r.js";import"./useGlobalOnClickOutside-HCbB39to.js";import"./AppRootPortal-DxIJvWMm.js";import"./useColorScheme-BGAH8gMd.js";import"./createPortal-88uciayh.js";import"./ColorSchemeProvider-BX-9CWxv.js";import"./ConfigProviderOverride-CgvCCF7D.js";import"./TooltipBase-Cb30GIjJ.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-Br6ZM5HO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DRtJbe2S.js";import"./InputUtils-Db1DLuWS.js";import"./Subhead-C7vbIoTq.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./cancel_16-C6mgGc9w.js";import"./SvgIconRoot-UH6uLjn4.js";import"./useConfigDirection-Cb5ryD04.js";import"./Caption-D0cKPzOT.js";import"./Footnote-rQhC0WQs.js";const ar={title:"Blocks/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
