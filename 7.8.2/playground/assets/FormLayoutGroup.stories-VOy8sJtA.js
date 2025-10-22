import{j as r}from"./iframe-DvQ0hW0I.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-BQHh1oIH.js";import{F as o}from"./FormItem-C5zTkEQQ.js";import{I as p}from"./Input-GdcltOHR.js";import{S as c}from"./Select-eCgxazb1.js";import{V as a}from"./VisuallyHidden-CGlAvVNH.js";import{F as n}from"./FormLayoutGroup-DQ3c3jjl.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-lknkxeGY.js";import"./useBooleanState-Dgn4KllC.js";import"./useGlobalEventListener-Cq3tChGi.js";import"./useEventListener-BWoYhQmZ.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-CqhTorlW.js";import"./CalendarHeader-DDsND2oN.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-CzBKs2NQ.js";import"./Clickable-CBovrC6X.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./Footnote-DYSqrBFj.js";import"./CustomSelect-BSp1nyxX.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CFJxO54x.js";import"./children-BdLlg6DR.js";import"./dropdown_20-CQqEaMvC.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-D5XC5yKX.js";import"./CustomSelectDropdown-DkMEia6f.js";import"./CustomScrollView-DE6eWhG6.js";import"./Popper-uYwlu0xB.js";import"./useReferenceHiddenChangeCallback-DyVC-Pyk.js";import"./AppRootPortal-CoRG5RWu.js";import"./useColorScheme-Du5ZuGtY.js";import"./createPortal-BtQKhO30.js";import"./ColorSchemeProvider-DIg3ehzA.js";import"./ConfigProviderOverride-5F9Q0adn.js";import"./FloatingArrow-nqFcSJUy.js";import"./usePlacementChangeCallback-CCMY9emW.js";import"./floating-ui.react-dom-ST0J1v4u.js";import"./Spinner-CAlwHhMu.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Ddz7Vfse.js";import"./Paragraph-R3cad3zP.js";import"./NativeSelect-hb-NqpRf.js";import"./FormField-C5R4IHoT.js";import"./useFocusWithin-C0XX_iqt.js";import"./Select.module-Bm8talgv.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Dmx4oOAb.js";import"./cancel_16-BarEFL_7.js";import"./useStateWithPrev-DauWq6Az.js";import"./chevron_left_outline_20-BP5SLsjC.js";import"./useEnsuredControl-CswA9P61.js";import"./Button-DPGaTllJ.js";import"./FocusTrap-CDqAhor2.js";import"./useFocusTrap-DkPh3l3Y.js";import"./useMutationObserver-6Z5Jiq8c.js";import"./calendar_outline_20-1ZZgMDOL.js";import"./clear_16-BOrkJtEo.js";import"./Removable-B6FxApdQ.js";import"./useConfigDirection-DmTY1Se6.js";import"./cancel_24-BcD8qa0A.js";import"./FormItemTopLabel-bElxnhmd.js";import"./Subhead-DE0FovKO.js";import"./UnstyledTextField-DNG8pGli.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
