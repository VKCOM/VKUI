Простой компонент-обертка, позволяющий отрисовать разные иконки для regular/compact режимов.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  return (
    <Div>
      <AdaptivityProvider sizeY="regular">
        <Text>Icon size 28</Text>
        <AdaptiveIconRenderer IconCompact={Icon24SmileOutline} IconRegular={Icon28SmileOutline} />
      </AdaptivityProvider>
      <AdaptivityProvider sizeY="compact">
        <Text>Icon size 24</Text>
        <AdaptiveIconRenderer IconCompact={Icon24SmileOutline} IconRegular={Icon28SmileOutline} />
      </AdaptivityProvider>
    </Div>
  );
};

<Example />;
```
