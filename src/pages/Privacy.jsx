/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var LetsDJLayout = require('../layouts/LetsDJLayout.jsx');

var PrivacyPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Privacy Policy',
      layout: LetsDJLayout,
      breadcrumb: (
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Privacy</li>
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

module.exports = PrivacyPage;
