import{n as d,r as c,h as _,j as g,R as U,aE as w}from"./iframe-OJ1C6fMc.js";import{u as K,a as Y}from"./useFocusVisibleClassName-GOe5YbRI.js";import{m as P}from"./mergeCalls-Bc-HqyI0.js";import{a as z}from"./type_checkers-CVMjkZjG.js";function y(u,t=0,e=d){const[n,a]=c.useState(u),s=c.useRef(void 0),o=c.useCallback(l=>{z(l)?a(r=>{const C=l(r);return e(C),C}):(a(l),e(l))},[e]),i=c.useCallback((l,r=t)=>{if(clearTimeout(s.current),r===0){o(l);return}s.current=setTimeout(()=>o(l),r)},[t,o]);return[n,i]}try{y.displayName="useStateWithDelay",y.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:"useStateWithDelay",props:{}}}catch{}const G=600,J=70;function O({hovered:u,hasHover:t=!0,lockState:e,setParentStateLock:n}){const[a,s]=c.useState(!1),o=c.useRef(void 0),i=c.useCallback(D=>{s(D);const E=u??V({hasState:t,isLocked:e,stateValueLocal:D});E!==o.current&&(o.current=E,n(E))},[n,t,u,e]),l=D=>{D.pointerType!=="touch"&&i(!0)},r=()=>{i(!1)};return{isHovered:u??V({hasState:t,isLocked:e,stateValueLocal:a}),onPointerEnter:t?l:d,onPointerLeave:t?r:d}}function Q({activated:u,activeEffectDelay:t,hasActive:e=!0,lockStateRef:n,setParentStateLock:a}){const[s,o]=y(!1,0,a),i=c.useMemo(()=>new Set,[]),l=()=>{n.current||(o(!0,J),a(!0))},r=E=>{if(i.has(E.pointerId)){i.delete(E.pointerId);return}o(!1)},C=E=>{i.add(E.pointerId),!n.current&&(o(!0),o(!1,t))};return{isActivated:u??V({hasState:e,isLocked:n.current,stateValueLocal:s}),onPointerLeave:e?r:d,onPointerDown:e?l:d,onPointerCancel:e?r:d,onPointerUp:e?C:d}}const m=c.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function X(u){const[t,e]=c.useState(!1),n=c.useCallback(a=>{e(a),u(a)},[u]);return[t,u,n]}function Z(u){const t=c.useRef(!1),e=c.useCallback(n=>{t.current=n,u(n)},[u]);return[t,u,e]}function k({hovered:u,hasHover:t,activated:e,hasActive:n,activeEffectDelay:a,unlockParentHover:s,hoverClassName:o,activeClassName:i}){const{lockHoverStateBubbling:l=d,lockActiveStateBubbling:r=d}=c.useContext(m),[C,D,E]=X(s?d:l),[F,p,f]=Z(r),{isHovered:v,...B}=O({hasHover:t,hovered:u,lockState:C,setParentStateLock:D}),{isActivated:b,...I}=Q({activated:e,hasActive:n,activeEffectDelay:a,lockStateRef:F,setParentStateLock:p}),A=_(v&&o,b&&i),h=P(B,I);return{stateClassName:A,setLockHoverBubblingImmediate:E,setLockActiveBubblingImmediate:f,...h}}function V({hasState:u,isLocked:t,stateValueLocal:e}){return u&&!t&&e}try{k.displayName="useState",k.__docgenInfo={description:"Управляет состоянием компонента.",displayName:"useState",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="ClickableLockStateContext",m.__docgenInfo={description:"",displayName:"ClickableLockStateContext",props:{}}}catch{}const $="_realClickable_1xxg1_1",u4="_host_1xxg1_20",x={realClickable:$,host:u4};function e4({href:u,onClick:t,onClickCapture:e,activeClassName:n,hoverClassName:a,hasActive:s,hasHover:o,hovered:i,unlockParentHover:l,activated:r,activeEffectDelay:C,focusVisibleMode:D,DefaultComponent:E,Component:F,...p}){return{Component:F||E,...p,lockStateContextValue:{lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0}}}function t4({baseClassName:u,focusVisibleMode:t="inside",activeClassName:e,hoverClassName:n,activeEffectDelay:a=G,hasHover:s=!0,hasActive:o=!0,hovered:i,activated:l,hasHoverWithChildren:r,unlockParentHover:C,onPointerEnter:D,onPointerLeave:E,onPointerDown:F,onPointerCancel:p,onPointerUp:f,onBlur:v,onFocus:B,onKeyDown:b,DefaultComponent:I,...A}){const{focusVisible:h,...T}=K(),L=Y({focusVisible:h,mode:t}),{stateClassName:R,setLockHoverBubblingImmediate:H,setLockActiveBubblingImmediate:q,...W}=k({activeClassName:e,hoverClassName:n,activeEffectDelay:a,hasHover:s,hasActive:o,hovered:i,activated:l,unlockParentHover:C}),M=P(T,W,{onKeyDown:w},{onPointerEnter:D,onPointerLeave:E,onPointerDown:F,onPointerCancel:p,onPointerUp:f,onBlur:v,onFocus:B,onKeyDown:b}),j=c.useMemo(()=>({lockHoverStateBubbling:r?d:H,lockActiveStateBubbling:q}),[H,q,r]);return{baseClassName:_(u,x.realClickable,L,R),...M,...A,lockStateContextValue:j}}function n4(u){const t=a4(u),e=S(u),{baseClassName:n,disabled:a,Component:s,...o}=u,i={baseClassName:_(n,x.host),...t,...o},l=t4(i);return e?l:e4(i)}function S(u){return(u.href!==void 0||u.onClick!==void 0||u.onClickCapture!==void 0||u.Component==="a"||u.Component==="button"||u.Component==="label"||u.Component==="input")&&!u.disabled}function a4({Component:u,DefaultComponent:t="div",onClick:e,onClickCapture:n,href:a,disabled:s}){return u!==void 0?{Component:u,disabled:s}:a!==void 0?{Component:"a",...s&&{"aria-disabled":!0,role:"link"}}:e!==void 0||n!==void 0?{Component:t,role:"button",...s?{"aria-disabled":!0}:{tabIndex:0}}:{}}const N=u=>{const{lockStateContextValue:t,children:e,...n}=n4(u);return g.jsx(U,{...n,children:g.jsx(m.Provider,{value:t,children:e})})};try{S.displayName="checkClickable",S.__docgenInfo={description:"Проверяем, является ли компонент кликабельным.",displayName:"checkClickable",props:{DefaultComponent:{defaultValue:null,description:'Компонент который будет при передаче `onClick`. По умолчанию `"div"`.',name:"DefaultComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{N.displayName="Clickable",N.__docgenInfo={description:'Базовый кликабельный корневой компонент.\n\n- при передаче `href` превратится в `a`,\n- при передаче `onClick` превратится в `div` c `role="button"` и `tabIndex="0"`.\n- иначе используется `div`.\n\nОтвечает за:\n\n- стейты наведения и нажатия\n- a11y компонентов.',displayName:"Clickable",props:{DefaultComponent:{defaultValue:null,description:'Компонент который будет при передаче `onClick`. По умолчанию `"div"`.',name:"DefaultComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}export{N as C,G as D,S as c};
