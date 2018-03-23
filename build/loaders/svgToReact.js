module.exports = function (source) {
  return `
    ${source.replace('export default symbol', '')}
    import React from 'react';
    import PropTypes from 'prop-types';
    
    const width = symbol.viewBox.split(' ')[2];
    const height = symbol.viewBox.split(' ')[3];
    const size = Math.max(width, height); 
    
    function SvgIcon (props) {
      const className = 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (props.className || '');
      return (
        <div className={className} style={{ width: width + 'px', height: height + 'px', ...props.style }} onClick={props.onClick}>
          <svg viewBox={symbol.viewBox} width={width} height={height} style={{ display: 'block' }}>
            <use xlinkHref={'#' + symbol.id} style={{ fill: 'currentColor', color: props.fill }} />
          </svg>
        </div>
      );
    }
    export default SvgIcon;
  `;
};

