import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Li as r,On as i,X as a,Y as o,fr as s,ps as c,wr as l,yo as u}from"./iframe-DYsbkMbM.js";import{n as d,t as f}from"./Button-Bn0gUV0z.js";import{n as p,t as m}from"./IconButton-CMMNylMQ.js";import{n as h,t as g}from"./Flex-CNw6TAYz.js";import{n as _,t as v}from"./Group-IwBqagW_.js";import{n as y,t as b}from"./CellButton-Fe7ilDjJ.js";import{n as x,t as S}from"./Avatar-B74GJaOW.js";import{n as C,t as w}from"./FormItem-CZVkXbqH.js";import{n as T,t as E}from"./FormLayoutGroup-Dugio69U.js";import{n as D,t as O}from"./Input-w9MmSrfN.js";import{n as k,t as A}from"./Checkbox-CmYtqF0z.js";import{n as j,t as M}from"./Div-DVktvkLx.js";import{n as N,t as P}from"./Popover-Y9VHOIpc.js";import{i as F,n as I}from"./constants-CXYaXe_q.js";import{n as L,t as R}from"./createStoryParameters-CbXzS3a6.js";import{n as z,o as B}from"./mock-CFHZcj-X.js";var V=n({Example:()=>K,Playground:()=>G,__namedExportsOrder:()=>q,default:()=>W}),H,U,W,G,K,q,J=t((()=>{H=e(c(),1),i(),F(),B(),L(),x(),d(),y(),k(),j(),h(),C(),T(),_(),p(),D(),a(),N(),U=u(),W={title:`Modals/Popover`,component:P,parameters:R(`Popover`,I),tags:[`Модальные окна`]},G={render:e=>(0,U.jsx)(P,{trigger:`hover`,placement:`bottom`,role:`tooltip`,"aria-describedby":`tooltip-1`,content:(0,U.jsx)(M,{children:(0,U.jsx)(o,{children:`Привет`})}),...e,children:(0,U.jsx)(f,{id:`tooltip-1`,mode:`outline`,children:`Наведи на меня`})})},K={render:function(){return(0,U.jsxs)(g,{margin:`auto`,direction:`column`,align:`start`,gap:`2xl`,children:[(0,U.jsx)(()=>(0,U.jsx)(P,{trigger:`hover`,placement:`bottom`,role:`tooltip`,"aria-describedby":`tooltip-1`,content:(0,U.jsx)(M,{children:(0,U.jsx)(o,{children:`Привет`})}),children:(0,U.jsx)(f,{id:`tooltip-1`,mode:`outline`,children:`Наведи на меня`})}),{}),(0,U.jsx)(()=>(0,U.jsx)(P,{noStyling:!0,trigger:`click`,id:`menupopup`,role:`dialog`,"aria-labelledby":`menubutton`,content:({onClose:e})=>(0,U.jsxs)(v,{children:[(0,U.jsx)(b,{role:`menuitem`,before:(0,U.jsx)(l,{}),onClick:e,children:`Добавить`}),(0,U.jsx)(b,{role:`menuitem`,before:(0,U.jsx)(s,{}),appearance:`negative`,onClick:e,children:`Удалить`})]}),children:(0,U.jsx)(f,{id:`menubutton`,"aria-controls":`menupopup`,mode:`outline`,children:`Нажми на меня`})}),{}),(0,U.jsx)(()=>(0,U.jsx)(P,{trigger:`focus`,role:`dialog`,"aria-describedby":`dialog-2`,content:({onClose:e})=>(0,U.jsxs)(E,{children:[(0,U.jsx)(w,{top:`Имя`,children:(0,U.jsx)(O,{})}),(0,U.jsx)(w,{top:`Фамилия`,children:(0,U.jsx)(O,{})}),(0,U.jsx)(w,{top:`Соглашение`,children:(0,U.jsx)(A,{name:`agreement`,children:`Согласен`})}),(0,U.jsx)(w,{children:(0,U.jsx)(f,{onClick:e,children:`Отправить`})})]}),children:(0,U.jsx)(f,{id:`dialog-2`,mode:`outline`,children:`Сфокусируйся на меня через Tab (или клик)`})}),{}),(0,U.jsx)(()=>(0,U.jsx)(P,{trigger:[`click`,`hover`,`focus`],placement:`right`,role:`tooltip`,"aria-describedby":`tooltip-3`,content:(0,U.jsx)(M,{children:(0,U.jsx)(S,{src:z(`app_promokot`),alt:`Cat`})}),children:(0,U.jsx)(f,{id:`tooltip-3`,mode:`outline`,children:`Нажми или наведи или сфокусируйся на меня`})}),{}),(0,U.jsx)(()=>{let[e,t]=H.useState(!1),n=H.useCallback((e,n)=>{if(!e)switch(n){case`callback`:case`escape-key`:case`click-outside`:t(!1);break;default:break}},[]);return(0,U.jsx)(P,{trigger:`manual`,shown:e,role:`dialog`,"aria-describedby":`dialog-3`,content:({onClose:e})=>(0,U.jsxs)(g,{style:{position:`relative`,width:180,height:100},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,top:0,right:0},children:(0,U.jsx)(m,{"aria-label":`Close dialog`,onClick:e,children:(0,U.jsx)(r,{})})}),(0,U.jsxs)(`div`,{style:{margin:`auto`,textAlign:`center`},children:[`The cake`,(0,U.jsx)(`br`,{}),`is`,(0,U.jsx)(`br`,{}),`a lie`]})]}),onShownChange:n,children:(0,U.jsx)(f,{id:`dialog-3`,onClick:()=>t(e=>!e),children:`Я переключаю состояние через useState`})})},{})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <Popover trigger="hover" placement="bottom" role="tooltip" aria-describedby="tooltip-1" content={<Div>
          <Text>Привет</Text>
        </Div>} {...args}>
      <Button id="tooltip-1" mode="outline">
        Наведи на меня
      </Button>
    </Popover>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const PopoverWithTriggerHover = () => {
      return <Popover trigger="hover" placement="bottom" role="tooltip" aria-describedby="tooltip-1" content={<Div>
              <Text>Привет</Text>
            </Div>}>
          <Button id="tooltip-1" mode="outline">
            Наведи на меня
          </Button>
        </Popover>;
    };
    const PopoverWithTriggerClick = () => {
      return <Popover noStyling trigger="click" id="menupopup" role="dialog" aria-labelledby="menubutton" content={({
        onClose
      }) => <Group>
              <CellButton role="menuitem" before={<Icon28AddOutline />} onClick={onClose}>
                Добавить
              </CellButton>
              <CellButton role="menuitem" before={<Icon28DeleteOutline />} appearance="negative" onClick={onClose}>
                Удалить
              </CellButton>
            </Group>}>
          <Button id="menubutton" aria-controls="menupopup" mode="outline">
            Нажми на меня
          </Button>
        </Popover>;
    };
    const PopoverWithTriggerFocus = () => {
      return <Popover trigger="focus" role="dialog" aria-describedby="dialog-2" content={({
        onClose
      }) => <FormLayoutGroup>
              <FormItem top="Имя">
                <Input />
              </FormItem>
              <FormItem top="Фамилия">
                <Input />
              </FormItem>
              <FormItem top="Соглашение">
                <Checkbox name="agreement">Согласен</Checkbox>
              </FormItem>
              <FormItem>
                <Button onClick={onClose}>Отправить</Button>
              </FormItem>
            </FormLayoutGroup>}>
          <Button id="dialog-2" mode="outline">
            Сфокусируйся на меня через Tab (или клик)
          </Button>
        </Popover>;
    };
    const PopoverWithAllTriggers = () => {
      return <Popover trigger={['click', 'hover', 'focus']} placement="right" role="tooltip" aria-describedby="tooltip-3" content={<Div>
              <Avatar src={getAvatarUrl('app_promokot')} alt="Cat" />
            </Div>}>
          <Button id="tooltip-3" mode="outline">
            Нажми или наведи или сфокусируйся на меня
          </Button>
        </Popover>;
    };
    const PopoverWithTriggerManual = () => {
      const [shown, setShown] = React.useState(false);
      const handleShownChange: PopoverOnShownChange = React.useCallback((value, reason) => {
        if (!value) {
          switch (reason) {
            case 'callback':
            case 'escape-key':
            case 'click-outside':
              setShown(false);
              break;
            default:
              break;
          }
        }
      }, []);
      return <Popover trigger="manual" shown={shown} role="dialog" aria-describedby="dialog-3" content={({
        onClose
      }) => <Flex style={{
        position: 'relative',
        width: 180,
        height: 100
      }}>
              <div style={{
          position: 'absolute',
          top: 0,
          right: 0
        }}>
                <IconButton aria-label="Close dialog" onClick={onClose}>
                  <Icon16Clear />
                </IconButton>
              </div>
              <div style={{
          margin: 'auto',
          textAlign: 'center'
        }}>
                The cake
                <br />
                is
                <br />a lie
              </div>
            </Flex>} onShownChange={handleShownChange}>
          <Button id="dialog-3" onClick={() => setShown(prev => !prev)}>
            Я переключаю состояние через useState
          </Button>
        </Popover>;
    };
    return <Flex margin="auto" direction="column" align="start" gap="2xl">
        <PopoverWithTriggerHover />
        <PopoverWithTriggerClick />
        <PopoverWithTriggerFocus />
        <PopoverWithAllTriggers />
        <PopoverWithTriggerManual />
      </Flex>;
  }
}`,...K.parameters?.docs?.source}}},q=[`Playground`,`Example`]}));export{V as n,J as r,G as t};