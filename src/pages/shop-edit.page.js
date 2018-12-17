import React, { Component } from 'react';
import ShopEditContainer from '../containers/shops/shop-edit.container';

class ShopEditPage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Edit Shop</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ShopEditContainer match={this.props.match} ></ShopEditContainer>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ShopEditPage;