import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{Fi as a,_r as o,ai as s,n as c}from"./dist-Ddx9HyIL.js";import{n as l,t as u}from"./Flex-DSlxdUpE.js";import{n as d,t as f}from"./ContentBadge-DhwB1W0E.js";import{n as p,t as m}from"./Group-LwNPJiLD.js";import{i as h,n as g,t as _}from"./constants-cjed6ZWB.js";import{n as v,t as y}from"./createStoryParameters-CMHckkzt.js";var b=e({CustomAppearance:()=>T,Playground:()=>w,SingleIcon:()=>E,__namedExportsOrder:()=>D,default:()=>C}),x,S,C,w,T,E,D,O=t((()=>{r(),c(),h(),v(),l(),p(),d(),x=n(i(),1),S={display:`flex`,alignItems:`center`,gap:24,flexWrap:`wrap`,outline:`1px dashed`,padding:24},C={title:`Data Display/ContentBadge`,component:f,parameters:y(`ContentBadge`,_,g,{liveCodeEditor:{scope:{commonStyles:S}}}),tags:[`Отображение данных`]},w=e=>(0,x.jsx)(m,{style:S,children:(0,x.jsxs)(u,{align:`center`,gap:24,children:[(0,x.jsx)(f,{...e,children:e.children}),(0,x.jsxs)(f,{...e,children:[(0,x.jsx)(f.IconSlot,{children:e.size===`l`?(0,x.jsx)(s,{}):(0,x.jsx)(a,{})}),e.children]}),(0,x.jsxs)(f,{...e,children:[e.children,(0,x.jsx)(f.IconSlot,{children:e.size===`l`?(0,x.jsx)(s,{}):(0,x.jsx)(a,{})})]}),(0,x.jsxs)(f,{...e,children:[(0,x.jsx)(f.IconSlot,{children:e.size===`l`?(0,x.jsx)(s,{}):(0,x.jsx)(a,{})}),e.children,(0,x.jsx)(f.IconSlot,{children:e.size===`l`?(0,x.jsx)(s,{}):(0,x.jsx)(a,{})})]})]})}),w.args={children:`Text`},T=e=>{let t=[`#FF6699`,`var(--vkui--color_icon_tertiary)`],n=[`primary`,`secondary`,`outline`];return(0,x.jsx)(m,{style:S,children:(0,x.jsx)(u,{direction:`column`,gap:16,children:t.map(t=>(0,x.jsx)(u,{align:`center`,gap:24,children:n.map(n=>(0,x.jsxs)(f,{appearance:t,mode:n,...e,children:[(0,x.jsx)(f.IconSlot,{children:e.size===`l`?(0,x.jsx)(s,{}):(0,x.jsx)(a,{})}),e.children]},n))},t))})})},T.args={children:`Text`},E=e=>e.size===`s`?(0,x.jsx)(`div`,{children:`size="s" не поддерживает иконки`}):(0,x.jsx)(m,{style:S,children:(0,x.jsx)(f,{...e,children:(0,x.jsx)(f.IconSlot,{children:e.size===`l`?(0,x.jsx)(o,{}):(0,x.jsx)(s,{})})})}),E.args={capsule:!0},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(props: ContentBadgeProps) => {
  return <Group style={commonStyles}>
      <Flex align="center" gap={24}>
        <ContentBadge {...props}>{props.children}</ContentBadge>

        <ContentBadge {...props}>
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {props.children}
        </ContentBadge>

        <ContentBadge {...props}>
          {props.children}
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>

        <ContentBadge {...props}>
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {props.children}
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>
      </Flex>
    </Group>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(props: ContentBadgeProps) => {
  const CUSTOM_APPEARANCES: ContentBadgeAppearance[] = ['#FF6699', 'var(--vkui--color_icon_tertiary)'];
  const MODES: ContentBadgeModeType[] = ['primary', 'secondary', 'outline'];
  return <Group style={commonStyles}>
      <Flex direction="column" gap={16}>
        {CUSTOM_APPEARANCES.map(appearance => <Flex key={appearance} align="center" gap={24}>
            {MODES.map(mode => <ContentBadge key={mode} appearance={appearance} mode={mode} {...props}>
                <ContentBadge.IconSlot>
                  {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
                </ContentBadge.IconSlot>
                {props.children}
              </ContentBadge>)}
          </Flex>)}
      </Flex>
    </Group>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(props: ContentBadgeProps) => {
  if (props.size === 's') {
    return <div>size=&quot;s&quot; не поддерживает иконки</div>;
  }
  return <Group style={commonStyles}>
      <ContentBadge {...props}>
        <ContentBadge.IconSlot>
          {props.size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
        </ContentBadge.IconSlot>
      </ContentBadge>
    </Group>;
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`CustomAppearance`,`SingleIcon`]}));export{w as n,O as r,b as t};