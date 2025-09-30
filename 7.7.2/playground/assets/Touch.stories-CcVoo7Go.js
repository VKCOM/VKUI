import{N as v,r as n,j as d}from"./iframe-qoTtUH8h.js";import{D as b,C as T}from"./constants-DdkjnEgz.js";import{c as M}from"./createStoryParameters-CcwS40kl.js";import"./preload-helper-Dp1pzeXC.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,P={title:"Utils/Touch",component:v,args:{onClick:s(),onStart:s(),onMove:s(),onEnd:s(),onEndX:s(),onEndY:s()},parameters:M("Touch",{...T,cantered:!1,...b}),tags:["Утилиты"]},k={width:40,height:40,borderRadius:"50%",background:"var(--vkui--color_background_accent)",position:"absolute",left:"50%",top:"50%",marginLeft:-20,marginTop:-20},C={height:200,width:"50%",border:"8px solid var(--vkui--color_icon_secondary)",position:"relative"},o={render:function(R){const[h,g]=n.useState(0),[m,S]=n.useState(0),[c,E]=n.useState(0),[a,L]=n.useState(0),r=n.useRef(null),u=n.useRef(0),f=n.useRef(0);n.useLayoutEffect(()=>{r.current&&(E(r.current.offsetLeft),L(r.current.offsetTop))});const i=(t,e)=>t>e?e:t<-e?-e:t,_=t=>{const e=u.current+t.shiftX,l=f.current+t.shiftY;g(i(e,c)),S(i(l,a))},y=t=>{const e=u.current+t.shiftX,l=f.current+t.shiftY;u.current=i(e,c),f.current=i(l,a)},x=Math.abs(h)>=c||Math.abs(m)>=a;return d.jsx("div",{style:{...C,borderColor:x?"var(--vkui--color_icon_negative)":"var(--vkui--color_icon_secondary)"},children:d.jsx(v,{...R,getRootRef:r,onMove:_,onEnd:y,style:{...k,transform:`translate(${h}px, ${m}px)`}})})}};var Y,X,p;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(p=(X=o.parameters)==null?void 0:X.docs)==null?void 0:p.source}}};const $=["Playground"];export{o as Playground,$ as __namedExportsOrder,P as default};
