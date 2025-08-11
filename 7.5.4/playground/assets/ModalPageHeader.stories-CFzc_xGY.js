import{b as c,d as u,j as r,r as m}from"./iframe-BdL7Qu3-.js";import{M as f}from"./ModalWrapper-DUHmzwBq.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-Q36WEfaW.js";import{a as l,M as h}from"./ModalPageHeader-BERHMDfI.js";import{M as D}from"./ModalOutlet-T2yUrpV7.js";import{P as j}from"./PanelHeaderButton-DEHQmu78.js";import{I as P}from"./done_24-BFuKXACM.js";import{I}from"./cancel_24-DYZXSV6w.js";import"./Button-Bf-yaCMi.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CchhrSOA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DMev6gKF.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./ModalRoot-hKK38qmk.js";import"./AppRootPortal-Lr0ibmIo.js";import"./useColorScheme-BFusLRUe.js";import"./createPortal-B4xhqo8S.js";import"./ColorSchemeProvider-B2wMfrSB.js";import"./ConfigProviderOverride-KE2AAYgd.js";import"./Placeholder-C5DRH5iz.js";import"./Headline-IzZ5JXBy.js";import"./Title-D-2PMsHx.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DnKIEibd.js";import"./FocusTrap-QcsSwy0c.js";import"./useFocusTrap-BZvdIrk4.js";import"./useMutationObserver-BqGBX4ZS.js";import"./ModalOutsideButton-D-Xrt2SC.js";import"./ModalOutsideButtons-WI7Q-lBT.js";import"./Flex-ywbhklHZ.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-W74DUE-r.js";import"./cancel_20-CRZLconA.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./useCSSTransition-BxNiqfS0.js";import"./useStateWithPrev-BwklpJtc.js";import"./rubberbandIfOutOfBounds-C1Zyuspy.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
