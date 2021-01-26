import React, { Component } from 'react';
import dhnam from './index1.jpg';
class Item extends Component {
    render() {
        return (
            <div>
                <div className="col-md mb-3 ">
                    <div className="col-item">
                        <div className="card" style={{ width: '15rem' }}>
                        <img className="card-img-top" src={dhnam} alt="Card image cap" />
                        <div className="card-body">
                            <p >{this.props.children}</p>
                        </div>
                    </div></div>
                    
                </div>
            </div>
        );
    }
}

export default Item;