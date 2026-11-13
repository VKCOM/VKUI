import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./Button-yY8YdDAN.js";import{n as s,t as c}from"./Popper-B2WVxyRm.js";import{n as l,t as u}from"./Div-BhqBVe7n.js";import{i as d,n as f,t as p}from"./constants-BWBR8eWE.js";import{n as m,t as h}from"./createStoryParameters-D_aKMzVl.js";var g=n({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x;function S(){return(S=t((()=>{_=e(r(),1),d(),m(),a(),l(),s(),v=i(),y={title:`Modals/Popper`,component:c,parameters:h(`Popper`,p,f),tags:[`Модальные окна`]},b=e=>{let[t,n]=_.useState(e.shown||!1),r=_.useRef(null);return(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(o,{getRootRef:r,onClick:()=>n(!t),children:t?`Закрыть`:`Открыть`}),t&&(0,v.jsx)(c,{usePortal:!1,offsetByMainAxis:8,...e,targetRef:r,children:(0,v.jsx)(u,{children:`Привет`})})]})},x=[`Playground`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: PopperProps) => {
  const [shown, setShown] = React.useState(args.shown || false);
  const buttonRef = React.useRef(null);
  return <React.Fragment>
      <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>
        {shown ? 'Закрыть' : 'Открыть'}
      </Button>
      {shown && <Popper usePortal={false} offsetByMainAxis={8} {...args} targetRef={buttonRef}>
          <Div>Привет</Div>
        </Popper>}
    </React.Fragment>;
}`,...b.parameters?.docs?.source}}}})))()}export{g as n,S as r,b as t};