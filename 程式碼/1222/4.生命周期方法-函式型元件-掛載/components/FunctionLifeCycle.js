import React, { useState, useEffect } from 'react'

function FunctionLifeCycle(props) {
  console.log('init')
  const [total, setTotal] = useState(0)

  // 模擬componentDidMount
  // 第一次呈現時只會執行一次
  // 可確保虛擬DOM元素已呈現在網頁上的一個重要方法
  useEffect(() => {
    console.log('模擬 componentDidMount')
  }, [])

  return <>{console.log('render')} Function: LifeCycle</>
}

export default FunctionLifeCycle
