import{j as r}from"./iframe-CdM-7Hfu.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-C8RGLNCC.js";import{F as o}from"./FormItem-D09CEdBj.js";import{I as p}from"./Input-D6qbU-l6.js";import{S as c}from"./Select-BOxW3wgn.js";import{V as a}from"./VisuallyHidden-DydpD7lG.js";import{F as n}from"./FormLayoutGroup-B5HOXneu.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DOLr23ph.js";import"./useBooleanState-CoGSncbs.js";import"./useGlobalEventListener-BRj5_zmB.js";import"./useEventListener-qAbsiM6S.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DZehRJCc.js";import"./CalendarHeader-SAPmEQOa.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-DK6ahodC.js";import"./Clickable-B55EaeOQ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BMsEEBIJ.js";import"./Footnote-NEMh_4A6.js";import"./CustomSelect-C--NRx1n.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D6W5zn31.js";import"./children-CDGrqL8f.js";import"./dropdown_20-xwmBr5MW.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-f70gZTmR.js";import"./CustomSelectDropdown-D7q3L6Db.js";import"./CustomScrollView-BJVz8Z08.js";import"./Popper-CTSbYgY-.js";import"./useReferenceHiddenChangeCallback-a5Ub5Z76.js";import"./AppRootPortal-CwmZylQ9.js";import"./useColorScheme-Bgl1tdyG.js";import"./createPortal-DwlYohy5.js";import"./ColorSchemeProvider-BOMlpu1V.js";import"./ConfigProviderOverride-BX__wZpg.js";import"./FloatingArrow-_HqT_hN_.js";import"./usePlacementChangeCallback-DnaDcZAl.js";import"./floating-ui.react-dom-BSROouZA.js";import"./Spinner-CsDvRUz2.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CCzazBjF.js";import"./Paragraph-cSyBj7WU.js";import"./NativeSelect-DmkV-37q.js";import"./FormField-Dc0EY2Dw.js";import"./useFocusWithin-2TkfLAdf.js";import"./Select.module-C2LvGhwM.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CDyvGU-p.js";import"./cancel_16-C0t2DuYR.js";import"./useStateWithPrev-CFrunRcd.js";import"./chevron_left_outline_20-YQi-5BrD.js";import"./useEnsuredControl-CU7WNJSU.js";import"./Button-Wq0du0BJ.js";import"./FocusTrap-D-qlby6a.js";import"./useFocusTrap-Ba3RToQi.js";import"./useMutationObserver-CoczCU8j.js";import"./calendar_outline_20-Ycnh1fkY.js";import"./clear_16-B7cR-aCe.js";import"./Removable-Dspz5xzQ.js";import"./useConfigDirection-BPbTAtL3.js";import"./cancel_24-CxY6nUNi.js";import"./FormItemTopLabel-hL-q3fXC.js";import"./Subhead-BqjD9mjg.js";import"./UnstyledTextField-zTiJyYHf.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
