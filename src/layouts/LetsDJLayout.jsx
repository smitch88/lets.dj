/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var Navbar = require('../components/Navbar.jsx');
var FooterNavbar = require('../components/FooterNavbar.jsx');

var LetsDJLayout = React.createClass({

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

  getInitialState(){
    return {
      canScroll: true
    }
  },

  toggleScrolling( scrollable ){
    document.body.style.overflowY = !scrollable ? "hidden" : "scroll";
    return;
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
        <div id="letsdjapp">
          <Navbar canScroll={ this.toggleScrolling } />
          { header }
          { this.props.children }
          <FooterNavbar />
        </div>
    );
  }
});

module.exports = LetsDJLayout;
