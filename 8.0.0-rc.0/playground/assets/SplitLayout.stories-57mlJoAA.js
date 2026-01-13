import{e as g,c as W,u as k,r as u,j as i,d as p,f as s,P as a,S as f,V as N}from"./iframe-DP0c1f9Y.js";import{D as O,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as h}from"./Accordion-Bf4Gl9hG.js";import{A as _}from"./Alert-B4A4rLQF.js";import{A as x}from"./Avatar-CijdxBeh.js";import{B as P}from"./Button-DYe3R3CT.js";import{C as n}from"./Cell-BMthsHY3.js";import{C as y}from"./CellButton-z0nep4zs.js";import{G as e}from"./Group-uVVNnULv.js";import{M as q}from"./ModalPageHeader-BnIETAUf.js";import{P as l}from"./Placeholder-BgGYQGcM.js";import{u as E}from"./useModalManager-DZfT1Jak.js";import{I as F}from"./users_outline_56-BY51DDjL.js";import{I as K}from"./mention_outline_56-Cju-aIHv.js";import{I as D}from"./message_read_outline_56-C8V_4vvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useEnsuredControl-BQTVtCet.js";import"./type_checkers-B4iEhslY.js";import"./useCSSKeyframesAnimationController-gogItWDj.js";import"./callMultiple-ChqatQlo.js";import"./SimpleCell-BUlM7B6J.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./Footnote-DJoQQEv9.js";import"./Headline-D5yVS7YY.js";import"./Subhead-CZ6CT0II.js";import"./VisuallyHidden-CsBByQHJ.js";import"./chevron_compact_right_24-DRgaqZzi.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./chevron_16-CM-SIi30.js";import"./chevron_up_24-BwG-n7bB.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./PopoutWrapper-CbiN9CyB.js";import"./useAdaptivityWithJSMediaQueries-DHEYn_LX.js";import"./useGlobalEscKeyDown-XvABs4cA.js";import"./FocusTrap-F0reUUyC.js";import"./useMutationObserver-tL6yc0PX.js";import"./IconButton-DX6zaS9g.js";import"./ModalDismissButton-B18q18Jp.js";import"./ModalOutsideButton-ww0fMYzM.js";import"./cancel_20-BdALp2jd.js";import"./Caption-Bf2pK2j4.js";import"./Title-S_74tDbu.js";import"./ImageBase-CQrk3-c4.js";import"./ImageBaseBadge-D4hwrB2F.js";import"./useFocusWithin-CvS6Su5o.js";import"./useIsClient-RcRRrgRO.js";import"./useConfigDirection-BNkwGAZM.js";import"./online_mobile_12-Qc0twRcH.js";import"./helpers-QklJbEbU.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-BE-e-wqK.js";import"./children-Bag1sNQQ.js";import"./cancel_24-Cb6nnPMq.js";import"./AdaptiveIconRenderer-C6EgprXt.js";import"./reorder_ios_24-Wjb1gd-Q.js";import"./check_box_on_24-D_JjkFdP.js";import"./check_circle_on_24-Bf67vp3K.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-BQtHAZrm.js";import"./rubberbandIfOutOfBounds-BUiiYM3M.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DCXVYVRd.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-Dtz-0vpU.js";import"./Flex-C--pQgbh.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CCCcf5Bk.js";import"./ModalCard-CkJxGxOq.js";import"./ModalCardBase-R68_vtFU.js";import"./Spacing-BYUv_0Qg.js";import"./dismiss_24--0GSOPy5.js";import"./v4-EwEgHOG0.js";const Se={title:"Layout/SplitLayout",component:g,parameters:V("SplitLayout",I,O),tags:["Раскладка"]},r=["panel 1","panel 2","panel 3"],B=["modal 1","modal 2"],d={render:function({children:o,...A}){const H=W(),{viewWidth:v}=k(),[j,R]=E({saveHistory:!1}),[c,z]=u.useState(r[0]),[G,C]=u.useState(null),b=H==="vkcom";function M(){j.openModalPage({id:B[0],header:i.jsx(q,{children:"Modal 1"}),children:i.jsx(e,{children:i.jsx(y,{onClick:S,children:"Modal 2"})})})}function S(){j.openModalPage({id:B[1],header:i.jsx(q,{children:"Modal 2"}),children:i.jsx(e,{children:i.jsx(y,{onClick:M,children:"Modal 1"})})})}return i.jsxs(u.Fragment,{children:[i.jsxs(g,{center:!0,header:!b&&i.jsx(a,{delimiter:"none"}),...A,children:[v.tabletPlus&&i.jsx(p,{className:v.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:i.jsxs(s,{children:[!b&&i.jsx(a,{}),i.jsxs(e,{children:[r.map(t=>i.jsx(n,{disabled:t===c,style:t===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>z(t),children:t},t)),i.jsx(f,{}),i.jsx(n,{onClick:M,children:"modal 1"}),i.jsx(n,{onClick:S,children:"modal 2"}),i.jsx(n,{onClick:()=>C(i.jsx(_,{title:"Alert!",onClosed:()=>C(null)})),children:"alert"})]}),i.jsx(e,{children:i.jsx(L,{})})]})}),i.jsx(p,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:i.jsxs(N,{activePanel:c,children:[i.jsxs(s,{id:r[0],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 1"}),i.jsxs(e,{children:[i.jsx(l,{icon:i.jsx(F,{}),title:"Уведомления от сообществ",action:i.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),i.jsx(f,{}),i.jsx(l,{icon:i.jsx(K,{}),children:"Введите адрес страницы в поле поиска"}),o,i.jsx(L,{})]})]}),i.jsxs(s,{id:r[1],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 2"}),i.jsxs(e,{children:[i.jsx(l,{children:"Доступ запрещён"}),i.jsx(f,{}),i.jsx(l,{title:"Находите друзей",action:i.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),i.jsxs(s,{id:r[2],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 3"}),i.jsx(e,{children:i.jsxs(l,{icon:i.jsx(D,{}),action:i.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",i.jsx("br",{}),"сообщений"]})})]})]})})]}),G,R]})}},m={render:function(){const{viewWidth:o}=k();return i.jsxs(g,{children:[o.tabletPlus&&i.jsx(p,{fixed:!0,width:280,maxWidth:280,className:o.tabletPlus.className,children:i.jsx("div",{style:{padding:12,height:"100%",boxSizing:"border-box",color:"white",backgroundColor:"tomato"},children:"Фиксированная колонка слева"})}),i.jsx(p,{children:i.jsxs("div",{style:{padding:12,height:"1000px",boxSizing:"border-box",color:"white",backgroundColor:"steelblue"},children:["Колонка справа",o.tabletMinus&&i.jsx("p",{className:o.tabletMinus.className,children:"⚠️ колонка слева спрятана по условию адаптивности"})]})})]})}};function L(){return i.jsxs(h,{children:[i.jsx(h.Summary,{children:"Lorem ipsum dolor?"}),i.jsx(h.Content,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam?"})]})}d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ye=["Playground","Empty"];export{m as Empty,d as Playground,ye as __namedExportsOrder,Se as default};
