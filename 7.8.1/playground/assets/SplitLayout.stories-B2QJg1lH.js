import{f as k,c as G,u as H,r as n,j as e,e as M,g as d,P as r,S as u,V as B}from"./iframe-DdZr-4mP.js";import{D as O,C as z}from"./constants-DdkjnEgz.js";import{c as A}from"./createStoryParameters-CcwS40kl.js";import{A as w}from"./Alert-Cpm-HRJi.js";import{A as h}from"./Avatar-410xp239.js";import{B as P}from"./Button-BfB_yFLJ.js";import{C as p}from"./Cell-DUdnijE9.js";import{C as f}from"./CellButton-UsLWfRsY.js";import{G as t}from"./Group-DlK5kh75.js";import{M as g,a as S}from"./ModalPageHeader-CGO0WJVZ.js";import{M as I}from"./ModalRoot-U2SvVJ0q.js";import{P as i}from"./Placeholder-Cr090bNy.js";import{I as V}from"./users_outline_56-BMwDEp9w.js";import{I as W}from"./mention_outline_56-BEM53LO9.js";import{I as L}from"./message_read_outline_56-Db4L-x6H.js";import"./preload-helper-PPVm8Dsz.js";import"./AppRootPortal-C2gdNLsf.js";import"./useColorScheme-DV5aetKH.js";import"./createPortal-rWuLF35z.js";import"./ColorSchemeProvider-IMjSaaWc.js";import"./ConfigProviderOverride-VA0sqvdw.js";import"./PopoutWrapper-6mfTyfM8.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-DdUq3wQ0.js";import"./InputUtils-CcKtkKuI.js";import"./FocusTrap-D2jJP0Y_.js";import"./useFocusTrap-C_HnlYsk.js";import"./useMutationObserver-C4v790lX.js";import"./IconButton-C7aWXmKO.js";import"./Tappable-CovdKVQt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./ModalDismissButton-BI5ndhVI.js";import"./ModalOutsideButton-l8aX31oY.js";import"./cancel_20-CeXwbc9_.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-DtU_BWrV.js";import"./Footnote-1KqsUf4m.js";import"./Title-D3itgTrb.js";import"./useCSSKeyframesAnimationController-bE-QFjLP.js";import"./ImageBase-Dd-xxUc3.js";import"./ImageBaseBadge-B_lQou7R.js";import"./useFocusWithin-Bj820Lyk.js";import"./useIsClient-q3rRlZlM.js";import"./useConfigDirection-BdfXEpUn.js";import"./online_mobile_12-nNQkdum-.js";import"./helpers-QklJbEbU.js";import"./Spinner-BjrDa5Np.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-sBXdy_3O.js";import"./children-oqymHkiK.js";import"./useGlobalEventListener-VexK5DUQ.js";import"./useEventListener-EHs5705p.js";import"./cancel_24-SB-_Mfon.js";import"./SimpleCell-CIBNVGZX.js";import"./Headline-BSoQthvj.js";import"./Subhead-xzDyxoRX.js";import"./chevron_compact_right_24-kk3EfcLj.js";import"./chevron_16-qALKhhss.js";import"./AdaptiveIconRenderer-BjiXmkQi.js";import"./reorder_ios_24-CkN9Xqz2.js";import"./check_box_on_24-Dqh-fiAD.js";import"./check_circle_on_24-Bo96Gt5Z.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-poG6V_Gt.js";import"./rubberbandIfOutOfBounds-uy7F2uLd.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-C5_v_or1.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-DjtGCkWS.js";import"./Flex-C8Z68iwv.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-D6gFw0v4.js";const ho={title:"Layout/SplitLayout",component:k,parameters:A("SplitLayout",z,O),tags:["Раскладка"]},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const v=G(),{viewWidth:x}=H(),[c,y]=n.useState(s[0]),[R,o]=n.useState(null),[b,j]=n.useState(null),C=v==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(k,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>y(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(w,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(B,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(V,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(W,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(L,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),b,e.jsxs(I,{activeModal:R,children:[e.jsx(g,{id:a[0],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(g,{id:a[1],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Po=["Playground"];export{m as Playground,Po as __namedExportsOrder,ho as default};
