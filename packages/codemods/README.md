# VKUI Codemods

Чтобы упростить переход на новую мажорную версию, можно воспользоваться инструментом по автоматической миграции ваших компонентов.

> Для начала обновите ваше приложение до необходимой мажорной версии (например, **v7**) в соответствии с требованиями вашего пакетного менеджера и среды.

> Обратите внимание, минимальная поддерживаемая версия **React** `v18.2.0`.

> Пока для перевода доступны только `Typescript`-файлы (_.ts/_.tsx).

> Из-за особенностей работы `jscodeshift` после применения миграции у вас могут появиться лишние скобки вокруг `JSX`-элементов, пожалуйста, запустите `prettier`, чтобы отформатировать код в соответствии с вашими настройками.

> Если вы хотите обновиться с `v5` на `v7` вам необходимо будет обновиться сначала на `v6`, а затем на `v7`, запустив скрипт последовательно для каждой из версий.

## Запуск

Перейдите в директорию с исходниками вашего проекта (обычно это `src/`) и запустите следующую команду:

```shell
npx @vkontakte/vkui-codemods
```

Инструмент представляет собой консольное приложение, с помощью которого вы можете выбрать необходимые изменения и применить их. Доступны следующие команды:

```console
$ npx @vkontakte/vkui-codemods --help

Usage: @vkontakte/vkui-codemod [codemod-names...]

Arguments:
  codemod-names                                 which codemods should be applied

Options:
  -V, --version                                 output the version number
  -l --list                                     list available codemods
  --all                                         apply all available codemods
  -tv --transforms-version <transformsVersion>  vkui major version transforms (available versions: "6", "7")
  -p --path [paths...]                          file paths where codemods need to apply (space separated list), default:
                                                current directory
  --input-file <file>                           apply codemods only to file/directory listed in the file
  --dry-run                                     no changes are made to files
  --ignore-config <config>                      ignore files if they match patterns sourced from a configuration file (e.g. a
                                                .gitignore)
  --debug                                       all logs are shown
  --alias <alias>                               in case you have adapter over original library (default: "@vkontakte/vkui")
  -h, --help                                    display help for command
```

Если приложение запустить без опции `-tv (--transforms-version)`, скрипт попытается автоматически определить версию, на которую необходимо мигрировать. Если этого сделать не удалось - нужно будет выбрать версию из предложенного списка.

При запуске приложения без аргументов будет предложено выбрать одну или несколько имеющихся миграций (их название отражает название компонента, к которому будет применено изменение). Если вам необходимо применить все имеющиеся миграции, запустите команду с опцией `--all`:

```shell
npx @vkontakte/vkui-codemods --all
```

Если вы хотите исключить некоторые файлы или директории из обработки, то временно создайте файл (по примеру .gitignore) с перечисленными исключениями в папке:

```shell
npx @vkontakte/vkui-codemods --all --path src --ignore-config "./.codemodignore"
```

```
// .codemodignore
MyBeautifulComponentToIgnore.tsx
directoryToIgnore/
```

Приведенная выше команда применит все codemods в директории `src` (находится в корне текущей директории), игонорируя файл `MyBeautifulComponentToIgnore.tsx` и директорию `directoryToIgnore`, указанные в `.codemodignore` (находится в корне текущей директории).

Если вы хотите перечислить файлы и директории, которые нужно включить в обработку, в отдельном конфигурационном файле, это можно сделать, указав опцию `--input-file <file>`:

```
// .input-file
MyBeautifulComponent.tsx
src/components
```

> Обратите внимание, если вы используете собственный адаптер над библиотекой `VKUI` и делаете ре-экспорт существующих компонентов, то можете воспользоваться опцией `--alias` для указания правильного пути.

```shell
npx @vkontakte/vkui-codemods --all --alias "@myscope/VKUIFake"
```

## Примеры

Представленный ниже скрипт позволит запустить все имеющиеся миграции в файлах `App.tsx` и `Main.tsx` в папке `src`:

```shell
npx @vkontakte/vkui-codemods --path src/App.tsx src/Main.tsx --all
```

Следующий скрипт запустит миграции компонентов `Flex` и `Separator` при обновлении на версию VKUI v7 в текущей директории:

```shell
npx @vkontakte/vkui-codemods flex separator -tv 7
```
