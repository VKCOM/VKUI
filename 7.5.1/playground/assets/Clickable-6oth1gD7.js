import{r as l,t as U,i as v,n as d,j as q,R as w,aC as K}from"./iframe-DSAhScPT.js";import{m as x}from"./mergeCalls-Bc-HqyI0.js";import{a as Y}from"./type_checkers-CVMjkZjG.js";const p={"-focus-visible":"_-focus-visible_1xi0z_5","-focus-visible--mode-outside":"_-focus-visible--mode-outside_1xi0z_18","-focus-visible--mode-inside":"_-focus-visible--mode-inside_1xi0z_23","-focus-visible--focused":"_-focus-visible--focused_1xi0z_28"};function $(){const[u,e]=l.useState(!1),{keyboardInput:t}=l.useContext(U),n=l.useCallback(a=>{a.stopPropagation(),e(!0)},[e]),o=l.useCallback(a=>{a.stopPropagation(),e(!1)},[e]);return{focusVisible:t&&u,onFocus:n,onBlur:o}}const G={inside:p["-focus-visible--mode-inside"],outside:p["-focus-visible--mode-outside"]},J=u=>u==="inside"||u==="outside";function O({focusVisible:u=!1,mode:e="inside"}){const t=J(e)?G[e]:e;return v(p["-focus-visible"],u&&p["-focus-visible--focused"],u&&t)}function V(u,e=0,t=d){const[n,o]=l.useState(u),i=l.useRef(void 0),a=l.useCallback(s=>{Y(s)?o(c=>{const C=s(c);return t(C),C}):(o(s),t(s))},[t]),r=l.useCallback((s,c=e)=>{if(clearTimeout(i.current),c===0){a(s);return}i.current=setTimeout(()=>a(s),c)},[e,a]);return[n,r]}try{V.displayName="useStateWithDelay",V.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
без и с задержкой.

# Пример

\`\`\`ts
const [count, setCount] = useStateWithDelay(initialState);

const click = () => {
  setCount(count + 1, 500)
}
\`\`\`

Есть возможность передать функцию-обработчик, которая будет
вызвана сразу после вызова setState с новым значением стейта
в качестве аргумента.

\`\`\`ts
const onCountChange = React.useCallback((count) => {
  // обработчик нового значения count
  // будет вызван через 500мс
}, []);


const [count, setCount] = useStateWithDelay(initialState, 0, onCountChange);

const click = () => {
  setCount(count + 1, 500)
}
\`\`\``,displayName:"useStateWithDelay",props:{}}}catch{}const Q=600,X=70;function Z({hovered:u,hasHover:e=!0,lockState:t,setParentStateLock:n}){const[o,i]=l.useState(!1),a=l.useRef(void 0),r=l.useCallback(D=>{i(D);const E=u??S({hasState:e,isLocked:t,stateValueLocal:D});E!==a.current&&(a.current=E,n(E))},[n,e,u,t]),s=D=>{D.pointerType!=="touch"&&r(!0)},c=()=>{r(!1)};return{isHovered:u??S({hasState:e,isLocked:t,stateValueLocal:o}),onPointerEnter:e?s:d,onPointerLeave:e?c:d}}function u4({activated:u,activeEffectDelay:e,hasActive:t=!0,lockStateRef:n,setParentStateLock:o}){const[i,a]=V(!1,0,o),r=l.useMemo(()=>new Set,[]),s=()=>{n.current||(a(!0,X),o(!0))},c=E=>{if(r.has(E.pointerId)){r.delete(E.pointerId);return}a(!1)},C=E=>{r.add(E.pointerId),!n.current&&(a(!0),a(!1,e))};return{isActivated:u??S({hasState:t,isLocked:n.current,stateValueLocal:i}),onPointerLeave:t?c:d,onPointerDown:t?s:d,onPointerCancel:t?c:d,onPointerUp:t?C:d}}const m=l.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function e4(u){const[e,t]=l.useState(!1),n=l.useCallback(o=>{t(o),u(o)},[u]);return[e,u,n]}function t4(u){const e=l.useRef(!1),t=l.useCallback(n=>{e.current=n,u(n)},[u]);return[e,u,t]}function _({hovered:u,hasHover:e,activated:t,hasActive:n,activeEffectDelay:o,unlockParentHover:i,hoverClassName:a,activeClassName:r}){const{lockHoverStateBubbling:s=d,lockActiveStateBubbling:c=d}=l.useContext(m),[C,D,E]=e4(i?d:s),[F,f,B]=t4(c),{isHovered:b,...A}=Z({hasHover:e,hovered:u,lockState:C,setParentStateLock:D}),{isActivated:y,...N}=u4({activated:t,hasActive:n,activeEffectDelay:o,lockStateRef:F,setParentStateLock:f}),h=v(b&&a,y&&r),k=x(A,N);return{stateClassName:h,setLockHoverBubblingImmediate:E,setLockActiveBubblingImmediate:B,...k}}function S({hasState:u,isLocked:e,stateValueLocal:t}){return u&&!e&&t}try{_.displayName="useState",_.__docgenInfo={description:"Управляет состоянием компонента.",displayName:"useState",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
иметь \`hovered\`-cостояние при наведении
на любой дочерний элемент.
По умолчанию состояние hovered у родителя сбрасывается.

Присваивается родителькому компоненту.
@example <Tappable hasHoverWithChildren>
  <IconButton />
  <IconButton />
  <IconButton />
</Tappable>`,name:"hasHoverWithChildren",required:!1,type:{name:"boolean"}},unlockParentHover:{defaultValue:null,description:`Позволяет родительскому компоненту показывать hovered-состояние при наведении
на текущий дочерний компонент.

Присваивается дочернему компоненту.
@example <Tappable>
  <IconButton unlockParentHover />
  <IconButton unlockParentHover />
  <IconButton />
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="ClickableLockStateContext",m.__docgenInfo={description:"",displayName:"ClickableLockStateContext",props:{}}}catch{}const n4="_realClickable_1xxg1_1",a4="_host_1xxg1_20",T={realClickable:n4,host:a4};function o4({href:u,onClick:e,onClickCapture:t,activeClassName:n,hoverClassName:o,hasActive:i,hasHover:a,hovered:r,unlockParentHover:s,activated:c,activeEffectDelay:C,focusVisibleMode:D,DefaultComponent:E,Component:F,...f}){return{Component:F||E,...f,lockStateContextValue:{lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0}}}function l4({baseClassName:u,focusVisibleMode:e="inside",activeClassName:t,hoverClassName:n,activeEffectDelay:o=Q,hasHover:i=!0,hasActive:a=!0,hovered:r,activated:s,hasHoverWithChildren:c,unlockParentHover:C,onPointerEnter:D,onPointerLeave:E,onPointerDown:F,onPointerCancel:f,onPointerUp:B,onBlur:b,onFocus:A,onKeyDown:y,DefaultComponent:N,...h}){const{focusVisible:k,...L}=$(),R=O({focusVisible:k,mode:e}),{stateClassName:W,setLockHoverBubblingImmediate:H,setLockActiveBubblingImmediate:g,...M}=_({activeClassName:t,hoverClassName:n,activeEffectDelay:o,hasHover:i,hasActive:a,hovered:r,activated:s,unlockParentHover:C}),j=x(L,M,{onKeyDown:K},{onPointerEnter:D,onPointerLeave:E,onPointerDown:F,onPointerCancel:f,onPointerUp:B,onBlur:b,onFocus:A,onKeyDown:y}),z=l.useMemo(()=>({lockHoverStateBubbling:c?d:H,lockActiveStateBubbling:g}),[H,g,c]);return{baseClassName:v(u,T.realClickable,R,W),...j,...h,lockStateContextValue:z}}function s4(u){const e=i4(u),t=I(u),{baseClassName:n,disabled:o,Component:i,...a}=u,r={baseClassName:v(n,T.host),...e,...a},s=l4(r);return t?s:o4(r)}function I(u){return(u.href!==void 0||u.onClick!==void 0||u.onClickCapture!==void 0||u.Component==="a"||u.Component==="button"||u.Component==="label"||u.Component==="input")&&!u.disabled}function i4({Component:u,DefaultComponent:e="div",onClick:t,onClickCapture:n,href:o,disabled:i}){return u!==void 0?{Component:u,disabled:i}:o!==void 0?{Component:"a",...i&&{"aria-disabled":!0,role:"link"}}:t!==void 0||n!==void 0?{Component:e,role:"button",...i?{"aria-disabled":!0}:{tabIndex:0}}:{}}const P=u=>{const{lockStateContextValue:e,children:t,...n}=s4(u);return q.jsx(w,{...n,children:q.jsx(m.Provider,{value:e,children:t})})};try{I.displayName="checkClickable",I.__docgenInfo={description:"Проверяем, является ли компонент кликабельным.",displayName:"checkClickable",props:{DefaultComponent:{defaultValue:null,description:'Компонент который будет при передаче `onClick`. По умолчанию `"div"`.',name:"DefaultComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
иметь \`hovered\`-cостояние при наведении
на любой дочерний элемент.
По умолчанию состояние hovered у родителя сбрасывается.

Присваивается родителькому компоненту.
@example <Tappable hasHoverWithChildren>
  <IconButton />
  <IconButton />
  <IconButton />
</Tappable>`,name:"hasHoverWithChildren",required:!1,type:{name:"boolean"}},unlockParentHover:{defaultValue:null,description:`Позволяет родительскому компоненту показывать hovered-состояние при наведении
на текущий дочерний компонент.

Присваивается дочернему компоненту.
@example <Tappable>
  <IconButton unlockParentHover />
  <IconButton unlockParentHover />
  <IconButton />
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{P.displayName="Clickable",P.__docgenInfo={description:'Базовый кликабельный корневой компонент.\n\n- при передаче `href` превратится в `a`,\n- при передаче `onClick` превратится в `div` c `role="button"` и `tabIndex="0"`.\n- иначе используется `div`.\n\nОтвечает за:\n\n- стейты наведения и нажатия\n- a11y компонентов.',displayName:"Clickable",props:{DefaultComponent:{defaultValue:null,description:'Компонент который будет при передаче `onClick`. По умолчанию `"div"`.',name:"DefaultComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
иметь \`hovered\`-cостояние при наведении
на любой дочерний элемент.
По умолчанию состояние hovered у родителя сбрасывается.

Присваивается родителькому компоненту.
@example <Tappable hasHoverWithChildren>
  <IconButton />
  <IconButton />
  <IconButton />
</Tappable>`,name:"hasHoverWithChildren",required:!1,type:{name:"boolean"}},unlockParentHover:{defaultValue:null,description:`Позволяет родительскому компоненту показывать hovered-состояние при наведении
на текущий дочерний компонент.

Присваивается дочернему компоненту.
@example <Tappable>
  <IconButton unlockParentHover />
  <IconButton unlockParentHover />
  <IconButton />
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}export{P as C,Q as D,O as a,I as c,$ as u};
