import{b as c,c as u,j as r,r as m}from"./iframe-DveaDHpJ.js";import{M as f}from"./ModalWrapper-D7YUrMKf.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-aPbNskun.js";import{a as l,M as h}from"./ModalPageHeader-D4nH_1Fq.js";import{M as D}from"./ModalOutlet-nqHBSFht.js";import{P as j}from"./PanelHeaderButton-9ov5lTLg.js";import{I as P}from"./done_24-B0aGcppl.js";import{I}from"./cancel_24-v6kzA3DC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Be-a6C2x.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-kmrkwAxt.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-C4fiFLiw.js";import"./Tappable-B6M0Cj2d.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Qd8MhpMK.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./ModalRoot-DntrmyGc.js";import"./AppRootPortal-CrDvtA-l.js";import"./useColorScheme-Ca6Q1evu.js";import"./createPortal-DGpWZUDM.js";import"./ColorSchemeProvider-CxCT7c0Q.js";import"./ConfigProviderOverride-BzdBugdn.js";import"./Placeholder-xKQCa2dS.js";import"./Headline-D2z7orvN.js";import"./Title-DhgmrscL.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-C3ZL7FSW.js";import"./FocusTrap-BlYjcIfF.js";import"./useFocusTrap-B6jSfMpx.js";import"./useMutationObserver-DsBH9-0i.js";import"./ModalOutsideButton-C3co1NnJ.js";import"./ModalOutsideButtons-D9asTgOH.js";import"./Flex-GAm69VaO.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DQok_qII.js";import"./cancel_20-CWK-eBz_.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-k-dDLbvM.js";import"./useStateWithPrev-BQHmZAAg.js";import"./rubberbandIfOutOfBounds-91viQem6.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
