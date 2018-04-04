import React from 'react';
import { platform, IOS } from '../../lib/platform';
import SearchIOS from '../SearchIOS/SearchIOS';
import SearchAndroid from '../SearchAndroid/SearchAndroid';

const osname = platform();

export default class Search extends React.Component {

  render () {
    if (osname === IOS) {
      return <SearchIOS {...this.props} />;
    } else {
      return <SearchAndroid {...this.props} />;
    }
  }
}
