module.exports = function (source) {
  return `
    ${source.replace('export default symbol', '')}
    import React from 'react';
    import PropTypes from 'prop-types';
    
    const width = symbol.viewBox.split(' ')[2];
    const height = symbol.viewBox.split(' ')[3];
    
    function SvgIcon (props) {
      return (
        <div style={{ width: width + 'px', height: height + 'px' }} onClick={props.onClick}>
          <svg viewBox={symbol.viewBox} width={width} height={height} style={{ display: 'block' }}>
            <use xlinkHref={'#' + symbol.id} style={{ fill: 'currentColor', color: props.fill || '#AAAEB3' }} />
          </svg>
        </div>
      );
    }
    
    SvgIcon.displayName = 'icon-' + symbol.id;
    
    export default SvgIcon;
  `;
};

