import './index.css'
import '../src/components/style/card.css'
import {HomeHeader} from './components/header/Header.jsx'
import { MyStack } from './components/props/testprop2.jsx'
import PropBody from './components/props/testprop.jsx'
function App() {

  return (
    <>
      <div>
        <HomeHeader/>
        <h1>Hello World!</h1>
        <h2>This is my First React App..!</h2>
        <main>
          <section id="core-concepts">
            <h2>My Stack</h2>
            <PropBody {...MyStack[0]}/>
            <PropBody {...MyStack[1]}/>
            <PropBody {...MyStack[2]}/>
            <PropBody {...MyStack[3]}/>
          </section>
        </main>
      </div>
    
    </>
  )
}

export default App
