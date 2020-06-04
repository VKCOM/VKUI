```jsx
const promoBannerProps = {
  title: 'Заголовок',
  domain: 'vk.com',
  trackingLink: 'https://vk.com',
  ctaText: 'Перейти',
  advertisingLabel: 'Реклама',
  iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
  description: 'Описание рекламы',
  ageRestriction: 14,
  statistics: [
    { url: '', type: 'playbackStarted' },
    { url: '', type: 'click' }
  ]
};

<View activePanel="promo">
  <Panel id="promo">
    <FixedLayout vertical="bottom">
      <PromoBanner bannerData={promoBannerProps} />
    </FixedLayout>
  </Panel>
</View>
```
