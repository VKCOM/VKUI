import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,t as a}from"./constants-BWBR8eWE.js";import{n as o,t as s}from"./createStoryParameters-D_aKMzVl.js";import{n as c,t as l}from"./getFormFieldIconsPresets-zZBPHn-D.js";import{o as u,t as d}from"./mock-gn_3WRVn.js";import{n as f,t as p}from"./CustomSelect-kbc5wO5t.js";import{n as m,t as h}from"./FormItem--X1L6eoH.js";var g,_,v,y,b,x,S;function C(){return(C=e((()=>{g=t(),r(),u(),c(),o(),m(),f(),_=n(),{fn:v}=__STORYBOOK_MODULE_TEST__,y=l(),b={title:`Forms/CustomSelect`,component:p,parameters:s(`CustomSelect`,a,i),args:{onOpen:v(),onClose:v()},argTypes:{before:y},tags:[`Формы и поля ввода`]},x=e=>{let[t,n]=(0,g.useState)(null);return(0,_.jsx)(h,{top:`Выберите город`,htmlFor:`custom-select`,style:{width:320},children:(0,_.jsx)(p,{...e,value:t,onChange:(e,t)=>n(t),slotProps:{input:{id:`custom-select`,"aria-label":`Выберите город`}}})})},x.args={style:{width:300},placeholder:`Город`,options:d},S=[`Playground`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
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