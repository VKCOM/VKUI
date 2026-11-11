import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./FormItem-Dk4KiD2Q.js";import{n as a,t as o}from"./CustomSelect-Da0GdUxF.js";import{i as s,n as c,t as l}from"./constants-BWBR8eWE.js";import{n as u,t as d}from"./createStoryParameters-D_aKMzVl.js";import{n as f,t as p}from"./getFormFieldIconsPresets-DY92Nsk_.js";import{o as m,t as h}from"./mock-gn_3WRVn.js";var g,_,v,y,b,x,S;function C(){return(C=e((()=>{g=t(),s(),m(),f(),u(),r(),a(),_=n(),{fn:v}=__STORYBOOK_MODULE_TEST__,y=p(),b={title:`Forms/CustomSelect`,component:o,parameters:d(`CustomSelect`,l,c),args:{onOpen:v(),onClose:v()},argTypes:{before:y},tags:[`Формы и поля ввода`]},x=e=>{let[t,n]=(0,g.useState)(null);return(0,_.jsx)(i,{top:`Выберите город`,htmlFor:`custom-select`,style:{width:320},children:(0,_.jsx)(o,{...e,value:t,onChange:(e,t)=>n(t),slotProps:{input:{id:`custom-select`,"aria-label":`Выберите город`}}})})},x.args={style:{width:300},placeholder:`Город`,options:h},S=[`Playground`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Playground,S as __namedExportsOrder,b as default};