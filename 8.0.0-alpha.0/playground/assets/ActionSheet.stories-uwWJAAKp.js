import{j as u,g as M,o as Q,c as L,r as t,a1 as X,n as _,ao as $}from"./iframe-CGSrC79H.js";import{S as T,D as G,C as Z}from"./constants-DdkjnEgz.js";import{c as u4}from"./createStoryParameters-CcwS40kl.js";import{a as e4,A as w,b as t4}from"./ActionSheetItem-CIdbKZs2.js";import{B as n4}from"./Button-JZGl9x8f.js";import{P as a4}from"./Placeholder-BwVEAOdl.js";import{u as W}from"./useAdaptivityWithJSMediaQueries-BUJvlqkO.js";import{A as o4}from"./AppRootPortal-D8fiuoF8.js";import{P as l4}from"./PopoutWrapper-HBVGLeP7.js";import{F as N}from"./Footnote-9-fttdTG.js";import{i as r4}from"./isRefObject-Dh5CqLqK.js";import{F as s4}from"./FocusTrap-CmZUL0KU.js";import{P as i4}from"./Popper-BXCfD9qH.js";import{s as a,A as c4}from"./ActionSheetDropdownSheet-4GaR7QDz.js";import{u as d4}from"./useCSSKeyframesAnimationController-3EPmQPbL.js";import{I as m4}from"./edit_outline_28-BHWDx5e8.js";import{I as p4,a as E4,b as f4,c as D4,d as C4}from"./subtitles_outline_28-CiQBUnVI.js";import{I as h4}from"./delete_outline_28-SGQcgD0M.js";import{I as B4}from"./settings_outline_28-CoZ7LHO8.js";import"./preload-helper-PPVm8Dsz.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./Subhead-BDUGOuQB.js";import"./Title-29M-U6si.js";import"./AdaptiveIconRenderer-CSGInP8-.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./check_circle_on_24-e1d1quHA.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Headline-DOU82LYx.js";import"./useColorScheme-DM7MWYfE.js";import"./createPortal-CrUV0Jad.js";import"./ColorSchemeProvider-zZt_kTkY.js";import"./ConfigProviderOverride-DO-HeAeb.js";import"./useFocusTrap-DV1LSCZk.js";import"./useMutationObserver-DQTeLLG8.js";import"./useReferenceHiddenChangeCallback-BEYGsRvY.js";import"./FloatingArrow-DPBTaDMU.js";import"./usePlacementChangeCallback-C_EKg3Ob.js";import"./floating-ui.react-dom-C7nxf647.js";import"./customResizeObserver-CzwDpNji.js";const F4="_host_1dwgm_1",b4={host:F4},A4={isCancelItem:!0},P=({children:l="Отмена",className:e,...r})=>u.jsx(e4.Provider,{value:A4,children:u.jsx(w,{className:M(b4.host,e),...r,children:l})});try{P.displayName="ActionSheetDefaultIosCloseItem",P.__docgenInfo={description:"",displayName:"ActionSheetDefaultIosCloseItem",props:{mode:{defaultValue:null,description:'Свойство, определяющее внешний вид элемента действия.\n\n> Since 8.0.0. Значение `"cancel"` устарело и будет удалено в **VKUI v10**.\n> Используйте компонент `ActionSheetDefaultIosCloseItem` или передайте пропсы через `slotProps.iosCloseItem` в `ActionSheet`.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"destructive"'},{value:'"cancel"'}]}},href:{defaultValue:null,description:"Если указано, элемент будет использоваться как ссылка.",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Атрибут `target` для тега `<a>`.",name:"target",required:!1,type:{name:"string"}},before:{defaultValue:null,description:"Иконка или другой React-элемент для отображения перед основным контентом.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка или другой React-элемент для отображения после основного контента.",name:"after",required:!1,type:{name:"ReactNode"}},meta:{defaultValue:null,description:"Дополнительная информация, отображаемая рядом с основным контентом.",name:"meta",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Слот для подсказки или вспомогательного текста.",name:"subtitle",required:!1,type:{name:"ReactNode"}},autoCloseDisabled:{defaultValue:null,description:"По умолчанию нажатие на опцию вызывает переданную в `ActionSheet` функцию `onClose`, данное свойство\nпозволяет отключить такое поведение.",name:"autoCloseDisabled",required:!1,type:{name:"boolean"}},selectable:{defaultValue:null,description:"Включает возможность выбрать элемент (отображает радиокнопку).",name:"selectable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Блокировка взаимодействия с компонентом.",name:"disabled",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"Все текстовые элементы при необходимости занимают несколько строк.",name:"multiline",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"По умолчанию `onClick` будет вызван после завершения анимации скрытия и после вызова `onClose`.\nИз этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.\nЕсли вам нужен объект события именно на момент нажатия, используйте `onImmediateClick`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onImmediateClick:{defaultValue:null,description:"Обработчик нажатия, вызывающийся непосредственно в момент нажатия (в отличие от `onClick`).",name:"onImmediateClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},iconChecked:{defaultValue:null,description:"Иконка для `selectable` режима.",name:"iconChecked",required:!1,type:{name:"ReactNode"}},isCancelItem:{defaultValue:null,description:"Позволяет отделить `ActionItem` от `CancelItem` для определении того,\nкто вызвал закрытие `ActionSheet`. Используется в `ActionSheet.onClose()`.\n@deprecated Since 8.0.0. Свойство устарело и будет удалено в **VKUI v10**.\nИспользуйте компонент `ActionSheetDefaultIosCloseItem` или передайте пропсы через `slotProps.iosCloseItem` в `ActionSheet`.",name:"isCancelItem",required:!1,type:{name:"boolean"}}}}}catch{}const j=({children:l,toggleRef:e,closing:r,onClose:o,className:c,style:m,popupOffsetDistance:f=0,placement:D,onAnimationStart:C,onAnimationEnd:V,allowClickPropagation:R=!1,onClick:h,...q})=>{const{document:s}=Q(),F=L(),{sizeY:p}=W(),E=t.useRef(null);t.useEffect(()=>{},[e]),t.useEffect(()=>{const d=n=>{const B=E?.current;B&&!B.contains(n.target)&&o?.()};return setTimeout(()=>{s.body.addEventListener("click",d)}),()=>s.body.removeEventListener("click",d)},[o,s]);const x=t.useMemo(()=>r4(e)?e:{current:e},[e]),O=R?h:d=>{X(d),h?.(d)};return u.jsx(i4,{targetRef:x,offsetByMainAxis:f,placement:D,className:M(a.host,F==="ios"&&a.ios,a.menu,r?a.closing:a.opening,p==="compact"&&a.sizeYCompact,c),style:m,getRootRef:E,usePortal:!1,onAnimationStart:C,onAnimationEnd:V,children:u.jsx(s4,{onClose:o,...q,onClick:O,children:l})})};try{j.displayName="ActionSheetDropdownMenu",j.__docgenInfo={description:"",displayName:"ActionSheetDropdownMenu",props:{closing:{defaultValue:null,description:"Состояние закрытия всплывающего окна.",name:"closing",required:!0,type:{name:"boolean"}},toggleRef:{defaultValue:null,description:"Элемент, рядом с которым вылезает всплывающий элемент на десктопе.\nЛучше передавать `RefObject` c current.",name:"toggleRef",required:!0,type:{name:"ToggleRef"}},placement:{defaultValue:null,description:`Позиционирование всплывающего окна для десктопа.
Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top-start"'},{value:'"top"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"right"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'}]}},popupOffsetDistance:{defaultValue:{value:"0"},description:"Отступ, где заданное кол-во единиц равняется пикселям.",name:"popupOffsetDistance",required:!1,type:{name:"number"}},allowClickPropagation:{defaultValue:{value:"false"},description:"По умолчанию событие `onClick` не всплывает.",name:"allowClickPropagation",required:!1,type:{name:"boolean"}},mount:{defaultValue:{value:"true"},description:"",name:"mount",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Форсированное отключение захвата фокуса",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"",name:"autoFocus",required:!1,type:{name:'boolean | "root"'}},restoreFocus:{defaultValue:{value:"true"},description:"",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}},timeout:{defaultValue:{value:"0"},description:"",name:"timeout",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"Вызывается при нажатии на кнопку `Escape`.",name:"onClose",required:!1,type:{name:"VoidFunction"}},captureEscapeKeyboardEvent:{defaultValue:{value:"true"},description:`Следует ли обрабатываеть событие нажатия клавиши Escape при "погружении", то есть
до того как это событие будет обработано на EventTarget
Удобно установить в false, если требуется запретить "всплытие" события до FocusTrap`,name:"captureEscapeKeyboardEvent",required:!1,type:{name:"boolean"}},mutationObserverOptions:{defaultValue:null,description:"Пользовательские опции для MutationObserver, который отслеживает изменения DOM внутри компонента и пересчитывает ноды для фокуса.",name:"mutationObserverOptions",required:!1,type:{name:"MutationObserverInit"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const S=({children:l,className:e,title:r,description:o,style:c,iosCloseItem:m,slotProps:f,popupOffsetDistance:D,placement:C,mode:V,onClose:R,...h})=>{const q=L(),[s,F]=t.useState(void 0),p=t.useCallback(()=>F("other"),[]),E=t.useRef(_),[x,O]=d4(s!==void 0?"exit":"enter",{onExited(){R({closedBy:s||"other"}),E.current(),E.current=_}}),{isDesktop:d}=W(),n=V??(d?"menu":"sheet");$(n==="sheet");const B=t.useCallback(({action:b,immediateAction:k,autoClose:z,isCancelItem:J})=>A=>{A.persist(),k&&k(A),z?(b&&(E.current=()=>b(A)),F(J?"cancel-item":"action-item")):b&&b(A)},[]),H=t.useMemo(()=>({onItemClick:B,mode:n,onClose:p}),[n,p,B]),K=n==="menu"?j:c4,U=n==="menu"?Object.assign(h,{popupOffsetDistance:D,placement:C}):h,Y=u.jsx(t4.Provider,{value:H,children:u.jsxs(K,{closing:!!s,role:"dialog","aria-modal":"true",autoFocus:x==="entered",...U,...O,onClose:p,className:n==="menu"?e:void 0,style:n==="menu"?c:void 0,children:[u.jsxs("div",{className:a.contentWrapper,children:[(r||o)&&u.jsxs("div",{className:a.header,children:[r&&u.jsx(N,{weight:"2",className:a.title,children:r}),o&&u.jsx(N,{className:a.description,children:o})]}),l]}),q==="ios"&&n==="sheet"&&u.jsx("div",{className:a.closeItemWrapperIos,children:m??u.jsx(P,{...f?.iosCloseItem})})]})});return u.jsx(o4,{children:u.jsx(l4,{noBackground:n==="menu",closing:!!s,alignY:"bottom",className:e,style:c,onClick:p,children:Y})})};try{S.displayName="ActionSheet",S.__docgenInfo={description:"",displayName:"ActionSheet",props:{title:{defaultValue:null,description:"Заголовок всплыващего окна.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Описание всплыващего окна, под заголовком.",name:"description",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Закрыть всплыващее окно по нажатию снаружи.",name:"onClose",required:!0,type:{name:"(options: ActionSheetOnCloseOptions) => void"}},iosCloseItem:{defaultValue:null,description:"Только мобильный iOS.",name:"iosCloseItem",required:!1,type:{name:"ReactNode"}},slotProps:{defaultValue:null,description:"Свойства, которые можно прокинуть внутрь компонента:\n- `iosCloseItem`: свойства для прокидывания в кнопку отмены на iOS.",name:"slotProps",required:!1,type:{name:'{ iosCloseItem?: (Omit<ActionSheetItemProps, "mode" | "isCancelItem"> & HasRootRef<HTMLElement>); }'}},mode:{defaultValue:null,description:"Режим отображения компонента:\n\n- `sheet` – отображение снизу экрана в виде всплывающего окна, подходит для мобильных устройств\n- `menu` –  отображение в виде всплывающего элемента, относительно якорного элемента.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"sheet"'}]}},mount:{defaultValue:null,description:"@deprecated Since 7.3.0.  Будет удалeно в **VKUI v9**.",name:"mount",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"@deprecated Since 7.3.0. Будет удалeно в **VKUI v9**.",name:"disabled",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:`Позиционирование всплывающего окна для десктопа.
Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top-start"'},{value:'"top"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"right"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'}]}},toggleRef:{defaultValue:null,description:"Элемент, рядом с которым вылезает всплывающий элемент на десктопе.\nЛучше передавать `RefObject` c current.",name:"toggleRef",required:!0,type:{name:"ToggleRef"}},popupOffsetDistance:{defaultValue:null,description:"Отступ, где заданное кол-во единиц равняется пикселям.",name:"popupOffsetDistance",required:!1,type:{name:"number"}},allowClickPropagation:{defaultValue:null,description:"По умолчанию событие `onClick` не всплывает.",name:"allowClickPropagation",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"",name:"autoFocus",required:!1,type:{name:'boolean | "root"'}},restoreFocus:{defaultValue:{value:"true"},description:"",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}},timeout:{defaultValue:{value:"0"},description:"",name:"timeout",required:!1,type:{name:"number"}}}}}catch{}const hu={title:"Modals/ActionSheet",component:S,parameters:u4("ActionSheet",Z,G),argTypes:{title:T,description:T},tags:["Модальные окна"]},i={render:function({items:e,...r}){const o=t.useRef(null),[c,m]=t.useState(!0);return u.jsxs(t.Fragment,{children:[u.jsx(a4,{stretched:!0,children:u.jsx(n4,{getRootRef:o,onClick:()=>m(!0),"aria-expanded":c,children:"Открыть"})}),c?u.jsx(S,{...r,onClose:()=>m(!1),toggleRef:o,children:e.map(({children:f,...D},C)=>u.jsx(w,{...D,children:f},C))}):null]})},args:{items:[{children:"Сохранить в закладках"},{children:"Закрепить запись"},{children:"Выключить комментирование"},{children:"Закрепить запись"},{mode:"destructive",children:"Удалить запись"}]}},g={...i,args:{items:[{before:u.jsx(m4,{}),children:"Редактировать профиль"},{before:u.jsx(p4,{}),children:"Слушать далее"},{before:u.jsx(E4,{}),children:"Поделиться"},{before:u.jsx(f4,{}),children:"Скопировать ссылку"},{before:u.jsx(h4,{}),mode:"destructive",children:"Удалить плейлист"}]}},y={...i,args:{items:[{before:u.jsx(B4,{}),subtitle:"Авто",children:"Качество"},{before:u.jsx(D4,{}),subtitle:"Отсутствуют",disabled:!0,children:"Субтитры"},{before:u.jsx(C4,{}),subtitle:"Обычная",children:"Скорость воспроизведения"}]}},v={...i,args:{title:"Вы действительно хотите удалить это видео из Ваших видео?",items:[{mode:"destructive",children:"Удалить видео"}]}},I={...i,args:{items:[{name:"menu",selectable:!0,children:"Лучшие друзья",defaultChecked:!0},{name:"menu",selectable:!0,children:"Родственники"},{name:"menu",selectable:!0,children:"Коллеги"},{name:"menu",selectable:!0,children:"Друзья по школе"},{name:"menu",selectable:!0,children:"Друзья по вузу"}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render({
    items,
    ...args
  }) {
    const baseToggleRef = React.useRef(null);
    const [visible, setVisible] = React.useState(true);
    return <React.Fragment>
        <Placeholder stretched>
          <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
            Открыть
          </Button>
        </Placeholder>

        {visible ? <ActionSheet {...args} onClose={() => setVisible(false)} toggleRef={baseToggleRef}>
            {items.map(({
          children,
          ...rest
        }, index) => <ActionSheetItem key={index} {...rest}>
                {children}
              </ActionSheetItem>)}
          </ActionSheet> : null}
      </React.Fragment>;
  },
  args: {
    items: [{
      children: 'Сохранить в закладках'
    }, {
      children: 'Закрепить запись'
    }, {
      children: 'Выключить комментирование'
    }, {
      children: 'Закрепить запись'
    }, {
      mode: 'destructive',
      children: 'Удалить запись'
    }]
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    items: [{
      before: <Icon28EditOutline />,
      children: 'Редактировать профиль'
    }, {
      before: <Icon28ListPlayOutline />,
      children: 'Слушать далее'
    }, {
      before: <Icon28ShareOutline />,
      children: 'Поделиться'
    }, {
      before: <Icon28CopyOutline />,
      children: 'Скопировать ссылку'
    }, {
      before: <Icon28DeleteOutline />,
      mode: 'destructive',
      children: 'Удалить плейлист'
    }]
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    items: [{
      before: <Icon28SettingsOutline />,
      subtitle: 'Авто',
      children: 'Качество'
    }, {
      before: <Icon28SubtitlesOutline />,
      subtitle: 'Отсутствуют',
      disabled: true,
      children: 'Субтитры'
    }, {
      before: <Icon28PlaySpeedOutline />,
      subtitle: 'Обычная',
      children: 'Скорость воспроизведения'
    }]
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    title: 'Вы действительно хотите удалить это видео из Ваших видео?',
    items: [{
      mode: 'destructive',
      children: 'Удалить видео'
    }]
  }
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    items: [{
      name: 'menu',
      selectable: true,
      children: 'Лучшие друзья',
      defaultChecked: true
    }, {
      name: 'menu',
      selectable: true,
      children: 'Родственники'
    }, {
      name: 'menu',
      selectable: true,
      children: 'Коллеги'
    }, {
      name: 'menu',
      selectable: true,
      children: 'Друзья по школе'
    }, {
      name: 'menu',
      selectable: true,
      children: 'Друзья по вузу'
    }]
  }
}`,...I.parameters?.docs?.source}}};const Bu=["Playground","WithIcon","WithSubtitle","WithTitle","WithSelectable"];export{i as Playground,g as WithIcon,I as WithSelectable,y as WithSubtitle,v as WithTitle,Bu as __namedExportsOrder,hu as default};
