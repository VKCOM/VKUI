import{r as l,aL as ce,h as ue,j as e,R as me,a4 as fe,f as be,aM as ge,w as ve,aN as n,V as he,P as q,a as F}from"./iframe-CEhhJuIi.js";import{C as xe,D as ye}from"./constants-DdkjnEgz.js";import{c as Ce}from"./createStoryParameters-CcwS40kl.js";import{A as t}from"./Avatar-BXbZ9iu_.js";import{F as Te}from"./Flex-DGSr3jA3.js";import{G as T}from"./Group-B7hVT_g-.js";import{L as M}from"./List-Bc-UpJbZ.js";import{P as je}from"./PanelHeaderBack-BVcGQYtQ.js";import{S as i}from"./SimpleCell-CJqdGzsk.js";import{u as Oe}from"./useGlobalEscKeyDown-CE7TqF1-.js";import{u as we}from"./usePatchChildren-U9eb7yhC.js";import{c as Se}from"./createPortal-BD13EKcF.js";import{b as Re,a as Ae}from"./FloatingArrow-D9rl4d8P.js";import{F as Pe}from"./FocusTrap-Bmt_IN1l.js";import{T as Ve,a as ke}from"./TooltipBase-Bpi-YbXr.js";import{u as Ie,a as _e,b as He}from"./usePlacementChangeCallback-moWOJvM7.js";import{u as Ge,c as Ee}from"./floating-ui.react-dom-BUWNT6g6.js";const qe="_overlay_19pby_1",Fe={overlay:qe},o=({id:a,children:r,shown:s=!0,arrowPadding:g=Re,arrowHeight:v=Ae,offsetByMainAxis:h=0,offsetByCrossAxis:m=0,arrowOffset:x=0,isStaticArrowOffset:f=!1,onClose:j,placement:O="bottom-start",maxWidth:L=ke,style:W,getRootRef:B,disableArrow:w=!1,onPlacementChange:D,disableFlipMiddleware:N=!1,disableShiftMiddleware:U=!1,overlayLabel:K="Закрыть",title:y,"aria-label":S,"aria-labelledby":z,restoreFocus:X,disableFocusTrap:$,overflowPadding:Z,...J})=>{const Y=l.useId(),R=a||Y,{entering:Q}=ce(),[ee,te]=l.useState(null),[A,oe]=l.useState(null),[P,ie]=l.useState("absolute"),C=s&&A&&!Q,{middlewares:le,strictPlacement:ae}=Ie({placement:O,offsetByMainAxis:h,offsetByCrossAxis:m,arrowRef:ee,arrow:!w,arrowHeight:v,arrowPadding:g,disableFlipMiddleware:N,disableShiftMiddleware:U,overflowPadding:Z}),{x:ne,y:re,refs:V,placement:k,middlewareData:{arrow:se}}=Ge({strategy:P,placement:ae,middleware:le,whileElementsMounted:He}),de=ue(B,V.setFloating),I=l.useRef(null),[_,pe]=we(r,{"aria-describedby":C?R:void 0});_e(O,k,D);const H=l.useId();Oe(!!C,j);let G=null;if(C){const E=Ee({strategy:P,x:ne,y:re});G=Se(e.jsx(Pe,{rootRef:I,disabled:$,restoreFocus:X,children:e.jsxs(me,{tabIndex:-1,getRootRef:I,role:"dialog","aria-modal":"true","aria-label":S,"aria-labelledby":y?H:S?void 0:z,children:[e.jsx("button",{"aria-label":K,className:Fe.overlay,onClickCapture:j}),e.jsx(Ve,{...J,id:R,title:y,titleId:y?H:void 0,getRootRef:de,style:fe(E,W),maxWidth:L,arrowProps:w?void 0:{offset:x,isStaticOffset:f,coords:se,placement:k,getRootRef:te}})]})}),A)}return be(function(){const b=_.current;b&&(oe(b.closest(`[${ge}]`)),ie(b.style.position==="fixed"?"fixed":"absolute"),V.setReference(b))},[_]),e.jsxs(l.Fragment,{children:[pe,G]})};try{o.displayName="OnboardingTooltip",o.__docgenInfo={description:"",displayName:"OnboardingTooltip",props:{restoreFocus:{defaultValue:{value:"true"},description:"Управление поведением возврата фокуса при закрытии всплывающего окна.",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}},disableArrow:{defaultValue:{value:"false"},description:"Скрывает стрелку, указывающую на якорный элемент.",name:"disableArrow",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Обработчик, который вызывается при нажатии по любому месту в пределах экрана.",name:"onClose",required:!1,type:{name:"((this: void) => void)"}},overlayLabel:{defaultValue:{value:"Закрыть"},description:"[a11y] Метка для подложки-кнопки, для описания того, что произойдёт при нажатии.",name:"overlayLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Целевой элемент. Всплывающее окно появится возле него.\n\n> ⚠️ Если это пользовательский компонент, то он должен:\n> 1. предоставлять параметры либо `getRootRef`, либо `ref` (cм. `React.forwardRef()`) для получения ссылки на DOM-узел;\n> 2. принимать DOM атрибуты и события.",name:"children",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},arrowHeight:{defaultValue:{value:"8"},description:"Высота стрелки. Складывается с `mainAxis`, чтобы стрелка не залезала на якорный элемент.",name:"arrowHeight",required:!1,type:{name:"number"}},arrowPadding:{defaultValue:{value:"10"},description:"Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.",name:"arrowPadding",required:!1,type:{name:"number"}},arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!1,type:{name:"Element | MutableRefObject<Element | null> | null"}},placement:{defaultValue:{value:"bottom-start"},description:"По умолчанию компонент выберет наилучшее расположение сам, но приоритетное можно задать с помощью этого свойства.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"bottom"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},offsetByMainAxis:{defaultValue:{value:"0"},description:"Отступ по главной оси.",name:"offsetByMainAxis",required:!1,type:{name:"number"}},offsetByCrossAxis:{defaultValue:{value:"0"},description:"Отступ по вспомогательной оси.",name:"offsetByCrossAxis",required:!1,type:{name:"number"}},shown:{defaultValue:{value:"true"},description:"Если передан, то всплывающий элемент будет показано/скрыто в зависимости от значения свойства.",name:"shown",required:!1,type:{name:"boolean"}},onPlacementChange:{defaultValue:null,description:`В зависимости от области видимости, позиция может смениться на более оптимальную,
чтобы всплывающий элемент вместился в эту область видимости.`,name:"onPlacementChange",required:!1,type:{name:"OnPlacementChange"}},disableFlipMiddleware:{defaultValue:{value:"false"},description:"Указанное значение `placement` форсируется, даже если для выпадающего элемента недостаточно места.\nНе оказывает влияния при `placement` значениях - `'auto' | 'auto-start' | 'auto-end'`",name:"disableFlipMiddleware",required:!1,type:{name:"boolean"}},disableShiftMiddleware:{defaultValue:{value:"false"},description:`Позволяет отключить смещение по главной оси,
которое не даёт всплывающему элементу выходить за границы видимой области.`,name:"disableShiftMiddleware",required:!1,type:{name:"boolean"}},disableFocusTrap:{defaultValue:null,description:"Позволяет отключить захват фокуса.",name:"disableFocusTrap",required:!1,type:{name:"boolean"}},overflowPadding:{defaultValue:null,description:"Отступ для смещения.",name:"overflowPadding",required:!1,type:{name:"Padding"}},className:{defaultValue:null,description:"Пользовательские css-классы, будут добавлены на root-элемент.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Заголовок тултипа.",name:"title",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},appearance:{defaultValue:null,description:"Стиль отображения подсказки.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"white"'},{value:'"black"'},{value:'"inversion"'}]}},description:{defaultValue:null,description:"Текст тултипа.",name:"description",required:!1,type:{name:"ReactNode"}},titleId:{defaultValue:null,description:'[a11y] Id для заголовка тултипа.\nМожно использовать для связи элемента с `role="dialog"` и заголовка через `aria-labelledby`.',name:"titleId",required:!1,type:{name:"string"}},ArrowIcon:{defaultValue:null,description:'Пользовательская SVG иконка.\n\nТребования:\n\n1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).\n2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,\n   растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.\n   (смотри https://github.com/VKCOM/VKUI/pull/4496).\n3. Убедитесь, что компонент принимает все валидные для SVG параметры.\n4. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.\n5. Если стрелка наезжает на якорный элемент, то увеличьте смещение между целевым и всплывающим элементами.',name:"ArrowIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},maxWidth:{defaultValue:{value:"220"},description:"Перебивает максимальную ширину заданную по умолчанию.\n\nПередача `null` полностью сбрасывает установку `max-width` на элемент.",name:"maxWidth",required:!1,type:{name:"string | number | null"}},arrowOffset:{defaultValue:{value:"0"},description:"Сдвиг стрелки относительно текущих координат.",name:"arrowOffset",required:!1,type:{name:"number"}},isStaticArrowOffset:{defaultValue:{value:"false"},description:"Включает абсолютное смещение по `arrowOffset`.",name:"isStaticArrowOffset",required:!1,type:{name:"boolean"}}}}}catch{}const Me={title:"Utils/OnboardingTooltip",component:o,parameters:Ce("OnboardingTooltip",ye),tags:["Утилиты"]},d={render:a=>e.jsx(n,{style:{minHeight:"100%"},children:e.jsx(Te,{justify:"center",align:"center",style:{height:"200px"},children:e.jsx(o,{...a,children:e.jsx(t,{})})})}),args:{description:"OnboardingTooltip"}},p={render:function(){const[r,s]=l.useState(!0),[g,v]=l.useState(!0),[h,m]=l.useState(!1),[x,f]=l.useState("tooltip");return e.jsxs(he,{activePanel:x,children:[e.jsxs(q,{id:"tooltip",children:[e.jsx(F,{children:"Onboarding tooltip"}),e.jsx(T,{children:e.jsxs(M,{children:[e.jsx(i,{children:"Музыка"}),e.jsx(i,{children:"Видео"}),e.jsx(i,{children:"Игры"}),e.jsx(i,{children:"Закладки"}),e.jsx(i,{children:"Документы"}),e.jsx(i,{children:"Денежные переводы"})]})}),e.jsx(T,{children:e.jsx(o,{description:"У нас тут brand new функционал подвезли. Зацените!",shown:r,onClose:()=>s(!1),offsetByMainAxis:10,children:e.jsx(i,{onClick:()=>f("tooltip2"),children:"VK Pay"})})})]}),e.jsxs(q,{id:"tooltip2",children:[e.jsx(F,{before:e.jsx(o,{shown:g,onClose:()=>{v(!1),m(!0)},description:"Нажмите на кнопку, если хотите вернуться",title:"Назад",children:e.jsx(je,{onClick:()=>f("tooltip")})}),children:"OnboardingTooltip"}),e.jsx(T,{children:e.jsxs(M,{children:[e.jsx(i,{before:e.jsx(o,{description:"Теперь у нас появились аватарки в списках. Правда круто?",shown:h,onClose:()=>m(!1),arrowOffset:-6,children:e.jsx(t,{})}),subtitle:"Веб-сайт",children:"Команда ВКонтакте"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Музыкант",children:"Robbie Williams"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"}),e.jsx(i,{before:e.jsx(t,{}),subtitle:"Издательский дом",children:"ПостНаука"})]})})]})]})},decorators:[ve],parameters:xe},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{style:{minHeight:"120vh"},children:[e.jsx(o,{description:"Я скроллюсь",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})}),e.jsx(o,{description:"Двигаем стрелочку",arrowOffset:20,children:e.jsx("div",{style:{display:"inline-block",marginLeft:100},children:e.jsx(t,{})})})]}),e.jsx(n,{fixed:!0,style:{minHeight:"30px",border:"1px solid",margin:"100px 100px 0",position:"relative",background:"var(--vkui--color_background_content)",zIndex:1},children:e.jsx(o,{description:"Я вылезаю (fixed)",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})})}),e.jsxs(n,{style:{minHeight:"100vh",border:"1px solid",margin:"64px 100px 100px",position:"relative",background:"var(--vkui--color_background_content)",zIndex:1},children:[e.jsx(o,{description:"Я прилип слева",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",right:0},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я прилип справа",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я прилип слева",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",left:0,bottom:0},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я прилип справа",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",right:0,bottom:0},children:e.jsx(t,{})})}),e.jsx(o,{description:"Я по центру 😎",children:e.jsx("div",{style:{display:"inline-block",position:"absolute",left:"50%",top:"50%",transform:"translate(50%, 50%)"},children:e.jsx(t,{})})})]}),e.jsx("div",{style:{height:"100vh"}}),e.jsx(n,{fixed:!0,style:{position:"fixed",bottom:0,width:"100%"},children:e.jsx(o,{description:"Я прибит к низу",children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(t,{})})})})]})},u={render:()=>{const r=s=>e.jsx("svg",{width:"80",height:11,viewBox:"0 0 80 11",xmlns:"http://www.w3.org/2000/svg",...s,children:e.jsx("path",{d:"M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z",fill:"currentColor"})});return e.jsx(n,{children:e.jsx(o,{description:"У этого тултипа кастомная стрелка",offsetByCrossAxis:11,arrowPadding:6,ArrowIcon:r,children:e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:"Якорь"})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Le=["Playground","ShowCase","WithOnboardingTooltipContainer","CustomArrowIcon"],lt=Object.freeze(Object.defineProperty({__proto__:null,CustomArrowIcon:u,Playground:d,ShowCase:p,WithOnboardingTooltipContainer:c,__namedExportsOrder:Le,default:Me},Symbol.toStringTag,{value:"Module"}));export{o as O,d as P,lt as a};
