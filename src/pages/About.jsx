/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var LetsDJLayout = require('../layouts/LetsDJLayout.jsx');

var AboutPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'About',
      layout: LetsDJLayout,
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
          <div className="col-md-12">
            <h1>What's Up?</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AboutPage;
