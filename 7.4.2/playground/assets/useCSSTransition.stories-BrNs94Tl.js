import{j as o,i as _}from"./iframe-DTUKIQpa.js";import{D as E,C as T}from"./constants-DdkjnEgz.js";import{u as f}from"./useCSSTransition-DLj9J3QY.js";import"./useStateWithPrev-U9GIjbS7.js";const b="_host_13y0z_1",S="_appear_13y0z_10",v="_appearing_13y0z_14",C="_appeared_13y0z_19",h="_enter_13y0z_23",z="_entering_13y0z_29",P="_entered_13y0z_38",N="_exit_13y0z_42",j="_exiting_13y0z_47",$="_exited_13y0z_56",n={host:b,appear:S,appearing:v,appeared:C,enter:h,entering:z,entered:P,exit:N,exiting:j,exited:$},L={title:"DevTools/useCSSTransition",tags:["test"],component:()=>o.jsx("div",{}),parameters:{...T,...E},argTypes:{in:{control:{type:"boolean"}},enableAppear:{control:{type:"boolean"}},enableEnter:{control:{type:"boolean"}},enableExit:{control:{type:"boolean"}},duration:{control:{type:"number"},table:{defaultValue:{summary:"⚠️ Это параметр данного Story"}}}},args:{duration:1,in:!0,enableAppear:!0,enableEnter:!0,enableExit:!0,onEnter(e){console.log("onEnter",e)},onEntering(e){console.log("onEntering",e)},onEntered(e,t){console.log("onEntered",e,t)},onExit(){console.log("onExit")},onExiting(){console.log("onExiting")},onExited(e){console.log("onExited",e)}}},A={appear:n.appear,appearing:n.appearing,appeared:n.appeared,enter:n.enter,entering:n.entering,entered:n.entered,exit:n.exit,exiting:n.exiting,exited:n.exited},s={render:function({in:t,duration:a,...p}){const[r,{ref:c,onTransitionEnd:d}]=f(t,p);return r==="exited"?o.jsx("div",{}):o.jsx("div",{ref:c,className:_(n.host,A[r]),style:a?{"--css-transition-duration":`${a}s`}:void 0,onTransitionEnd:d})}},D=(e,t=1)=>({appear:{opacity:0},appearing:{opacity:1,transition:`opacity ${t}s ease-in-out`},appeared:{opacity:1},enter:{opacity:0,transform:"translateY(-25%) rotate(25deg)",transformOrigin:"center center"},entering:{opacity:1,transform:"translateY(0) rotate(0deg)",transformOrigin:"center center",transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},entered:{opacity:1},exit:{opacity:1,transform:"translateY(0) rotate(0deg)"},exiting:{opacity:0,transform:"translateY(-25%) rotate(25deg)",transformOrigin:"center center",transition:`transform ${t}s ease-in-out, opacity ${t}s ease-in-out`},exited:{opacity:0,transform:"translateY(-25%) rotate(25deg)"}})[e],i={render:function({in:t,duration:a,...p}){const[r,{ref:c,onTransitionEnd:d}]=f(t,p);return r==="exited"?o.jsx("div",{}):o.jsx("div",{ref:c,className:n.host,style:D(r,a),onTransitionEnd:d})}};var l,u,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const H=["WithClassNameAttribute","WithStyleAttribute"];export{s as WithClassNameAttribute,i as WithStyleAttribute,H as __namedExportsOrder,L as default};
