import{j as e}from"./iframe-BdXaAE5r.js";import{w as p}from"./withCartesian-Ch2NlzK6.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-_QxevjqL.js";import{U as l}from"./UsersStack-QYl5cSEQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-BIchIoYR.js";import"./usePatchChildren-wH_qk8Nj.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-CV7-HRaM.js";import"./useGlobalEscKeyDown-mpF2Q9Zq.js";import"./usePlacementChangeCallback-Eb8gezm-.js";import"./floating-ui.react-dom-Db2st6hH.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-dQkhshwS.js";import"./useGlobalOnClickOutside-DjhN-IgT.js";import"./AppRootPortal-CUn3WEk3.js";import"./useColorScheme-CR-44NGe.js";import"./createPortal-twf3JG26.js";import"./ColorSchemeProvider-BFJTPUcN.js";import"./ConfigProviderOverride-BDqJysYU.js";import"./TooltipBase-D9kqhm71.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-Bc_HvhOO.js";import"./Tappable-DfpzQKhB.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./InputUtils--HRLtXJo.js";import"./Subhead-CM9E3HB6.js";import"./VisuallyHidden-DcQJc2es.js";import"./cancel_16-DBln7EA6.js";import"./SvgIconRootV2-K3I65lI2.js";import"./useConfigDirection-B4zlYhYT.js";import"./Caption-B8hxH2dQ.js";import"./Footnote-ByXPLsYQ.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
