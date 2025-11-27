import LeftPanel from "./functionality.jsx"
import BlankPage from "./blankpage.jsx"

import './styles/app.css'
function App() {

  return (
    <>
    <div className="wholeasspage">
      
      <h1 className="heading">CV Generator</h1>

      <div className="components">
        <LeftPanel></LeftPanel>
        <BlankPage/>
      </div>
    </div>

      
    </>
  )
}

export default App
