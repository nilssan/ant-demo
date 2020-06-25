import React, {useState} from 'react';
// import { Button, DatePicker, message } from 'antd';
import { DatePicker, message, Alert, Button } from 'antd';
import ButtonPage from './button';
import IconPage from './icons';
import DividerPage from './devider';
import Grid from './grid';
import Layoutpage from './layout';
import Steps from './steps';

import './App.css';

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    // <div style={{ width: 400, margin: '100px auto' }}>
    <div>
      {/* <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        
      </div> */}
      {/* <ButtonPage/> */}
      {/* <IconPage /> */}
      {/* <DividerPage /> */}
      {/* <Grid/> */}
      {/* <Layoutpage/> */}
      <Steps/>
    </div>
  );
}

export default App;
