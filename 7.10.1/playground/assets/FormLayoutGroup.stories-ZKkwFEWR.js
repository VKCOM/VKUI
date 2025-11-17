import{j as r}from"./iframe-DhuutAfC.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-C6ngrMHf.js";import{F as o}from"./FormItem-CYX1XfPE.js";import{I as p}from"./Input-D3upZWxR.js";import{S as c}from"./Select-D5rqLva6.js";import{V as a}from"./VisuallyHidden-BkhWnsJf.js";import{F as n}from"./FormLayoutGroup-qd4mRnJg.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-p8a0d4Gn.js";import"./useBooleanState-D-KuXqfN.js";import"./useGlobalEventListener-B3NjbVmX.js";import"./useEventListener-BINAhqZ-.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-B0ZEv_mk.js";import"./CalendarHeader-B53A4_UI.js";import"./useState-DoK0IZwP.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./Tappable-tvWVp5xX.js";import"./Clickable-CuiuPnoa.js";import"./InputUtils-BcFat9xH.js";import"./Footnote-BE0sRU6f.js";import"./CustomSelect-B-atdAbu.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CCNUlfU5.js";import"./children-f71tIclX.js";import"./dropdown_20-D5AgEBOZ.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-C3koUHhH.js";import"./CustomSelectDropdown-by8QAIg9.js";import"./CustomScrollView-LJROjlfk.js";import"./Popper--oSez6Jy.js";import"./useReferenceHiddenChangeCallback-C54G18M-.js";import"./AppRootPortal-BhnEIrq-.js";import"./useColorScheme-BGUvzePH.js";import"./createPortal-BLvM0w_F.js";import"./ColorSchemeProvider-DdceUlQQ.js";import"./ConfigProviderOverride-CpU6P7F6.js";import"./FloatingArrow-Cnm_pG-Z.js";import"./usePlacementChangeCallback-Dqqe6zNt.js";import"./floating-ui.react-dom-D_ZuLwN8.js";import"./Spinner-gmUVON3e.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DF1X0pu2.js";import"./Paragraph-DY0mKGfS.js";import"./NativeSelect-DGOES6Us.js";import"./FormField-a8bHx8UE.js";import"./useFocusWithin-TQRavq7I.js";import"./Select.module-CW-OjDQs.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CS1h91J8.js";import"./cancel_16-B_c_nEwm.js";import"./useStateWithPrev-BKsbmWzi.js";import"./chevron_left_outline_20-BFW3SHD3.js";import"./useEnsuredControl-BpH5tC17.js";import"./Button-Id7-fKaz.js";import"./FocusTrap-Cntepomh.js";import"./useFocusTrap-CdCdrgV_.js";import"./useMutationObserver-9Zmysq9a.js";import"./calendar_outline_20-B33-Prpl.js";import"./clear_16-CKgm9LeN.js";import"./Removable-WF0wvkrR.js";import"./useConfigDirection-BKOpe2-3.js";import"./cancel_24-DOIBb5nA.js";import"./FormItemTopLabel-BMO1L17I.js";import"./Subhead-N3Y6Abab.js";import"./UnstyledTextField-D0QkvVah.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
