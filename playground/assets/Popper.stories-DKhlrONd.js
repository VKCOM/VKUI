import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{n as a,t as o}from"./Button-DxjiUwvt.js";import{n as s,t as c}from"./Popper-CW51vZ4F.js";import{n as l,t as u}from"./Div-Cd0q8MDi.js";import{i as d,n as f,t as p}from"./constants-cjed6ZWB.js";import{n as m,t as h}from"./createStoryParameters-CMHckkzt.js";var g=e({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=t((()=>{_=n(r(),1),d(),m(),a(),l(),s(),v=n(i(),1),y={title:`Modals/Popper`,component:c,parameters:h(`Popper`,p,f),tags:[`Модальные окна`]},b=e=>{let[t,n]=_.useState(e.shown||!1),r=_.useRef(null);return(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(o,{getRootRef:r,onClick:()=>n(!t),children:t?`Закрыть`:`Открыть`}),t&&(0,v.jsx)(c,{usePortal:!1,offsetByMainAxis:8,...e,targetRef:r,children:(0,v.jsx)(u,{children:`Привет`})})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: PopperProps) => {
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}));export{g as n,S as r,b as t};