import React, {useState} from 'react';
import './App.css';
import Roi from './Roi';
import Modal from 'react-modal/lib/components/Modal';

function App() {
const [isOpen, isClosed] = useState(false)
  return (

  
    <div className="App">
     
       <button className='click-here' onClick={() => isClosed(true)}>Click here</button>
      <Modal isOpen={isOpen}>
      <button className='x' onClick={() => isClosed(false)}>X</button>
    <Roi />
    <div>
      
    </div>
    </Modal>

   
      
          </div>
  );
}

export default App;

