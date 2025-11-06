import{b as c,c as u,j as r,r as m}from"./iframe-B4SbMwac.js";import{M as f}from"./ModalWrapper-Bs3CqozW.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BYUBXKL5.js";import{a as l,M as h}from"./ModalPageHeader-CFdQ6qMO.js";import{M as D}from"./ModalOutlet-C0VIERCJ.js";import{P as j}from"./PanelHeaderButton-QyaDVEWX.js";import{I as P}from"./done_24-CEJ1Be1I.js";import{I}from"./cancel_24-BiaNkhfM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CqwGeWDr.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CVJ-p2Lm.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B_fMC41X.js";import"./Tappable-DlzKIRC8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LHka_ZWc.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C948cbKc.js";import"./ModalRoot-ZivfcbGb.js";import"./AppRootPortal-BWPaNlwr.js";import"./useColorScheme-D4AzIlWD.js";import"./createPortal-BRXgEjGv.js";import"./ColorSchemeProvider-B6sJTJHQ.js";import"./ConfigProviderOverride-BEOiP_JX.js";import"./Placeholder-lUMd_sIi.js";import"./Headline-DyfFpR9w.js";import"./Title-BLmuK8KQ.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DRP0gLSP.js";import"./FocusTrap-CQ1U4q6g.js";import"./useFocusTrap-BNQU8TBX.js";import"./useMutationObserver-CvVb8dg4.js";import"./ModalOutsideButton-C5pDyY6y.js";import"./ModalOutsideButtons-DQve135t.js";import"./Flex-kZjkeyzs.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CSv3j4T0.js";import"./cancel_20-BHyPBvu_.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-CoVooBme.js";import"./rubberbandIfOutOfBounds-B1aa0tBp.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
