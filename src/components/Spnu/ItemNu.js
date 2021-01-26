import React, { Component } from 'react';
import './Product.css';
class ItemNu extends Component {
    render() {
        return (
            <div className="col-md mb-3 ">
                <div className="card" style={{ width: '12rem' }}>
                    <img className="card-img-top" src={this.props.image} />
                    <span className="tagsale">SALE</span>
                    <div className="card-body">
                        <p> {this.props.children}</p>
                        <p style={{ color: 'red' }}> {this.props.price}</p>
                        <div>
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star" />
                        </div>    
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemNu;