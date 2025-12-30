import{j as u,g as U,c as G,h as Z,r as e,R as u4,a2 as e4,m as t4,n as M,ap as n4}from"./iframe-D-vjmezP.js";import{S as H,D as o4,C as a4}from"./constants-DdkjnEgz.js";import{c as l4}from"./createStoryParameters-CcwS40kl.js";import{b as r4,A as J,a as Q}from"./ActionSheetItem-BxkDPD1q.js";import{B as s4}from"./Button-iOPheJU3.js";import{P as i4}from"./Placeholder-DLp1pcyI.js";import{u as X}from"./useAdaptivityWithJSMediaQueries-DevrISR8.js";import{A as c4}from"./AppRootPortal-CyZtHULY.js";import{P as d4}from"./PopoutWrapper-BUF5FlTh.js";import{F as K}from"./Footnote-DApQXU2r.js";import{u as m4}from"./useGlobalEscKeyDown-CJjuXJTQ.js";import{i as E4}from"./isRefObject-Dh5CqLqK.js";import{F as p4}from"./FocusTrap-bmUu0BLP.js";import{P as f4}from"./Popper-BNFHN0Tn.js";import{s as o,A as D4}from"./ActionSheetDropdownSheet-C4pHkILm.js";import{u as C4}from"./useCSSKeyframesAnimationController-BPrxArYG.js";import{I as B4}from"./edit_outline_28-B4KwEmVx.js";import{I as F4,a as h4,b as A4,c as b4,d as g4}from"./subtitles_outline_28-BfiG8Zq8.js";import{I as y4}from"./delete_outline_28-C2vf0Qth.js";import{I as v4}from"./settings_outline_28-DvQlLXQg.js";import"./preload-helper-PPVm8Dsz.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./Subhead-DCgRz-zo.js";import"./Title-5rqdnq6p.js";import"./AdaptiveIconRenderer-CKo_rySp.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./check_circle_on_24-Xof2lI9f.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Headline-Dq88a-b4.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./useMutationObserver-Dd7ppQ1q.js";import"./useReferenceHiddenChangeCallback-DQvcIGyb.js";import"./FloatingArrow-DyGZMMOG.js";import"./usePlacementChangeCallback-BZEnW3tw.js";import"./floating-ui.react-dom-CT8q3J_f.js";import"./customResizeObserver-CzwDpNji.js";const S4="_host_1dwgm_1",I4={host:S4},R4={isCancelItem:!0},w=({children:a="Отмена",className:t,...l})=>u.jsx(r4.Provider,{value:R4,children:u.jsx(J,{className:U(I4.host,t),...l,children:a})});try{w.displayName="ActionSheetDefaultIosCloseItem",w.__docgenInfo={description:"",displayName:"ActionSheetDefaultIosCloseItem",props:{mode:{defaultValue:null,description:'Свойство, определяющее внешний вид элемента действия.\n\n> Since 8.0.0. Значение `"cancel"` устарело и будет удалено в **VKUI v10**.\n> Используйте компонент `ActionSheetDefaultIosCloseItem` или передайте пропсы через `slotProps.iosCloseItem` в `ActionSheet`.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"destructive"'},{value:'"cancel"'}]}},href:{defaultValue:null,description:"Если указано, элемент будет использоваться как ссылка.",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Атрибут `target` для тега `<a>`.",name:"target",required:!1,type:{name:"string"}},before:{defaultValue:null,description:"Иконка или другой React-элемент для отображения перед основным контентом.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка или другой React-элемент для отображения после основного контента.",name:"after",required:!1,type:{name:"ReactNode"}},meta:{defaultValue:null,description:"Дополнительная информация, отображаемая рядом с основным контентом.",name:"meta",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Слот для подсказки или вспомогательного текста.",name:"subtitle",required:!1,type:{name:"ReactNode"}},autoCloseDisabled:{defaultValue:null,description:"По умолчанию нажатие на опцию вызывает переданную в `ActionSheet` функцию `onClose`, данное свойство\nпозволяет отключить такое поведение.",name:"autoCloseDisabled",required:!1,type:{name:"boolean"}},selectable:{defaultValue:null,description:"Включает возможность выбрать элемент (отображает радиокнопку).",name:"selectable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Блокировка взаимодействия с компонентом.",name:"disabled",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"Все текстовые элементы при необходимости занимают несколько строк.",name:"multiline",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"По умолчанию `onClick` будет вызван после завершения анимации скрытия и после вызова `onClose`.\nИз этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.\nЕсли вам нужен объект события именно на момент нажатия, используйте `onImmediateClick`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onImmediateClick:{defaultValue:null,description:"Обработчик нажатия, вызывающийся непосредственно в момент нажатия (в отличие от `onClick`).",name:"onImmediateClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},iconChecked:{defaultValue:null,description:"Иконка для `selectable` режима.",name:"iconChecked",required:!1,type:{name:"ReactNode"}},isCancelItem:{defaultValue:null,description:"Позволяет отделить `ActionItem` от `CancelItem` для определении того,\nкто вызвал закрытие `ActionSheet`. Используется в `ActionSheet.onClose()`.\n@deprecated Since 8.0.0. Свойство устарело и будет удалено в **VKUI v10**.\nИспользуйте компонент `ActionSheetDefaultIosCloseItem` или передайте пропсы через `slotProps.iosCloseItem` в `ActionSheet`.",name:"isCancelItem",required:!1,type:{name:"boolean"}}}}}catch{}const L=({children:a,toggleRef:t,closing:l,onClose:r,className:d,style:m,popupOffsetDistance:p=0,placement:f,onAnimationStart:D,onAnimationEnd:k,allowClickPropagation:j=!1,onClick:B,getRootRef:F,autoFocus:P,restoreFocus:E,disabled:O,timeout:h,...s})=>{const _=G(),{density:C}=X(),A=Z(F),N=e.useRef(null),{onClose:b}=e.useContext(Q);e.useEffect(()=>{},[t]);const n=e.useMemo(()=>E4(t)?t:{current:t},[t]),g=e.useCallback(()=>{r?.(),b?.("escape-key")},[b,r]),T=j?B:y=>{e4(y),B?.(y)};return m4(!0,g),u.jsx(f4,{targetRef:n,offsetByMainAxis:p,placement:f,className:U(o.host,_==="ios"&&o.ios,o.menu,l?o.closing:o.opening,C==="compact"&&o.densityCompact,d),style:m,getRootRef:N,usePortal:!1,onAnimationStart:D,onAnimationEnd:k,children:u.jsx(p4,{autoFocus:P,autoFocusDelay:h,restoreFocus:E,disabled:O,rootRef:A,children:u.jsx(u4,{...s,tabIndex:-1,onClick:T,getRootRef:A,children:a})})})};try{L.displayName="ActionSheetDropdownMenu",L.__docgenInfo={description:"",displayName:"ActionSheetDropdownMenu",props:{closing:{defaultValue:null,description:"Состояние закрытия всплывающего окна.",name:"closing",required:!0,type:{name:"boolean"}},toggleRef:{defaultValue:null,description:"Элемент, рядом с которым вылезает всплывающий элемент на десктопе.\nЛучше передавать `RefObject` c current.",name:"toggleRef",required:!0,type:{name:"ToggleRef"}},placement:{defaultValue:null,description:`Позиционирование всплывающего окна для десктопа.
Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'}]}},popupOffsetDistance:{defaultValue:{value:"0"},description:"Отступ, где заданное кол-во единиц равняется пикселям.",name:"popupOffsetDistance",required:!1,type:{name:"number"}},allowClickPropagation:{defaultValue:{value:"false"},description:"По умолчанию событие `onClick` не всплывает.",name:"allowClickPropagation",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Вызывается при нажатии на кнопку `Escape`.",name:"onClose",required:!1,type:{name:"VoidFunction"}},disabled:{defaultValue:{value:"false"},description:"Форсированное отключение захвата фокуса.",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"Управление поведением автофокуса при появлении всплывающего окна.\nПри прокидывании `true` фокус будет установлен на первый элемент.\nПри прокидывании `root` фокус будет установлен в корень.",name:"autoFocus",required:!1,type:{name:'boolean | "root"'}},restoreFocus:{defaultValue:{value:"true"},description:"Управление поведением возврата фокуса при закрытии всплывающего окна.",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}},timeout:{defaultValue:{value:"0"},description:"Время в миллисекундах после которого срабатывает автофокус при появлении всплывающего окна.",name:"timeout",required:!1,type:{name:"number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const q=({children:a,className:t,title:l,description:r,style:d,iosCloseItem:m,slotProps:p,popupOffsetDistance:f,placement:D,mode:k,onClose:j,onClosed:B,...F})=>{const P=G(),[E,O]=e.useState(void 0),h=t4(j||M),s=e.useCallback((i,v)=>{h(i),O(v)},[h]),_=e.useCallback(()=>s("click-overlay","other"),[s]),C=e.useRef(M),[A,N]=C4(E!==void 0?"exit":"enter",{onExited(){B({closedBy:E||"other"}),C.current(),C.current=M}}),{isDesktop:b}=X(),n=k??(b?"menu":"sheet");n4(n==="sheet");const g=e.useCallback(({action:i,immediateAction:v,autoClose:z,isCancelItem:W})=>S=>{S.persist(),v&&v(S),z?(i&&(C.current=()=>i(S)),s(W?"click-cancel-item":"click-action-item",W?"cancel-item":"action-item")):i&&i(S)},[s]),T=e.useMemo(()=>({onItemClick:g,mode:n,onClose:i=>s(i,"other")}),[n,s,g]),y=n==="menu"?L:D4,Y=n==="menu"?Object.assign(F,{popupOffsetDistance:f,placement:D}):F,$=u.jsx(Q.Provider,{value:T,children:u.jsxs(y,{closing:!!E,role:"dialog","aria-modal":"true",autoFocus:A==="entered",...Y,...N,className:n==="menu"?t:void 0,style:n==="menu"?d:void 0,children:[u.jsxs("div",{className:o.contentWrapper,children:[(l||r)&&u.jsxs("div",{className:o.header,children:[l&&u.jsx(K,{weight:"2",className:o.title,children:l}),r&&u.jsx(K,{className:o.description,children:r})]}),a]}),P==="ios"&&n==="sheet"&&u.jsx("div",{className:o.closeItemWrapperIos,children:m??u.jsx(w,{...p?.iosCloseItem})})]})});return u.jsx(c4,{children:u.jsx(d4,{noBackground:n==="menu",closing:!!E,alignY:"bottom",className:t,style:d,onClick:_,children:$})})};try{q.displayName="ActionSheet",q.__docgenInfo={description:"",displayName:"ActionSheet",props:{title:{defaultValue:null,description:"Заголовок всплывающего окна.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Описание всплывающего окна, под заголовком.",name:"description",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Обработчик закрытия всплывающего окна.",name:"onClose",required:!1,type:{name:"((reason: ActionSheetOnCloseReason) => void)"}},onClosed:{defaultValue:null,description:`Обработчик закрытия всплывающего окна срабатывающий после завершения анимации закрытия.

> Since 8.0.0 аргумент, переданный в данную функцию, устарел и будет удален в **VKUI v10**.
> Для получения причины закрытия всплывающего окна используйте свойство \`onClose\`.`,name:"onClosed",required:!0,type:{name:"(options: ActionSheetOnCloseOptions) => void"}},iosCloseItem:{defaultValue:null,description:"Только мобильный iOS.",name:"iosCloseItem",required:!1,type:{name:"ReactNode"}},slotProps:{defaultValue:null,description:"Свойства, которые можно прокинуть внутрь компонента:\n- `iosCloseItem`: свойства для прокидывания в кнопку отмены на iOS.",name:"slotProps",required:!1,type:{name:'{ iosCloseItem?: (Omit<ActionSheetItemProps, "mode" | "isCancelItem"> & HasRootRef<HTMLElement>); }'}},mode:{defaultValue:null,description:"Режим отображения компонента:\n\n- `sheet` – отображение снизу экрана в виде всплывающего окна, подходит для мобильных устройств\n- `menu` – отображение в виде всплывающего элемента, относительно якорного элемента.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"sheet"'}]}},mount:{defaultValue:null,description:"@deprecated Since 7.3.0.  Будет удалeно в **VKUI v9**.",name:"mount",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"@deprecated Since 7.3.0. Будет удалeно в **VKUI v9**.",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"Управление поведением автофокуса при появлении всплывающего окна.\nПри прокидывании `true` фокус будет установлен на первый элемент.\nПри прокидывании `root` фокус будет установлен в корень.",name:"autoFocus",required:!1,type:{name:'boolean | "root"'}},placement:{defaultValue:null,description:`Позиционирование всплывающего окна для десктопа.
Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства.`,name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'}]}},allowClickPropagation:{defaultValue:null,description:"По умолчанию событие `onClick` не всплывает.",name:"allowClickPropagation",required:!1,type:{name:"boolean"}},restoreFocus:{defaultValue:{value:"true"},description:"Управление поведением возврата фокуса при закрытии всплывающего окна.",name:"restoreFocus",required:!1,type:{name:"boolean | (() => boolean | HTMLElement)"}},toggleRef:{defaultValue:null,description:"Элемент, рядом с которым вылезает всплывающий элемент на десктопе.\nЛучше передавать `RefObject` c current.",name:"toggleRef",required:!0,type:{name:"ToggleRef"}},popupOffsetDistance:{defaultValue:null,description:"Отступ, где заданное кол-во единиц равняется пикселям.",name:"popupOffsetDistance",required:!1,type:{name:"number"}},timeout:{defaultValue:{value:"0"},description:"Время в миллисекундах после которого срабатывает автофокус при появлении всплывающего окна.",name:"timeout",required:!1,type:{name:"number"}}}}}catch{}const yu={title:"Modals/ActionSheet",component:q,parameters:l4("ActionSheet",a4,o4),argTypes:{title:H,description:H},tags:["Модальные окна"]},c={render:function({items:t,...l}){const r=e.useRef(null),[d,m]=e.useState(!0);return u.jsxs(e.Fragment,{children:[u.jsx(i4,{stretched:!0,children:u.jsx(s4,{getRootRef:r,onClick:()=>m(!0),"aria-expanded":d,children:"Открыть"})}),d?u.jsx(q,{...l,onClosed:()=>m(!1),toggleRef:r,children:t.map(({children:p,...f},D)=>u.jsx(J,{...f,children:p},D))}):null]})},args:{items:[{children:"Сохранить в закладках"},{children:"Закрепить запись"},{children:"Выключить комментирование"},{children:"Закрепить запись"},{mode:"destructive",children:"Удалить запись"}]}},I={...c,args:{items:[{before:u.jsx(B4,{}),children:"Редактировать профиль"},{before:u.jsx(F4,{}),children:"Слушать далее"},{before:u.jsx(h4,{}),children:"Поделиться"},{before:u.jsx(A4,{}),children:"Скопировать ссылку"},{before:u.jsx(y4,{}),mode:"destructive",children:"Удалить плейлист"}]}},R={...c,args:{items:[{before:u.jsx(v4,{}),subtitle:"Авто",children:"Качество"},{before:u.jsx(b4,{}),subtitle:"Отсутствуют",disabled:!0,children:"Субтитры"},{before:u.jsx(g4,{}),subtitle:"Обычная",children:"Скорость воспроизведения"}]}},V={...c,args:{title:"Вы действительно хотите удалить это видео из Ваших видео?",items:[{mode:"destructive",children:"Удалить видео"}]}},x={...c,args:{items:[{name:"menu",selectable:!0,children:"Лучшие друзья",defaultChecked:!0},{name:"menu",selectable:!0,children:"Родственники"},{name:"menu",selectable:!0,children:"Коллеги"},{name:"menu",selectable:!0,children:"Друзья по школе"},{name:"menu",selectable:!0,children:"Друзья по вузу"}]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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

        {visible ? <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef}>
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
}`,...c.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    title: 'Вы действительно хотите удалить это видео из Ваших видео?',
    items: [{
      mode: 'destructive',
      children: 'Удалить видео'
    }]
  }
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const vu=["Playground","WithIcon","WithSubtitle","WithTitle","WithSelectable"];export{c as Playground,I as WithIcon,x as WithSelectable,R as WithSubtitle,V as WithTitle,vu as __namedExportsOrder,yu as default};
