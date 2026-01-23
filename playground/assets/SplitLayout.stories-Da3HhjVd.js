import{e as g,c as W,u as k,r as u,j as i,d as p,f as s,P as a,S as f,V as N}from"./iframe-BJ9555aC.js";import{D as O,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as h}from"./Accordion-1nbXd_Oe.js";import{A as _}from"./Alert-DuwjqYcM.js";import{A as x}from"./Avatar-B5z-sg0O.js";import{B as P}from"./Button-BbA_I1es.js";import{C as n}from"./Cell-By-BPbxY.js";import{C as y}from"./CellButton-C0SCpAL-.js";import{G as e}from"./Group-DpwBrIOF.js";import{M as q}from"./ModalPageHeader-Bl6EAlAB.js";import{P as l}from"./Placeholder-BWt6HcxE.js";import{u as E}from"./useModalManager-CYMCGjnx.js";import{I as F}from"./users_outline_56-BcBNCWWd.js";import{I as K}from"./mention_outline_56-B37DT83Y.js";import{I as D}from"./message_read_outline_56-i7oVKsl0.js";import"./preload-helper-PPVm8Dsz.js";import"./useEnsuredControl-3-CGTCCX.js";import"./type_checkers-CVMjkZjG.js";import"./useCSSKeyframesAnimationController-eOlaO98r.js";import"./callMultiple-ChqatQlo.js";import"./SimpleCell-DnYpeFDL.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./Footnote-xxqNAETB.js";import"./Headline-Bb4b2JBA.js";import"./Subhead-ppzL9p3g.js";import"./VisuallyHidden-BpRJPd7L.js";import"./chevron_compact_right_24-DrAMy2kd.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CJFbNzh_.js";import"./chevron_up_24-CRtNUENt.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./PopoutWrapper-5vFndX2f.js";import"./useAdaptivityWithJSMediaQueries-CC96WuMD.js";import"./useGlobalEscKeyDown-CXkiU7ri.js";import"./FocusTrap-Qs6H907S.js";import"./useMutationObserver-B_zcWFq6.js";import"./IconButton-DRWEpqxT.js";import"./ModalDismissButton-C15pr1xf.js";import"./ModalOutsideButton-DBJy-eNx.js";import"./cancel_20-Bjnkubmw.js";import"./Caption-BrB5DlXi.js";import"./Title-BmBt_BL_.js";import"./ImageBase-DZszct4G.js";import"./ImageBaseBadge-CeubzczD.js";import"./useFocusWithin-ClOWbdUU.js";import"./useIsClient-veih0UT_.js";import"./useConfigDirection-BeEtg5OO.js";import"./online_mobile_12-C_FfJS6S.js";import"./helpers-QklJbEbU.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./Removable-wWHIROGY.js";import"./children-CFPqwV5J.js";import"./cancel_24-jJgAHgAr.js";import"./AdaptiveIconRenderer-DUioVxFm.js";import"./reorder_ios_24-CRqmbSYG.js";import"./check_box_on_24-Bzc3wPiJ.js";import"./check_circle_on_24-Cu0k_2dt.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-DOohz1vI.js";import"./rubberbandIfOutOfBounds-p3jqOJwK.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DZFjXY5z.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-fpOf_neC.js";import"./Flex-DmNTXycq.js";import"./gaps-DqOl4b8v.js";import"./CustomScrollView-kMAABzAe.js";import"./ModalCard-BM3t_U71.js";import"./ModalCardBase-DSf7VeCI.js";import"./Spacing-Dy4F7I-W.js";import"./dismiss_24-BDzDjlBI.js";import"./v4-EwEgHOG0.js";const ye={title:"Layout/SplitLayout",component:g,parameters:V("SplitLayout",I,O),tags:["Раскладка"]},r=["panel 1","panel 2","panel 3"],B=["modal 1","modal 2"],d={render:function({children:o,...A}){const H=W(),{viewWidth:v}=k(),[j,R]=E({saveHistory:!1}),[c,z]=u.useState(r[0]),[G,C]=u.useState(null),b=H==="vkcom";function M(){j.openModalPage({id:B[0],header:i.jsx(q,{children:"Modal 1"}),children:i.jsx(e,{children:i.jsx(y,{onClick:S,children:"Modal 2"})})})}function S(){j.openModalPage({id:B[1],header:i.jsx(q,{children:"Modal 2"}),children:i.jsx(e,{children:i.jsx(y,{onClick:M,children:"Modal 1"})})})}return i.jsxs(u.Fragment,{children:[i.jsxs(g,{center:!0,header:!b&&i.jsx(a,{delimiter:"none"}),...A,children:[v.tabletPlus&&i.jsx(p,{className:v.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:i.jsxs(s,{children:[!b&&i.jsx(a,{}),i.jsxs(e,{children:[r.map(t=>i.jsx(n,{disabled:t===c,style:t===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>z(t),children:t},t)),i.jsx(f,{}),i.jsx(n,{onClick:M,children:"modal 1"}),i.jsx(n,{onClick:S,children:"modal 2"}),i.jsx(n,{onClick:()=>C(i.jsx(_,{title:"Alert!",onClosed:()=>C(null)})),children:"alert"})]}),i.jsx(e,{children:i.jsx(L,{})})]})}),i.jsx(p,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:i.jsxs(N,{activePanel:c,children:[i.jsxs(s,{id:r[0],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 1"}),i.jsxs(e,{children:[i.jsx(l,{icon:i.jsx(F,{}),title:"Уведомления от сообществ",action:i.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),i.jsx(f,{}),i.jsx(l,{icon:i.jsx(K,{}),children:"Введите адрес страницы в поле поиска"}),o,i.jsx(L,{})]})]}),i.jsxs(s,{id:r[1],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 2"}),i.jsxs(e,{children:[i.jsx(l,{children:"Доступ запрещён"}),i.jsx(f,{}),i.jsx(l,{title:"Находите друзей",action:i.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),i.jsxs(s,{id:r[2],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 3"}),i.jsx(e,{children:i.jsxs(l,{icon:i.jsx(D,{}),action:i.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",i.jsx("br",{}),"сообщений"]})})]})]})})]}),G,R]})}},m={render:function(){const{viewWidth:o}=k();return i.jsxs(g,{children:[o.tabletPlus&&i.jsx(p,{fixed:!0,width:280,maxWidth:280,className:o.tabletPlus.className,children:i.jsx("div",{style:{padding:12,height:"100%",boxSizing:"border-box",color:"white",backgroundColor:"tomato"},children:"Фиксированная колонка слева"})}),i.jsx(p,{children:i.jsxs("div",{style:{padding:12,height:"1000px",boxSizing:"border-box",color:"white",backgroundColor:"steelblue"},children:["Колонка справа",o.tabletMinus&&i.jsx("p",{className:o.tabletMinus.className,children:"⚠️ колонка слева спрятана по условию адаптивности"})]})})]})}};function L(){return i.jsxs(h,{children:[i.jsx(h.Summary,{children:"Lorem ipsum dolor?"}),i.jsx(h.Content,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam?"})]})}d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render({
    children,
    ...restProps
  }: SplitLayoutProps) {
    const platform = usePlatform();
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    const [modalsApi, modalsHolder] = useModalManager({
      saveHistory: false
    });
    const [panel, setPanel] = React.useState(panels[0]);
    const [popout, setPopout] = React.useState<React.ReactNode | null>(null);
    const isVKCOM = platform === 'vkcom';
    function openModal1() {
      modalsApi.openModalPage({
        id: modals[0],
        header: <ModalPageHeader>Modal 1</ModalPageHeader>,
        children: <Group>
            <CellButton onClick={openModal2}>Modal 2</CellButton>
          </Group>
      });
    }
    function openModal2() {
      modalsApi.openModalPage({
        id: modals[1],
        header: <ModalPageHeader>Modal 2</ModalPageHeader>,
        children: <Group>
            <CellButton onClick={openModal1}>Modal 1</CellButton>
          </Group>
      });
    }
    return <React.Fragment>
        <SplitLayout center header={!isVKCOM && <PanelHeader delimiter="none" />} {...restProps}>
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
                  <Cell onClick={openModal1}>modal 1</Cell>
                  <Cell onClick={openModal2}>modal 2</Cell>
                  <Cell onClick={() => setPopout(<Alert title="Alert!" onClosed={() => setPopout(null)} />)}>
                    alert
                  </Cell>
                </Group>
                <Group>
                  <AdditionalContent />
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
                  {children}
                  <AdditionalContent />
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
        {modalsHolder}
      </React.Fragment>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    return <SplitLayout>
        {viewWidth.tabletPlus && <SplitCol fixed width={280} maxWidth={280} className={viewWidth.tabletPlus.className}>
            <div style={{
          padding: 12,
          height: '100%',
          boxSizing: 'border-box',
          color: 'white',
          backgroundColor: 'tomato'
        }}>
              Фиксированная колонка слева
            </div>
          </SplitCol>}
        <SplitCol>
          <div style={{
          padding: 12,
          height: '1000px',
          boxSizing: 'border-box',
          color: 'white',
          backgroundColor: 'steelblue'
        }}>
            Колонка справа
            {viewWidth.tabletMinus && <p className={viewWidth.tabletMinus.className}>
                ⚠️ колонка слева спрятана по условию адаптивности
              </p>}
          </div>
        </SplitCol>
      </SplitLayout>;
  }
}`,...m.parameters?.docs?.source}}};const qe=["Playground","Empty"];export{m as Empty,d as Playground,qe as __namedExportsOrder,ye as default};
