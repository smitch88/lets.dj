/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Closer = React.createClass({

  autoClose(e){

    this.props.autoClose(e);

    return;
  },

  render() {

    var closerStyling = {
      height: this.props.height + "px",
      width: this.props.width + "px",
      position: "absolute",
      zIndex: "1055",
      right: "7px",
      top: "10px",
      cursor: "pointer",
      display: typeof this.props.show !== 'undefined' && this.props.show ? "block" : "none"
    };

    var iconStyling = {
      fontSize: "2em",
      color: "#ffffff"
    };

    return (
      <a style={ closerStyling } onClick={ this.autoClose } className="closer">
        <i style={ iconStyling } className="glyphicon glyphicon-remove"></i>
      </a>
    );
  }

});

module.exports = Closer;
