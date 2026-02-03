import{j as r}from"./iframe-C4ttrVUJ.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-eEHbtz7i.js";import{F as o}from"./FormItem-DuVU0EBm.js";import{I as p}from"./Input-ON_KScH5.js";import{S as c}from"./Select-Drh60Ngl.js";import{V as a}from"./VisuallyHidden-XgvirjGY.js";import{F as n}from"./FormLayoutGroup-1OlClzkB.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-C1Chlfxc.js";import"./useBooleanState--xz5fHoC.js";import"./useGlobalEventListener-2nmt2YdY.js";import"./useEventListener-BQB6QAnN.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-CslAqE99.js";import"./CalendarHeader-BDks_1IX.js";import"./useState-DqLBjAbD.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./Tappable-CL0fK4DO.js";import"./Clickable-B80alsah.js";import"./InputUtils-CD1Rp_t7.js";import"./Footnote-D7DVMFfP.js";import"./CustomSelect-C8Xx-RTj.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BrCV9u2Z.js";import"./children-DylyViM5.js";import"./dropdown_20-BmDKn9aW.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-B4YMPaHv.js";import"./CustomSelectDropdown-B-P-NVyL.js";import"./CustomScrollView-B97yUFEZ.js";import"./Popper-DFY7QZ5U.js";import"./useReferenceHiddenChangeCallback-BPKnqOos.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./FloatingArrow-DI1_-YRL.js";import"./usePlacementChangeCallback-DDIzKEgz.js";import"./floating-ui.react-dom-D2r8uzGZ.js";import"./Spinner-CeIULbGb.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D1g9JWHb.js";import"./Paragraph-C9fVSqiB.js";import"./NativeSelect-C8tAULOC.js";import"./FormField-FAL0-RE2.js";import"./useFocusWithin-BAJNppfT.js";import"./Select.module-By692CQ-.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B4UJc4kp.js";import"./cancel_16-jBKFguup.js";import"./useStateWithPrev-J6FKBV8D.js";import"./chevron_left_outline_20-BY_CTwIe.js";import"./useEnsuredControl-BbUIO2GP.js";import"./Button-BdBXuQJY.js";import"./FocusTrap-fpJxHih1.js";import"./useFocusTrap-DST2pyLb.js";import"./useMutationObserver-Ds6OyfWj.js";import"./calendar_outline_20-DZTiVgfr.js";import"./clear_16-BTFa43c4.js";import"./Removable-tI4hkoIu.js";import"./useConfigDirection-DvmYVNBa.js";import"./cancel_24-DD0i1EtC.js";import"./FormItemTopLabel-DeRKkLT4.js";import"./Subhead-ChzeQqTJ.js";import"./UnstyledTextField-CPafSolH.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
