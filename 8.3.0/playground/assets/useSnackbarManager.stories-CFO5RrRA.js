import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{$t as i,n as a}from"./dist-Ddx9HyIL.js";import{n as o,t as s}from"./Button-DxjiUwvt.js";import{n as c,t as l}from"./Flex-B8Cr5qNM.js";import{r as u,t as d}from"./useSnackbarManager-bfSJS4LM.js";import{n as f,t as p}from"./Checkbox-DUMmMTez.js";import{i as m,n as h,t as g}from"./constants-cjed6ZWB.js";var _,v,y,b,x,S,C;e((()=>{_=t(n(),1),a(),o(),f(),c(),d(),m(),v=t(r(),1),y={title:`Utils/useSnackbarManager`,component:()=>(0,v.jsx)(`div`,{}),parameters:{...g,...h},argTypes:{limit:{control:`number`},queueStrategy:{control:`radio`,options:[`queue`,`shift`]},offsetYStart:{control:`number`},offsetYEnd:{control:`number`}}},b=[`top-start`,`bottom-start`,`top`,`bottom`,`top-end`,`bottom-end`],x=[b.slice(0,2),b.slice(2,4),b.slice(4)],S=e=>{let[t,n]=u(e),[r,a]=_.useState(new Set),[o,c]=_.useState(!0),d=_.useRef(0),f=e=>{let{id:n}=t.open({duration:o?void 0:null,before:(0,v.jsx)(i,{}),placement:e,children:`Уведомление показано! ${d.current}`,onClose:()=>{a(e=>(e.delete(n),new Set([...e])))}});d.current=d.current>100?0:d.current+1,a(e=>new Set([...e,n]))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(l,{direction:`column`,gap:`2xl`,children:[(0,v.jsx)(l,{gap:3,children:x.map(e=>(0,v.jsx)(l,{direction:`column`,gap:`xl`,children:e.map(e=>(0,v.jsx)(s,{onClick:()=>f(e),children:e},e))},e.join(`_`)))}),(0,v.jsx)(p,{checked:o,onChange:()=>c(e=>!e),children:`Автоскрытие`}),(0,v.jsx)(s,{appearance:`negative`,stretched:!0,onClick:t.closeAll,children:`Закрыть все`}),(0,v.jsx)(s,{appearance:`negative`,stretched:!0,onClick:()=>{[...r].forEach(e=>{t.update(e,{action:`Обновлен`,children:`Текст и всякое другое`})})},children:`Обновить все`})]}),n]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(props: UseSnackbar.Props) => {
  const [snackbarApi, contextHolder] = useSnackbarManager(props);
  const [snackbars, setSnackbars] = React.useState<Set<string>>(new Set());
  const [autoHide, setAutoHide] = React.useState(true);
  const count = React.useRef(0);
  const _onOpen = (placement: SnackbarPlacement) => {
    const {
      id
    } = snackbarApi.open({
      duration: autoHide ? undefined : null,
      before: <Icon24ThumbsUpOutline />,
      placement,
      children: \`Уведомление показано! \${count.current}\`,
      onClose: () => {
        setSnackbars(oldState => {
          oldState.delete(id);
          return new Set([...oldState]);
        });
      }
    });
    count.current = count.current > 100 ? 0 : count.current + 1;
    setSnackbars(oldState => new Set([...oldState, id]));
  };
  const _onUpdate = () => {
    [...snackbars].forEach(snackbarId => {
      snackbarApi.update(snackbarId, {
        action: 'Обновлен',
        children: 'Текст и всякое другое'
      });
    });
  };
  return <>
      <Flex direction="column" gap="2xl">
        <Flex gap={3}>
          {COLUMNS.map(placements => <Flex direction="column" gap="xl" key={placements.join('_')}>
              {placements.map(placement => <Button key={placement} onClick={() => _onOpen(placement)}>
                  {placement}
                </Button>)}
            </Flex>)}
        </Flex>
        <Checkbox checked={autoHide} onChange={() => setAutoHide(v => !v)}>
          Автоскрытие
        </Checkbox>
        <Button appearance="negative" stretched onClick={snackbarApi.closeAll}>
          Закрыть все
        </Button>
        <Button appearance="negative" stretched onClick={_onUpdate}>
          Обновить все
        </Button>
      </Flex>
      {contextHolder}
    </>;
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,y as default};