import React, { Component } from 'react';

class Item_nb extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-3 col-md-6">
                    <div className="card" style={{ width: '15rem' }}>
                        <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                        <div className="card-body">
                            <p> {this.props.children}</p>
                            <p style={{ color: 'red' }}> {this.props.price}</p>
                          
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Item_nb;