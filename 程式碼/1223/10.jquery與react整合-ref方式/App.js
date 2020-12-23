import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
// 要先安裝jquery 模組
// yarn add jquery或npm instal jquery
import $ from 'jquery'

function App() {
  const [textdata, setTextData] = useState('hello')

  // 使用ref
  const buttonEl = useRef(null)

  // 模擬componentDidMount
  useEffect(() => {
    // jQuery程式碼需要寫在這裡
    $('#one').click(() =>
      alert('(id)textdata is ' + textdata)
    )
  }, [])

  // 模擬componentDidMount
  useEffect(() => {
    // jQuery程式碼需要寫在這裡
    // 先用$函式轉為jquery使用的DOM擴充元素，才能使用jquery的方法
    $(buttonEl.current).click(() =>
      alert('(ref)textdata is ' + textdata)
    )
  }, [])

  return (
    <>
      <MyNavbar />
      <MainContent>
        <button id="one">click me(使用id)</button>
        <button ref={buttonEl}>click me(使用ref)</button>

        <button onClick={() => setTextData('你好')}>
          change textdata to '你好'
        </button>
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
