import{j as r}from"./iframe-BJ9555aC.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DdqV3UXr.js";import{F as o}from"./FormItem-B4zv-4AF.js";import{I as p}from"./Input-BYL3n8Xu.js";import{S as c}from"./Select-C34WKqQx.js";import{V as a}from"./VisuallyHidden-BpRJPd7L.js";import{F as n}from"./FormLayoutGroup-DdsEA1cf.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-CADWchg3.js";import"./useBooleanState-BYJEPe49.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-CXkiU7ri.js";import"./CalendarHeader-CFpGUA92.js";import"./useState-ernR_nsp.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./Tappable-Bz7LtOMO.js";import"./Clickable-BL1AyP3s.js";import"./InputUtils-8LhFcqKY.js";import"./Footnote-xxqNAETB.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-D5JbKYX_.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-_KDqP4gW.js";import"./children-CFPqwV5J.js";import"./dropdown_20-DyA2EYYB.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-CRtNUENt.js";import"./CustomSelectDropdown-i-AfigEh.js";import"./CustomScrollView-kMAABzAe.js";import"./Popper-BhaeA0Qs.js";import"./useReferenceHiddenChangeCallback-DY7Th_c3.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./FloatingArrow-C4JFmSBi.js";import"./usePlacementChangeCallback-BKmBlkkK.js";import"./floating-ui.react-dom-DIn9Ikqa.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-BAbpEHx_.js";import"./Paragraph-Cp7CvK2x.js";import"./NativeSelect-ByWiiYIv.js";import"./FormField-DvQPBwxb.js";import"./useFocusWithin-ClOWbdUU.js";import"./Select.module-DhR9NBbI.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DRWEpqxT.js";import"./cancel_16-DW-e6Ezq.js";import"./useStateWithPrev-BGjF88uR.js";import"./chevron_left_outline_20-CfdM4DXq.js";import"./Calendar-2ygU7b5F.js";import"./useEnsuredControl-3-CGTCCX.js";import"./Button-BbA_I1es.js";import"./FocusTrap-Qs6H907S.js";import"./useMutationObserver-B_zcWFq6.js";import"./calendar_outline_20-DdiGmzof.js";import"./clear_16-C-_Bi6US.js";import"./Removable-wWHIROGY.js";import"./useConfigDirection-BeEtg5OO.js";import"./cancel_24-jJgAHgAr.js";import"./FormItemTopLabel-ptiBoJQC.js";import"./Subhead-ppzL9p3g.js";import"./UnstyledTextField-BrHZgtPt.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
