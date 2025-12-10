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
| 15          | 06.22 | ±03.24ms | 04.1 | 05.1   | 17.7 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 142              | 3.6 MiB         | 1.9 MiB        | 2           | 0.000203       | 2                | 0.00076             | 0.010687       | 0.024557     |

### noop with providers

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 07.74 | ±03.37ms | 05.6 | 06.7   | 19.7 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 148              | 3.6 MiB         | 2.0 MiB        | 2           | 0.000196       | 2                | 0.001351            | 0.012234       | 0.026332     |

### touch (single)

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 06.67 | ±02.66ms | 04.6 | 05.6   | 15.7 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 142              | 3.6 MiB         | 1.9 MiB        | 2           | 0.001976       | 2                | 0.000853            | 0.011143       | 0.027705     |

### touch width providers (single)

| sampleCount | mean  | stdDev   | min  | median | max  |
| ----------- | ----- | -------- | ---- | ------ | ---- |
| 15          | 07.77 | ±02.45ms | 05.8 | 06.7   | 15.4 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 148              | 3.6 MiB         | 2.1 MiB        | 2           | 0.001986       | 2                | 0.001306            | 0.012726       | 0.027759     |

### touch (multiple)

| sampleCount | mean  | stdDev   | min | median | max   |
| ----------- | ----- | -------- | --- | ------ | ----- |
| 15          | 45.48 | ±24.74ms | 34  | 36     | 135.8 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 142              | 12.9 MiB        | 4.2 MiB        | 2           | 0.006121       | 2                | 0.002218            | 0.026943       | 0.055499     |

### touch with providers (multiple)

| sampleCount | mean  | stdDev   | min  | median | max   |
| ----------- | ----- | -------- | ---- | ------ | ----- |
| 15          | 56.09 | ±36.49ms | 35.9 | 38.1   | 152.9 |

| JSEventListeners | JSHeapTotalSize | JSHeapUsedSize | LayoutCount | LayoutDuration | RecalcStyleCount | RecalcStyleDuration | ScriptDuration | TaskDuration |
| ---------------- | --------------- | -------------- | ----------- | -------------- | ---------------- | ------------------- | -------------- | ------------ |
| 148              | 12.9 MiB        | 4.3 MiB        | 3           | 0.005944       | 3                | 0.002534            | 0.0284         | 0.057386     |
