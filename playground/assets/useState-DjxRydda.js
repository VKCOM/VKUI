import{a as e,n as t}from"./chunk-BneVvdWh.js";import{ba as n,co as r,lo as i,no as a,ps as o,so as s,xa as c}from"./iframe-lhb8_BzR.js";import{n as l,t as u}from"./callMultiple-DqSekQgd.js";function d(...e){let t=e.reduce((e,t)=>(Object.entries(t).forEach(([t,n])=>{e.hasOwnProperty(t)||(e[t]=[]),e[t].push(n)}),e),{});return Object.entries(t).reduce((e,[t,n])=>(e[t]=u(...n),e),{})}var f=t((()=>{l()}));function p(){let[e,t]=(0,m.useState)(!1),{keyboardInput:r}=(0,m.useContext)(n),i=(0,m.useCallback)(e=>{e.stopPropagation(),t(!0)},[t]),a=(0,m.useCallback)(e=>{e.stopPropagation(),t(!1)},[t]);return{focusVisible:r&&e,onFocus:i,onBlur:a}}var m,h=t((()=>{m=e(o(),1),c()}));function g(e,t=0,n=r){let[i,a]=_.useState(e),o=_.useRef(void 0),c=_.useCallback(e=>{s(e)?a(t=>{let r=e(t);return n(r),r}):(a(e),n(e))},[n]);return[i,_.useCallback((e,n=t)=>{if(clearTimeout(o.current),n===0){c(e);return}o.current=setTimeout(()=>c(e),n)},[t,c])]}var _,v=t((()=>{_=e(o(),1),a();try{g.displayName=`useStateWithDelay`,g.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:`useStateWithDelay`,props:{}}}catch{}}));function y({hovered:e,hasHover:t=!0,lockState:n=!1,setParentStateLock:i=r}={}){let[a,o]=w.useState(!1),s=w.useRef(void 0);w.useEffect(()=>{t||(o(!1),s.current=!1,i(!1))},[t,i]);let c=w.useCallback(r=>{o(r);let a=e??C({hasState:t,isLocked:n,stateValueLocal:r});a!==s.current&&(s.current=a,i(a))},[i,t,e,n]);return{isHovered:e??C({hasState:t,isLocked:n,stateValueLocal:a}),onPointerEnter:t?e=>{e.pointerType!==`touch`&&c(!0)}:r,onPointerLeave:t?()=>{c(!1)}:r}}function b({activated:e,activeEffectDelay:t,hasActive:n=!0,lockState:i,setParentStateLock:a}){let[o,s]=g(!1,0,a),c=w.useRef(null);c.current===null&&(c.current=new Set),w.useEffect(()=>{(i||!n)&&s(!1)},[i,n,s]);let l=()=>{i||(s(!0,T),a(!0))},u=e=>{if(c.current.has(e.pointerId)){c.current.delete(e.pointerId);return}s(!1)};return{isActivated:e??C({hasState:n,isLocked:i,stateValueLocal:o}),onPointerLeave:n?u:r,onPointerDown:n?l:r,onPointerCancel:n?u:r,onPointerUp:n?e=>{c.current.add(e.pointerId),!i&&(s(!0),s(!1,t))}:r}}function x(e){let[t,n]=w.useState(!1);return[t,e,w.useCallback(t=>{n(t),e(t)},[e])]}function S({hovered:e,hasHover:t,activated:n,hasActive:a,activeEffectDelay:o,unlockParentHover:s,hoverClassName:c,activeClassName:l}){let{lockHoverStateBubbling:u=r,lockActiveStateBubbling:f=r}=w.useContext(E),[p,m,h]=x(s?r:u),[g,_,v]=x(f),{isHovered:S,...C}=y({hasHover:t,hovered:e,lockState:p,setParentStateLock:m}),{isActivated:T,...D}=b({activated:n,hasActive:a,activeEffectDelay:o,lockState:g,setParentStateLock:_});return{stateClassName:i(S&&c,T&&l),setLockHoverBubblingImmediate:h,setLockActiveBubblingImmediate:v,...d(C,D)}}function C({hasState:e,isLocked:t,stateValueLocal:n}){return e&&!t&&n}var w,T,E,D=t((()=>{w=e(o(),1),a(),f(),v(),T=70,E=w.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});try{y.displayName=`useHover`,y.__docgenInfo={description:`Управляет наведением на компонент, игнорирует тач события.`,displayName:`useHover`,props:{lockState:{defaultValue:{value:`false`},description:`Блокирование активации состояний.`,name:`lockState`,required:!1,type:{name:`boolean`}},setParentStateLock:{defaultValue:null,description:``,name:`setParentStateLock`,required:!1,type:{name:`((v: boolean) => void)`}},hasHover:{defaultValue:{value:`true`},description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:`hasHover`,required:!1,type:{name:`boolean`}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:`hovered`,required:!1,type:{name:`boolean`}}}}}catch{}try{S.displayName=`useState`,S.__docgenInfo={description:`Управляет состоянием компонента.`,displayName:`useState`,props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:`hasHover`,required:!1,type:{name:`boolean`}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:`hovered`,required:!1,type:{name:`boolean`}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:`activated`,required:!1,type:{name:`boolean`}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:`hasActive`,required:!1,type:{name:`boolean`}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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