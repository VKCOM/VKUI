import{j as e,r as s}from"./iframe-D-vjmezP.js";import{B as i}from"./Button-iOPheJU3.js";import{C as f}from"./Checkbox-DCLhx_o9.js";import{F as p}from"./Flex-C_be27FX.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{u as j}from"./useSnackbarManager-n1tLul5u.js";import{I as A}from"./thumbs_up_outline_24-D2DEadk-.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-8IF9aLXb.js";import"./Footnote-DApQXU2r.js";import"./check_box_on_24-CgV3p_bd.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-Dr_kWXwB.js";import"./gaps-BRHZAyUc.js";import"./useCSSKeyframesAnimationController-BPrxArYG.js";import"./Snackbar-Cwei1qgu.js";import"./useConfigDirection-BUJREPxm.js";import"./useFocusWithin-BzKDlGXW.js";import"./useGlobalEscKeyDown-CJjuXJTQ.js";import"./Paragraph-Btq89l8U.js";import"./Subhead-DCgRz-zo.js";import"./rubberbandIfOutOfBounds-CVqKReCD.js";import"./v4-EwEgHOG0.js";const ie={title:"Utils/useSnackbarManager",component:()=>e.jsx("div",{}),parameters:{...C,...g},argTypes:{limit:{control:"number"},queueStrategy:{control:"radio",options:["queue","shift"]},offsetYStart:{control:"number"},offsetYEnd:{control:"number"}}},l=["top-start","bottom-start","top","bottom","top-end","bottom-end"],F=[l.slice(0,2),l.slice(2,4),l.slice(4)],a={render:function(d){const[c,b]=j(d),[x,u]=s.useState(new Set),[m,k]=s.useState(!0),n=s.useRef(0),h=t=>{const{id:o}=c.open({duration:m?void 0:null,before:e.jsx(A,{}),placement:t,children:`Уведомление показано! ${n.current}`,onClose:()=>{u(r=>(r.delete(o),new Set([...r])))}});n.current=n.current>100?0:n.current+1,u(r=>new Set([...r,o]))},S=()=>{[...x].forEach(t=>{c.update(t,{action:"Обновлен",children:"Текст и всякое другое"})})};return e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"column",gap:"2xl",children:[e.jsx(p,{gap:3,children:F.map(t=>e.jsx(p,{direction:"column",gap:"xl",children:t.map(o=>e.jsx(i,{onClick:()=>h(o),children:o},o))},t.join("_")))}),e.jsx(f,{checked:m,onChange:()=>k(t=>!t),children:"Автоскрытие"}),e.jsx(i,{appearance:"negative",stretched:!0,onClick:c.closeAll,children:"Закрыть все"}),e.jsx(i,{appearance:"negative",stretched:!0,onClick:S,children:"Обновить все"})]}),b]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
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
  }
}`,...a.parameters?.docs?.source}}};const pe=["Playground"];export{a as Playground,pe as __namedExportsOrder,ie as default};
