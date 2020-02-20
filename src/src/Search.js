import React, { Component } from 'react';
import {
    Row,
    Button,
    Input,
    Col,
} from 'antd';

class Search extends Component {
    handleClick() {
        const search = document.getElementById('search').nodeValue;
        this.props.searchItem(search);
    }

    render() {
        return (
            <Row>
                <Col span={12}>
                    <Input id="search" placeholder="请输入" />
                </Col>
                <Col span={12}>
                    <Button
                        type="primary"
                        onClick={() => this.handleClick()}
                        style={{ marginLeft: 10 }}>搜索</Button>
                </Col>
            </Row>
        )
    }
}

export default Search