import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './component/list/List'
import Chat from './component/chat/Chat'
import Detail from './component/detail/Detail'

function App() {

  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App
