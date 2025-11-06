import{b as c,d as u,j as r,r as m}from"./iframe-CRvvLw_c.js";import{M as f}from"./ModalWrapper-DTJSDWlM.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-4qjXZgjv.js";import{a as l,M as h}from"./ModalPageHeader-Axj5frvl.js";import{M as D}from"./ModalOutlet-C9SNPWcA.js";import{P as j}from"./PanelHeaderButton-J2vwpHg5.js";import{I as P}from"./done_24-BWPtfbXs.js";import{I}from"./cancel_24-Bj5mGOBW.js";import"./Button-C8kpyiaO.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BeKI5I2R.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-ExmaeT5t.js";import"./Tappable-BL_Dp9-M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C5yyRKxt.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-jCwC7LNS.js";import"./ModalRoot-xiSyHIWS.js";import"./AppRootPortal-NZw49JW8.js";import"./useColorScheme-Dg8vGXhe.js";import"./createPortal-CEA54U8j.js";import"./ColorSchemeProvider-Cyqs8Swv.js";import"./ConfigProviderOverride-AsEUQZ3i.js";import"./Placeholder-BPD7LRUO.js";import"./Headline-D6S1r3dC.js";import"./Title-CR_Ip4zZ.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DVwtVtN2.js";import"./FocusTrap-BLplPfjw.js";import"./useFocusTrap-DtP6NXl7.js";import"./useMutationObserver-CYZaENm6.js";import"./ModalOutsideButton-CK_We3hz.js";import"./ModalOutsideButtons-BSYz3pm2.js";import"./Flex-BcidZVNx.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-stHHqvfl.js";import"./cancel_20-BYR5vbH5.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./useCSSTransition-BhpevFZk.js";import"./useStateWithPrev-Kk8TUOj4.js";import"./rubberbandIfOutOfBounds-iqMu52DA.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
