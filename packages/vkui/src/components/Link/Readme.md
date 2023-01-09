Надстройка над `<a />`. Компонент принимает все валидные для этого элемента свойства.

Все типографические свойства наследуются от родителя, а именно:

- семейство шрифта
- размер шрифта
- межстрочное расстояние
- межбуквенное расстояние
- вес шрифта

```jsx { "props": { "layout": false, "iframe": false } }
<div
  style={{
    padding: 24,
  }}
>
  <Link href="#/About">О VKUI</Link>

  <Spacing size={24} />

  <Link href="https://google.com" target="_blank">
    https://google.com <Icon24ExternalLinkOutline width={16} height={16} />
  </Link>

  <Spacing size={24} />

  <div style={{ width: 304 }}>
    Нажимая «Продолжить», вы принимаете <Link href="#">пользовательское соглашение</Link> и{' '}
    <Link href="#">политику конфиденциальности</Link>.
  </div>

  <Spacing size={24} />

  <Link href="#/Link" hasVisited>
    Если посетить эту ссылку, то она будет использовать состояние
    <code>visited</code>
  </Link>
</div>
```
