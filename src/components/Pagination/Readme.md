Чаще всего используется в больших списках или таблицах, для более понятного структурирования и деления информации.

По умолчанию многоточие показывается когда кол-во страниц `> 7`. Чтобы повлиять на это поведение, существуют параметры `siblingCount` и `boundaryCount`.
К примеру, если выставить `siblingCount={0}` или `boundaryCount={0}`, то многоточие появится уже при `> 5`.
Если выставить и `siblingCount={0}`, и `boundaryCount={0}`, то `> 4`.

> При ширине `< 380px` рекомендуется отключать `siblingCount` передав в него значение `0`.

## `usePagination`

Для полной кастомизации можно использовать хук `usePagination()`. Возвращает массив типа `[1, 2, 3, 4, 5, 'end-ellipsis', 8]`. Принимает почти те же параметры, что и `Pagination`.

```jsx { "props": { "layout": false, "adaptivity": true, "iframe": false } }
const Example = () => {
  const [sizeY, setSizeY] = useState('compact');
  const [currentPage, setCurrentPage] = useState(1);
  const [siblingCount, setSiblingCount] = useState(0);
  const [boundaryCount, setBoundaryCount] = useState(1);
  const [totalPages, setTotalPages] = useState(123);
  const [disabled, setDisabled] = useState(false);

  const handleChange = React.useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div style={rootContainerStyles}>
      <AdaptivityProvider sizeY={sizeY}>
        <div style={demoContainerStyles}>
          <Pagination
            currentPage={currentPage}
            siblingCount={siblingCount}
            boundaryCount={boundaryCount}
            totalPages={totalPages}
            disabled={disabled}
            onChange={handleChange}
          />
        </div>
      </AdaptivityProvider>
      <div style={propsContainerStyles}>
        <FormItem top="sizeY">
          <Select
            value={sizeY}
            onChange={(e) => setSizeY(e.target.value)}
            options={[
              { label: 'compact', value: 'compact' },
              { label: 'regular', value: 'regular' },
            ]}
          />
        </FormItem>
        <FormItem top="prop[currentPage]">
          <Input
            type="number"
            value={currentPage}
            onChange={({ target: { value } }) => setCurrentPage(Number(value))}
          />
        </FormItem>
        <FormItem top="prop[siblingCount]">
          <Input
            type="number"
            value={siblingCount}
            onChange={({ target: { value } }) => setSiblingCount(Number(value))}
          />
        </FormItem>
        <FormItem top="prop[boundaryCount]">
          <Input
            type="number"
            value={boundaryCount}
            onChange={({ target: { value } }) => setBoundaryCount(Number(value))}
          />
        </FormItem>
        <FormItem top="prop[totalPages]">
          <Input
            type="number"
            value={totalPages}
            onChange={({ target: { value } }) => setTotalPages(Number(value))}
          />
        </FormItem>
        <FormItem top="prop[disabled]">
          <Checkbox value={disabled} onChange={({ target: { checked } }) => setDisabled(checked)}>
            disabled
          </Checkbox>
        </FormItem>
      </div>
    </div>
  );
};

const rootContainerStyles = {
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const demoContainerStyles = {
  flexGrow: 2,
  paddingTop: 24,
  paddingBottom: 24,
};

const propsContainerStyles = { minWidth: 200 };

<Example />;
```
