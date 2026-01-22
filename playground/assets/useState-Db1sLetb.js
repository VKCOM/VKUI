import{r as n,y as I,n as i,g as H}from"./iframe-BKqRoeRO.js";import{m as V}from"./mergeCalls-Bc-HqyI0.js";import{a as g}from"./type_checkers-CVMjkZjG.js";function U(){const[u,e]=n.useState(!1),{keyboardInput:t}=n.useContext(I),r=n.useCallback(o=>{o.stopPropagation(),e(!0)},[e]),a=n.useCallback(o=>{o.stopPropagation(),e(!1)},[e]);return{focusVisible:t&&u,onFocus:r,onBlur:a}}function C(u,e=0,t=i){const[r,a]=n.useState(u),d=n.useRef(void 0),o=n.useCallback(s=>{g(s)?a(l=>{const D=s(l);return t(D),D}):(a(s),t(s))},[t]),c=n.useCallback((s,l=e)=>{if(clearTimeout(d.current),l===0){o(s);return}d.current=setTimeout(()=>o(s),l)},[e,o]);return[r,c]}try{C.displayName="useStateWithDelay",C.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:"useStateWithDelay",props:{}}}catch{}const w=600,P=70;function F({hovered:u,hasHover:e=!0,lockState:t=!1,setParentStateLock:r=i}={}){const[a,d]=n.useState(!1),o=n.useRef(void 0),c=n.useCallback(p=>{d(p);const E=u??v({hasState:e,isLocked:t,stateValueLocal:p});E!==o.current&&(o.current=E,r(E))},[r,e,u,t]),s=p=>{p.pointerType!=="touch"&&c(!0)},l=()=>{c(!1)};return{isHovered:u??v({hasState:e,isLocked:t,stateValueLocal:a}),onPointerEnter:e?s:i,onPointerLeave:e?l:i}}function q({activated:u,activeEffectDelay:e,hasActive:t=!0,lockState:r,setParentStateLock:a}){const[d,o]=C(!1,0,a),c=n.useRef(null);c.current===null&&(c.current=new Set);const s=()=>{r||(o(!0,P),a(!0))},l=E=>{if(c.current.has(E.pointerId)){c.current.delete(E.pointerId);return}o(!1)},D=E=>{c.current.add(E.pointerId),!r&&(o(!0),o(!1,e))};return{isActivated:u??v({hasState:t,isLocked:r,stateValueLocal:d}),onPointerLeave:t?l:i,onPointerDown:t?s:i,onPointerCancel:t?l:i,onPointerUp:t?D:i}}const f=n.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function N(u){const[e,t]=n.useState(!1),r=n.useCallback(a=>{t(a),u(a)},[u]);return[e,u,r]}function T(u){const[e,t]=n.useState(!1),r=n.useCallback(a=>{t(a),u(a)},[u]);return[e,u,r]}function m({hovered:u,hasHover:e,activated:t,hasActive:r,activeEffectDelay:a,unlockParentHover:d,hoverClassName:o,activeClassName:c}){const{lockHoverStateBubbling:s=i,lockActiveStateBubbling:l=i}=n.useContext(f),[D,p,E]=N(d?i:s),[B,A,b]=T(l),{isHovered:h,...S}=F({hasHover:e,hovered:u,lockState:D,setParentStateLock:p}),{isActivated:k,...y}=q({activated:t,hasActive:r,activeEffectDelay:a,lockState:B,setParentStateLock:A}),_=H(h&&o,k&&c),L=V(S,y);return{stateClassName:_,setLockHoverBubblingImmediate:E,setLockActiveBubblingImmediate:b,...L}}function v({hasState:u,isLocked:e,stateValueLocal:t}){return u&&!e&&t}try{F.displayName="useHover",F.__docgenInfo={description:"Управляет наведением на компонент, игнорирует тач события.",displayName:"useHover",props:{lockState:{defaultValue:{value:"false"},description:"Блокирование активации состояний.",name:"lockState",required:!1,type:{name:"boolean"}},setParentStateLock:{defaultValue:null,description:"",name:"setParentStateLock",required:!1,type:{name:"((v: boolean) => void)"}},hasHover:{defaultValue:{value:"true"},description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="useState",m.__docgenInfo={description:"Управляет состоянием компонента.",displayName:"useState",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{f.displayName="ClickableLockStateContext",f.__docgenInfo={description:"",displayName:"ClickableLockStateContext",props:{}}}catch{}export{f as C,w as D,F as a,m as b,U as u};
