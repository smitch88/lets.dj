/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var SearchResults = React.createClass({

  createResultList( object, index ){

    return (

      <div className="list-group">
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">{ object.title }</h4>
          <p className="list-group-item-text">{ object.location }</p>
          <i className="glyphicon glyphicon-signal pull-right glyphicon-2x"></i>
        </a>
      </div>

    );
  },

  render() {

    var hasResults = this.props.items.length ? "container show-results" : "hide";

    return (
      <div style={{ height: "100%" }} className={ hasResults }>
        { this.props.items.slice( 0, this.props.resultCount ).map( this.createResultList ) }
      </div>
    );
  }
});

module.exports = SearchResults;
