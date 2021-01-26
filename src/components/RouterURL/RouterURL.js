import React, { Component } from 'react';
import { Route, Switch, } from "react-router-dom";
import Cart from '../Cart/Cart';
import Spcasio from '../Casio/Spcasio';
import Casio from '../Casio/Spcasio';
import Checkout from '../Checkout/Checkout';
import Checkout_success from '../Checkout/Checkout_success';
import Tragop from '../Checkout/Tragop';
import Detail from '../Detail/Detail';
import DetailNu from '../Detail/DetailNu';
import Dhdoi from '../DHdoi/Dhdoi';
import Dongho from '../Dongho/Dongho';
import Home from '../Home/Home';
import Lienhe from '../Lienhe/Lienhe';
import New from '../New/New';
import Pagenew from '../Pagenew/Pagenew';
import Pay from '../Pay/Pay';
import Phukien from '../Phukien/Phukien';
import Slider from '../Slider/Slider';
import Spnam from '../Spnam/Spnam';
import Spnu from '../Spnu/Spnu';

class RouterURL extends Component {
    render() {
        return (

            <div>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/spnam">
                        <Spnam></Spnam>
                    </Route>
                    <Route path="/spnu">
                        <Spnu></Spnu>
                    </Route>
                    <Route path="/dhdoi">
                        <Dhdoi></Dhdoi>
                    </Route>
                    <Route path="/phukien">
                        <Phukien/>
                    </Route>
                    <Route path="/casio">
                        <Spcasio/>
                    </Route>
                    <Route path="/dongho">
                        <Dongho/>
                    </Route>
                    <Route path="/Pay">
                            <Pay></Pay>
                    </Route>
                    <Route path="/tragop">
                        <Tragop/>
                    </Route>
                    <Route path="/lienhe">
                        <Lienhe/>
                    </Route>
                    <Route path="/news" children={<Pagenew/>}/>
                    <Route path="/chi-tiet-nam/:pid/:slug.html" children={<Detail />} />
                    <Route path="/chi-tiet-nu/:pid/:slug.html" children={<DetailNu />} />
                    <Route path="/chi-tiet-dhdoi/:pid/:slug.html" children={<DetailNu />} />
                    <Route path="/checkout" children={<Checkout />} />
                    <Route path="/cart" children={<Cart />} />
                    <Route path="/checkout-success">
                        <Checkout_success />
                    </Route>
                  
                    <Route>
                        <Home></Home>
                    </Route>


                </Switch>
            </div>

        );
    }
}

export default RouterURL;