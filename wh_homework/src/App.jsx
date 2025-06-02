import './App.css'
import Greeting from './components/Greeting.jsx'

function App() {

  return (
    <>
      <h1>Components</h1>
      <h2>Component Greeting, props name</h2>
      <Greeting name="Alice" />
      <Greeting name="Андрей" />
      <Greeting name="Алексей" />
    </>
  )
}

export default App
