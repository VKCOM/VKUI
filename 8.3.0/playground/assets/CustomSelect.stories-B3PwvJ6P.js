import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./FormItem-DNDkxS86.js";import{n as o,t as s}from"./CustomSelect-NHnCij1Q.js";import{i as c,n as l,t as u}from"./constants-cjed6ZWB.js";import{n as d,t as f}from"./createStoryParameters-CMHckkzt.js";import{t as p}from"./getFormFieldIconsPresets-B8kMNs0t.js";import{t as m}from"./presets-DjlSDDI2.js";import{o as h,t as g}from"./mock-K9LjXOLX.js";var _,v,y,b,x,S,C;e((()=>{_=t(n(),1),c(),h(),m(),d(),i(),o(),v=t(r(),1),{fn:y}=__STORYBOOK_MODULE_TEST__,b=p(),x={title:`Forms/CustomSelect`,component:s,parameters:f(`CustomSelect`,u,l),args:{onOpen:y(),onClose:y()},argTypes:{before:b},tags:[`Формы и поля ввода`]},S=e=>{let[t,n]=(0,_.useState)(null);return(0,v.jsx)(a,{top:`Выберите город`,htmlFor:`custom-select`,style:{width:320},children:(0,v.jsx)(s,{...e,value:t,onChange:(e,t)=>n(t),slotProps:{input:{id:`custom-select`,"aria-label":`Выберите город`}}})})},S.args={style:{width:300},placeholder:`Город`,options:g},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
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
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};