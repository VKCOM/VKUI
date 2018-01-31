import React from 'react';
import PropTypes from 'prop-types';

export default class DocIcon extends React.Component {

  static contextTypes = {
    document: PropTypes.any
  };

  componentDidMount () {
    let sprite = document.getElementById('__SVG_SPRITE_NODE__');
    let innerSprite = this.context.document.getElementById('__SVG_SPRITE_NODE__');

    if (innerSprite) {
      this.context.document.body.removeChild(innerSprite);
    }
    if (sprite) {
      this.context.document.body.appendChild(sprite.cloneNode(true));
    }
  }

  render () {

    return this.props.children;
  }
}
