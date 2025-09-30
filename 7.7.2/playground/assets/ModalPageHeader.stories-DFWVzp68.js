import{b as c,c as u,j as r,r as m}from"./iframe-qoTtUH8h.js";import{M as f}from"./ModalWrapper-B7tlnhgN.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-FGZmgREe.js";import{a as l,M as h}from"./ModalPageHeader-CYOpgY3D.js";import{M as D}from"./ModalOutlet-Bn8Oy2zd.js";import{P as j}from"./PanelHeaderButton-B6XPCehY.js";import{I as P}from"./done_24-CMtQKGdL.js";import{I}from"./cancel_24-CLPDrLYl.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-qb2UxdVt.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C8UkQVmM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BqFtMTWb.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./ModalRoot-PxupKVzW.js";import"./AppRootPortal-xRZPOq86.js";import"./useColorScheme-xLZC0aKi.js";import"./createPortal-yS_K3Zg-.js";import"./ColorSchemeProvider-DCb80HKd.js";import"./ConfigProviderOverride-CdXDfhg5.js";import"./Placeholder-BtNJusng.js";import"./Headline-BOHGExn8.js";import"./Title-ksxyfi6H.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BRLOZdbb.js";import"./FocusTrap-Coy9SLFa.js";import"./useFocusTrap-DczJyGs9.js";import"./useMutationObserver-CpTcJWWe.js";import"./ModalOutsideButton-DlmkkJq_.js";import"./ModalOutsideButtons-DQDXtb2A.js";import"./Flex-BMkjpocR.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-OgnoSfIa.js";import"./cancel_20-CPH3U7xy.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-CqiL-me1.js";import"./rubberbandIfOutOfBounds-CsyHtJnd.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
