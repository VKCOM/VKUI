import{b as c,d as u,j as r,r as m}from"./iframe-DDos8QSD.js";import{M as f}from"./ModalWrapper-VzmTNCHK.js";import{D as x,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-Cmg8g6jV.js";import{a as l,M as h}from"./ModalPageHeader-DhZQqbej.js";import{M as D}from"./ModalOutlet-CvllSe3q.js";import{P as j}from"./PanelHeaderButton-DNA82Xqx.js";import{I as P}from"./done_24-BpiDHxHm.js";import{I}from"./cancel_24-Cjk92GYx.js";import"./Button-Ky5QsFrC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DXID7UE1.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./Tappable-B0kWxOOO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CWxsm2KA.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dyyzogrc.js";import"./ModalRoot-CquvDHen.js";import"./AppRootPortal-Ba3z6brt.js";import"./useColorScheme-DqjxLW2f.js";import"./createPortal-pZ_xEb8D.js";import"./ColorSchemeProvider-DlGS5IA_.js";import"./ConfigProviderOverride-CyArhSE9.js";import"./Placeholder-BN8e1k5G.js";import"./Headline-A5M31mJl.js";import"./Title-Ble1sAc3.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-C-suFO47.js";import"./FocusTrap-kPWSjsD0.js";import"./useFocusTrap-CjwjAyWA.js";import"./useMutationObserver-CUQEMQVw.js";import"./ModalOutsideButton-B0LdG4Nz.js";import"./ModalOutsideButtons-BoLwK0Il.js";import"./Flex-D8iXIcI-.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CiAPPumg.js";import"./cancel_20-BjfQMxop.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./useCSSTransition-Bsyko8Cr.js";import"./useStateWithPrev-Cr0tutSw.js";import"./rubberbandIfOutOfBounds-BKecqWoo.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...g,...x},decorators:[c]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
