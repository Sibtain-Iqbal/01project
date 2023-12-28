import { useState } from 'react'

import Navbar from './Components/Navbar'
import './App.css'
import TextForm from './Components/TextForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

<Navbar about ="About Us" title= 'TextUtils'/>
<div className="container my-3">
<TextForm   heading="Enter the text to utilixe" />
</div>
















{/* <Navbar   /> */}

    </>
  )
}

export default App
