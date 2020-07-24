import React from 'react';
import { users } from './demo_dataset';

window.uaList = {
  ios: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  android: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36',
};

Object.defineProperty(navigator, 'userAgent', {
  get: function() {
    return window.localStorage.getItem('vkui-styleguide:ua') || window.uaList.ios;
  },
});

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const schemeOptions = ['bright_light', 'space_gray'].map((schemeId) => (
  <option value={schemeId} key={schemeId}>{schemeId}</option>
));

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomObjectKey(object) {
  const keys = Object.keys(object);
  return keys[keys.length * Math.random() << 0];
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
  'Рот языкового скатился, злых, жаренные вопрос снова он единственное журчит меня одна дорогу залетают повстречался толку страна вершину.',
];

const photos = {
  'app_shorm_online': {
    photo_100: 'https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg',
  },
  'app_shashki': {
    photo_100: 'https://pp.userapi.com/c848536/v848536020/18242/ZLjAYM59EqY.jpg',
  },
  'app_vega_mix': {
    photo_100: 'https://pp.userapi.com/c849028/v849028348/1b353/Na_GRlqgRNM.jpg',
  },
  'app_zagadki': {
    photo_100: 'https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg',
    photo_200: 'https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg',
  },

  'audio_arctic_monkeys': {
    photo_100: 'https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg',
  },
  'audio_leto_zveri': {
    photo_100: 'https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg',
  },
  'audio_depeche_mode': {
    photo_100: 'https://pp.userapi.com/c837628/v837628453/39175/4JRjMaFvCrw.jpg',
  },
  'audio_linkin_park': {
    photo_100: 'https://sun9-20.userapi.com/c846120/v846120617/1ff005/WmCcgV5CozY.jpg'
  },
  'audio_face': {
    photo_100: 'https://sun9-69.userapi.com/c845218/v845218888/182681/Al6XrhpJYn0.jpg'
  },

  'chat_basketball': {
    photo_100: 'https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg',
    photo_200: 'https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg',
  },
};

export function getAvatarUrl(id, size) {
  let object;

  if (id.indexOf('user_') === 0) {
    object = users.find((user) => 'user_' + user.screen_name === id);
    if (!object) {
      object = getRandomArrayElement(users);
    }
  } else {
    if (!photos.hasOwnProperty(id)) {
      id = getRandomObjectKey(photos);
    }
    object = photos[id];
  }

  if (size === 200) {
    return object.photo_200 || object.photo_100;
  } else {
    return object.photo_100;
  }
}

export function getRandomUser() {
  const user = Object.assign({}, getRandomArrayElement(users));
  user.id = getRandomInt(1, 20e8);
  return user;
}

export function getRandomUsers(count) {
  let items = [];
  let names = {};

  for (let i = 0; i < count; i++) {
    let user = getRandomUser();

    if (names[user.name]) {
      for (let j = 0; j < 5; j++) {
        user = getRandomUser();
        if (!names[user.name]) {
          break;
        }
      }
    }

    items.push(user);
    names[user.name] = true;
  }

  return items;
}

export const importantCountries = [{
  id: 1,
  title: 'Россия',
}, {
  id: 2,
  title: 'Украина',
}, {
  id: 3,
  title: 'Беларусь',
}, {
  id: 4,
  title: 'Казахстан',
}, {
  id: 5,
  title: 'Азербайджан',
}, {
  id: 6,
  title: 'Армения',
}, {
  id: 7,
  title: 'Грузия',
}, {
  id: 8,
  title: 'Израиль',
}, {
  id: 9,
  title: 'США',
}, {
  id: 65,
  title: 'Германия',
}, {
  id: 11,
  title: 'Кыргызстан',
}, {
  id: 12,
  title: 'Латвия',
}, {
  id: 13,
  title: 'Литва',
}, {
  id: 14,
  title: 'Эстония',
}, {
  id: 15,
  title: 'Молдова',
}, {
  id: 16,
  title: 'Таджикистан',
}, {
  id: 17,
  title: 'Туркменистан',
}, {
  id: 18,
  title: 'Узбекистан',
}];
