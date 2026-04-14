import{a as e,n as t}from"./chunk-BneVvdWh.js";import{X as n,Y as r,ps as i,yo as a}from"./iframe-lhb8_BzR.js";import{n as o,t as s}from"./Button-DNrV6Opx.js";import{n as c,t as l}from"./Flex-C3cq-BVx.js";import{n as u,t as d}from"./useGlobalEscKeyDown-B7ELuIVh.js";import{r as f,t as p}from"./FocusTrap-D6LsiAm7.js";import{n as m,t as h}from"./Spacing-DHQ5fWtq.js";import{n as g,t as _}from"./ButtonGroup-DXmNHVvY.js";import{n as v,t as y}from"./Box-DnTgQnYd.js";import{n as b,t as x}from"./FormItem-DeuuMO6w.js";import{n as S,t as C}from"./Input-BEYJfrbb.js";import{n as w,t as T}from"./Checkbox-D7U5JOFg.js";import{i as E,n as D,t as O}from"./constants-CXYaXe_q.js";import{n as k,t as A}from"./createStoryParameters-CbXzS3a6.js";var j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{j=e(i(),1),d(),E(),k(),v(),o(),g(),w(),c(),b(),S(),m(),n(),f(),M=a(),N={title:`Utils/FocusTrap`,component:p,parameters:A(`FocusTrap`,O,D),tags:[`Утилиты`]},P={padding:16,border:`2px solid var(--vkui--color_accent_blue)`,borderRadius:8},F={render:function(e){let t=j.useRef(null);return(0,M.jsx)(p,{...e,rootRef:t,children:(0,M.jsx)(`div`,{ref:t,tabIndex:-1,style:P,children:(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsx)(x,{top:`Имя`,children:(0,M.jsx)(C,{placeholder:`Введите имя`})}),(0,M.jsx)(x,{top:`Email`,children:(0,M.jsx)(C,{placeholder:`Введите email`,type:`email`})}),(0,M.jsxs)(_,{children:[(0,M.jsx)(s,{children:`Отправить`}),(0,M.jsx)(s,{mode:`secondary`,children:`Отмена`})]})]})})})},args:{autoFocus:!0,restoreFocus:!0,disabled:!1}},I={render:function(){let[e,t]=j.useState(!1),n=j.useRef(null);return(0,M.jsxs)(l,{direction:`column`,gap:`l`,children:[(0,M.jsx)(s,{onClick:()=>t(e=>!e),children:e?`Закрыть область`:`Открыть область с захватом фокуса`}),e&&(0,M.jsx)(p,{rootRef:n,autoFocus:!0,restoreFocus:!0,children:(0,M.jsx)(`div`,{ref:n,tabIndex:-1,style:P,children:(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsx)(r,{children:`Фокус зациклен внутри этой области. Попробуйте нажать Tab для навигации.`}),(0,M.jsx)(h,{}),(0,M.jsx)(C,{placeholder:`Первое поле ввода`}),(0,M.jsx)(C,{placeholder:`Второе поле ввода`}),(0,M.jsxs)(_,{children:[(0,M.jsx)(s,{children:`Действие`}),(0,M.jsx)(s,{mode:`secondary`,onClick:()=>t(!1),children:`Закрыть`})]})]})})})]})}},L={render:function(){let[e,t]=j.useState(`true`),[n,i]=j.useState(!0),a=j.useRef(null);return(0,M.jsxs)(l,{direction:`column`,gap:`l`,children:[(0,M.jsx)(l,{gap:`m`,align:`center`,children:(0,M.jsxs)(y,{children:[(0,M.jsx)(r,{weight:`2`,children:`Режим autoFocus:`}),(0,M.jsx)(h,{size:8}),(0,M.jsxs)(_,{children:[(0,M.jsx)(s,{mode:e===`true`?`primary`:`secondary`,onClick:()=>t(`true`),children:`true`}),(0,M.jsx)(s,{mode:e===`root`?`primary`:`secondary`,onClick:()=>t(`root`),children:`root`}),(0,M.jsx)(s,{mode:e===`false`?`primary`:`secondary`,onClick:()=>t(`false`),children:`false`})]})]})}),(0,M.jsx)(s,{mode:`secondary`,onClick:()=>i(e=>!e),children:n?`Скрыть`:`Показать`}),n&&(0,M.jsx)(p,{rootRef:a,autoFocus:e===`true`?!0:e===`root`?`root`:!1,children:(0,M.jsx)(`div`,{ref:a,tabIndex:-1,style:P,children:(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsxs)(r,{children:[e===`true`&&`Фокус автоматически установлен на первый интерактивный элемент`,e===`root`&&`Фокус установлен на корневой элемент контейнера`,e===`false`&&`Автофокус отключён`]}),(0,M.jsx)(C,{placeholder:`Первое поле ввода`}),(0,M.jsx)(C,{placeholder:`Второе поле ввода`}),(0,M.jsx)(s,{children:`Кнопка`})]})})},e)]})}},R={render:function(){let[e,t]=j.useState(!1),n=j.useRef(null),i=j.useRef(null);return(0,M.jsxs)(l,{direction:`column`,gap:`l`,children:[(0,M.jsxs)(l,{gap:`m`,children:[(0,M.jsx)(s,{onClick:()=>t(!0),children:`Открыть`}),(0,M.jsx)(s,{mode:`secondary`,getRootRef:i,children:`Альтернативный фокус`})]}),e&&(0,M.jsx)(p,{rootRef:n,autoFocus:!0,restoreFocus:()=>i.current||!0,children:(0,M.jsx)(`div`,{ref:n,tabIndex:-1,style:P,children:(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsx)(r,{children:`При закрытии фокус вернётся на кнопку «Альтернативный фокус», а не на «Открыть».`}),(0,M.jsx)(s,{onClick:()=>t(!1),children:`Закрыть`})]})})})]})}},z={render:function(){let[e,t]=j.useState(!1),n=j.useRef(null);return(0,M.jsxs)(l,{direction:`column`,gap:`l`,children:[(0,M.jsx)(T,{checked:e,onChange:e=>t(e.target.checked),children:`Отключить захват фокуса`}),(0,M.jsx)(p,{rootRef:n,disabled:e,children:(0,M.jsx)(`div`,{ref:n,tabIndex:-1,style:{...P,borderColor:e?`var(--vkui--color_icon_secondary)`:`var(--vkui--color_accent_blue)`},children:(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsx)(r,{children:e?`Захват фокуса отключён — можно выйти за пределы области через Tab`:`Захват фокуса включён — фокус зациклен внутри области`}),(0,M.jsx)(C,{placeholder:`Поле ввода`}),(0,M.jsx)(s,{children:`Кнопка внутри FocusTrap`})]})})}),(0,M.jsx)(s,{mode:`outline`,children:`Кнопка вне FocusTrap`})]})}},B={render:function(){let[e,t]=j.useState(!1),n=j.useRef(null),i=j.useRef(null);return(0,M.jsxs)(l,{direction:`column`,gap:`l`,children:[(0,M.jsx)(r,{children:`При открытии вложенного FocusTrap, первый должен быть отключён для избежания конфликтов.`}),(0,M.jsx)(p,{rootRef:n,disabled:e,children:(0,M.jsxs)(`div`,{ref:n,tabIndex:-1,style:{...P,borderColor:e?`var(--vkui--color_icon_secondary)`:`var(--vkui--color_accent_blue)`},children:[(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsxs)(r,{weight:`2`,children:[`Первый FocusTrap `,e?`(отключён)`:`(активен)`]}),(0,M.jsx)(C,{placeholder:`Поле в первом FocusTrap`}),(0,M.jsx)(s,{onClick:()=>t(!0),children:`Открыть вложенный`})]}),e&&(0,M.jsx)(h,{size:16,children:(0,M.jsx)(p,{rootRef:i,autoFocus:!0,restoreFocus:!0,children:(0,M.jsx)(`div`,{ref:i,tabIndex:-1,style:{...P,borderColor:`var(--vkui--color_accent_green)`,marginTop:16},children:(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsx)(r,{weight:`2`,children:`Вложенный FocusTrap (активен)`}),(0,M.jsx)(C,{placeholder:`Поле во вложенном FocusTrap`}),(0,M.jsx)(s,{onClick:()=>t(!1),children:`Закрыть`})]})})})})]})})]})}},V={render:function(){let[e,t]=j.useState(!1),n=j.useRef(null);return u(e,()=>t(!1)),(0,M.jsxs)(l,{direction:`column`,gap:`l`,children:[(0,M.jsx)(s,{onClick:()=>t(!0),children:`Открыть модальное окно`}),e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0, 0, 0, 0.5)`,zIndex:100},onClick:()=>t(!1)}),(0,M.jsx)(p,{rootRef:n,autoFocus:!0,restoreFocus:!0,children:(0,M.jsx)(`div`,{ref:n,tabIndex:-1,role:`dialog`,"aria-modal":`true`,"aria-label":`Пример модального окна`,style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,background:`var(--vkui--color_background_content)`,padding:24,borderRadius:12,zIndex:101,minWidth:300},children:(0,M.jsxs)(l,{direction:`column`,gap:`m`,children:[(0,M.jsx)(r,{weight:`2`,children:`Модальное окно`}),(0,M.jsx)(r,{children:`Нажмите Escape или кнопку для закрытия`}),(0,M.jsx)(h,{}),(0,M.jsx)(x,{top:`Имя`,children:(0,M.jsx)(C,{placeholder:`Введите имя`})}),(0,M.jsxs)(_,{stretched:!0,children:[(0,M.jsx)(s,{onClick:()=>t(!1),children:`Сохранить`}),(0,M.jsx)(s,{mode:`secondary`,onClick:()=>t(!1),children:`Отмена`})]})]})})})]})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Playground`,`WithToggle`,`AutoFocusModes`,`RestoreFocusExample`,`DisabledExample`,`NestedFocusTraps`,`ModalLikeUsage`]}))();export{L as AutoFocusModes,z as DisabledExample,V as ModalLikeUsage,B as NestedFocusTraps,F as Playground,R as RestoreFocusExample,I as WithToggle,H as __namedExportsOrder,N as default};