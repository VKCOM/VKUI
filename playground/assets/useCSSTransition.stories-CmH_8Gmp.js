import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CRMqfscQ.js";import{c as n,t as r}from"./lib-B1PKsac9.js";import{n as i,t as a}from"./useCSSTransition-BqLQF8kp.js";import{i as o,n as s,t as c}from"./constants-BYo4AJCv.js";var l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{l=`_host_13y0z_1`,u=`_appear_13y0z_10`,d=`_appearing_13y0z_14`,f=`_appeared_13y0z_19`,p=`_enter_13y0z_23`,m=`_entering_13y0z_29`,h=`_entered_13y0z_38`,g=`_exit_13y0z_42`,_=`_exiting_13y0z_47`,v=`_exited_13y0z_56`,y={host:l,appear:u,appearing:d,appeared:f,enter:p,entering:m,entered:h,exit:g,exiting:_,exited:v}})),x,S,C,w,T,E,D;e((()=>{r(),o(),a(),b(),x=t(),S={title:`DevTools/useCSSTransition`,tags:[`test`],component:()=>(0,x.jsx)(`div`,{}),parameters:{...c,...s},argTypes:{in:{control:{type:`boolean`}},enableAppear:{control:{type:`boolean`}},enableEnter:{control:{type:`boolean`}},enableExit:{control:{type:`boolean`}},duration:{control:{type:`number`},table:{defaultValue:{summary:`⚠️ Это параметр данного Story`}}}},args:{duration:1,in:!0,enableAppear:!0,enableEnter:!0,enableExit:!0,onEnter(e){console.log(`onEnter`,e)},onEntering(e){console.log(`onEntering`,e)},onEntered(e,t){console.log(`onEntered`,e,t)},onExit(){console.log(`onExit`)},onExiting(){console.log(`onExiting`)},onExited(e){console.log(`onExited`,e)}}},C={appear:y.appear,appearing:y.appearing,appeared:y.appeared,enter:y.enter,entering:y.entering,entered:y.entered,exit:y.exit,exiting:y.exiting,exited:y.exited},w={render:function({in:e,duration:t,...r}){let[a,{ref:o,onTransitionEnd:s}]=i(e,r);return a===`exited`?(0,x.jsx)(`div`,{}):(0,x.jsx)(`div`,{ref:o,className:n(y.host,C[a]),style:t?{"--css-transition-duration":`${t}s`}:void 0,onTransitionEnd:s})}},T=(e,t=1)=>({appear:{opacity:0},appearing:{opacity:1,transition:`opacity ${t}s ease-in-out`},appeared:{opacity:1},enter:{opacity:0,transform:`translateY(-25%) rotate(25deg)`,transformOrigin:`center center`},entering:{opacity:1,transform:`translateY(0) rotate(0deg)`,transformOrigin:`center center`,transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},entered:{opacity:1},exit:{opacity:1,transform:`translateY(0) rotate(0deg)`},exiting:{opacity:0,transform:`translateY(-25%) rotate(25deg)`,transformOrigin:`center center`,transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},exited:{opacity:0,transform:`translateY(-25%) rotate(25deg)`}})[e],E={render:function({in:e,duration:t,...n}){let[r,{ref:a,onTransitionEnd:o}]=i(e,n);return r===`exited`?(0,x.jsx)(`div`,{}):(0,x.jsx)(`div`,{ref:a,className:y.host,style:T(r,t),onTransitionEnd:o})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`WithClassNameAttribute`,`WithStyleAttribute`]}))();export{w as WithClassNameAttribute,E as WithStyleAttribute,D as __namedExportsOrder,S as default};