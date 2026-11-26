import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{$t as i,n as a}from"./dist-ffVrjb4g.js";import{i as o,n as s,t as c}from"./constants-BWBR8eWE.js";import{n as l,t as u}from"./Button-UIWLqw4_.js";import{n as d,t as f}from"./Flex-C-g3JHZP.js";import{n as p,t as m}from"./Checkbox-B7P4xqM-.js";import{n as h,t as g}from"./useSnackbarManager-Db-UyzdI.js";var _,v,y,b,x,S,C;function w(){return(w=t((()=>{_=e(n(),1),a(),l(),p(),d(),g(),o(),v=r(),y={title:`Utils/useSnackbarManager`,component:()=>(0,v.jsx)(`div`,{}),parameters:{...c,...s},argTypes:{limit:{control:`number`},queueStrategy:{control:`radio`,options:[`queue`,`shift`]},offsetYStart:{control:`number`},offsetYEnd:{control:`number`}}},b=[`top-start`,`bottom-start`,`top`,`bottom`,`top-end`,`bottom-end`],x=[b.slice(0,2),b.slice(2,4),b.slice(4)],S=e=>{let[t,n]=h(e),[r,a]=_.useState(new Set),[o,s]=_.useState(!0),c=_.useRef(0),l=e=>{let{id:n}=t.open({duration:o?void 0:null,before:(0,v.jsx)(i,{}),placement:e,children:`Уведомление показано! ${c.current}`,onClose:()=>{a(e=>(e.delete(n),new Set([...e])))}});c.current=c.current>100?0:c.current+1,a(e=>new Set([...e,n]))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(f,{direction:`column`,gap:`2xl`,children:[(0,v.jsx)(f,{gap:3,children:x.map(e=>(0,v.jsx)(f,{direction:`column`,gap:`xl`,children:e.map(e=>(0,v.jsx)(u,{onClick:()=>l(e),children:e},e))},e.join(`_`)))}),(0,v.jsx)(m,{checked:o,onChange:()=>s(e=>!e),children:`Автоскрытие`}),(0,v.jsx)(u,{appearance:`negative`,stretched:!0,onClick:t.closeAll,children:`Закрыть все`}),(0,v.jsx)(u,{appearance:`negative`,stretched:!0,onClick:()=>{[...r].forEach(e=>{t.update(e,{action:`Обновлен`,children:`Текст и всякое другое`})})},children:`Обновить все`})]}),n]})},C=[`Playground`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(props: UseSnackbar.Props) => {
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as Playground,C as __namedExportsOrder,y as default};