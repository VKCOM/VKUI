import{b as c,c as u,j as r,r as m}from"./iframe-CdtcRMP-.js";import{M as f}from"./ModalWrapper-BmNXHaBE.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-D8ye_oIP.js";import{a as l,M as h}from"./ModalPageHeader-pxhYTZU-.js";import{M as D}from"./ModalOutlet-BhLNU8HY.js";import{P as j}from"./PanelHeaderButton-DVCywEd1.js";import{I as P}from"./done_24-Dsnn94h2.js";import{I}from"./cancel_24-DMLedojc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BpUWCXRP.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C-2OzDn_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CtlI0uOO.js";import"./Tappable-znRvcKvt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-4kqGTgL9.js";import"./ModalRoot-Jf6hhVs-.js";import"./AppRootPortal-BFk_fNEt.js";import"./useColorScheme-Bqwp8l3s.js";import"./createPortal-DFnZY35-.js";import"./ColorSchemeProvider-DeJkjfVG.js";import"./ConfigProviderOverride--tQEj98o.js";import"./Placeholder-CILwtpEp.js";import"./Headline-BNe6tvfn.js";import"./Title-DQC5nBPj.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-KFSEoBZu.js";import"./FocusTrap-RDi_VQaF.js";import"./useFocusTrap-CvctiW_B.js";import"./useMutationObserver-BRkrCep6.js";import"./ModalOutsideButton-BjLsvLZJ.js";import"./ModalOutsideButtons-XuGWi45c.js";import"./Flex-DP1hTtp-.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BzKXL2Z5.js";import"./cancel_20-CzWJ7gWe.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BSoNEXCf.js";import"./useStateWithPrev-Dd6f6IIM.js";import"./rubberbandIfOutOfBounds-KMIGpHb7.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
