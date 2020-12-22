import React, { useState, useEffect } from 'react'

function FunctionLifeCycle(props) {
  //console.log('init')
  const [total, setTotal] = useState(0)

  // 模擬componentDidMount
  // 第一次呈現時只會執行一次
  // 可確保虛擬DOM元素已呈現在網頁上的一個重要方法
  useEffect(() => {
    console.log('模擬 componentDidMount')
  }, [])

  useEffect(() => {
    document
      .getElementById('clickme')
      .addEventListener('click', function () {
        alert('你好')
      })
  }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
    if (total > 0) {
      console.log('模擬 componentDidUpdate')
    }
  }, [total])

  return (
    <>
      {console.log('render')} Function: LifeCycle
      {/* 利用id或class讓其它的程式獲取dom介面物件 */}
      <button id="clickme">按我一下</button>
      <hr />
      {/* 觀察更新階段使用 */}
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
    </>
  )
}

export default FunctionLifeCycle
