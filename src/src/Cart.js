import React, { Component } from 'react';
import {
    Row,
    Button,
    Card,
} from 'antd';
import EmptyCart from './EmptyCart'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCart: false,
            cart: [],
            viewChanged: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleClick() {
        setTimeout(() => {
            this.setState({
                showCart: !this.state.showCart
            })
        }, 0)
    }

    handleRemove(product, index) {
        this.props.handleRemove(product, index);
        setTimeout(() => {
            this.setState({
                showCart: !this.state.showCart
            })
        }, 100);
        setTimeout(() => {
            this.setState({
                showCart: !this.state.showCart
            })
        }, 200)
    }

    render() {
        const {
            showCart
        } = this.state;
        const {
            selectProducts,
            qty,
            pModel,
        } = this.props;
        let cartItems;
        const len = selectProducts.length;
        let totalPrice = 0;
        for(let i = 0; i < qty.length.length; i++){
            totalPrice += pModel[i].price * qty[i];
        }
        if(len !== 0){
            cartItems = qty.map((product, index) => {
                if(product === 0){
                    return null;
                }
                return (
                    <Card key={pModel[index].name}>
                        <Row type="flex">
                            <img
                                style={{ cursor: 'pointer', width: 300, heught: 250 }}
                                src={pModel[index].path} />
                            <div style={{ marginLeft: 10 }}>
                                <p>标题: {pModel[index].name}</p>
                                <p>价格: {pModel[index].price}</p>
                                <p>数量:  :{product}</p>
                                <p>共计:{product * pModel[index].price}</p>
                                <Button
                                    style={{ marginTop: 10 }}
                                    onClick={() => this.handleRemove(product, index)}>删除</Button>
                            </div>
                        </Row>
                    </Card>
                )
            });
    }
    return (
        <div style={{ padding: '100px 50px 10px'}}>
            <Button
                id="popbtn"
                type="Primary"
                className="btn btn-success"
                onClick={() => this.handleClick()}>我的购物车</Button>
            <Row>
                {
                    showCart && len === 0 ? <EmptyCart /> : null
                }
                {
                    showCart && len !== 0 ? <div>
                    <h3>共计: {totalPrice}</h3>
                    <div>{cartItems}</div>
                    </div> : null
                }
            </Row>
        </div>
    )
}
}

export default Cart