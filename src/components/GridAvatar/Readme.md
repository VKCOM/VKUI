Отображение нескольких аватаров в сетке от 1 до 4 элементов.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [badge, setBadge] = React.useState(false);
  const Icon = badge ? Icon20GiftCircleFillRed : undefined;

  return (
    <div>
      <div
        style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}
      >
        <GridAvatar badge={Icon} />
        <GridAvatar src={[getAvatarUrl("user_ji")]} badge={Icon} />
        <GridAvatar
          src={[getAvatarUrl("user_wayshev"), getAvatarUrl("user_mm")]}
          badge={Icon}
        />
        <GridAvatar
          src={[
            getAvatarUrl("user_arthurstam"),
            getAvatarUrl("user_xyz"),
            getAvatarUrl("user_ox"),
          ]}
          badge={Icon}
        />
        <GridAvatar
          src={[
            getAvatarUrl("user_ilyagrshn"),
            getAvatarUrl("user_tc"),
            getAvatarUrl("user_lihachyov"),
            getAvatarUrl("user_va"),
          ]}
          badge={Icon}
        />
      </div>
      <FormItem top="badge">
        <Checkbox checked={badge} onChange={(e) => setBadge(e.target.checked)}>
          badge (example, Icon20GiftCircleFillRed)
        </Checkbox>
      </FormItem>
    </div>
  );
};

<Example />;
```
