import{g as R,d as O,u as z,r as n,j as e,f as M,h as d,P as r,S as u,V as A}from"./iframe-k6odcVfq.js";import{D as w,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as W}from"./Alert-BViB7Kh9.js";import{A as h}from"./Avatar-BhZm66jC.js";import{B as P}from"./Button-BOH5rx1N.js";import{C as p}from"./Cell-PL4IxNDy.js";import{C as f}from"./CellButton-QaA2mHcy.js";import{G as t}from"./Group-O3l4QVPu.js";import{M as S,a as g}from"./ModalPageHeader-kA_j01Gj.js";import{M as L}from"./ModalRoot-DkSucIdR.js";import{P as i}from"./Placeholder-kItaJEPQ.js";import{I as _}from"./users_outline_56-CKMVqPeX.js";import{I as N}from"./mention_outline_56-DPu7ZBl7.js";import{I as F}from"./message_read_outline_56-C4KDXFGd.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./PopoutWrapper-DDQ3jPkH.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-BqeF2ogC.js";import"./InputUtils-C1ugcw4m.js";import"./FocusTrap-BO_9uuti.js";import"./useFocusTrap-CNN63JoG.js";import"./useMutationObserver-CpuDc0mt.js";import"./IconButton-dHj7AK-z.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-D-1P4bzL.js";import"./ModalDismissButton-Bqk0AfT2.js";import"./ModalOutsideButton-BAwrXwXz.js";import"./cancel_20-DU5zqnJt.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./Caption-CAbXIvPt.js";import"./Footnote-DHnfr3c7.js";import"./Title-DF65glat.js";import"./useCSSKeyframesAnimationController-BROJHIFn.js";import"./ImageBase-BDH625NM.js";import"./ImageBaseBadge-DRsh_8l_.js";import"./useFocusWithin-Bs7KV-km.js";import"./useIsClient-C3_XghNw.js";import"./useConfigDirection-CxnUW9rE.js";import"./online_mobile_12-DaP3HP9x.js";import"./helpers-QklJbEbU.js";import"./Spinner-COoI1Hcx.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-DCOjXm07.js";import"./children-CYWK7spH.js";import"./useGlobalEventListener-szCziyIJ.js";import"./useEventListener-ongRIzns.js";import"./cancel_24-fcxuZKq0.js";import"./SimpleCell-LorozRfg.js";import"./Headline-BdgiMIb0.js";import"./Subhead-CfBOCg31.js";import"./chevron_compact_right_24-Baa4ZBCF.js";import"./chevron_16-C9RD0OpX.js";import"./AdaptiveIconRenderer-gQn7di2U.js";import"./reorder_ios_24-BFpJaCA4.js";import"./check_box_on_24-EC5CB3Pr.js";import"./check_circle_on_24-C1ooPDFD.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-r6Iqn2fw.js";import"./rubberbandIfOutOfBounds-vldtSUED.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-vgxI1JyA.js";import"./useStateWithPrev-CT065FoZ.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-CksB2RIu.js";import"./Flex-B4FLAW9v.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BXdQts83.js";const Po={title:"Layout/SplitLayout",component:R,parameters:V("SplitLayout",I,w)},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const b=O(),{viewWidth:x}=z(),[c,G]=n.useState(s[0]),[H,o]=n.useState(null),[B,j]=n.useState(null),C=b==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(R,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>G(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(W,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(A,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(_,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(N,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(F,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),B,e.jsxs(L,{activeModal:H,children:[e.jsx(S,{id:a[0],onClose:()=>o(null),header:e.jsx(g,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(S,{id:a[1],onClose:()=>o(null),header:e.jsx(g,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};var k,v,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const xo=["Playground"];export{m as Playground,xo as __namedExportsOrder,Po as default};
