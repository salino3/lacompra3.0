import React, { Fragment } from 'react';
import './App.css';
import Carlos from './components/Carlos';

function App() {
  return (
    <Fragment>
      <h1 className='container'>Hola</h1>
      <Carlos textoP={''} textoh5={"Bien venido en la fruteria"} />
    </Fragment>
  );
}

export default App;
