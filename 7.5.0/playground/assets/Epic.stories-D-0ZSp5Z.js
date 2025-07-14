import{r as u,an as O,m as _,j as e,ap as T,R as N,i as R,d as V,u as D,g as G,f as E,h as c,P as l,V as p,n as m}from"./iframe-A37C1jR-.js";import{D as M,C as W}from"./constants-DdkjnEgz.js";import{c as q}from"./createStoryParameters-CcwS40kl.js";import{B as F}from"./Badge-DPrznJIV.js";import{C as h}from"./Cell-Ci22DGdt.js";import{C as L}from"./Counter-72kxYa4a.js";import{G as d}from"./Group-CpVZcUzJ.js";import{P as y}from"./PanelHeaderBack-GRk06dO8.js";import{P as f}from"./Placeholder-igZHmR7O.js";import{T as U,a as b}from"./TabbarItem-CF3P6UpE.js";import{a as I,b as g,I as S,c as j,d as P}from"./user_circle_outline_28-DNoQP8XB.js";import{I as z}from"./newsfeed_outline_56-DeCxEkhK.js";import"./VisuallyHidden-DX4ud0qi.js";import"./Removable-YvJNJGGv.js";import"./children-CHwlOS0u.js";import"./IconButton-DbMMimp0.js";import"./Tappable-bphv_Btw.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-yIrZH96-.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1lt5OkO.js";import"./useConfigDirection-EbyEgXYN.js";import"./useGlobalEventListener-Cm_NgAlW.js";import"./useEventListener-YcbCw0KM.js";import"./cancel_24-Cwv97N5Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./SimpleCell-DQPKEDPo.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DEEoTBIm.js";import"./Headline-CWoDuoSH.js";import"./Subhead-BEeAaWS4.js";import"./chevron_compact_right_24-B5zmhySD.js";import"./chevron_16-DOWOaZPd.js";import"./AdaptiveIconRenderer-BiY9YK_m.js";import"./reorder_ios_24-DFJ54ZcX.js";import"./check_box_on_24-DAmXux97.js";import"./check_circle_on_24-DzAT-CYG.js";import"./constants-CtEIZ0Vq.js";import"./Caption-C53AGAFT.js";import"./PanelHeaderButton-DbPVlTUR.js";import"./Title-CFAhKLGN.js";import"./chevron_left_outline_28-1djEvebm.js";import"./chevron_left_outline_20-DgMNq689.js";const k=({children:r,initialScroll:s,saveScroll:a})=>{const{getScroll:t,scrollTo:n}=u.useContext(O);return _(()=>(typeof s=="number"&&n(0,s),()=>a(t().y)),[]),e.jsx(u.Fragment,{children:r})};try{k.displayName="ScrollSaver",k.__docgenInfo={description:"",displayName:"ScrollSaver",props:{initialScroll:{defaultValue:null,description:"",name:"initialScroll",required:!1,type:{name:"number"}},saveScroll:{defaultValue:null,description:"",name:"saveScroll",required:!0,type:{name:"(this: void, scroll: number) => any"}}}}}catch{}const J="_host_1deqj_1",X={host:J},v=({activeStory:r,tabbar:s,children:a,...t})=>{const n=u.useRef({}).current,i=u.Children.toArray(a).find(o=>u.isValidElement(o)&&T(o.props)===r)??null;return e.jsxs(N,{...t,baseClassName:R(X.host,s&&"vkuiInternalEpic--hasTabbar"),children:[e.jsx(k,{initialScroll:n[r]||0,saveScroll:o=>n[r]=o,children:i},r),s]})};try{v.displayName="Epic",v.__docgenInfo={description:"",displayName:"Epic",props:{tabbar:{defaultValue:null,description:"Компонент Tabbar, который будет отображаться снизу.",name:"tabbar",required:!1,type:{name:"ReactNode"}},activeStory:{defaultValue:null,description:"`id` активного окна.",name:"activeStory",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Внутри `Epic` может находиться либо коллекция `Root`,\nлибо коллекция `View`. У каждого элемента коллекции должен быть уникальный `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const Me={title:"Navigation/Epic",component:v,parameters:q("Epic",W,M),tags:["Навигация"]},x={backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8},C={render:function(){const s=V(),{viewWidth:a}=D(),[t,n]=u.useState("profile"),i=B=>n(B.currentTarget.dataset.story),o=s!=="vkcom";return e.jsxs(G,{header:o&&e.jsx(l,{delimiter:"none"}),center:!0,children:[a.tabletPlus&&e.jsx(E,{className:a.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(c,{children:[o&&e.jsx(l,{}),e.jsxs(d,{children:[e.jsx(h,{disabled:t==="feed",style:t==="feed"?x:void 0,"data-story":"feed",onClick:i,before:e.jsx(I,{}),children:"feed"}),e.jsx(h,{disabled:t==="services",style:t==="services"?x:void 0,"data-story":"services",onClick:i,before:e.jsx(g,{}),children:"services"}),e.jsx(h,{disabled:t==="messages",style:t==="messages"?x:void 0,"data-story":"messages",onClick:i,before:e.jsx(S,{}),children:"messages"}),e.jsx(h,{disabled:t==="clips",style:t==="clips"?x:void 0,"data-story":"clips",onClick:i,before:e.jsx(j,{}),children:"clips"}),e.jsx(h,{disabled:t==="profile",style:t==="profile"?x:void 0,"data-story":"profile",onClick:i,before:e.jsx(P,{}),children:"profile"})]})]})}),e.jsx(E,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(v,{activeStory:t,tabbar:a.tabletMinus&&e.jsxs(U,{className:a.tabletMinus.className,children:[e.jsx(b,{onClick:i,selected:t==="feed","data-story":"feed",label:"Новости",children:e.jsx(I,{})}),e.jsx(b,{onClick:i,selected:t==="services","data-story":"services",label:"Сервисы",children:e.jsx(g,{})}),e.jsx(b,{onClick:i,selected:t==="messages","data-story":"messages",indicator:e.jsx(L,{size:"s",mode:"primary",appearance:"accent-red",children:"12"}),label:"Сообщения",children:e.jsx(S,{})}),e.jsx(b,{onClick:i,selected:t==="clips","data-story":"clips",label:"Клипы",children:e.jsx(j,{})}),e.jsx(b,{onClick:i,selected:t==="profile","data-story":"profile",indicator:e.jsx(F,{mode:"prominent",children:"Есть обновления"}),label:"Профиль",children:e.jsx(P,{})})]}),children:[e.jsx(p,{id:"feed",activePanel:"feed",children:e.jsxs(c,{id:"feed",children:[e.jsx(l,{before:e.jsx(y,{onClick:m}),children:"Новости"}),e.jsx(d,{style:{height:"1000px"},children:e.jsx(f,{icon:e.jsx(z,{width:56,height:56})})})]})}),e.jsx(p,{id:"services",activePanel:"services",children:e.jsxs(c,{id:"services",children:[e.jsx(l,{before:e.jsx(y,{onClick:m}),children:"Сервисы"}),e.jsx(d,{style:{height:"1000px"},children:e.jsx(f,{icon:e.jsx(g,{width:56,height:56})})})]})}),e.jsx(p,{id:"messages",activePanel:"messages",children:e.jsxs(c,{id:"messages",children:[e.jsx(l,{before:e.jsx(y,{onClick:m}),children:"Сообщения"}),e.jsx(d,{style:{height:"1000px"},children:e.jsx(f,{icon:e.jsx(S,{width:56,height:56})})})]})}),e.jsx(p,{id:"clips",activePanel:"clips",children:e.jsxs(c,{id:"clips",children:[e.jsx(l,{before:e.jsx(y,{onClick:m}),children:"Клипы"}),e.jsx(d,{style:{height:"1000px"},children:e.jsx(f,{icon:e.jsx(j,{width:56,height:56})})})]})}),e.jsx(p,{id:"profile",activePanel:"profile",children:e.jsxs(c,{id:"profile",children:[e.jsx(l,{before:e.jsx(y,{onClick:m}),children:"Профиль"}),e.jsx(d,{style:{height:"1000px"},children:e.jsx(f,{icon:e.jsx(P,{width:56,height:56})})})]})})]})})]})}};var w,H,A;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(H=C.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const We=["Example"];export{C as Example,We as __namedExportsOrder,Me as default};
