"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7301],{37246:(e,t,o)=>{o.d(t,{ap:()=>d,H6:()=>a,kb:()=>p});var i=o(86839);let r=JSON.parse('["Accordion","ActionSheet","ActionSheetDefaultIosCloseItem","ActionSheetItem","AdaptiveIconRenderer","AdaptivityProvider","Alert","AppRoot","AspectRatio","Avatar","Badge","Banner","Box","Button","ButtonGroup","Calendar","CalendarRange","Caption","Card","CardGrid","CardScroll","Cell","CellButton","CellButtonGroup","Checkbox","Chip","ChipsInput","ChipsSelect","ColorSchemeProvider","ConfigProvider","ContentBadge","ContentCard","Counter","CustomScrollView","CustomSelect","CustomSelectOption","DateInput","DateRangeInput","DirectionProvider","DisplayTitle","Div","DropZone","EllipsisText","Epic","ExpressiveSpinner","File","FixedLayout","Flex","FloatingArrow","FocusTrap","Footer","Footnote","FormField","FormItem","FormLayoutGroup","FormStatus","Gallery","Gradient","GridAvatar","Group","Header","Headline","HorizontalCell","HorizontalCellShowMore","HorizontalScroll","IconButton","Image","ImageBase","InfoRow","Input","Link","List","LocaleProvider","Mark","MiniInfoCell","ModalCard","ModalCardBase","ModalDismissButton","ModalOutsideButton","ModalPage","ModalPageHeader","ModalRoot","NativeSelect","OnboardingTooltip","Pagination","Panel","PanelHeader","PanelHeaderBack","PanelHeaderButton","PanelHeaderClose","PanelHeaderContent","PanelHeaderContext","PanelHeaderEdit","PanelHeaderSubmit","PanelSpinner","Paragraph","Placeholder","PlatformProvider","PopoutWrapper","Popover","Popper","Progress","PullToRefresh","Radio","RadioGroup","RichCell","Root","ScreenSpinner","ScrollArrow","Search","SegmentedControl","Select","SelectionControl","SelectMimicry","Separator","SimpleCell","SimpleGrid","Skeleton","Slider","Snackbar","Spacing","Spinner","SplitCol","SplitLayout","Subhead","SubnavigationBar","SubnavigationButton","Switch","Tabbar","TabbarItem","Tabs","TabsItem","Tappable","Text","Textarea","Title","ToolButton","Tooltip","Touch","UnstyledTextField","useAdaptivityConditionalRender","useAdaptivityWithJSMediaQueries","useCustomScrollViewTint","useFocusVisible","useModalManager","usePagination","usePatchChildren","usePlatform","usePopover","useReducedMotion","UsersStack","useScroll","useScrollLock","useSnackbarManager","useTodayDate","useTooltip","View","VisuallyHidden","WriteBar","WriteBarIcon"]'),a=i.rE,n=new Set(["useState","useEffect","useCallback","useMemo","useRef","useContext","useReducer","useLayoutEffect","useTransition","useDeferredValue","useImperativeHandle","useDebugValue","useSyncExternalStore","useInsertionEffect","useId"]),l=new Set(r),s=new Set(["React","Fragment","App","StrictMode"]);function p(e){let t,o=e.replace(/import[\s\S]*?;/g,"").trim(),{vkui:i,icons:r,reactHooks:a}=function(e){let t=new Set([...[...e.matchAll(/(?<!\.)(?<!')(?<!")\b([A-Z][a-zA-Z0-9]*)\b/g)].map(e=>e[1]),...[...e.matchAll(/(?<!\.)(?<!')(?<!")\b(use[A-Z][a-zA-Z0-9]*)\b/g)].map(e=>e[1])].filter(e=>!s.has(e))),o=[],i=[],r=[];for(let e of t)n.has(e)?r.push(e):/^Icon\d+/.test(e)?i.push(e):l.has(e)&&o.push(e);return{vkui:o.sort(),icons:i.sort(),reactHooks:r.sort()}}(o),p=[];if(p.push("import * as React from 'react';"),a.length>0&&p.push(`import { ${a.join(", ")} } from 'react';`),i.length>0&&p.push(`import { ${i.join(", ")} } from '@vkontakte/vkui';`),r.length>0&&p.push(`import { ${r.join(", ")} } from '@vkontakte/icons';`),o.startsWith("<")){let e=o.split("\n").map(e=>`      ${e}`).join("\n");t=`  return (
    <>
${e}
    </>
  );`}else t=o.split("\n").map(e=>`  ${e}`).join("\n");return`${p.join("\n")}

export function App() {
${t}
}
`}let d=JSON.stringify({compilerOptions:{target:"ES2020",useDefineForClassFields:!0,lib:["ES2020","DOM","DOM.Iterable"],module:"ESNext",skipLibCheck:!0,moduleResolution:"node",esModuleInterop:!0,allowSyntheticDefaultImports:!0,isolatedModules:!0,noEmit:!0,jsx:"react-jsx",strict:!0},include:["src"]},null,2)},47301:(e,t,o)=>{o.r(t),o.d(t,{openInStackBlitz:()=>l});var i=o(37246);let r=`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
    />
    <title>VKUI Playground</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,a=`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </ConfigProvider>
  </StrictMode>,
);
`,n=`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: /^@vkontakte\\/vkui$/, replacement: '@vkontakte/vkui/dist/cssm' }],
  },
});
`;async function l(e){(await o.e(6375).then(o.bind(o,76375))).default.openProject({title:"VKUI Playground",description:"Interactive VKUI example",template:"node",files:{"package.json":JSON.stringify({name:"vkui-playground-stackblitz",private:!0,type:"module",scripts:{dev:"vite",build:"tsc && vite build"},dependencies:{react:"^19.0.0","react-dom":"^19.0.0","@vkontakte/vkui":`^${i.H6}`,"@vkontakte/icons":"^3.0.0"},devDependencies:{vite:"^6.0.0","@vitejs/plugin-react":"^4.3.0",typescript:"^5.7.0","@types/react":"^19.0.0","@types/react-dom":"^19.0.0"}},null,2),"index.html":r,"vite.config.ts":n,"tsconfig.json":i.ap,"src/main.tsx":a,"src/App.tsx":(0,i.kb)(e)}},{openFile:"src/App.tsx",newWindow:!0})}}}]);