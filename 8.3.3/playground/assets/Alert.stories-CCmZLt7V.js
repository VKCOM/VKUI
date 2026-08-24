import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{n as a,t as o}from"./Button-gdv6tQ0K.js";import{n as s,t as c}from"./Alert-Cwl1BSqg.js";import{n as l,t as u}from"./Placeholder-B3WCn6mG.js";import{i as d,n as f,t as p}from"./constants-cjed6ZWB.js";import{n as m,t as h}from"./createStoryParameters-CMHckkzt.js";var g=e({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=t((()=>{_=n(r(),1),d(),m(),a(),l(),s(),v=n(i(),1),y={title:`Feedback/Alert`,component:c,parameters:h(`Alert`,p,f),tags:[`Обратная связь`]},b=e=>{let[t,n]=_.useState(!0);return(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(u,{stretched:!0,children:(0,v.jsx)(o,{onClick:()=>n(!0),children:`Открыть`})}),t?(0,v.jsx)(c,{...e,onClosed:()=>n(!1)}):null]})},b.args={actions:[{title:`Отмена`,mode:`cancel`},{title:`Удалить`,mode:`destructive`}],actionsLayout:`horizontal`,dismissLabel:`Отмена`,title:`Удаление документа`,description:`Вы уверены, что хотите удалить этот документ?`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: AlertProps) => {
  const [visible, setVisible] = React.useState(true);
  return <React.Fragment>
      <Placeholder stretched>
        <Button onClick={() => setVisible(true)}>Открыть</Button>
      </Placeholder>
      {visible ? <Alert {...args} onClosed={() => setVisible(false)} /> : null}
    </React.Fragment>;
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}));export{b as n,S as r,g as t};