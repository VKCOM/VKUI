import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,si as a,xr as o,zi as s}from"./dist-ffVrjb4g.js";import{i as c,n as l,t as u}from"./constants-BWBR8eWE.js";import{n as d,t as f}from"./createStoryParameters-D_aKMzVl.js";import{n as p,t as m}from"./Group-BYaqcOTu.js";import{n as h,t as g}from"./Flex-C-g3JHZP.js";import{n as _,t as v}from"./ContentBadge-6QD-qd1b.js";var y=t({CustomAppearance:()=>w,Playground:()=>C,SingleIcon:()=>T,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),i(),c(),d(),h(),p(),_(),b=r(),x={display:`flex`,alignItems:`center`,gap:24,flexWrap:`wrap`,outline:`1px dashed`,padding:24},S={title:`Data Display/ContentBadge`,component:v,parameters:f(`ContentBadge`,u,l,{liveCodeEditor:{scope:{commonStyles:x}}}),tags:[`Отображение данных`]},C=e=>(0,b.jsx)(m,{style:x,children:(0,b.jsxs)(g,{align:`center`,gap:24,children:[(0,b.jsx)(v,{...e,children:e.children}),(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(v.IconSlot,{children:e.size===`l`?(0,b.jsx)(a,{}):(0,b.jsx)(s,{})}),e.children]}),(0,b.jsxs)(v,{...e,children:[e.children,(0,b.jsx)(v.IconSlot,{children:e.size===`l`?(0,b.jsx)(a,{}):(0,b.jsx)(s,{})})]}),(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(v.IconSlot,{children:e.size===`l`?(0,b.jsx)(a,{}):(0,b.jsx)(s,{})}),e.children,(0,b.jsx)(v.IconSlot,{children:e.size===`l`?(0,b.jsx)(a,{}):(0,b.jsx)(s,{})})]})]})}),C.args={children:`Text`},w=e=>{let t=[`#FF6699`,`var(--vkui--color_icon_tertiary)`],n=[`primary`,`secondary`,`outline`];return(0,b.jsx)(m,{style:x,children:(0,b.jsx)(g,{direction:`column`,gap:16,children:t.map(t=>(0,b.jsx)(g,{align:`center`,gap:24,children:n.map(n=>(0,b.jsxs)(v,{appearance:t,mode:n,...e,children:[(0,b.jsx)(v.IconSlot,{children:e.size===`l`?(0,b.jsx)(a,{}):(0,b.jsx)(s,{})}),e.children]},n))},t))})})},w.args={children:`Text`},T=e=>e.size===`s`?(0,b.jsx)(`div`,{children:`size="s" не поддерживает иконки`}):(0,b.jsx)(m,{style:x,children:(0,b.jsx)(v,{...e,children:(0,b.jsx)(v.IconSlot,{children:e.size===`l`?(0,b.jsx)(o,{}):(0,b.jsx)(a,{})})})}),T.args={capsule:!0},E=[`Playground`,`CustomAppearance`,`SingleIcon`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(props: ContentBadgeProps) => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(props: ContentBadgeProps) => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(props: ContentBadgeProps) => {
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
}`,...T.parameters?.docs?.source}}}})))()}export{C as n,D as r,y as t};