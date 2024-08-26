Подвал для списков.

## Цифровая доступность (a11y)

По умолчанию, в компоненте используется тэг `footer`, который дублируется ролью `role="contentinfo"` ([для Safari<=13](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer#accessibility)).

Семантически в элементе с тэгом `footer`, согласно спецификации [[1](https://doka.guide/html/footer/), [2](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element)], следует располагать контакты, ссылки на разделы сайта, копирайт.

Если вам нужна только декоративная составляющая `Footer`, то желательно поменять тэг, используемый по умолчанию, с помощью свойства `Component`.
Например:

```jsx static
<Footer Component="div">...</Footer>
```

Тег `footer` представляет из себя подвал для [секционного контента](https://developer.mozilla.org/ru/docs/Web/HTML/Content_categories#%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82), если ближайший родитель это `<article>`, `<aside>`, `<nav>` и `<section>`, или подвал для всей страницы, если ближайший родитель это `body`.

Если `footer` описывает подвал всей страницы, то такой элемент должен быть [один на всю страницу](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role#one_contentinfo_landmark_per_page), либо каждый [`footer`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role#labeling_landmarks) должен иметь `aria-label`, чтобы пользователи скринридеров могли легко отличить один от другого.

Также такой элемент является частью [landmark](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role), раздела навигации предназначенного для быстрого перемещения по разделам страницы.

Поэтому стоит внимательно следить за тем к чему относится `Footer`, ко всей странице, или к секции, и стоит ли вообще использовать тэг `footer`.

<br />
<hr />
<br />

В примере ниже мы переопределяем значение `Component` c `"footer"` на `"div"`, так как контент не содержит в себе контакты автора, не является копирайтом или ссылкой на какой-то раздел сайта, а также существует вне секционного контента [Group](#/!Group) (тэг `section`), а значит семантически будет являться подвалом для всей страницы, а мы этого не хотим.

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>Footer</PanelHeader>
    <Group>
      <List>
        <Cell before={<Avatar />} subtitle="Веб-сайт" onClick={noop}>
          Команда ВКонтакте
        </Cell>
        <Cell before={<Avatar />} subtitle="Музыкант" onClick={noop}>
          Robbie Williams
        </Cell>
        <Cell before={<Avatar />} subtitle="Издательский дом">
          ПостНаука
        </Cell>
      </List>
    </Group>
    <Footer Component="div">3 сообщества</Footer>
  </Panel>
</View>
```

<br />
<hr />

В этом примере мы оставляем значение `Component` по умолчанию - `footer`. Так как футер находится внутри [Group](#/!Group) (тег `section`) и является информацией об авторском праве.

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>Footer</PanelHeader>
    <Group>
      <List>
        <Cell before={<Avatar />} subtitle="Веб-сайт" onClick={noop}>
          Команда ВКонтакте
        </Cell>
        <Cell before={<Avatar />} subtitle="Музыкант" onClick={noop}>
          Robbie Williams
        </Cell>
        <Cell before={<Avatar />} subtitle="Издательский дом" onClick={noop}>
          ПостНаука
        </Cell>
      </List>
      <Footer>Copyright ©vk.com</Footer>
    </Group>
  </Panel>
</View>
```
