Мы используем три вида тестов:

**Юнит-тесты** на jest в файлах `moduleName.test.ts` ([например, `getPlatformClassName.test.ts`](../packages/vkui/src/helpers/getPlatformClassName.test.ts))

**Компонентные тесты** на jest + [react-testing-library](https://testing-library.com/docs/react-testing-library/example-intro) + [jest-dom](https://github.com/testing-library/jest-dom#table-of-contents) в `ComponentName.test.tsx` ([например, `Checkbox.test.tsx` ](../packages/vkui/src/components/Checkbox/Checkbox.test.tsx))

Дополнительные **тесты доступности компонентов** на jest + [react-testing-library](https://testing-library.com/docs/react-testing-library/example-intro) + [jest-dom](https://github.com/testing-library/jest-dom#table-of-contents) + [jest-axe](https://github.com/nickcolley/jest-axe) в `ComponentName.a11y.test.tsx` ([например, `Button.a11y.test.tsx` ](../packages/vkui/src/components/Button/Button.a11y.test.tsx))

**Скриншотные тесты** на jest + [playwright](https://playwright.dev/#?path=docs/api.md) + [jest-playwright](https://github.com/playwright-community/jest-playwright) в `ComponentName.e2e.tsx` [например, Checkbox.e2e.tsx](../packages/vkui/src/components/Checkbox/Checkbox.e2e.tsx).

Чтобы запускать скриншотные тесты локально, нужно установить:

- [git-lfs](https://git-lfs.github.com) — чтобы от эталонных скриншотов не раздувало репозиторий
- [докер](https://www.docker.com/products/docker-desktop) — чтобы платформа не влияла на рендеринг шрифтов. На линуксе докер не нужен.

## Команды

- `yarn test` — только быстрые юниты + компонентные;
- `yarn test:a11y` — только тесты доступности компонентов;
- `yarn test:e2e` — только скриншотные тесты;

Чтобы обновить скриншоты, установите докер и git-lfs и запустите `yarn test:e2e -u`.

## Покрытие

Чтобы сгенерировать карту покрытия для `coverage/lcov/index.html`:

> Note: карта покрытия будет создана только для пакета `@vkontakte/vkui`

```sh
yarn test:ci && yarn test:coverage
```

## `describeScreenshotFuzz`

Функция `describeScreenshotFuzz` из [`/testing/utils`](../packages/vkui/src/testing/e2e/utils.tsx) помогает быстро заскриншотить все состояния компонента в разных темах и на разных платформах:

```ts
describe('Button', () => {
  describeScreenshotFuzz(
    // Можем передать компонент или вот так добавить дефолтные пропы для скриншотов
    (props: ButtonProps) => <Button {...props}>Кнопка</Button>,
    // Описание комбинаций пропов — по элементу массива на независимый набор
    [
      // mode и disabled влияют на цвет, но не на размер
      { mode: ['primary', 'secondary'], disabled: [undefined, true] },
      // size влияет на размер, но не на цвет
      { size: ['s', 'm', 'l'] },
    ],
  );
  // всего 2 * 2 + 3 = 7 состояний:
  // mode="primary"
  // mode="primary" disabled
  // mode="secondary"
  // mode="secondary" disabled
  // size="s"
  // size="m"
  // size="l"
});
```

## `a11yBasicTest`

Функция `a11yBasicTest` из [`/testing/a11y.tsx`](../packages/vkui/src/testing/a11y.tsx) помогает базово протестировать компонент на доступность для скринридеров. Такие тесты — не панацея, они не гарантируют, что компонент будет на 100% доступен, но они способны поймать самые распространенные ошибки и показать, как именно должен использоваться компонент.

```tsx
describe('Button', () => {
  a11yBasicTest((props) => (
    <Button mode="primary" {...props}>
      Кнопка
    </Button>
  ));
});
```
