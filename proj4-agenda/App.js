import './App.css';
import Logo from './components/Logo.js'
import TaskList from './components/TaskList.js'

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='task-list-main'>
        <h1 className='my-tasks'>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
