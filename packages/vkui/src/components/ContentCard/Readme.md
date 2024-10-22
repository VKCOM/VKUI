Компонент на базе [Card](/#/Card). Принимает все валидные свойства для `img` и `Tappable`.

Внутри распределяет переданные свойства между своими компонентами следующим образом:

- корневой компонент `Card`
  - `mode`,
  - `getRootRef`,
  - `style`,
  - `className`,
  - `img`,
  - `getRef`,
  - `src`,
  - `srcSet`,
  - `alt`,
  - `width`,
  - `height`,
  - `maxHeight`,
  - `crossOrigin`,
  - `decoding`,
  - `loading`,
  - `referrerPolicy`,
  - `sizes`,
  - `useMap`,
- внутренний `Tappable` получает все остальные свойства (кроме `subhead`, `header`, `text` и `caption`).

## Цифровая доступность (a11y)

- По умолчанию используется тег `"li"` для повышения доступности компонента. Вы можете прокинуть необходимый вам тег через prop `Component`.
  Ссылки на источники: [статья про доступность карточек](https://inclusive-components.design/cards/).
- Вы также можете переопределить тэг для отображения заголовка с помощью параметра `titleComponent`. По умолчанию используется `"span"`
- При использовании картинки в компоненте, не забывайте про альтернативный текст для нее. Вы можете прокинуть его с помощью параметра `alt`

```jsx
const Example = () => {
  return (
    <View activePanel="profile" id="profile">
      <Panel id="profile">
        <PanelHeader>ContentCardExample</PanelHeader>
        <Group>
          <CardGrid size="l">
            <ContentCard
              overTitle="VKUI"
              title="ContentCard example"
              caption="VKUI Styleguide > Blocks > ContentCard"
            />
            <ContentCard
              overTitle="VKUI"
              title="ContentCard example"
              caption="VKUI Styleguide > Blocks > ContentCard"
              mode="tint"
            />
            <ContentCard
              onClick={() => {}}
              src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
              alt="Picture of brown and gray mountains under blue sky during daytime photo"
              overTitle="unsplash"
              title="brown and gray mountains under blue sky during daytime photo"
              description="Mountain changji"
              caption="Photo by Siyuan on Unsplash"
              maxHeight={150}
            />
            <ContentCard
              src="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="Picture of person's left hand with pink paint"
              overTitle="unsplash"
              title="Person's left hand with pink paint"
              description="Five hours of makeup and paint to achieve the human anatomy photoshoot. Thank you Steph and Shay. See more and official credit on @jawfox.photography."
              caption="Photo by Alexander Jawfox on Unsplash"
              maxHeight={500}
            />
          </CardGrid>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
