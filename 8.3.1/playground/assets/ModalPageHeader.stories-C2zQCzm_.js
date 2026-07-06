import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{$n as i,Tn as a,n as o}from"./dist-Ddx9HyIL.js";import{n as s,t as c}from"./usePlatform-BjjJ-ijZ.js";import{Nt as l,jt as u}from"./iframe-CgMGh-8q.js";import{n as d,t as f}from"./PanelHeaderButton-gRwMi-8u.js";import{g as p,m}from"./ModalOutlet-Bx5z7RXS.js";import{i as h,n as g,r as _,t as v}from"./ModalPageHeader-CVISMkPy.js";import{n as y,t as b}from"./Div-Cd0q8MDi.js";import{i as x,n as S,t as C}from"./constants-cjed6ZWB.js";import{n as w,t as T}from"./ModalWrapper-Dd1SWAR-.js";function E({children:e}){let{onClose:t}=D.useContext(m);return(0,O.jsx)(f,{onClick:()=>t?.(k),children:e})}var D,O,k,A,j,M;e((()=>{D=t(n(),1),o(),c(),w(),u(),x(),y(),h(),p(),d(),g(),O=t(r(),1),k=`MODAL_ID`,A={title:`Modals/ModalPageHeader`,component:v,parameters:{...C,...S,liveCodeEditor:{scope:{MODAL_ID:k,HeaderButton:E,ModalWrapper:T}}},decorators:[l],tags:[`Модальные окна`]},j=e=>{let t=s();return(0,O.jsx)(T,{type:`page`,customModal:D.useCallback(({modalProps:n})=>(0,O.jsx)(_,{id:k,header:(0,O.jsx)(v,{before:(0,O.jsx)(D.Fragment,{children:(t===`android`||t===`vkcom`)&&(0,O.jsx)(E,{children:(0,O.jsx)(i,{})})}),after:(0,O.jsxs)(D.Fragment,{children:[(t===`android`||t===`vkcom`)&&(0,O.jsx)(E,{children:(0,O.jsx)(a,{})}),t===`ios`&&(0,O.jsx)(E,{children:`Готово`})]}),...e,children:`Заголовок модальной страницы`}),...n,children:(0,O.jsx)(b,{style:{height:1e3},children:`Example`})}),[e,t])})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: ModalPageHeaderProps) => {
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
}`,...j.parameters?.docs?.source}}},M=[`Playground`]}))();export{j as Playground,M as __namedExportsOrder,A as default};