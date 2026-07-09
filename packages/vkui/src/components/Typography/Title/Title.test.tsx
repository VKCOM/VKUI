import { describe } from 'vitest';
import { baselineComponent } from '../../../testing/utils';
import { Title } from './Title';

describe('Title', () => {
  baselineComponent((props) => <Title {...props}>Title</Title>);
});
