Иконки хранятся отдельно в пакете `@vkontakte/icons`. У пакета есть
отдельная [документация с полным списком иконок](https://vkcom.github.io/icons). Сама библиотека использует иконки
в качестве зависимости для компонентов вроде PanelHeaderEdit, Radio.

[Полный список иконок](https://vkcom.github.io/icons)

## Дедупликация

Если вы столкнулись с дублированием зависимостей, вам необходимо произвести дедупликацию

**npm**

Команда [npm dedupe](https://docs.npmjs.com/cli/v6/commands/npm-dedupe)

```sh
npm dedupe
```

**Yarn Classic**

Утилита [yarn-deduplicate](https://www.npmjs.com/package/yarn-deduplicate)

```sh
npx yarn-deduplicate --packages @vkontakte/icons
```

**Yarn Modern**

Команда [yarn dedupe](https://yarnpkg.com/cli/dedupe)

```sh
yarn dedupe @vkontakte/icons
```

**pnpm**

Команда [pnpm dedupe](https://pnpm.io/cli/dedupe)

```sh
pnpm dedupe
```
