```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Title level="1" style={{ marginBottom: 16 }}>
    Title 1
  </Title>
  <Title level="2" style={{ marginBottom: 16 }}>
    Title 2
  </Title>
  <Title level="3">Title 3</Title>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

```jsx { "props": { "layout": false, "iframe": false } }
const App = () => {
  return (
    <AppearanceProvider value="dark">
      <div
        style={{
          backgroundColor: 'var(--vkui--color_background_content)',
          width: '300px',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <Text>Text </Text>
        <Title>Title</Title>
        <Headline>Headline</Headline>
        <Paragraph>Paragraph</Paragraph>
        <Subhead>Subhead</Subhead>
        <Footnote>Footnote</Footnote>
        <Caption>Caption</Caption>
        <Button>Button</Button>
      </div>
    </AppearanceProvider>
  );
};

<App />;
```
