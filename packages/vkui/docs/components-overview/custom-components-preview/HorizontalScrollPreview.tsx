'use client';

import { useRef } from 'react';
import { Avatar, HorizontalCell, HorizontalScroll } from '../../../src';
import { getRandomUsers } from '../../../src/testing/mock';

export const HorizontalScrollPreview = () => {
  const friends = useRef(getRandomUsers(30));

  return (
    <HorizontalScroll showArrows="always" style={{ maxWidth: 400 }}>
      {friends.current.map((item) => {
        return (
          <HorizontalCell key={item.id} title={item.first_name}>
            <Avatar size={56} src={item.photo_200} />
          </HorizontalCell>
        );
      })}
    </HorizontalScroll>
  );
};
