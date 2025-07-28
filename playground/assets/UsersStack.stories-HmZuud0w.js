import{j as e}from"./iframe-CGpIZMk8.js";import{w as d}from"./withCartesian-DWT7RyrR.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-CvOPP_yX.js";import{U as v}from"./UsersStack-B2jAVqUK.js";import"./useFloatingElement-DHvACWoD.js";import"./usePatchChildren-Cq2BGKxG.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-gx510wwF.js";import"./useGlobalEscKeyDown-BGiny_b_.js";import"./usePlacementChangeCallback-BTN2Li97.js";import"./floating-ui.react-dom-DVNPl4I1.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DJeRq7Bz.js";import"./useGlobalOnClickOutside-DtS-d3OY.js";import"./AppRootPortal-DYl1v_5E.js";import"./useColorScheme-B2GHpbyp.js";import"./createPortal-1frpuduZ.js";import"./ColorSchemeProvider-6omxxyDL.js";import"./ConfigProviderOverride-CIbbMeWE.js";import"./TooltipBase-BtlaccUN.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-DEW5lBO-.js";import"./Tappable-BEdABn7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./InputUtils-Z7In03iI.js";import"./Subhead-D_tBif6E.js";import"./VisuallyHidden-CdBh7Iry.js";import"./cancel_16-DSH-4CGb.js";import"./SvgIconRoot-DG1XrJyw.js";import"./useConfigDirection-Dz_AGVHb.js";import"./Caption-J3zu-s3t.js";import"./Footnote-DPd01TxJ.js";const er={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const pr=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,pr as __namedExportsOrder,er as default};
