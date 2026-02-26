import{r as n,A as L,n as i,m as V}from"./iframe-C4bTyPBQ.js";import{m as g}from"./mergeCalls-Bc-HqyI0.js";import{a as H}from"./type_checkers-B4iEhslY.js";function U(){const[u,e]=n.useState(!1),{keyboardInput:t}=n.useContext(L),a=n.useCallback(o=>{o.stopPropagation(),e(!0)},[e]),s=n.useCallback(o=>{o.stopPropagation(),e(!1)},[e]);return{focusVisible:t&&u,onFocus:a,onBlur:s}}function C(u,e=0,t=i){const[a,s]=n.useState(u),E=n.useRef(void 0),o=n.useCallback(r=>{H(r)?s(l=>{const D=r(l);return t(D),D}):(s(r),t(r))},[t]),c=n.useCallback((r,l=e)=>{if(clearTimeout(E.current),l===0){o(r);return}E.current=setTimeout(()=>o(r),l)},[e,o]);return[a,c]}try{C.displayName="useStateWithDelay",C.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:"useStateWithDelay",props:{}}}catch{}const w=600,P=70;function f({hovered:u,hasHover:e=!0,lockState:t=!1,setParentStateLock:a=i}={}){const[s,E]=n.useState(!1),o=n.useRef(void 0);n.useEffect(()=>{e||(E(!1),o.current=!1,a(!1))},[e,a]);const c=n.useCallback(p=>{E(p);const d=u??v({hasState:e,isLocked:t,stateValueLocal:p});d!==o.current&&(o.current=d,a(d))},[a,e,u,t]),r=p=>{p.pointerType!=="touch"&&c(!0)},l=()=>{c(!1)};return{isHovered:u??v({hasState:e,isLocked:t,stateValueLocal:s}),onPointerEnter:e?r:i,onPointerLeave:e?l:i}}function q({activated:u,activeEffectDelay:e,hasActive:t=!0,lockState:a,setParentStateLock:s}){const[E,o]=C(!1,0,s),c=n.useRef(null);c.current===null&&(c.current=new Set);const r=()=>{a||(o(!0,P),s(!0))},l=d=>{if(c.current.has(d.pointerId)){c.current.delete(d.pointerId);return}o(!1)},D=d=>{c.current.add(d.pointerId),!a&&(o(!0),o(!1,e))};return{isActivated:u??v({hasState:t,isLocked:a,stateValueLocal:E}),onPointerLeave:t?l:i,onPointerDown:t?r:i,onPointerCancel:t?l:i,onPointerUp:t?D:i}}const F=n.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function N(u){const[e,t]=n.useState(!1),a=n.useCallback(s=>{t(s),u(s)},[u]);return[e,u,a]}function T(u){const[e,t]=n.useState(!1),a=n.useCallback(s=>{t(s),u(s)},[u]);return[e,u,a]}function m({hovered:u,hasHover:e,activated:t,hasActive:a,activeEffectDelay:s,unlockParentHover:E,hoverClassName:o,activeClassName:c}){const{lockHoverStateBubbling:r=i,lockActiveStateBubbling:l=i}=n.useContext(F),[D,p,d]=N(E?i:r),[B,A,b]=T(l),{isHovered:h,...y}=f({hasHover:e,hovered:u,lockState:D,setParentStateLock:p}),{isActivated:S,...k}=q({activated:t,hasActive:a,activeEffectDelay:s,lockState:B,setParentStateLock:A}),_=V(h&&o,S&&c),I=g(y,k);return{stateClassName:_,setLockHoverBubblingImmediate:d,setLockActiveBubblingImmediate:b,...I}}function v({hasState:u,isLocked:e,stateValueLocal:t}){return u&&!e&&t}try{f.displayName="useHover",f.__docgenInfo={description:"Управляет наведением на компонент, игнорирует тач события.",displayName:"useHover",props:{lockState:{defaultValue:{value:"false"},description:"Блокирование активации состояний.",name:"lockState",required:!1,type:{name:"boolean"}},setParentStateLock:{defaultValue:null,description:"",name:"setParentStateLock",required:!1,type:{name:"((v: boolean) => void)"}},hasHover:{defaultValue:{value:"true"},description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="useState",m.__docgenInfo={description:"Управляет состоянием компонента.",displayName:"useState",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{F.displayName="ClickableLockStateContext",F.__docgenInfo={description:"",displayName:"ClickableLockStateContext",props:{}}}catch{}export{F as C,w as D,m as a,f as b,U as u};
