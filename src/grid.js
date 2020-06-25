import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react';
import { Row, Col } from 'antd';

import './App.css';

class Grid extends React.Component {

  render() {
    return (
      <>
        <Row style = {{background:'blue'}}>
      <Col span={24}>col</Col>
    </Row>
    <Row style = {{background:'red'}}>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row style = {{background:'green'}}>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row style = {{background:'yellow'}} >
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
      </>
    );
  }
}

export default Grid