/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var LetsDJLayout = require('../layouts/LetsDJLayout.jsx');

var AccountPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'My Account',
      layout: LetsDJLayout,
      breadcrumb: (
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Account</li>
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

module.exports = AccountPage;
