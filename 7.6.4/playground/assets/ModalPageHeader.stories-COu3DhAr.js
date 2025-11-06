import{b as c,c as u,j as r,r as m}from"./iframe-gnG2DlPI.js";import{M as f}from"./ModalWrapper-B_BJDD53.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DhknKQKb.js";import{a as l,M as h}from"./ModalPageHeader-CIkM7aqP.js";import{M as D}from"./ModalOutlet-BKlvOIaB.js";import{P as j}from"./PanelHeaderButton-DE1FFYyv.js";import{I as P}from"./done_24-zHG1wouH.js";import{I}from"./cancel_24-D159N_1T.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-0nci1iZm.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CpE2KS8o.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./ModalRoot-B18DBk16.js";import"./AppRootPortal-Czy3ESyL.js";import"./useColorScheme-vbaHcGpn.js";import"./createPortal-B06EttXw.js";import"./ColorSchemeProvider-BCLoO_b0.js";import"./ConfigProviderOverride-BGC5vwuB.js";import"./Placeholder-DGeNKHv7.js";import"./Headline-K5SxFgY1.js";import"./Title-B3iIrqRR.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BOsOFWQU.js";import"./FocusTrap-2yAVIkw9.js";import"./useFocusTrap-BxxxDrxm.js";import"./useMutationObserver-BgOYgPZV.js";import"./ModalOutsideButton-DTWVQ2Pp.js";import"./ModalOutsideButtons-7PmfidWB.js";import"./Flex-DS626cxD.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DrMf6IgL.js";import"./cancel_20-DrhfgE2e.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BKpCxyVm.js";import"./rubberbandIfOutOfBounds-CR1FODEc.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
