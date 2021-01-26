import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="row">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">Primary</button>
              <button type="button" className="btn btn-primary 
                      dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Home</a>
                <a className="dropdown-item" href="#">About Us</a>
                <a className="dropdown-item" href="#">Contact Us</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-secondary">Secondary</button>
              <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Home</a>
                <a className="dropdown-item" href="#">About Us</a>
                <a className="dropdown-item" href="#">Contact Us</a>
              </div>
            </div>
            <div className="btn-group">
              <button type=" button" className="btn btn-success">Success</button>
              <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Home</a>
                <a className="dropdown-item" href="#">About Us</a>
                <a className="dropdown-item" href="#">Contact Us</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-info">Info</button>
              <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Home</a>
                <a className="dropdown-item" href="#">About Us</a>
                <a className="dropdown-item" href="#">Contact Us</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-warning">Warning</button>
              <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Home</a>
                <a className="dropdown-item" href="#">About Us</a>
                <a className="dropdown-item" href="#">Contact Us</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-danger">Danger</button>
              <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Home</a>
                <a className="dropdown-item" href="#">About Us</a>
                <a className="dropdown-item" href="#">Contact Us</a>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Filter;