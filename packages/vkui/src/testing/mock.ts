import { UserInterface, users } from './user_dataset';

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomObjectKey(object: Record<string, unknown>) {
  const keys = Object.keys(object);
  return keys[(keys.length * Math.random()) << 0];
}

interface PhotoUrls {
  photo_100: string;
  photo_200?: string;
}

const photos: Record<string, PhotoUrls> = {
  app_shorm_online: {
    photo_100: 'https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg',
  },
  app_shashki: {
    photo_100: 'https://pp.userapi.com/c848536/v848536020/18242/ZLjAYM59EqY.jpg',
  },
  app_vega_mix: {
    photo_100: 'https://pp.userapi.com/c849028/v849028348/1b353/Na_GRlqgRNM.jpg',
  },
  app_zagadki: {
    photo_100: 'https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg',
    photo_200: 'https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg',
  },
  app_promokot: {
    photo_100: 'https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg',
  },
  app_split_bill: {
    photo_100: 'https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg',
  },
  app_emails: {
    photo_100: 'https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg',
  },
  app_lyrics: {
    photo_100: 'https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg',
  },

  audio_arctic_monkeys: {
    photo_100: 'https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg',
  },
  audio_leto_zveri: {
    photo_100: 'https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg',
  },
  audio_depeche_mode: {
    photo_100: 'https://pp.userapi.com/c837628/v837628453/39175/4JRjMaFvCrw.jpg',
  },
  audio_linkin_park: {
    photo_100: 'https://pp.userapi.com/c846120/v846120617/1ff005/WmCcgV5CozY.jpg',
  },
  audio_face: {
    photo_100: 'https://pp.userapi.com/c845218/v845218888/182681/Al6XrhpJYn0.jpg',
  },

  chat_basketball: {
    photo_100: 'https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg',
    photo_200: 'https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg',
  },
};

export function getAvatarUrl(id?: string, size?: number) {
  let object;

  if (id?.startsWith('user_')) {
    object = users.find((user) => 'user_' + user.screen_name === id);
    if (!object) {
      object = getRandomArrayElement(users);
    }
  } else {
    if (!id || !photos.hasOwnProperty(id)) {
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

function prepareUser(user: UserInterface) {
  return {
    ...user,
    name: `${user.first_name} ${user.last_name}`,
    initials: `${user.first_name[0]}${user.last_name[0]}`,
  };
}

export function getRandomUser() {
  const user = Object.assign({}, getRandomArrayElement(users));
  user.id = getRandomInt(1, 20e8);

  return prepareUser(user);
}

export function getAllUsers() {
  return users.map((user) => prepareUser(user));
}

export interface UserExtendedInterface extends UserInterface {
  name: string;
  initials: string;
}

export function getRandomUsers(count: number) {
  let items: UserExtendedInterface[] = [];
  let names: Record<string, boolean> = {};

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

export const importantCountries = [
  {
    id: 1,
    title: 'Россия',
  },
  {
    id: 2,
    title: 'Украина',
  },
  {
    id: 3,
    title: 'Беларусь',
  },
  {
    id: 4,
    title: 'Казахстан',
  },
  {
    id: 5,
    title: 'Азербайджан',
  },
  {
    id: 6,
    title: 'Армения',
  },
  {
    id: 7,
    title: 'Грузия',
  },
  {
    id: 8,
    title: 'Израиль',
  },
  {
    id: 9,
    title: 'США',
  },
  {
    id: 65,
    title: 'Германия',
  },
  {
    id: 11,
    title: 'Кыргызстан',
  },
  {
    id: 12,
    title: 'Латвия',
  },
  {
    id: 13,
    title: 'Литва',
  },
  {
    id: 14,
    title: 'Эстония',
  },
  {
    id: 15,
    title: 'Молдова',
  },
  {
    id: 16,
    title: 'Таджикистан',
  },
  {
    id: 17,
    title: 'Туркменистан',
  },
  {
    id: 18,
    title: 'Узбекистан',
  },
];

export const cities = [
  {
    label: 'Санкт-Петербург',
    description: 'Россия',
    value: '0',
  },
  {
    label: 'Москва',
    description: 'Россия',
    value: '1',
  },
  {
    label: 'Новосибирск',
    description: 'Россия',
    disabled: true,
    value: '2',
  },
  {
    label: 'Нью-Йорк',
    description: 'США',
    value: '3',
  },
  {
    label: 'Чикаго',
    description: 'США',
    value: '4',
  },
];
