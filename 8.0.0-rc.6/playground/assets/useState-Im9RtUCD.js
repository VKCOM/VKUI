import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CX9URrKL.js";import{c as r,o as i,s as a,t as o}from"./lib-B1PKsac9.js";import{n as s,t as c}from"./AppRootContext-DyPCgD2o.js";import{n as l,t as u}from"./callMultiple-CVyxylLK.js";function d(...e){let t=e.reduce((e,t)=>(Object.entries(t).forEach(([t,n])=>{e.hasOwnProperty(t)||(e[t]=[]),e[t].push(n)}),e),{});return Object.entries(t).reduce((e,[t,n])=>(e[t]=u(...n),e),{})}var f=t((()=>{l()}));function p(){let[e,t]=(0,m.useState)(!1),{keyboardInput:n}=(0,m.useContext)(c),r=(0,m.useCallback)(e=>{e.stopPropagation(),t(!0)},[t]),i=(0,m.useCallback)(e=>{e.stopPropagation(),t(!1)},[t]);return{focusVisible:n&&e,onFocus:r,onBlur:i}}var m,h=t((()=>{m=e(n(),1),s()}));function g(e,t=0,n=a){let[r,o]=_.useState(e),s=_.useRef(void 0),c=_.useCallback(e=>{i(e)?o(t=>{let r=e(t);return n(r),r}):(o(e),n(e))},[n]);return[r,_.useCallback((e,n=t)=>{if(clearTimeout(s.current),n===0){c(e);return}s.current=setTimeout(()=>c(e),n)},[t,c])]}var _,v=t((()=>{_=e(n(),1),o();try{g.displayName=`useStateWithDelay`,g.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:`useStateWithDelay`,props:{}}}catch{}}));function y({hovered:e,hasHover:t=!0,lockState:n=!1,setParentStateLock:r=a}={}){let[i,o]=w.useState(!1),s=w.useRef(void 0);w.useEffect(()=>{t||(o(!1),s.current=!1,r(!1))},[t,r]);let c=w.useCallback(i=>{o(i);let a=e??C({hasState:t,isLocked:n,stateValueLocal:i});a!==s.current&&(s.current=a,r(a))},[r,t,e,n]);return{isHovered:e??C({hasState:t,isLocked:n,stateValueLocal:i}),onPointerEnter:t?e=>{e.pointerType!==`touch`&&c(!0)}:a,onPointerLeave:t?()=>{c(!1)}:a}}function b({activated:e,activeEffectDelay:t,hasActive:n=!0,lockState:r,setParentStateLock:i}){let[o,s]=g(!1,0,i),c=w.useRef(null);c.current===null&&(c.current=new Set),w.useEffect(()=>{r&&s(!1)},[r,s]);let l=()=>{r||(s(!0,T),i(!0))},u=e=>{if(c.current.has(e.pointerId)){c.current.delete(e.pointerId);return}s(!1)};return{isActivated:e??C({hasState:n,isLocked:r,stateValueLocal:o}),onPointerLeave:n?u:a,onPointerDown:n?l:a,onPointerCancel:n?u:a,onPointerUp:n?e=>{c.current.add(e.pointerId),!r&&(s(!0),s(!1,t))}:a}}function x(e){let[t,n]=w.useState(!1);return[t,e,w.useCallback(t=>{n(t),e(t)},[e])]}function S({hovered:e,hasHover:t,activated:n,hasActive:i,activeEffectDelay:o,unlockParentHover:s,hoverClassName:c,activeClassName:l}){let{lockHoverStateBubbling:u=a,lockActiveStateBubbling:f=a}=w.useContext(E),[p,m,h]=x(s?a:u),[g,_,v]=x(f),{isHovered:S,...C}=y({hasHover:t,hovered:e,lockState:p,setParentStateLock:m}),{isActivated:T,...D}=b({activated:n,hasActive:i,activeEffectDelay:o,lockState:g,setParentStateLock:_});return{stateClassName:r(S&&c,T&&l),setLockHoverBubblingImmediate:h,setLockActiveBubblingImmediate:v,...d(C,D)}}function C({hasState:e,isLocked:t,stateValueLocal:n}){return e&&!t&&n}var w,T,E,D=t((()=>{w=e(n(),1),o(),f(),v(),T=70,E=w.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});try{y.displayName=`useHover`,y.__docgenInfo={description:`Управляет наведением на компонент, игнорирует тач события.`,displayName:`useHover`,props:{lockState:{defaultValue:{value:`false`},description:`Блокирование активации состояний.`,name:`lockState`,required:!1,type:{name:`boolean`}},setParentStateLock:{defaultValue:null,description:``,name:`setParentStateLock`,required:!1,type:{name:`((v: boolean) => void)`}},hasHover:{defaultValue:{value:`true`},description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:`hasHover`,required:!1,type:{name:`boolean`}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:`hovered`,required:!1,type:{name:`boolean`}}}}}catch{}try{S.displayName=`useState`,S.__docgenInfo={description:`Управляет состоянием компонента.`,displayName:`useState`,props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:`hasHover`,required:!1,type:{name:`boolean`}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:`hovered`,required:!1,type:{name:`boolean`}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:`activated`,required:!1,type:{name:`boolean`}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:`hasActive`,required:!1,type:{name:`boolean`}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
иметь \`hovered\`-cостояние при наведении
на любой дочерний элемент.
По умолчанию состояние hovered у родителя сбрасывается.

Присваивается родителькому компоненту.
@example <Tappable hasHoverWithChildren>
  <IconButton />
  <IconButton />
  <IconButton />
</Tappable>`,name:`hasHoverWithChildren`,required:!1,type:{name:`boolean`}},unlockParentHover:{defaultValue:null,description:`Позволяет родительскому компоненту показывать hovered-состояние при наведении
на текущий дочерний компонент.

Присваивается дочернему компоненту.
@example <Tappable>
  <IconButton unlockParentHover />
  <IconButton unlockParentHover />
  <IconButton />
</Tappable>`,name:`unlockParentHover`,required:!1,type:{name:`boolean`}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:`activeEffectDelay`,required:!1,type:{name:`number`}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:`activeClassName`,required:!1,type:{name:`string`}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:`hoverClassName`,required:!1,type:{name:`string`}}}}}catch{}try{E.displayName=`ClickableLockStateContext`,E.__docgenInfo={description:``,displayName:`ClickableLockStateContext`,props:{}}}catch{}}));export{h as a,d as c,S as i,D as n,p as o,y as r,f as s,E as t};