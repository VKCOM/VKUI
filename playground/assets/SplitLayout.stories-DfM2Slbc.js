import{f as R,c as O,u as z,r as n,j as e,e as M,g as d,P as r,S as u,V as A}from"./iframe-DvsMcRqO.js";import{D as w,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as W}from"./Alert-CGR8N90G.js";import{A as h}from"./Avatar-ZT3wy4qo.js";import{B as P}from"./Button-DoX3DA-M.js";import{C as p}from"./Cell-8cassXI6.js";import{C as f}from"./CellButton-BalLKf0G.js";import{G as t}from"./Group-CqteXIEy.js";import{M as g,a as S}from"./ModalPageHeader-CyOwFZ_c.js";import{M as L}from"./ModalRoot-CLjlTkdD.js";import{P as i}from"./Placeholder-H4GGnd-c.js";import{I as _}from"./users_outline_56-DqsVuC-A.js";import{I as N}from"./mention_outline_56-Bm3OGUbK.js";import{I as F}from"./message_read_outline_56-D_Rql4Ge.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-DhnXzNcV.js";import"./useColorScheme-Bl3NVSSg.js";import"./createPortal-CG3Nvn8a.js";import"./ColorSchemeProvider-CWoA6MaR.js";import"./ConfigProviderOverride-Dy4Z3D95.js";import"./PopoutWrapper-mPIh_J4R.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-STxsU3hJ.js";import"./InputUtils-D1AbCbBE.js";import"./FocusTrap-CH7eC_Xz.js";import"./useFocusTrap-UeN2tfkO.js";import"./useMutationObserver-CyH_Q3fo.js";import"./IconButton-B-myA0wM.js";import"./Tappable-Dogw4jpa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DquLH6Yl.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-BGLO0lAS.js";import"./ModalDismissButton-BcQMDMGP.js";import"./ModalOutsideButton-jWnHLU91.js";import"./cancel_20-BBeUn6f6.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-B-wss8fo.js";import"./Footnote-BnZcEJ_G.js";import"./Title-SHnE0uDa.js";import"./useCSSKeyframesAnimationController-BOjpqJyH.js";import"./ImageBase-CcOjubak.js";import"./ImageBaseBadge-C13bCicO.js";import"./useFocusWithin-Bvi6Sdqy.js";import"./useIsClient-BccSIQM3.js";import"./useConfigDirection-CN1nmZoK.js";import"./online_mobile_12-pFagfEAZ.js";import"./helpers-QklJbEbU.js";import"./Spinner-Nh-MMopi.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-B20LGpmh.js";import"./children-lVZQ7uKR.js";import"./useGlobalEventListener-BdJfJj1z.js";import"./useEventListener-BkrsSu0A.js";import"./cancel_24-CxtMKOmC.js";import"./SimpleCell-Cc4B-ydZ.js";import"./Headline-CDYdreGb.js";import"./Subhead-Bc3iAQV-.js";import"./chevron_compact_right_24-B3rJ9RFm.js";import"./chevron_16-BxodZLo_.js";import"./AdaptiveIconRenderer-BgTnNLug.js";import"./reorder_ios_24-Bjz4Yiy0.js";import"./check_box_on_24-gtYbFFHx.js";import"./check_circle_on_24-D_xf0Bvx.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-eeM5FkIT.js";import"./rubberbandIfOutOfBounds-BgN90sEL.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-CNs5zXS8.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-Dbxx1QFu.js";import"./Flex-BHTHEoj_.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DrQcp-qz.js";const xo={title:"Layout/SplitLayout",component:R,parameters:V("SplitLayout",I,w),tags:["Раскладка"]},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const b=O(),{viewWidth:x}=z(),[c,G]=n.useState(s[0]),[H,o]=n.useState(null),[B,j]=n.useState(null),C=b==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(R,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>G(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(W,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(A,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(_,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(N,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(F,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),B,e.jsxs(L,{activeModal:H,children:[e.jsx(g,{id:a[0],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(g,{id:a[1],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};var k,v,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function Render() {
    const platform = usePlatform();
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    const [panel, setPanel] = React.useState(panels[0]);
    const [modal, setModal] = React.useState<string | null>(null);
    const [popout, setPopout] = React.useState<React.ReactNode | null>(null);
    const isVKCOM = platform === 'vkcom';
    return <React.Fragment>
        <SplitLayout center header={!isVKCOM && <PanelHeader delimiter="none" />}>
          {viewWidth.tabletPlus && <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
              <Panel>
                {!isVKCOM && <PanelHeader />}
                <Group>
                  {panels.map(i => <Cell key={i} disabled={i === panel} style={i === panel ? {
                backgroundColor: 'var(--vkui--color_background_secondary)',
                borderRadius: 8
              } : {}} onClick={() => setPanel(i)}>
                      {i}
                    </Cell>)}
                  <Separator />
                  <Cell onClick={() => setModal(modals[0])}>modal 1</Cell>
                  <Cell onClick={() => setModal(modals[1])}>modal 2</Cell>
                  <Cell onClick={() => setPopout(<Alert title="Alert!" onClose={() => setPopout(null)} />)}>
                    alert
                  </Cell>
                </Group>
              </Panel>
            </SplitCol>}

          <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
            <View activePanel={panel}>
              <Panel id={panels[0]}>
                <PanelHeader after={<Avatar size={36} />}>Panel 1</PanelHeader>
                <Group>
                  <Placeholder icon={<Icon56UsersOutline />} title="Уведомления от сообществ" action={<Button size="m">Подключить сообщества</Button>}>
                    Подключите сообщества, от которых Вы хотите получать уведомления
                  </Placeholder>
                  <Separator />
                  <Placeholder icon={<Icon56MentionOutline />}>
                    Введите адрес страницы в поле поиска
                  </Placeholder>
                </Group>
              </Panel>

              <Panel id={panels[1]}>
                <PanelHeader after={<Avatar size={36} />}>Panel 2</PanelHeader>
                <Group>
                  <Placeholder>Доступ запрещён</Placeholder>
                  <Separator />
                  <Placeholder title="Находите друзей" action={<Button size="m">Найти друзей</Button>}>
                    Здесь будут отображаться люди, которых вы добавите в друзья
                  </Placeholder>
                </Group>
              </Panel>

              <Panel id={panels[2]}>
                <PanelHeader after={<Avatar size={36} />}>Panel 3</PanelHeader>
                <Group>
                  <Placeholder icon={<Icon56MessageReadOutline />} action={<Button size="m" mode="tertiary">
                        Показать все сообщения
                      </Button>}>
                    Нет непрочитанных
                    <br />
                    сообщений
                  </Placeholder>
                </Group>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
        {popout}
        <ModalRoot activeModal={modal}>
          <ModalPage id={modals[0]} onClose={() => setModal(null)} header={<ModalPageHeader>Modal 1</ModalPageHeader>}>
            <Group>
              <CellButton onClick={() => setModal(modals[1])}>Modal 2</CellButton>
            </Group>
          </ModalPage>
          <ModalPage id={modals[1]} onClose={() => setModal(null)} header={<ModalPageHeader>Modal 2</ModalPageHeader>}>
            <Group>
              <CellButton onClick={() => setModal(modals[0])}>Modal 1</CellButton>
            </Group>
          </ModalPage>
        </ModalRoot>
      </React.Fragment>;
  }
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const jo=["Playground"];export{m as Playground,jo as __namedExportsOrder,xo as default};
