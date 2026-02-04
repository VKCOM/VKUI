import{j as r}from"./iframe-CDzsgUJ6.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DUGu2yFW.js";import{F as o}from"./FormItem-Pobv0zL5.js";import{I as p}from"./Input-Rxyq983j.js";import{S as c}from"./Select-Cg2gqSyu.js";import{V as a}from"./VisuallyHidden-hrbUbT1W.js";import{F as n}from"./FormLayoutGroup-BPIrR_wU.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DW7Gieqh.js";import"./useBooleanState-CnmcT8ct.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-BcOQOr64.js";import"./CalendarHeader-BlQ0OfUz.js";import"./useState-QDdZr02K.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./Tappable-BF8rCM_k.js";import"./Clickable-Dfoj99Ww.js";import"./InputUtils-DkBsdccT.js";import"./Footnote-EhoXcm5o.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-B5gSAL-X.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DDTBL4u2.js";import"./children-__GeZXUq.js";import"./dropdown_20-m9cospeT.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DjQaueWG.js";import"./CustomSelectDropdown-DUsHfkV7.js";import"./CustomScrollView-CzqE7nP0.js";import"./Popper-DWLVFobm.js";import"./useReferenceHiddenChangeCallback-CY63qTPH.js";import"./AppRootPortal-CCVAQZe-.js";import"./useColorScheme-BJ9q12Ap.js";import"./createPortal-CVhd8q9v.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DTaIndt4.js";import"./ConfigProviderOverride-CcLe0DKj.js";import"./FloatingArrow-DUrMOVGb.js";import"./usePlacementChangeCallback-Bsdm3Pu3.js";import"./floating-ui.react-dom-B9MYDRsG.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-D6Csl20o.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-yYAiYeUv.js";import"./Paragraph-le0T_6Gv.js";import"./NativeSelect-B4rCAioC.js";import"./FormField-BNZ78smL.js";import"./useFocusWithin-UKmiu0Co.js";import"./Select.module-DLQY8KpU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DmVT1v_5.js";import"./cancel_16-BlaGgBnb.js";import"./useStateWithPrev-C_uAPEx8.js";import"./chevron_left_outline_20-Bp5lQnXu.js";import"./Calendar-zD9_ZRdC.js";import"./useEnsuredControl-DK0f39Al.js";import"./Button-DrWhGNV0.js";import"./FocusTrap-CkAGPt26.js";import"./useMutationObserver-BHxydzuf.js";import"./calendar_outline_20-DXDU1IFL.js";import"./clear_16-QsHFcIy7.js";import"./Removable-DwrvQD9J.js";import"./useConfigDirection-BVbAx_rU.js";import"./cancel_24-D42vZ9MX.js";import"./FormItemTopLabel-6qODUK9b.js";import"./Subhead-BNbydgjR.js";import"./UnstyledTextField-D2LRgDHE.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
