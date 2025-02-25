Позволяет переопределить направление контента для определенной части приложения

> ⚠️ Всегда добавляйте атрибут `dir` к корневому элементу внутри `DirectionProvider`. Это необходимо для корректной работы логических CSS-свойств.
>
> Без указания атрибута `dir` браузер не сможет правильно интерпретировать логические свойства, что приведет к некорректному отображению вёрстки.

## Пример использования

```jsx static
function MyContent() {
  const direction = useDirection();

  return (
    <div dir={direction}>
      <p>Контент с {direction === 'rtl' ? 'RTL' : 'LTR'} направлением</p>
      <div style={{ marginInlineStart: '16px' }}>Отступ слева для LTR и справа для RTL</div>
    </div>
  );
}

function App() {
  return (
    <DirectionProvider value="rtl">
      <MyContent />
    </DirectionProvider>
  );
}
```
