import{j as u,q as Q,c as M,r as a,v as J,h as G,Q as U,n as _,af as X}from"./iframe-DvQ0hW0I.js";import{S as N,D as Z,C as $}from"./constants-DdkjnEgz.js";import{c as u4}from"./createStoryParameters-CcwS40kl.js";import{A as W,a as e4}from"./ActionSheetItem-DKng4fc0.js";import{B as t4}from"./Button-DPGaTllJ.js";import{P as n4}from"./Placeholder-C9nbJ69h.js";import{u as w}from"./useAdaptivityWithJSMediaQueries-DXRZk8vd.js";import{A as a4}from"./AppRootPortal-CoRG5RWu.js";import{P as o4}from"./PopoutWrapper-NEWGfFwT.js";import{F as T}from"./Footnote-DYSqrBFj.js";import{u as r4}from"./useEventListener-BWoYhQmZ.js";import{F as l4}from"./FocusTrap-CDqAhor2.js";import{P as i4}from"./Popper-uYwlu0xB.js";import{s as n,A as s4}from"./ActionSheetDropdownSheet-8oUuUeZa.js";import{u as c4}from"./useCSSKeyframesAnimationController-B-asaqHF.js";import{I as d4}from"./edit_outline_28-Cz7l0rcY.js";import{I as m4,a as E4,b as p4,c as f4,d as D4}from"./subtitles_outline_28-DPdLqxuJ.js";import{I as B4}from"./delete_outline_28-B__iK2MA.js";import{I as C4}from"./settings_outline_28-Doh0D72a.js";import"./preload-helper-PPVm8Dsz.js";import"./Tappable-CzBKs2NQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./Subhead-DE0FovKO.js";import"./Title-CHQ24GsB.js";import"./AdaptiveIconRenderer-Co7qE9ki.js";import"./VisuallyHidden-CGlAvVNH.js";import"./check_circle_on_24-DystyaVO.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CAlwHhMu.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Headline-U_eDzwn1.js";import"./useColorScheme-Du5ZuGtY.js";import"./createPortal-BtQKhO30.js";import"./ColorSchemeProvider-DIg3ehzA.js";import"./ConfigProviderOverride-5F9Q0adn.js";import"./useFocusTrap-DkPh3l3Y.js";import"./useMutationObserver-6Z5Jiq8c.js";import"./useReferenceHiddenChangeCallback-DyVC-Pyk.js";import"./FloatingArrow-nqFcSJUy.js";import"./usePlacementChangeCallback-CCMY9emW.js";import"./floating-ui.react-dom-ST0J1v4u.js";const j=({children:o="Отмена",...e})=>u.jsx(W,{mode:"cancel",isCancelItem:!0,...e,children:o});try{j.displayName="ActionSheetDefaultIosCloseItem",j.__docgenInfo={description:"",displayName:"ActionSheetDefaultIosCloseItem",props:{mode:{defaultValue:null,description:"Свойство, определяющее внешний вид элемента действия.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"destructive"'},{value:'"cancel"'}]}},href:{defaultValue:null,description:"Если указано, элемент будет использоваться как ссылка.",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Атрибут `target` для тега `<a>`.",name:"target",required:!1,type:{name:"string"}},before:{defaultValue:null,description:"Иконка или другой React-элемент для отображения перед основным контентом.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка или другой React-элемент для отображения после основного контента.",name:"after",required:!1,type:{name:"ReactNode"}},meta:{defaultValue:null,description:"Дополнительная информация, отображаемая рядом с основным контентом.",name:"meta",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Слот для подсказки или вспомогательного текста.",name:"subtitle",required:!1,type:{name:"ReactNode"}},autoCloseDisabled:{defaultValue:null,description:"По умолчанию нажатие на опцию вызывает переданную в `ActionSheet` функцию `onClose`, данное свойство\nпозволяет отключить такое поведение.",name:"autoCloseDisabled",required:!1,type:{name:"boolean"}},selectable:{defaultValue:null,description:"Включает возможность выбрать элемент (отображает радиокнопку).",name:"selectable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Блокировка взаимодействия с компонентом.",name:"disabled",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"Все текстовые элементы при необходимости занимают несколько строк.",name:"multiline",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"По умолчанию `onClick` будет вызван после завершения анимации скрытия и после вызова `onClose`.\nИз этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.\nЕсли вам нужен объект события именно на момент нажатия, используйте `onImmediateClick`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onImmediateClick:{defaultValue:null,description:"Обработчик нажатия, вызывающийся непосредственно в момент нажатия (в отличие от `onClick`).",name:"onImmediateClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},iconChecked:{defaultValue:null,description:"Иконка для `selectable` режима.",name:"iconChecked",required:!1,type:{name:"ReactNode"}},isCancelItem:{defaultValue:null,description:"Позволяет отделить `ActionItem` от `CancelItem` для определении того,\nкто вызвал закрытие `ActionSheet`. Используется в `ActionSheet.onClose()`.",name:"isCancelItem",required:!1,type:{name:"boolean"}}}}}catch{}const k=({children:o,toggleRef:e,closing:i,onClose:r,className:s,style:d,popupOffsetDistance:p=0,placement:f,onAnimationStart:D,onAnimationEnd:x,allowClickPropagation:F=!1,onClick:h,...m})=>{const{document:B}=Q(),E=M(),{sizeY:C}=w(),b=a.useRef(null),A=r4("click",c=>{const g=b?.current;g&&!g.contains(c.target)&&r?.()});a.useEffect(()=>{setTimeout(()=>{A.add(B.body)})},[A,B]);const O=a.useMemo(()=>J(e)?e:{current:e},[e]),t=F?h:c=>{U(c),h?.(c)};return u.jsx(i4,{targetRef:O,offsetByMainAxis:p,placement:f,className:G(n.host,E==="ios"&&n.ios,n.menu,i?n.closing:n.opening,C==="compact"&&n.sizeYCompact,s),style:d,getRootRef:b,usePortal:!1,onAnimationStart:D,onAnimationEnd:x,children:u.jsx(l4,{onClose:r,...m,onClick:t,children:o})})};try{k.displayName="ActionSheetDropdownMenu",k.__docgenInfo={description:"",displayName:"ActionSheetDropdownMenu",props:{closing:{defaultValue:null,description:"Состояние закрытия всплывающего окна.",name:"closing",required:!0,type:{name:"boolean"}},toggleRef:{defaultValue:null,description:"Элемент, рядом с которым вылезает всплывающий элемент на десктопе.\nЛучше передавать `RefObject` c current.",name:"toggleRef",required:!0,type:{name:"ToggleRef"}},placement:{defaultValue:null,description:`Позиционирование всплывающего окна для десктопа.
Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},popupOffsetDistance:{defaultValue:{value:"0"},description:"Отступ, где заданное кол-во единиц равняется пикселям.",name:"popupOffsetDistance",required:!1,type:{name:"number"}},allowClickPropagation:{defaultValue:{value:"false"},description:"По умолчанию событие `onClick` не всплывает.",name:"allowClickPropagation",required:!1,type:{name:"boolean"}},mount:{defaultValue:{value:"true"},description:"",name:"mount",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Форсированное отключение захвата фокуса",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"",name:"autoFocus",required:!1,type:{name:'boolean | "root"'}},restoreFocus:{defaultValue:{value:"true"},description:"",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}},timeout:{defaultValue:{value:"0"},description:"",name:"timeout",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"Вызывается при нажатии на кнопку `Escape`.",name:"onClose",required:!1,type:{name:"VoidFunction"}},captureEscapeKeyboardEvent:{defaultValue:{value:"true"},description:`Следует ли обрабатываеть событие нажатия клавиши Escape при "погружении", то есть
до того как это событие будет обработано на EventTarget
Удобно установить в false, если требуется запретить "всплытие" события до FocusTrap`,name:"captureEscapeKeyboardEvent",required:!1,type:{name:"boolean"}},mutationObserverOptions:{defaultValue:null,description:"Пользовательские опции для MutationObserver, который отслеживает изменения DOM внутри компонента и пересчитывает ноды для фокуса.",name:"mutationObserverOptions",required:!1,type:{name:"MutationObserverInit"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const q=({children:o,className:e,title:i,description:r,style:s,iosCloseItem:d,popupOffsetDistance:p,placement:f,mode:D,onClose:x,...F})=>{const h=M(),[m,B]=a.useState(void 0),E=a.useCallback(()=>B("other"),[]),C=a.useRef(_),[b,A]=c4(m!==void 0?"exit":"enter",{onExited(){x({closedBy:m||"other"}),C.current(),C.current=_}}),{isDesktop:O}=w(),t=D??(O?"menu":"sheet");X(t==="sheet");const c=a.useCallback(({action:y,immediateAction:P,autoClose:Y,isCancelItem:z})=>v=>{v.persist(),P&&P(v),Y?(y&&(C.current=()=>y(v)),B(z?"cancel-item":"action-item")):y&&y(v)},[]),g=a.useMemo(()=>({onItemClick:c,mode:t,onClose:E}),[t,E,c]),L=t==="menu"?k:s4,H=t==="menu"?Object.assign(F,{popupOffsetDistance:p,placement:f}):F,K=u.jsx(e4.Provider,{value:g,children:u.jsxs(L,{closing:!!m,role:"dialog","aria-modal":"true",autoFocus:b==="entered",...H,...A,onClose:E,className:t==="menu"?e:void 0,style:t==="menu"?s:void 0,children:[u.jsxs("div",{className:n.contentWrapper,children:[(i||r)&&u.jsxs("div",{className:n.header,children:[i&&u.jsx(T,{weight:"2",className:n.title,children:i}),r&&u.jsx(T,{className:n.description,children:r})]}),o]}),h==="ios"&&t==="sheet"&&u.jsx("div",{className:n.closeItemWrapperIos,children:d??u.jsx(j,{})})]})});return u.jsx(a4,{children:u.jsx(o4,{noBackground:t==="menu",closing:!!m,alignY:"bottom",className:e,style:s,onClick:E,strategy:"fixed",children:K})})};try{q.displayName="ActionSheet",q.__docgenInfo={description:"",displayName:"ActionSheet",props:{title:{defaultValue:null,description:"Заголовок всплыващего окна.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Описание всплыващего окна, под заголовком.",name:"description",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Закрыть всплыващее окно по нажатию снаружи.",name:"onClose",required:!0,type:{name:"(options: ActionSheetOnCloseOptions) => void"}},iosCloseItem:{defaultValue:null,description:"Только мобильный iOS.",name:"iosCloseItem",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"Режим отображения компонента:\n\n- `sheet` – отображение снизу экрана в виде всплывающего окна, подходит для мобильных устройств\n- `menu` –  отображение в виде всплывающего элемента, относительно якорного элемента.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"sheet"'}]}},mount:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство не используется и будет удалено в `v8`.",name:"mount",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство не используется и будет удалено в `v8`.",name:"disabled",required:!1,type:{name:"boolean"}},toggleRef:{defaultValue:null,description:"Элемент, рядом с которым вылезает всплывающий элемент на десктопе.\nЛучше передавать `RefObject` c current.",name:"toggleRef",required:!0,type:{name:"ToggleRef"}},popupOffsetDistance:{defaultValue:null,description:"Отступ, где заданное кол-во единиц равняется пикселям.",name:"popupOffsetDistance",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:`Позиционирование всплывающего окна для десктопа.
Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},allowClickPropagation:{defaultValue:null,description:"По умолчанию событие `onClick` не всплывает.",name:"allowClickPropagation",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"",name:"autoFocus",required:!1,type:{name:'boolean | "root"'}},restoreFocus:{defaultValue:{value:"true"},description:"",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}},timeout:{defaultValue:{value:"0"},description:"",name:"timeout",required:!1,type:{name:"number"}}}}}catch{}const pu={title:"Modals/ActionSheet",component:q,parameters:u4("ActionSheet",$,Z),argTypes:{title:N,description:N},tags:["Модальные окна"]},l={render:function({items:e,...i}){const r=a.useRef(null),[s,d]=a.useState(!0);return u.jsxs(a.Fragment,{children:[u.jsx(n4,{stretched:!0,children:u.jsx(t4,{getRootRef:r,onClick:()=>d(!0),"aria-expanded":s,children:"Открыть"})}),s?u.jsx(q,{...i,onClose:()=>d(!1),toggleRef:r,children:e.map(({children:p,...f},D)=>u.jsx(W,{...f,children:p},D))}):null]})},args:{items:[{children:"Сохранить в закладках"},{children:"Закрепить запись"},{children:"Выключить комментирование"},{children:"Закрепить запись"},{mode:"destructive",children:"Удалить запись"}]}},S={...l,args:{items:[{before:u.jsx(d4,{}),children:"Редактировать профиль"},{before:u.jsx(m4,{}),children:"Слушать далее"},{before:u.jsx(E4,{}),children:"Поделиться"},{before:u.jsx(p4,{}),children:"Скопировать ссылку"},{before:u.jsx(B4,{}),mode:"destructive",children:"Удалить плейлист"}]}},V={...l,args:{items:[{before:u.jsx(C4,{}),subtitle:"Авто",children:"Качество"},{before:u.jsx(f4,{}),subtitle:"Отсутствуют",disabled:!0,children:"Субтитры"},{before:u.jsx(D4,{}),subtitle:"Обычная",children:"Скорость воспроизведения"}]}},I={...l,args:{title:"Вы действительно хотите удалить это видео из Ваших видео?",items:[{mode:"destructive",children:"Удалить видео"}]}},R={...l,args:{items:[{name:"menu",selectable:!0,children:"Лучшие друзья",defaultChecked:!0},{name:"menu",selectable:!0,children:"Родственники"},{name:"menu",selectable:!0,children:"Коллеги"},{name:"menu",selectable:!0,children:"Друзья по школе"},{name:"menu",selectable:!0,children:"Друзья по вузу"}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    title: 'Вы действительно хотите удалить это видео из Ваших видео?',
    items: [{
      mode: 'destructive',
      children: 'Удалить видео'
    }]
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};const fu=["Playground","WithIcon","WithSubtitle","WithTitle","WithSelectable"];export{l as Playground,S as WithIcon,R as WithSelectable,V as WithSubtitle,I as WithTitle,fu as __namedExportsOrder,pu as default};
