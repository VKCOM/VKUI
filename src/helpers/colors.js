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
  [keys.mutedBlack]: '#2C2D2E',
  [keys.subheadGray]: '#71757A',
  [keys.captionGray]: '#909499',
  [keys.lightGray]: '#AAAEB3',
  [keys.backgroundBlue]: '#EBEDF0',

  [keys.mediumBlueGray]: '#818C99',
  [keys.lightBlueGray]: '#99A2AD',

  [keys.mutedBlue]: '#45678F',
  [keys.headerBlue]: '#5181B8',
  [keys.accentBlue]: '#528BCC',
  [keys.lightBlue]: '#74A2D6',

  [keys.niceRed]: '#FF3347',
  [keys.red]: '#E64646',
  [keys.fireOrange]: '#F05C44',
  [keys.orange]: '#FFA000',
  [keys.green]: '#4BB34B',
  [keys.blue]: '#5C9CE6',

  [keys.separator]: 'rgba(0, 0, 0, .12)',
  [keys.placeholderBackground]: 'rgba(0, 28, 61, .08)',
  [keys.placeholderForeground]: 'rgba(0, 36, 77, .25)'
};

module.exports = {
  titles, values
};
