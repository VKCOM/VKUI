import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{Ot as i,mt as a,n as o}from"./dist-JE-Gteso.js";import{n as s,t as c}from"./usePlatform-BWVnZ007.js";import{r as l,t as u}from"./VKUIDecorators-BYQp_QSp.js";import{n as d,t as f}from"./PanelHeaderButton-DJuEJWlD.js";import{f as p,m}from"./ModalOutlet-Xy7l28Yp.js";import{i as h,n as g,r as _,t as v}from"./ModalPageHeader-CYyoAvt3.js";import{n as y,t as b}from"./Div-DkSA0ZW5.js";import{i as x,n as S,t as C}from"./constants-Dj6vOzIh.js";import{n as w,t as T}from"./ModalWrapper-DXjOgGox.js";var E,D,O,k,A,j,M;t((()=>{E=e(n(),1),o(),c(),w(),u(),x(),y(),h(),m(),d(),g(),D=r(),O={title:`Modals/ModalPageHeader`,component:v,parameters:{...C,...S},decorators:[l],tags:[`Модальные окна`]},k=`MODAL_ID`,A=({children:e})=>{let{onClose:t}=E.useContext(p);return(0,D.jsx)(f,{onClick:()=>t?.(k),children:e})},j={render:function(e){let t=s();return(0,D.jsx)(T,{type:`page`,customModal:E.useCallback(({modalProps:n})=>(0,D.jsx)(_,{id:k,header:(0,D.jsx)(v,{before:(0,D.jsx)(E.Fragment,{children:(t===`android`||t===`vkcom`)&&(0,D.jsx)(A,{children:(0,D.jsx)(i,{})})}),after:(0,D.jsxs)(E.Fragment,{children:[(t===`android`||t===`vkcom`)&&(0,D.jsx)(A,{children:(0,D.jsx)(a,{})}),t===`ios`&&(0,D.jsx)(A,{children:`Готово`})]}),...e,children:`Заголовок модальной страницы`}),...n,children:(0,D.jsx)(b,{style:{height:1e3},children:`Example`})}),[e,t])})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
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
        }}>Example</Div>
          </ModalPage>;
    }, [args, platform]);
    return <ModalWrapper type="page" customModal={CustomModal} />;
  }
}`,...j.parameters?.docs?.source}}},M=[`Playground`]}))();export{j as Playground,M as __namedExportsOrder,O as default};