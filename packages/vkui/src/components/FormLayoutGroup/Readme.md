Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по вертикали или
по горизонтали.

## Цифровая доступность (a11y)

- В компоненте используется тэг `fieldset`, что позволяет скринридеру автоматически определить роль `group`.
- Рекомендуется предавать в компонент атрибуты `aria-labelledby`, `aria-label` и `aria-describedby` для предоставления
  дополнительной информации об элементе

### Сегментированный дизайн, где лейблы визуально лежат в плейсхолдерах инпутов

Если по дизайну требуется использовать сегментированный режим `segmented`, где все поля слиты вместе и отделяются вертикальным разделителем, при этом над полями нету текста (лэйблов), то есть нельзя использовать свойства `htmlFor` и `top` у [FormItem](#!/FormItem) для связывания инпутов и лэйблов, то стоит добавить скрытые лэйблы, используя сервисный компонент [VisuallyHidden](#!/VisuallyHidden) и связать их с инпутами через `id` и `htmlFor` дублируя текст плейсхолдера.
Живой пример ниже.

```jsx static
<FormLayoutGroup mode="horizontal" segmented>
  <FormItem>
    <VisuallyHidden Component="label" htmlFor="nickname-id">
      Никнейм или имя
    </VisuallyHidden>
    <Input id="nickname-id" placeholder="Никнейм или имя" />
  </FormItem>
  <FormItem>
    <VisuallyHidden Component="label" htmlFor='dateinput-id'>
      Дата или диапазон
    </VisuallyHidden>
    <DateInput
      id="dateinput-id"
      {/* специальное свойство, позволяющее отрисовать плейсхолдер у DateInput */}
      renderCustomValue={(date: Date | undefined) =>
        date ? undefined : (
          <span aria-hidden style={{ color: 'var(--vkui--color_text_secondary)' }}>
            Дата или диапазон
          </span>
        )
      }
    />
  </FormItem>
</FormLayoutGroup>
```

```jsx
const Example = () => {
  const [showDates, setShowDates] = useState(true);
  const toggleDates = (value) => {
    setShowDates(value);
  };

  return (
    <View activePanel="FormLayoutGroup">
      <Panel id="FormLayoutGroup">
        <PanelHeader>FormLayoutGroup</PanelHeader>
        <Group>
          <FormLayoutGroup>
            <FormLayoutGroup mode="vertical">
              <FormItem htmlFor="name" top="Имя">
                <Input id="name" />
              </FormItem>
              <FormItem htmlFor="lastName" top="Фамилия">
                <Input id="lastName" />
              </FormItem>
            </FormLayoutGroup>

            <FormLayoutGroup mode="horizontal" segmented>
              <FormItem htmlFor="email" top="Имя ящика">
                <Input id="email" />
              </FormItem>
              <FormItem>
                <Select
                  options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map(
                    (i) => ({
                      label: i,
                      value: i,
                    }),
                  )}
                  defaultValue={'@mail.ru'}
                />
              </FormItem>
            </FormLayoutGroup>

            <FormLayoutGroup mode="vertical" segmented>
              <FormItem htmlFor="doctype" top="Документ, удостоверяющий личность">
                <Select
                  id="doctype"
                  options={['Паспорт гражданина РФ', 'Загранпаспорт'].map((i) => ({
                    label: i,
                    value: i,
                  }))}
                  defaultValue={'Загранпаспорт'}
                />
              </FormItem>
              <FormItem htmlFor="docnumber" bottom="Номер документа">
                <Input id="docnumber" />
              </FormItem>
            </FormLayoutGroup>

            {!showDates ? (
              <CellButton onClick={() => toggleDates(true)}>Указать даты поездки</CellButton>
            ) : (
              <FormLayoutGroup mode="horizontal" removable onRemove={() => toggleDates(false)}>
                <FormItem top="Дата начала поездки" htmlFor="start">
                  <Input id="start" />
                </FormItem>
                <FormItem top="Дата конца поездки" htmlFor="end">
                  <Input id="end" />
                </FormItem>
              </FormLayoutGroup>
            )}
          </FormLayoutGroup>
        </Group>
        <Group
          header={
            <Header>Сегментированный режим с лейблами, визуально лежащими в плейсхолдерах</Header>
          }
        >
          <FormLayoutGroup mode="horizontal" segmented>
            <FormItem>
              <VisuallyHidden Component="label" htmlFor="nickname-id">
                Никнейм или имя
              </VisuallyHidden>
              <Input id="nickname-id" placeholder="Никнейм или имя" />
            </FormItem>
            <FormItem>
              <VisuallyHidden Component="label" htmlFor="dateinput-id">
                Дата или диапазон
              </VisuallyHidden>
              <DateInput
                id="dateinput-id"
                // специальное свойство, позволяющее отрисовать плейсхолдер у DateInput
                renderCustomValue={(date) =>
                  date ? undefined : (
                    <span aria-hidden style={{ color: 'var(--vkui--color_text_secondary)' }}>
                      Дата или диапазон
                    </span>
                  )
                }
              />
            </FormItem>
          </FormLayoutGroup>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
