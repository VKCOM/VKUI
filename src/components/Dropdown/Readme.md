```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [clickTarget, setClickTarget] = useState(null);

  return (
    <div>
      <Button getRootRef={setClickTarget} style={{ margin: 100 }}>Click</Button>
      <ClickDropdown targetNode={clickTarget}>Dropdown</ClickDropdown>  
    </div>
  )
}
<Example />
```
