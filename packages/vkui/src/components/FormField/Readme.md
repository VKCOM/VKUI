Компонент-оболочка для элементов форм ([`Input`](#/Input), [`Select`](#/Select), [`Textarea`](#/Textarea) и другие).

```jsx
const Example = () => {
  return (
    <FormItem>
      <FormField>
        <CustomInput />
      </FormField>
    </FormItem>
  );
};

const CustomInput = () => {
  const style = {
    // for presentation purposes only
    position: 'relative',
    display: 'block',
    width: '100%',
    margin: 0,
    paddingRight: 12,
    paddingLeft: 12,
    fontSize: 16,
    lineHeight: '20px',
    textOverflow: 'ellipsis',
    color: '#000',
    border: 'none',
    background: 'transparent',
  };

  return (
    <input
      type="text"
      style={style}
      placeholder="Кастомный инпут"
      aria-label="Напишите сообщение..."
    />
  );
};

<Example />;
```
