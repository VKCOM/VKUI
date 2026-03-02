import{j as r}from"./iframe-DxxZLxeI.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DdGmom0o.js";import{F as o}from"./FormItem-DSDwTAPN.js";import{I as p}from"./Input-B1i6kxyZ.js";import{S as c}from"./Select-L8logHYI.js";import{V as a}from"./VisuallyHidden-DujZCwJ6.js";import{F as n}from"./FormLayoutGroup-_huuaZYP.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-CJyQzEXv.js";import"./useBooleanState-DF3jMA5-.js";import"./useGlobalEventListener-BlIjoW0G.js";import"./useEventListener-DLWBolfY.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DlcsT4Ub.js";import"./CalendarHeader-CKoRdS3h.js";import"./useState-CSsh5GFH.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./Tappable-C82LyDNp.js";import"./Clickable-iBjUcv74.js";import"./InputUtils-CuOtTanw.js";import"./Footnote-C3-8h3B5.js";import"./CustomSelect-Ds3g0wO8.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CyCEZRIL.js";import"./children-CeKSHNky.js";import"./dropdown_20-jAyRuGir.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-CCkXxAU-.js";import"./CustomSelectDropdown-BvnjxXii.js";import"./CustomScrollView-BgNbYtGX.js";import"./Popper-BqSSJ4b-.js";import"./useReferenceHiddenChangeCallback-Bdeh3c_U.js";import"./AppRootPortal-BC3JV3T9.js";import"./useColorScheme-CToT-7qP.js";import"./createPortal-DlraoZsb.js";import"./ColorSchemeProvider-DtExgQxR.js";import"./ConfigProviderOverride-CeDxwPUE.js";import"./FloatingArrow-2W0GhyuX.js";import"./usePlacementChangeCallback-BQqykK7j.js";import"./floating-ui.react-dom-DLojga1i.js";import"./Spinner-BmfPEekg.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Dwyu7_r7.js";import"./Paragraph-DoYA-tO3.js";import"./NativeSelect-xxKpWJ_l.js";import"./FormField-D_s9Gk1O.js";import"./useFocusWithin-CCKxCh5m.js";import"./Select.module-CgaTlf0q.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CgpvmjLz.js";import"./cancel_16-B5ZWMyK2.js";import"./useStateWithPrev-DQv0ILTY.js";import"./chevron_left_outline_20-B6Q-cCoY.js";import"./useEnsuredControl-DmtaIsBi.js";import"./Button-BpqQfiA7.js";import"./FocusTrap-B9SWnrCQ.js";import"./useFocusTrap-CR-pyJwh.js";import"./useMutationObserver-DAoxHxKK.js";import"./calendar_outline_20-Bep-mxXL.js";import"./clear_16-u-JLbxUP.js";import"./Removable-DPTeUPkV.js";import"./useConfigDirection-Cl-SHqVT.js";import"./cancel_24-BuXDWULC.js";import"./FormItemTopLabel-BCAm0Knc.js";import"./Subhead-BP7ZzX_Z.js";import"./UnstyledTextField-CC-jgJHh.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <FormLayoutGroup {...args}>
      <FormItem htmlFor="name" top="Имя ящика">
        <Input id="name" />
      </FormItem>
      <FormItem>
        <Select options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map(i => ({
        label: i,
        value: i
      }))} defaultValue="@mail.ru" />
      </FormItem>
    </FormLayoutGroup>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <FormLayoutGroup mode="horizontal" segmented {...args}>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="nikname-id">
          Никнейм или имя
        </VisuallyHidden>
        <Input id="nickname-id" placeholder="Никнейм или имя" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="link-or-id-input-id">
          Ссылка на ID
        </VisuallyHidden>
        <Input id="link-or-id-input-id" placeholder="Ссылка на ID" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="date-id">
          Дата или диапазон
        </VisuallyHidden>
        <DateInput id="date-id" renderCustomValue={(date: Date | undefined) => date ? undefined : <span aria-hidden style={{
        color: 'var(--vkui--color_text_secondary)'
      }}>
                Дата или диапазон
              </span>} />
      </FormItem>
    </FormLayoutGroup>
}`,...e.parameters?.docs?.source}}};const zr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,zr as __namedExportsOrder,_r as default};
