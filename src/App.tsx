import './App.css'
import { Toaster } from 'react-hot-toast'
import Button from './components/general/Button'

function App() {
  return (
    <>
    <Toaster />
    <div className="App">
      <div>
        <Button variant='primary'>Submit</Button>
      </div>
    </div>
    </>
  )
}

export default App
