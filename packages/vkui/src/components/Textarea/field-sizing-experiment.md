# Эксперимент field-sizing для Textarea

Оставлен существующий JS-путь. Opt-in прототип и измерение находятся в
`packages/vkui/src/components/Textarea/TextareaFieldSizingExperiment.e2e.tsx`.
Запуск из корня (проект Chromium):

```sh
VKUI_FIELD_SIZING_EXPERIMENT=1 PLAYWRIGHT_TEST_MATCH='["**/TextareaFieldSizingExperiment.e2e.tsx"]' yarn workspace @vkontakte/vkui test:e2e:ci --project 'vkcom (chromium) • light' --workers 1
```

Результаты прикладываются к Playwright report в JSON. Эксперимент по умолчанию пропускается,
не меняет production-код и не устанавливает нестабильный порог производительности в CI.

Локальный Chromium, ширина 320 px, 100 изменений значения, принудительный layout после
каждого изменения: одно поле — JS 2.4 ms, native 1.2 ms; 20 полей — JS 51.4 ms,
native 28.7 ms. Это микробенчмарк прототипа, без React и доставки `onResize`,
не доказательство ускорения реального приложения.

Пустое поле и одна строка с rows=2: JS 64 px, native 44 px. Три строки: 84/84 px;
длинный текст: 284/284 px; длинный placeholder: 224/224 px.
Нативный путь теряет минимальную высоту rows. Ему потребуются дополнительные расчёты
минимальной высоты и наблюдение размеров для сохранения onResize; текущий прототип
не сохраняет контракт. По условию пункта 7 он отклонён до production-внедрения.
Полная матрица native/fallback после этого не выполнялась: native-пути в компоненте нет.

