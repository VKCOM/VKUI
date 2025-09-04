import{j as e}from"./iframe-DvsMcRqO.js";import{w as d}from"./withCartesian--KgH7KCJ.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-Dtj1BXGA.js";import{U as v}from"./UsersStack-yCIZJqAe.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-CUfWLw26.js";import"./usePatchChildren-DN1D4PKf.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Bv5Zofim.js";import"./useGlobalEscKeyDown-IGt0foDH.js";import"./usePlacementChangeCallback-Cny6Wdhd.js";import"./floating-ui.react-dom-C6Zv4JyC.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DpBtXUVf.js";import"./useGlobalOnClickOutside-D_iI2RLJ.js";import"./AppRootPortal-DhnXzNcV.js";import"./useColorScheme-Bl3NVSSg.js";import"./createPortal-CG3Nvn8a.js";import"./ColorSchemeProvider-CWoA6MaR.js";import"./ConfigProviderOverride-Dy4Z3D95.js";import"./TooltipBase-2AOrDeLZ.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-DvhJwnsr.js";import"./Tappable-Dogw4jpa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DquLH6Yl.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./InputUtils-D1AbCbBE.js";import"./Subhead-Bc3iAQV-.js";import"./VisuallyHidden-BGLO0lAS.js";import"./cancel_16-CzV7BKaB.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./useConfigDirection-CN1nmZoK.js";import"./Caption-B-wss8fo.js";import"./Footnote-BnZcEJ_G.js";const pr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
