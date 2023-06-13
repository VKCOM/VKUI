import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Text } from './Text';

describe('Text', () => {
  baselineComponent((props) => <Text {...props}>Text</Text>);
});
