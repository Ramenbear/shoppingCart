import React from 'react';
import {
    Row,
    Card,
} from 'antd';
import Item from './Item';
import { arrayChunk } from './utils';
function ProductsContainer(props) {
    const {
        products,
        qty,
        addCart,
    } = this.props;
    const goodsList = arrayChunk(products, 3);

    if(products.length !== 0) {
        return (
            <div>
                {
                    goodsList.map((row, rIndex) => (
                        <Row
                            type="flex"
                            key={`row-${rIndex}`}>
                            {
                                row.map((item, index) => (
                                    <Item
                                        addToCart={addCart}
                                        quantity={qty[item.index]}
                                        source={item.path}
                                        key={index}
                                        index={item.index}
                                        name={item.name} />
                                ))
                            }
                        </Row>
                    ))
                }
            </div>
        )
    }
    return (
        <Row>
            <Card style={{ marginTop: 10, width: 920 }}>抱歉,没有找到商品</Card>
        </Row>
    )
}

export default ProductsContainer