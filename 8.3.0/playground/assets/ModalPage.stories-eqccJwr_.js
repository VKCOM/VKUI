import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Tr as i,kn as a,l as o,n as s}from"./dist-Ddx9HyIL.js";import{i as c,u as l}from"./utils-T56Vt907.js";import{n as u,t as ee}from"./usePlatform-BjjJ-ijZ.js";import{i as d,t as te}from"./useAdaptivityConditionalRender-DFjv1b6U.js";import{n as f,t as p}from"./Button-DxjiUwvt.js";import{n as ne,t as re}from"./PanelHeaderButton-DU8kirMh.js";import{n as ie,t as ae}from"./HorizontalScroll-BNxSDs1V.js";import{n as oe,t as se}from"./ModalOutsideButton-DsxFUZL3.js";import{i as ce,n as le,r as m,t as h}from"./ModalPageHeader-BktTtgob.js";import{n as ue,t as de}from"./Spacing-2g6VSpcV.js";import{n as fe,t as pe}from"./Card-0RSdUeaq.js";import{n as g,t as me}from"./CardScroll-DDU1BWwV.js";import{n as _,t as v}from"./Header-CQj031La.js";import{n as he,t as y}from"./Group-LwNPJiLD.js";import{n as ge,t as _e}from"./Gradient-BYkgpAtm.js";import{n as ve,t as ye}from"./SimpleCell-BnYS7eov.js";import{n as be,t as xe}from"./CellButton-BDJ8iMaa.js";import{n as Se,t as b}from"./Avatar-DDgWFFzh.js";import{n as Ce,t as we}from"./HorizontalCell-B1dTww-t.js";import{n as Te,t as x}from"./Placeholder-B3WCn6mG.js";import{n as S,t as C}from"./FormItem-DNDkxS86.js";import{n as w,t as T}from"./Input-D9mLcf5V.js";import{n as E,t as D}from"./Textarea-BxPxIFEw.js";import{n as O,t as k}from"./Radio-DMzIaMaB.js";import{n as Ee,t as A}from"./Checkbox-DUMmMTez.js";import{n as De,t as j}from"./CustomSelect-NHnCij1Q.js";import{n as Oe,t as M}from"./SelectMimicry-C0S4Yp_W.js";import{n as ke,t as Ae}from"./DateInput-NNkaHB5g.js";import{n as N,t as P}from"./Div-Cd0q8MDi.js";import{n as je,t as Me}from"./PanelHeaderClose-DJ3tC-6E.js";import{n as Ne,t as Pe}from"./PanelHeaderSubmit-BbVJg-X7.js";import{n as Fe,t as F}from"./ModalPageFooter-DeKQyNKS.js";import{i as Ie,n as Le,t as Re}from"./constants-cjed6ZWB.js";import{n as ze,t as Be}from"./createStoryParameters-CMHckkzt.js";import{a as I,c as Ve,i as He,o as Ue,t as L}from"./mock-K9LjXOLX.js";function R({onClick:e}){return(0,H.jsx)(Pe,{onClick:e})}function z({className:e,onClick:t}){return(0,H.jsx)(Me,{className:e,onClick:t})}function B({className:e,onClick:t}){return(0,H.jsx)(re,{onClick:t,className:e,children:(0,H.jsx)(a,{})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{V=t(n(),1),s(),te(),ee(),c(),Ie(),Ue(),ze(),Se(),f(),fe(),g(),be(),Ee(),De(),ke(),N(),S(),ge(),he(),_(),Ce(),ie(),w(),oe(),Fe(),le(),ne(),je(),Ne(),Te(),O(),Oe(),ve(),ue(),E(),ce(),H=t(r(),1),{useCallback:U,useState:W}=__STORYBOOK_MODULE_PREVIEW_API__,G=He(),K=I(25),q={title:`Modals/ModalPage`,component:m,parameters:Be(`ModalPage`,Re,Le,{liveCodeEditor:{scope:{randomUser:G,users:K,DoneButton:R,AndroidCloseButton:z,IosCloseButton:B,ModalPageFooter:F,stopPropagation:l}}}),tags:[`Модальные окна`]},J=e=>{let[t,n]=V.useState(!0),r=()=>n(!1),i=u(),{viewWidth:a}=d(),[s,c]=W(!1),l=U(()=>c(!s),[s]);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,H.jsx)(m,{...e,open:t,dynamicContentHeight:!0,header:(0,H.jsx)(h,{before:a.smallTabletMinus&&i===`android`&&(0,H.jsx)(z,{className:a.smallTabletMinus.className,onClick:r}),after:a.smallTabletMinus&&i===`ios`&&(0,H.jsx)(B,{className:a.smallTabletMinus.className,onClick:r}),children:`Dynamic modal`}),onClose:()=>n(!1),children:(0,H.jsxs)(y,{children:[(0,H.jsx)(xe,{onClick:l,children:s?`collapse`:`expand`}),s&&(0,H.jsx)(x,{icon:(0,H.jsx)(o,{})})]})})]})},J.args={id:`modal-page`,open:!0},Y=e=>{let[t,n]=V.useState(!0),r=()=>n(!1),i=u(),{viewWidth:a}=d();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,H.jsxs)(m,{...e,open:t,settlingHeight:100,hideCloseButton:i===`ios`,header:(0,H.jsxs)(h,{before:a.smallTabletMinus&&i===`android`&&(0,H.jsx)(z,{className:a.smallTabletMinus.className,onClick:r}),after:i===`ios`&&(0,H.jsx)(B,{onClick:r}),children:[`@`,G.screen_name]}),onClose:()=>n(!1),children:[(0,H.jsx)(_e,{mode:`tint`,children:(0,H.jsx)(x,{icon:(0,H.jsx)(b,{size:96,src:G.photo_100}),title:G.first_name+` `+G.last_name})}),(0,H.jsx)(y,{header:(0,H.jsx)(v,{indicator:`25`,children:`Друзья`}),children:K.map(e=>(0,H.jsx)(ye,{before:(0,H.jsx)(b,{src:e.photo_100}),children:e.name},e.id))})]})]})},Y.args={id:`modal-page`,open:!0},X=e=>{let[t,n]=V.useState(!0),r=()=>n(!1),[i,a]=W(new Date(1901,0,1)),{viewWidth:o}=d();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p,{appearance:`overlay`,onClick:()=>n(!0),children:`Открыть`}),(0,H.jsxs)(m,{...e,open:t,header:(0,H.jsx)(h,{before:o.smallTabletMinus&&(0,H.jsx)(z,{className:o.smallTabletMinus.className,onClick:r}),after:(0,H.jsx)(R,{onClick:r}),children:`Фильтры`}),onClose:()=>n(!1),children:[(0,H.jsxs)(y,{children:[(0,H.jsx)(C,{top:`Страна`,children:(0,H.jsx)(M,{placeholder:`Выбрать страну`})}),(0,H.jsx)(C,{top:`Город`,children:(0,H.jsx)(M,{placeholder:`Выбрать город`,disabled:!0})})]}),(0,H.jsx)(y,{children:(0,H.jsxs)(C,{top:`Пол`,children:[(0,H.jsx)(k,{name:`sex`,value:0,defaultChecked:!0,children:`Любой`}),(0,H.jsx)(k,{name:`sex`,value:1,children:`Мужской`}),(0,H.jsx)(k,{name:`sex`,value:2,children:`Женский`})]})}),(0,H.jsxs)(y,{children:[(0,H.jsx)(C,{top:`Школа`,children:(0,H.jsx)(M,{placeholder:`Выбрать школу`,disabled:!0})}),(0,H.jsx)(C,{top:`Университет`,children:(0,H.jsx)(M,{placeholder:`Выбрать университет`,disabled:!0})})]}),(0,H.jsx)(y,{children:(0,H.jsxs)(C,{top:`Дополнительно`,children:[(0,H.jsx)(A,{children:`С фотографией`}),(0,H.jsx)(A,{children:`Сейчас на сайте`})]})}),(0,H.jsxs)(y,{children:[(0,H.jsx)(C,{top:`Работа`,children:(0,H.jsx)(T,{placeholder:`Место работы`})}),(0,H.jsx)(C,{children:(0,H.jsx)(T,{placeholder:`Должность`})}),(0,H.jsx)(C,{top:`Дата рождения`,children:(0,H.jsx)(Ae,{value:i,onChange:a,minDateTime:new Date(1901,0,1),maxDateTime:new Date(2006,0,1)})})]})]})]})},X.args={id:`modal-page`},Z=I(30),Q=e=>{let t=u(),{viewWidth:n}=d(),[r,a]=V.useState(!0),o=e=>{console.log(`reason`,e),a(!1)};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p,{appearance:`overlay`,onClick:()=>a(!0),children:`Открыть`}),(0,H.jsxs)(m,{id:`test`,...e,open:r,header:(0,H.jsx)(h,{before:n.smallTabletMinus&&t===`android`&&(0,H.jsx)(z,{className:n.smallTabletMinus.className,onClick:()=>o(`close-custom`)}),after:n.smallTabletMinus&&t===`ios`&&(0,H.jsx)(B,{className:n.smallTabletMinus.className,onClick:()=>o(`close-custom`)}),children:`Sandbox`}),footer:(0,H.jsx)(F,{children:(0,H.jsx)(T,{name:`footer`,type:`text`,placeholder:`Lorem ipsum...`})}),outsideButtons:(0,H.jsx)(se,{"aria-label":`More`,onClick:()=>console.log(`outside button click`),children:(0,H.jsx)(i,{})}),onClose:o,children:[(0,H.jsx)(C,{label:`top`,top:`Вертикальный скролл не должен блокироваться`,children:(0,H.jsx)(D,{name:`top`,placeholder:`Lorem ipsum...`,defaultValue:Ve(`Lorem ipsum`,100),maxHeight:110})}),(0,H.jsx)(P,{children:(0,H.jsxs)(P,{style:{paddingBlock:24,borderRadius:12,border:`1px dashed tomato`},onTouchStart:l,onMouseDown:l,children:[(0,H.jsx)(`code`,{children:`event.stopPropagation()`}),` на `,(0,H.jsx)(`code`,{children:`onTouchStart`}),`/`,(0,H.jsx)(`code`,{children:`onMouseDown`}),` должен блокировать жесты вызывающие сворачивание/разворачивание панели`]})}),(0,H.jsxs)(y,{header:(0,H.jsx)(v,{size:`m`,multiline:!0,children:`Горизонтальный скролл не должен блокироваться`}),children:[(0,H.jsx)(ae,{children:(0,H.jsx)(`div`,{style:{display:`flex`},children:Z.map(e=>(0,H.jsx)(we,{title:e.first_name,children:(0,H.jsx)(b,{size:56,src:e.photo_200})},e.id))})}),(0,H.jsx)(de,{size:`m`}),(0,H.jsx)(me,{padding:!0,children:Z.map((e,t)=>(0,H.jsx)(pe,{children:(0,H.jsx)(`div`,{style:{height:96}})},t))})]}),(0,H.jsx)(C,{top:`Плавающий элемент в пределах панели`,bottom:(0,H.jsxs)(H.Fragment,{children:[`Если `,(0,H.jsx)(`code`,{children:`scrollTop`}),` в плавающем элементе и в `,(0,H.jsx)(`code`,{children:`ModalPageContent`}),` `,`будет равен `,(0,H.jsx)(`b`,{children:`0`}),`, то панель будет считать, что её можно тянуть вниз для сворачивания`]}),children:(0,H.jsx)(j,{options:L,placeholder:`forceDropdownPortal={false}`,forceDropdownPortal:!1})}),(0,H.jsx)(C,{top:`Плавающий элемент за пределами панели`,bottom:`Панель не отвечает за закрытие плавающего окна, если та вышла за пределы во время скролла или сворачивания/разворачивания`,children:(0,H.jsx)(j,{options:L,placeholder:`forceDropdownPortal={true}`,forceDropdownPortal:!0})}),(0,H.jsx)(C,{top:(0,H.jsxs)(H.Fragment,{children:[`Текстовое поле в конце `,(0,H.jsx)(`code`,{children:`ModaPageContent`})]}),label:`bottom`,children:(0,H.jsx)(T,{name:`bottom`,placeholder:`Lorem ipsum...`})})]})]})},Q.args={id:`modal-page`},Q.parameters={liveCodeEditor:{scope:{mockData:Z}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
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
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(props: ModalPageProps) => {
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
          </ModalPageHeader>} footer={<ModalPageFooter>
            <Input name="footer" type="text" placeholder="Lorem ipsum..." />
          </ModalPageFooter>} outsideButtons={<ModalOutsideButton aria-label="More" onClick={() => console.log('outside button click')}>
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
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`FullscreenModalPage`,`ModalPageWithFilters`,`Sandbox`]}))();export{Y as FullscreenModalPage,X as ModalPageWithFilters,J as Playground,Q as Sandbox,$ as __namedExportsOrder,q as default};