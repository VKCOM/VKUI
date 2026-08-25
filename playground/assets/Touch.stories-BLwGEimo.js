import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Touch-vTemVy3l.js";import{i as o,n as s,t as c}from"./constants-DBkyy3CT.js";import{n as l,t as u}from"./createStoryParameters-DBkK1CfQ.js";var d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{d=e(n(),1),o(),l(),i(),f=r(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={width:40,height:40,borderRadius:`50%`,background:`var(--vkui--color_background_accent)`,position:`absolute`,left:`50%`,top:`50%`,marginLeft:-20,marginTop:-20},h={height:200,width:`50%`,border:`8px solid var(--vkui--color_icon_secondary)`,position:`relative`},g={title:`Utils/Touch`,component:a,args:{onClick:p(),onStart:p(),onMove:p(),onEnd:p(),onEndX:p(),onEndY:p()},parameters:u(`Touch`,{...c,cantered:!1,...s,liveCodeEditor:{scope:{circleStyle:m,containerStyle:h}}}),tags:[`Утилиты`]},_=e=>{let[t,n]=d.useState(0),[r,i]=d.useState(0),[o,s]=d.useState(0),[c,l]=d.useState(0),u=d.useRef(null),p=d.useRef(0),g=d.useRef(0);d.useLayoutEffect(()=>{u.current&&(s(u.current.offsetLeft),l(u.current.offsetTop))});let _=(e,t)=>e>t?t:e<-t?-t:e,v=e=>{let t=p.current+e.shiftX,r=g.current+e.shiftY;n(_(t,o)),i(_(r,c))},y=e=>{let t=p.current+e.shiftX,n=g.current+e.shiftY;p.current=_(t,o),g.current=_(n,c)},b=Math.abs(t)>=o||Math.abs(r)>=c;return(0,f.jsx)(`div`,{style:{...h,borderColor:b?`var(--vkui--color_icon_negative)`:`var(--vkui--color_icon_secondary)`},children:(0,f.jsx)(a,{...e,getRootRef:u,onMove:v,onEnd:y,style:{...m,transform:`translate(${t}px, ${r}px)`}})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: TouchProps) => {
  const [shiftX, setShiftX] = React.useState(0);
  const [shiftY, setShiftY] = React.useState(0);
  const [limitX, setLimitX] = React.useState(0);
  const [limitY, setLimitY] = React.useState(0);
  const circleRef = React.useRef<HTMLDivElement | null>(null);
  const startX = React.useRef(0);
  const startY = React.useRef(0);

  // eslint-disable-next-line no-restricted-properties,react-hooks/exhaustive-deps,no-restricted-properties
  React.useLayoutEffect(() => {
    if (circleRef.current) {
      setLimitX(circleRef.current.offsetLeft);
      setLimitY(circleRef.current.offsetTop);
    }
  });
  const getValueWithLimit = (value: number, limit: number) => {
    return value > limit ? limit : value < -limit ? -limit : value;
  };
  const onMove = (e: CustomTouchEvent) => {
    const shiftX = startX.current + e.shiftX;
    const shiftY = startY.current + e.shiftY;
    setShiftX(getValueWithLimit(shiftX, limitX));
    setShiftY(getValueWithLimit(shiftY, limitY));
  };
  const onEnd = (e: CustomTouchEvent) => {
    const shiftX = startX.current + e.shiftX;
    const shiftY = startY.current + e.shiftY;
    startX.current = getValueWithLimit(shiftX, limitX);
    startY.current = getValueWithLimit(shiftY, limitY);
  };
  const limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;
  return <div style={{
    ...containerStyle,
    borderColor: limitExceeded ? 'var(--vkui--color_icon_negative)' : 'var(--vkui--color_icon_secondary)'
  }}>
      <Touch {...args} getRootRef={circleRef} onMove={onMove} onEnd={onEnd} style={{
      ...circleStyle,
      transform: \`translate(\${shiftX}px, \${shiftY}px)\`
    }} />
    </div>;
}`,..._.parameters?.docs?.source}}},v=[`Playground`]})))()}y();export{_ as Playground,v as __namedExportsOrder,g as default};