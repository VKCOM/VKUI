import{b as c,d as u,j as r,r as m}from"./iframe-k6odcVfq.js";import{M as f}from"./ModalWrapper-BOh5708o.js";import{D as x,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-D-XRRz9f.js";import{a as l,M as h}from"./ModalPageHeader-kA_j01Gj.js";import{M as D}from"./ModalOutlet-r6Iqn2fw.js";import{P as j}from"./PanelHeaderButton-GCQOmFAe.js";import{I as P}from"./done_24-B1_MA00q.js";import{I}from"./cancel_24-fcxuZKq0.js";import"./Button-BOH5rx1N.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-COoI1Hcx.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-D-1P4bzL.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1ugcw4m.js";import"./ModalRoot-DkSucIdR.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./Placeholder-kItaJEPQ.js";import"./Headline-BdgiMIb0.js";import"./Title-DF65glat.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BqeF2ogC.js";import"./FocusTrap-BO_9uuti.js";import"./useFocusTrap-CNN63JoG.js";import"./useMutationObserver-CpuDc0mt.js";import"./ModalOutsideButton-BAwrXwXz.js";import"./ModalOutsideButtons-CksB2RIu.js";import"./Flex-B4FLAW9v.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BXdQts83.js";import"./cancel_20-DU5zqnJt.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./useCSSTransition-vgxI1JyA.js";import"./useStateWithPrev-CT065FoZ.js";import"./rubberbandIfOutOfBounds-vldtSUED.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...g,...x},decorators:[c]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
