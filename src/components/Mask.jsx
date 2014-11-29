/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Mask = React.createClass({

  autoClose(e){

    this.props.autoClose(e);

    return;
  },

  render() {

    var mask = {
      backgroundColor: "rgba( 0, 0, 0, .95 )",
      position: "fixed",
      height: "100%",
      width: "100%",
      zIndex: "1031",
      display: typeof this.props.show !== 'undefined' && this.props.show ? "block" : "none"
    };

    return (
      <div id="mask" style={ mask } onClick={ this.autoClose }></div>
    );

  }
});

module.exports = Mask;
