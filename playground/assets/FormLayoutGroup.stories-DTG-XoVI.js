import{j as r}from"./iframe-CGSrC79H.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-tbKXpoXg.js";import{F as o}from"./FormItem-6r74lcrV.js";import{I as p}from"./Input-DgmEvpxl.js";import{S as c}from"./Select-BDx8SxkQ.js";import{V as a}from"./VisuallyHidden-Cv__RMJJ.js";import{F as n}from"./FormLayoutGroup-F8LZq6_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DGIEJF-j.js";import"./useBooleanState-BkBFPaFP.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BqiwFCZg.js";import"./CalendarHeader-VsKo-Tpi.js";import"./useState-DzaGsmJ4.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./Tappable-HtqfSGDW.js";import"./Clickable-DvGk0QGJ.js";import"./InputUtils-AL_dRhAR.js";import"./Footnote-9-fttdTG.js";import"./CustomSelect-CdNt_4m7.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CBX_pcLT.js";import"./children-C-hCqQRI.js";import"./dropdown_20-DdgqA2FX.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DNC5aBg8.js";import"./CustomSelectDropdown-BHVzRpO-.js";import"./CustomScrollView-ClAxltNi.js";import"./Popper-BXCfD9qH.js";import"./useReferenceHiddenChangeCallback-BEYGsRvY.js";import"./AppRootPortal-D8fiuoF8.js";import"./useColorScheme-DM7MWYfE.js";import"./createPortal-CrUV0Jad.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-zZt_kTkY.js";import"./ConfigProviderOverride-DO-HeAeb.js";import"./FloatingArrow-DPBTaDMU.js";import"./usePlacementChangeCallback-C_EKg3Ob.js";import"./floating-ui.react-dom-C7nxf647.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-YXDM9fUX.js";import"./Paragraph-MD0IQtl5.js";import"./NativeSelect-DgoKDWkN.js";import"./FormField-CQtfDQHY.js";import"./useFocusWithin-Bqhwx3UJ.js";import"./Select.module-Bmdgm75C.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Bq_FXaCp.js";import"./cancel_16--_Pgj7hA.js";import"./useStateWithPrev-DYD-gkn1.js";import"./chevron_left_outline_20-CVNV5cAz.js";import"./useEnsuredControl-AiFtRieF.js";import"./Button-JZGl9x8f.js";import"./FocusTrap-CmZUL0KU.js";import"./useFocusTrap-DV1LSCZk.js";import"./useMutationObserver-DQTeLLG8.js";import"./calendar_outline_20-CwX0NJDg.js";import"./clear_16-BR3jMMf4.js";import"./Removable-D5hMMeds.js";import"./useConfigDirection-BDt5-3HT.js";import"./cancel_24-CsoSQ93Z.js";import"./FormItemTopLabel-CC7v0Qo2.js";import"./Subhead-BDUGOuQB.js";import"./UnstyledTextField-BAS9V7K_.js";const Gr={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const _r=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,_r as __namedExportsOrder,Gr as default};
