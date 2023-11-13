import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>123{data}</div>;
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
