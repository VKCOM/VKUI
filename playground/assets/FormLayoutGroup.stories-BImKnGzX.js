import{j as r}from"./iframe-CJSxyW9U.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DdKO7S5K.js";import{F as o}from"./FormItem-BhvbLOaH.js";import{I as p}from"./Input-ZWJUevST.js";import{S as c}from"./Select-DRIyL68s.js";import{V as a}from"./VisuallyHidden-BRZ1JlNp.js";import{F as n}from"./FormLayoutGroup-DHDDf3HK.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-D1ecsWee.js";import"./useBooleanState-CkcwTMgJ.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-Ctvb27ds.js";import"./CalendarHeader-Dt0WtSan.js";import"./useState-Cf9zElDT.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./Tappable-B_lgqKnQ.js";import"./Clickable-C7Hv1Vzv.js";import"./InputUtils-CQXgm4mM.js";import"./Footnote-PeEhUyBm.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-CcafMIlj.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-AJYC2Ld6.js";import"./children-B_vv-93P.js";import"./dropdown_20-a3g49EXu.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-IL4Ee17g.js";import"./CustomSelectDropdown-B80ubdsN.js";import"./CustomScrollView-CoMoGALI.js";import"./Popper-CILUD6SC.js";import"./useReferenceHiddenChangeCallback-D1-xpaTE.js";import"./AppRootPortal-DnnFjexz.js";import"./useColorScheme-cIrBBNZn.js";import"./createPortal-BAw7aojS.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-COmjjYbo.js";import"./ConfigProviderOverride-CF8gkful.js";import"./FloatingArrow-D3RfVyEp.js";import"./usePlacementChangeCallback-CcbRo2C7.js";import"./floating-ui.react-dom-DgoDJi3n.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-BlbUmBeW.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DazM5ro7.js";import"./Paragraph-Drw97mgp.js";import"./NativeSelect-CCc1W4C8.js";import"./FormField-C1QoIvTb.js";import"./useFocusWithin-B6ZQto83.js";import"./Select.module-C8eYQrh0.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DlIx3m79.js";import"./cancel_16-oWyxmFnc.js";import"./useStateWithPrev-DFqPg5SA.js";import"./chevron_left_outline_20-Nu9zVYtc.js";import"./Calendar-DtJeej2d.js";import"./useEnsuredControl-DVOSKHBB.js";import"./Button-BC2c2Xtj.js";import"./FocusTrap-BY7eisJ4.js";import"./useMutationObserver-BVn6sRWr.js";import"./calendar_outline_20-bCaT4xjS.js";import"./clear_16-BNhH-lhb.js";import"./Removable-Cn8iqEd1.js";import"./useConfigDirection-C3cHGESc.js";import"./cancel_24-DiZsY-MY.js";import"./FormItemTopLabel-BU0T7Ab0.js";import"./Subhead-B39S2HHi.js";import"./UnstyledTextField-BmjWkuxm.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
