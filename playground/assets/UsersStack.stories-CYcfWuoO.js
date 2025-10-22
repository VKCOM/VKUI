import{j as e}from"./iframe-DvQ0hW0I.js";import{w as p}from"./withCartesian-DeAETc2e.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-DsdqIktt.js";import{U as l}from"./UsersStack-BrfgPw_H.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-CXIiqQVv.js";import"./usePatchChildren-yYjPXu8q.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-DyVC-Pyk.js";import"./useGlobalEscKeyDown-CkOKZZMJ.js";import"./usePlacementChangeCallback-CCMY9emW.js";import"./floating-ui.react-dom-ST0J1v4u.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-CswA9P61.js";import"./useGlobalOnClickOutside-ChBy2EZ_.js";import"./AppRootPortal-CoRG5RWu.js";import"./useColorScheme-Du5ZuGtY.js";import"./createPortal-BtQKhO30.js";import"./ColorSchemeProvider-DIg3ehzA.js";import"./ConfigProviderOverride-5F9Q0adn.js";import"./TooltipBase-DolBVeSE.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-nqFcSJUy.js";import"./Tappable-CzBKs2NQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./InputUtils-BSmatczf.js";import"./Subhead-DE0FovKO.js";import"./VisuallyHidden-CGlAvVNH.js";import"./cancel_16-BarEFL_7.js";import"./SvgIconRootV2-L_sEShSp.js";import"./useConfigDirection-DmTY1Se6.js";import"./Caption-hh3k8-HK.js";import"./Footnote-DYSqrBFj.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
