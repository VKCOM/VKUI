import{e as g,c as W,u as k,r as u,j as i,d as p,f as s,P as a,S as f,V as N}from"./iframe-D-vjmezP.js";import{D as O,C as I}from"./constants-DdkjnEgz.js";import{c as V}from"./createStoryParameters-CcwS40kl.js";import{A as h}from"./Accordion-bYJbJWvi.js";import{A as _}from"./Alert-so0X2rTx.js";import{A as x}from"./Avatar-DAWW409u.js";import{B as P}from"./Button-iOPheJU3.js";import{C as n}from"./Cell-D2NiT4dU.js";import{C as y}from"./CellButton-DzVtSQhu.js";import{G as e}from"./Group-knjA_28m.js";import{M as q}from"./ModalPageHeader-DD4zDwd4.js";import{P as l}from"./Placeholder-DLp1pcyI.js";import{u as E}from"./useModalManager-CA0_WvXd.js";import{I as F}from"./users_outline_56-BIaXlNc6.js";import{I as K}from"./mention_outline_56-CCwkRfFa.js";import{I as D}from"./message_read_outline_56-C22zspmj.js";import"./preload-helper-PPVm8Dsz.js";import"./useEnsuredControl-DBfsmsB8.js";import"./type_checkers-CVMjkZjG.js";import"./useCSSKeyframesAnimationController-BPrxArYG.js";import"./callMultiple-ChqatQlo.js";import"./SimpleCell-CsYR4Aza.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./Footnote-DApQXU2r.js";import"./Headline-Dq88a-b4.js";import"./Subhead-DCgRz-zo.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./chevron_compact_right_24-qWPDpI7y.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-Bb1SKLei.js";import"./chevron_up_24-D5WwjfBv.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./PopoutWrapper-BUF5FlTh.js";import"./useAdaptivityWithJSMediaQueries-DevrISR8.js";import"./useGlobalEscKeyDown-CJjuXJTQ.js";import"./FocusTrap-bmUu0BLP.js";import"./useMutationObserver-Dd7ppQ1q.js";import"./IconButton-DrzcArVi.js";import"./ModalDismissButton-DKgqJCs-.js";import"./ModalOutsideButton-XfLqINuu.js";import"./cancel_20-iVWticgh.js";import"./Caption-Cdq4IzHJ.js";import"./Title-5rqdnq6p.js";import"./ImageBase-CkGCWqjD.js";import"./ImageBaseBadge-B9AwrgDG.js";import"./useFocusWithin-BzKDlGXW.js";import"./useIsClient-Ddk0YKn4.js";import"./useConfigDirection-BUJREPxm.js";import"./online_mobile_12-DwEtobzc.js";import"./helpers-QklJbEbU.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Removable-Db8Ui--t.js";import"./children-DmJGU09q.js";import"./cancel_24-B55ygFBW.js";import"./AdaptiveIconRenderer-CKo_rySp.js";import"./reorder_ios_24-gO4PPlxx.js";import"./check_box_on_24-CgV3p_bd.js";import"./check_circle_on_24-Xof2lI9f.js";import"./constants-CtEIZ0Vq.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-BObAFP2N.js";import"./rubberbandIfOutOfBounds-CVqKReCD.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DvB-HHcQ.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./ModalOutsideButtons-BHPvGVGS.js";import"./Flex-C_be27FX.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CFBg-_BN.js";import"./ModalCard-B-5X0QCk.js";import"./ModalCardBase-C7UKMQVS.js";import"./Spacing-Cw7ZXTkR.js";import"./dismiss_24-cJPxsGgW.js";import"./v4-EwEgHOG0.js";const ye={title:"Layout/SplitLayout",component:g,parameters:V("SplitLayout",I,O),tags:["Раскладка"]},r=["panel 1","panel 2","panel 3"],B=["modal 1","modal 2"],d={render:function({children:o,...A}){const H=W(),{viewWidth:v}=k(),[j,R]=E({saveHistory:!1}),[c,z]=u.useState(r[0]),[G,C]=u.useState(null),b=H==="vkcom";function M(){j.openModalPage({id:B[0],header:i.jsx(q,{children:"Modal 1"}),children:i.jsx(e,{children:i.jsx(y,{onClick:S,children:"Modal 2"})})})}function S(){j.openModalPage({id:B[1],header:i.jsx(q,{children:"Modal 2"}),children:i.jsx(e,{children:i.jsx(y,{onClick:M,children:"Modal 1"})})})}return i.jsxs(u.Fragment,{children:[i.jsxs(g,{center:!0,header:!b&&i.jsx(a,{delimiter:"none"}),...A,children:[v.tabletPlus&&i.jsx(p,{className:v.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:i.jsxs(s,{children:[!b&&i.jsx(a,{}),i.jsxs(e,{children:[r.map(t=>i.jsx(n,{disabled:t===c,style:t===c?{backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8}:{},onClick:()=>z(t),children:t},t)),i.jsx(f,{}),i.jsx(n,{onClick:M,children:"modal 1"}),i.jsx(n,{onClick:S,children:"modal 2"}),i.jsx(n,{onClick:()=>C(i.jsx(_,{title:"Alert!",onClosed:()=>C(null)})),children:"alert"})]}),i.jsx(e,{children:i.jsx(L,{})})]})}),i.jsx(p,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:i.jsxs(N,{activePanel:c,children:[i.jsxs(s,{id:r[0],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 1"}),i.jsxs(e,{children:[i.jsx(l,{icon:i.jsx(F,{}),title:"Уведомления от сообществ",action:i.jsx(P,{size:"m",children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),i.jsx(f,{}),i.jsx(l,{icon:i.jsx(K,{}),children:"Введите адрес страницы в поле поиска"}),o,i.jsx(L,{})]})]}),i.jsxs(s,{id:r[1],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 2"}),i.jsxs(e,{children:[i.jsx(l,{children:"Доступ запрещён"}),i.jsx(f,{}),i.jsx(l,{title:"Находите друзей",action:i.jsx(P,{size:"m",children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})]}),i.jsxs(s,{id:r[2],children:[i.jsx(a,{after:i.jsx(x,{size:36}),children:"Panel 3"}),i.jsx(e,{children:i.jsxs(l,{icon:i.jsx(D,{}),action:i.jsx(P,{size:"m",mode:"tertiary",children:"Показать все сообщения"}),children:["Нет непрочитанных",i.jsx("br",{}),"сообщений"]})})]})]})})]}),G,R]})}},m={render:function(){const{viewWidth:o}=k();return i.jsxs(g,{children:[o.tabletPlus&&i.jsx(p,{fixed:!0,width:280,maxWidth:280,className:o.tabletPlus.className,children:i.jsx("div",{style:{padding:12,height:"100%",boxSizing:"border-box",color:"white",backgroundColor:"tomato"},children:"Фиксированная колонка слева"})}),i.jsx(p,{children:i.jsxs("div",{style:{padding:12,height:"1000px",boxSizing:"border-box",color:"white",backgroundColor:"steelblue"},children:["Колонка справа",o.tabletMinus&&i.jsx("p",{className:o.tabletMinus.className,children:"⚠️ колонка слева спрятана по условию адаптивности"})]})})]})}};function L(){return i.jsxs(h,{children:[i.jsx(h.Summary,{children:"Lorem ipsum dolor?"}),i.jsx(h.Content,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptate voluptatem corrupti cumque id sint officiis rem tempora commodi ad esse nemo facilis, ipsa fugiat explicabo illum adipisci aperiam?"})]})}d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
