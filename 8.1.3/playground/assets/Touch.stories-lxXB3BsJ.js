import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{n as i,t as a}from"./Touch-DRA-59rf.js";import{i as o,n as s,t as c}from"./constants-Dj6vOzIh.js";import{n as l,t as u}from"./createStoryParameters-pz1UrWMe.js";var d,f,p,m,h,g,_,v;t((()=>{d=e(n(),1),o(),l(),i(),f=r(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Utils/Touch`,component:a,args:{onClick:p(),onStart:p(),onMove:p(),onEnd:p(),onEndX:p(),onEndY:p()},parameters:u(`Touch`,{...c,cantered:!1,...s}),tags:[`Утилиты`]},h={width:40,height:40,borderRadius:`50%`,background:`var(--vkui--color_background_accent)`,position:`absolute`,left:`50%`,top:`50%`,marginLeft:-20,marginTop:-20},g={height:200,width:`50%`,border:`8px solid var(--vkui--color_icon_secondary)`,position:`relative`},_={render:function(e){let[t,n]=d.useState(0),[r,i]=d.useState(0),[o,s]=d.useState(0),[c,l]=d.useState(0),u=d.useRef(null),p=d.useRef(0),m=d.useRef(0);d.useLayoutEffect(()=>{u.current&&(s(u.current.offsetLeft),l(u.current.offsetTop))});let _=(e,t)=>e>t?t:e<-t?-t:e,v=e=>{let t=p.current+e.shiftX,r=m.current+e.shiftY;n(_(t,o)),i(_(r,c))},y=e=>{let t=p.current+e.shiftX,n=m.current+e.shiftY;p.current=_(t,o),m.current=_(n,c)},b=Math.abs(t)>=o||Math.abs(r)>=c;return(0,f.jsx)(`div`,{style:{...g,borderColor:b?`var(--vkui--color_icon_negative)`:`var(--vkui--color_icon_secondary)`},children:(0,f.jsx)(a,{...e,getRootRef:u,onMove:v,onEnd:y,style:{...h,transform:`translate(${t}px, ${r}px)`}})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
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
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,m as default};