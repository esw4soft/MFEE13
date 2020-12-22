import React, { useState } from 'react'
// import ClassLifeCycle from './components/ClassLifeCycle'
import FunctionLifeCycle from './components/FunctionLifeCycle'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>
        切換Function元件
      </button>
      <hr />
      {show && <FunctionLifeCycle />}
    </>
  )
}

export default App
