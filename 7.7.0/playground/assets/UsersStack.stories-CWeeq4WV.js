import{j as e}from"./iframe-DfeTZ_Fw.js";import{w as d}from"./withCartesian-C_E5fs2d.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-CrJwz6mz.js";import{U as v}from"./UsersStack-BvA65BJ0.js";import"./preload-helper-Dp1pzeXC.js";import"./useFloatingElement-nnP_JTmS.js";import"./usePatchChildren-CEUZ1KHH.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-N3uDB-Py.js";import"./useGlobalEscKeyDown--HMR6CpP.js";import"./usePlacementChangeCallback-Cv8IwpN3.js";import"./floating-ui.react-dom-BV57HVUx.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-Q_kfI6qJ.js";import"./useGlobalOnClickOutside--zE89PDW.js";import"./AppRootPortal-Cf-1kRil.js";import"./useColorScheme-BGgcYhBu.js";import"./createPortal-B5-CgryZ.js";import"./ColorSchemeProvider-Ct7XlnnY.js";import"./ConfigProviderOverride-BwkUJRE0.js";import"./TooltipBase-B2w0R9jZ.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-uD3esN_v.js";import"./Tappable-BBWke1IE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./InputUtils-C-I8ensD.js";import"./Subhead-BkL8qoJh.js";import"./VisuallyHidden-BuJles22.js";import"./cancel_16-CAHFUioB.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./useConfigDirection-CwjKsiym.js";import"./Caption-hDjGO988.js";import"./Footnote-ivEbNXOe.js";const ir={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const mr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,mr as __namedExportsOrder,ir as default};
