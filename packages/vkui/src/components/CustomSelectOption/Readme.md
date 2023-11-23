Универсальный компонент для отрисовки `option` в `CustomSelect`
Используется внутри [CustomSelect](#!/CustomSelect), [ChipsSelect](#!/ChipsSelect).

```jsx { "props": { "layout": false, "iframe": false } }
const frameStyles = { outline: '1px dashed tomato' };

const Example = () => {
  return (
    <div style={{ margin: 50, width: 320 }}>
      <CustomSelectOption style={frameStyles}>Дмитрий Безуглый</CustomSelectOption>
      <Header>description</Header>
      <CustomSelectOption style={frameStyles} description="Россия, Санкт-Петербург">
        Вадим Дорохов
      </CustomSelectOption>
      <Header>before</Header>
      <CustomSelectOption style={frameStyles} before={<Avatar size={20} />}>
        Иван Барышев
      </CustomSelectOption>
      <Header>after</Header>
      <CustomSelectOption style={frameStyles} after={<Avatar size={20} />}>
        Иван Барышев
      </CustomSelectOption>
      <Header>selected</Header>
      <CustomSelectOption style={frameStyles} selected>
        Владимир Клепов
      </CustomSelectOption>
      <Header>hovered</Header>
      <CustomSelectOption style={frameStyles} hovered>
        Игорь Федоров
      </CustomSelectOption>
      <Header>hierarchy</Header>
      <CustomSelectOption style={frameStyles}>Диск</CustomSelectOption>
      <CustomSelectOption hierarchy={1} style={frameStyles}>
        Папка
      </CustomSelectOption>
      <CustomSelectOption hierarchy={2} style={frameStyles}>
        Файл 1
      </CustomSelectOption>
      <CustomSelectOption hierarchy={2} style={frameStyles}>
        Файл 2
      </CustomSelectOption>
    </div>
  );
};

<Example />;
```
