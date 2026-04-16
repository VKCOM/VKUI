import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{s as i,t as a}from"./lib-BRrbp21U.js";import{A as o,C as s,H as c,M as l,a as ee,g as u,n as d}from"./dist-JE-Gteso.js";import{c as f,l as p,n as m,t as h}from"./View-37X3HzPx.js";import{n as g,t as _}from"./usePlatform-BWVnZ007.js";import{r as v,t as y}from"./useAdaptivityConditionalRender-C3SayIbs.js";import{n as te,t as b}from"./PanelHeader-sVatQzGL.js";import{i as x,n as S,r as C,t as w}from"./SplitLayout-D5fem1q4.js";import{n as T,t as E}from"./Epic-BuDdqyM1.js";import{i as D,n as O,r as k,t as A}from"./TabbarItem-Dg5AYPop.js";import{n as j,t as M}from"./Badge-YKuHikVW.js";import{n as N,t as P}from"./Group-BsDFq5nd.js";import{n as F,t as I}from"./Cell-BNh9fhlj.js";import{n as L,t as R}from"./Counter-Di_pJSia.js";import{n as z,t as B}from"./Placeholder-L7aC_pzR.js";import{n as V,t as H}from"./PanelHeaderBack-C0I_a8vd.js";import{i as U,n as W,t as G}from"./constants-Dj6vOzIh.js";import{n as K,t as q}from"./createStoryParameters-pz1UrWMe.js";var J,Y,X,Z,Q,$;t((()=>{J=e(n(),1),d(),a(),y(),_(),U(),K(),j(),F(),L(),N(),p(),te(),V(),z(),x(),S(),D(),O(),m(),T(),Y=r(),X={title:`Navigation/Epic`,component:E,parameters:q(`Epic`,G,W),tags:[`Навигация`]},Z={backgroundColor:`var(--vkui--color_background_secondary)`,borderRadius:8},Q={render:function(){let e=g(),{viewWidth:t}=v(),[n,r]=J.useState(`profile`),a=e=>r(e.currentTarget.dataset.story),d=e!==`vkcom`;return(0,Y.jsxs)(w,{header:d&&(0,Y.jsx)(b,{delimiter:`none`}),center:!0,children:[t.tabletPlus&&(0,Y.jsx)(C,{className:t.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:(0,Y.jsxs)(f,{children:[d&&(0,Y.jsx)(b,{}),(0,Y.jsxs)(P,{children:[(0,Y.jsx)(I,{disabled:n===`feed`,style:n===`feed`?Z:void 0,"data-story":`feed`,onClick:a,before:(0,Y.jsx)(o,{}),children:`feed`}),(0,Y.jsx)(I,{disabled:n===`services`,style:n===`services`?Z:void 0,"data-story":`services`,onClick:a,before:(0,Y.jsx)(s,{}),children:`services`}),(0,Y.jsx)(I,{disabled:n===`messages`,style:n===`messages`?Z:void 0,"data-story":`messages`,onClick:a,before:(0,Y.jsx)(l,{}),children:`messages`}),(0,Y.jsx)(I,{disabled:n===`clips`,style:n===`clips`?Z:void 0,"data-story":`clips`,onClick:a,before:(0,Y.jsx)(c,{}),children:`clips`}),(0,Y.jsx)(I,{disabled:n===`profile`,style:n===`profile`?Z:void 0,"data-story":`profile`,onClick:a,before:(0,Y.jsx)(u,{}),children:`profile`})]})]})}),(0,Y.jsx)(C,{width:`100%`,maxWidth:`560px`,stretchedOnMobile:!0,autoSpaced:!0,children:(0,Y.jsxs)(E,{activeStory:n,tabbar:t.tabletMinus&&(0,Y.jsxs)(k,{className:t.tabletMinus.className,children:[(0,Y.jsx)(A,{onClick:a,selected:n===`feed`,"data-story":`feed`,label:`Новости`,children:(0,Y.jsx)(o,{})}),(0,Y.jsx)(A,{onClick:a,selected:n===`services`,"data-story":`services`,label:`Сервисы`,children:(0,Y.jsx)(s,{})}),(0,Y.jsx)(A,{onClick:a,selected:n===`messages`,"data-story":`messages`,indicator:(0,Y.jsx)(R,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`12`}),label:`Сообщения`,children:(0,Y.jsx)(l,{})}),(0,Y.jsx)(A,{onClick:a,selected:n===`clips`,"data-story":`clips`,label:`Клипы`,children:(0,Y.jsx)(c,{})}),(0,Y.jsx)(A,{onClick:a,selected:n===`profile`,"data-story":`profile`,indicator:(0,Y.jsx)(M,{mode:`prominent`,children:`Есть обновления`}),label:`Профиль`,children:(0,Y.jsx)(u,{})})]}),children:[(0,Y.jsx)(h,{id:`feed`,activePanel:`feed`,children:(0,Y.jsxs)(f,{id:`feed`,children:[(0,Y.jsx)(b,{before:(0,Y.jsx)(H,{onClick:i}),children:`Новости`}),(0,Y.jsx)(P,{style:{height:`1000px`},children:(0,Y.jsx)(B,{icon:(0,Y.jsx)(ee,{width:56,height:56})})})]})}),(0,Y.jsx)(h,{id:`services`,activePanel:`services`,children:(0,Y.jsxs)(f,{id:`services`,children:[(0,Y.jsx)(b,{before:(0,Y.jsx)(H,{onClick:i}),children:`Сервисы`}),(0,Y.jsx)(P,{style:{height:`1000px`},children:(0,Y.jsx)(B,{icon:(0,Y.jsx)(s,{width:56,height:56})})})]})}),(0,Y.jsx)(h,{id:`messages`,activePanel:`messages`,children:(0,Y.jsxs)(f,{id:`messages`,children:[(0,Y.jsx)(b,{before:(0,Y.jsx)(H,{onClick:i}),children:`Сообщения`}),(0,Y.jsx)(P,{style:{height:`1000px`},children:(0,Y.jsx)(B,{icon:(0,Y.jsx)(l,{width:56,height:56})})})]})}),(0,Y.jsx)(h,{id:`clips`,activePanel:`clips`,children:(0,Y.jsxs)(f,{id:`clips`,children:[(0,Y.jsx)(b,{before:(0,Y.jsx)(H,{onClick:i}),children:`Клипы`}),(0,Y.jsx)(P,{style:{height:`1000px`},children:(0,Y.jsx)(B,{icon:(0,Y.jsx)(c,{width:56,height:56})})})]})}),(0,Y.jsx)(h,{id:`profile`,activePanel:`profile`,children:(0,Y.jsxs)(f,{id:`profile`,children:[(0,Y.jsx)(b,{before:(0,Y.jsx)(H,{onClick:i}),children:`Профиль`}),(0,Y.jsx)(P,{style:{height:`1000px`},children:(0,Y.jsx)(B,{icon:(0,Y.jsx)(u,{width:56,height:56})})})]})})]})})]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const platform = usePlatform();
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    const [activeStory, setActiveStory] = React.useState<string>('profile');
    const onStoryChange = (e: React.MouseEvent<HTMLElement>) => setActiveStory(e.currentTarget.dataset.story!);
    const hasHeader = platform !== 'vkcom';
    return <SplitLayout header={hasHeader && <PanelHeader delimiter="none" />} center>
        {viewWidth.tabletPlus && <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
            <Panel>
              {hasHeader && <PanelHeader />}
              <Group>
                <Cell disabled={activeStory === 'feed'} style={activeStory === 'feed' ? ActiveStoryStyle : undefined} data-story="feed" onClick={onStoryChange} before={<Icon28NewsfeedOutline />}>
                  feed
                </Cell>
                <Cell disabled={activeStory === 'services'} style={activeStory === 'services' ? ActiveStoryStyle : undefined} data-story="services" onClick={onStoryChange} before={<Icon28ServicesOutline />}>
                  services
                </Cell>
                <Cell disabled={activeStory === 'messages'} style={activeStory === 'messages' ? ActiveStoryStyle : undefined} data-story="messages" onClick={onStoryChange} before={<Icon28MessageOutline />}>
                  messages
                </Cell>
                <Cell disabled={activeStory === 'clips'} style={activeStory === 'clips' ? ActiveStoryStyle : undefined} data-story="clips" onClick={onStoryChange} before={<Icon28ClipOutline />}>
                  clips
                </Cell>
                <Cell disabled={activeStory === 'profile'} style={activeStory === 'profile' ? ActiveStoryStyle : undefined} data-story="profile" onClick={onStoryChange} before={<Icon28UserCircleOutline />}>
                  profile
                </Cell>
              </Group>
            </Panel>
          </SplitCol>}

        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
          <Epic activeStory={activeStory} tabbar={viewWidth.tabletMinus && <Tabbar className={viewWidth.tabletMinus.className}>
                  <TabbarItem onClick={onStoryChange} selected={activeStory === 'feed'} data-story="feed" label="Новости">
                    <Icon28NewsfeedOutline />
                  </TabbarItem>
                  <TabbarItem onClick={onStoryChange} selected={activeStory === 'services'} data-story="services" label="Сервисы">
                    <Icon28ServicesOutline />
                  </TabbarItem>
                  <TabbarItem onClick={onStoryChange} selected={activeStory === 'messages'} data-story="messages" indicator={<Counter size="s" mode="primary" appearance="accent-red">
                        12
                      </Counter>} label="Сообщения">
                    <Icon28MessageOutline />
                  </TabbarItem>
                  <TabbarItem onClick={onStoryChange} selected={activeStory === 'clips'} data-story="clips" label="Клипы">
                    <Icon28ClipOutline />
                  </TabbarItem>
                  <TabbarItem onClick={onStoryChange} selected={activeStory === 'profile'} data-story="profile" indicator={<Badge mode="prominent">Есть обновления</Badge>} label="Профиль">
                    <Icon28UserCircleOutline />
                  </TabbarItem>
                </Tabbar>}>
            <View id="feed" activePanel="feed">
              <Panel id="feed">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Новости</PanelHeader>
                <Group style={{
                height: '1000px'
              }}>
                  <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
                </Group>
              </Panel>
            </View>
            <View id="services" activePanel="services">
              <Panel id="services">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сервисы</PanelHeader>
                <Group style={{
                height: '1000px'
              }}>
                  <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}></Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="messages" activePanel="messages">
              <Panel id="messages">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сообщения</PanelHeader>
                <Group style={{
                height: '1000px'
              }}>
                  <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="clips" activePanel="clips">
              <Panel id="clips">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Клипы</PanelHeader>
                <Group style={{
                height: '1000px'
              }}>
                  <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}></Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="profile" activePanel="profile">
              <Panel id="profile">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Профиль</PanelHeader>
                <Group style={{
                height: '1000px'
              }}>
                  <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}></Placeholder>
                </Group>
              </Panel>
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Example`]}))();export{Q as Example,$ as __namedExportsOrder,X as default};