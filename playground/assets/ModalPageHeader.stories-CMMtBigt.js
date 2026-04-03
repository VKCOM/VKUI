import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Br as n,On as r,_t as i,ei as a,i as o,n as s,ps as c,vt as l,yo as u}from"./iframe-DYi3TMGx.js";import{n as d,t as f}from"./PanelHeaderButton-Bg8EgtZT.js";import{f as p,m}from"./ModalOutlet-DgejicEX.js";import{i as h,n as g,r as _,t as v}from"./ModalPageHeader-No7BUU1k.js";import{n as y,t as b}from"./Div-UtoKuBYO.js";import{i as x,n as S,t as C}from"./constants-DdtDghDm.js";import{n as w,t as T}from"./ModalWrapper-Dk3UTBOu.js";var E,D,O,k,A,j,M;t((()=>{E=e(c(),1),r(),i(),w(),s(),x(),y(),h(),m(),d(),g(),D=u(),O={title:`Modals/ModalPageHeader`,component:v,parameters:{...C,...S},decorators:[o],tags:[`Модальные окна`]},k=`MODAL_ID`,A=({children:e})=>{let{onClose:t}=E.useContext(p);return(0,D.jsx)(f,{onClick:()=>t?.(k),children:e})},j={render:function(e){let t=l();return(0,D.jsx)(T,{type:`page`,customModal:E.useCallback(({modalProps:r})=>(0,D.jsx)(_,{id:k,header:(0,D.jsx)(v,{before:(0,D.jsx)(E.Fragment,{children:(t===`android`||t===`vkcom`)&&(0,D.jsx)(A,{children:(0,D.jsx)(a,{})})}),after:(0,D.jsxs)(E.Fragment,{children:[(t===`android`||t===`vkcom`)&&(0,D.jsx)(A,{children:(0,D.jsx)(n,{})}),t===`ios`&&(0,D.jsx)(A,{children:`Готово`})]}),...e,children:`Заголовок модальной страницы`}),...r,children:(0,D.jsx)(b,{style:{height:1e3},children:`Example`})}),[e,t])})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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