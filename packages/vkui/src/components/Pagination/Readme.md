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
  const [navigationButtonsStyle, setNavigationButtonsStyle] = useState('icon');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(123);

  const getPageFromPath = React.useCallback(() => {
    const params = window.location.hash.split('?')[1] || '';
    const pageFromParams = Number(new URLSearchParams(params).get('page')) || 1;
    return clamp(pageFromParams, 1, totalPages);
  }, [totalPages]);

  const [pageFromPath, setPageFromPath] = useState(getPageFromPath);
  const [siblingCount, setSiblingCount] = useState(0);
  const [boundaryCount, setBoundaryCount] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const handleChange = React.useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const hashPath = window.location.hash.split('?')[0].replace(/^#/, '');

  React.useEffect(() => {
    const cb = () => {
      setPageFromPath(getPageFromPath());
    };

    window.addEventListener('popstate', cb);
    return () => {
      window.removeEventListener('popstate', cb);
    };
  }, [getPageFromPath]);

  return (
    <Flex reverse justify="end" align="center" margin="auto">
      <AdaptivityProvider sizeY={sizeY}>
        <Flex.Item flex="grow">
          <Div>
            <Pagination
              navigationButtonsStyle={navigationButtonsStyle}
              currentPage={currentPage}
              siblingCount={siblingCount}
              boundaryCount={boundaryCount}
              totalPages={totalPages}
              disabled={disabled}
              onChange={handleChange}
            />
          </Div>
          <Div>
            <Pagination
              navigationButtonsStyle={navigationButtonsStyle}
              currentPage={pageFromPath}
              siblingCount={siblingCount}
              boundaryCount={boundaryCount}
              totalPages={totalPages}
              disabled={disabled}
              renderPageButton={(props) => (
                <Tappable {...props} href={`#${hashPath}?page=${props['data-page']}`} />
              )}
              renderNavigationButton={(props) => (
                <Button
                  {...props}
                  href={
                    props['data-page'] == null
                      ? undefined
                      : `#${hashPath}?page=${props['data-page']}`
                  }
                />
              )}
            />
          </Div>
        </Flex.Item>
      </AdaptivityProvider>
      <Flex.Item flexBasis={200} flex="fixed">
        <FormItem top="sizeY">
          <Select
            value={sizeY}
            onChange={setSizeY}
            options={[
              { label: 'compact', value: 'compact' },
              { label: 'regular', value: 'regular' },
            ]}
          />
        </FormItem>
        <FormItem top="prop[navigationButtonsStyle]">
          <Select
            value={navigationButtonsStyle}
            onChange={setNavigationButtonsStyle}
            options={[
              { label: 'icon', value: 'icon' },
              { label: 'caption', value: 'caption' },
              { label: 'both', value: 'both' },
            ]}
          />
        </FormItem>
        <FormItem top="prop[currentPage]">
          <Input
            type="number"
            value={currentPage}
            onChange={({ target: { value } }) => {
              setCurrentPage(Number(value));
            }}
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
      </Flex.Item>
    </Flex>
  );
};

<Example />;
```
