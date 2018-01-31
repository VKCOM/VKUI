module.exports = function (source) {
  return `
    ${source.replace('export default symbol', '')}
    import React from 'react';
    import PropTypes from 'prop-types';   
    
    export default class SvgIcon extends React.Component {
      
      render() {
        return <svg viewBox={symbol.viewBox}><use xlinkHref={'#' + symbol.id} style={{ fill: 'currentColor', color: this.props.fill }} /></svg>;
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

