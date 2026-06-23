import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{a,i as o}from"./SplitColContext-CqBFix-7.js";import{Ft as s,In as c,Ln as l,Nt as u,On as d,Pt as f,jt as p,kn as m}from"./iframe-Cn6jcl_x.js";import{n as h,t as g}from"./Flex-DSlxdUpE.js";import{n as _,t as v}from"./Group-LwNPJiLD.js";import{n as y,t as b}from"./List-BsGWDSKo.js";import{n as x,t as S}from"./SimpleCell-CQ00ECse.js";import{n as C,t as w}from"./Avatar-Doxxlovk.js";import{n as T,t as E}from"./OnboardingTooltip-BP4lACxc.js";import{n as D,t as O}from"./PanelHeaderBack-CQd0osZo.js";import{i as k,n as A,t as j}from"./constants-cjed6ZWB.js";import{n as M,t as N}from"./createStoryParameters-CMHckkzt.js";var P=e({CustomArrowIcon:()=>V,Playground:()=>R,ShowCase:()=>z,WithOnboardingTooltipContainer:()=>B,__namedExportsOrder:()=>H,default:()=>L}),F,I,L,R,z,B,V,H,U=t((()=>{F=n(r(),1),p(),k(),M(),C(),h(),_(),y(),l(),m(),D(),x(),s(),T(),a(),I=n(i(),1),L={title:`Utils/OnboardingTooltip`,component:E,parameters:N(`OnboardingTooltip`,A),tags:[`Утилиты`]},R=e=>(0,I.jsx)(o,{style:{minHeight:`100%`},children:(0,I.jsx)(g,{justify:`center`,align:`center`,style:{height:`200px`},children:(0,I.jsx)(E,{...e,children:(0,I.jsx)(w,{})})})}),R.args={description:`OnboardingTooltip`},z=()=>{let[e,t]=F.useState(!0),[n,r]=F.useState(!0),[i,a]=F.useState(!1),[o,s]=F.useState(`tooltip`);return(0,I.jsxs)(f,{activePanel:o,children:[(0,I.jsxs)(c,{id:`tooltip`,children:[(0,I.jsx)(d,{children:`Onboarding tooltip`}),(0,I.jsx)(v,{children:(0,I.jsxs)(b,{children:[(0,I.jsx)(S,{children:`Музыка`}),(0,I.jsx)(S,{children:`Видео`}),(0,I.jsx)(S,{children:`Игры`}),(0,I.jsx)(S,{children:`Закладки`}),(0,I.jsx)(S,{children:`Документы`}),(0,I.jsx)(S,{children:`Денежные переводы`})]})}),(0,I.jsx)(v,{children:(0,I.jsx)(E,{description:`У нас тут brand new функционал подвезли. Зацените!`,shown:e,onClose:()=>t(!1),offsetByMainAxis:10,children:(0,I.jsx)(S,{onClick:()=>s(`tooltip2`),children:`VK Pay`})})})]}),(0,I.jsxs)(c,{id:`tooltip2`,children:[(0,I.jsx)(d,{before:(0,I.jsx)(E,{shown:n,onClose:()=>{r(!1),a(!0)},description:`Нажмите на кнопку, если хотите вернуться`,title:`Назад`,children:(0,I.jsx)(O,{onClick:()=>s(`tooltip`)})}),children:`OnboardingTooltip`}),(0,I.jsx)(v,{children:(0,I.jsxs)(b,{children:[(0,I.jsx)(S,{before:(0,I.jsx)(E,{description:`Теперь у нас появились аватарки в списках. Правда круто?`,shown:i,onClose:()=>a(!1),arrowOffset:-6,children:(0,I.jsx)(w,{})}),subtitle:`Веб-сайт`,children:`Команда ВКонтакте`}),(0,I.jsx)(S,{before:(0,I.jsx)(w,{}),subtitle:`Музыкант`,children:`Robbie Williams`}),(0,I.jsx)(S,{before:(0,I.jsx)(w,{}),subtitle:`Издательский дом`,children:`ПостНаука`}),(0,I.jsx)(S,{before:(0,I.jsx)(w,{}),subtitle:`Издательский дом`,children:`ПостНаука`}),(0,I.jsx)(S,{before:(0,I.jsx)(w,{}),subtitle:`Издательский дом`,children:`ПостНаука`}),(0,I.jsx)(S,{before:(0,I.jsx)(w,{}),subtitle:`Издательский дом`,children:`ПостНаука`}),(0,I.jsx)(S,{before:(0,I.jsx)(w,{}),subtitle:`Издательский дом`,children:`ПостНаука`})]})})]})]})},z.decorators=[u],z.parameters=j,B=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(o,{style:{minHeight:`120vh`},children:[(0,I.jsx)(E,{description:`Я скроллюсь`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`},children:(0,I.jsx)(w,{})})}),(0,I.jsx)(E,{description:`Двигаем стрелочку`,arrowOffset:20,children:(0,I.jsx)(`div`,{style:{display:`inline-block`,marginLeft:100},children:(0,I.jsx)(w,{})})})]}),(0,I.jsx)(o,{fixed:!0,style:{minHeight:`30px`,border:`1px solid`,margin:`100px 100px 0`,position:`relative`,background:`var(--vkui--color_background_content)`,zIndex:1},children:(0,I.jsx)(E,{description:`Я вылезаю (fixed)`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`},children:(0,I.jsx)(w,{})})})}),(0,I.jsxs)(o,{style:{minHeight:`100vh`,border:`1px solid`,margin:`64px 100px 100px`,position:`relative`,background:`var(--vkui--color_background_content)`,zIndex:1},children:[(0,I.jsx)(E,{description:`Я прилип слева`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`,position:`absolute`,right:0},children:(0,I.jsx)(w,{})})}),(0,I.jsx)(E,{description:`Я прилип справа`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`},children:(0,I.jsx)(w,{})})}),(0,I.jsx)(E,{description:`Я прилип слева`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`,position:`absolute`,left:0,bottom:0},children:(0,I.jsx)(w,{})})}),(0,I.jsx)(E,{description:`Я прилип справа`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`,position:`absolute`,right:0,bottom:0},children:(0,I.jsx)(w,{})})}),(0,I.jsx)(E,{description:`Я по центру 😎`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`,position:`absolute`,left:`50%`,top:`50%`,transform:`translate(50%, 50%)`},children:(0,I.jsx)(w,{})})})]}),(0,I.jsx)(`div`,{style:{height:`100vh`}}),(0,I.jsx)(o,{fixed:!0,style:{position:`fixed`,bottom:0,width:`100%`},children:(0,I.jsx)(E,{description:`Я прибит к низу`,children:(0,I.jsx)(`div`,{style:{display:`inline-block`},children:(0,I.jsx)(w,{})})})})]}),V=()=>(0,I.jsx)(o,{children:(0,I.jsx)(E,{description:`У этого тултипа кастомная стрелка`,offsetByCrossAxis:11,arrowPadding:6,ArrowIcon:e=>(0,I.jsx)(`svg`,{width:`80`,height:11,viewBox:`0 0 80 11`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,I.jsx)(`path`,{d:`M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z`,fill:`currentColor`})}),children:(0,I.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`},children:`Якорь`})})}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args: OnboardingTooltipProps) => <OnboardingTooltipContainer style={{
  minHeight: '100%'
}}>
    <Flex justify="center" align="center" style={{
    height: '200px'
  }}>
      <OnboardingTooltip {...args}>
        <Avatar />
      </OnboardingTooltip>
    </Flex>
  </OnboardingTooltipContainer>`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [tooltip, setTooltip] = React.useState(true);
  const [tooltip2, setTooltip2] = React.useState(true);
  const [tooltip3, setTooltip3] = React.useState(false);
  const [activePanel, setActivePanel] = React.useState('tooltip');
  return <View activePanel={activePanel}>
      <Panel id="tooltip">
        <PanelHeader>Onboarding tooltip</PanelHeader>
        <Group>
          <List>
            <SimpleCell>Музыка</SimpleCell>
            <SimpleCell>Видео</SimpleCell>
            <SimpleCell>Игры</SimpleCell>
            <SimpleCell>Закладки</SimpleCell>
            <SimpleCell>Документы</SimpleCell>
            <SimpleCell>Денежные переводы</SimpleCell>
          </List>
        </Group>
        <Group>
          <OnboardingTooltip description="У нас тут brand new функционал подвезли. Зацените!" shown={tooltip} onClose={() => setTooltip(false)} offsetByMainAxis={10}>
            <SimpleCell onClick={() => setActivePanel('tooltip2')}>VK Pay</SimpleCell>
          </OnboardingTooltip>
        </Group>
      </Panel>

      <Panel id="tooltip2">
        <PanelHeader before={<OnboardingTooltip shown={tooltip2} onClose={() => {
        setTooltip2(false);
        setTooltip3(true);
      }} description="Нажмите на кнопку, если хотите вернуться" title="Назад">
              <PanelHeaderBack onClick={() => setActivePanel('tooltip')} />
            </OnboardingTooltip>}>
          OnboardingTooltip
        </PanelHeader>
        <Group>
          <List>
            <SimpleCell before={<OnboardingTooltip description="Теперь у нас появились аватарки в списках. Правда круто?" shown={tooltip3} onClose={() => setTooltip3(false)} arrowOffset={-6}>
                  <Avatar />
                </OnboardingTooltip>} subtitle="Веб-сайт">
              Команда ВКонтакте
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Музыкант">
              Robbie Williams
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
          </List>
        </Group>
      </Panel>
    </View>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <>
    <OnboardingTooltipContainer style={{
    minHeight: '120vh'
  }}>
      <OnboardingTooltip description="Я скроллюсь">
        <div style={{
        display: 'inline-block'
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
      <OnboardingTooltip description="Двигаем стрелочку" arrowOffset={20}>
        <div style={{
        display: 'inline-block',
        marginLeft: 100
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
    </OnboardingTooltipContainer>
    <OnboardingTooltipContainer fixed style={{
    minHeight: '30px',
    border: '1px solid',
    margin: '100px 100px 0',
    position: 'relative',
    background: 'var(--vkui--color_background_content)',
    zIndex: 1
  }}>
      <OnboardingTooltip description="Я вылезаю (fixed)">
        <div style={{
        display: 'inline-block'
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
    </OnboardingTooltipContainer>
    <OnboardingTooltipContainer style={{
    minHeight: '100vh',
    border: '1px solid',
    margin: '64px 100px 100px',
    position: 'relative',
    background: 'var(--vkui--color_background_content)',
    zIndex: 1
  }}>
      <OnboardingTooltip description="Я прилип слева">
        <div style={{
        display: 'inline-block',
        position: 'absolute',
        right: 0
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
      <OnboardingTooltip description="Я прилип справа">
        <div style={{
        display: 'inline-block'
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
      <OnboardingTooltip description="Я прилип слева">
        <div style={{
        display: 'inline-block',
        position: 'absolute',
        left: 0,
        bottom: 0
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
      <OnboardingTooltip description="Я прилип справа">
        <div style={{
        display: 'inline-block',
        position: 'absolute',
        right: 0,
        bottom: 0
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
      <OnboardingTooltip description="Я по центру 😎">
        <div style={{
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(50%, 50%)'
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
    </OnboardingTooltipContainer>
    <div style={{
    height: '100vh'
  }}></div>
    <OnboardingTooltipContainer fixed style={{
    position: 'fixed',
    bottom: 0,
    width: '100%'
  }}>
      <OnboardingTooltip description="Я прибит к низу">
        <div style={{
        display: 'inline-block'
      }}>
          <Avatar />
        </div>
      </OnboardingTooltip>
    </OnboardingTooltipContainer>
  </>`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const ARROW_HEIGHT = 11;
  const CustomIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
    return <svg width="80" height={ARROW_HEIGHT} viewBox={\`0 0 80 \${ARROW_HEIGHT}\`} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z" fill="currentColor" />
      </svg>;
  };
  return <OnboardingTooltipContainer>
      <OnboardingTooltip description="У этого тултипа кастомная стрелка" offsetByCrossAxis={ARROW_HEIGHT} arrowPadding={6} ArrowIcon={CustomIcon}>
        <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
          Якорь
        </div>
      </OnboardingTooltip>
    </OnboardingTooltipContainer>;
}`,...V.parameters?.docs?.source}}},H=[`Playground`,`ShowCase`,`WithOnboardingTooltipContainer`,`CustomArrowIcon`]}));export{R as n,U as r,P as t};