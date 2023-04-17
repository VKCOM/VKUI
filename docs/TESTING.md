## Быстрый старт

- `yarn test` — запускает все Unit тесты;
- `yarn test:a11y` — запускает тесты на доступность компонентов;
- `yarn test:e2e` — запускает в Docker-контейнере скриншотные тесты;
- `yarn test:e2e-update` — запускает в Docker-контейнере обновление скриншотных тестов.

## Виды тестов

### Unit тесты

Используем:

- [jest](https://jestjs.io/ru/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/example-intro)
- [jest-dom](https://github.com/testing-library/jest-dom#table-of-contents)

Описываем в файлах:

- Если это обычная функция, то `moduleName.test.ts`, (например, [`packages/vkui/src/lib/adaptivity/functions.test.ts`](../packages/vkui/src/lib/adaptivity/functions.test.ts))
- Если это React-компонент, то `ComponentName.test.ts` (например, [`Checkbox.test.tsx`](../packages/vkui/src/components/Checkbox/Checkbox.test.tsx))

### A11y тесты

Используем:

- [jest](https://jestjs.io/ru/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/example-intro)
- [jest-dom](https://github.com/testing-library/jest-dom#table-of-contents)
- [jest-axe](https://github.com/nickcolley/jest-axe)

Описываем в файлах `ComponentName.a11y.test.tsx` ([например, `Button.a11y.test.tsx` ](../packages/vkui/src/components/Button/Button.a11y.test.tsx))

#### `a11yBasicTest`

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

### Скриншотные тесты

> ⚠️ При обновлении Playwright в [package.json](../package.json), нужно также поднять версию образа `mcr.microsoft.com/playwright` в следующих файлах:
>
> - [.github/workflows/reusable_workflow_test_e2e.yml](../.github/workflows/reusable_workflow_test_e2e.yml)
> - [packages/vkui/docker-compose.yml](../packages/vkui/docker-compose.yml)

Используем:

- [@playwright/experimental-ct-react](https://playwright.dev/docs/test-components)
- [git-lfs](https://git-lfs.github.com) – помогает от раздувания репозитория из-за эталонных скриншотов.
- [Docker](https://www.docker.com/products/docker-desktop) – запускаем тесты в докере, чтобы для тестов было одинаковое окружение, что в CI, что локально. Этим достигается одинаковый рендер страницы. Для примера, шрифты рендерятся по разному в зависимости от ОС.

Описываем в файлах:

- Тест-кейсы и вызов API Playwright в `ComponentName.e2e.tsx` (например, [Accordion.e2e.tsx](../packages/vkui/src/components/Accordion/Accordion.e2e.tsx))
- Примеры компонента в `ComponentName.e2e-playground.tsx` (например, [Accordion.e2e-playground.tsx](../packages/vkui/src/components/Accordion/Accordion.e2e-playgrgound.tsx))
  > Выносим в отдельный файл из-за особенностей Playwright.
  >
  > Ссылки по теме:
  >
  > - [Why can't I pass a variable to mount?](https://playwright.dev/docs/test-components#q-why-cant-i-pass-a-variable-to-mount)
  > - [playwright issue #18481](https://github.com/microsoft/playwright/issues/18481)

Настраиваем:

- В папке [packages/vkui/src/testing/e2e](../packages/vkui/src/testing/e2e) задаём кастомные свойства, создаём утилитарные функции уменьшающие бойлерплейт. Вот основные помощники:
  - [constants.ts](../packages/vkui/src/testing/e2e/constants.ts) – стоит обратить внимание на `TEST_CLASS_NAMES` (ищи примеры использования в коде).
  - [ComponentPlayground](../packages/vkui/src/testing/e2e/ComponentPlayground.tsx) – помогает создавать песочницу компонентов с разными вариациями его параметров.
  - [screenshotWithClipToContent](../packages/vkui/src/testing/e2e/screenshotWithClipToContent.ts) – обрезает скриншот до контентной части.
    > Напрямую её использовать не придётся. Она используется в `expectScreenshotClippedToContent()`, которая доступна через аргументы `test`.
    >
    > ```ts
    > test('base', ({ expectScreenshotClippedToContent }) => {
    >   // ...
    >   await expectScreenshotClippedToContent();
    > });
    > ```
- В папке [packages/vkui/playwright](../packages/vkui/playwright) подключаем шрифты, подключаем CSS, подготавливаем HTML файл.
- В файле [packages/vkui/playwright-сt.config.ts](../packages/vkui/playwright-сt.config.ts) конфигурируем Playwright.
- В файле `env.development.local` определяем переменные окружения для удобства локального тестирования.

#### Как формируются названия скриншотов?

За это отвечает функцию [generateCustomScreenshotName](../packages/vkui/src/testing/e2e/utils.ts), которая используется внутри `expectScreenshotClippedToContent()`.

Далее примеры того как отработает функция. Как входные данные возьмём:

- platform: 'android'
- browserName: 'chromium'
- appearance: 'light'

```tsx
test('Example', async ({ expectScreenshotClippedToContent }) => {
  // ...
  await expectScreenshotClippedToContent(); // => мы получим скриншот с названием 'example-android-chromium-light-1-snap.png'
  await expectScreenshotClippedToContent(); // => мы получим скриншот с названием 'example-android-chromium-light-2-snap.png'
});

test.describe('Example', () => {
  test('My AWESOME case description', async ({ expectScreenshotClippedToContent }) => {
    // ...
    await expectScreenshotClippedToContent(); // => мы получим скриншот с названием 'example-android-chromium-light-my-awesome-case-description-1-snap.png'
  });
});
```

#### Запускаем тесты только для конкретных платформ

1. Используем `test.use({ onlyForPlatforms: [] })`, которая через `test.skip` будет пропускать тест если платформа `platform` не удовлетворяет условию.
2. Если в тестовом файле есть другие тесты, то оборачиваем в `test.describe`, иначе `test.use` будет применять и на них.

Пример

```tsx
// Accordion.e2e.tsx
import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { AccordionPlayground } from './Accordion.e2e-playground';

test.describe(() => {
  // Будет применяться для всех тестов внутри `test.describe('Accordion')`
  test.use({ onlyForPlatforms: [Platform.VKCOM] });
  test('Accordion', async ({ mount expectScreenshotClippedToContent componentPlaygroundProps }) => {
    await mount(<AccordionPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

// На эти тесты не влияет
test('Accordion', () => {});
test.describe(() => {
  test('Accordion', () => {});
});
```

#### Зашиваем параметры адаптивности

1. Используем `test.use({ adaptivityProviderProps: {} })`;
2. Если в тестовом файле есть другие тесты, то оборачиваем в `test.describe`, иначе `test.use` будет применять и на них.

Пример

```tsx
// Accordion.e2e.tsx
import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { AccordionPlayground } from './Accordion.e2e-playground';

test.describe(() => {
  // Будет применяться для всех тестов внутри `test.describe('Accordion')`
  test.use({ adaptivityProviderProps: { viewWidth: ViewWidth.TABLET } });
  test('Accordion', async ({ mount expectScreenshotClippedToContent componentPlaygroundProps }) => {
    await mount(<AccordionPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

// На эти тесты не влияет
test('Accordion', () => {});
test.describe(() => {
  test('Accordion', () => {});
});
```

#### Debug

Для начала надо будет скачать браузеры, делаем это следующей командой:

```
yarn run playwright:install
```

Далее копируем `.env.development.local` файл:

```sh
cp packages/vkui/.env.development.local packages/vkui/.env
```

И читаем комментарии к константам в файле `.env`. Там будут сразу примеры.

##### Live Debugging

1. В `.env` задаём желаемый проект и тест файл.
2. Запускаем команду

   ```
   yarn test:e2e:ci --debug
   ```

3. Запуститься Playwright DevTools и указанный браузер.
   > Подробнее см. https://playwright.dev/docs/debug#live-debugging

#### Troubleshooting

##### Q) Почему при запуске `test:e2e`/`test:e2e-update` падает команда `playwright test --config ...`?

В первую очередь смотрим лог ошибки. Если команда падает не успев пройтись по тест файлу, то скорей всего дело может быть в кэше Playwright.

Например, был вот такой кейс, что в файле `Accordion.e2e-playground.tsx` переименовали экспортируемый компонент с `AccordionE2EPlayground` на `AccordionPlayground` и команда упала со следующей ошибкой:

```sh
vkui-package_vkui-1  | $ playwright test --config playwright-ct.config.ts -u
vkui-package_vkui-1  |
vkui-package_vkui-1  | Running 10 tests using 2 workers
vkui-package_vkui-1  |
vkui-package_vkui-1  | vite v4.2.1 building for production...
vkui-package_vkui-1  | transforming...
vkui-package_vkui-1  | Error when using sourcemap for reporting an error: Can't resolve original location of error.
vkui-package_vkui-1  | ✓ 2616 modules transformed.
vkui-package_vkui-1  | ✓ built in 3.67s
vkui-package_vkui-1  | "AccordionE2EPlayground" is not exported by "src/components/Accordion/Accordion.e2e-playground.tsx", imported by "playwright/index.tsx".
```

Очистили кэш, запустили заново тесты и ошибка пропала.

Чтобы очистить кэш выполните:

```sh
yarn workspace @vkontakte/vkui run docker:clear-playwright-cache
```

## Покрытие

Чтобы сгенерировать карту покрытия для `coverage/lcov/index.html`:

> Note: карта покрытия будет создана только для пакета `@vkontakte/vkui`

```sh
yarn test:ci && yarn test:coverage
```
