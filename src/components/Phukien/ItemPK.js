import React, { Component } from 'react';

class ItemPK extends Component {
    render() {
        return (
            <div className="col-md mb-3 ">
            <div className="card" style={{ width: '12rem' }}>
                <img className="card-img-top" src= {this.props.image} />
                <div className="card-body">
                    <p className="card-title"> {this.props.children}</p>
                    <p style={{color: 'red'}}> {this.props.price}</p>
                   
                </div>
            </div>
        </div>
        );
    }
}

export default ItemPK;