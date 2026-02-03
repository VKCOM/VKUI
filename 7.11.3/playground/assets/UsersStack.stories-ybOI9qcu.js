import{j as e}from"./iframe-C4ttrVUJ.js";import{w as p}from"./withCartesian-Bk85aL_K.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-BHmHgrrD.js";import{U as l}from"./UsersStack-Ca0PpUj0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-D8hN7Tsp.js";import"./usePatchChildren-Dp5Msff-.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-BPKnqOos.js";import"./useGlobalEscKeyDown-BEXubCvJ.js";import"./usePlacementChangeCallback-DDIzKEgz.js";import"./floating-ui.react-dom-D2r8uzGZ.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-BbUIO2GP.js";import"./useGlobalOnClickOutside-tvjqCD_D.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./TooltipBase-Bud29Qb0.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-DI1_-YRL.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./InputUtils-CD1Rp_t7.js";import"./Subhead-ChzeQqTJ.js";import"./VisuallyHidden-XgvirjGY.js";import"./cancel_16-jBKFguup.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./useConfigDirection-DvmYVNBa.js";import"./Caption-Den-IMPb.js";import"./Footnote-D7DVMFfP.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map((photoUrl): UsersStackPhoto => ({
      src: photoUrl,
      renderWrapper: AvatarWrapper
    }))
  }
}`,...a.parameters?.docs?.source}}};const or=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,or as __namedExportsOrder,tr as default};
