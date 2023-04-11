import { useState } from 'react';
import './App.css';
import Myform from './comp';
function App() {
  // var name,age;
  const [x, SetX]=useState('')
  const formValues=(data)=>{
   SetX(data.name)

    console.log(data.name)
    
  }
  return (
    <div>
      <div className="App">
        Fill form
        <Myform fun={formValues}/>
      </div>
      {/* <div>Name:{name}</div>
      <div>Age:{age}</div>
      {name}
      {age} */}
      {/* <div>{()=>formValues()}</div> */}
      <div>{x}</div>
    </div>
  );
}

export default App;
