import React from 'react'

function About(props) {
  // 從App元件得到登入狀態，解構出來
  const { isAuth } = props
  return (
    <>
      <h1>關於我們</h1>
      {isAuth ? '會員登入, XXX你好' : '未登入'}
    </>
  )
}

export default About
