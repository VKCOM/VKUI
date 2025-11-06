import{b as c,d as u,j as r,r as m}from"./iframe-DZFG_ML5.js";import{M as f}from"./ModalWrapper-BJ8pOJmA.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-B0AzuXhX.js";import{a as l,M as h}from"./ModalPageHeader-DYnn8JS5.js";import{M as D}from"./ModalOutlet-DnwIi4Fz.js";import{P as j}from"./PanelHeaderButton-DO3sTpY2.js";import{I as P}from"./done_24-7OriJd61.js";import{I}from"./cancel_24-So4WKeZo.js";import"./Button-W48RXyAv.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Ds0i1YsX.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DUSQwRyI.js";import"./Tappable-DivmMzZn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-O0RRum4C.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-rnqmQ_3Q.js";import"./ModalRoot-CDtMAuXU.js";import"./AppRootPortal-DTIQQrr5.js";import"./useColorScheme-u4Oy3KJr.js";import"./createPortal-Cb1hOk6l.js";import"./ColorSchemeProvider-CduwPPyw.js";import"./ConfigProviderOverride-BPkye6ZO.js";import"./Placeholder-CSbEVJlx.js";import"./Headline-DDLNTO9r.js";import"./Title-Yt5D65iS.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-Cwn4IIY9.js";import"./FocusTrap-DTAXdOAt.js";import"./useFocusTrap-Ckt82xM7.js";import"./useMutationObserver-BgbAvC30.js";import"./ModalOutsideButton-CF7046Gq.js";import"./ModalOutsideButtons-Ckjj-Nq_.js";import"./Flex-CzK0xdBK.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-C4YzHNOP.js";import"./cancel_20-COR70G4p.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./useCSSTransition-DETkEHXU.js";import"./useStateWithPrev-izR8_aLG.js";import"./rubberbandIfOutOfBounds-BpwpycsZ.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
