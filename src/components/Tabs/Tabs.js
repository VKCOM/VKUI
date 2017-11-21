import './Tabs.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

import Tappable from '../Tappable/Tappable';

const baseClassNames = getClassName('Tabs');

export default class Tabs extends Component {

  static propTypes = {
    tabs: PropTypes.array,
  };

  static defaultProps = {
    tabs: [],
  };

  render() {
    const {tabs} = this.props;

    return (<div className={baseClassNames}>
      {Array.isArray(tabs) && tabs.length && tabs.map((tab, i) => {
        return (
          <div className={classnames("Tabs__tab", {
            "Tabs__tab--active": tab.isActive,
          })} key={i}>
            <Tappable onClick={tab.action}>
              {tab.title}
            </Tappable>
          </div>
        )
      })}
    </div>);
  }
}