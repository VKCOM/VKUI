import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{Dn as i,n as a,rr as o}from"./dist-ffVrjb4g.js";import{n as s,t as c}from"./usePlatform-y1UWuT6C.js";import{At as l,Mt as u}from"./iframe-kY6v1YfM.js";import{i as d,n as f,t as p}from"./constants-BWBR8eWE.js";import{n as m,t as h}from"./Div-ByfmwV1U.js";import{n as g,t as _}from"./PanelHeaderButton-CZzfWHSf.js";import{h as v,p as y}from"./ModalOutlet-Dq2qDFQR.js";import{c as b,n as x,s as S,t as C}from"./ModalPage-BVlZnWFW.js";import{n as w,t as T}from"./ModalWrapper-G4X_HNp5.js";function E({children:e}){let{onClose:t}=D.useContext(y);return(0,O.jsx)(_,{onClick:()=>t?.(k),children:e})}var D,O,k,A,j,M;function N(){return(N=t((()=>{D=e(n(),1),a(),c(),w(),l(),d(),m(),x(),v(),g(),b(),O=r(),k=`MODAL_ID`,A={title:`Modals/ModalPageHeader`,component:S,parameters:{...p,...f,liveCodeEditor:{scope:{MODAL_ID:k,HeaderButton:E,ModalWrapper:T}}},decorators:[u],tags:[`Модальные окна`]},j=e=>{let t=s(),n=D.useCallback(({modalProps:n})=>(0,O.jsx)(C,{id:k,header:(0,O.jsx)(S,{before:(0,O.jsx)(D.Fragment,{children:(t===`android`||t===`vkcom`)&&(0,O.jsx)(E,{children:(0,O.jsx)(o,{})})}),after:(0,O.jsxs)(D.Fragment,{children:[(t===`android`||t===`vkcom`)&&(0,O.jsx)(E,{children:(0,O.jsx)(i,{})}),t===`ios`&&(0,O.jsx)(E,{children:`Готово`})]}),...e,children:`Заголовок модальной страницы`}),...n,children:(0,O.jsx)(h,{style:{height:1e3},children:`Example`})}),[e,t]);return(0,O.jsx)(T,{type:`page`,customModal:n})},M=[`Playground`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const CustomModal = React.useCallback(({
    modalProps
  }: CustomModalProps<OpenModalPageProps>) => {
    return <ModalPage id={MODAL_ID} header={<ModalPageHeader before={<React.Fragment>
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
            </ModalPageHeader>} {...modalProps}>
          <Div style={{
        height: 1000
      }}>
            Example
          </Div>
        </ModalPage>;
  }, [args, platform]);
  return <ModalWrapper type="page" customModal={CustomModal} />;
}`,...j.parameters?.docs?.source}}}})))()}N();export{j as Playground,M as __namedExportsOrder,A as default};