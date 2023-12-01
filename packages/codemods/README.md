# VKUI v6 Codemods

Чтобы упростить переход на новую мажорную версию, можно воспользоваться инструментом по автоматической миграции ваших компонентов.

> Для начала обновите ваше приложение до новой мажорной версии (**v6**) в соответствии с требованиями вашего пакетного менеджера и среды

> Обратите внимание, минимальная поддерживаемая версия **React** увеличена до `v18.2.0`

> Пока для перевода доступны только `Typescript`-файлы (_.ts/_.tsx)

Перейдите в директорию с исходниками вашего проекта (обычно это `src/`) и запустите следующую команду:

```shell
npx @vkontakte/vkui-codemods
```

Инструмент представляет собой консольное приложение, с помощью которого вы можете выбрать необходимые изменения и применить их, доступны следующие команды:

```
$ npx @vkontakte/vkui-codemods --help

Usage: @vkontakte/vkui-codemod [codemod-name]

Arguments:
 codemod-name              which codemod should be applied

Options:
 -V, --version             output the version number
 -l --list                 list available codemods
 --all                     apply all available codemods
 -g --glob <glob>          glob for files upon which to apply the codemods (default: "**/*.tsx?")
 --dry-run                 no changes are made to files
 --ignore-config <config>  ignore files if they match patterns sourced from a configuration file (e.g. a .gitignore)
 -q --quiet                all logs are suppressed
 -h, --help                display help for command
```

При запуске приложения без аргументов будет предложено выбрать один из имеющихся codemod (их название отражает название компонента, к которому будет применено изменение). Если вам необходимо применить все имеющиеся codemods, запустите команду с опцией `--all`:

```shell
npx @vkontakte/vkui-codemods --all
```

Если вы хотите исключить некоторые файлы или директории из обработки, то временно создайте файл (по примеру .gitignore) с перечисленными исключениями:

```shell
npx @vkontakte/vkui-codemods --all --glob "./examples"  --ignore-config "./.codemodignore"
```

```
// .codemodignore
MyBeautifulComponentToIgnore.tsx
directoryToIgnore/
```

Приведенная выше команда применит все codemods в директории `examples` (находится в корне текущей директории), игонорируя файл `MyBeautifulComponentToIgnore.tsx` и директорию `directoryToIgnore`, указанные в `.codemodignore` (находится в корне текущей директории)
