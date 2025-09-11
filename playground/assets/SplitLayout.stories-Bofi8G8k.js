import{f as R,c as O,u as z,r as n,j as e,e as M,g as d,P as r,S as u,V as A}from"./iframe-D9ctG7Ns.js";import{D as w,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as W}from"./Alert-DZNYnW8P.js";import{A as h}from"./Avatar-DKm75c9w.js";import{B as P}from"./Button-ClDISrDv.js";import{C as p}from"./Cell-DfjQ-TK4.js";import{C as f}from"./CellButton-gL_L0Ag8.js";import{G as t}from"./Group-BG1uXLvs.js";import{M as g,a as S}from"./ModalPageHeader-UjjMeYWg.js";import{M as L}from"./ModalRoot-BkGyBVV-.js";import{P as i}from"./Placeholder-BxtPHBZC.js";import{I as _}from"./users_outline_56-CBUT0DPE.js";import{I as N}from"./mention_outline_56-DVKY-eHT.js";import{I as F}from"./message_read_outline_56-Q-D_AbnU.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./ConfigProviderOverride-BJZJ1bpA.js";import"./PopoutWrapper-BPeJiLH3.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-CVLN_kqX.js";import"./InputUtils-dk1yVFOH.js";import"./FocusTrap-CXlwguwW.js";import"./useFocusTrap-DgL23sHD.js";import"./useMutationObserver-qTqSTRf6.js";import"./IconButton-Cu6N9yzq.js";import"./Tappable-DOmAnzcN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-XRinxkJw.js";import"./ModalDismissButton-CYnt-Som.js";import"./ModalOutsideButton-DcUelrrc.js";import"./cancel_20-DqL2mIPO.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-6ObnKwfL.js";import"./Footnote-BcHikxS0.js";import"./Title-BxTWQERW.js";import"./useCSSKeyframesAnimationController-CR4p02q0.js";import"./ImageBase-qcCzGQe1.js";import"./ImageBaseBadge-C5xgoBYA.js";import"./useFocusWithin-C5Vdk2dl.js";import"./useIsClient-C6WLQkbf.js";import"./useConfigDirection-BepSmh67.js";import"./online_mobile_12-Bfp1yxmz.js";import"./helpers-QklJbEbU.js";import"./Spinner-CdhXnMLF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-D8OEYYHJ.js";import"./children-O1ZDhWOu.js";import"./useGlobalEventListener-DwhKth4J.js";import"./useEventListener-UbYuQ7Ip.js";import"./cancel_24-oGe7O0m1.js";import"./SimpleCell-CeGD-K3T.js";import"./Headline-4n2ELzS2.js";import"./Subhead-DjvqikOr.js";import"./chevron_compact_right_24-DAU9zP3f.js";import"./chevron_16-BEyzHrJY.js";import"./AdaptiveIconRenderer-Bl0Wq8MO.js";import"./reorder_ios_24-DcS2iC4M.js";import"./check_box_on_24-t6dgJu0A.js";import"./check_circle_on_24-CAovDgBP.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-D-t42tjd.js";import"./rubberbandIfOutOfBounds-mYRcWRl-.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-B7uUX9zb.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-Cu_rmbSV.js";import"./Flex-uQiAtQDc.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BgDWNMPk.js";const xo={title:"Layout/SplitLayout",component:R,parameters:V("SplitLayout",I,w),tags:["Раскладка"]},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const b=O(),{viewWidth:x}=z(),[c,G]=n.useState(s[0]),[H,o]=n.useState(null),[B,j]=n.useState(null),C=b==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(R,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>G(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(W,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(A,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(_,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(N,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(F,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),B,e.jsxs(L,{activeModal:H,children:[e.jsx(g,{id:a[0],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(g,{id:a[1],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};var k,v,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
