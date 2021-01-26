import React, { Component } from 'react';
import casio from './casio.jpg';
import bentley from './bentley.jpg';
import ogya from './ogya.jpg';
import seiko from './seiko.jpg';
import s from './s.jpg';
import olym from './olym.jpg';
import olympya from './olympya.jpg';
class Thuonghieu extends Component {
    render() {
        return (
            <div className ="container" >
                <h2>Thương hiệu</h2>
                <div class="d-flex justify-content-center">
                    <a href="#"><img src={casio} width="150" height="100"></img></a>
                    <a href="#"><img src={bentley} width="150" height="100"></img></a>
                    <a href="#"><img src={ogya} width="150" height="100"></img></a>
                    <a href="#"><img src={seiko} width="150" height="100"></img></a>
                </div>
                <p></p>
                <div class="d-flex justify-content-center">
                    <a href="#"><img src={ s } width="150" height="100"></img></a>
                    <a href="#"><img src={ olym } width="150" height="100"></img></a>
                    <a href="#"><img src={ olympya } width="150" height="100"></img></a>

                </div>
            </div>
        );
    }
}

export default Thuonghieu;