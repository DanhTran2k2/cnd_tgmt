import React, { Component } from 'react';

class ItemCasio extends Component {
    render() {
        return (
            <div className="col-md mb-3 ">
            <div className="card" style={{ width: '12rem' }}>
                <img className="card-img-top" src= {this.props.image} />
                <span className="tagsale">SALE</span>
                <div className="card-body">
                    <p> {this.props.children}</p>
                    <p style={{color: 'red'}}> {this.props.price}</p>
                    <div>
                        <span className="fa fa-star checked" style={{fontSize: '14px'}} />
                        <span className="fa fa-star checked" style={{fontSize: '14px'}}/>
                        <span className="fa fa-star checked" style={{fontSize: '14px'}}/>
                        <span className="fa fa-star checked" style={{fontSize: '14px'}}/>
                        <span className="fa fa-star" style={{fontSize: '14px'}}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ItemCasio;