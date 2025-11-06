import{b as c,d as u,j as r,r as m}from"./iframe-BzXYREd1.js";import{M as f}from"./ModalWrapper-CDC-MwOc.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-_rflgTc6.js";import{a as l,M as h}from"./ModalPageHeader-CcrWh61V.js";import{M as D}from"./ModalOutlet-BWTYHNpu.js";import{P as j}from"./PanelHeaderButton-Tdeqy5UO.js";import{I as P}from"./done_24-BODqotcw.js";import{I}from"./cancel_24-CYr0_4vC.js";import"./Button-C3UHKLcX.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CKaqwWiI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CGoUHCA9.js";import"./Tappable-CEn82fQ0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DoSI9phS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DULFm0M2.js";import"./ModalRoot-C5DxfIpy.js";import"./AppRootPortal-DalSlULG.js";import"./useColorScheme-BFL8-8ar.js";import"./createPortal-udDNqKIg.js";import"./ColorSchemeProvider-CpCL9cxM.js";import"./ConfigProviderOverride-Cadcpf05.js";import"./Placeholder-BF-TXYeJ.js";import"./Headline-CvUEvu-v.js";import"./Title-2928E8uu.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BW0q6kd1.js";import"./FocusTrap-BL9uWNnt.js";import"./useFocusTrap-Orx0aYnt.js";import"./useMutationObserver-DPiiTATP.js";import"./ModalOutsideButton-Ck2y5LRp.js";import"./ModalOutsideButtons-Ctw-5lAu.js";import"./Flex-Bzv7DO_H.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-Bjlru_-d.js";import"./cancel_20-BJMQ5Fmt.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./useCSSTransition-B3MeOCtl.js";import"./useStateWithPrev-DIRc7sTN.js";import"./rubberbandIfOutOfBounds-DgJ0Ov61.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args) {
    const platform = usePlatform();
    return <ModalWrapper modalId={MODAL_ID}>
        <ModalPage id={MODAL_ID} header={<ModalPageHeader before={<React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && <HeaderButton>
                      <Icon24Cancel />
                    </HeaderButton>}
                </React.Fragment>} after={<React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && <HeaderButton>
                      <Icon24Done />
                    </HeaderButton>}
                  {platform === 'ios' && <HeaderButton>Готово</HeaderButton>}
                </React.Fragment>} {...args}>
              Заголовок модальной страницы
            </ModalPageHeader>}>
          <Div style={{
          height: 1000
        }}>Example</Div>
        </ModalPage>
      </ModalWrapper>;
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const hr=["Playground"];export{e as Playground,hr as __namedExportsOrder,Mr as default};
