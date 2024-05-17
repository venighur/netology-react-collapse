import React from 'react';
import './App.css';
import Collapse from './components/Collapse';

function App() {
  return (
    <div className="App">
      <Collapse open={false}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam deserunt doloribus exercitationem fugiat ipsam iure, iusto minima minus natus nobis officia quaerat quod ratione reiciendis reprehenderit tempore tenetur totam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam deserunt doloribus exercitationem fugiat ipsam iure, iusto minima minus natus nobis officia quaerat quod ratione reiciendis reprehenderit tempore tenetur totam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam deserunt doloribus exercitationem fugiat ipsam iure, iusto minima minus natus nobis officia quaerat quod ratione reiciendis reprehenderit tempore tenetur totam!
        </p>
      </Collapse>
    </div>
  );
}

export default App;
