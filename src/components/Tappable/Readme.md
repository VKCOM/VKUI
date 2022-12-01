Компонент реализует базовое поведение при наведениях и нажатиях, а именно задаёт:

- вид курсора
- цвет фона в зависимости от состояния
- ripple-эффект при нажатии, если это платформа `ANDROID`

Используется внутри всех контролов. Например, [Button](https://vkcom.github.io/VKUI/#/Button), [Cell](https://vkcom.github.io/VKUI/#/Cell), [ActionSheetItem](https://vkcom.github.io/VKUI/#/ActionSheetItem) и т.п.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  return (
    <div style={gaps}>
      <Tappable
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
      <ConfigProvider platform="android">
        <AdaptivityProvider hasPointer={false}>
          <Tappable activeMode="background" hasActive>
            <Text style={gaps}>Нажми на меня</Text>
          </Tappable>
        </AdaptivityProvider>
      </ConfigProvider>
    </div>
  );
};

const gaps = {
  padding: 16,
};

<Example />;
```
