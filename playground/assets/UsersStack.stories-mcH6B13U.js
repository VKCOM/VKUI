import{j as e}from"./iframe-qlSEKL6e.js";import{w as p}from"./withCartesian-DeKPDael.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-MZmoGOhF.js";import{U as l}from"./UsersStack-BmaxXI2j.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-Qxc20PWC.js";import"./usePatchChildren-Dy87HjyZ.js";import"./useReferenceHiddenChangeCallback-D_B1XjcH.js";import"./useGlobalEscKeyDown-mphiiSZ1.js";import"./usePlacementChangeCallback-7H5OKj5I.js";import"./floating-ui.react-dom-BIRJ4FTj.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CgB4abgn.js";import"./useGlobalOnClickOutside-CYQg1LB0.js";import"./AppRootPortal-Bj-vg1zq.js";import"./useColorScheme-BxcR7ZEW.js";import"./createPortal-CvpuS67o.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-C-9YDCpQ.js";import"./ConfigProviderOverride-DnQqijVu.js";import"./TooltipBase-DycmrJ19.js";import"./FloatingArrow-CtoadKdS.js";import"./Tappable-BHeAowlI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D1c0nrMo.js";import"./useState-C_16qP2U.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./InputUtils-vU1H8cid.js";import"./Subhead-B_pgjgAK.js";import"./VisuallyHidden-Bk8azc-l.js";import"./cancel_16-CadNQiL8.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./useConfigDirection-DGAPn-Y-.js";import"./Caption-H79pUCEU.js";import"./Footnote-BzLLEJCe.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
