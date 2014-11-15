/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('./Link.jsx');

var Navbar = React.createClass({
  render() {
    return (
      <div className="nav-main navbar-top">
        <div className="container">
          <div className="text-center">
            <Link className="navbar-item" to="/">
              <span><i className="glyphicon glyphicon-home"></i></span>
            </Link>
            <Link className="navbar-item" to="/host">
              <span><i className="glyphicon glyphicon-headphones"></i></span>
            </Link>
            <Link className="navbar-item" to="/find">
              <span><i className="glyphicon glyphicon-search"></i></span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
