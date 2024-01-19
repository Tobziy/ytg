import './index.css'
import {HomeHeader} from './components/header/Header.jsx'
import {DaddyProp} from './components/props/testprop1.jsx'
function App() {

  return (
    <>
      <div>
        <HomeHeader/>
        <h1>Hello World!</h1>
        <h2>This is my First React App..!</h2>
        <DaddyProp/>
      </div>
    
    </>
  )
}

export default App
