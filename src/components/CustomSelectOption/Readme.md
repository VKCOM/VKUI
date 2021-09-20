Унивирсальный компонент для отрисовки option в кастомных селектах. 
Используется внутри [CustomSelect](#!/CustomSelect), [ChipsSelect](#!/ChipsSelect).

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ margin: 50, width: 320, background: 'var(--background_page)' }}>
  <CustomSelectOption style={{ background: 'var(--background_content)' }}>Дмитрий Безуглый</CustomSelectOption>
  <Header>description</Header>
  <CustomSelectOption style={{ background: 'var(--background_content)' }} description="Россия, Санкт-Петербург">Вадим Дорохов</CustomSelectOption>
  <Header>before</Header>
  <CustomSelectOption style={{ background: 'var(--background_content)' }} before={<Avatar size={20} />}>Иван Барышев</CustomSelectOption>
  <Header>selected</Header>
  <CustomSelectOption style={{ background: 'var(--background_content)' }} selected>Владимир Клепов</CustomSelectOption>
  <Header>hovered</Header>
  <CustomSelectOption hovered>Игорь Федоров</CustomSelectOption>
</div>
```
