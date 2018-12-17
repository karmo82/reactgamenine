import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as shopActions from '../../actions/shop.action';

class ShopEditContainer extends Component {

    componentDidMount() {
        console.log("did mount");
        console.log(this.props);
        this.props.loadShop(this.props.match.params.id);
    }
    

    render() {
        return (
            <div>
                {this.props.entity ? <div> {this.props.entity.nome} </div> : null} 
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadShop: (id) => dispatch(shopActions.getShop(id))
    }
}

function mapStateToProps(state){
    return {
        entity: state.shops.entity
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopEditContainer);