import{f as R,c as O,u as z,r as n,j as e,e as M,g as d,P as r,S as u,V as A}from"./iframe-qoTtUH8h.js";import{D as w,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as W}from"./Alert-BumO36kY.js";import{A as h}from"./Avatar-CkZgodeV.js";import{B as P}from"./Button-qb2UxdVt.js";import{C as p}from"./Cell-DHDSADlq.js";import{C as f}from"./CellButton-CR1kjfSM.js";import{G as t}from"./Group-jWXxgMZf.js";import{M as g,a as S}from"./ModalPageHeader-CYOpgY3D.js";import{M as L}from"./ModalRoot-PxupKVzW.js";import{P as i}from"./Placeholder-BtNJusng.js";import{I as _}from"./users_outline_56-CVJA6FqG.js";import{I as N}from"./mention_outline_56-2Xr_Cnih.js";import{I as F}from"./message_read_outline_56--UmETfBU.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-xRZPOq86.js";import"./useColorScheme-xLZC0aKi.js";import"./createPortal-yS_K3Zg-.js";import"./ColorSchemeProvider-DCb80HKd.js";import"./ConfigProviderOverride-CdXDfhg5.js";import"./PopoutWrapper-BQ5tKZ0Z.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-BRLOZdbb.js";import"./InputUtils-DCqC4s6H.js";import"./FocusTrap-Coy9SLFa.js";import"./useFocusTrap-DczJyGs9.js";import"./useMutationObserver-CpTcJWWe.js";import"./IconButton-B17wjzUA.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-BqFtMTWb.js";import"./ModalDismissButton-Bwufv4lP.js";import"./ModalOutsideButton-DlmkkJq_.js";import"./cancel_20-CPH3U7xy.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-bIdYMpTC.js";import"./Footnote-DrM4b0WC.js";import"./Title-ksxyfi6H.js";import"./useCSSKeyframesAnimationController-B5Q5uN6l.js";import"./ImageBase-DjQ3psw2.js";import"./ImageBaseBadge-taKiFPaz.js";import"./useFocusWithin-E39X-WYV.js";import"./useIsClient-BcbdMWH_.js";import"./useConfigDirection-DgRc04K6.js";import"./online_mobile_12-ucwY04eZ.js";import"./helpers-QklJbEbU.js";import"./Spinner-C8UkQVmM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-CFszRLWh.js";import"./children-Tz7yKUE7.js";import"./useGlobalEventListener-stOUD5xR.js";import"./useEventListener-Czd3Qf-C.js";import"./cancel_24-CLPDrLYl.js";import"./SimpleCell-CHXFqUrO.js";import"./Headline-BOHGExn8.js";import"./Subhead-B5MAyB6Q.js";import"./chevron_compact_right_24-DwIrQ_dr.js";import"./chevron_16-BxL5QhO0.js";import"./AdaptiveIconRenderer-Cl69QEek.js";import"./reorder_ios_24-TYe4fChw.js";import"./check_box_on_24-Dx1FKYI7.js";import"./check_circle_on_24-ArRvPyrj.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-Bn8Oy2zd.js";import"./rubberbandIfOutOfBounds-CsyHtJnd.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-CqiL-me1.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-DQDXtb2A.js";import"./Flex-BMkjpocR.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-OgnoSfIa.js";const jo={title:"Layout/SplitLayout",component:R,parameters:V("SplitLayout",I,w),tags:["Раскладка"]},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const b=O(),{viewWidth:x}=z(),[c,G]=n.useState(s[0]),[H,o]=n.useState(null),[B,j]=n.useState(null),C=b==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(R,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>G(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(W,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(A,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(_,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(N,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(F,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),B,e.jsxs(L,{activeModal:H,children:[e.jsx(g,{id:a[0],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(g,{id:a[1],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};var k,v,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
