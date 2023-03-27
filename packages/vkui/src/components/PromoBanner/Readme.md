```jsx
const promoBannerProps = {
  title: 'Заголовок',
  domain: 'vk.com',
  trackingLink: 'https://vk.com',
  ctaText: 'Перейти',
  advertisingLabel: 'Реклама',
  iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
  description: 'Описание рекламы',
  ageRestrictions: '14+',
  statistics: [
    { url: '', type: 'playbackStarted' },
    { url: '', type: 'click' },
  ],
  adChoices: {
    options: [
      {
        name: 'О рекламодателе',
        onClick: () => {
          window.open('https://vk.com', '_blank').focus();
        },
        shouldCloseAd: false,
      },
      {
        name: 'Скопировать ID (2VtzqxC9CNb)',
        onClick: () => {
          void navigator.clipboard.writeText('2VtzqxC9CNb');
        },
        shouldCloseAd: false,
      },
      {
        name: 'Не интересно',
        onClick: () => {
          window.open('https://vk.com', '_blank').focus();
        },
        shouldCloseAd: true,
      },
      {
        name: 'Уже приобретено',
        onClick: () => {
          window.open('https://vk.com', '_blank').focus();
        },
        shouldCloseAd: true,
      },
    ],
  },
};

<View activePanel="promo">
  <Panel id="promo">
    <FixedLayout vertical="bottom">
      <PromoBanner bannerData={promoBannerProps} />
    </FixedLayout>
  </Panel>
</View>;
```
