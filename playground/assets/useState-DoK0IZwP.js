import{r as n,v as L,n as l,h as H}from"./iframe-DhuutAfC.js";import{m as V}from"./mergeCalls-Bc-HqyI0.js";import{a as g}from"./type_checkers-CVMjkZjG.js";function U(){const[u,e]=n.useState(!1),{keyboardInput:t}=n.useContext(L),a=n.useCallback(o=>{o.stopPropagation(),e(!0)},[e]),s=n.useCallback(o=>{o.stopPropagation(),e(!1)},[e]);return{focusVisible:t&&u,onFocus:a,onBlur:s}}function C(u,e=0,t=l){const[a,s]=n.useState(u),d=n.useRef(void 0),o=n.useCallback(r=>{g(r)?s(c=>{const D=r(c);return t(D),D}):(s(r),t(r))},[t]),i=n.useCallback((r,c=e)=>{if(clearTimeout(d.current),c===0){o(r);return}d.current=setTimeout(()=>o(r),c)},[e,o]);return[a,i]}try{C.displayName="useStateWithDelay",C.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:"useStateWithDelay",props:{}}}catch{}const w=600,P=70;function F({hovered:u,hasHover:e=!0,lockState:t=!1,setParentStateLock:a=l}={}){const[s,d]=n.useState(!1),o=n.useRef(void 0),i=n.useCallback(p=>{d(p);const E=u??f({hasState:e,isLocked:t,stateValueLocal:p});E!==o.current&&(o.current=E,a(E))},[a,e,u,t]),r=p=>{p.pointerType!=="touch"&&i(!0)},c=()=>{i(!1)};return{isHovered:u??f({hasState:e,isLocked:t,stateValueLocal:s}),onPointerEnter:e?r:l,onPointerLeave:e?c:l}}function q({activated:u,activeEffectDelay:e,hasActive:t=!0,lockStateRef:a,setParentStateLock:s}){const[d,o]=C(!1,0,s),i=n.useMemo(()=>new Set,[]),r=()=>{a.current||(o(!0,P),s(!0))},c=E=>{if(i.has(E.pointerId)){i.delete(E.pointerId);return}o(!1)},D=E=>{i.add(E.pointerId),!a.current&&(o(!0),o(!1,e))};return{isActivated:u??f({hasState:t,isLocked:a.current,stateValueLocal:d}),onPointerLeave:t?c:l,onPointerDown:t?r:l,onPointerCancel:t?c:l,onPointerUp:t?D:l}}const v=n.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function N(u){const[e,t]=n.useState(!1),a=n.useCallback(s=>{t(s),u(s)},[u]);return[e,u,a]}function T(u){const e=n.useRef(!1),t=n.useCallback(a=>{e.current=a,u(a)},[u]);return[e,u,t]}function m({hovered:u,hasHover:e,activated:t,hasActive:a,activeEffectDelay:s,unlockParentHover:d,hoverClassName:o,activeClassName:i}){const{lockHoverStateBubbling:r=l,lockActiveStateBubbling:c=l}=n.useContext(v),[D,p,E]=N(d?l:r),[B,A,b]=T(c),{isHovered:h,...k}=F({hasHover:e,hovered:u,lockState:D,setParentStateLock:p}),{isActivated:y,...S}=q({activated:t,hasActive:a,activeEffectDelay:s,lockStateRef:B,setParentStateLock:A}),_=H(h&&o,y&&i),I=V(k,S);return{stateClassName:_,setLockHoverBubblingImmediate:E,setLockActiveBubblingImmediate:b,...I}}function f({hasState:u,isLocked:e,stateValueLocal:t}){return u&&!e&&t}try{F.displayName="useHover",F.__docgenInfo={description:"Управляет наведением на компонент, игнорирует тач события.",displayName:"useHover",props:{lockState:{defaultValue:{value:"false"},description:"Блокирование активации состояний.",name:"lockState",required:!1,type:{name:"boolean"}},setParentStateLock:{defaultValue:null,description:"",name:"setParentStateLock",required:!1,type:{name:"((v: boolean) => void)"}},hasHover:{defaultValue:{value:"true"},description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="useState",m.__docgenInfo={description:"Управляет состоянием компонента.",displayName:"useState",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="ClickableLockStateContext",v.__docgenInfo={description:"",displayName:"ClickableLockStateContext",props:{}}}catch{}export{v as C,w as D,F as a,m as b,U as u};
