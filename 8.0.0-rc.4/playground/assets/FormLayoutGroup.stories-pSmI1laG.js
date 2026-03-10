import{j as r}from"./iframe-OAvG3iJ-.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-CIuA4Cwc.js";import{F as o}from"./FormItem-By1Ekhxi.js";import{I as p}from"./Input-Crz7acD8.js";import{S as c}from"./Select-CA1CSB5t.js";import{V as a}from"./VisuallyHidden-W5VCXPiv.js";import{F as n}from"./FormLayoutGroup-CZEgawkV.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DmVpjyWJ.js";import"./useBooleanState-BelmnhEn.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-BZHzgl9G.js";import"./CalendarHeader-BymeG1uM.js";import"./useState-Dux8RiNa.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./Tappable-hYlNxVzd.js";import"./Clickable-BctbgV4x.js";import"./InputUtils-D-RvHd2H.js";import"./Footnote-Fnz7EDP7.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-CSRTnPaV.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BPProJUM.js";import"./children-jmMlROp9.js";import"./dropdown_20-DLRAI4W6.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-MC8dqHVP.js";import"./CustomSelectDropdown-CV-BYusI.js";import"./CustomScrollView-CzuykHDu.js";import"./Popper-CTBJG6tv.js";import"./useReferenceHiddenChangeCallback-Bc3k5tTE.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./FloatingArrow-BhWR0dA3.js";import"./usePlacementChangeCallback-BbKwBRGz.js";import"./floating-ui.react-dom-Bt2SuClg.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-z85i74hA.js";import"./Paragraph-CVcud42F.js";import"./NativeSelect-QhAso5Wu.js";import"./FormField-C34WeTI9.js";import"./useFocusWithin-lydw_Auo.js";import"./Select.module-ca_-vi-M.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B0ADo2bb.js";import"./cancel_16-IH85jasE.js";import"./useStateWithPrev-BTEx74qr.js";import"./chevron_left_outline_20-BgIlB_0R.js";import"./Calendar-CRRfUxvI.js";import"./useEnsuredControl-BaJkbR4W.js";import"./Button-DKiHHryh.js";import"./FocusTrap-Ljy-TizN.js";import"./useMutationObserver-CPtolczk.js";import"./calendar_outline_20-Cb8snkBc.js";import"./clear_16-nD6jV4Ir.js";import"./Removable-rqcSgsVP.js";import"./useConfigDirection-EOrqXudq.js";import"./cancel_24-CjsEvKIV.js";import"./FormItemTopLabel-B8tD8fCl.js";import"./Subhead-Bec_-0uq.js";import"./UnstyledTextField-7sY2kYEY.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
