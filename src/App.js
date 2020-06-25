import React, {useState} from 'react';
// import { Button, DatePicker, message } from 'antd';
import { DatePicker, message, Alert } from 'antd';

import './App.css';

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        {/* Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'} */}
        <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        
      </div>
    </div>
  );
}

export default App;
