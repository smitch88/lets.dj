/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var Navbar = require('../components/Navbar.jsx');

var DefaultLayout = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    breadcrumb: React.PropTypes.component
  },
  getDefaultProps() {
    return {
      title: 'lets.dj',
      description: 'A social music experiment'
    };
  },
  render() {
    var header = this.props.breadcrumb ? (
      <div className="container">
        <h2>{this.props.title}</h2>
        {this.props.breadcrumb}
      </div>
    ) : (
      <div className="jumbotron">
        <div className="container text-center">
          <h1>lets.dj</h1>
          <p>A social music experiment. Be the DJ.</p>
        </div>
      </div>
    );

    return (
      <div>
        <Navbar />
        {header}
        {this.props.children}
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
      </div>
    );
  }
});

module.exports = DefaultLayout;
