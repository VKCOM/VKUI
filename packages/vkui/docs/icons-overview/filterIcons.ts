import type { ConfigData } from './config';

/** Русские и английские слова, по которым можно найти иконки по смыслу. */
const ICON_ALIASES: Record<string, string[]> = {
  Add: ['добавить', 'плюс', 'создать', 'add'],
  Arrow: ['стрелка', 'назад', 'вперёд', 'вперед', 'вверх', 'вниз', 'arrow'],
  Calendar: ['календарь', 'дата', 'calendar'],
  Camera: ['камера', 'фото', 'снимок', 'camera'],
  Check: ['галочка', 'отметить', 'выбрать', 'check'],
  Clock: ['часы', 'время', 'clock'],
  Cancel: ['закрыть', 'крестик', 'отмена', 'close', 'cancel'],
  Copy: ['копировать', 'копия', 'copy'],
  Delete: ['удалить', 'корзина', 'delete', 'trash'],
  Download: ['скачать', 'загрузить', 'download'],
  Edit: ['редактировать', 'изменить', 'карандаш', 'edit'],
  Favorite: ['избранное', 'звезда', 'favorite'],
  Filter: ['фильтр', 'отбор', 'filter'],
  Help: ['помощь', 'вопрос', 'help'],
  Home: ['дом', 'главная', 'home'],
  Info: ['информация', 'инфо', 'info'],
  Like: ['лайк', 'нравится', 'сердце', 'like'],
  Link: ['ссылка', 'цепочка', 'link'],
  Location: ['геолокация', 'место', 'карта', 'location'],
  Lock: ['замок', 'закрытый', 'безопасность', 'lock'],
  Mail: ['почта', 'письмо', 'email', 'mail'],
  Menu: ['меню', 'бургер', 'menu'],
  Message: ['сообщение', 'чат', 'переписка', 'message'],
  Notification: ['уведомление', 'колокольчик', 'notification'],
  Pause: ['пауза', 'остановить', 'pause'],
  Pen: ['редактировать', 'изменить', 'карандаш', 'pen', 'edit'],
  Phone: ['телефон', 'звонок', 'phone'],
  Play: ['воспроизвести', 'играть', 'пуск', 'play'],
  Refresh: ['обновить', 'перезагрузить', 'refresh'],
  Search: ['поиск', 'искать', 'лупа', 'найти', 'search'],
  Settings: ['настройки', 'шестерёнка', 'шестеренка', 'settings'],
  Share: ['поделиться', 'отправить', 'share'],
  Trash: ['удалить', 'корзина', 'trash', 'delete'],
  Upload: ['загрузить', 'выгрузить', 'upload'],
  User: ['пользователь', 'профиль', 'аккаунт', 'user'],
  Video: ['видео', 'ролик', 'video'],
  Picture: ['изображение', 'картинка', 'фото', 'picture', 'image'],
  Image: ['изображение', 'картинка', 'фото', 'image', 'picture'],
  Wallet: ['кошелёк', 'кошелек', 'деньги', 'wallet'],
  Money: ['деньги', 'оплата', 'кошелёк', 'кошелек', 'money'],
  Hide: ['скрыть', 'глаз', 'hide'],
  Show: ['показать', 'глаз', 'show'],
};

const aliasesCache = new Map<string, string[]>();

const getIconAliases = (name: string): string[] => {
  const cached = aliasesCache.get(name);
  if (cached) {
    return cached;
  }

  const baseName = name.replace(/^Icon\d+/, '');
  const aliases = new Set<string>();
  for (const [namePrefix, values] of Object.entries(ICON_ALIASES)) {
    if (baseName.startsWith(namePrefix)) {
      values.forEach((alias) => aliases.add(alias.toLocaleLowerCase()));
    }
  }
  const result = Array.from(aliases);
  aliasesCache.set(name, result);
  return result;
};

const searchTermsCache = new Map<string, string[]>();

const getSearchTerms = (name: string): string[] => {
  const cached = searchTermsCache.get(name);
  if (cached) {
    return cached;
  }

  const parts = name.split(/(?=[A-Z])/).filter(Boolean);
  const terms: string[] = [];
  for (let start = 0; start < parts.length; start++) {
    let term = '';
    for (let end = start; end < parts.length; end++) {
      term += parts[end];
      terms.push(term.toLocaleLowerCase());
    }
  }
  searchTermsCache.set(name, terms);
  return terms;
};

const getLevenshteinDistance = (query: string, term: string, maxDistance: number): number => {
  if (Math.abs(query.length - term.length) > maxDistance) {
    return maxDistance + 1;
  }

  let previous = Array.from({ length: term.length + 1 }, (_, index) => index);

  for (let queryIndex = 0; queryIndex < query.length; queryIndex++) {
    const current = [queryIndex + 1];
    let rowMinimum = current[0];

    for (let termIndex = 0; termIndex < term.length; termIndex++) {
      const distance = Math.min(
        previous[termIndex + 1] + 1,
        current[termIndex] + 1,
        previous[termIndex] + Number(query[queryIndex] !== term[termIndex]),
      );
      current.push(distance);
      rowMinimum = Math.min(rowMinimum, distance);
    }

    if (rowMinimum > maxDistance) {
      return maxDistance + 1;
    }
    previous = current;
  }

  return previous[term.length];
};

const getClosestDistance = (query: string, terms: string[], maxDistance: number): number => {
  let bestDistance = maxDistance + 1;
  for (const term of terms) {
    const distance = getLevenshteinDistance(query, term, Math.min(maxDistance, bestDistance));
    bestDistance = Math.min(bestDistance, distance);
  }
  return bestDistance;
};

const getMaxDistance = (queryLength: number): number => {
  if (queryLength <= 2) {
    return 0;
  }
  if (queryLength <= 4) {
    return 1;
  }
  return queryLength <= 10 ? 2 : 3;
};

export const filterIcons = (config: ConfigData[], query: string): ConfigData[] => {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) {
    return config;
  }

  const exactMatches = config
    .map(({ size, icons }) => ({
      size,
      icons: icons.filter(
        ({ name }) =>
          name.toLocaleLowerCase().includes(normalizedQuery) ||
          getIconAliases(name).some((alias) => alias.includes(normalizedQuery)),
      ),
    }))
    .filter(({ icons }) => icons.length > 0);
  if (exactMatches.length) {
    return exactMatches;
  }

  const maxDistance = getMaxDistance(normalizedQuery.length);
  if (maxDistance === 0) {
    return [];
  }

  let bestDistance = maxDistance + 1;
  const matchesBySize = new Map<ConfigData['size'], ConfigData['icons']>();

  for (const { size, icons } of config) {
    for (const icon of icons) {
      const distance = getClosestDistance(
        normalizedQuery,
        [...getSearchTerms(icon.name), ...getIconAliases(icon.name)],
        Math.min(maxDistance, bestDistance),
      );
      if (distance > bestDistance || distance > maxDistance) {
        continue;
      }
      if (distance < bestDistance) {
        bestDistance = distance;
        matchesBySize.clear();
      }
      const matches = matchesBySize.get(size) ?? [];
      matches.push(icon);
      matchesBySize.set(size, matches);
    }
  }

  return config.flatMap(({ size }) => {
    const icons = matchesBySize.get(size);
    return icons ? [{ size, icons }] : [];
  });
};
