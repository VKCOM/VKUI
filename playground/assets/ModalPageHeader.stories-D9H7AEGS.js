import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{$n as i,Tn as a,n as o}from"./dist-BrTYZxJF.js";import{n as s,t as c}from"./usePlatform-BcYLlEra.js";import{At as l,Mt as u}from"./iframe-33ykgUxE.js";import{n as d,t as f}from"./PanelHeaderButton-Cxnq2Ckm.js";import{h as p,p as m}from"./ModalOutlet-C7v8cFlT.js";import{i as h,n as g,r as _,t as v}from"./ModalPageHeader-s7afqWDA.js";import{n as y,t as b}from"./Div-BflkzbsU.js";import{i as x,n as S,t as C}from"./constants-DBkyy3CT.js";import{n as w,t as T}from"./ModalWrapper-7F0ibWPA.js";function E({children:e}){let{onClose:t}=D.useContext(m);return(0,O.jsx)(f,{onClick:()=>t?.(k),children:e})}var D,O,k,A,j,M;function N(){return(N=t((()=>{D=e(n(),1),o(),c(),w(),l(),x(),y(),h(),p(),d(),g(),O=r(),k=`MODAL_ID`,A={title:`Modals/ModalPageHeader`,component:v,parameters:{...C,...S,liveCodeEditor:{scope:{MODAL_ID:k,HeaderButton:E,ModalWrapper:T}}},decorators:[u],tags:[`Модальные окна`]},j=e=>{let t=s(),n=D.useCallback(({modalProps:n})=>(0,O.jsx)(_,{id:k,header:(0,O.jsx)(v,{before:(0,O.jsx)(D.Fragment,{children:(t===`android`||t===`vkcom`)&&(0,O.jsx)(E,{children:(0,O.jsx)(i,{})})}),after:(0,O.jsxs)(D.Fragment,{children:[(t===`android`||t===`vkcom`)&&(0,O.jsx)(E,{children:(0,O.jsx)(a,{})}),t===`ios`&&(0,O.jsx)(E,{children:`Готово`})]}),...e,children:`Заголовок модальной страницы`}),...n,children:(0,O.jsx)(b,{style:{height:1e3},children:`Example`})}),[e,t]);return(0,O.jsx)(T,{type:`page`,customModal:n})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: ModalPageHeaderProps) => {
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
}`,...j.parameters?.docs?.source}}},M=[`Playground`]})))()}N();export{j as Playground,M as __namedExportsOrder,A as default};