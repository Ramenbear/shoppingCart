import React from 'react';
import {
    Card,
} from 'antd';

function EmptyCart() {
    return(
        <Card style={{ marginTop: 10, width: 440 }}>
            <img
                style={{ width: 400 }}
                src="https://gw.alicdn.com/tfs/TB1UmxrwwHqK1RjSZFEXXcGMXXa-658-444.gif"
                    alt="empty-cart" />
            <h3>您的购物车还是空的,快去添加商品吧!</h3>
        </Card>
    )
}

export default EmptyCart;