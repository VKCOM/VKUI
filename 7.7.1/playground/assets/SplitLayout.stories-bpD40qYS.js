import{f as R,c as O,u as z,r as n,j as e,e as M,g as d,P as r,S as u,V as A}from"./iframe-dTlwAXGa.js";import{D as w,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as W}from"./Alert-Cb_1-nsa.js";import{A as h}from"./Avatar-D1LFFtlD.js";import{B as P}from"./Button-Bf3MOszz.js";import{C as p}from"./Cell-GJHfCsHL.js";import{C as f}from"./CellButton-vaR1rU5j.js";import{G as t}from"./Group-CrremWw-.js";import{M as g,a as S}from"./ModalPageHeader-D-tiVqMG.js";import{M as L}from"./ModalRoot-BG8AhbFw.js";import{P as i}from"./Placeholder-Du55m0ko.js";import{I as _}from"./users_outline_56-D-MqiPIx.js";import{I as N}from"./mention_outline_56-DK10Uk_K.js";import{I as F}from"./message_read_outline_56-CIzt-4S7.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-DvsIiuGf.js";import"./useColorScheme-BL3jX5yR.js";import"./createPortal-HGqhkvd7.js";import"./ColorSchemeProvider-DYm1IVe2.js";import"./ConfigProviderOverride-xMCWz3c3.js";import"./PopoutWrapper-BIpOHf-d.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-BTXgLHzl.js";import"./InputUtils-CtGJ0DI4.js";import"./FocusTrap-_q57YEfs.js";import"./useFocusTrap-C9pJFuji.js";import"./useMutationObserver-DdyjCLuO.js";import"./IconButton-MYG7es_8.js";import"./Tappable-qMfTC7Pz.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-JumwXwcS.js";import"./ModalDismissButton-CBzWtd4E.js";import"./ModalOutsideButton-BTlAj5aR.js";import"./cancel_20-BgBkGEM6.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BzXaktSd.js";import"./Footnote-DJb5ZlwN.js";import"./Title-ShBYOT9p.js";import"./useCSSKeyframesAnimationController-B8NOVYjS.js";import"./ImageBase-AJ3e9bE9.js";import"./ImageBaseBadge-Gqd0lug3.js";import"./useFocusWithin-kuId0kJs.js";import"./useIsClient-BVOBl7-A.js";import"./useConfigDirection-BIk700TM.js";import"./online_mobile_12-CBAdE4s5.js";import"./helpers-QklJbEbU.js";import"./Spinner-Ct1kmwhu.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-BvBDqmqD.js";import"./children-D0xCpVZl.js";import"./useGlobalEventListener-DR7m9Uut.js";import"./useEventListener-CM8ERZU-.js";import"./cancel_24-sfpNhjae.js";import"./SimpleCell-pVFSTIJK.js";import"./Headline-nnEuybdp.js";import"./Subhead-BlOKXAAl.js";import"./chevron_compact_right_24-C3ktCmz2.js";import"./chevron_16-DHR9v_Z1.js";import"./AdaptiveIconRenderer-ESMEwK9d.js";import"./reorder_ios_24-CYpPEkSN.js";import"./check_box_on_24-Be72trti.js";import"./check_circle_on_24-QthlvxfI.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-BuJJSCxP.js";import"./rubberbandIfOutOfBounds-BMt1a4ED.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-lnRvpBqi.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-D_ladGSn.js";import"./Flex-DdaADNh9.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-B2P9khg7.js";const jo={title:"Layout/SplitLayout",component:R,parameters:V("SplitLayout",I,w),tags:["Раскладка"]},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const b=O(),{viewWidth:x}=z(),[c,G]=n.useState(s[0]),[H,o]=n.useState(null),[B,j]=n.useState(null),C=b==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(R,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>G(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(W,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(A,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(_,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(N,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(F,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),B,e.jsxs(L,{activeModal:H,children:[e.jsx(g,{id:a[0],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(g,{id:a[1],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};var k,v,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const Co=["Playground"];export{m as Playground,Co as __namedExportsOrder,jo as default};
