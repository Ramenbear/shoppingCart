import React, { Component } from 'react';
import {
    Row,
    Button,
    Card,
} from 'antd';

class Picframe extends Component {
    handleClick() {
        this.props.addToCart(this.props.index);
    }

    render() {
        const {
            name,
            index,
            source,
            quantity,
        } = this.props;
    
        const popid = name + index;
        return (
            <Card
                bodyStyle={{ padding: 0 }}
                style={{
                    width: 302,
                    marginTop: 10,
                    marginRight: 10
                }}>
                <Row
                    type="flex"
                    align="middle"
                    justify="center"
                    style={{ marginBottom: 10, height: 250 }}>
                    <img
                        src={source}
                        style={{ cursor: 'pointer', width: 300 }}
                        data-toggle="modal"
                        data-target={`#${popid}`} 
                        alt=""/>
                </Row>
                <Row
                    style={{ margin: 10 }}>
                    <h3>{name}</h3>
                    <h4>剩余库存: {quantity}</h4>
                </Row>
                <Row
                    align="middle"
                    justify="center"
                    type="flex"
                    style={{ marginbottom: 10 }}>
                    <Button
                        onClick={() => this.handleClick()}
                        type="primary"></Button>
                </Row>
            </Card>
        )
    }
}

export default Picframe