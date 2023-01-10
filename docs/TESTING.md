Мы используем три вида тестов:

**Юнит-тесты** на jest в файлах `moduleName.test.ts` [пример](../packages/vkui/src/helpers/getPlatformClassName.test.ts)

**Компонентные тесты** на jest + [react-testing-library](https://testing-library.com/docs/react-testing-library/example-intro) + [jest-dom](https://github.com/testing-library/jest-dom#table-of-contents) в `ComponentName.test.tsx` [пример](../packages/vkui/src/components/Checkbox/Checkbox.test.tsx)

**Скриншотные тесты** на jest + [playwright](https://playwright.dev/#?path=docs/api.md) + [jest-playwright](https://github.com/playwright-community/jest-playwright) в `ComponentName.e2e.tsx` [пример](../packages/vkui/src/components/Checkbox/Checkbox.e2e.tsx).

Чтобы запускать скриншотные тесты локально, нужно установить:

- [git-lfs](https://git-lfs.github.com) — чтобы от эталонных скриншотов не раздувало репозиторий
- [докер](https://www.docker.com/products/docker-desktop) — чтобы платформа не влияла на рендеринг шрифтов. На линуксе докер не нужен.

## Команды

- `yarn test` — только быстрые юниты + компонентные;
- `yarn test:e2e` — только браузерные тесты;

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
