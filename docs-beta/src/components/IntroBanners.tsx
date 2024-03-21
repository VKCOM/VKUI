import * as React from 'react';
import Banner from './Banner';

export default function IntroBanner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col padding-left--none">
          <Banner
            title="Сообщить о проблеме"
            linkTitle="Написать сообщение"
            href="https://github.com/VKCOM/VKUI/issues/new/choose"
          >
            Напишите нам issue, если нашли баг или у вас есть предложения по улучшению библиотеки.
            Если вы хотите задать вопрос или обсудить библиотеку, воспользуйтесь{' '}
            <a href="https://github.com/VKCOM/VKUI/discussions/categories/q-a">дискуссиями</a>.
          </Banner>
        </div>
        <div className="col padding-left--none">
          <Banner
            title="Contributing"
            linkTitle="Отправить Request"
            href="https://github.com/VKCOM/VKUI/pulls"
          >
            Мы очень радуемся, когда пользователи библиотеки работают над её улучшением. Для того,
            чтобы оставить след в истории, сделайте форк проекта, внесите изменения и отправьте нам
            Pull Request.
          </Banner>
        </div>
      </div>
    </div>
  );
}
