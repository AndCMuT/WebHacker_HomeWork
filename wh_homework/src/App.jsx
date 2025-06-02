import './App.css'
import Greeting from './components/Greeting.jsx'
import LoginStatus from './components/LoginStatus.jsx'
import UserProfile from './components/UserProfile.jsx'

function App() {

  return (
    <>
      <h1>Components</h1>
      <h2>Component Greeting, props name</h2>
      <Greeting name="Alice" />
      <Greeting name="Андрей" />
      <Greeting name="Алексей" />
      <h2>Name and age</h2>
      <UserProfile name="Андрей" age="35" />
      <UserProfile name="Юля" age="31" />
      <UserProfile name="Максим" age="24" />
      <h2>Is login?</h2>
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />
    </>
  )
}

export default App
