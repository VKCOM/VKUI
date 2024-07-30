# Benchmark

## Runtime

Выдаёт таблицу с результатами скорости первого рендера (см. [Performance: measure() method](https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure)),
а также некоторые браузерные метрики (см. [Chrome DevTools Protocol – Performance](https://chromedevtools.github.io/devtools-protocol/tot/Performance/)).

```sh
yarn workspace benchmark runtime:start
```

Результат выводится в консоль, а также записывается во временный файл `benchmark.md` в папке `<project>/benchmark/runtime/tmp/`.

Так как цифры не абсолютные, мы вынуждены следить за изменениями производительности вручную.

Ниже представлены результаты последнего запуска.

> Docker запускался локально на ПК со следующими характеристиками:
>
> - Чип Apple M1 Pro
> - Память 16Gb
> - macOS 14.5 (23F79)

> [!NOTE]
>
> 1. Используется `@vkontakte/vkui/dist/cssm` версия библиотеки.
> 2. `noop` задаёт базовые время и метрики, которые дают понять как выглядит результаты до применения библиотеки.
> 3. `noop with providers` как и **п.2** задаёт базу, но с учётом бойлерплейта библиотеки.

### noop

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 06.36 | ±00.78ms | 04.8 | 06.3   | 07.5 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 140              | 3.4 MiB         | 1.8 MiB        | 2           | 0.0002         | 2                | 0.001264            | 0.012804       | 0.027651     |

### noop with providers

| sampleCount | mean  | stdDev  | min  | median | max  |
| ----------- | ----- | ------- | ---- | ------ | ---- |
| 15          | 08.27 | ±01.6ms | 06.5 | 07.3   | 11.8 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 146              | 3.4 MiB         | 1.9 MiB        | 2           | 0.000239       | 2                | 0.001978            | 0.014744       | 0.030872     |

### touch (single)

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 06.61 | ±00.81ms | 05.4 | 06.8   | 07.9 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 140              | 3.4 MiB         | 1.8 MiB        | 2           | 0.001813       | 2                | 0.001409            | 0.013405       | 0.030949     |

### touch width providers (single)

| sampleCount | mean  | stdDev  | min  | median | max  |
| ----------- | ----- | ------- | ---- | ------ | ---- |
| 15          | 10.99 | ±03.2ms | 07.4 | 07.4   | 18.5 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 146              | 3.6 MiB         | 1.9 MiB        | 2           | 0.002033       | 2                | 0.001977            | 0.015241       | 0.034252     |

### touch (multiple)

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 44.15 | ±01.66ms | 41.1 | 44.9   | 46.1 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 140              | 8.8 MiB         | 4.0 MiB        | 2           | 0.012301       | 2                | 0.003312            | 0.02725        | 0.065623     |

### touch with providers (multiple)

| sampleCount | mean  | stdDev   | min  | median | max   |
| ----------- | ----- | -------- | ---- | ------ | ----- |
| 15          | 56.35 | ±31.46ms | 44.5 | 47.3   | 173.4 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 146              | 8.8 MiB         | 4.0 MiB        | 2           | 0.012215       | 2                | 0.004027            | 0.029771       | 0.069578     |
