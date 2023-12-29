Компонент реализует базовое поведение при наведениях и нажатиях, а именно задаёт:

- вид курсора
- цвет фона в зависимости от состояния
- <a href="{{anchor}}">ripple-эффект</a> при нажатии, если это платформа `ANDROID`

Используется внутри всех контролов. Например, [`Button`](#/Button), [`Cell`](#/Cell), [`ActionSheetItem`](#/ActionSheetItem) и т.п.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  return (
    <div style={gaps}>
      <Tappable
        onClick={console.log}
        // поиграйся с моими параметрами :) доступный список параметров см. в конце страницы
      >
        <Text style={gaps}>Наведи и нажми на меня</Text>
      </Tappable>
    </div>
  );
};

const gaps = {
  padding: 16,
};

<Example />;
```

## Ripple-эффект

В данном примере зашиты все условия для его включения (см. редактируемый код)

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  return (
    <div style={gaps}>
      <PlatformProvider value="android">
        <AdaptivityProvider hasPointer={false}>
          <Tappable onClick={console.log} activeMode="background" hasActive>
            <Text style={gaps}>Нажми на меня</Text>
          </Tappable>
        </AdaptivityProvider>
      </PlatformProvider>
    </div>
  );
};

const gaps = {
  padding: 16,
};

<Example />;
```
