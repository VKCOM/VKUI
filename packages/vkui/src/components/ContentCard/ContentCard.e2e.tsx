import { describeScreenshotFuzz } from '../../testing/e2e';
import { ContentCard } from './ContentCard';

describe('ContentCard', () => {
  describeScreenshotFuzz(ContentCard, [
    {
      subtitle: ['Album'],
      header: ['Halsey – Badlands'],
      text: [
        'Badlands is the story about dreams and cruel reality, about opportunities and insurmountable obstacles, about love and broken hearts.',
      ],
      caption: ['Blue Vinyl · EU · 2015'],
      mode: ['tint', 'shadow', 'outline', undefined],
      $adaptivity: 'y',
    },
  ]);
});
