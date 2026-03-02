import{r as l,aB as pe,i as ce,j as e,a1 as ue,l as me,aC as fe,b as be,aD as n,V as ge,g as q,P as E}from"./iframe-DxxZLxeI.js";import{C as ve,D as he}from"./constants-DdkjnEgz.js";import{c as xe}from"./createStoryParameters-CcwS40kl.js";import{A as t}from"./Avatar-BCXODrAO.js";import{F as ye}from"./Flex-DbJp6X7Q.js";import{G as C}from"./Group-DDJytldN.js";import{L as F}from"./List-Be7Sut7a.js";import{P as Ce}from"./PanelHeaderBack-DYoyppKZ.js";import{S as i}from"./SimpleCell-Dd4jE0le.js";import{u as Te}from"./usePatchChildren-CVzKBF84.js";import{c as je}from"./createPortal-DlraoZsb.js";import{b as Oe,a as we}from"./FloatingArrow-2W0GhyuX.js";import{F as Se}from"./FocusTrap-B9SWnrCQ.js";import{T as Ae,a as Re}from"./TooltipBase-BttPMORs.js";import{u as Pe,a as Ve,b as ke}from"./usePlacementChangeCallback-BQqykK7j.js";import{u as Ie,c as _e}from"./floating-ui.react-dom-DLojga1i.js";const He="_overlay_19pby_1",Ge={overlay:He},o=({id:a,children:r,shown:s=!0,arrowPadding:g=Oe,arrowHeight:v=we,offsetByMainAxis:h=0,offsetByCrossAxis:m=0,arrowOffset:x=0,isStaticArrowOffset:f=!1,onClose:T,placement:j="bottom-start",maxWidth:M=Re,style:L,getRootRef:W,disableArrow:O=!1,onPlacementChange:B,disableFlipMiddleware:D=!1,disableShiftMiddleware:N=!1,overlayLabel:U="Закрыть",title:y,"aria-label":w,"aria-labelledby":z,restoreFocus:K,disableFocusTrap:X,overflowPadding:$,...Z})=>{const J=l.useId(),S=a||J,{entering:Y}=pe(),[Q,ee]=l.useState(null),[A,te]=l.useState(null),[R,oe]=l.useState("absolute"),P=s&&A&&!Y,{middlewares:ie,strictPlacement:le}=Pe({placement:j,offsetByMainAxis:h,offsetByCrossAxis:m,arrowRef:Q,arrow:!O,arrowHeight:v,arrowPadding:g,disableFlipMiddleware:D,disableShiftMiddleware:N,overflowPadding:$}),{x:ae,y:ne,refs:V,placement:k,middlewareData:{arrow:re}}=Ie({strategy:R,placement:le,middleware:ie,whileElementsMounted:ke}),se=ce(W,V.setFloating),[I,de]=Te(r,{"aria-describedby":P?S:void 0});Ve(j,k,B);const _=l.useId();let H=null;if(P){const G=_e({strategy:R,x:ae,y:ne});H=je(e.jsxs(Se,{role:"dialog","aria-modal":"true","aria-label":w,"aria-labelledby":y?_:w?void 0:z,onClose:T,disabled:X,restoreFocus:K,children:[e.jsx("button",{"aria-label":U,className:Ge.overlay,onClickCapture:T}),e.jsx(Ae,{...Z,id:S,title:y,titleId:y?_:void 0,getRootRef:se,style:ue(G,L),maxWidth:M,arrowProps:O?void 0:{offset:x,isStaticOffset:f,coords:re,placement:k,getRootRef:ee}})]}),A)}return me(function(){const b=I.current;b&&(te(b.closest(`[${fe}]`)),oe(b.style.position==="fixed"?"fixed":"absolute"),V.setReference(b))},[I]),e.jsxs(l.Fragment,{children:[de,H]})};try{o.displayName="OnboardingTooltip",o.__docgenInfo={description:"",displayName:"OnboardingTooltip",props:{disableArrow:{defaultValue:{value:"false"},description:"Скрывает стрелку, указывающую на якорный элемент.",name:"disableArrow",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Обработчик, который вызывается при нажатии по любому месту в пределах экрана.",name:"onClose",required:!1,type:{name:"((this: void) => void)"}},overlayLabel:{defaultValue:{value:"Закрыть"},description:"[a11y] Метка для подложки-кнопки, для описания того, что произойдёт при нажатии.",name:"overlayLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Целевой элемент. Всплывающее окно появится возле него.\n\n> ⚠️ Если это пользовательский компонент, то он должен:\n> 1. предоставлять параметры либо `getRootRef`, либо `ref` (cм. `React.forwardRef()`) для получения ссылки на DOM-узел;\n> 2. принимать DOM атрибуты и события.",name:"children",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},placement:{defaultValue:{value:"bottom-start"},description:"По умолчанию компонент выберет наилучшее расположение сам, но приоритетное можно задать с помощью этого свойства.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},disableFocusTrap:{defaultValue:null,description:"Позволяет отключить захват фокуса.",name:"disableFocusTrap",required:!1,type:{name:"boolean"}},arrowHeight:{defaultValue:{value:"8"},description:"Высота стрелки. Складывается с `mainAxis`, чтобы стрелка не залезала на якорный элемент.",name:"arrowHeight",required:!1,type:{name:"number"}},arrowPadding:{defaultValue:{value:"10"},description:"Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.",name:"arrowPadding",required:!1,type:{name:"number"}},onPlacementChange:{defaultValue:null,description:`В зависимости от области видимости, позиция может смениться на более оптимальную,
чтобы всплывающий элемент вместился в эту область видимости.`,name:"onPlacementChange",required:!1,type:{name:"OnPlacementChange"}},offsetByMainAxis:{defaultValue:{value:"0"},description:"Отступ по главной оси.",name:"offsetByMainAxis",required:!1,type:{name:"number"}},offsetByCrossAxis:{defaultValue:{value:"0"},description:"Отступ по вспомогательной оси.",name:"offsetByCrossAxis",required:!1,type:{name:"number"}},shown:{defaultValue:{value:"true"},description:"Если передан, то всплывающий элемент будет показано/скрыто в зависимости от значения свойства.",name:"shown",required:!1,type:{name:"boolean"}},disableFlipMiddleware:{defaultValue:{value:"false"},description:"Указанное значение `placement` форсируется, даже если для выпадающего элемента недостаточно места.\nНе оказывает влияния при `placement` значениях - `'auto' | 'auto-start' | 'auto-end'`",name:"disableFlipMiddleware",required:!1,type:{name:"boolean"}},disableShiftMiddleware:{defaultValue:{value:"false"},description:`Позволяет отключить смещение по главной оси,
которое не даёт всплывающему элементу выходить за границы видимой области.`,name:"disableShiftMiddleware",required:!1,type:{name:"boolean"}},overflowPadding:{defaultValue:null,description:"Отступ для смещения.",name:"overflowPadding",required:!1,type:{name:"Padding"}},arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!1,type:{name:"Element | MutableRefObject<Element | null> | null"}},className:{defaultValue:null,description:"Пользовательские css-классы, будут добавлены на root-элемент.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Заголовок тултипа.",name:"title",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},appearance:{defaultValue:null,description:"Стиль отображения подсказки.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"white"'},{value:'"black"'},{value:'"inversion"'}]}},description:{defaultValue:null,description:"Текст тултипа.",name:"description",required:!1,type:{name:"ReactNode"}},maxWidth:{defaultValue:{value:"220"},description:"Перебивает максимальную ширину заданную по умолчанию.\n\nПередача `null` полностью сбрасывает установку `max-width` на элемент.",name:"maxWidth",required:!1,type:{name:"string | number | null"}},ArrowIcon:{defaultValue:null,description:'Пользовательская SVG иконка.\n\nТребования:\n\n1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).\n2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,\n   растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.\n   (смотри https://github.com/VKCOM/VKUI/pull/4496).\n3. Убедитесь, что компонент принимает все валидные для SVG параметры.\n4. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.\n5. Если стрелка наезжает на якорный элемент, то увеличьте смещение между целевым и всплывающим элементами.',name:"ArrowIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},titleId:{defaultValue:null,description:'[a11y] Id для заголовка тултипа.\nМожно использовать для связи элемента с `role="dialog"` и заголовка через `aria-labelledby`.',name:"titleId",required:!1,type:{name:"string"}},arrowOffset:{defaultValue:{value:"0"},description:"Сдвиг стрелки относительно текущих координат.",name:"arrowOffset",required:!1,type:{name:"number"}},isStaticArrowOffset:{defaultValue:{value:"false"},description:"Включает абсолютное смещение по `arrowOffset`.",name:"isStaticArrowOffset",required:!1,type:{name:"boolean"}},restoreFocus:{defaultValue:{value:"true"},description:"",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}}}}}catch{}const qe={title:"Utils/OnboardingTooltip",component:o,parameters:xe("OnboardingTooltip",he),tags:["Утилиты"]},d={render:a=>e.jsx(n,{style:{minHeight:"100%"},children:e.jsx(ye,{justify:"center",align:"center",style:{height:"200px"},children:e.jsx(o,{...a,children:e.jsx(t,{})})})}),args:{description:"OnboardingTooltip"}},p={render:function(){const[r,s]=l.useState(!0),[g,v]=l.useState(!0),[h,m]=l.useState(!1),[x,f]=l.useState("tooltip");return e.jsxs(ge,{activePanel:x,children:[e.jsxs(q,{id:"tooltip",children:[e.jsx(E,{children:"Onboarding tooltip"}),e.jsx(C,{children:e.jsxs(F,{children:[e.jsx(i,{children:"Музыка"}),e.jsx(i,{children:"Видео"}),e.jsx(i,{children:"Игры"}),e.jsx(i,{children:"Закладки"}),e.jsx(i,{children:"Документы"}),e.jsx(i,{children:"Денежные переводы"})]})}),e.jsx(C,{children:e.jsx(o,{description:"У нас тут brand new функционал подвезли. Зацените!",shown:r,onClose:()=>s(!1),offsetByMainAxis:10,children:e.jsx(i,{onClick:()=>f("tooltip2"),children:"VK Pay"})})})]}),e.jsxs(q,{id:"tooltip2",children:[e.jsx(E,{before:e.jsx(o,{shown:g,onClose:()=>{v(!1),m(!0)},description:"Нажмите на кнопку, если хотите вернуться",title:"Назад",children:e.jsx(Ce,{onClick:()=>f("tooltip")})}),children:"OnboardingTooltip"}),e.jsx(C,{children:e.jsxs(F,{children:[e.jsx(i,{before:e.jsx(o,{description:"Теперь у нас появились аватарки в списках. Правда круто?",shown:h,onClose:()=>m(!1),arrowOffset:-6,children:e.jsx(t,{})}),subtitle:"Веб-сайт",children:"Команда ВКонтакте"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Музыкант",children:"Robbie Williams"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"})]})})]})]})},decorators:[be],parameters:ve},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{style:{minHeight:"120vh"},children:[e.jsx(o,{description:"Я скроллюсь",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})}),e.jsx(o,{description:"Двигаем стрелочку",arrowOffset:20,children:e.jsx("div",{style:{display:"inline-block",marginLeft:100},children:e.jsx(t,{})})})]}),e.jsx(n,{fixed:!0,style:{minHeight:"30px",border:"1px solid",margin:"100px 100px 0",position:"relative",background:"var(--vkui--color_background_content)",zIndex:1},children:e.jsx(o,{description:"Я вылезаю (fixed)",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})})}),e.jsxs(n,{style:{minHeight:"100vh",border:"1px solid",margin:"64px 100px 100px",position:"relative",background:"var(--vkui--color_background_content)",zIndex:1},children:[e.jsx(o,{description:"Я прилип слева",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",right:0},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я прилип справа",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я прилип слева",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",left:0,bottom:0},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я прилип справа",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",right:0,bottom:0},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я по центру 😎",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",left:"50%",top:"50%",transform:"translate(50%, 50%)"},children:e.jsx(t,{})})})]}),e.jsx("div",{style:{height:"100vh"}}),e.jsx(n,{fixed:!0,style:{position:"fixed",bottom:0,width:"100%"},children:e.jsx(o,{description:"Я прибит к низу",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})})})]})},u={render:()=>{const r=s=>e.jsx("svg",{width:"80",height:11,viewBox:"0 0 80 11",xmlns:"http://www.w3.org/2000/svg",...s,children:e.jsx("path",{d:"M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z",fill:"currentColor"})});return e.jsx(n,{children:e.jsx(o,{description:"У этого тултипа кастомная стрелка",offsetByCrossAxis:11,arrowPadding:6,ArrowIcon:r,children:e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:"Якорь"})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <OnboardingTooltipContainer style={{
    minHeight: '100%'
  }}>
      <Flex justify="center" align="center" style={{
      height: '200px'
    }}>
        <OnboardingTooltip {...args}>
          <Avatar />
        </OnboardingTooltip>
      </Flex>
    </OnboardingTooltipContainer>,
  args: {
    description: 'OnboardingTooltip'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [tooltip, setTooltip] = React.useState(true);
    const [tooltip2, setTooltip2] = React.useState(true);
    const [tooltip3, setTooltip3] = React.useState(false);
    const [activePanel, setActivePanel] = React.useState('tooltip');
    return <View activePanel={activePanel}>
        <Panel id="tooltip">
          <PanelHeader>Onboarding tooltip</PanelHeader>
          <Group>
            <List>
              <SimpleCell>Музыка</SimpleCell>
              <SimpleCell>Видео</SimpleCell>
              <SimpleCell>Игры</SimpleCell>
              <SimpleCell>Закладки</SimpleCell>
              <SimpleCell>Документы</SimpleCell>
              <SimpleCell>Денежные переводы</SimpleCell>
            </List>
          </Group>
          <Group>
            <OnboardingTooltip description="У нас тут brand new функционал подвезли. Зацените!" shown={tooltip} onClose={() => setTooltip(false)} offsetByMainAxis={10}>
              <SimpleCell onClick={() => setActivePanel('tooltip2')}>VK Pay</SimpleCell>
            </OnboardingTooltip>
          </Group>
        </Panel>

        <Panel id="tooltip2">
          <PanelHeader before={<OnboardingTooltip shown={tooltip2} onClose={() => {
          setTooltip2(false);
          setTooltip3(true);
        }} description="Нажмите на кнопку, если хотите вернуться" title="Назад">
                <PanelHeaderBack onClick={() => setActivePanel('tooltip')} />
              </OnboardingTooltip>}>
            OnboardingTooltip
          </PanelHeader>
          <Group>
            <List>
              <SimpleCell before={<OnboardingTooltip description="Теперь у нас появились аватарки в списках. Правда круто?" shown={tooltip3} onClose={() => setTooltip3(false)} arrowOffset={-6}>
                    <Avatar />
                  </OnboardingTooltip>} subtitle="Веб-сайт">
                Команда ВКонтакте
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Музыкант">
                Robbie Williams
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
              <SimpleCell before={<Avatar />} subtitle="Издательский дом">
                ПостНаука
              </SimpleCell>
            </List>
          </Group>
        </Panel>
      </View>;
  },
  decorators: [withVKUILayout],
  parameters: CanvasFullLayout
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <OnboardingTooltipContainer style={{
      minHeight: '120vh'
    }}>
        <OnboardingTooltip description="Я скроллюсь">
          <div style={{
          display: 'inline-block'
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip description="Двигаем стрелочку" arrowOffset={20}>
          <div style={{
          display: 'inline-block',
          marginLeft: 100
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
      <OnboardingTooltipContainer fixed style={{
      minHeight: '30px',
      border: '1px solid',
      margin: '100px 100px 0',
      position: 'relative',
      background: 'var(--vkui--color_background_content)',
      zIndex: 1
    }}>
        <OnboardingTooltip description="Я вылезаю (fixed)">
          <div style={{
          display: 'inline-block'
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
      <OnboardingTooltipContainer style={{
      minHeight: '100vh',
      border: '1px solid',
      margin: '64px 100px 100px',
      position: 'relative',
      background: 'var(--vkui--color_background_content)',
      zIndex: 1
    }}>
        <OnboardingTooltip description="Я прилип слева">
          <div style={{
          display: 'inline-block',
          position: 'absolute',
          right: 0
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip description="Я прилип справа">
          <div style={{
          display: 'inline-block'
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip description="Я прилип слева">
          <div style={{
          display: 'inline-block',
          position: 'absolute',
          left: 0,
          bottom: 0
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip description="Я прилип справа">
          <div style={{
          display: 'inline-block',
          position: 'absolute',
          right: 0,
          bottom: 0
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
        <OnboardingTooltip description="Я по центру 😎">
          <div style={{
          display: 'inline-block',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(50%, 50%)'
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
      <div style={{
      height: '100vh'
    }}></div>
      <OnboardingTooltipContainer fixed style={{
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
        <OnboardingTooltip description="Я прибит к низу">
          <div style={{
          display: 'inline-block'
        }}>
            <Avatar />
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
    </>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ARROW_HEIGHT = 11;
    const CustomIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
      return <svg width="80" height={ARROW_HEIGHT} viewBox={\`0 0 80 \${ARROW_HEIGHT}\`} xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z" fill="currentColor" />
        </svg>;
    };
    return <OnboardingTooltipContainer>
        <OnboardingTooltip description="У этого тултипа кастомная стрелка" offsetByCrossAxis={ARROW_HEIGHT} arrowPadding={6} ArrowIcon={CustomIcon}>
          <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
            Якорь
          </div>
        </OnboardingTooltip>
      </OnboardingTooltipContainer>;
  }
}`,...u.parameters?.docs?.source}}};const Ee=["Playground","ShowCase","WithOnboardingTooltipContainer","CustomArrowIcon"],et=Object.freeze(Object.defineProperty({__proto__:null,CustomArrowIcon:u,Playground:d,ShowCase:p,WithOnboardingTooltipContainer:c,__namedExportsOrder:Ee,default:qe},Symbol.toStringTag,{value:"Module"}));export{o as O,d as P,et as a};
