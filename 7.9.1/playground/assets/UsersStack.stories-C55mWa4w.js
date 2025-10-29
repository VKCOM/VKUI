import{j as e}from"./iframe-DC59t_7s.js";import{w as p}from"./withCartesian-D1Dw12re.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-BBMKrU3K.js";import{U as l}from"./UsersStack-DucU3m4R.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-C-gOnM8M.js";import"./usePatchChildren-nQs0UNfz.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-Cv-J72mi.js";import"./useGlobalEscKeyDown-aCu2Z35g.js";import"./usePlacementChangeCallback-DjeyUYH1.js";import"./floating-ui.react-dom-gjdRo9Jf.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-B87PR-rL.js";import"./useGlobalOnClickOutside-RchS6C8M.js";import"./AppRootPortal-CA3u5wJU.js";import"./useColorScheme-Cf0PiwGW.js";import"./createPortal-2R_X9sVy.js";import"./ColorSchemeProvider-BtWhZJq6.js";import"./ConfigProviderOverride-i8pjibUq.js";import"./TooltipBase-Ca0XMHE9.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-uPZYtw2a.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./InputUtils-C5RWily7.js";import"./Subhead-CcQWHNvG.js";import"./VisuallyHidden-dUOLTySp.js";import"./cancel_16-DOyKhfQK.js";import"./SvgIconRootV2-AN48yvx-.js";import"./useConfigDirection-6hDi4KID.js";import"./Caption-k9jgJVgg.js";import"./Footnote-B_mvNSI1.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
