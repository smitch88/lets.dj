/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');

var FooterNavbar = React.createClass({
  render() {
    return (
      <div className="navbar-footer">
        <div className="container">
          <p className="text-muted">
            <span>© lets.dj</span>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/host">Host</Link></span>
            <span><Link to="/find">Find</Link></span>
            <span><Link to="/about">About</Link></span>
            <span><Link to="/privacy">Privacy</Link></span>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = FooterNavbar;
