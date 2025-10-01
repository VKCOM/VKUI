import{j as r}from"./iframe-DJZLDe2v.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DFCviovU.js";import{F as o}from"./FormItem-CHGbR73-.js";import{I as p}from"./Input-D7v-iaWz.js";import{S as c}from"./Select-ZPgN2qSp.js";import{V as a}from"./VisuallyHidden-D0jMNSCO.js";import{F as n}from"./FormLayoutGroup-CHbZw8cf.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-CSyqh8vx.js";import"./useBooleanState-B-i-dwxP.js";import"./useGlobalEventListener-BxOtw4jo.js";import"./useEventListener-Ghw_nxPQ.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DjubU5_1.js";import"./CalendarHeader-B0F2SwRY.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-CY0nsltg.js";import"./Clickable-DJi6sM1Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CYWMeBJ6.js";import"./Footnote-D8Ch1fTG.js";import"./CustomSelect-CXM0rP-p.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-_1xQ3gYQ.js";import"./children-Dhk2DcjP.js";import"./dropdown_20-XMSN09VU.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-CEaQUyyy.js";import"./CustomSelectDropdown-DJ2a33B-.js";import"./CustomScrollView-D8SujhxZ.js";import"./Popper-D8p4fWFq.js";import"./useReferenceHiddenChangeCallback-BLBLca1c.js";import"./AppRootPortal-CbG6gCHO.js";import"./useColorScheme-DOPlqjNA.js";import"./createPortal-D4c259Iv.js";import"./ColorSchemeProvider-DhQPwwFm.js";import"./ConfigProviderOverride-CI0r-TE-.js";import"./FloatingArrow-D8cEO-Yg.js";import"./usePlacementChangeCallback-DPCse-sq.js";import"./floating-ui.react-dom-lakl85H9.js";import"./Spinner-BnPfDhY3.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DfCxAhCM.js";import"./Paragraph-G8d9aizT.js";import"./NativeSelect-BoA9RpWF.js";import"./FormField-Cnff4fSG.js";import"./useFocusWithin-BwFTxwKW.js";import"./Select.module-D06y7HCU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CMOFK_Ua.js";import"./cancel_16-Df48sQ_x.js";import"./useStateWithPrev-DSVTyTdW.js";import"./chevron_left_outline_20-DNA2miEA.js";import"./useEnsuredControl-Cp0sdS7L.js";import"./Button-owOpbUxM.js";import"./FocusTrap-CvsHEOgG.js";import"./useFocusTrap-BL1ox75A.js";import"./useMutationObserver-BeUwhe_m.js";import"./calendar_outline_20-mFrDkcnn.js";import"./clear_16-CndK8jYO.js";import"./Removable-q5QE-8nA.js";import"./useConfigDirection-Codxpgcm.js";import"./cancel_24-rN7d2YWh.js";import"./FormItemTopLabel-BjTnlKCI.js";import"./Subhead-DeeiPlYW.js";import"./UnstyledTextField-C0S1Y77P.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
