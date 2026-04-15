import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{Vt as n,gt as r,n as i,o as a}from"./dist-JE-Gteso.js";import{i as o,u as s}from"./utils-BAaTzY9s.js";import{n as c,t as l}from"./usePlatform-BWVnZ007.js";import{r as u,t as ee}from"./useAdaptivityConditionalRender-C3SayIbs.js";import{n as te,t as ne}from"./Button-DwhufhYP.js";import{n as re,t as ie}from"./PanelHeaderButton-DJuEJWlD.js";import{n as ae,t as d}from"./HorizontalScroll-DatKoPXJ.js";import{n as f,t as oe}from"./ModalOutsideButton-UeL4e5qu.js";import{i as se,n as p,r as m,t as h}from"./ModalPageHeader-CMTGKPHI.js";import{n as ce,t as le}from"./Spacing-DRif2Bik.js";import{n as ue,t as de}from"./Card-B4W-Oy2x.js";import{n as fe,t as pe}from"./CardScroll-CKjTvq3b.js";import{n as me,t as g}from"./Header-Cxx7JD2_.js";import{n as _,t as v}from"./Group-iqbU7m06.js";import{n as he,t as ge}from"./Gradient-CEAv0u22.js";import{n as _e,t as ve}from"./SimpleCell-DV0Wx3tu.js";import{n as ye,t as be}from"./CellButton-DW6yjeLQ.js";import{n as xe,t as y}from"./Avatar-DDrJjOMS.js";import{n as Se,t as Ce}from"./HorizontalCell-ivPwWfez.js";import{n as b,t as x}from"./Placeholder-L7aC_pzR.js";import{n as S,t as C}from"./FormItem-sbT2gAR3.js";import{n as w,t as T}from"./Input-D0DJqmeY.js";import{n as E,t as D}from"./Textarea-CQgd6EVW.js";import{n as O,t as k}from"./Radio-D2wr_F9V.js";import{n as A,t as j}from"./Checkbox-Cddoms87.js";import{n as we,t as M}from"./CustomSelect-ZHOlNZ1m.js";import{n as Te,t as N}from"./SelectMimicry-D21C8V_I.js";import{n as Ee,t as De}from"./DateInput-nS1jzpGL.js";import{n as Oe,t as P}from"./Div-DkSA0ZW5.js";import{n as ke,t as Ae}from"./PanelHeaderClose-Duo206JY.js";import{n as F,t as je}from"./PanelHeaderSubmit-DgEfobOE.js";import{n as Me,t as Ne}from"./ModalPageFooter-Dxcme0K9.js";import{i as Pe,n as Fe,t as Ie}from"./constants-Dj6vOzIh.js";import{n as Le,t as Re}from"./createStoryParameters-pz1UrWMe.js";import{a as I,i as ze,o as Be,s as Ve,t as L}from"./mock-D9mwry-3.js";var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{i(),ee(),l(),o(),Pe(),Be(),Le(),xe(),te(),ue(),fe(),ye(),A(),we(),Ee(),Oe(),S(),he(),_(),me(),Se(),ae(),w(),f(),Me(),p(),re(),ke(),F(),b(),O(),Te(),_e(),ce(),E(),se(),R=t(),{useArgs:z,useCallback:B,useState:V}=__STORYBOOK_MODULE_PREVIEW_API__,H={title:`Modals/ModalPage`,component:m,parameters:Re(`ModalPage`,Ie,Fe),decorators:function(e){let[,t]=z();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ne,{appearance:`overlay`,onClick:()=>t({open:!0}),children:`Открыть`}),(0,R.jsx)(e,{})]})},tags:[`Модальные окна`]},U=ze(),W=I(25),G=({onClick:e})=>(0,R.jsx)(je,{onClick:e}),K=({className:e,onClick:t})=>(0,R.jsx)(Ae,{className:e,onClick:t}),q=({className:e,onClick:t})=>(0,R.jsx)(ie,{onClick:t,className:e,children:(0,R.jsx)(r,{})}),J={args:{id:`modal-page`,open:!0},render:function(e){let[,t]=z(),n=()=>t({open:!1}),r=c(),{viewWidth:i}=u(),[o,s]=V(!1),l=B(()=>s(!o),[o]);return(0,R.jsx)(m,{...e,dynamicContentHeight:!0,header:(0,R.jsx)(h,{before:i.smallTabletMinus&&r===`android`&&(0,R.jsx)(K,{className:i.smallTabletMinus.className,onClick:n}),after:i.smallTabletMinus&&r===`ios`&&(0,R.jsx)(q,{className:i.smallTabletMinus.className,onClick:n}),children:`Dynamic modal`}),onClose:()=>t({open:!1}),children:(0,R.jsxs)(v,{children:[(0,R.jsx)(be,{onClick:l,children:o?`collapse`:`expand`}),o&&(0,R.jsx)(x,{icon:(0,R.jsx)(a,{})})]})})}},Y={args:{id:`modal-page`,open:!0},render:function(e){let[,t]=z(),n=()=>t({open:!1}),r=c(),{viewWidth:i}=u();return(0,R.jsxs)(m,{...e,settlingHeight:100,hideCloseButton:r===`ios`,header:(0,R.jsxs)(h,{before:i.smallTabletMinus&&r===`android`&&(0,R.jsx)(K,{className:i.smallTabletMinus.className,onClick:n}),after:r===`ios`&&(0,R.jsx)(q,{onClick:n}),children:[`@`,U.screen_name]}),onClose:()=>t({open:!1}),children:[(0,R.jsx)(ge,{mode:`tint`,children:(0,R.jsx)(x,{icon:(0,R.jsx)(y,{size:96,src:U.photo_100}),title:U.first_name+` `+U.last_name})}),(0,R.jsx)(v,{header:(0,R.jsx)(g,{indicator:`25`,children:`Друзья`}),children:W.map(e=>(0,R.jsx)(ve,{before:(0,R.jsx)(y,{src:e.photo_100}),children:e.name},e.id))})]})}},X={args:{id:`modal-page`,open:!0},render:function(e){let[,t]=z(),n=()=>t({open:!1}),[r,i]=V(new Date(1901,0,1)),{viewWidth:a}=u();return(0,R.jsxs)(m,{...e,header:(0,R.jsx)(h,{before:a.smallTabletMinus&&(0,R.jsx)(K,{className:a.smallTabletMinus.className,onClick:n}),after:(0,R.jsx)(G,{onClick:n}),children:`Фильтры`}),onClose:()=>t({open:!1}),children:[(0,R.jsxs)(v,{children:[(0,R.jsx)(C,{top:`Страна`,children:(0,R.jsx)(N,{placeholder:`Выбрать страну`})}),(0,R.jsx)(C,{top:`Город`,children:(0,R.jsx)(N,{placeholder:`Выбрать город`,disabled:!0})})]}),(0,R.jsx)(v,{children:(0,R.jsxs)(C,{top:`Пол`,children:[(0,R.jsx)(k,{name:`sex`,value:0,defaultChecked:!0,children:`Любой`}),(0,R.jsx)(k,{name:`sex`,value:1,children:`Мужской`}),(0,R.jsx)(k,{name:`sex`,value:2,children:`Женский`})]})}),(0,R.jsxs)(v,{children:[(0,R.jsx)(C,{top:`Школа`,children:(0,R.jsx)(N,{placeholder:`Выбрать школу`,disabled:!0})}),(0,R.jsx)(C,{top:`Университет`,children:(0,R.jsx)(N,{placeholder:`Выбрать университет`,disabled:!0})})]}),(0,R.jsx)(v,{children:(0,R.jsxs)(C,{top:`Дополнительно`,children:[(0,R.jsx)(j,{children:`С фотографией`}),(0,R.jsx)(j,{children:`Сейчас на сайте`})]})}),(0,R.jsxs)(v,{children:[(0,R.jsx)(C,{top:`Работа`,children:(0,R.jsx)(T,{placeholder:`Место работы`})}),(0,R.jsx)(C,{children:(0,R.jsx)(T,{placeholder:`Должность`})}),(0,R.jsx)(C,{top:`Дата рождения`,children:(0,R.jsx)(De,{value:r,onChange:i,minDateTime:new Date(1901,0,1),maxDateTime:new Date(2006,0,1)})})]})]})}},Z=I(30),Q={args:{id:`modal-page`,open:!0},render:function(e){let t=c(),{viewWidth:r}=u(),[,i]=z(),a=e=>{console.log(`reason`,e),i({open:!1})};return(0,R.jsxs)(m,{id:`test`,...e,header:(0,R.jsx)(h,{before:r.smallTabletMinus&&t===`android`&&(0,R.jsx)(K,{className:r.smallTabletMinus.className,onClick:()=>a(`close-custom`)}),after:r.smallTabletMinus&&t===`ios`&&(0,R.jsx)(q,{className:r.smallTabletMinus.className,onClick:()=>a(`close-custom`)}),children:`Sandbox`}),footer:(0,R.jsx)(Ne,{children:(0,R.jsx)(T,{name:`footer`,type:`text`,placeholder:`Lorem ipsum...`})}),outsideButtons:(0,R.jsx)(oe,{"aria-label":`More`,onClick:()=>console.log(`outside button click`),children:(0,R.jsx)(n,{})}),...e,onClose:a,children:[(0,R.jsx)(C,{label:`top`,top:`Вертикальный скролл не должен блокироваться`,children:(0,R.jsx)(D,{name:`top`,placeholder:`Lorem ipsum...`,defaultValue:Ve(`Lorem ipsum`,100),maxHeight:110})}),(0,R.jsx)(P,{children:(0,R.jsxs)(P,{style:{paddingBlock:24,borderRadius:12,border:`1px dashed tomato`},onTouchStart:s,onMouseDown:s,children:[(0,R.jsx)(`code`,{children:`event.stopPropagation()`}),` на `,(0,R.jsx)(`code`,{children:`onTouchStart`}),`/`,(0,R.jsx)(`code`,{children:`onMouseDown`}),` должен блокировать жесты вызывающие сворачивание/разворачивание панели`]})}),(0,R.jsxs)(v,{header:(0,R.jsx)(g,{size:`m`,multiline:!0,children:`Горизонтальный скролл не должен блокироваться`}),children:[(0,R.jsx)(d,{children:(0,R.jsx)(`div`,{style:{display:`flex`},children:Z.map(e=>(0,R.jsx)(Ce,{title:e.first_name,children:(0,R.jsx)(y,{size:56,src:e.photo_200})},e.id))})}),(0,R.jsx)(le,{size:`m`}),(0,R.jsx)(pe,{padding:!0,children:Z.map((e,t)=>(0,R.jsx)(de,{children:(0,R.jsx)(`div`,{style:{height:96}})},t))})]}),(0,R.jsx)(C,{top:`Плавающий элемент в пределах панели`,bottom:(0,R.jsxs)(R.Fragment,{children:[`Если `,(0,R.jsx)(`code`,{children:`scrollTop`}),` в плавающем элементе и в `,(0,R.jsx)(`code`,{children:`ModalPageContent`}),` `,`будет равен `,(0,R.jsx)(`b`,{children:`0`}),`, то панель будет считать, что её можно тянуть вниз для сворачивания`]}),children:(0,R.jsx)(M,{options:L,placeholder:`forceDropdownPortal={false}`,forceDropdownPortal:!1})}),(0,R.jsx)(C,{top:`Плавающий элемент за пределами панели`,bottom:`Панель не отвечает за закрытие плавающего окна, если та вышла за пределы во время скролла или сворачивания/разворачивания`,children:(0,R.jsx)(M,{options:L,placeholder:`forceDropdownPortal={true}`,forceDropdownPortal:!0})}),(0,R.jsx)(C,{top:(0,R.jsxs)(R.Fragment,{children:[`Текстовое поле в конце `,(0,R.jsx)(`code`,{children:`ModaPageContent`})]}),label:`bottom`,children:(0,R.jsx)(T,{name:`bottom`,placeholder:`Lorem ipsum...`})})]})}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-page',
    open: true
  },
  render: function Render(props) {
    const [, updateArgs] = useArgs();
    const close = () => updateArgs({
      open: false
    });
    const platform = usePlatform();
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    const [expanded, setExpanded] = useState(false);
    const toggle = useCallback(() => setExpanded(!expanded), [expanded]);
    return <ModalPage {...props} dynamicContentHeight header={<ModalPageHeader before={viewWidth.smallTabletMinus && platform === 'android' && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />} after={viewWidth.smallTabletMinus && platform === 'ios' && <IosCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />}>
            Dynamic modal
          </ModalPageHeader>} onClose={() => updateArgs({
      open: false
    })}>
        <Group>
          <CellButton onClick={toggle}>{expanded ? 'collapse' : 'expand'}</CellButton>
          {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
        </Group>
      </ModalPage>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-page',
    open: true
  },
  render: function Render(props) {
    const [, updateArgs] = useArgs();
    const close = () => updateArgs({
      open: false
    });
    const platform = usePlatform();
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    return <ModalPage {...props} settlingHeight={100} hideCloseButton={platform === 'ios'} header={<ModalPageHeader before={viewWidth.smallTabletMinus && platform === 'android' && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />} after={platform === 'ios' && <IosCloseButton onClick={close} />}>
            @{randomUser.screen_name}
          </ModalPageHeader>} onClose={() => updateArgs({
      open: false
    })}>
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
      </ModalPage>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-page',
    open: true
  },
  render: function Render(props) {
    const [, updateArgs] = useArgs();
    const close = () => updateArgs({
      open: false
    });
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date(1901, 0, 1));
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    return <ModalPage {...props} header={<ModalPageHeader before={viewWidth.smallTabletMinus && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={close} />} after={<DoneButton onClick={close} />}>
            Фильтры
          </ModalPageHeader>} onClose={() => updateArgs({
      open: false
    })}>
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
      </ModalPage>;
  }
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'modal-page',
    open: true
  },
  render: function Render(props) {
    const platform = usePlatform();
    const {
      viewWidth
    } = useAdaptivityConditionalRender();
    const [, updateArgs] = useArgs();
    const handleModalClose = (reason: 'close-custom' | ModalPageCloseReason) => {
      console.log('reason', reason);
      updateArgs({
        open: false
      });
    };
    return <ModalPage id="test" {...props} header={<ModalPageHeader before={viewWidth.smallTabletMinus && platform === 'android' && <AndroidCloseButton className={viewWidth.smallTabletMinus.className} onClick={() => handleModalClose('close-custom')} />} after={viewWidth.smallTabletMinus && platform === 'ios' && <IosCloseButton className={viewWidth.smallTabletMinus.className} onClick={() => handleModalClose('close-custom')} />}>
            Sandbox
          </ModalPageHeader>} footer={<ModalPageFooter>
            <Input name="footer" type="text" placeholder="Lorem ipsum..." />
          </ModalPageFooter>} outsideButtons={<ModalOutsideButton aria-label="More" onClick={() => console.log('outside button click')}>
            <Icon20More />
          </ModalOutsideButton>} {...props} onClose={handleModalClose}>
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
      </ModalPage>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`FullscreenModalPage`,`ModalPageWithFilters`,`Sandbox`]}))();export{Y as FullscreenModalPage,X as ModalPageWithFilters,J as Playground,Q as Sandbox,$ as __namedExportsOrder,H as default};