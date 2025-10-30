import{j as o,h as u}from"./iframe-CjlHPZNU.js";import{D as m,C as g}from"./constants-DdkjnEgz.js";import{u as l}from"./useCSSTransition-DqEcwnov.js";import"./preload-helper-PPVm8Dsz.js";const y="_host_13y0z_1",x="_appear_13y0z_10",f="_appearing_13y0z_14",_="_appeared_13y0z_19",E="_enter_13y0z_23",T="_entering_13y0z_29",b="_entered_13y0z_38",S="_exit_13y0z_42",v="_exiting_13y0z_47",C="_exited_13y0z_56",n={host:y,appear:x,appearing:f,appeared:_,enter:E,entering:T,entered:b,exit:S,exiting:v,exited:C},A={title:"DevTools/useCSSTransition",tags:["test"],component:()=>o.jsx("div",{}),parameters:{...g,...m},argTypes:{in:{control:{type:"boolean"}},enableAppear:{control:{type:"boolean"}},enableEnter:{control:{type:"boolean"}},enableExit:{control:{type:"boolean"}},duration:{control:{type:"number"},table:{defaultValue:{summary:"⚠️ Это параметр данного Story"}}}},args:{duration:1,in:!0,enableAppear:!0,enableEnter:!0,enableExit:!0,onEnter(e){console.log("onEnter",e)},onEntering(e){console.log("onEntering",e)},onEntered(e,t){console.log("onEntered",e,t)},onExit(){console.log("onExit")},onExiting(){console.log("onExiting")},onExited(e){console.log("onExited",e)}}},h={appear:n.appear,appearing:n.appearing,appeared:n.appeared,enter:n.enter,entering:n.entering,entered:n.entered,exit:n.exit,exiting:n.exiting,exited:n.exited},s={render:function({in:t,duration:a,...p}){const[r,{ref:c,onTransitionEnd:d}]=l(t,p);return r==="exited"?o.jsx("div",{}):o.jsx("div",{ref:c,className:u(n.host,h[r]),style:a?{"--css-transition-duration":`${a}s`}:void 0,onTransitionEnd:d})}},z=(e,t=1)=>({appear:{opacity:0},appearing:{opacity:1,transition:`opacity ${t}s ease-in-out`},appeared:{opacity:1},enter:{opacity:0,transform:"translateY(-25%) rotate(25deg)",transformOrigin:"center center"},entering:{opacity:1,transform:"translateY(0) rotate(0deg)",transformOrigin:"center center",transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},entered:{opacity:1},exit:{opacity:1,transform:"translateY(0) rotate(0deg)"},exiting:{opacity:0,transform:"translateY(-25%) rotate(25deg)",transformOrigin:"center center",transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},exited:{opacity:0,transform:"translateY(-25%) rotate(25deg)"}})[e],i={render:function({in:t,duration:a,...p}){const[r,{ref:c,onTransitionEnd:d}]=l(t,p);return r==="exited"?o.jsx("div",{}):o.jsx("div",{ref:c,className:n.host,style:z(r,a),onTransitionEnd:d})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render({
    in: inProp,
    duration,
    ...restProps
  }) {
    const [state, {
      ref,
      onTransitionEnd
    }] = useCSSTransition<HTMLDivElement>(inProp, restProps);
    if (state === 'exited') {
      return <div />;
    }
    return <div ref={ref} className={classNames(styles.host, transitionClassNames[state])} style={duration ? {
      '--css-transition-duration': \`\${duration}s\`
    } as unknown as CSSCustomProperties : undefined} onTransitionEnd={onTransitionEnd} />;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render({
    in: inProp,
    duration,
    ...restProps
  }) {
    const [state, {
      ref,
      onTransitionEnd
    }] = useCSSTransition<HTMLDivElement>(inProp, restProps);
    if (state === 'exited') {
      return <div />;
    }
    return <div ref={ref} className={styles.host} style={getTransition(state, duration)} onTransitionEnd={onTransitionEnd} />;
  }
}`,...i.parameters?.docs?.source}}};const D=["WithClassNameAttribute","WithStyleAttribute"];export{s as WithClassNameAttribute,i as WithStyleAttribute,D as __namedExportsOrder,A as default};
