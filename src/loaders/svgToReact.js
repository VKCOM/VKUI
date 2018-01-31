module.exports = function (source) {
  return `
    ${source.replace('export default symbol', '')}
    import React from 'react';
    import PropTypes from 'prop-types';
    
    const width = symbol.viewBox.split(' ')[2];
    const height = symbol.viewBox.split(' ')[3];
    
    export default class SvgIcon extends React.Component {
      
      render() {
        return <svg viewBox={symbol.viewBox} width={width} height={height}><use xlinkHref={'#' + symbol.id} style={{ fill: 'currentColor', color: this.props.fill }} /></svg>;
      }
    }
    
    SvgIcon.propTypes = {
      fill: PropTypes.string.isRequired
    }
    
    SvgIcon.defaultProps = {
      fill: '#AAAEB3'
    }
  `;
};

