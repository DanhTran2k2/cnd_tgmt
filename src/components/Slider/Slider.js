import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import sl1 from './sl1.png';
import banner from './banner.jpg';
import sl3 from './sl.jpg';
class Slider extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img c src={sl3} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    }
}

export default Slider;