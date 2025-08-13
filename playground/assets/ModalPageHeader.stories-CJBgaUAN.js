import{b as c,c as u,j as r,r as m}from"./iframe-CNYWi-tv.js";import{M as f}from"./ModalWrapper-Du2PQORd.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-Dsel7-va.js";import{a as l,M as h}from"./ModalPageHeader-BogfjkPt.js";import{M as D}from"./ModalOutlet-C3XtSmSp.js";import{P as j}from"./PanelHeaderButton-DQxaVwVs.js";import{I as P}from"./done_24-BHiJnHFH.js";import{I}from"./cancel_24-CquaKNSW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CRnRhdN6.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CLko12L1.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CIbqknZb.js";import"./Tappable-Bt2S1yMc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-PPkKMUDS.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bfhccirq.js";import"./ModalRoot-Dw4rfs9J.js";import"./AppRootPortal-DIw5dSpY.js";import"./useColorScheme-Cfkm4fLV.js";import"./createPortal-Rj5gNAak.js";import"./ColorSchemeProvider-CnyWnc2N.js";import"./ConfigProviderOverride-HCjSxczU.js";import"./Placeholder-CihXiKCY.js";import"./Headline-DsqdPKjD.js";import"./Title-BvqIwHMA.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-CVxSJGMg.js";import"./FocusTrap-wAa-uW1e.js";import"./useFocusTrap-B9P9em3P.js";import"./useMutationObserver-K5r2VJks.js";import"./ModalOutsideButton-CA_yD7R6.js";import"./ModalOutsideButtons-CpE3Er_A.js";import"./Flex-CZJ42J8T.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BsfvooqJ.js";import"./cancel_20-2mgoHZz-.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-B3x9a4Qo.js";import"./useStateWithPrev-CQgWZ7iu.js";import"./rubberbandIfOutOfBounds-BpIdplzb.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const jr=["Playground"];export{e as Playground,jr as __namedExportsOrder,Dr as default};
