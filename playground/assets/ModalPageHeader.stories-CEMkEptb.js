import{b as c,c as u,j as r,r as m}from"./iframe-DvsMcRqO.js";import{M as f}from"./ModalWrapper-0TZermVE.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DMGjRIPr.js";import{a as l,M as h}from"./ModalPageHeader-CyOwFZ_c.js";import{M as D}from"./ModalOutlet-eeM5FkIT.js";import{P as j}from"./PanelHeaderButton-Cwv_3u9I.js";import{I as P}from"./done_24-DRhzIwoN.js";import{I}from"./cancel_24-CxtMKOmC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DoX3DA-M.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Nh-MMopi.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BGLO0lAS.js";import"./Tappable-Dogw4jpa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DquLH6Yl.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-D1AbCbBE.js";import"./ModalRoot-CLjlTkdD.js";import"./AppRootPortal-DhnXzNcV.js";import"./useColorScheme-Bl3NVSSg.js";import"./createPortal-CG3Nvn8a.js";import"./ColorSchemeProvider-CWoA6MaR.js";import"./ConfigProviderOverride-Dy4Z3D95.js";import"./Placeholder-H4GGnd-c.js";import"./Headline-CDYdreGb.js";import"./Title-SHnE0uDa.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-STxsU3hJ.js";import"./FocusTrap-CH7eC_Xz.js";import"./useFocusTrap-UeN2tfkO.js";import"./useMutationObserver-CyH_Q3fo.js";import"./ModalOutsideButton-jWnHLU91.js";import"./ModalOutsideButtons-Dbxx1QFu.js";import"./Flex-BHTHEoj_.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DrQcp-qz.js";import"./cancel_20-BBeUn6f6.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-CNs5zXS8.js";import"./rubberbandIfOutOfBounds-BgN90sEL.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
