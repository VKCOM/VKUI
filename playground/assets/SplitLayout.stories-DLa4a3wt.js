import{f as k,c as G,u as H,r as n,j as e,e as M,g as d,P as r,S as u,V as B}from"./iframe-DcUCz3Gq.js";import{D as O,C as z}from"./constants-DdkjnEgz.js";import{c as A}from"./createStoryParameters-CcwS40kl.js";import{A as w}from"./Alert-Br9VeOm7.js";import{A as h}from"./Avatar-CQC0Jca3.js";import{B as P}from"./Button-BU_mp-AO.js";import{C as p}from"./Cell-DMi1jj6D.js";import{C as f}from"./CellButton-EZmwaH1T.js";import{G as t}from"./Group-qWIgZiP3.js";import{M as g,a as S}from"./ModalPageHeader-Bnt95lCK.js";import{M as I}from"./ModalRoot-CMvHFlab.js";import{P as i}from"./Placeholder-6i7dJVuv.js";import{I as V}from"./users_outline_56-BAWhth-3.js";import{I as W}from"./mention_outline_56-DSofkW9o.js";import{I as L}from"./message_read_outline_56-Q8tEEZXB.js";import"./preload-helper-PPVm8Dsz.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./PopoutWrapper-8FuCeAdM.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-DBwHTVjj.js";import"./InputUtils-Dt7ctke5.js";import"./FocusTrap-i28PizB0.js";import"./useFocusTrap-SSRd9KwO.js";import"./useMutationObserver-BO5feLdl.js";import"./IconButton-CGiS95Aa.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-IsgabQ9w.js";import"./ModalDismissButton-DEhhoQc0.js";import"./ModalOutsideButton-D7UE7j83.js";import"./cancel_20-CKi960W_.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-CDwF9hKw.js";import"./Footnote-lAEBSvha.js";import"./Title-Cb6EL7Un.js";import"./useCSSKeyframesAnimationController-lCWVHvj5.js";import"./ImageBase-DaoVSz36.js";import"./ImageBaseBadge-FhxxxNM2.js";import"./useFocusWithin-4tbXXtmK.js";import"./useIsClient-blsjwI61.js";import"./useConfigDirection-BglQDqbm.js";import"./online_mobile_12-DF9nx8OV.js";import"./helpers-QklJbEbU.js";import"./Spinner-DB1TcyOv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-Bl3ntWOu.js";import"./children-DDwVHqk6.js";import"./useGlobalEventListener-JEtPNfzN.js";import"./useEventListener-D25pA6Ua.js";import"./cancel_24-DyhNO7vT.js";import"./SimpleCell-D963dulm.js";import"./Headline-_bBT78y6.js";import"./Subhead-CcORohtB.js";import"./chevron_compact_right_24-C6YK1MYa.js";import"./chevron_16-BE6lGA5Q.js";import"./AdaptiveIconRenderer-D8fi58IV.js";import"./reorder_ios_24-B8zIQhue.js";import"./check_box_on_24-CBAEM01i.js";import"./check_circle_on_24-UsLiUqKd.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-9tQ_78ij.js";import"./rubberbandIfOutOfBounds-DcB6JHzf.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-BFzfrHGr.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-BbewSR7a.js";import"./Flex-Y1k2ohIq.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CYwznZ8r.js";const ho={title:"Layout/SplitLayout",component:k,parameters:A("SplitLayout",z,O),tags:["Раскладка"]},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const v=G(),{viewWidth:x}=H(),[c,y]=n.useState(s[0]),[R,o]=n.useState(null),[b,j]=n.useState(null),C=v==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(k,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>y(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(w,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(B,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(V,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(W,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(L,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),b,e.jsxs(I,{activeModal:R,children:[e.jsx(g,{id:a[0],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(g,{id:a[1],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
