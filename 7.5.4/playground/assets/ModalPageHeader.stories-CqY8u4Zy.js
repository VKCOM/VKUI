import{b as c,d as u,j as r,r as m}from"./iframe-DQDZnzQe.js";import{M as f}from"./ModalWrapper-SsrsUMYN.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-B9g--vaV.js";import{a as l,M as h}from"./ModalPageHeader-DxHwuXjw.js";import{M as D}from"./ModalOutlet-BGKOg2a9.js";import{P as j}from"./PanelHeaderButton-Ch6v3yZ-.js";import{I as P}from"./done_24-DQ0K-Smj.js";import{I}from"./cancel_24-DxEHhXTK.js";import"./Button-CP79mmtk.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BbRcECA7.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-vRsYbH_6.js";import"./Tappable-GGjjvyZD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./ModalRoot-DlPCvemV.js";import"./AppRootPortal-Bq1Lh75N.js";import"./useColorScheme-alZiR8qg.js";import"./createPortal-7OEOxVfD.js";import"./ColorSchemeProvider-KH2nDpqI.js";import"./ConfigProviderOverride-iezr64Uj.js";import"./Placeholder-D0p-hJln.js";import"./Headline-DFYCKKj3.js";import"./Title-DVgoNOIF.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-LApitR64.js";import"./FocusTrap-DE_AH0ax.js";import"./useFocusTrap-m4EN-OKE.js";import"./useMutationObserver-D4iUf7ph.js";import"./ModalOutsideButton-nMc_GNuq.js";import"./ModalOutsideButtons-Bif2Jr-3.js";import"./Flex-CAa4CqOp.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-1W6fExUZ.js";import"./cancel_20-Bs154Wii.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./useCSSTransition-D24MLRF2.js";import"./useStateWithPrev-B98vQEeT.js";import"./rubberbandIfOutOfBounds-BDdpTq3q.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Dr=["Playground"];export{e as Playground,Dr as __namedExportsOrder,hr as default};
