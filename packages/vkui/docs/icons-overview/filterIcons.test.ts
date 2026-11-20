import { describe, expect, it } from 'vitest';
import type { ConfigData } from './config';
import { filterIcons } from './filterIcons';

const config = [
  {
    size: '12',
    icons: [
      { name: 'Icon12Plane', node: null },
      { name: 'Icon12Play', node: null },
    ],
  },
  {
    size: '24',
    icons: [{ name: 'Icon24ArrowDown', node: null }],
  },
] as ConfigData[];

describe('filterIcons', () => {
  it('возвращает исходный набор для пустого запроса', () => {
    expect(filterIcons(config, '  ')).toBe(config);
  });

  it('нормализует регистр и пробелы', () => {
    expect(filterIcons(config, ' PLAY ')).toEqual(filterIcons(config, 'play'));
  });

  it('ищет по русским синонимам, включая опечатки', () => {
    expect(filterIcons(config, 'стрелка')).toEqual([config[1]]);
    expect(filterIcons(config, 'стрлка')).toEqual([config[1]]);
  });

  it('сохраняет приоритет точных вхождений', () => {
    expect(filterIcons(config, 'play')).toEqual([
      { size: '12', icons: [{ name: 'Icon12Play', node: null }] },
    ]);
  });

  it('находит иконку с переставленными буквами в части имени', () => {
    expect(filterIcons(config, 'plnae')[0]?.icons).toContainEqual({
      name: 'Icon12Plane',
      node: null,
    });
  });

  it('находит иконку с пропущенной буквой', () => {
    expect(filterIcons(config, 'arowdown')).toEqual([
      { size: '24', icons: [{ name: 'Icon24ArrowDown', node: null }] },
    ]);
  });

  it('не расширяет короткий запрос до похожих имен', () => {
    expect(filterIcons(config, 'px')).toEqual([]);
  });
});
