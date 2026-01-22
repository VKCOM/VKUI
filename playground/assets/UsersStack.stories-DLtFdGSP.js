import{j as e}from"./iframe-BKqRoeRO.js";import{w as p}from"./withCartesian-DC0oG0nk.js";import{C as i}from"./constants-DdkjnEgz.js";import{g as r,a as m}from"./mock-CiudtyON.js";import{c as n}from"./createStoryParameters-CcwS40kl.js";import{T as c}from"./Tooltip-Sewzdidp.js";import{U as l}from"./UsersStack-nSDsIbeL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFloatingElement-BY_JnJt7.js";import"./usePatchChildren-B59Y0TE8.js";import"./useReferenceHiddenChangeCallback-Co2OT1Ls.js";import"./useGlobalEscKeyDown-B6CseJM6.js";import"./usePlacementChangeCallback-CWH3mKqa.js";import"./floating-ui.react-dom-BE-hubS3.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./customResizeObserver-CzwDpNji.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-DrUFPpJz.js";import"./useGlobalOnClickOutside-DbOAAGx7.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./TooltipBase-Bwtdj1cq.js";import"./FloatingArrow-BW-WGI2j.js";import"./Tappable-EPRrmr_0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./InputUtils-CQaATz1N.js";import"./Subhead-B3U-hqtC.js";import"./VisuallyHidden-B-uFrHKw.js";import"./cancel_16-YezS66Hp.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./useConfigDirection-BH9mMD5y.js";import"./Caption-BlAl9F9i.js";import"./Footnote-BAb4Skv3.js";const tr={title:"Data Display/UsersStack",component:l,parameters:n("UsersStack",i),decorators:[p],tags:["Отображение данных"]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},d=o=>{const s=m();return e.jsx(c,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:d}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
