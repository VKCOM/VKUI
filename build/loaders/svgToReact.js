module.exports = function (source) {
  return `
    ${source.replace('export default symbol', '')}
    import React from 'react';
    import PropTypes from 'prop-types';
    
    const width = symbol.viewBox.split(' ')[2];
    const height = symbol.viewBox.split(' ')[3];
    
    export default class SvgIcon extends React.Component {
    
      componentDidMount () {
        if (this.context.document) {
          let sprite = document.getElementById('__SVG_SPRITE_NODE__');
          let innerSprite = this.context.document.getElementById('__SVG_SPRITE_NODE__');
      
          if (innerSprite) {
            this.context.document.body.removeChild(innerSprite);
          }
          if (sprite) {
            this.context.document.body.appendChild(sprite.cloneNode(true));
          }
        }
      }
      
      render() {
        return (
          <div style={{ width: width + 'px', height: height + 'px' }} onClick={this.props.onClick}>
            <svg viewBox={symbol.viewBox} width={width} height={height} style={{ display: 'block' }}>
              <use xlinkHref={'#' + symbol.id} style={{ fill: 'currentColor', color: this.props.fill }} />
            </svg>
          </div>
        );
      }
    }
    
    SvgIcon.propTypes = {
      fill: PropTypes.string.isRequired,
      onClick: PropTypes.func
    };
    
    SvgIcon.defaultProps = {
      fill: '#AAAEB3'
    };
    
    SvgIcon.contextTypes = {
      document: PropTypes.any
    };
  `;
};

