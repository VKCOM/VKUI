import{b as c,d as u,j as r,r as m}from"./iframe-C2_PECK0.js";import{M as f}from"./ModalWrapper-oVxn9leY.js";import{D as x,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DrMWkE3k.js";import{a as l,M as h}from"./ModalPageHeader-D2FxY1mM.js";import{M as D}from"./ModalOutlet-BFmfLjz4.js";import{P as j}from"./PanelHeaderButton-BLFKL5uU.js";import{I as P}from"./done_24-DFwu5HV5.js";import{I}from"./cancel_24-CulXt8M_.js";import"./Button-DnPEcOt6.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DOBIwFGK.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DSMrBIlo.js";import"./Tappable-DLQDSygG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Ctz6ZMd9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BDpjj3t6.js";import"./ModalRoot-C1eOXnVr.js";import"./AppRootPortal-Q7WzAGvZ.js";import"./useColorScheme-5WrknPov.js";import"./createPortal-yC0ym91a.js";import"./ColorSchemeProvider-DdoBpxie.js";import"./ConfigProviderOverride-6qFI0Cam.js";import"./Placeholder-D1pWzgbm.js";import"./Headline-DKR4TEkK.js";import"./Title-DA9pXnZ8.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-C4sXBOxk.js";import"./FocusTrap--JsurIAg.js";import"./useFocusTrap-CBS2lFwN.js";import"./useMutationObserver-DIp9x6RD.js";import"./ModalOutsideButton-DGRFjtib.js";import"./ModalOutsideButtons-CGea1xlG.js";import"./Flex-CdQYFbKr.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-gvcW3YKp.js";import"./cancel_20-XkSmObOO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./useCSSTransition-vDYk8Z5L.js";import"./useStateWithPrev-C5Aciol_.js";import"./rubberbandIfOutOfBounds-CTmYMoTA.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...g,...x},decorators:[c]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
