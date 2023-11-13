import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const value = 'World 123456';
  var text2='test 2';

  /*
  useEffect(() => {
    (async function () {
      //var text3  = await( await fetch(`/api/message`)).json();
      text2  = await( await fetch(`/api/message`)).json();
      //const { text } = await( await fetch(`/api/message`)).json();
      // text2 = text3;
      //alert('text 2: ' + text2);
      //alert ('text 3: ' + text3);
     // alert ('data: ' + data);
      //setData(text);
      setData(text2);
    })();
  });
*/

  useEffect(() => {
    (async function () {
      text2  = await( await fetch(`/api/message`)).json();
      const { text } = await( await fetch(`/api/message`)).json();
      console.log('text: ' + text);
      console.log('text2: ' + text2);
      setData(text);
      //setData(text2);
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
