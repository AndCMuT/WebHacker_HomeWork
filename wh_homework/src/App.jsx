import './App.css'
import Button from './components/Button.jsx'
import Greeting from './components/Greeting.jsx'
import LoginStatus from './components/LoginStatus.jsx'
import Notification from './components/Notification.jsx'
import UserInfo from './components/UserInfo.jsx'
import UserProfile from './components/UserProfile.jsx'
import TaskList from './components/TaskList.jsx'
import Article from './components/Article.jsx'
import ColoredText from './components/ColoredText.jsx'
import SimpleList from './components/SimpleList.jsx'
import Header from './components/HeaderFooter.jsx'
import { Footer } from './components/HeaderFooter.jsx'
import UserCard from './components/UserCard.jsx'
import GreetingClass from './components/GreetingClass.jsx'
import ToggleText from './components/ToggleText.jsx'
import Counter from './components/Counter.jsx'
import ContactForm from './components/ContactForm.jsx'

function App() {

  const tasks = ["Learn JSX", "Build a React app", "Explore hooks"];

  return (
    <>
      <Header />
      <h1>Components practice</h1>
      <h2>Component Greeting, props name (task 1)</h2>
        <Greeting name="Alice" />
        <Greeting name="Андрей" />
        <Greeting name="Алексей" />
      <h2>Name and age (task 2)</h2>
        <UserProfile name="Андрей" age="35" />
        <UserProfile name="Юля" age="31" />
        <UserProfile name="Максим" age="24" />
      <h2>Is login? (task 3)</h2>

        <LoginStatus isLoggedIn={true} />
        <LoginStatus isLoggedIn={false} />

      <h2>Button (task 4)</h2>

        <Button />

      <h2>Notification (task 5)</h2>

        <Notification type="success"/>
        <Notification />
        <Notification type="error"/>
        <Notification type="warning"/>

      <h2>Is Administrator? (task 6)</h2>

        <UserInfo isAdmin={false} />
        <UserInfo isAdmin={true} />

      <h2>Task list (task 7)</h2>

        <TaskList tasks={tasks} />

      <h2>Article (task 8)</h2>

        <Article title="JSX Overview" content="JSX is a syntax extension for JavaScript." />
        <Article title="React Components" content="React components let you split the UI into independent parts." />

      <h2>Colored text (task 9)</h2>

        <ColoredText color="blue" />
        <ColoredText color="red" />
        <ColoredText color="green" />

      <h2>Simple list (task 10)</h2>

        <SimpleList items={['Apple', 'Banana', 'Cherry']} />

      <h2>Functional component</h2>

        <UserCard name='Григорий' age={40} />
        <UserCard name='Варфаламей' age={114} />
        <UserCard name='Никита' age={15} />

      <h2>Class component</h2>

        <GreetingClass name="Альберт" />
        <GreetingClass name="Денис" />

      <h2>Toggle text</h2>

        <ToggleText />
        
      <h2>Counter</h2>

        <Counter />

      <h2>Contact form</h2>
        <ContactForm />
      <Footer />
    </>
  )
}

export default App
