Элемент [Tabbar](#!/Tabbar). В качестве `children` рекомендуется использовать [иконку](https://vkcom.github.io/icons) 28 размера.

```jsx { "props": { "layout": false, "iframe": false } }
const [simple, setSimple] = useState("one");
const [text, setText] = useState("one");
const [horizontalText, setHorizontalText] = useState("one");
const [indicator, setIndicator] = useState("one");

<div
  style={{
    background: "var(--vkui--color_background)",
    padding: "10px 0",
  }}
>
  <div style={{ maxWidth: 768, margin: "auto" }}>
    <Tabbar style={{ position: "static", margin: "0 0 10px" }}>
      <TabbarItem selected={simple === "one"} onClick={() => setSimple("one")}>
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem selected={simple === "two"} onClick={() => setSimple("two")}>
        <Icon28UserCircleOutline />
      </TabbarItem>
    </Tabbar>

    <Tabbar style={{ position: "static", margin: "10px 0" }}>
      <TabbarItem
        selected={text === "one"}
        onClick={() => setText("one")}
        text="Новости"
      >
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem
        selected={text === "two"}
        onClick={() => setText("two")}
        text="Профиль"
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
      <TabbarItem
        selected={text === "three"}
        onClick={() => setText("three")}
        text="Мессенджер"
      >
        <Icon28MessageOutline />
      </TabbarItem>
    </Tabbar>

    <Tabbar mode="horizontal" style={{ position: "static", margin: "10px 0" }}>
      <TabbarItem
        selected={horizontalText === "one"}
        onClick={() => setHorizontalText("one")}
        text="Новости"
      >
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem
        selected={horizontalText === "two"}
        onClick={() => setHorizontalText("two")}
        text="Профиль"
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
      <TabbarItem
        selected={horizontalText === "three"}
        onClick={() => setHorizontalText("three")}
        text="Мессенджер"
      >
        <Icon28MessageOutline />
      </TabbarItem>
    </Tabbar>

    <Tabbar style={{ position: "static", margin: "10px 0 0" }}>
      <TabbarItem
        selected={indicator === "one"}
        onClick={() => setIndicator("one")}
        indicator={<Badge mode="prominent" />}
        text="Новости"
      >
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem
        selected={indicator === "two"}
        onClick={() => setIndicator("two")}
        text="Профиль"
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
      <TabbarItem
        selected={indicator === "three"}
        onClick={() => setIndicator("three")}
        text="Мессенджер"
        indicator={
          <Counter size="s" mode="prominent">
            3
          </Counter>
        }
      >
        <Icon28MessageOutline />
      </TabbarItem>
    </Tabbar>
  </div>
</div>;
```
