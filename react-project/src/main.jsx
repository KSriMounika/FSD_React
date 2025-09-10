import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import CLASSCOMPONENT from './classComponent'
// import FUNCTIONCOMPONENT from './FunctionComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    {/* <CLASSCOMPONENT />
    <FUNCTIONCOMPONENT/> */}
  </StrictMode>,
)
