import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const value = 'World 123456';
  useEffect(() => {
    (async function () {
      const { text } = await( await fetch('/api/message')).json();
      //value = text;
      setData(text);
    })();
  });

  return <div>Test Api Data: {value} - {data}</div>;
}

export default App;


/*

import React from 'react';

function App() {
  const value = 'World 123456';
  return <div>Hello {value}</div>;
}

export default App;

*/
