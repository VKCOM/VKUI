import { Touch } from '@vkontakte/vkui';
import render from '../../render-app';

const array = new Array(1000).fill('text');

export default function Test() {
  return (
    <>
      {array.map((children, index) => (
        <Touch key={index}>
          {children} {index}
        </Touch>
      ))}
    </>
  );
}

render(Test);
