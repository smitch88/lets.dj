/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var PrivacyPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Privacy Policy',
      layout: DefaultLayout,
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
      <div className="container">
      </div>
    );
  }
});

module.exports = PrivacyPage;
