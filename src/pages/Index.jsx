/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var LetsDJLayout = require('../layouts/LetsDJLayout.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'lets.dj | Be the DJ',
      layout: LetsDJLayout
    };
  },
  render() {

    return (

      <div className="content">

        <div className="container">

            <div className="well well-lg">

              <h3 className="title">What's This?</h3>

              <p>This application is a proof of concept of how anyone at a party / bar can add to a playlist for the night!</p>

            </div>

            <div className="well well-lg">

              <h3 className="title">DJ Time? Who is hosting near you?</h3>

              <br/>

              <div className="list-group">
                <a href="#" className="list-group-item">
                  <h4 className="list-group-item-heading">Awesome Party Near Me!</h4>
                  <p className="list-group-item-text">[password protected]</p>
                  <i className="glyphicon glyphicon-signal pull-right glyphicon-2x"></i>
                </a>
              </div>

              <div className="list-group">
                <a href="#" className="list-group-item">
                  <h4 className="list-group-item-heading">Our party is more fun</h4>
                  <p className="list-group-item-text">[invite-only]</p>
                  <i className="glyphicon glyphicon-signal pull-right glyphicon-2x"></i>
                </a>
              </div>

              </div>

        </div>

      </div>

    );

  }

});

module.exports = HomePage;
