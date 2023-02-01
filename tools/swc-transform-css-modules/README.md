# swc-plugin-transform-css-modules

Плагин находит импорты CSS Modules по типу `import <styleImportName> from "./<componentName>.module.css"` и заменяет
обращения к объекту `<styleImportName>.<selector>` на `vkui<selector>`.
[Пример](tests/fixture/component) обработки.

## Разработка

[Мануал](https://swc.rs/docs/plugin/ecmascript/getting-started) по созданию
плагинов для SWC.

Перед созданием PR-а, проверьте тесты, линтер:

```sh
cargo test
cargo clippy
```

Для сборки пакета используйте:

```
yarn pack
```
