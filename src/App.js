import {useState} from 'react'
import './App.css';

function App() {
const [ color , setColor] = useState('red')
const [disable , setDisable] = useState(false)
const bgColor = color === 'red' ? 'blue' : 'red'

  return (
    <div className='App'>
      <button  style={{"backgroundColor":color}} onClick = {() => setColor(bgColor)} disabled={disable? true : false}>Click to Change Color to {bgColor}</button>
      <input type="checkbox"  onClick={()=> setDisable(!disable)}/>
    </div>
    
  );
}

export default App;
