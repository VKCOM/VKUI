import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{m as r,t as i}from"./lib-DJkKow_A.js";import{n as a,t as o}from"./useCSSTransition-DUXtgNGM.js";import{i as s,n as c,t as l}from"./constants-cjed6ZWB.js";var u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{u=`_host_13y0z_1`,d=`_appear_13y0z_10`,f=`_appearing_13y0z_14`,p=`_appeared_13y0z_19`,m=`_enter_13y0z_23`,h=`_entering_13y0z_29`,g=`_entered_13y0z_38`,_=`_exit_13y0z_42`,v=`_exiting_13y0z_47`,y=`_exited_13y0z_56`,b={host:u,appear:d,appearing:f,appeared:p,enter:m,entering:h,entered:g,exit:_,exiting:v,exited:y}})),S,C,w,T,E,D,O;e((()=>{i(),s(),o(),x(),S=t(n(),1),C={appear:b.appear,appearing:b.appearing,appeared:b.appeared,enter:b.enter,entering:b.entering,entered:b.entered,exit:b.exit,exiting:b.exiting,exited:b.exited},w={title:`DevTools/useCSSTransition`,tags:[`test`],component:()=>(0,S.jsx)(`div`,{}),parameters:{...l,...c,liveCodeEditor:{scope:{styles:b,useCSSTransition:a,transitionClassNames:C}}},argTypes:{in:{control:{type:`boolean`}},enableAppear:{control:{type:`boolean`}},enableEnter:{control:{type:`boolean`}},enableExit:{control:{type:`boolean`}},duration:{control:{type:`number`},table:{defaultValue:{summary:`⚠️ Это параметр данного Story`}}}},args:{duration:1,in:!0,enableAppear:!0,enableEnter:!0,enableExit:!0,onEnter(e){console.log(`onEnter`,e)},onEntering(e){console.log(`onEntering`,e)},onEntered(e,t){console.log(`onEntered`,e,t)},onExit(){console.log(`onExit`)},onExiting(){console.log(`onExiting`)},onExited(e){console.log(`onExited`,e)}}},T=({in:e,duration:t,...n})=>{let[i,{ref:o,onTransitionEnd:s}]=a(e,n);return i===`exited`?(0,S.jsx)(`div`,{}):(0,S.jsx)(`div`,{ref:o,className:r(b.host,C[i]),style:t?{"--css-transition-duration":`${t}s`}:void 0,onTransitionEnd:s})},E=(e,t=1)=>({appear:{opacity:0},appearing:{opacity:1,transition:`opacity ${t}s ease-in-out`},appeared:{opacity:1},enter:{opacity:0,transform:`translateY(-25%) rotate(25deg)`,transformOrigin:`center center`},entering:{opacity:1,transform:`translateY(0) rotate(0deg)`,transformOrigin:`center center`,transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},entered:{opacity:1},exit:{opacity:1,transform:`translateY(0) rotate(0deg)`},exiting:{opacity:0,transform:`translateY(-25%) rotate(25deg)`,transformOrigin:`center center`,transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},exited:{opacity:0,transform:`translateY(-25%) rotate(25deg)`}})[e],D=({in:e,duration:t,...n})=>{let[r,{ref:i,onTransitionEnd:o}]=a(e,n);return r===`exited`?(0,S.jsx)(`div`,{}):(0,S.jsx)(`div`,{ref:i,className:b.host,style:E(r,t),onTransitionEnd:o})},D.parameters={liveCodeEditor:{scope:{getTransition:E}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`({
  in: inProp,
  duration,
  ...restProps
}: DemoProps) => {
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
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
  in: inProp,
  duration,
  ...restProps
}: DemoProps) => {
  const [state, {
    ref,
    onTransitionEnd
  }] = useCSSTransition<HTMLDivElement>(inProp, restProps);
  if (state === 'exited') {
    return <div />;
  }
  return <div ref={ref} className={styles.host} style={getTransition(state, duration)} onTransitionEnd={onTransitionEnd} />;
}`,...D.parameters?.docs?.source}}},O=[`WithClassNameAttribute`,`WithStyleAttribute`]}))();export{T as WithClassNameAttribute,D as WithStyleAttribute,O as __namedExportsOrder,w as default};