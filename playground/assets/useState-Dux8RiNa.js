import{r as o,A as V,n as i,m as g}from"./iframe-OAvG3iJ-.js";import{m as H}from"./mergeCalls-Bc-HqyI0.js";import{a as P}from"./type_checkers-CVMjkZjG.js";function R(){const[e,u]=o.useState(!1),{keyboardInput:t}=o.useContext(V),a=o.useCallback(n=>{n.stopPropagation(),u(!0)},[u]),r=o.useCallback(n=>{n.stopPropagation(),u(!1)},[u]);return{focusVisible:t&&e,onFocus:a,onBlur:r}}function C(e,u=0,t=i){const[a,r]=o.useState(e),E=o.useRef(void 0),n=o.useCallback(s=>{P(s)?r(l=>{const D=s(l);return t(D),D}):(r(s),t(s))},[t]),c=o.useCallback((s,l=u)=>{if(clearTimeout(E.current),l===0){n(s);return}E.current=setTimeout(()=>n(s),l)},[u,n]);return[a,c]}try{C.displayName="useStateWithDelay",C.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:"useStateWithDelay",props:{}}}catch{}const U=600,q=70;function f({hovered:e,hasHover:u=!0,lockState:t=!1,setParentStateLock:a=i}={}){const[r,E]=o.useState(!1),n=o.useRef(void 0);o.useEffect(()=>{u||(E(!1),n.current=!1,a(!1))},[u,a]);const c=o.useCallback(p=>{E(p);const d=e??v({hasState:u,isLocked:t,stateValueLocal:p});d!==n.current&&(n.current=d,a(d))},[a,u,e,t]),s=p=>{p.pointerType!=="touch"&&c(!0)},l=()=>{c(!1)};return{isHovered:e??v({hasState:u,isLocked:t,stateValueLocal:r}),onPointerEnter:u?s:i,onPointerLeave:u?l:i}}function N({activated:e,activeEffectDelay:u,hasActive:t=!0,lockState:a,setParentStateLock:r}){const[E,n]=C(!1,0,r),c=o.useRef(null);c.current===null&&(c.current=new Set),o.useEffect(()=>{a&&n(!1)},[a,n]);const s=()=>{a||(n(!0,q),r(!0))},l=d=>{if(c.current.has(d.pointerId)){c.current.delete(d.pointerId);return}n(!1)},D=d=>{c.current.add(d.pointerId),!a&&(n(!0),n(!1,u))};return{isActivated:e??v({hasState:t,isLocked:a,stateValueLocal:E}),onPointerLeave:t?l:i,onPointerDown:t?s:i,onPointerCancel:t?l:i,onPointerUp:t?D:i}}const F=o.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function m(e){const[u,t]=o.useState(!1),a=o.useCallback(r=>{t(r),e(r)},[e]);return[u,e,a]}function B({hovered:e,hasHover:u,activated:t,hasActive:a,activeEffectDelay:r,unlockParentHover:E,hoverClassName:n,activeClassName:c}){const{lockHoverStateBubbling:s=i,lockActiveStateBubbling:l=i}=o.useContext(F),[D,p,d]=m(E?i:s),[A,b,h]=m(l),{isHovered:y,..._}=f({hasHover:u,hovered:e,lockState:D,setParentStateLock:p}),{isActivated:S,...k}=N({activated:t,hasActive:a,activeEffectDelay:r,lockState:A,setParentStateLock:b}),I=g(y&&n,S&&c),L=H(_,k);return{stateClassName:I,setLockHoverBubblingImmediate:d,setLockActiveBubblingImmediate:h,...L}}function v({hasState:e,isLocked:u,stateValueLocal:t}){return e&&!u&&t}try{f.displayName="useHover",f.__docgenInfo={description:"Управляет наведением на компонент, игнорирует тач события.",displayName:"useHover",props:{lockState:{defaultValue:{value:"false"},description:"Блокирование активации состояний.",name:"lockState",required:!1,type:{name:"boolean"}},setParentStateLock:{defaultValue:null,description:"",name:"setParentStateLock",required:!1,type:{name:"((v: boolean) => void)"}},hasHover:{defaultValue:{value:"true"},description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}}}}}catch{}try{B.displayName="useState",B.__docgenInfo={description:"Управляет состоянием компонента.",displayName:"useState",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{F.displayName="ClickableLockStateContext",F.__docgenInfo={description:"",displayName:"ClickableLockStateContext",props:{}}}catch{}export{F as C,U as D,B as a,f as b,R as u};
