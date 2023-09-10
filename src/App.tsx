import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {

  return (

    <div className='bg-[#011627] font-fira-code'>
      <BrowserRouter>
          <Router />
        </BrowserRouter>
    </div>
  
  )
}

export default App
