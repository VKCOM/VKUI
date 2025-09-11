import{b as c,c as u,j as r,r as m}from"./iframe-DfeTZ_Fw.js";import{M as f}from"./ModalWrapper-vNuS6rbn.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DWHB9CiA.js";import{a as l,M as h}from"./ModalPageHeader-a_WfUAdD.js";import{M as D}from"./ModalOutlet--k0I3WuP.js";import{P as j}from"./PanelHeaderButton-CcY6eXfT.js";import{I as P}from"./done_24-vOaclkgK.js";import{I}from"./cancel_24-XhVC2QBS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CYtH28qE.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Crblzylq.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BuJles22.js";import"./Tappable-BBWke1IE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C-I8ensD.js";import"./ModalRoot-CVnTwmtm.js";import"./AppRootPortal-Cf-1kRil.js";import"./useColorScheme-BGgcYhBu.js";import"./createPortal-B5-CgryZ.js";import"./ColorSchemeProvider-Ct7XlnnY.js";import"./ConfigProviderOverride-BwkUJRE0.js";import"./Placeholder-DqIiFZ2t.js";import"./Headline-BbT30PkZ.js";import"./Title-BA2sPfYi.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-Bgm0pOnu.js";import"./FocusTrap-8k_1peoT.js";import"./useFocusTrap-MVv2Y8kh.js";import"./useMutationObserver-CEGwROLs.js";import"./ModalOutsideButton--rRhEehI.js";import"./ModalOutsideButtons-D79cLBkH.js";import"./Flex-z5AzZDL-.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-nYtC7Vih.js";import"./cancel_20-Cahc_esy.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BsPn6U4g.js";import"./rubberbandIfOutOfBounds-DH79xaNV.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
