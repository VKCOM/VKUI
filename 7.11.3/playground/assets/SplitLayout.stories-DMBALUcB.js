import{f as k,c as G,u as H,r as n,j as e,e as M,g as d,P as r,S as u,V as B}from"./iframe-C4ttrVUJ.js";import{D as O,C as z}from"./constants-DdkjnEgz.js";import{c as A}from"./createStoryParameters-CcwS40kl.js";import{A as w}from"./Alert-BXdZkh2C.js";import{A as h}from"./Avatar-DLLE7n5t.js";import{B as P}from"./Button-BdBXuQJY.js";import{C as p}from"./Cell-Cp71uhqk.js";import{C as f}from"./CellButton-BCWXwzqO.js";import{G as t}from"./Group-CRpAXhsk.js";import{M as g,a as S}from"./ModalPageHeader-BDqqlcG3.js";import{M as I}from"./ModalRoot-ZW5uO94g.js";import{P as i}from"./Placeholder-BGTn6SOw.js";import{I as V}from"./users_outline_56-CGd8GU4w.js";import{I as W}from"./mention_outline_56-B69ROb5_.js";import{I as L}from"./message_read_outline_56-BHnun_UV.js";import"./preload-helper-PPVm8Dsz.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./PopoutWrapper-CN-9myiy.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-BgzpJkYx.js";import"./InputUtils-CD1Rp_t7.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-fpJxHih1.js";import"./useFocusTrap-DST2pyLb.js";import"./useMutationObserver-Ds6OyfWj.js";import"./IconButton-B4UJc4kp.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./VisuallyHidden-XgvirjGY.js";import"./ModalDismissButton-C44zPzSY.js";import"./ModalOutsideButton-BlUkfY7t.js";import"./cancel_20-D6DCplcb.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-Den-IMPb.js";import"./Footnote-D7DVMFfP.js";import"./Title-DTItDJJC.js";import"./useCSSKeyframesAnimationController-iUHQQwp7.js";import"./ImageBase-Cq87jgCn.js";import"./ImageBaseBadge-Cjn2Y5VK.js";import"./useFocusWithin-BAJNppfT.js";import"./useIsClient-CcDyD4m-.js";import"./useConfigDirection-DvmYVNBa.js";import"./online_mobile_12-CiSPADre.js";import"./helpers-QklJbEbU.js";import"./Spinner-CeIULbGb.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-tI4hkoIu.js";import"./children-DylyViM5.js";import"./useGlobalEventListener-2nmt2YdY.js";import"./useEventListener-BQB6QAnN.js";import"./cancel_24-DD0i1EtC.js";import"./SimpleCell-BhfeHX5L.js";import"./Headline-B3vZWFvi.js";import"./Subhead-ChzeQqTJ.js";import"./chevron_compact_right_24-DG2tnjTt.js";import"./chevron_16-CHg4wDrn.js";import"./AdaptiveIconRenderer-DYHxirpm.js";import"./reorder_ios_24-Beh1KLTa.js";import"./check_box_on_24-CrCnysAK.js";import"./check_circle_on_24-BEYLR_Vs.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-Duw1jV0c.js";import"./rubberbandIfOutOfBounds-D1CQ7ad4.js";import"./useCSSTransition-DiFoEoJA.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-BdUoLuwQ.js";import"./Flex-DGfzNkAG.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-B97yUFEZ.js";const ho={title:"Layout/SplitLayout",component:k,parameters:A("SplitLayout",z,O),tags:["Раскладка"]},s=["panel 1","panel 2","panel 3"],a=["modal 1","modal 2"],m={render:function(){const v=G(),{viewWidth:x}=H(),[c,y]=n.useState(s[0]),[R,o]=n.useState(null),[b,j]=n.useState(null),C=v==="vkcom";return e.jsxs(n.Fragment,{children:[e.jsxs(k,{center:!0,header:!C&&e.jsx(r,{delimiter:"none"}),children:[x.tabletPlus&&e.jsx(M,{className:x.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:e.jsxs(d,{children:[!C&&e.jsx(r,{}),e.jsxs(t,{children:[s.map(l=>e.jsx(p,{disabled:l===c,style:l===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>y(l),children:l},l)),e.jsx(u,{}),e.jsx(p,{onClick:()=>o(a[0]),children:"modal 1"}),e.jsx(p,{onClick:()=>o(a[1]),children:"modal 2"}),e.jsx(p,{onClick:()=>j(e.jsx(w,{title:"Alert!",onClose:()=>j(null)})),children:"alert"})]})]})}),e.jsx(M,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:e.jsxs(B,{activePanel:c,children:[e.jsxs(d,{id:s[0],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 1"}),e.jsxs(t,{children:[e.jsx(i,{icon:e.jsx(V,{}),title:"Уведомления от сообществ",action:e.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(u,{}),e.jsx(i,{icon:e.jsx(W,{}),children:"Введите адрес страницы в поле поиска"})]})]}),e.jsxs(d,{id:s[1],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 2"}),e.jsxs(t,{children:[e.jsx(i,{children:"Доступ запрещён"}),e.jsx(u,{}),e.jsx(i,{title:"Находите друзей",action:e.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),e.jsxs(d,{id:s[2],children:[e.jsx(r,{after:e.jsx(h,{size:36}),children:"Panel 3"}),e.jsx(t,{children:e.jsxs(i,{icon:e.jsx(L,{}),action:e.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",e.jsx("br",{}),"сообщений"]})})]})]})})]}),b,e.jsxs(I,{activeModal:R,children:[e.jsx(g,{id:a[0],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 1"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[1]),children:"Modal 2"})})}),e.jsx(g,{id:a[1],onClose:()=>o(null),header:e.jsx(S,{children:"Modal 2"}),children:e.jsx(t,{children:e.jsx(f,{onClick:()=>o(a[0]),children:"Modal 1"})})})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
