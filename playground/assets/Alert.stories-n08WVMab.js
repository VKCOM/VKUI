import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./Button-yY8YdDAN.js";import{n as s,t as c}from"./Alert-jDwZpPdG.js";import{n as l,t as u}from"./Placeholder-YPn2du7i.js";import{i as d,n as f,t as p}from"./constants-BWBR8eWE.js";import{n as m,t as h}from"./createStoryParameters-D_aKMzVl.js";var g=n({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x;function S(){return(S=t((()=>{_=e(r(),1),d(),m(),a(),l(),s(),v=i(),y={title:`Feedback/Alert`,component:c,parameters:h(`Alert`,p,f),tags:[`Обратная связь`]},b=e=>{let[t,n]=_.useState(!0);return(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(u,{stretched:!0,children:(0,v.jsx)(o,{onClick:()=>n(!0),children:`Открыть`})}),t?(0,v.jsx)(c,{...e,onClosed:()=>n(!1)}):null]})},b.args={actions:[{title:`Отмена`,mode:`cancel`},{title:`Удалить`,mode:`destructive`}],actionsLayout:`horizontal`,dismissLabel:`Отмена`,title:`Удаление документа`,description:`Вы уверены, что хотите удалить этот документ?`},x=[`Playground`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: AlertProps) => {
  const [visible, setVisible] = React.useState(true);
  return <React.Fragment>
      <Placeholder stretched>
        <Button onClick={() => setVisible(true)}>Открыть</Button>
      </Placeholder>
      {visible ? <Alert {...args} onClosed={() => setVisible(false)} /> : null}
    </React.Fragment>;
}`,...b.parameters?.docs?.source}}}})))()}export{b as n,S as r,g as t};