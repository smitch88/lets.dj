/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');
var Well = require('react-bootstrap/Well');
var ListGroup = require('react-bootstrap/ListGroup');
var ListGroupItem = require('react-bootstrap/ListGroupItem');
var Label = require('react-bootstrap/Label');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'lets.dj | Be the DJ',
      layout: DefaultLayout
    };
  },
  render() {
    return (
      <div className="content">
        <div className="container">
            <Well bsSize="large">
              <h2 className="title">What's This?</h2>
              <p>This application is a proof of concept of how anyone at a party / bar can add to a playlist for the night!</p>
            </Well>
          <Well bsSize="large">
            <h2 className="title">DJ Time?</h2>
            <ListGroup>
              <ListGroupItem header="Awesome Party Near Me!" href="#">[password protected]
                <i className="glyphicon glyphicon-signal pull-right glyphicon-2x"></i>
              </ListGroupItem>
              <ListGroupItem header="Our party is more fun" href="#">[invite-only]
                <i className="glyphicon glyphicon-signal pull-right glyphicon-2x"></i>
              </ListGroupItem>
            </ListGroup></Well>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
