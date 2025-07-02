import{b as c,d as u,j as r,r as m}from"./iframe-BW2_2Sqh.js";import{M as f}from"./ModalWrapper-BySfCKKe.js";import{D as x,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-Cj5xJOFK.js";import{a as l,M as h}from"./ModalPageHeader-CSJ-bWWI.js";import{M as D}from"./ModalOutlet-CmtSB-Ai.js";import{P as j}from"./PanelHeaderButton-BB71vzOl.js";import{I as P}from"./done_24-Cy2paShU.js";import{I}from"./cancel_24-CE2mq3tL.js";import"./Button-B8UDwXDh.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Ck410QJW.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-0_L4g8bM.js";import"./Tappable-D_Pc41Ky.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSLKIgEW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DYuPlK4j.js";import"./ModalRoot-CyhN83sU.js";import"./AppRootPortal-F6rxXrpM.js";import"./useColorScheme-DfFLwB8B.js";import"./createPortal-BgwYQhDs.js";import"./ColorSchemeProvider-DNcZYulN.js";import"./ConfigProviderOverride-DKz7Q2_Q.js";import"./Placeholder-BJ3bHCIu.js";import"./Headline-C7EO-C2p.js";import"./Title-BsNL9OHU.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-2jw3QplY.js";import"./FocusTrap-DmokX27Q.js";import"./useFocusTrap-CCxzzpOC.js";import"./useMutationObserver-Dl_rwnc3.js";import"./ModalOutsideButton-DbNYQrKn.js";import"./ModalOutsideButtons-BZXgY4mF.js";import"./Flex-DFbImX0X.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DrGLqxxz.js";import"./cancel_20-C-Dh9gs0.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./useCSSTransition-rzEaekAl.js";import"./useStateWithPrev-CMG94Yfr.js";import"./rubberbandIfOutOfBounds-DOhav3Dw.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...g,...x},decorators:[c]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
