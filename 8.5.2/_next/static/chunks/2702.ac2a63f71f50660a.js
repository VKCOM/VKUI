"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2702],{22702:(e,t,o)=>{o.r(t),o.d(t,{openInCodeSandbox:()=>n});var a=o(37246);let r=`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
    />
    <title>VKUI Playground</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,i=`import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </ConfigProvider>
  </React.StrictMode>,
);
`;async function n(e){let{compressToBase64:t}=await o.e(6695).then(o.t.bind(o,86695,23)),n={"public/index.html":r,"tsconfig.json":a.ap,"src/index.tsx":i,"src/App.tsx":(0,a.kb)(e)},l={"package.json":{content:{name:"vkui-playground-codesandbox",private:!0,main:"src/index.tsx",scripts:{start:"react-scripts start",build:"react-scripts build"},dependencies:{react:"^19.0.0","react-dom":"^19.0.0","react-scripts":"^5.0.1","@vkontakte/vkui":`^${a.H6}`,"@vkontakte/icons":"^3.0.0",typescript:"^5.7.0","@types/react":"^19.0.0","@types/react-dom":"^19.0.0"}}}};for(let[e,t]of Object.entries(n))l[e]={content:t};let s=t(JSON.stringify({files:l,template:"create-react-app-typescript"})).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),p=document.createElement("form");p.method="POST",p.action="https://codesandbox.io/api/v1/sandboxes/define",p.target="_blank";let d=document.createElement("input");d.type="hidden",d.name="parameters",d.value=s,p.appendChild(d),document.body.appendChild(p),p.submit(),document.body.removeChild(p)}},37246:(e,t,o)=>{o.d(t,{ap:()=>d,H6:()=>i,kb:()=>p});var a=o(86839);let r=JSON.parse('["Accordion","ActionSheet","ActionSheetDefaultIosCloseItem","ActionSheetItem","AdaptiveIconRenderer","AdaptivityProvider","Alert","AppRoot","AspectRatio","Avatar","Badge","Banner","Box","Button","ButtonGroup","Calendar","CalendarRange","Caption","Card","CardGrid","CardScroll","Cell","CellButton","CellButtonGroup","Checkbox","Chip","ChipsInput","ChipsSelect","ColorSchemeProvider","ConfigProvider","ContentBadge","ContentCard","Counter","CustomScrollView","CustomSelect","CustomSelectOption","DateInput","DateRangeInput","DirectionProvider","DisplayTitle","Div","DropZone","EllipsisText","Epic","ExpressiveSpinner","File","FixedLayout","Flex","FloatingArrow","FocusTrap","Footer","Footnote","FormField","FormItem","FormLayoutGroup","FormStatus","Gallery","Gradient","GridAvatar","Group","Header","Headline","HorizontalCell","HorizontalCellShowMore","HorizontalScroll","IconButton","Image","ImageBase","InfoRow","Input","Link","List","LocaleProvider","Mark","MiniInfoCell","ModalCard","ModalCardBase","ModalDismissButton","ModalOutsideButton","ModalPage","ModalPageHeader","ModalRoot","NativeSelect","OnboardingTooltip","Pagination","Panel","PanelHeader","PanelHeaderBack","PanelHeaderButton","PanelHeaderClose","PanelHeaderContent","PanelHeaderContext","PanelHeaderEdit","PanelHeaderSubmit","PanelSpinner","Paragraph","Placeholder","PlatformProvider","PopoutWrapper","Popover","Popper","Progress","PullToRefresh","Radio","RadioGroup","RichCell","Root","ScreenSpinner","ScrollArrow","Search","SegmentedControl","Select","SelectionControl","SelectMimicry","Separator","SimpleCell","SimpleGrid","Skeleton","Slider","Snackbar","Spacing","Spinner","SplitCol","SplitLayout","Subhead","SubnavigationBar","SubnavigationButton","Switch","Tabbar","TabbarItem","Tabs","TabsItem","Tappable","Text","Textarea","Title","ToolButton","Tooltip","Touch","UnstyledTextField","useAdaptivityConditionalRender","useAdaptivityWithJSMediaQueries","useCustomScrollViewTint","useFocusVisible","useModalManager","usePagination","usePatchChildren","usePlatform","usePopover","useReducedMotion","UsersStack","useScroll","useScrollLock","useSnackbarManager","useTodayDate","useTooltip","View","VisuallyHidden","WriteBar","WriteBarIcon"]'),i=a.rE,n=new Set(["useState","useEffect","useCallback","useMemo","useRef","useContext","useReducer","useLayoutEffect","useTransition","useDeferredValue","useImperativeHandle","useDebugValue","useSyncExternalStore","useInsertionEffect","useId"]),l=new Set(r),s=new Set(["React","Fragment","App","StrictMode"]);function p(e){let t,o=e.replace(/import[\s\S]*?;/g,"").trim(),{vkui:a,icons:r,reactHooks:i}=function(e){let t=new Set([...[...e.matchAll(/(?<!\.)(?<!')(?<!")\b([A-Z][a-zA-Z0-9]*)\b/g)].map(e=>e[1]),...[...e.matchAll(/(?<!\.)(?<!')(?<!")\b(use[A-Z][a-zA-Z0-9]*)\b/g)].map(e=>e[1])].filter(e=>!s.has(e))),o=[],a=[],r=[];for(let e of t)n.has(e)?r.push(e):/^Icon\d+/.test(e)?a.push(e):l.has(e)&&o.push(e);return{vkui:o.sort(),icons:a.sort(),reactHooks:r.sort()}}(o),p=[];if(p.push("import * as React from 'react';"),i.length>0&&p.push(`import { ${i.join(", ")} } from 'react';`),a.length>0&&p.push(`import { ${a.join(", ")} } from '@vkontakte/vkui';`),r.length>0&&p.push(`import { ${r.join(", ")} } from '@vkontakte/icons';`),o.startsWith("<")){let e=o.split("\n").map(e=>`      ${e}`).join("\n");t=`  return (
    <>
${e}
    </>
  );`}else t=o.split("\n").map(e=>`  ${e}`).join("\n");return`${p.join("\n")}

export function App() {
${t}
}
`}let d=JSON.stringify({compilerOptions:{target:"ES2020",useDefineForClassFields:!0,lib:["ES2020","DOM","DOM.Iterable"],module:"ESNext",skipLibCheck:!0,moduleResolution:"node",esModuleInterop:!0,allowSyntheticDefaultImports:!0,isolatedModules:!0,noEmit:!0,jsx:"react-jsx",strict:!0},include:["src"]},null,2)}}]);