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

| sampleCount | mean  | stdDev  | min  | median | max  |
| ----------- | ----- | ------- | ---- | ------ | ---- |
| 15          | 06.67 | ±00.9ms | 05.6 | 06.6   | 08.3 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 143              | 3.4 MiB         | 1.8 MiB        | 2           | 0.001832       | 2                | 0.001315            | 0.013624       | 0.030369     |

### touch width providers (single)

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 11.19 | ±02.65ms | 07.6 | 15.3   | 15.3 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 149              | 3.4 MiB         | 1.9 MiB        | 2           | 0.002061       | 2                | 0.001949            | 0.015388       | 0.033263     |

### touch (multiple)

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 61.48 | ±06.06ms | 54.7 | 59.6   | 77.7 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 3140             | 27.0 MiB        | 9.2 MiB        | 3           | 0.012517       | 3                | 0.003371            | 0.040067       | 0.080648     |

### touch with providers (multiple)

| sampleCount | mean | stdDev   | min  | median | max  |
| ----------- | ---- | -------- | ---- | ------ | ---- |
| 15          | 61   | ±03.01ms | 57.6 | 59.6   | 67.2 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 3146             | 26.8 MiB        | 9.2 MiB        | 3           | 0.012233       | 3                | 0.003991            | 0.040436       | 0.080798     |
