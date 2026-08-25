import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{Tr as i,kn as a,l as o,n as s}from"./dist-BrTYZxJF.js";import{i as c,u as l}from"./utils-Cn6WgXDs.js";import{n as u,t as ee}from"./usePlatform-BcYLlEra.js";import{n as te,r as d}from"./useAdaptivityConditionalRender-DGsT9rWF.js";import{n as ne,t as re}from"./Separator-CemYn9f-.js";import{n as ie,t as f}from"./Button-DT035ZIy.js";import{n as ae,t as oe}from"./PanelHeaderButton-Cxnq2Ckm.js";import{n as se,t as ce}from"./HorizontalScroll-m10mX-rT.js";import{n as p,t as m}from"./ModalOutsideButton-q0F9Wzo-.js";import{i as le,n as ue,r as h,t as g}from"./ModalPageHeader-s7afqWDA.js";import{n as de,t as fe}from"./Spacing-CTcLRGVS.js";import{n as pe,t as me}from"./Card-Baad-K4K.js";import{n as he,t as ge}from"./CardScroll-CLGIw1oZ.js";import{n as _e,t as _}from"./Header-DqIdfGka.js";import{n as ve,t as v}from"./Group-Bp-h8t_O.js";import{n as ye,t as be}from"./Gradient-CRvw6RIl.js";import{n as xe,t as Se}from"./SimpleCell-BdV7S7Py.js";import{n as Ce,t as we}from"./CellButton-5wPnY1kh.js";import{n as Te,t as y}from"./Avatar-DoiR7xFu.js";import{n as Ee,t as b}from"./HorizontalCell-DX3tFRcf.js";import{n as x,t as S}from"./Box-NJ2h0pAX.js";import{n as C,t as w}from"./Placeholder-DKdoE8bM.js";import{n as T,t as E}from"./FormItem-B7byku12.js";import{n as D,t as O}from"./Input-BD5Vf9yq.js";import{n as De,t as Oe}from"./Textarea-DAI7CTWm.js";import{n as k,t as A}from"./Radio-CQsZ_WnK.js";import{n as ke,t as j}from"./Checkbox-C_3Fx58h.js";import{n as Ae,t as M}from"./CustomSelect-dh8FxlMC.js";import{n as je,t as N}from"./SelectMimicry-BlC8tVH7.js";import{n as Me,t as Ne}from"./DateInput-Cb-JSkyn.js";import{n as Pe,t as P}from"./Div-BflkzbsU.js";import{n as Fe,t as Ie}from"./PanelHeaderClose-inADwkkz.js";import{n as Le,t as Re}from"./PanelHeaderSubmit-BtF0526f.js";import{i as ze,n as Be,t as Ve}from"./constants-DBkyy3CT.js";import{n as He,t as Ue}from"./createStoryParameters-DBkK1CfQ.js";import{a as F,c as We,i as Ge,o as Ke,t as I}from"./mock-CkzEkxhs.js";function L({onClick:e}){return(0,V.jsx)(Re,{onClick:e})}function R({className:e,onClick:t}){return(0,V.jsx)(Ie,{className:e,onClick:t})}function z({className:e,onClick:t}){return(0,V.jsx)(oe,{onClick:t,className:e,children:(0,V.jsx)(a,{})})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{B=e(n(),1),s(),te(),ee(),c(),ze(),Ke(),He(),Te(),x(),ie(),pe(),he(),Ce(),ke(),Ae(),Me(),Pe(),T(),ye(),ve(),_e(),Ee(),se(),D(),p(),ue(),ae(),Fe(),Le(),C(),k(),je(),ne(),xe(),de(),De(),le(),V=r(),{useCallback:H,useState:U}=__STORYBOOK_MODULE_PREVIEW_API__,W=Ge(),G=F(25),K={title:`Modals/ModalPage`,component:h,parameters:Ue(`ModalPage`,Ve,Be,{liveCodeEditor:{scope:{randomUser:W,users:G,DoneButton:L,AndroidCloseButton:R,IosCloseButton:z,stopPropagation:l}}}),tags:[`Модальные окна`]},q=e=>{let[t,n]=B.useState(!0),r=()=>n(!1),i=u(),{viewWidth:a}=d(),[s,c]=U(!1),l=H(()=>c(!s),[s]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,V.jsx)(h,{...e,open:t,dynamicContentHeight:!0,header:(0,V.jsx)(g,{before:a.smallTabletMinus&&i===`android`&&(0,V.jsx)(R,{className:a.smallTabletMinus.className,onClick:r}),after:a.smallTabletMinus&&i===`ios`&&(0,V.jsx)(z,{className:a.smallTabletMinus.className,onClick:r}),children:`Dynamic modal`}),onClose:()=>n(!1),children:(0,V.jsxs)(v,{children:[(0,V.jsx)(we,{onClick:l,children:s?`collapse`:`expand`}),s&&(0,V.jsx)(w,{icon:(0,V.jsx)(o,{})})]})})]})},q.args={id:`modal-page`,open:!0},J=e=>{let[t,n]=B.useState(!0),r=()=>n(!1),i=u(),{viewWidth:a}=d();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,V.jsxs)(h,{...e,open:t,settlingHeight:100,hideCloseButton:i===`ios`,header:(0,V.jsxs)(g,{before:a.smallTabletMinus&&i===`android`&&(0,V.jsx)(R,{className:a.smallTabletMinus.className,onClick:r}),after:i===`ios`&&(0,V.jsx)(z,{onClick:r}),children:[`@`,W.screen_name]}),onClose:()=>n(!1),children:[(0,V.jsx)(be,{mode:`tint`,children:(0,V.jsx)(w,{icon:(0,V.jsx)(y,{size:96,src:W.photo_100}),title:W.first_name+` `+W.last_name})}),(0,V.jsx)(v,{header:(0,V.jsx)(_,{indicator:`25`,children:`Друзья`}),children:G.map(e=>(0,V.jsx)(Se,{before:(0,V.jsx)(y,{src:e.photo_100}),children:e.name},e.id))})]})]})},J.args={id:`modal-page`,open:!0},Y=e=>{let[t,n]=B.useState(!0),r=()=>n(!1),[i,a]=U(new Date(1901,0,1)),{viewWidth:o}=d();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,V.jsxs)(h,{...e,open:t,header:(0,V.jsx)(g,{before:o.smallTabletMinus&&(0,V.jsx)(R,{className:o.smallTabletMinus.className,onClick:r}),after:(0,V.jsx)(L,{onClick:r}),children:`Фильтры`}),onClose:()=>n(!1),children:[(0,V.jsxs)(v,{children:[(0,V.jsx)(E,{top:`Страна`,children:(0,V.jsx)(N,{placeholder:`Выбрать страну`})}),(0,V.jsx)(E,{top:`Город`,children:(0,V.jsx)(N,{placeholder:`Выбрать город`,disabled:!0})})]}),(0,V.jsx)(v,{children:(0,V.jsxs)(E,{top:`Пол`,children:[(0,V.jsx)(A,{name:`sex`,value:0,defaultChecked:!0,children:`Любой`}),(0,V.jsx)(A,{name:`sex`,value:1,children:`Мужской`}),(0,V.jsx)(A,{name:`sex`,value:2,children:`Женский`})]})}),(0,V.jsxs)(v,{children:[(0,V.jsx)(E,{top:`Школа`,children:(0,V.jsx)(N,{placeholder:`Выбрать школу`,disabled:!0})}),(0,V.jsx)(E,{top:`Университет`,children:(0,V.jsx)(N,{placeholder:`Выбрать университет`,disabled:!0})})]}),(0,V.jsx)(v,{children:(0,V.jsxs)(E,{top:`Дополнительно`,children:[(0,V.jsx)(j,{children:`С фотографией`}),(0,V.jsx)(j,{children:`Сейчас на сайте`})]})}),(0,V.jsxs)(v,{children:[(0,V.jsx)(E,{top:`Работа`,children:(0,V.jsx)(O,{placeholder:`Место работы`})}),(0,V.jsx)(E,{children:(0,V.jsx)(O,{placeholder:`Должность`})}),(0,V.jsx)(E,{top:`Дата рождения`,children:(0,V.jsx)(Ne,{value:i,onChange:a,minDateTime:new Date(1901,0,1),maxDateTime:new Date(2006,0,1)})})]})]})]})},Y.args={id:`modal-page`},X=F(30),Z=e=>{let t=u(),{viewWidth:n}=d(),[r,a]=B.useState(!0),o=e=>{console.log(`reason`,e),a(!1)};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>a(!0),children:`Открыть`}),(0,V.jsxs)(h,{id:`test`,...e,open:r,header:(0,V.jsx)(g,{before:n.smallTabletMinus&&t===`android`&&(0,V.jsx)(R,{className:n.smallTabletMinus.className,onClick:()=>o(`close-custom`)}),after:n.smallTabletMinus&&t===`ios`&&(0,V.jsx)(z,{className:n.smallTabletMinus.className,onClick:()=>o(`close-custom`)}),children:`Sandbox`}),footer:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(re,{}),(0,V.jsx)(S,{padding:`system`,children:(0,V.jsx)(O,{name:`footer`,type:`text`,placeholder:`Lorem ipsum...`})})]}),outsideButtons:(0,V.jsx)(m,{"aria-label":`More`,onClick:()=>console.log(`outside button click`),children:(0,V.jsx)(i,{})}),onClose:o,children:[(0,V.jsx)(E,{label:`top`,top:`Вертикальный скролл не должен блокироваться`,children:(0,V.jsx)(Oe,{name:`top`,placeholder:`Lorem ipsum...`,defaultValue:We(`Lorem ipsum`,100),maxHeight:110})}),(0,V.jsx)(P,{children:(0,V.jsxs)(P,{style:{paddingBlock:24,borderRadius:12,border:`1px dashed tomato`},onTouchStart:l,onMouseDown:l,children:[(0,V.jsx)(`code`,{children:`event.stopPropagation()`}),` на `,(0,V.jsx)(`code`,{children:`onTouchStart`}),`/`,(0,V.jsx)(`code`,{children:`onMouseDown`}),` должен блокировать жесты вызывающие сворачивание/разворачивание панели`]})}),(0,V.jsxs)(v,{header:(0,V.jsx)(_,{size:`m`,multiline:!0,children:`Горизонтальный скролл не должен блокироваться`}),children:[(0,V.jsx)(ce,{children:(0,V.jsx)(`div`,{style:{display:`flex`},children:X.map(e=>(0,V.jsx)(b,{title:e.first_name,children:(0,V.jsx)(y,{size:56,src:e.photo_200})},e.id))})}),(0,V.jsx)(fe,{size:`m`}),(0,V.jsx)(ge,{padding:!0,children:X.map((e,t)=>(0,V.jsx)(me,{children:(0,V.jsx)(`div`,{style:{height:96}})},t))})]}),(0,V.jsx)(E,{top:`Плавающий элемент в пределах панели`,bottom:(0,V.jsxs)(V.Fragment,{children:[`Если `,(0,V.jsx)(`code`,{children:`scrollTop`}),` в плавающем элементе и в `,(0,V.jsx)(`code`,{children:`ModalPageContent`}),` `,`будет равен `,(0,V.jsx)(`b`,{children:`0`}),`, то панель будет считать, что её можно тянуть вниз для сворачивания`]}),children:(0,V.jsx)(M,{options:I,placeholder:`forceDropdownPortal={false}`,forceDropdownPortal:!1})}),(0,V.jsx)(E,{top:`Плавающий элемент за пределами панели`,bottom:`Панель не отвечает за закрытие плавающего окна, если та вышла за пределы во время скролла или сворачивания/разворачивания`,children:(0,V.jsx)(M,{options:I,placeholder:`forceDropdownPortal={true}`,forceDropdownPortal:!0})}),(0,V.jsx)(E,{top:(0,V.jsxs)(V.Fragment,{children:[`Текстовое поле в конце `,(0,V.jsx)(`code`,{children:`ModaPageContent`})]}),label:`bottom`,children:(0,V.jsx)(O,{name:`bottom`,placeholder:`Lorem ipsum...`})})]})]})},Z.args={id:`modal-page`},Z.parameters={liveCodeEditor:{scope:{mockData:X}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
  const [open, setOpen] = React.useState(true);
  const close = () => setOpen(false);
  const platform = usePlatform();
  const {
    viewWidth
  } = useAdaptivityConditionalRender();
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded(!expanded), [expanded]);
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>

      <ModalPage {...props} open={open} dynamicContentHeight header={<ModalPageHeader before={viewWidth.smallTabletMinus && platform === 'android' && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />} after={viewWidth.smallTabletMinus && platform === 'ios' && <IosCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />}>
            Dynamic modal
          </ModalPageHeader>} onClose={() => setOpen(false)}>
        <Group>
          <CellButton onClick={toggle}>{expanded ? 'collapse' : 'expand'}</CellButton>
          {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
        </Group>
      </ModalPage>
    </>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
  const [open, setOpen] = React.useState(true);
  const close = () => setOpen(false);
  const platform = usePlatform();
  const {
    viewWidth
  } = useAdaptivityConditionalRender();
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>

      <ModalPage {...props} open={open} settlingHeight={100} hideCloseButton={platform === 'ios'} header={<ModalPageHeader before={viewWidth.smallTabletMinus && platform === 'android' && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />} after={platform === 'ios' && <IosCloseButton onClick={close} />}>
            @{randomUser.screen_name}
          </ModalPageHeader>} onClose={() => setOpen(false)}>
        <Gradient mode="tint">
          <Placeholder icon={<Avatar size={96} src={randomUser.photo_100} />} title={randomUser.first_name + ' ' + randomUser.last_name}></Placeholder>
        </Gradient>
        <Group header={<Header indicator="25">Друзья</Header>}>
          {users.map(user => {
          return <SimpleCell before={<Avatar src={user.photo_100} />} key={user.id}>
                {user.name}
              </SimpleCell>;
        })}
        </Group>
      </ModalPage>
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
  const [open, setOpen] = React.useState(true);
  const close = () => setOpen(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date(1901, 0, 1));
  const {
    viewWidth
  } = useAdaptivityConditionalRender();
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <ModalPage {...props} open={open} header={<ModalPageHeader before={viewWidth.smallTabletMinus && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />} after={<DoneButton onClick={close} />}>
            Фильтры
          </ModalPageHeader>} onClose={() => setOpen(false)}>
        <Group>
          <FormItem top="Страна">
            <SelectMimicry placeholder="Выбрать страну" />
          </FormItem>
          <FormItem top="Город">
            <SelectMimicry placeholder="Выбрать город" disabled />
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Пол">
            <Radio name="sex" value={0} defaultChecked>
              Любой
            </Radio>
            <Radio name="sex" value={1}>
              Мужской
            </Radio>
            <Radio name="sex" value={2}>
              Женский
            </Radio>
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Школа">
            <SelectMimicry placeholder="Выбрать школу" disabled />
          </FormItem>
          <FormItem top="Университет">
            <SelectMimicry placeholder="Выбрать университет" disabled />
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Дополнительно">
            <Checkbox>С фотографией</Checkbox>
            <Checkbox>Сейчас на сайте</Checkbox>
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Работа">
            <Input placeholder="Место работы" />
          </FormItem>
          <FormItem>
            <Input placeholder="Должность" />
          </FormItem>
          <FormItem top="Дата рождения">
            <DateInput value={dateOfBirth} onChange={setDateOfBirth} minDateTime={new Date(1901, 0, 1)} maxDateTime={new Date(2006, 0, 1)} />
          </FormItem>
        </Group>
      </ModalPage>
    </>;
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
  const platform = usePlatform();
  const {
    viewWidth
  } = useAdaptivityConditionalRender();
  const [open, setOpen] = React.useState(true);
  const handleModalClose = (reason: 'close-custom' | ModalPageCloseReason) => {
    console.log('reason', reason);
    setOpen(false);
  };
  return <>
      <Button appearance="overlay" onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <ModalPage id="test" {...props} open={open} header={<ModalPageHeader before={viewWidth.smallTabletMinus && platform === 'android' && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={() => handleModalClose('close-custom')} />} after={viewWidth.smallTabletMinus && platform === 'ios' && <IosCloseButton className={viewWidth.smallTabletMinus.className} onClick={() => handleModalClose('close-custom')} />}>
            Sandbox
          </ModalPageHeader>} footer={<>
            <Separator />
            <Box padding="system">
              <Input name="footer" type="text" placeholder="Lorem ipsum..." />
            </Box>
          </>} outsideButtons={<ModalOutsideButton aria-label="More" onClick={() => console.log('outside button click')}>
            <Icon20More />
          </ModalOutsideButton>} onClose={handleModalClose}>
        <FormItem label="top" top="Вертикальный скролл не должен блокироваться">
          <Textarea name="top" placeholder="Lorem ipsum..." defaultValue={multiplyText('Lorem ipsum', 100)} maxHeight={110} />
        </FormItem>
        <Div>
          <Div style={{
          paddingBlock: 24,
          borderRadius: 12,
          border: '1px dashed tomato'
        }} onTouchStart={stopPropagation} onMouseDown={stopPropagation}>
            <code>event.stopPropagation()</code> на <code>onTouchStart</code>/
            <code>onMouseDown</code> должен блокировать жесты вызывающие сворачивание/разворачивание
            панели
          </Div>
        </Div>
        <Group header={<Header size="m" multiline>
              Горизонтальный скролл не должен блокироваться
            </Header>}>
          <HorizontalScroll>
            <div style={{
            display: 'flex'
          }}>
              {mockData.map(item => {
              return <HorizontalCell key={item.id} title={item.first_name}>
                    <Avatar size={56} src={item.photo_200} />
                  </HorizontalCell>;
            })}
            </div>
          </HorizontalScroll>
          <Spacing size="m" />
          <CardScroll padding>
            {mockData.map((_, index) => <Card key={index}>
                <div style={{
              height: 96
            }} />
              </Card>)}
          </CardScroll>
        </Group>
        <FormItem top="Плавающий элемент в пределах панели" bottom={<>
              Если <code>scrollTop</code> в плавающем элементе и в <code>ModalPageContent</code>{' '}
              будет равен <b>0</b>, то панель будет считать, что её можно тянуть вниз для
              сворачивания
            </>}>
          <CustomSelect options={cities} placeholder="forceDropdownPortal={false}" forceDropdownPortal={false} />
        </FormItem>
        <FormItem top="Плавающий элемент за пределами панели" bottom="Панель не отвечает за закрытие плавающего окна, если та вышла за пределы во время скролла или сворачивания/разворачивания">
          <CustomSelect options={cities} placeholder="forceDropdownPortal={true}" forceDropdownPortal={true} />
        </FormItem>
        <FormItem top={<>
              Текстовое поле в конце <code>ModaPageContent</code>
            </>} label="bottom">
          <Input name="bottom" placeholder="Lorem ipsum..." />
        </FormItem>
      </ModalPage>
    </>;
}`,...Z.parameters?.docs?.source}}},Q=[`Playground`,`FullscreenModalPage`,`ModalPageWithFilters`,`Sandbox`]})))()}$();export{J as FullscreenModalPage,Y as ModalPageWithFilters,q as Playground,Z as Sandbox,Q as __namedExportsOrder,K as default};