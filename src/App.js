import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const value = 'World 123456';
  var text2='test 2';

  useEffect(() => {
    (async function () {
      var apiText = '';
      apiText  = await( await fetch(`/api/message`)).json();
      console.log('apiText: ' + apiText);
      setData(apiText);
    })();
  },[

  ]);

  return <div>{value} - {data} - {text2}</div>;
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
