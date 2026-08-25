import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./FormItem-B7byku12.js";import{n as a,t as o}from"./CustomSelect-dh8FxlMC.js";import{i as s,n as c,t as l}from"./constants-DBkyy3CT.js";import{n as u,t as d}from"./createStoryParameters-DBkK1CfQ.js";import{n as f,t as p}from"./getFormFieldIconsPresets-DFFIGRdP.js";import{o as m,t as h}from"./mock-CkzEkxhs.js";var g,_,v,y,b,x,S;function C(){return(C=e((()=>{g=t(),s(),m(),f(),u(),r(),a(),_=n(),{fn:v}=__STORYBOOK_MODULE_TEST__,y=p(),b={title:`Forms/CustomSelect`,component:o,parameters:d(`CustomSelect`,l,c),args:{onOpen:v(),onClose:v()},argTypes:{before:y},tags:[`Формы и поля ввода`]},x=e=>{let[t,n]=(0,g.useState)(null);return(0,_.jsx)(i,{top:`Выберите город`,htmlFor:`custom-select`,style:{width:320},children:(0,_.jsx)(o,{...e,value:t,onChange:(e,t)=>n(t),slotProps:{input:{id:`custom-select`,"aria-label":`Выберите город`}}})})},x.args={style:{width:300},placeholder:`Город`,options:h},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
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
}`,...x.parameters?.docs?.source}}},S=[`Playground`]})))()}C();export{x as Playground,S as __namedExportsOrder,b as default};