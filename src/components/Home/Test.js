import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{ margin: '150px auto' }}>
                    <h1>Stunning Product Carousel Example</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slider ml-lg-5 ml-md-5 mt-5 py-lg-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="imgContainer ml-lg-n5 mt-lg-0 mt-md-0 ml-md-n5 mt-n5">
                                            <div className="image">
                                                <img src="https://source.unsplash.com/iXFelifXseA/800x525" />
                                            </div>
                                            <div className="image">
                                                <img src="https://source.unsplash.com/iXFelifXseA/800x525" />
                                            </div>
                                            <div className="image">
                                                <img src="https://source.unsplash.com/iXFelifXseA/800x525" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        {/* slider */}
                                        <div id="productSlider" className="carousel slide carousel-fade pr-lg-5 py-lg-0 py-4" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="content">
                                                        <div className="date">
                                                            26 December 2019
                                                        </div>
                                                        <div className="title">
                                                            Lorem ipsum dolor - one
                                                        </div>
                                                        <div className="desc">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit. Error itaque, libero dignissimos nihil aliquam
                                                            eveniet tenetur cupiditate consectetur quod modi
                                                            repellendus veniam, repellat iusto fugiat temporibus
                                                            officia facere nulla nam.
                                                        </div>
                                                        <div className="d-flex justify-content-center justify-content-lg-start">
                                                            <button className="btn readMoreBtn">
                                                                Read More
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="content">
                                                        <div className="date">
                                                            26 December 2019
                                                        </div>
                                                        <div className="title">
                                                            Lorem ipsum dolor - two
                                                        </div>
                                                        <div className="desc">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit. Error itaque, libero dignissimos nihil aliquam
                                                            eveniet tenetur cupiditate consectetur quod modi
                                                            repellendus veniam, repellat iusto fugiat temporibus
                                                            officia facere nulla nam.
                                                         </div>
                                                        <div className="d-flex justify-content-center justify-content-lg-start">
                                                            <button className="btn readMoreBtn">
                                                                Read More
                                                        </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="content">
                                                        <div className="date">
                                                            26 December 2019
                                                        </div>
                                                        <div className="title">
                                                            Lorem ipsum dolor -three
                                                            </div>
                                                        <div className="desc">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit. Error itaque, libero dignissimos nihil aliquam
                                                            eveniet tenetur cupiditate consectetur quod modi
                                                            repellendus veniam, repellat iusto fugiat temporibus
                                                            officia facere nulla nam.
                                                        </div>
                                                        <div className="d-flex justify-content-center justify-content-lg-start">
                                                            <button className="btn readMoreBtn">
                                                                Read More
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* indicators */}
                                            <ol className="carousel-indicators indicators">
                                                <li data-target="#productSlider" data-slide-to={0} className="active" />
                                                <li data-target="#productSlider" data-slide-to={1} />
                                                <li data-target="#productSlider" data-slide-to={2} />
                                            </ol>
                                            {/* indicators */}
                                        </div>
                                        {/* slider */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Test;