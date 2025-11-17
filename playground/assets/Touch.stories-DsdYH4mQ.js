import{O as Y,r as n,j as d}from"./iframe-DhuutAfC.js";import{D as _,C as y}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import"./preload-helper-PPVm8Dsz.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,W={title:"Utils/Touch",component:Y,args:{onClick:s(),onStart:s(),onMove:s(),onEnd:s(),onEndX:s(),onEndY:s()},parameters:x("Touch",{...y,cantered:!1,..._}),tags:["Утилиты"]},b={width:40,height:40,borderRadius:"50%",background:"var(--vkui--color_background_accent)",position:"absolute",left:"50%",top:"50%",marginLeft:-20,marginTop:-20},T={height:200,width:"50%",border:"8px solid var(--vkui--color_icon_secondary)",position:"relative"},o={render:function(X){const[h,p]=n.useState(0),[m,v]=n.useState(0),[c,R]=n.useState(0),[a,g]=n.useState(0),r=n.useRef(null),u=n.useRef(0),f=n.useRef(0);n.useLayoutEffect(()=>{r.current&&(R(r.current.offsetLeft),g(r.current.offsetTop))});const i=(t,e)=>t>e?e:t<-e?-e:t,S=t=>{const e=u.current+t.shiftX,l=f.current+t.shiftY;p(i(e,c)),v(i(l,a))},E=t=>{const e=u.current+t.shiftX,l=f.current+t.shiftY;u.current=i(e,c),f.current=i(l,a)},L=Math.abs(h)>=c||Math.abs(m)>=a;return d.jsx("div",{style:{...T,borderColor:L?"var(--vkui--color_icon_negative)":"var(--vkui--color_icon_secondary)"},children:d.jsx(Y,{...X,getRootRef:r,onMove:S,onEnd:E,style:{...b,transform:`translate(${h}px, ${m}px)`}})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Playground"];export{o as Playground,j as __namedExportsOrder,W as default};
