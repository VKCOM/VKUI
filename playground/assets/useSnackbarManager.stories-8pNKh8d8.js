import{j as e,r as s}from"./iframe-C4bTyPBQ.js";import{B as i}from"./Button-D-zltIHu.js";import{C as f}from"./Checkbox-De9eb5az.js";import{F as p}from"./Flex-BzibNvH8.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{u as j}from"./useSnackbarManager-D4mDBAXP.js";import{I as A}from"./thumbs_up_outline_24-C18v4s9r.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-nhrz54tJ.js";import"./Footnote-wW_hecXF.js";import"./check_box_on_24-C22hmiDf.js";import"./SvgIconRootV2-DbftVVP5.js";import"./check_box_indetermanate_20-CDLMjpub.js";import"./gaps-BaMG6Eg5.js";import"./useCSSKeyframesAnimationController-nG-tROJv.js";import"./Snackbar-D7YB56DP.js";import"./useConfigDirection-OBrCdmzr.js";import"./useFocusWithin-CWJCpHmP.js";import"./useGlobalEscKeyDown-CvS_H8_H.js";import"./Paragraph-DjR0IJ5A.js";import"./Subhead-CGMBr7DJ.js";import"./rubberbandIfOutOfBounds-Ds51Way3.js";import"./randomUUID-CV8jBseQ.js";const se={title:"Utils/useSnackbarManager",component:()=>e.jsx("div",{}),parameters:{...C,...g},argTypes:{limit:{control:"number"},queueStrategy:{control:"radio",options:["queue","shift"]},offsetYStart:{control:"number"},offsetYEnd:{control:"number"}}},l=["top-start","bottom-start","top","bottom","top-end","bottom-end"],F=[l.slice(0,2),l.slice(2,4),l.slice(4)],a={render:function(d){const[c,b]=j(d),[x,u]=s.useState(new Set),[m,k]=s.useState(!0),n=s.useRef(0),h=t=>{const{id:o}=c.open({duration:m?void 0:null,before:e.jsx(A,{}),placement:t,children:`Уведомление показано! ${n.current}`,onClose:()=>{u(r=>(r.delete(o),new Set([...r])))}});n.current=n.current>100?0:n.current+1,u(r=>new Set([...r,o]))},S=()=>{[...x].forEach(t=>{c.update(t,{action:"Обновлен",children:"Текст и всякое другое"})})};return e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"column",gap:"2xl",children:[e.jsx(p,{gap:3,children:F.map(t=>e.jsx(p,{direction:"column",gap:"xl",children:t.map(o=>e.jsx(i,{onClick:()=>h(o),children:o},o))},t.join("_")))}),e.jsx(f,{checked:m,onChange:()=>k(t=>!t),children:"Автоскрытие"}),e.jsx(i,{appearance:"negative",stretched:!0,onClick:c.closeAll,children:"Закрыть все"}),e.jsx(i,{appearance:"negative",stretched:!0,onClick:S,children:"Обновить все"})]}),b]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ie=["Playground"];export{a as Playground,ie as __namedExportsOrder,se as default};
