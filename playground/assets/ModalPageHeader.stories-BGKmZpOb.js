import{b as c,d as u,j as r,r as m}from"./iframe-DSAhScPT.js";import{M as f}from"./ModalWrapper-DedmFCqu.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-sIjL3Q3w.js";import{a as l,M as h}from"./ModalPageHeader-Bgf9FP4G.js";import{M as D}from"./ModalOutlet-Dj8690AY.js";import{P as j}from"./PanelHeaderButton-DOn4fMzv.js";import{I as P}from"./done_24-DK4ggY__.js";import{I}from"./cancel_24-5SKzeyoh.js";import"./Button-D3Kc_P4_.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-KyMn6wQY.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DIyQgeho.js";import"./Tappable-41du4Si_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-6oth1gD7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CLCgtllv.js";import"./ModalRoot-C6xCmcVU.js";import"./AppRootPortal-CxrPafwR.js";import"./useColorScheme-Cus1gWwQ.js";import"./createPortal-D1QM7FM5.js";import"./ColorSchemeProvider-DxBekgIw.js";import"./ConfigProviderOverride-0fOmGBwc.js";import"./Placeholder-wIyymY7E.js";import"./Headline-CdViHbNM.js";import"./Title-CtXU7qo4.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-uQqZElvZ.js";import"./FocusTrap-D1M1GcdK.js";import"./useFocusTrap-9P94Rqwu.js";import"./useMutationObserver-BLl4oY9n.js";import"./ModalOutsideButton-tpCnsZwk.js";import"./ModalOutsideButtons-B7OO5g5U.js";import"./Flex-DTljptzJ.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-Cuc8sd5U.js";import"./cancel_20-Bbzx0_61.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./useCSSTransition-BNs-Hdxb.js";import"./useStateWithPrev-BRDHZi1j.js";import"./rubberbandIfOutOfBounds-BfzWpSpq.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
