import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{B as i,Q as a,dn as o,n as s}from"./dist-JE-Gteso.js";import{n as c,t as l}from"./Text-DN3XSCwU.js";import{n as u,t as d}from"./Button-DkR7tdUq.js";import{n as f,t as p}from"./IconButton-xcpHJOzT.js";import{n as m,t as h}from"./Flex-d_Ls15u9.js";import{n as g,t as _}from"./Group-BsDFq5nd.js";import{n as v,t as y}from"./CellButton-BjjWRjel.js";import{n as b,t as x}from"./Avatar-Bj2v-TM0.js";import{n as S,t as C}from"./FormItem-CAXqiOMO.js";import{n as w,t as T}from"./FormLayoutGroup-C-yQeFVc.js";import{n as E,t as D}from"./Input-D0DJqmeY.js";import{n as O,t as k}from"./Checkbox-DgWBPv9j.js";import{n as A,t as j}from"./Div-DkSA0ZW5.js";import{n as M,t as N}from"./Popover-BgQhMc8j.js";import{i as P,n as F}from"./constants-Dj6vOzIh.js";import{n as I,t as L}from"./createStoryParameters-pz1UrWMe.js";import{n as R,o as z}from"./mock-D9mwry-3.js";var B,V,H,U,W,G,K=t((()=>{B=e(n(),1),s(),P(),z(),I(),b(),u(),v(),O(),A(),m(),S(),w(),g(),f(),E(),c(),M(),V=r(),H={title:`Modals/Popover`,component:N,parameters:L(`Popover`,F),tags:[`Модальные окна`]},U={render:e=>(0,V.jsx)(N,{trigger:`hover`,placement:`bottom`,role:`tooltip`,"aria-describedby":`tooltip-1`,content:(0,V.jsx)(j,{children:(0,V.jsx)(l,{children:`Привет`})}),...e,children:(0,V.jsx)(d,{id:`tooltip-1`,mode:`outline`,children:`Наведи на меня`})})},W={render:function(){return(0,V.jsxs)(h,{margin:`auto`,direction:`column`,align:`start`,gap:`2xl`,children:[(0,V.jsx)(()=>(0,V.jsx)(N,{trigger:`hover`,placement:`bottom`,role:`tooltip`,"aria-describedby":`tooltip-1`,content:(0,V.jsx)(j,{children:(0,V.jsx)(l,{children:`Привет`})}),children:(0,V.jsx)(d,{id:`tooltip-1`,mode:`outline`,children:`Наведи на меня`})}),{}),(0,V.jsx)(()=>(0,V.jsx)(N,{noStyling:!0,trigger:`click`,id:`menupopup`,role:`dialog`,"aria-labelledby":`menubutton`,content:({onClose:e})=>(0,V.jsxs)(_,{children:[(0,V.jsx)(y,{role:`menuitem`,before:(0,V.jsx)(a,{}),onClick:e,children:`Добавить`}),(0,V.jsx)(y,{role:`menuitem`,before:(0,V.jsx)(i,{}),appearance:`negative`,onClick:e,children:`Удалить`})]}),children:(0,V.jsx)(d,{id:`menubutton`,"aria-controls":`menupopup`,mode:`outline`,children:`Нажми на меня`})}),{}),(0,V.jsx)(()=>(0,V.jsx)(N,{trigger:`focus`,role:`dialog`,"aria-describedby":`dialog-2`,content:({onClose:e})=>(0,V.jsxs)(T,{children:[(0,V.jsx)(C,{top:`Имя`,children:(0,V.jsx)(D,{})}),(0,V.jsx)(C,{top:`Фамилия`,children:(0,V.jsx)(D,{})}),(0,V.jsx)(C,{top:`Соглашение`,children:(0,V.jsx)(k,{name:`agreement`,children:`Согласен`})}),(0,V.jsx)(C,{children:(0,V.jsx)(d,{onClick:e,children:`Отправить`})})]}),children:(0,V.jsx)(d,{id:`dialog-2`,mode:`outline`,children:`Сфокусируйся на меня через Tab (или клик)`})}),{}),(0,V.jsx)(()=>(0,V.jsx)(N,{trigger:[`click`,`hover`,`focus`],placement:`right`,role:`tooltip`,"aria-describedby":`tooltip-3`,content:(0,V.jsx)(j,{children:(0,V.jsx)(x,{src:R(`app_promokot`),alt:`Cat`})}),children:(0,V.jsx)(d,{id:`tooltip-3`,mode:`outline`,children:`Нажми или наведи или сфокусируйся на меня`})}),{}),(0,V.jsx)(()=>{let[e,t]=B.useState(!1);return(0,V.jsx)(N,{trigger:`manual`,shown:e,role:`dialog`,"aria-describedby":`dialog-3`,content:({onClose:e})=>(0,V.jsxs)(h,{style:{position:`relative`,width:180,height:100},children:[(0,V.jsx)(`div`,{style:{position:`absolute`,top:0,right:0},children:(0,V.jsx)(p,{"aria-label":`Close dialog`,onClick:e,children:(0,V.jsx)(o,{})})}),(0,V.jsxs)(`div`,{style:{margin:`auto`,textAlign:`center`},children:[`The cake`,(0,V.jsx)(`br`,{}),`is`,(0,V.jsx)(`br`,{}),`a lie`]})]}),onShownChange:B.useCallback((e,n)=>{if(!e)switch(n){case`callback`:case`escape-key`:case`click-outside`:t(!1);break;default:break}},[]),children:(0,V.jsx)(d,{id:`dialog-3`,onClick:()=>t(e=>!e),children:`Я переключаю состояние через useState`})})},{})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <Popover trigger="hover" placement="bottom" role="tooltip" aria-describedby="tooltip-1" content={<Div>
          <Text>Привет</Text>
        </Div>} {...args}>
      <Button id="tooltip-1" mode="outline">
        Наведи на меня
      </Button>
    </Popover>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Playground`,`Example`]}));export{H as a,K as i,U as n,G as r,W as t};