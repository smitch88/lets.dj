/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var LetsDJLayout = require('../layouts/LetsDJLayout.jsx');

var HostPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Host A Party',
      layout: LetsDJLayout,
      breadcrumb: (
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Host A Party</li>
        </ol>
      )
    };
  },
  render() {
    return (
      <div className="container"></div>
    );
  }
});

module.exports = HostPage;
