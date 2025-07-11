import{r as l,t as Y,i as B,n as C,aI as $,j as m,R as T}from"./iframe-DDos8QSD.js";import{m as R}from"./mergeCalls-Bc-HqyI0.js";import{a as G}from"./type_checkers-CVMjkZjG.js";const f={"-focus-visible":"_-focus-visible_1xi0z_5","-focus-visible--mode-outside":"_-focus-visible--mode-outside_1xi0z_18","-focus-visible--mode-inside":"_-focus-visible--mode-inside_1xi0z_23","-focus-visible--focused":"_-focus-visible--focused_1xi0z_28"};function J(){const[u,e]=l.useState(!1),{keyboardInput:n}=l.useContext(Y),t=l.useCallback(o=>{o.stopPropagation(),e(!0)},[e]),a=l.useCallback(o=>{o.stopPropagation(),e(!1)},[e]);return{focusVisible:n&&u,onFocus:t,onBlur:a}}const O={inside:f["-focus-visible--mode-inside"],outside:f["-focus-visible--mode-outside"]},Q=u=>u==="inside"||u==="outside";function X({focusVisible:u=!1,mode:e="inside"}){const n=Q(e)?O[e]:e;return B(f["-focus-visible"],u&&f["-focus-visible--focused"],u&&n)}function _(u,e=0,n=C){const[t,a]=l.useState(u),s=l.useRef(void 0),o=l.useCallback(i=>{G(i)?a(c=>{const d=i(c);return n(d),d}):(a(i),n(i))},[n]),r=l.useCallback((i,c=e)=>{if(clearTimeout(s.current),c===0){o(i);return}s.current=setTimeout(()=>o(i),c)},[e,o]);return[t,r]}try{_.displayName="useStateWithDelay",_.__docgenInfo={description:`Возвращает значение с состоянием и функции на обновление состояния
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
\`\`\``,displayName:"useStateWithDelay",props:{}}}catch{}const Z=600,u4=70;function e4({hovered:u,hasHover:e=!0,lockState:n,setParentStateLock:t}){const[a,s]=l.useState(!1),o=l.useRef(void 0),r=l.useCallback(D=>{s(D);const E=u??S({hasState:e,isLocked:n,stateValueLocal:D});E!==o.current&&(o.current=E,t(E))},[t,e,u,n]),i=D=>{D.pointerType!=="touch"&&r(!0)},c=()=>{r(!1)};return{isHovered:u??S({hasState:e,isLocked:n,stateValueLocal:a}),onPointerEnter:e?i:C,onPointerLeave:e?c:C}}function n4({activated:u,activeEffectDelay:e,hasActive:n=!0,lockStateRef:t,setParentStateLock:a}){const[s,o]=_(!1,0,a),r=l.useMemo(()=>new Set,[]),i=()=>{t.current||(o(!0,u4),a(!0))},c=E=>{if(r.has(E.pointerId)){r.delete(E.pointerId);return}o(!1)},d=E=>{r.add(E.pointerId),!t.current&&(o(!0),o(!1,e))};return{isActivated:u??S({hasState:n,isLocked:t.current,stateValueLocal:s}),onPointerLeave:n?c:C,onPointerDown:n?i:C,onPointerCancel:n?c:C,onPointerUp:n?d:C}}const v=l.createContext({lockHoverStateBubbling:void 0,lockActiveStateBubbling:void 0});function t4(u){const[e,n]=l.useState(!1),t=l.useCallback(a=>{n(a),u(a)},[u]);return[e,u,t]}function a4(u){const e=l.useRef(!1),n=l.useCallback(t=>{e.current=t,u(t)},[u]);return[e,u,n]}function q({hovered:u,hasHover:e,activated:n,hasActive:t,activeEffectDelay:a,unlockParentHover:s,hoverClassName:o,activeClassName:r}){const{lockHoverStateBubbling:i=C,lockActiveStateBubbling:c=C}=l.useContext(v),[d,D,E]=t4(s?C:i),[F,p,b]=a4(c),{isHovered:A,...y}=e4({hasHover:e,hovered:u,lockState:d,setParentStateLock:D}),{isActivated:h,...k}=n4({activated:n,hasActive:t,activeEffectDelay:a,lockStateRef:F,setParentStateLock:p}),H=B(A&&o,h&&r),V=R(y,k);return{stateClassName:H,setLockHoverBubblingImmediate:E,setLockActiveBubblingImmediate:b,...V}}function S({hasState:u,isLocked:e,stateValueLocal:n}){return u&&!e&&n}try{q.displayName="useState",q.__docgenInfo={description:"Управляет состоянием компонента.",displayName:"useState",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="ClickableLockStateContext",v.__docgenInfo={description:"",displayName:"ClickableLockStateContext",props:{}}}catch{}const o4="_realClickable_1xxg1_1",l4="_host_1xxg1_20",L={realClickable:o4,host:l4},I=({baseClassName:u,children:e,focusVisibleMode:n="inside",activeClassName:t,hoverClassName:a,activeEffectDelay:s=Z,hasHover:o=!0,hasActive:r=!0,hovered:i,activated:c,hasHoverWithChildren:d,unlockParentHover:D,onPointerEnter:E,onPointerLeave:F,onPointerDown:p,onPointerCancel:b,onPointerUp:A,onBlur:y,onFocus:h,onKeyDown:k,DefaultComponent:H,...V})=>{const{focusVisible:W,...M}=J(),j=X({focusVisible:W,mode:n}),{stateClassName:z,setLockHoverBubblingImmediate:g,setLockActiveBubblingImmediate:P,...U}=q({activeClassName:t,hoverClassName:a,activeEffectDelay:s,hasHover:o,hasActive:r,hovered:i,activated:c,unlockParentHover:D}),w=R(M,U,{onKeyDown:$},{onPointerEnter:E,onPointerLeave:F,onPointerDown:p,onPointerCancel:b,onPointerUp:A,onBlur:y,onFocus:h,onKeyDown:k}),K=l.useMemo(()=>({lockHoverStateBubbling:d?C:g,lockActiveStateBubbling:P}),[g,P,d]);return m.jsx(T,{baseClassName:B(u,L.realClickable,j,z),...w,...V,children:m.jsx(v.Provider,{value:K,children:e})})};try{I.displayName="RealClickable",I.__docgenInfo={description:"Кликабельный компонент. Добавляем кучу обвесов.",displayName:"RealClickable",props:{DefaultComponent:{defaultValue:null,description:'Компонент который будет при передаче `onClick`. По умолчанию `"div"`.',name:"DefaultComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:{value:"inside"},description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:{value:"true"},description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:{value:"true"},description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:{value:"600"},description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}const s4=({href:u,onClick:e,onClickCapture:n,activeClassName:t,hoverClassName:a,hasActive:s,hasHover:o,hovered:r,unlockParentHover:i,activated:c,activeEffectDelay:d,focusVisibleMode:D,DefaultComponent:E,Component:F,...p})=>m.jsx(T,{Component:F||E,...p});function N(u){return(u.href!==void 0||u.onClick!==void 0||u.onClickCapture!==void 0||u.Component==="a"||u.Component==="button"||u.Component==="label"||u.Component==="input")&&!u.disabled}function i4({Component:u,DefaultComponent:e="div",onClick:n,onClickCapture:t,href:a,disabled:s}){return u!==void 0?{Component:u,disabled:s}:a!==void 0?{Component:"a",...s&&{"aria-disabled":!0,role:"link"}}:n!==void 0||t!==void 0?{Component:e,role:"button",...s?{"aria-disabled":!0}:{tabIndex:0}}:{}}const x=u=>{const e=i4(u),t=N(u)?I:s4,{baseClassName:a,disabled:s,Component:o,...r}=u;return m.jsx(t,{baseClassName:B(a,L.host),...e,...r})};try{N.displayName="checkClickable",N.__docgenInfo={description:"Проверяем, является ли компонент кликабельным.",displayName:"checkClickable",props:{DefaultComponent:{defaultValue:null,description:'Компонент который будет при передаче `onClick`. По умолчанию `"div"`.',name:"DefaultComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}try{x.displayName="Clickable",x.__docgenInfo={description:'Базовый кликабельный корневой компонент.\n\n- при передаче `href` превратится в `a`,\n- при передаче `onClick` превратится в `div` c `role="button"` и `tabIndex="0"`.\n- иначе используется `div`.\n\nОтвечает за:\n\n- стейты наведения и нажатия\n- a11y компонентов.',displayName:"Clickable",props:{DefaultComponent:{defaultValue:null,description:'Компонент который будет при передаче `onClick`. По умолчанию `"div"`.',name:"DefaultComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `className`.",name:"baseClassName",required:!1,type:{name:"string | false"}},baseStyle:{defaultValue:null,description:"@deprecated Since 7.3.0.\n\nСвойство устарело и будет удалено в `v8`, используйте свойство `style`.",name:"baseStyle",required:!1,type:{name:"CSSProperties"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `hover`-состояние.",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять `hovered`-состоянием извне.",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять `activated`-состоянием извне.",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на `active`-состояние.",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:`Позволяет родительскому компоненту
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
</Tappable>`,name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `active`-состояния.",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки `active`-состояния.",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки `hover`-состояния.",name:"hoverClassName",required:!1,type:{name:"string"}}}}}catch{}export{x as C,Z as D,X as a,N as c,J as u};
