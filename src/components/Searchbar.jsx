/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Spinner = require('react-spinkit');
var SearchResults = require('../components/SearchResults.jsx');

var get = function(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();

    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

var Searchbar = React.createClass({

  getDefaultProps() {
    return {
      resultCount: 20,
      timeout: null,
      source: "test.json"
    };
  },

  getInitialState() {
    return {
      criteria: "",
      loading: false,
      searchItems: []
    };
  },

  handleSearchError(error){

    console.error("Failed!", error);

    return;
  },

  handleSearchState( response ){

    this.setState({
      loading: false,
      searchItems: JSON.parse(response).parties
    });

    return;
  },

  doSearch( value ){

    get( this.props.source ).then( this.handleSearchState, this.handleSearchError );

    return;
  },

  processSearchResults( e ){

    var incomingSearchCriteria = e.target.value;

    if ( this.props.timeout ) clearTimeout( this.props.timeout );

    if( incomingSearchCriteria.length > 0 ) {

      this.setState({criteria: incomingSearchCriteria, loading: true, searchItems: [] });

      this.props.timeout = setTimeout(this.doSearch.bind(this, incomingSearchCriteria), 300);

    } else {

      this.setState({ criteria: "", loading: false, searchItems: [] });

    }

    return;

  },

  render() {

    var isShowing = typeof this.props.show !== 'undefined' && this.props.show;
    var searchResultsHeader = "Trying to find a host? Enter a location...";

    if( this.state.criteria.length > 0 ){

      searchResultsHeader = this.state.loading ?
                              <div id="searching-indicator">
                                <p>Searching...</p>
                                <Spinner spinnerName='three-bounce' />
                              </div>
                            : "Showing " + this.props.resultCount + " out of " + this.state.searchItems.length + " Results";
    }

    return (

      <div id="search-bar" style={{ display: isShowing ? "block" : "none" }}>

        <div id="search-form-container">

          <h2 className="sr-only">Search bar</h2>

          <form id="search-form">

            <label htmlFor="search-input" className="hidden-xs hidden-sm">Find A Party</label>

            <input id="search-input" type="text" onChange={ this.processSearchResults }
              value={ this.state.criteria } name="criteria" className="form-control input-lg" />

            <p className="help-block">Ex. "My Location" or any address</p>

          </form>

        </div>

        <div id="search-results-container" style={ { height: "calc(100% - 100px)" }}>

            <div id="search-header">
              <h2 id="search-header-title">{ searchResultsHeader }</h2>
            </div>

            <div id="search-results-list">
              <SearchResults items={ this.state.searchItems } resultCount={ this.props.resultCount } />
            </div>

        </div>

      </div>

      );
  }

});

module.exports = Searchbar;
