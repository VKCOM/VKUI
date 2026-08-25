import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{Fi as i,_r as a,ai as o,n as s}from"./dist-BrTYZxJF.js";import{n as c,t as l}from"./Flex-BFq13joc.js";import{n as u,t as d}from"./ContentBadge-Dsgoh06C.js";import{n as f,t as p}from"./Group-Bp-h8t_O.js";import{i as m,n as h,t as g}from"./constants-DBkyy3CT.js";import{n as _,t as v}from"./createStoryParameters-DBkK1CfQ.js";var y=t({CustomAppearance:()=>w,Playground:()=>C,SingleIcon:()=>T,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),s(),m(),_(),c(),f(),u(),b=r(),x={display:`flex`,alignItems:`center`,gap:24,flexWrap:`wrap`,outline:`1px dashed`,padding:24},S={title:`Data Display/ContentBadge`,component:d,parameters:v(`ContentBadge`,g,h,{liveCodeEditor:{scope:{commonStyles:x}}}),tags:[`Отображение данных`]},C=e=>(0,b.jsx)(p,{style:x,children:(0,b.jsxs)(l,{align:`center`,gap:24,children:[(0,b.jsx)(d,{...e,children:e.children}),(0,b.jsxs)(d,{...e,children:[(0,b.jsx)(d.IconSlot,{children:e.size===`l`?(0,b.jsx)(o,{}):(0,b.jsx)(i,{})}),e.children]}),(0,b.jsxs)(d,{...e,children:[e.children,(0,b.jsx)(d.IconSlot,{children:e.size===`l`?(0,b.jsx)(o,{}):(0,b.jsx)(i,{})})]}),(0,b.jsxs)(d,{...e,children:[(0,b.jsx)(d.IconSlot,{children:e.size===`l`?(0,b.jsx)(o,{}):(0,b.jsx)(i,{})}),e.children,(0,b.jsx)(d.IconSlot,{children:e.size===`l`?(0,b.jsx)(o,{}):(0,b.jsx)(i,{})})]})]})}),C.args={children:`Text`},w=e=>{let t=[`#FF6699`,`var(--vkui--color_icon_tertiary)`],n=[`primary`,`secondary`,`outline`];return(0,b.jsx)(p,{style:x,children:(0,b.jsx)(l,{direction:`column`,gap:16,children:t.map(t=>(0,b.jsx)(l,{align:`center`,gap:24,children:n.map(n=>(0,b.jsxs)(d,{appearance:t,mode:n,...e,children:[(0,b.jsx)(d.IconSlot,{children:e.size===`l`?(0,b.jsx)(o,{}):(0,b.jsx)(i,{})}),e.children]},n))},t))})})},w.args={children:`Text`},T=e=>e.size===`s`?(0,b.jsx)(`div`,{children:`size="s" не поддерживает иконки`}):(0,b.jsx)(p,{style:x,children:(0,b.jsx)(d,{...e,children:(0,b.jsx)(d.IconSlot,{children:e.size===`l`?(0,b.jsx)(a,{}):(0,b.jsx)(o,{})})})}),T.args={capsule:!0},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(props: ContentBadgeProps) => {
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
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`CustomAppearance`,`SingleIcon`]})))()}export{C as n,D as r,y as t};