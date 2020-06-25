import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import React from 'react'

import './App.css';

class Icons extends React.Component {

  render() {
    return (
      <>
    <div className="icons-list">
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </div>
      </>
    );
  }
}

export default Icons