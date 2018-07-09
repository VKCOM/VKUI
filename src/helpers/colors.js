const keys = {
  black: 'black',
  mutedBlack: 'mutedBlack',
  subheadGray: 'subheadGray',
  captionGray: 'captionGray',
  lightGray: 'lightGray',
  backgroundBlue: 'backgroundBlue',

  mediumBlueGray: 'mediumBlueGray',
  lightBlueGray: 'lightBlueGray',

  mutedBlue: 'mutedBlue',
  headerBlue: 'headerBlue',
  accentBlue: 'accentBlue',
  lightBlue: 'lightBlue',

  niceRed: 'niceRed',
  red: 'red',
  fireOrange: 'fireOrange',
  orange: 'orange',
  green: 'green',
  blue: 'blue',

  separator: 'separator',
  placeholderBackground: 'placeholderBackground',
  placeholderForeground: 'placeholderForeground'
};

const titles = {
  [keys.black]: 'Текст',
  [keys.mutedBlack]: 'Заголовки, текст',
  [keys.subheadGray]: 'Подзаголовки, надписи',
  [keys.captionGray]: 'Подписи',
  [keys.lightGray]: 'Иконки',
  [keys.backgroundBlue]: 'Фон',

  [keys.mediumBlueGray]: 'Средний голубо-серый',
  [keys.lightBlueGray]: 'Контурные иконки',

  [keys.mutedBlue]: 'Вторичные кнопки',
  [keys.headerBlue]: 'Шапки, кнопки',
  [keys.accentBlue]: 'Ссылки, акценты',
  [keys.lightBlue]: 'Верификации',

  [keys.niceRed]: 'Лайки',
  [keys.red]: 'Красный',
  [keys.fireOrange]: 'Огненный',
  [keys.orange]: 'Оранжевый',
  [keys.green]: 'Зеленый',
  [keys.blue]: 'Голубой',

  [keys.separator]: 'Разделители',
  [keys.placeholderBackground]: 'Фон плейсхолдеров',
  [keys.placeholderForeground]: 'Заливка плейсхолдеров'
};

const values = {
  [keys.black]: '#000',
  [keys.mutedBlack]: '#2c2d2e',
  [keys.subheadGray]: '#71757a',
  [keys.captionGray]: '#909499',
  [keys.lightGray]: '#aaaeb3',
  [keys.backgroundBlue]: '#ebedf0',

  [keys.mediumBlueGray]: '#818c99',
  [keys.lightBlueGray]: '#99a2ad',

  [keys.mutedBlue]: '#45678f',
  [keys.headerBlue]: '#5181b8',
  [keys.accentBlue]: '#528bcc',
  [keys.lightBlue]: '#74a2d6',

  [keys.niceRed]: '#ff3347',
  [keys.red]: '#e64646',
  [keys.fireOrange]: '#f05c44',
  [keys.orange]: '#ffa000',
  [keys.green]: '#4bb34b',
  [keys.blue]: '#5c9ce6',

  [keys.separator]: 'rgba(0, 0, 0, .12)',
  [keys.placeholderBackground]: 'rgba(0, 28, 61, .08)',
  [keys.placeholderForeground]: 'rgba(0, 36, 77, .25)'
};

module.exports = {
  titles, values, keys
};
