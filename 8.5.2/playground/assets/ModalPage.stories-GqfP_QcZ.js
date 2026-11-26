import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,u as a}from"./utils-CG5si8tW.js";import{Dr as o,jn as s,l as ee,n as c}from"./dist-ffVrjb4g.js";import{n as l,t as te}from"./usePlatform-y1UWuT6C.js";import{n as ne,r as u}from"./useAdaptivityConditionalRender-BnyqUEnJ.js";import{n as re,t as ie}from"./Separator-x1D238Ar.js";import{i as ae,n as oe,t as se}from"./constants-BWBR8eWE.js";import{n as ce,t as le}from"./createStoryParameters-D_aKMzVl.js";import{n as ue,t as de}from"./Box-CA9BHprV.js";import{n as fe,t as d}from"./Group-BYaqcOTu.js";import{n as pe,t as me}from"./SimpleCell-DpxF12b-.js";import{n as he,t as f}from"./Button-UIWLqw4_.js";import{n as ge,t as p}from"./Placeholder-CEGhmgMM.js";import{n as _e,t as ve}from"./ModalOutsideButton-orQYX0dN.js";import{a as m,c as ye,i as be,o as xe,t as h}from"./mock-gn_3WRVn.js";import{n as Se,t as g}from"./Avatar-D5eC2z7e.js";import{n as Ce,t as _}from"./Div-ByfmwV1U.js";import{n as we,t as v}from"./CustomSelect-kbc5wO5t.js";import{n as Te,t as y}from"./Input-C0QwfGXJ.js";import{n as b,t as x}from"./Card-B5gmI3Z3.js";import{n as S,t as C}from"./HorizontalScroll-cOR9kCRx.js";import{n as w,t as T}from"./CardScroll-DB_rALvB.js";import{n as E,t as D}from"./CellButton-BiLy7l3x.js";import{n as O,t as k}from"./Checkbox-B7P4xqM-.js";import{n as Ee,t as A}from"./FormItem--X1L6eoH.js";import{n as De,t as Oe}from"./DateInput-2qldKcZ2.js";import{n as ke,t as Ae}from"./PanelHeaderButton-CZzfWHSf.js";import{n as j,t as je}from"./Spacing-BlSlU3-S.js";import{n as Me,t as Ne}from"./Textarea-Cmc1mv3h.js";import{n as Pe,t as Fe}from"./Gradient-C9h7LlnP.js";import{n as Ie,t as M}from"./Header-D_4bQeTM.js";import{n as Le,t as Re}from"./HorizontalCell-Cy2WpV9Q.js";import{c as ze,n as Be,s as N,t as P}from"./ModalPage-BVlZnWFW.js";import{n as Ve,t as He}from"./PanelHeaderClose-eh4vTRc3.js";import{n as Ue,t as We}from"./PanelHeaderSubmit-DWkFwa0G.js";import{n as Ge,t as F}from"./Radio-CEjX-V_Q.js";import{n as Ke,t as I}from"./SelectMimicry-_fwf4Nxs.js";function L({onClick:e}){return(0,V.jsx)(We,{onClick:e})}function R({className:e,onClick:t}){return(0,V.jsx)(He,{className:e,onClick:t})}function z({className:e,onClick:t}){return(0,V.jsx)(Ae,{onClick:t,className:e,children:(0,V.jsx)(s,{})})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{B=e(n(),1),c(),ne(),te(),i(),ae(),xe(),ce(),Se(),ue(),he(),b(),w(),E(),O(),we(),De(),Ce(),Ee(),Pe(),fe(),Ie(),Le(),S(),Te(),_e(),ze(),ke(),Ve(),Ue(),ge(),Ge(),Ke(),re(),pe(),j(),Me(),Be(),V=r(),{useCallback:H,useState:U}=__STORYBOOK_MODULE_PREVIEW_API__,W=be(),G=m(25),K={title:`Modals/ModalPage`,component:P,parameters:le(`ModalPage`,se,oe,{liveCodeEditor:{scope:{randomUser:W,users:G,DoneButton:L,AndroidCloseButton:R,IosCloseButton:z,stopPropagation:a}}}),tags:[`Модальные окна`]},q=e=>{let[t,n]=B.useState(!0),r=()=>n(!1),i=l(),{viewWidth:a}=u(),[o,s]=U(!1),c=H(()=>s(!o),[o]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,V.jsx)(P,{...e,open:t,dynamicContentHeight:!0,header:(0,V.jsx)(N,{before:a.smallTabletMinus&&i===`android`&&(0,V.jsx)(R,{className:a.smallTabletMinus.className,onClick:r}),after:a.smallTabletMinus&&i===`ios`&&(0,V.jsx)(z,{className:a.smallTabletMinus.className,onClick:r}),children:`Dynamic modal`}),onClose:()=>n(!1),children:(0,V.jsxs)(d,{children:[(0,V.jsx)(D,{onClick:c,children:o?`collapse`:`expand`}),o&&(0,V.jsx)(p,{icon:(0,V.jsx)(ee,{})})]})})]})},q.args={id:`modal-page`,open:!0},J=e=>{let[t,n]=B.useState(!0),r=()=>n(!1),i=l(),{viewWidth:a}=u();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,V.jsxs)(P,{...e,open:t,settlingHeight:100,hideCloseButton:i===`ios`,header:(0,V.jsxs)(N,{before:a.smallTabletMinus&&i===`android`&&(0,V.jsx)(R,{className:a.smallTabletMinus.className,onClick:r}),after:i===`ios`&&(0,V.jsx)(z,{onClick:r}),children:[`@`,W.screen_name]}),onClose:()=>n(!1),children:[(0,V.jsx)(Fe,{mode:`tint`,children:(0,V.jsx)(p,{icon:(0,V.jsx)(g,{size:96,src:W.photo_100}),title:W.first_name+` `+W.last_name})}),(0,V.jsx)(d,{header:(0,V.jsx)(M,{indicator:`25`,children:`Друзья`}),children:G.map(e=>(0,V.jsx)(me,{before:(0,V.jsx)(g,{src:e.photo_100}),children:e.name},e.id))})]})]})},J.args={id:`modal-page`,open:!0},Y=e=>{let[t,n]=B.useState(!0),r=()=>n(!1),[i,a]=U(new Date(1901,0,1)),{viewWidth:o}=u();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,V.jsxs)(P,{...e,open:t,header:(0,V.jsx)(N,{before:o.smallTabletMinus&&(0,V.jsx)(R,{className:o.smallTabletMinus.className,onClick:r}),after:(0,V.jsx)(L,{onClick:r}),children:`Фильтры`}),onClose:()=>n(!1),children:[(0,V.jsxs)(d,{children:[(0,V.jsx)(A,{top:`Страна`,children:(0,V.jsx)(I,{placeholder:`Выбрать страну`})}),(0,V.jsx)(A,{top:`Город`,children:(0,V.jsx)(I,{placeholder:`Выбрать город`,disabled:!0})})]}),(0,V.jsx)(d,{children:(0,V.jsxs)(A,{top:`Пол`,children:[(0,V.jsx)(F,{name:`sex`,value:0,defaultChecked:!0,children:`Любой`}),(0,V.jsx)(F,{name:`sex`,value:1,children:`Мужской`}),(0,V.jsx)(F,{name:`sex`,value:2,children:`Женский`})]})}),(0,V.jsxs)(d,{children:[(0,V.jsx)(A,{top:`Школа`,children:(0,V.jsx)(I,{placeholder:`Выбрать школу`,disabled:!0})}),(0,V.jsx)(A,{top:`Университет`,children:(0,V.jsx)(I,{placeholder:`Выбрать университет`,disabled:!0})})]}),(0,V.jsx)(d,{children:(0,V.jsxs)(A,{top:`Дополнительно`,children:[(0,V.jsx)(k,{children:`С фотографией`}),(0,V.jsx)(k,{children:`Сейчас на сайте`})]})}),(0,V.jsxs)(d,{children:[(0,V.jsx)(A,{top:`Работа`,children:(0,V.jsx)(y,{placeholder:`Место работы`})}),(0,V.jsx)(A,{children:(0,V.jsx)(y,{placeholder:`Должность`})}),(0,V.jsx)(A,{top:`Дата рождения`,children:(0,V.jsx)(Oe,{value:i,onChange:a,minDateTime:new Date(1901,0,1),maxDateTime:new Date(2006,0,1)})})]})]})]})},Y.args={id:`modal-page`},X=m(30),Z=e=>{let t=l(),{viewWidth:n}=u(),[r,i]=B.useState(!0),s=e=>{console.log(`reason`,e),i(!1)};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f,{appearance:`overlay`,onClick:()=>i(!0),children:`Открыть`}),(0,V.jsxs)(P,{id:`test`,...e,open:r,header:(0,V.jsx)(N,{before:n.smallTabletMinus&&t===`android`&&(0,V.jsx)(R,{className:n.smallTabletMinus.className,onClick:()=>s(`close-custom`)}),after:n.smallTabletMinus&&t===`ios`&&(0,V.jsx)(z,{className:n.smallTabletMinus.className,onClick:()=>s(`close-custom`)}),children:`Sandbox`}),footer:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ie,{}),(0,V.jsx)(de,{padding:`system`,children:(0,V.jsx)(y,{name:`footer`,type:`text`,placeholder:`Lorem ipsum...`})})]}),outsideButtons:(0,V.jsx)(ve,{"aria-label":`More`,onClick:()=>console.log(`outside button click`),children:(0,V.jsx)(o,{})}),onClose:s,children:[(0,V.jsx)(A,{label:`top`,top:`Вертикальный скролл не должен блокироваться`,children:(0,V.jsx)(Ne,{name:`top`,placeholder:`Lorem ipsum...`,defaultValue:ye(`Lorem ipsum`,100),maxHeight:110})}),(0,V.jsx)(_,{children:(0,V.jsxs)(_,{style:{paddingBlock:24,borderRadius:12,border:`1px dashed tomato`},onTouchStart:a,onMouseDown:a,children:[(0,V.jsx)(`code`,{children:`event.stopPropagation()`}),` на `,(0,V.jsx)(`code`,{children:`onTouchStart`}),`/`,(0,V.jsx)(`code`,{children:`onMouseDown`}),` должен блокировать жесты вызывающие сворачивание/разворачивание панели`]})}),(0,V.jsxs)(d,{header:(0,V.jsx)(M,{size:`m`,multiline:!0,children:`Горизонтальный скролл не должен блокироваться`}),children:[(0,V.jsx)(C,{children:(0,V.jsx)(`div`,{style:{display:`flex`},children:X.map(e=>(0,V.jsx)(Re,{title:e.first_name,children:(0,V.jsx)(g,{size:56,src:e.photo_200})},e.id))})}),(0,V.jsx)(je,{size:`m`}),(0,V.jsx)(T,{padding:!0,children:X.map((e,t)=>(0,V.jsx)(x,{children:(0,V.jsx)(`div`,{style:{height:96}})},t))})]}),(0,V.jsx)(A,{top:`Плавающий элемент в пределах панели`,bottom:(0,V.jsxs)(V.Fragment,{children:[`Если `,(0,V.jsx)(`code`,{children:`scrollTop`}),` в плавающем элементе и в `,(0,V.jsx)(`code`,{children:`ModalPageContent`}),` `,`будет равен `,(0,V.jsx)(`b`,{children:`0`}),`, то панель будет считать, что её можно тянуть вниз для сворачивания`]}),children:(0,V.jsx)(v,{options:h,placeholder:`forceDropdownPortal={false}`,forceDropdownPortal:!1})}),(0,V.jsx)(A,{top:`Плавающий элемент за пределами панели`,bottom:`Панель не отвечает за закрытие плавающего окна, если та вышла за пределы во время скролла или сворачивания/разворачивания`,children:(0,V.jsx)(v,{options:h,placeholder:`forceDropdownPortal={true}`,forceDropdownPortal:!0})}),(0,V.jsx)(A,{top:(0,V.jsxs)(V.Fragment,{children:[`Текстовое поле в конце `,(0,V.jsx)(`code`,{children:`ModaPageContent`})]}),label:`bottom`,children:(0,V.jsx)(y,{name:`bottom`,placeholder:`Lorem ipsum...`})})]})]})},Z.args={id:`modal-page`},Z.parameters={liveCodeEditor:{scope:{mockData:X}}},Q=[`Playground`,`FullscreenModalPage`,`ModalPageWithFilters`,`Sandbox`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{J as FullscreenModalPage,Y as ModalPageWithFilters,q as Playground,Z as Sandbox,Q as __namedExportsOrder,K as default};