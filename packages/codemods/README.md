# VKUI v6 Codemods

Чтобы упростить переход на новую мажорную версию, можно воспользоваться инструментом по автоматической миграции ваших компонентов.

> Для начала обновите ваше приложение до новой мажорной версии (**v6**) в соответствии с требованиями вашего пакетного менеджера и среды

> Обратите внимание, минимальная поддерживаемая версия **React** увеличена до `v18.2.0`

> Пока для перевода доступны только `Typescript`-файлы (_.ts/_.tsx)

> Из-за особенностей работы `jscodeshift` после применения миграции у вас могут появиться лишние скобки вокруг `JSX`-элементов, пожалуйста, запустите `prettier`, чтобы отформатировать код в соответствии с вашими настройками.

Перейдите в директорию с исходниками вашего проекта (обычно это `src/`) и запустите следующую команду:

```shell
npx @vkontakte/vkui-codemods
```

Инструмент представляет собой консольное приложение, с помощью которого вы можете выбрать необходимые изменения и применить их, доступны следующие команды:

```console
$ npx @vkontakte/vkui-codemods --help

Usage: @vkontakte/vkui-codemod [codemod-name]

Arguments:
 codemod-name              which codemod should be applied

Options:
 -V, --version             output the version number
 -l --list                 list available codemods
 --all                     apply all available codemods
 -p --path <paths>         path to files in which to apply the codemods (default: current directory)
 --dry-run                 no changes are made to files
 --ignore-config <config>  ignore files if they match patterns sourced from a configuration file (e.g. a .gitignore)
 --debug                   all logs are shown
 --alias <alias>           in case you have adapter over original library (default: "@vkontakte/vkui")
 -h, --help                display help for command
```

При запуске приложения без аргументов будет предложено выбрать один из имеющихся codemod (их название отражает название компонента, к которому будет применено изменение). Если вам необходимо применить все имеющиеся codemods, запустите команду с опцией `--all`:

```shell
npx @vkontakte/vkui-codemods --all
```

Если вы хотите исключить некоторые файлы или директории из обработки, то временно создайте файл (по примеру .gitignore) с перечисленными исключениями:

```shell
npx @vkontakte/vkui-codemods --all --path "./examples" --ignore-config "./.codemodignore"
```

```
// .codemodignore
MyBeautifulComponentToIgnore.tsx
directoryToIgnore/
```

Приведенная выше команда применит все codemods в директории `examples` (находится в корне текущей директории), игонорируя файл `MyBeautifulComponentToIgnore.tsx` и директорию `directoryToIgnore`, указанные в `.codemodignore` (находится в корне текущей директории)

> Обратите внимание, если вы используете собственный адаптер над библиотекой `VKUI` и делаете ре-экспорт существующих компонентов, то можете воспользоваться опцией `--alias` для указания правильного пути.

```shell
npx @vkontakte/vkui-codemods --all --alias "@myscope/VKUIFake"
```
