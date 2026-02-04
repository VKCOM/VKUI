import{r as s,j as e,H as l}from"./iframe-CDzsgUJ6.js";import{u as B}from"./useGlobalEscKeyDown-BcOQOr64.js";import{D as S,C}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{B as _}from"./Box-y5orPuu0.js";import{B as t}from"./Button-DrWhGNV0.js";import{B as g}from"./ButtonGroup-4uQEz_CG.js";import{C as w}from"./Checkbox-DJjrfikS.js";import{F as c}from"./Flex-BmPCO_o2.js";import{F as v}from"./FormItem-Pobv0zL5.js";import{I as u}from"./Input-Rxyq983j.js";import{S as j}from"./Spacing-_QM_7Dgd.js";import{F as i}from"./FocusTrap-CkAGPt26.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-D6Csl20o.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-hrbUbT1W.js";import"./Tappable-BF8rCM_k.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./InputUtils-DkBsdccT.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-BYrk5kv_.js";import"./Footnote-EhoXcm5o.js";import"./check_box_on_24-CVoHOfkf.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-Cmiw0E2c.js";import"./gaps-DqOl4b8v.js";import"./Removable-DwrvQD9J.js";import"./children-__GeZXUq.js";import"./IconButton-DmVT1v_5.js";import"./useConfigDirection-BVbAx_rU.js";import"./cancel_24-D42vZ9MX.js";import"./FormItemTopLabel-6qODUK9b.js";import"./Subhead-BNbydgjR.js";import"./FormField-BNZ78smL.js";import"./useFocusWithin-UKmiu0Co.js";import"./UnstyledTextField-D2LRgDHE.js";import"./useMutationObserver-BHxydzuf.js";const ve={title:"Utils/FocusTrap",component:i,parameters:I("FocusTrap",C,S),tags:["Утилиты"]},d={padding:16,border:"2px solid var(--vkui--color_accent_blue)",borderRadius:8},m={render:function(o){const r=s.useRef(null);return e.jsx(i,{...o,rootRef:r,children:e.jsx("div",{ref:r,tabIndex:-1,style:d,children:e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(v,{top:"Имя",children:e.jsx(u,{placeholder:"Введите имя"})}),e.jsx(v,{top:"Email",children:e.jsx(u,{placeholder:"Введите email",type:"email"})}),e.jsxs(g,{children:[e.jsx(t,{children:"Отправить"}),e.jsx(t,{mode:"secondary",children:"Отмена"})]})]})})})},args:{autoFocus:!0,restoreFocus:!0,disabled:!1}},f={render:function(){const[o,r]=s.useState(!1),n=s.useRef(null);return e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(t,{onClick:()=>r(a=>!a),children:o?"Закрыть область":"Открыть область с захватом фокуса"}),o&&e.jsx(i,{rootRef:n,autoFocus:!0,restoreFocus:!0,children:e.jsx("div",{ref:n,tabIndex:-1,style:d,children:e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(l,{children:"Фокус зациклен внутри этой области. Попробуйте нажать Tab для навигации."}),e.jsx(j,{}),e.jsx(u,{placeholder:"Первое поле ввода"}),e.jsx(u,{placeholder:"Второе поле ввода"}),e.jsxs(g,{children:[e.jsx(t,{children:"Действие"}),e.jsx(t,{mode:"secondary",onClick:()=>r(!1),children:"Закрыть"})]})]})})})]})}},x={render:function(){const[o,r]=s.useState("true"),[n,a]=s.useState(!0),b=s.useRef(null),y=o==="true"?!0:o==="root"?"root":!1;return e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(c,{gap:"m",align:"center",children:e.jsxs(_,{children:[e.jsx(l,{weight:"2",children:"Режим autoFocus:"}),e.jsx(j,{size:8}),e.jsxs(g,{children:[e.jsx(t,{mode:o==="true"?"primary":"secondary",onClick:()=>r("true"),children:"true"}),e.jsx(t,{mode:o==="root"?"primary":"secondary",onClick:()=>r("root"),children:"root"}),e.jsx(t,{mode:o==="false"?"primary":"secondary",onClick:()=>r("false"),children:"false"})]})]})}),e.jsx(t,{mode:"secondary",onClick:()=>a(k=>!k),children:n?"Скрыть":"Показать"}),n&&e.jsx(i,{rootRef:b,autoFocus:y,children:e.jsx("div",{ref:b,tabIndex:-1,style:d,children:e.jsxs(c,{direction:"column",gap:"m",children:[e.jsxs(l,{children:[o==="true"&&"Фокус автоматически установлен на первый интерактивный элемент",o==="root"&&"Фокус установлен на корневой элемент контейнера",o==="false"&&"Автофокус отключён"]}),e.jsx(u,{placeholder:"Первое поле ввода"}),e.jsx(u,{placeholder:"Второе поле ввода"}),e.jsx(t,{children:"Кнопка"})]})})},o)]})}},h={render:function(){const[o,r]=s.useState(!1),n=s.useRef(null),a=s.useRef(null);return e.jsxs(c,{direction:"column",gap:"l",children:[e.jsxs(c,{gap:"m",children:[e.jsx(t,{onClick:()=>r(!0),children:"Открыть"}),e.jsx(t,{mode:"secondary",getRootRef:a,children:"Альтернативный фокус"})]}),o&&e.jsx(i,{rootRef:n,autoFocus:!0,restoreFocus:()=>a.current||!0,children:e.jsx("div",{ref:n,tabIndex:-1,style:d,children:e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(l,{children:"При закрытии фокус вернётся на кнопку «Альтернативный фокус», а не на «Открыть»."}),e.jsx(t,{onClick:()=>r(!1),children:"Закрыть"})]})})})]})}},F={render:function(){const[o,r]=s.useState(!1),n=s.useRef(null);return e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(w,{checked:o,onChange:a=>r(a.target.checked),children:"Отключить захват фокуса"}),e.jsx(i,{rootRef:n,disabled:o,children:e.jsx("div",{ref:n,tabIndex:-1,style:{...d,borderColor:o?"var(--vkui--color_icon_secondary)":"var(--vkui--color_accent_blue)"},children:e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(l,{children:o?"Захват фокуса отключён — можно выйти за пределы области через Tab":"Захват фокуса включён — фокус зациклен внутри области"}),e.jsx(u,{placeholder:"Поле ввода"}),e.jsx(t,{children:"Кнопка внутри FocusTrap"})]})})}),e.jsx(t,{mode:"outline",children:"Кнопка вне FocusTrap"})]})}},R={render:function(){const[o,r]=s.useState(!1),n=s.useRef(null),a=s.useRef(null);return e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(l,{children:"При открытии вложенного FocusTrap, первый должен быть отключён для избежания конфликтов."}),e.jsx(i,{rootRef:n,disabled:o,children:e.jsxs("div",{ref:n,tabIndex:-1,style:{...d,borderColor:o?"var(--vkui--color_icon_secondary)":"var(--vkui--color_accent_blue)"},children:[e.jsxs(c,{direction:"column",gap:"m",children:[e.jsxs(l,{weight:"2",children:["Первый FocusTrap ",o?"(отключён)":"(активен)"]}),e.jsx(u,{placeholder:"Поле в первом FocusTrap"}),e.jsx(t,{onClick:()=>r(!0),children:"Открыть вложенный"})]}),o&&e.jsx(j,{size:16,children:e.jsx(i,{rootRef:a,autoFocus:!0,restoreFocus:!0,children:e.jsx("div",{ref:a,tabIndex:-1,style:{...d,borderColor:"var(--vkui--color_accent_green)",marginTop:16},children:e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(l,{weight:"2",children:"Вложенный FocusTrap (активен)"}),e.jsx(u,{placeholder:"Поле во вложенном FocusTrap"}),e.jsx(t,{onClick:()=>r(!1),children:"Закрыть"})]})})})})]})})]})}},T={render:function(){const[o,r]=s.useState(!1),n=s.useRef(null);return B(o,()=>r(!1)),e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(t,{onClick:()=>r(!0),children:"Открыть модальное окно"}),o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.5)",zIndex:100},onClick:()=>r(!1)}),e.jsx(i,{rootRef:n,autoFocus:!0,restoreFocus:!0,children:e.jsx("div",{ref:n,tabIndex:-1,role:"dialog","aria-modal":"true","aria-label":"Пример модального окна",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"var(--vkui--color_background_content)",padding:24,borderRadius:12,zIndex:101,minWidth:300},children:e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(l,{weight:"2",children:"Модальное окно"}),e.jsx(l,{children:"Нажмите Escape или кнопку для закрытия"}),e.jsx(j,{}),e.jsx(v,{top:"Имя",children:e.jsx(u,{placeholder:"Введите имя"})}),e.jsxs(g,{stretched:!0,children:[e.jsx(t,{onClick:()=>r(!1),children:"Сохранить"}),e.jsx(t,{mode:"secondary",onClick:()=>r(!1),children:"Отмена"})]})]})})})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const focusTrapRef = React.useRef<HTMLDivElement>(null);
    return <FocusTrap {...args} rootRef={focusTrapRef}>
        <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
          <Flex direction="column" gap="m">
            <FormItem top="Имя">
              <Input placeholder="Введите имя" />
            </FormItem>
            <FormItem top="Email">
              <Input placeholder="Введите email" type="email" />
            </FormItem>
            <ButtonGroup>
              <Button>Отправить</Button>
              <Button mode="secondary">Отмена</Button>
            </ButtonGroup>
          </Flex>
        </div>
      </FocusTrap>;
  },
  args: {
    autoFocus: true,
    restoreFocus: true,
    disabled: false
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);
    return <Flex direction="column" gap="l">
        <Button onClick={() => setOpen(prev => !prev)}>
          {open ? 'Закрыть область' : 'Открыть область с захватом фокуса'}
        </Button>
        {open && <FocusTrap rootRef={focusTrapRef} autoFocus restoreFocus>
            <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
              <Flex direction="column" gap="m">
                <Text>
                  Фокус зациклен внутри этой области. Попробуйте нажать Tab для навигации.
                </Text>
                <Spacing />
                <Input placeholder="Первое поле ввода" />
                <Input placeholder="Второе поле ввода" />
                <ButtonGroup>
                  <Button>Действие</Button>
                  <Button mode="secondary" onClick={() => setOpen(false)}>
                    Закрыть
                  </Button>
                </ButtonGroup>
              </Flex>
            </div>
          </FocusTrap>}
      </Flex>;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [mode, setMode] = React.useState<'true' | 'root' | 'false'>('true');
    const [show, setShow] = React.useState(true);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);
    const autoFocusValue = mode === 'true' ? true : mode === 'root' ? 'root' : false;
    return <Flex direction="column" gap="l">
        <Flex gap="m" align="center">
          <Box>
            <Text weight="2">Режим autoFocus:</Text>
            <Spacing size={8} />
            <ButtonGroup>
              <Button mode={mode === 'true' ? 'primary' : 'secondary'} onClick={() => setMode('true')}>
                true
              </Button>
              <Button mode={mode === 'root' ? 'primary' : 'secondary'} onClick={() => setMode('root')}>
                root
              </Button>
              <Button mode={mode === 'false' ? 'primary' : 'secondary'} onClick={() => setMode('false')}>
                false
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
        <Button mode="secondary" onClick={() => setShow(prev => !prev)}>
          {show ? 'Скрыть' : 'Показать'}
        </Button>
        {show && <FocusTrap key={mode} rootRef={focusTrapRef} autoFocus={autoFocusValue}>
            <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
              <Flex direction="column" gap="m">
                <Text>
                  {mode === 'true' && 'Фокус автоматически установлен на первый интерактивный элемент'}
                  {mode === 'root' && 'Фокус установлен на корневой элемент контейнера'}
                  {mode === 'false' && 'Автофокус отключён'}
                </Text>
                <Input placeholder="Первое поле ввода" />
                <Input placeholder="Второе поле ввода" />
                <Button>Кнопка</Button>
              </Flex>
            </div>
          </FocusTrap>}
      </Flex>;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);
    const alternativeRef = React.useRef<HTMLButtonElement>(null);
    return <Flex direction="column" gap="l">
        <Flex gap="m">
          <Button onClick={() => setOpen(true)}>Открыть</Button>
          <Button mode="secondary" getRootRef={alternativeRef}>
            Альтернативный фокус
          </Button>
        </Flex>
        {open && <FocusTrap rootRef={focusTrapRef} autoFocus restoreFocus={() => alternativeRef.current || true}>
            <div ref={focusTrapRef} tabIndex={-1} style={containerStyle}>
              <Flex direction="column" gap="m">
                <Text>
                  При закрытии фокус вернётся на кнопку «Альтернативный фокус», а не на «Открыть».
                </Text>
                <Button onClick={() => setOpen(false)}>Закрыть</Button>
              </Flex>
            </div>
          </FocusTrap>}
      </Flex>;
  }
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [disabled, setDisabled] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);
    return <Flex direction="column" gap="l">
        <Checkbox checked={disabled} onChange={e => setDisabled(e.target.checked)}>
          Отключить захват фокуса
        </Checkbox>
        <FocusTrap rootRef={focusTrapRef} disabled={disabled}>
          <div ref={focusTrapRef} tabIndex={-1} style={{
          ...containerStyle,
          borderColor: disabled ? 'var(--vkui--color_icon_secondary)' : 'var(--vkui--color_accent_blue)'
        }}>
            <Flex direction="column" gap="m">
              <Text>
                {disabled ? 'Захват фокуса отключён — можно выйти за пределы области через Tab' : 'Захват фокуса включён — фокус зациклен внутри области'}
              </Text>
              <Input placeholder="Поле ввода" />
              <Button>Кнопка внутри FocusTrap</Button>
            </Flex>
          </div>
        </FocusTrap>
        <Button mode="outline">Кнопка вне FocusTrap</Button>
      </Flex>;
  }
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [showSecond, setShowSecond] = React.useState(false);
    const firstRef = React.useRef<HTMLDivElement>(null);
    const secondRef = React.useRef<HTMLDivElement>(null);
    return <Flex direction="column" gap="l">
        <Text>
          При открытии вложенного FocusTrap, первый должен быть отключён для избежания конфликтов.
        </Text>
        <FocusTrap rootRef={firstRef} disabled={showSecond}>
          <div ref={firstRef} tabIndex={-1} style={{
          ...containerStyle,
          borderColor: showSecond ? 'var(--vkui--color_icon_secondary)' : 'var(--vkui--color_accent_blue)'
        }}>
            <Flex direction="column" gap="m">
              <Text weight="2">Первый FocusTrap {showSecond ? '(отключён)' : '(активен)'}</Text>
              <Input placeholder="Поле в первом FocusTrap" />
              <Button onClick={() => setShowSecond(true)}>Открыть вложенный</Button>
            </Flex>
            {showSecond && <Spacing size={16}>
                <FocusTrap rootRef={secondRef} autoFocus restoreFocus>
                  <div ref={secondRef} tabIndex={-1} style={{
                ...containerStyle,
                borderColor: 'var(--vkui--color_accent_green)',
                marginTop: 16
              }}>
                    <Flex direction="column" gap="m">
                      <Text weight="2">Вложенный FocusTrap (активен)</Text>
                      <Input placeholder="Поле во вложенном FocusTrap" />
                      <Button onClick={() => setShowSecond(false)}>Закрыть</Button>
                    </Flex>
                  </div>
                </FocusTrap>
              </Spacing>}
          </div>
        </FocusTrap>
      </Flex>;
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = React.useState(false);
    const focusTrapRef = React.useRef<HTMLDivElement>(null);
    useGlobalEscKeyDown(open, () => setOpen(false));
    return <Flex direction="column" gap="l">
        <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
        {open && <>
            <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100
        }} onClick={() => setOpen(false)} />
            <FocusTrap rootRef={focusTrapRef} autoFocus restoreFocus>
              <div ref={focusTrapRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Пример модального окна" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--vkui--color_background_content)',
            padding: 24,
            borderRadius: 12,
            zIndex: 101,
            minWidth: 300
          }}>
                <Flex direction="column" gap="m">
                  <Text weight="2">Модальное окно</Text>
                  <Text>Нажмите Escape или кнопку для закрытия</Text>
                  <Spacing />
                  <FormItem top="Имя">
                    <Input placeholder="Введите имя" />
                  </FormItem>
                  <ButtonGroup stretched>
                    <Button onClick={() => setOpen(false)}>Сохранить</Button>
                    <Button mode="secondary" onClick={() => setOpen(false)}>
                      Отмена
                    </Button>
                  </ButtonGroup>
                </Flex>
              </div>
            </FocusTrap>
          </>}
      </Flex>;
  }
}`,...T.parameters?.docs?.source}}};const be=["Playground","WithToggle","AutoFocusModes","RestoreFocusExample","DisabledExample","NestedFocusTraps","ModalLikeUsage"];export{x as AutoFocusModes,F as DisabledExample,T as ModalLikeUsage,R as NestedFocusTraps,m as Playground,h as RestoreFocusExample,f as WithToggle,be as __namedExportsOrder,ve as default};
