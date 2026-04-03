import{a as e,n as t}from"./chunk-BneVvdWh.js";import{ps as n,yo as r}from"./iframe-DYi3TMGx.js";import{n as i,t as a}from"./FormItem-BGRxBCRh.js";import{n as o,t as s}from"./CustomSelect-U4AxZvDt.js";import{i as c,n as l,t as u}from"./constants-DdtDghDm.js";import{n as d,t as f}from"./createStoryParameters-cWWuDqBQ.js";import{t as p}from"./getFormFieldIconsPresets-BgIOvu4r.js";import{t as m}from"./presets-bFIDTl1z.js";import{o as h,t as g}from"./mock-B_w95Aq1.js";var _,v,y,b,x,S,C;t((()=>{_=e(n(),1),c(),h(),m(),d(),i(),o(),v=r(),{fn:y}=__STORYBOOK_MODULE_TEST__,b=p(),x={title:`Forms/CustomSelect`,component:s,parameters:f(`CustomSelect`,u,l),args:{onOpen:y(),onClose:y()},argTypes:{before:b},tags:[`Формы и поля ввода`]},S={render:function(e){let[t,n]=(0,_.useState)(null);return(0,v.jsx)(a,{top:`Выберите город`,htmlFor:`custom-select`,style:{width:320},children:(0,v.jsx)(s,{...e,value:t,onChange:(e,t)=>n(t),slotProps:{input:{id:`custom-select`,"aria-label":`Выберите город`}}})})},args:{style:{width:300},placeholder:`Город`,options:g}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState<SelectProps['value']>(null);
    return <FormItem top="Выберите город" htmlFor="custom-select" style={{
      width: 320
    }}>
        <CustomSelect {...args} value={value} onChange={(_, newValue) => setValue(newValue)} slotProps={{
        input: {
          'id': 'custom-select',
          'aria-label': 'Выберите город'
        }
      }} />
      </FormItem>;
  },
  args: {
    style: {
      width: 300
    },
    placeholder: 'Город',
    options: cities
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};