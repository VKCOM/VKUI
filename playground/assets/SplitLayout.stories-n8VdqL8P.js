import{z as P,g as k,j as i,B as p,E as W,r as u,P as s,a,S as f,V as N}from"./iframe-OAvG3iJ-.js";import{D as O,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as h}from"./Accordion-Bf8NW5e8.js";import{A as E}from"./Alert-aUlxr7nh.js";import{A as x}from"./Avatar-BrxjTsBH.js";import{B as g}from"./Button-DKiHHryh.js";import{C as n}from"./Cell-DuZuXofC.js";import{C as y}from"./CellButton-CrXJ0Z_3.js";import{G as e}from"./Group-DBjl1Ywq.js";import{M as q}from"./ModalPageHeader-CTgBtG5G.js";import{P as l}from"./Placeholder-DfwrWGQ1.js";import{u as _}from"./useModalManager-6iNKG8Bw.js";import{I as F}from"./users_outline_56-BzIf46k9.js";import{I as K}from"./mention_outline_56-DQwQWq2S.js";import{I as D}from"./message_read_outline_56-CYAkOvwS.js";import"./preload-helper-PPVm8Dsz.js";import"./useEnsuredControl-BaJkbR4W.js";import"./type_checkers-CVMjkZjG.js";import"./useCSSKeyframesAnimationController-DnCAMIpr.js";import"./callMultiple-ChqatQlo.js";import"./SimpleCell-DUlLPGhw.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./Footnote-Fnz7EDP7.js";import"./Headline-7nMwixf1.js";import"./Subhead-Bec_-0uq.js";import"./VisuallyHidden-W5VCXPiv.js";import"./chevron_compact_right_24-_NSNPn6R.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BS2dVy5C.js";import"./chevron_up_24-MC8dqHVP.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./PopoutWrapper-Hyko8qEL.js";import"./useAdaptivityWithJSMediaQueries-BAc2aZfg.js";import"./warnOnce-BsOPdcXO.js";import"./useGlobalEscKeyDown-BZHzgl9G.js";import"./FocusTrap-Ljy-TizN.js";import"./useMutationObserver-CPtolczk.js";import"./IconButton-B0ADo2bb.js";import"./ModalDismissButton-Ca2bsNPj.js";import"./ModalOutsideButton-CDT9v2cu.js";import"./cancel_20-BkUjsL3a.js";import"./Caption-Dncllwwc.js";import"./Title-AFjtFc-5.js";import"./ImageBase-mTZnpbEK.js";import"./ImageBaseBadge-DET_R2n_.js";import"./useFocusWithin-lydw_Auo.js";import"./useIsClient-DWkou9dw.js";import"./useConfigDirection-EOrqXudq.js";import"./online_mobile_12-BNH-O2OP.js";import"./helpers-QklJbEbU.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./Removable-rqcSgsVP.js";import"./children-jmMlROp9.js";import"./cancel_24-CjsEvKIV.js";import"./AdaptiveIconRenderer-Dg4c0pLA.js";import"./reorder_ios_24-DarQ-ukl.js";import"./check_box_on_24-BSVcQ9Iw.js";import"./check_circle_on_24-BdyPhlE2.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-B_k8xNU4.js";import"./useCSSTransition-Bh9Zdsw1.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-rbH9TQRH.js";import"./ModalOutsideButtons-0hY3L8SA.js";import"./Flex-Cfg1JM6V.js";import"./gaps-TC-23xBl.js";import"./CustomScrollView-CzuykHDu.js";import"./randomUUID-CV8jBseQ.js";import"./ModalCard-Nr8y7RxH.js";import"./ModalCardBase-CS8KXpMZ.js";import"./Spacing-BBhavnBZ.js";import"./dismiss_24-BvHLukGE.js";const ye={title:"Layout/SplitLayout",component:P,parameters:V("SplitLayout",I,O),tags:["Раскладка"]},r=["panel 1","panel 2","panel 3"],B=["modal 1","modal 2"],d={render:function({children:o,...A}){const H=W(),{viewWidth:v}=k(),[j,R]=_({saveHistory:!1}),[c,z]=u.useState(r[0]),[G,C]=u.useState(null),b=H==="vkcom";function M(){j.openModalPage({id:B[0],header:i.jsx(q,{children:"Modal 1"}),children:i.jsx(e,{children:i.jsx(y,{onClick:S,children:"Modal 2"})})})}function S(){j.openModalPage({id:B[1],header:i.jsx(q,{children:"Modal 2"}),children:i.jsx(e,{children:i.jsx(y,{onClick:M,children:"Modal 1"})})})}return i.jsxs(u.Fragment,{children:[i.jsxs(P,{center:!0,header:!b&&i.jsx(a,{delimiter:"none"}),...A,children:[v.tabletPlus&&i.jsx(p,{className:v.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:i.jsxs(s,{children:[!b&&i.jsx(a,{}),i.jsxs(e,{children:[r.map(t=>i.jsx(n,{disabled:t===c,style:t===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>z(t),children:t},t)),i.jsx(f,{}),i.jsx(n,{onClick:M,children:"modal 1"}),i.jsx(n,{onClick:S,children:"modal 2"}),i.jsx(n,{onClick:()=>C(i.jsx(E,{title:"Alert!",onClosed:()=>C(null)})),children:"alert"})]}),i.jsx(e,{children:i.jsx(L,{})})]})}),i.jsx(p,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:i.jsxs(N,{activePanel:c,children:[i.jsxs(s,{id:r[0],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 1"}),i.jsxs(e,{children:[i.jsx(l,{icon:i.jsx(F,{}),title:"Уведомления от сообществ",action:i.jsx(g,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),i.jsx(f,{}),i.jsx(l,{icon:i.jsx(K,{}),children:"Введите адрес страницы в поле поиска"}),o,i.jsx(L,{})]})]}),i.jsxs(s,{id:r[1],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 2"}),i.jsxs(e,{children:[i.jsx(l,{children:"Доступ запрещён"}),i.jsx(f,{}),i.jsx(l,{title:"Находите друзей",action:i.jsx(g,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),i.jsxs(s,{id:r[2],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 3"}),i.jsx(e,{children:i.jsxs(l,{icon:i.jsx(D,{}),action:i.jsx(g,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",i.jsx("br",{}),"сообщений"]})})]})]})})]}),G,R]})}},m={render:function(){const{viewWidth:o}=k();return i.jsxs(P,{children:[o.tabletPlus&&i.jsx(p,{fixed:!0,width:280,maxWidth:280,className:o.tabletPlus.className,children:i.jsx("div",{style:{padding:12,height:"100%",boxSizing:"border-box",color:"white",backgroundColor:"tomato"},children:"Фиксированная колонка слева"})}),i.jsx(p,{children:i.jsxs("div",{style:{padding:12,height:"1000px",boxSizing:"border-box",color:"white",backgroundColor:"steelblue"},children:["Колонка справа",o.tabletMinus&&i.jsx("p",{className:o.tabletMinus.className,children:"⚠️ колонка слева спрятана по условию адаптивности"})]})})]})}};function L(){return i.jsxs(h,{children:[i.jsx(h.Summary,{children:"Lorem ipsum dolor?"}),i.jsx(h.Content,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam?"})]})}d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
