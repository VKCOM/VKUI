---
description: Запуск и обновление E2E-скриншотных тестов
---

# /e2e

Настраивает `.env` для Playwright и запускает E2E-тесты для указанных компонентов. Без флага `--update` — проверка скриншотов, с `--update` — их обновление.

## Аргументы

- **Список компонентов** (опциональный) — имена компонентов через запятую или пробел (например, `Button Search` или `Button,Search,Accordion`). Если не указан — запустить все E2E-тесты
- `--update` — обновить скриншоты вместо проверки
- `--platforms` — платформы (через запятую). По умолчанию: все. Варианты: `android`, `ios`, `vkcom`
- `--workers` — количество воркеров Playwright. По умолчанию: `4`
- `--ci` — использовать Playwright напрямую вместо Docker

## Логика работы

### Шаг 1: Получить список компонентов

Разобрать аргументы — извлечь имена компонентов.

**Если компоненты указаны:** для каждого компонента убедиться что существует файл `packages/vkui/src/components/<ComponentName>/<ComponentName>.e2e.tsx`. Если файл не найден — предупредить и пропустить этот компонент.

Сформировать массив паттернов для `PLAYWRIGHT_TEST_MATCH`:

- **С компонентами:**

```json
[
  "**/Button.e2e.tsx",
  "**/Search.e2e.tsx"
]
```

- **Без компонентов (все тесты):**

```json
[
  "**/*.e2e.tsx"
]
```

### Шаг 2: Определить платформы

Разобрать флаг `--platforms`. Если не указан — использовать все платформы.

Маппинг платформ на Playwright-проекты:

| Платформа | Проекты |
|-----------|---------|
| `android` | `android (chromium) • dark`, `android (chromium) • light` |
| `ios` | `ios (webkit) • dark`, `ios (webkit) • light` |
| `vkcom` | `vkcom (chromium) • dark`, `vkcom (chromium) • light`, `vkcom (firefox) • dark`, `vkcom (firefox) • light`, `vkcom (webkit) • dark`, `vkcom (webkit) • light` |
| (все) | Все 10 проектов |

Сформировать JSON-массив для `PLAYWRIGHT_FORCE_PROJECTS`.

### Шаг 3: Записать `.env`

Обновить файл `packages/vkui/.env`, записав три переменные:

```
PLAYWRIGHT_FORCE_PROJECTS='[...]'
PLAYWRIGHT_TEST_MATCH='[...]'
PLAYWRIGHT_WORKERS=4
```

Сохранить остальные переменные из файла (например `STORYBOOK_DEV_PORT`) без изменений.

### Шаг 4: Запустить E2E-тесты

Запустить из директории `packages/vkui`:

**Проверка скриншотов** (без `--update`):
- Без `--ci`: `yarn test:e2e`
- С `--ci`: `yarn test:e2e:ci`

**Обновление скриншотов** (с `--update`):
- Без `--ci`: `yarn test:e2e-update`
- С `--ci`: `yarn test:e2e-update:ci`

### Шаг 5: Результат

После завершения сообщить:
- Сколько тестов прошло/упало (при проверке) или скриншотов обновлено (при обновлении)
- Для каких компонентов и платформ
- Если были ошибки — показать их

## Примеры

```
/e2e                                 — проверить все скриншоты
/e2e Button                           — проверить скриншоты Button
/e2e Button CellButton --update       — обновить скриншоты Button и CellButton
/e2e Button --platforms android,ios   — проверить только на android и ios
/e2e Search --platforms vkcom --workers 2  — проверить на vkcom с 2 воркерами
/e2e Button --update --ci             — обновить скриншоты без Docker
```

## Важные замечания

- Команда перезаписывает `packages/vkui/.env` — если там были ручные настройки, они будут заменены
- Docker-режим требует запущенного Docker
- CI-режим (`--ci`) требует установленных Playwright-браузеров (`yarn playwright:install`)
- При обновлении скриншотов — обновлённые файлы нужно закоммитить отдельно
