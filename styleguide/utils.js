window.uaList = {
  ios: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
  android: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36'
};

Object.defineProperty(navigator, 'userAgent', {
  get: function () { return window.localStorage.getItem('vkui-styleguide:ua') || window.uaList.ios; }
});

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const testStrings = [
  'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.',
  'Переписали правилами по всей свой буквенных единственное жизни пустился!',
  'Которой реторический, текстами речью маленький обеспечивает пор они знаках свой текстов но!',
  'Семантика по всей ведущими несколько за, выйти эта, lorem свой рукописи на берегу свое обеспечивает, злых коварный?',
  'Путь не сих переулка сбить моей, напоивший, над продолжил необходимыми, снова журчит за грамматики злых.',
  'По всей подпоясал, безопасную рыбного деревни послушавшись свое маленький текстов.',
  'Сбить свою несколько маленький взобравшись.',
  'Подпоясал осталось своего, до это свой реторический всеми агенство.',
  'Назад океана, коварных они моей дороге но рукописи которое заманивший власти проектах текст себя текста то великий решила взобравшись большой приставка?',
  'Свой там, переписывается семь, напоивший буквенных необходимыми если первую предложения своих?',
  'Живет взобравшись лучше безорфографичный текстов пояс заманивший родного не она одна он дороге дал алфавит заголовок мир последний',
  'Напоивший продолжил сих свой буквенных власти диких составитель, правилами lorem.',
  'Что образ прямо ipsum от всех назад предупреждал наш точках.',
  'Живет всеми но текстов рекламных грамматики залетают все вершину последний. Запятой его там, великий она это?',
  'Рот языкового скатился, злых, жаренные вопрос снова он единственное журчит меня одна дорогу залетают повстречался толку страна вершину.'
];

export const testUsers = [
  {
    'name': 'Катя Лебедева',
    'photo': 'https://sun9-13.userapi.com/c846216/v846216067/c640b/QKvJtUOHEWk.jpg?ava=1'
  },
  {
    'name': 'Антон Циварев',
    'photo': 'https://pp.userapi.com/c830708/v830708352/1c50b4/Nl8LPuMRj5k.jpg?ava=1',
  },
  {
    'name': 'Настя Семенюк',
    'photo': 'https://sun9-22.userapi.com/c852132/v852132805/8c0d8/N9WQym0ZEyc.jpg?ava=1',
  },
  {
    'name': 'Тимофей Чаптыков',
    'photo': 'https://pp.userapi.com/c845121/v845121950/63c01/svMMPOmI5SM.jpg?ava=1',
  },
  {
    'name': 'Павел Князев',
    'photo': 'https://pp.userapi.com/c844521/v844521213/83b9f/uYAH_OJZisM.jpg?ava=1',
  },
  {
    'name': 'Igor Fedorov',
    'photo': 'https://sun9-22.userapi.com/c851320/v851320261/7159d/VPN91nn0cHY.jpg?ava=1',
  },
  {
    'name': 'Artur Stambultsian',
    'photo': 'https://pp.userapi.com/c845324/v845324995/12912f/FyWbKh6vuqs.jpg?ava=1',
  },
  {
    'name': 'Кирилл Аверьянов',
    'photo': 'https://pp.userapi.com/c850636/v850636435/1c3d7/7IYTKs2elVM.jpg?ava=1',
  },
  {
    'name': 'Коля Борисов',
    'photo': 'https://pp.userapi.com/c850128/v850128006/86340/1IV4iSrVWQY.jpg?ava=1',
  },
  {
    'name': 'Михаил Лихачёв',
    'photo': 'https://pp.userapi.com/c840524/v840524444/1f9cd/Q7m20gtLBUw.jpg?ava=1',
  },
];

let prevIndex = 0;
export function getRandomUser() {
  prevIndex++;
  if (prevIndex >= testUsers.length - 1) prevIndex = 0;

  let user = testUsers[prevIndex];
  user.id = getRandomInt(1, 20e8);
  return user;
}

export const importantCountries = [{
  id: 1,
  title: 'Россия'
}, {
  id: 2,
  title: 'Украина'
}, {
  id: 3,
  title: 'Беларусь'
}, {
  id: 4,
  title: 'Казахстан'
}, {
  id: 5,
  title: 'Азербайджан'
}, {
  id: 6,
  title: 'Армения'
}, {
  id: 7,
  title: 'Грузия'
}, {
  id: 8,
  title: 'Израиль'
}, {
  id: 9,
  title: 'США'
}, {
  id: 65,
  title: 'Германия'
}, {
  id: 11,
  title: 'Кыргызстан'
}, {
  id: 12,
  title: 'Латвия'
}, {
  id: 13,
  title: 'Литва'
}, {
  id: 14,
  title: 'Эстония'
}, {
  id: 15,
  title: 'Молдова'
}, {
  id: 16,
  title: 'Таджикистан'
}, {
  id: 17,
  title: 'Туркменистан'
}, {
  id: 18,
  title: 'Узбекистан'
}];
