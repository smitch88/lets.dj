/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var AboutPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'About',
      layout: DefaultLayout,
      breadcrumb: (
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">About</li>
        </ol>
      )
    };
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>What's Up?</h1>
        </div>
      </div>
    );
  }
});

module.exports = AboutPage;
