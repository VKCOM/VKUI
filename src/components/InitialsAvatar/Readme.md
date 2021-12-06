Компонент для отображения текстовых аватаров на фоне градиента (например, когда у пользователя нет установленного изображения).
Для лучшего отображения, рекомендуется использовать длину текста <b>не более 2 символов</b>.

ВКонтакте использует формулу `user_id % 6 + 1` (см. функцию [`calcInitialsAvatarColor`](#/Utils)) для определения градиента пользователя. Например, у пользователя c id 106 будет 5-й (`l-blue`) цвет градиента.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}>
  {[16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96].map((size) => {
    const user = getRandomUser();
    return (
      <InitialsAvatar
        size={size}
        gradientColor={calcInitialsAvatarColor(user.id)}
      >
        {user.initials}
      </InitialsAvatar>
    );
  })}
</div>
```
