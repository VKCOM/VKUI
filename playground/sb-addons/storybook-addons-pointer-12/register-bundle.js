try{
var R=__STORYBOOKAPI__,{ActiveTabs:f,Consumer:g,ManagerContext:E,Provider:I,addons:n,combineParameters:k,controlOrMetaKey:B,controlOrMetaSymbol:L,eventMatchesShortcut:x,eventToShortcut:H,isMacLike:D,isShortcutTaken:M,keyToSymbol:N,merge:v,mockChannel:F,optionOrAltSymbol:K,shortcutMatchesShortcut:Y,shortcutToHumanString:W,types:p,useAddonState:G,useArgTypes:U,useArgs:V,useChannel:$,useGlobalTypes:q,useGlobals:u,useParameter:w,useSharedState:z,useStoryPrepared:Z,useStorybookApi:j,useStorybookState:J}=__STORYBOOKAPI__;var te=__REACT__,{Children:re,Component:ae,Fragment:ne,Profiler:se,PureComponent:ce,StrictMode:ie,Suspense:le,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pe,cloneElement:ue,createContext:me,createElement:s,createFactory:Se,createRef:_e,forwardRef:de,isValidElement:Te,lazy:be,memo:Oe,useCallback:m,useContext:ye,useDebugValue:Ce,useEffect:Pe,useImperativeHandle:he,useLayoutEffect:Ae,useMemo:Re,useReducer:fe,useRef:ge,useState:Ee,version:Ie}=__REACT__;var xe=__STORYBOOKCOMPONENTS__,{A:He,ActionBar:De,AddonPanel:Me,Badge:Ne,Bar:ve,Blockquote:Fe,Button:Ke,ClipboardCode:Ye,Code:We,DL:Ge,Div:Ue,DocumentWrapper:Ve,ErrorFormatter:$e,FlexBar:qe,Form:we,H1:ze,H2:Ze,H3:je,H4:Je,H5:Qe,H6:Xe,HR:eo,IconButton:S,IconButtonSkeleton:oo,Icons:_,Img:to,LI:ro,Link:ao,ListItem:no,Loader:so,OL:co,P:io,Placeholder:lo,Pre:po,ResetWrapper:uo,ScrollArea:mo,Separator:So,Spaced:_o,Span:To,StorybookIcon:bo,StorybookLogo:Oo,Symbols:yo,SyntaxHighlighter:Co,TT:Po,TabBar:ho,TabButton:Ao,TabWrapper:Ro,Table:fo,Tabs:go,TabsState:Eo,TooltipLinkList:Io,TooltipMessage:ko,TooltipNote:Bo,UL:Lo,WithTooltip:xo,WithTooltipPure:Ho,Zoom:Do,codeCommon:Mo,components:No,createCopyToClipboardFunction:vo,getStoryHref:Fo,icons:Ko,interleaveSeparators:Yo,nameSpaceClassNames:Wo,resetComponents:Go,withReset:Uo}=__STORYBOOKCOMPONENTS__;var c="storybook/pointer",i="hasPointer";var d=()=>{let[r,l]=u(),a=r[i],T=m(()=>{l({[i]:!a})},[l,a]);return s(S,{active:a,key:"pointer",onClick:T},s(_,{icon:"button"}),"\xA0",`${a?"":"no "}pointer`)};n.register(c,()=>{n.add(c,{title:"Pointer",type:p.TOOL,match:({viewMode:r})=>!!(r&&r.match(/^(story|docs)$/)),render:d})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
