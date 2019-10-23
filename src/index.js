import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { LangProvider, Tr } from 'react-langapi';

import { LangClient as client } from './langapi/LangClient';

function App() {
  const [language, setLanguage] = useState('es');
  
  useEffect(() => {
    client.setForceLanguage(language);
  }, [language]);

  return <LangProvider client={client}>
    <select onChange={e => setLanguage(e.target.value)} value={language}>
      <option>en</option>
      <option>es</option>
      <option>zh</option>
    </select>
    <h1><Tr>Hello, world!</Tr></h1>
    <h2><Tr variables={{ name: 'Ravern' }}>I am {'{name}'}.</Tr></h2>
  </LangProvider>
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root)
