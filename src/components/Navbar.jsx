/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('./Link.jsx');
var Searchbar = require('../components/Searchbar.jsx');
var Mask = require('../components/Mask.jsx');
var Closer = require('../components/Closer.jsx');

var Navbar = React.createClass({

  getInitialState() {
    return {
      showSearch: false
    };
  },

  toggleSearchBar(e){

    if( e ) e.preventDefault();

    this.props.canScroll( this.state.showSearch ); // propagate up

    this.setState({ showSearch: !this.state.showSearch }); // flip show state

    return;
  },

  render() {

    var accountInformationStyles = {
      position: "absolute",
      left: "50%",
      top: "70px",
      transform: "translate(-50%, 0 )"
    };

    var userInformation = {
      fontSize: "14px"
    };

    return (

      <div id="header">

        <div className="nav-main navbar-top">

          <Link to="/account" style={ accountInformationStyles }>
            <p style={ userInformation }>yo, <span className="text-primary">dj sbmitchell</span></p>
          </Link>

          <div className="container">

            <div className="row">

              <div className="col-xs-4 text-center">

                <Link className="navbar-item" to="/">
                  <span><i className="glyphicon glyphicon-home"></i></span>
                </Link>

              </div>

              <div className="col-xs-4 text-center">

                <Link className="navbar-item" to="/host">
                  <span><i className="glyphicon glyphicon-headphones"></i></span>
                </Link>

              </div>

              <div className="col-xs-4 text-center">

                <a className="navbar-item" href="#" onClick={ this.toggleSearchBar }>
                  <span><i className="glyphicon glyphicon-search"></i></span>
                </a>

              </div>

            </div>

          </div>

        </div>

        <div id="searchbar-wrapper">

          <Searchbar show={ this.state.showSearch } />

          <Mask show={ this.state.showSearch } autoClose={ this.toggleSearchBar } />

          <Closer show={ this.state.showSearch } autoClose={ this.toggleSearchBar } height="30" width="30" />

        </div>

      </div>

    );
  }
});

module.exports = Navbar;
