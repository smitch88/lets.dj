/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var LetsDJLayout = require('../layouts/LetsDJLayout.jsx');

var FindPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Find A Hangout',
      layout: LetsDJLayout,
      breadcrumb: (
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Find</li>
        </ol>
      )
    };
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Find shizz?</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FindPage;
