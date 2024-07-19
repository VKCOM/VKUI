/**
 * в React есть проблема: при навигации по radio кнопкам тригерится событие click
 * С помощью этой проверки можно отличить настоящее событие клика.
 * @see https://github.com/VKCOM/VKUI/issues/6954
 * @see https://github.com/facebook/react/issues/7407
 */
export const isRealClickEvent = (event: React.MouseEvent) => {
  return event.type === 'click' && event.clientX !== 0 && event.clientY !== 0;
};
